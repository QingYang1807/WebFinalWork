//-- jquery
(function(a, b) {
	function cv(a) {
		return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
	}

	function cs(a) {
		if (!cg[a]) {
			var b = c.body,
				d = f("<" + a + ">").appendTo(b),
				e = d.css("display");
			d.remove();
			if (e === "none" || e === "") {
				ch || (ch = c.createElement("iframe"), ch.frameBorder = ch.width = ch.height = 0), b.appendChild(ch);
				if (!ci || !ch.createElement) ci = (ch.contentWindow || ch.contentDocument).document, ci.write((c.compatMode ===
					"CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), ci.close();
				d = ci.createElement(a), ci.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ch)
			}
			cg[a] = e
		}
		return cg[a]
	}

	function cr(a, b) {
		var c = {};
		f.each(cm.concat.apply([], cm.slice(0, b)), function() {
			c[this] = a
		});
		return c
	}

	function cq() {
		cn = b
	}

	function cp() {
		setTimeout(cq, 0);
		return cn = f.now()
	}

	function cf() {
		try {
			return new a.ActiveXObject("Microsoft.XMLHTTP")
		} catch (b) {}
	}

	function ce() {
		try {
			return new a.XMLHttpRequest
		} catch (b) {}
	}

	function b$(a, c) {
		a.dataFilter && (c = a.dataFilter(c, a.dataType));
		var d = a.dataTypes,
			e = {},
			g, h, i = d.length,
			j, k = d[0],
			l, m, n, o, p;
		for (g = 1; g < i; g++) {
			if (g === 1)
				for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
			l = k, k = d[g];
			if (k === "*") k = l;
			else if (l !== "*" && l !== k) {
				m = l + " " + k, n = e[m] || e["* " + k];
				if (!n) {
					p = b;
					for (o in e) {
						j = o.split(" ");
						if (j[0] === l || j[0] === "*") {
							p = e[j[1] + " " + k];
							if (p) {
								o = e[o], o === !0 ? n = p : p === !0 && (n = o);
								break
							}
						}
					}
				}!n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
			}
		}
		return c
	}

	function bZ(a, c, d) {
		var e = a.contents,
			f = a.dataTypes,
			g = a.responseFields,
			h, i, j, k;
		for (i in g) i in d && (c[g[i]] = d[i]);
		while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
		if (h)
			for (i in e)
				if (e[i] && e[i].test(h)) {
					f.unshift(i);
					break
				} if (f[0] in d) j = f[0];
		else {
			for (i in d) {
				if (!f[0] || a.converters[i + " " + f[0]]) {
					j = i;
					break
				}
				k || (k = i)
			}
			j = j || k
		}
		if (j) {
			j !== f[0] && f.unshift(j);
			return d[j]
		}
	}

	function bY(a, b, c, d) {
		if (f.isArray(b)) f.each(b, function(b, e) {
			c || bC.test(a) ? d(a, e) : bY(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
		});
		else if (!c && b != null && typeof b == "object")
			for (var e in b) bY(a + "[" + e + "]", b[e], c, d);
		else d(a, b)
	}

	function bX(a, c, d, e, f, g) {
		f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
		var h = a[f],
			i = 0,
			j = h ? h.length : 0,
			k = a === bR,
			l;
		for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(
			l), l = bX(a, c, d, e, l, g)));
		(k || !l) && !g["*"] && (l = bX(a, c, d, e, "*", g));
		return l
	}

	function bW(a) {
		return function(b, c) {
			typeof b != "string" && (c = b, b = "*");
			if (f.isFunction(c)) {
				var d = b.toLowerCase().split(bN),
					e = 0,
					g = d.length,
					h, i, j;
				for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ?
					"unshift" : "push"](c)
			}
		}
	}

	function bA(a, b, c) {
		var d = b === "width" ? a.offsetWidth : a.offsetHeight,
			e = b === "width" ? bv : bw;
		if (d > 0) {
			c !== "border" && f.each(e, function() {
				c || (d -= parseFloat(f.css(a, "padding" + this)) || 0), c === "margin" ? d += parseFloat(f.css(a, c + this)) ||
					0 : d -= parseFloat(f.css(a, "border" + this + "Width")) || 0
			});
			return d + "px"
		}
		d = bx(a, b, b);
		if (d < 0 || d == null) d = a.style[b] || 0;
		d = parseFloat(d) || 0, c && f.each(e, function() {
			d += parseFloat(f.css(a, "padding" + this)) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + this +
				"Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + this)) || 0)
		});
		return d + "px"
	}

	function bm(a, b) {
		b.src ? f.ajax({
				url: b.src,
				async: !1,
				dataType: "script"
			}) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(be, "/*$0*/")), b.parentNode && b.parentNode
			.removeChild(b)
	}

	function bl(a) {
		f.nodeName(a, "input") ? bk(a) : "getElementsByTagName" in a && f.grep(a.getElementsByTagName("input"), bk)
	}

	function bk(a) {
		if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
	}

	function bj(a) {
		return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") :
			[]
	}

	function bi(a, b) {
		var c;
		if (b.nodeType === 1) {
			b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
			if (c === "object") b.outerHTML = a.outerHTML;
			else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
				if (c === "option") b.selected = a.defaultSelected;
				else if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
			} else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
			b.removeAttribute(f.expando)
		}
	}

	function bh(a, b) {
		if (b.nodeType === 1 && !!f.hasData(a)) {
			var c = f.expando,
				d = f.data(a),
				e = f.data(b, d);
			if (d = d[c]) {
				var g = d.events;
				e = e[c] = f.extend({}, d);
				if (g) {
					delete e.handle, e.events = {};
					for (var h in g)
						for (var i = 0, j = g[h].length; i < j; i++) f.event.add(b, h + (g[h][i].namespace ? "." : "") + g[h][i].namespace,
							g[h][i], g[h][i].data)
				}
			}
		}
	}

	function bg(a, b) {
		return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement(
			"tbody")) : a
	}

	function W(a, b, c) {
		b = b || 0;
		if (f.isFunction(b)) return f.grep(a, function(a, d) {
			var e = !!b.call(a, d, a);
			return e === c
		});
		if (b.nodeType) return f.grep(a, function(a, d) {
			return a === b === c
		});
		if (typeof b == "string") {
			var d = f.grep(a, function(a) {
				return a.nodeType === 1
			});
			if (R.test(b)) return f.filter(b, d, !c);
			b = f.filter(b, d)
		}
		return f.grep(a, function(a, d) {
			return f.inArray(a, b) >= 0 === c
		})
	}

	function V(a) {
		return !a || !a.parentNode || a.parentNode.nodeType === 11
	}

	function N(a, b) {
		return (a && a !== "*" ? a + "." : "") + b.replace(z, "`").replace(A, "&")
	}

	function M(a) {
		var b, c, d, e, g, h, i, j, k, l, m, n, o, p = [],
			q = [],
			r = f._data(this, "events");
		if (!(a.liveFired === this || !r || !r.live || a.target.disabled || a.button && a.type === "click")) {
			a.namespace && (n = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), a.liveFired =
				this;
			var s = r.live.slice(0);
			for (i = 0; i < s.length; i++) g = s[i], g.origType.replace(x, "") === a.type ? q.push(g.selector) : s.splice(i--,
				1);
			e = f(a.target).closest(q, a.currentTarget);
			for (j = 0, k = e.length; j < k; j++) {
				m = e[j];
				for (i = 0; i < s.length; i++) {
					g = s[i];
					if (m.selector === g.selector && (!n || n.test(g.namespace)) && !m.elem.disabled) {
						h = m.elem, d = null;
						if (g.preType === "mouseenter" || g.preType === "mouseleave") a.type = g.preType, d = f(a.relatedTarget).closest(
							g.selector)[0], d && f.contains(h, d) && (d = h);
						(!d || d !== h) && p.push({
							elem: h,
							handleObj: g,
							level: m.level
						})
					}
				}
			}
			for (j = 0, k = p.length; j < k; j++) {
				e = p[j];
				if (c && e.level > c) break;
				a.currentTarget = e.elem, a.data = e.handleObj.data, a.handleObj = e.handleObj, o = e.handleObj.origHandler.apply(
					e.elem, arguments);
				if (o === !1 || a.isPropagationStopped()) {
					c = e.level, o === !1 && (b = !1);
					if (a.isImmediatePropagationStopped()) break
				}
			}
			return b
		}
	}

	function K(a, c, d) {
		var e = f.extend({}, d[0]);
		e.type = a, e.originalEvent = {}, e.liveFired = b, f.event.handle.call(c, e), e.isDefaultPrevented() && d[0].preventDefault()
	}

	function E() {
		return !0
	}

	function D() {
		return !1
	}

	function m(a, c, d) {
		var e = c + "defer",
			g = c + "queue",
			h = c + "mark",
			i = f.data(a, e, b, !0);
		i && (d === "queue" || !f.data(a, g, b, !0)) && (d === "mark" || !f.data(a, h, b, !0)) && setTimeout(function() {
			!f.data(a, g, b, !0) && !f.data(a, h, b, !0) && (f.removeData(a, e, !0), i.resolve())
		}, 0)
	}

	function l(a) {
		for (var b in a)
			if (b !== "toJSON") return !1;
		return !0
	}

	function k(a, c, d) {
		if (d === b && a.nodeType === 1) {
			var e = "data-" + c.replace(j, "$1-$2").toLowerCase();
			d = a.getAttribute(e);
			if (typeof d == "string") {
				try {
					d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNaN(d) ? i.test(d) ? f.parseJSON(d) : d :
						parseFloat(d)
				} catch (g) {}
				f.data(a, c, d)
			} else d = b
		}
		return d
	}
	var c = a.document,
		d = a.navigator,
		e = a.location,
		f = function() {
			function J() {
				if (!e.isReady) {
					try {
						c.documentElement.doScroll("left")
					} catch (a) {
						setTimeout(J, 1);
						return
					}
					e.ready()
				}
			}
			var e = function(a, b) {
					return new e.fn.init(a, b, h)
				},
				f = a.jQuery,
				g = a.$,
				h, i = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
				j = /\S/,
				k = /^\s+/,
				l = /\s+$/,
				m = /\d/,
				n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
				o = /^[\],:{}\s]*$/,
				p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				r = /(?:^|:|,)(?:\s*\[)+/g,
				s = /(webkit)[ \/]([\w.]+)/,
				t = /(opera)(?:.*version)?[ \/]([\w.]+)/,
				u = /(msie) ([\w.]+)/,
				v = /(mozilla)(?:.*? rv:([\w.]+))?/,
				w = /-([a-z])/ig,
				x = function(a, b) {
					return b.toUpperCase()
				},
				y = d.userAgent,
				z, A, B, C = Object.prototype.toString,
				D = Object.prototype.hasOwnProperty,
				E = Array.prototype.push,
				F = Array.prototype.slice,
				G = String.prototype.trim,
				H = Array.prototype.indexOf,
				I = {};
			e.fn = e.prototype = {
					constructor: e,
					init: function(a, d, f) {
						var g, h, j, k;
						if (!a) return this;
						if (a.nodeType) {
							this.context = this[0] = a, this.length = 1;
							return this
						}
						if (a === "body" && !d && c.body) {
							this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
							return this
						}
						if (typeof a == "string") {
							a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
							if (g && (g[1] || !d)) {
								if (g[1]) {
									d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = n.exec(a), j ? e.isPlainObject(d) ? (a = [
										c.createElement(j[1])
									], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ?
										e.clone(j.fragment) : j.fragment).childNodes);
									return e.merge(this, a)
								}
								h = c.getElementById(g[2]);
								if (h && h.parentNode) {
									if (h.id !== g[2]) return f.find(a);
									this.length = 1, this[0] = h
								}
								this.context = c, this.selector = a;
								return this
							}
							return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
						}
						if (e.isFunction(a)) return f.ready(a);
						a.selector !== b && (this.selector = a.selector, this.context = a.context);
						return e.makeArray(a, this)
					},
					selector: "",
					jquery: "1.6.2",
					length: 0,
					size: function() {
						return this.length
					},
					toArray: function() {
						return F.call(this, 0)
					},
					get: function(a) {
						return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
					},
					pushStack: function(a, b, c) {
						var d = this.constructor();
						e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector =
							this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
						return d
					},
					each: function(a, b) {
						return e.each(this, a, b)
					},
					ready: function(a) {
						e.bindReady(), A.done(a);
						return this
					},
					eq: function(a) {
						return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
					},
					first: function() {
						return this.eq(0)
					},
					last: function() {
						return this.eq(-1)
					},
					slice: function() {
						return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
					},
					map: function(a) {
						return this.pushStack(e.map(this, function(b, c) {
							return a.call(b, c, b)
						}))
					},
					end: function() {
						return this.prevObject || this.constructor(null)
					},
					push: E,
					sort: [].sort,
					splice: [].splice
				}, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function() {
					var a, c, d, f, g, h, i = arguments[0] || {},
						j = 1,
						k = arguments.length,
						l = !1;
					typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}),
						k === j && (i = this, --j);
					for (; j < k; j++)
						if ((a = arguments[j]) != null)
							for (c in a) {
								d = i[c], f = a[c];
								if (i === f) continue;
								l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d &&
									e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
							}
					return i
				}, e.extend({
					noConflict: function(b) {
						a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
						return e
					},
					isReady: !1,
					readyWait: 1,
					holdReady: function(a) {
						a ? e.readyWait++ : e.ready(!0)
					},
					ready: function(a) {
						if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
							if (!c.body) return setTimeout(e.ready, 1);
							e.isReady = !0;
							if (a !== !0 && --e.readyWait > 0) return;
							A.resolveWith(c, [e]), e.fn.trigger && e(c).trigger("ready").unbind("ready")
						}
					},
					bindReady: function() {
						if (!A) {
							A = e._Deferred();
							if (c.readyState === "complete") return setTimeout(e.ready, 1);
							if (c.addEventListener) c.addEventListener("DOMContentLoaded", B, !1), a.addEventListener("load", e.ready, !1);
							else if (c.attachEvent) {
								c.attachEvent("onreadystatechange", B), a.attachEvent("onload", e.ready);
								var b = !1;
								try {
									b = a.frameElement == null
								} catch (d) {}
								c.documentElement.doScroll && b && J()
							}
						}
					},
					isFunction: function(a) {
						return e.type(a) === "function"
					},
					isArray: Array.isArray || function(a) {
						return e.type(a) === "array"
					},
					isWindow: function(a) {
						return a && typeof a == "object" && "setInterval" in a
					},
					isNaN: function(a) {
						return a == null || !m.test(a) || isNaN(a)
					},
					type: function(a) {
						return a == null ? String(a) : I[C.call(a)] || "object"
					},
					isPlainObject: function(a) {
						if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
						if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1;
						var c;
						for (c in a);
						return c === b || D.call(a, c)
					},
					isEmptyObject: function(a) {
						for (var b in a) return !1;
						return !0
					},
					error: function(a) {
						throw a
					},
					parseJSON: function(b) {
						if (typeof b != "string" || !b) return null;
						b = e.trim(b);
						if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
						if (o.test(b.replace(p, "@").replace(q, "]").replace(r, ""))) return (new Function("return " + b))();
						e.error("Invalid JSON: " + b)
					},
					parseXML: function(b, c, d) {
						a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject(
							"Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)), d = c.documentElement, (!d || !d.nodeName || d.nodeName ===
							"parsererror") && e.error("Invalid XML: " + b);
						return c
					},
					noop: function() {},
					globalEval: function(b) {
						b && j.test(b) && (a.execScript || function(b) {
							a.eval.call(a, b)
						})(b)
					},
					camelCase: function(a) {
						return a.replace(w, x)
					},
					nodeName: function(a, b) {
						return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
					},
					each: function(a, c, d) {
						var f, g = 0,
							h = a.length,
							i = h === b || e.isFunction(a);
						if (d) {
							if (i) {
								for (f in a)
									if (c.apply(a[f], d) === !1) break
							} else
								for (; g < h;)
									if (c.apply(a[g++], d) === !1) break
						} else if (i) {
							for (f in a)
								if (c.call(a[f], f, a[f]) === !1) break
						} else
							for (; g < h;)
								if (c.call(a[g], g, a[g++]) === !1) break;
						return a
					},
					trim: G ? function(a) {
						return a == null ? "" : G.call(a)
					} : function(a) {
						return a == null ? "" : (a + "").replace(k, "").replace(l, "")
					},
					makeArray: function(a, b) {
						var c = b || [];
						if (a != null) {
							var d = e.type(a);
							a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(
								c, a)
						}
						return c
					},
					inArray: function(a, b) {
						if (H) return H.call(b, a);
						for (var c = 0, d = b.length; c < d; c++)
							if (b[c] === a) return c;
						return -1
					},
					merge: function(a, c) {
						var d = a.length,
							e = 0;
						if (typeof c.length == "number")
							for (var f = c.length; e < f; e++) a[d++] = c[e];
						else
							while (c[e] !== b) a[d++] = c[e++];
						a.length = d;
						return a
					},
					grep: function(a, b, c) {
						var d = [],
							e;
						c = !!c;
						for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
						return d
					},
					map: function(a, c, d) {
						var f, g, h = [],
							i = 0,
							j = a.length,
							k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
						if (k)
							for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f);
						else
							for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
						return h.concat.apply([], h)
					},
					guid: 1,
					proxy: function(a, c) {
						if (typeof c == "string") {
							var d = a[c];
							c = a, a = d
						}
						if (!e.isFunction(a)) return b;
						var f = F.call(arguments, 2),
							g = function() {
								return a.apply(c, f.concat(F.call(arguments)))
							};
						g.guid = a.guid = a.guid || g.guid || e.guid++;
						return g
					},
					access: function(a, c, d, f, g, h) {
						var i = a.length;
						if (typeof c == "object") {
							for (var j in c) e.access(a, j, c[j], f, g, d);
							return a
						}
						if (d !== b) {
							f = !h && f && e.isFunction(d);
							for (var k = 0; k < i; k++) g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
							return a
						}
						return i ? g(a[0], c) : b
					},
					now: function() {
						return (new Date).getTime()
					},
					uaMatch: function(a) {
						a = a.toLowerCase();
						var b = s.exec(a) || t.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && v.exec(a) || [];
						return {
							browser: b[1] || "",
							version: b[2] || "0"
						}
					},
					sub: function() {
						function a(b, c) {
							return new a.fn.init(b, c)
						}
						e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub,
							a.fn.init = function(d, f) {
								f && f instanceof e && !(f instanceof a) && (f = a(f));
								return e.fn.init.call(this, d, f, b)
							}, a.fn.init.prototype = a.fn;
						var b = a(c);
						return a
					},
					browser: {}
				}), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) {
					I["[object " + b + "]"] = b.toLowerCase()
				}), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit &&
				(e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B =
				function() {
					c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
				} : c.attachEvent && (B = function() {
					c.readyState === "complete" && (c.detachEvent("onreadystatechange", B), e.ready())
				});
			return e
		}(),
		g = "done fail isResolved isRejected promise then always pipe".split(" "),
		h = [].slice;
	f.extend({
		_Deferred: function() {
			var a = [],
				b, c, d, e = {
					done: function() {
						if (!d) {
							var c = arguments,
								g, h, i, j, k;
							b && (k = b, b = 0);
							for (g = 0, h = c.length; g < h; g++) i = c[g], j = f.type(i), j === "array" ? e.done.apply(e, i) : j ===
								"function" && a.push(i);
							k && e.resolveWith(k[0], k[1])
						}
						return this
					},
					resolveWith: function(e, f) {
						if (!d && !b && !c) {
							f = f || [], c = 1;
							try {
								while (a[0]) a.shift().apply(e, f)
							} finally {
								b = [e, f], c = 0
							}
						}
						return this
					},
					resolve: function() {
						e.resolveWith(this, arguments);
						return this
					},
					isResolved: function() {
						return !!c || !!b
					},
					cancel: function() {
						d = 1, a = [];
						return this
					}
				};
			return e
		},
		Deferred: function(a) {
			var b = f._Deferred(),
				c = f._Deferred(),
				d;
			f.extend(b, {
				then: function(a, c) {
					b.done(a).fail(c);
					return this
				},
				always: function() {
					return b.done.apply(b, arguments).fail.apply(this, arguments)
				},
				fail: c.done,
				rejectWith: c.resolveWith,
				reject: c.resolve,
				isRejected: c.isResolved,
				pipe: function(a, c) {
					return f.Deferred(function(d) {
						f.each({
							done: [a, "resolve"],
							fail: [c, "reject"]
						}, function(a, c) {
							var e = c[0],
								g = c[1],
								h;
							f.isFunction(e) ? b[a](function() {
								h = e.apply(this, arguments), h && f.isFunction(h.promise) ? h.promise().then(d.resolve, d.reject) :
									d[g](h)
							}) : b[a](d[g])
						})
					}).promise()
				},
				promise: function(a) {
					if (a == null) {
						if (d) return d;
						d = a = {}
					}
					var c = g.length;
					while (c--) a[g[c]] = b[g[c]];
					return a
				}
			}), b.done(c.cancel).fail(b.cancel), delete b.cancel, a && a.call(b, b);
			return b
		},
		when: function(a) {
			function i(a) {
				return function(c) {
					b[a] = arguments.length > 1 ? h.call(arguments, 0) : c, --e || g.resolveWith(g, h.call(b, 0))
				}
			}
			var b = arguments,
				c = 0,
				d = b.length,
				e = d,
				g = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred();
			if (d > 1) {
				for (; c < d; c++) b[c] && f.isFunction(b[c].promise) ? b[c].promise().then(i(c), g.reject) : --e;
				e || g.resolveWith(g, b)
			} else g !== a && g.resolveWith(g, d ? [a] : []);
			return g.promise()
		}
	}), f.support = function() {
		var a = c.createElement("div"),
			b = c.documentElement,
			d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
		a.setAttribute("className", "t"), a.innerHTML =
			"   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d =
			a.getElementsByTagName("*"), e = a.getElementsByTagName("a")[0];
		if (!d || !d.length || !e) return {};
		g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = a.getElementsByTagName("input")[0],
			k = {
				leadingWhitespace: a.firstChild.nodeType === 3,
				tbody: !a.getElementsByTagName("tbody").length,
				htmlSerialize: !!a.getElementsByTagName("link").length,
				style: /top/.test(e.getAttribute("style")),
				hrefNormalized: e.getAttribute("href") === "/a",
				opacity: /^0.55$/.test(e.style.opacity),
				cssFloat: !!e.style.cssFloat,
				checkOn: i.value === "on",
				optSelected: h.selected,
				getSetAttribute: a.className !== "t",
				submitBubbles: !0,
				changeBubbles: !0,
				focusinBubbles: !1,
				deleteExpando: !0,
				noCloneEvent: !0,
				inlineBlockNeedsLayout: !1,
				shrinkWrapBlocks: !1,
				reliableMarginRight: !0
			}, i.checked = !0, k.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, k.optDisabled = !h.disabled;
		try {
			delete a.test
		} catch (v) {
			k.deleteExpando = !1
		}!a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function() {
				k.noCloneEvent = !1
			}), a.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type",
				"radio"), k.radioValue = i.value === "t", i.setAttribute("checked", "checked"), a.appendChild(i), l = c.createDocumentFragment(),
			l.appendChild(a.firstChild), k.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "", a.style
			.width = a.style.paddingLeft = "1px", m = c.getElementsByTagName("body")[0], o = c.createElement(m ? "div" :
				"body"), p = {
				visibility: "hidden",
				width: 0,
				height: 0,
				border: 0,
				margin: 0
			}, m && f.extend(p, {
				position: "absolute",
				left: -1e3,
				top: -1e3
			});
		for (t in p) o.style[t] = p[t];
		o.appendChild(a), n = m || b, n.insertBefore(o, n.firstChild), k.appendChecked = i.checked, k.boxModel = a.offsetWidth ===
			2, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = a.offsetWidth ===
				2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = a.offsetWidth !==
				2), a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", q = a.getElementsByTagName(
				"td"), u = q[0].offsetHeight === 0, q[0].style.display = "", q[1].style.display = "none", k.reliableHiddenOffsets =
			u && q[0].offsetHeight === 0, a.innerHTML = "", c.defaultView && c.defaultView.getComputedStyle && (j = c.createElement(
				"div"), j.style.width = "0", j.style.marginRight = "0", a.appendChild(j), k.reliableMarginRight = (parseInt((c.defaultView
				.getComputedStyle(j, null) || {
					marginRight: 0
				}).marginRight, 10) || 0) === 0), o.innerHTML = "", n.removeChild(o);
		if (a.attachEvent)
			for (t in {
					submit: 1,
					change: 1,
					focusin: 1
				}) s = "on" + t, u = s in a, u || (a.setAttribute(s, "return;"), u = typeof a[s] == "function"), k[t + "Bubbles"] =
				u;
		o = l = g = h = m = j = a = i = null;
		return k
	}(), f.boxModel = f.support.boxModel;
	var i = /^(?:\{.*\}|\[.*\])$/,
		j = /([a-z])([A-Z])/g;
	f.extend({
		cache: {},
		uuid: 0,
		expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(a) {
			a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
			return !!a && !l(a)
		},
		data: function(a, c, d, e) {
			if (!!f.acceptData(a)) {
				var g = f.expando,
					h = typeof c == "string",
					i, j = a.nodeType,
					k = j ? f.cache : a,
					l = j ? a[f.expando] : a[f.expando] && f.expando;
				if ((!l || e && l && !k[l][g]) && h && d === b) return;
				l || (j ? a[f.expando] = l = ++f.uuid : l = f.expando), k[l] || (k[l] = {}, j || (k[l].toJSON = f.noop));
				if (typeof c == "object" || typeof c == "function") e ? k[l][g] = f.extend(k[l][g], c) : k[l] = f.extend(k[l],
					c);
				i = k[l], e && (i[g] || (i[g] = {}), i = i[g]), d !== b && (i[f.camelCase(c)] = d);
				if (c === "events" && !i[c]) return i[g] && i[g].events;
				return h ? i[f.camelCase(c)] || i[c] : i
			}
		},
		removeData: function(b, c, d) {
			if (!!f.acceptData(b)) {
				var e = f.expando,
					g = b.nodeType,
					h = g ? f.cache : b,
					i = g ? b[f.expando] : f.expando;
				if (!h[i]) return;
				if (c) {
					var j = d ? h[i][e] : h[i];
					if (j) {
						delete j[c];
						if (!l(j)) return
					}
				}
				if (d) {
					delete h[i][e];
					if (!l(h[i])) return
				}
				var k = h[i][e];
				f.support.deleteExpando || h != a ? delete h[i] : h[i] = null, k ? (h[i] = {}, g || (h[i].toJSON = f.noop), h[i]
					[e] = k) : g && (f.support.deleteExpando ? delete b[f.expando] : b.removeAttribute ? b.removeAttribute(f.expando) :
					b[f.expando] = null)
			}
		},
		_data: function(a, b, c) {
			return f.data(a, b, c, !0)
		},
		acceptData: function(a) {
			if (a.nodeName) {
				var b = f.noData[a.nodeName.toLowerCase()];
				if (b) return b !== !0 && a.getAttribute("classid") === b
			}
			return !0
		}
	}), f.fn.extend({
		data: function(a, c) {
			var d = null;
			if (typeof a == "undefined") {
				if (this.length) {
					d = f.data(this[0]);
					if (this[0].nodeType === 1) {
						var e = this[0].attributes,
							g;
						for (var h = 0, i = e.length; h < i; h++) g = e[h].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(
							5)), k(this[0], g, d[g]))
					}
				}
				return d
			}
			if (typeof a == "object") return this.each(function() {
				f.data(this, a)
			});
			var j = a.split(".");
			j[1] = j[1] ? "." + j[1] : "";
			if (c === b) {
				d = this.triggerHandler("getData" + j[1] + "!", [j[0]]), d === b && this.length && (d = f.data(this[0], a), d =
					k(this[0], a, d));
				return d === b && j[1] ? this.data(j[0]) : d
			}
			return this.each(function() {
				var b = f(this),
					d = [j[0], c];
				b.triggerHandler("setData" + j[1] + "!", d), f.data(this, a, c), b.triggerHandler("changeData" + j[1] + "!",
					d)
			})
		},
		removeData: function(a) {
			return this.each(function() {
				f.removeData(this, a)
			})
		}
	}), f.extend({
		_mark: function(a, c) {
			a && (c = (c || "fx") + "mark", f.data(a, c, (f.data(a, c, b, !0) || 0) + 1, !0))
		},
		_unmark: function(a, c, d) {
			a !== !0 && (d = c, c = a, a = !1);
			if (c) {
				d = d || "fx";
				var e = d + "mark",
					g = a ? 0 : (f.data(c, e, b, !0) || 1) - 1;
				g ? f.data(c, e, g, !0) : (f.removeData(c, e, !0), m(c, d, "mark"))
			}
		},
		queue: function(a, c, d) {
			if (a) {
				c = (c || "fx") + "queue";
				var e = f.data(a, c, b, !0);
				d && (!e || f.isArray(d) ? e = f.data(a, c, f.makeArray(d), !0) : e.push(d));
				return e || []
			}
		},
		dequeue: function(a, b) {
			b = b || "fx";
			var c = f.queue(a, b),
				d = c.shift(),
				e;
			d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), d.call(a, function() {
				f.dequeue(a, b)
			})), c.length || (f.removeData(a, b + "queue", !0), m(a, b, "queue"))
		}
	}), f.fn.extend({
		queue: function(a, c) {
			typeof a != "string" && (c = a, a = "fx");
			if (c === b) return f.queue(this[0], a);
			return this.each(function() {
				var b = f.queue(this, a, c);
				a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
			})
		},
		dequeue: function(a) {
			return this.each(function() {
				f.dequeue(this, a)
			})
		},
		delay: function(a, b) {
			a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
			return this.queue(b, function() {
				var c = this;
				setTimeout(function() {
					f.dequeue(c, b)
				}, a)
			})
		},
		clearQueue: function(a) {
			return this.queue(a || "fx", [])
		},
		promise: function(a, c) {
			function m() {
				--h || d.resolveWith(e, [e])
			}
			typeof a != "string" && (c = a, a = b), a = a || "fx";
			var d = f.Deferred(),
				e = this,
				g = e.length,
				h = 1,
				i = a + "defer",
				j = a + "queue",
				k = a + "mark",
				l;
			while (g--)
				if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f._Deferred(),
						!0)) h++, l.done(m);
			m();
			return d.promise()
		}
	});
	var n = /[\n\t\r]/g,
		o = /\s+/,
		p = /\r/g,
		q = /^(?:button|input)$/i,
		r = /^(?:button|input|object|select|textarea)$/i,
		s = /^a(?:rea)?$/i,
		t =
		/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		u = /\:|^on/,
		v, w;
	f.fn.extend({
		attr: function(a, b) {
			return f.access(this, a, b, !0, f.attr)
		},
		removeAttr: function(a) {
			return this.each(function() {
				f.removeAttr(this, a)
			})
		},
		prop: function(a, b) {
			return f.access(this, a, b, !0, f.prop)
		},
		removeProp: function(a) {
			a = f.propFix[a] || a;
			return this.each(function() {
				try {
					this[a] = b, delete this[a]
				} catch (c) {}
			})
		},
		addClass: function(a) {
			var b, c, d, e, g, h, i;
			if (f.isFunction(a)) return this.each(function(b) {
				f(this).addClass(a.call(this, b, this.className))
			});
			if (a && typeof a == "string") {
				b = a.split(o);
				for (c = 0, d = this.length; c < d; c++) {
					e = this[c];
					if (e.nodeType === 1)
						if (!e.className && b.length === 1) e.className = a;
						else {
							g = " " + e.className + " ";
							for (h = 0, i = b.length; h < i; h++) ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
							e.className = f.trim(g)
						}
				}
			}
			return this
		},
		removeClass: function(a) {
			var c, d, e, g, h, i, j;
			if (f.isFunction(a)) return this.each(function(b) {
				f(this).removeClass(a.call(this, b, this.className))
			});
			if (a && typeof a == "string" || a === b) {
				c = (a || "").split(o);
				for (d = 0, e = this.length; d < e; d++) {
					g = this[d];
					if (g.nodeType === 1 && g.className)
						if (a) {
							h = (" " + g.className + " ").replace(n, " ");
							for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
							g.className = f.trim(h)
						} else g.className = ""
				}
			}
			return this
		},
		toggleClass: function(a, b) {
			var c = typeof a,
				d = typeof b == "boolean";
			if (f.isFunction(a)) return this.each(function(c) {
				f(this).toggleClass(a.call(this, c, this.className, b), b)
			});
			return this.each(function() {
				if (c === "string") {
					var e, g = 0,
						h = f(this),
						i = b,
						j = a.split(o);
					while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
				} else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className),
					this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
			})
		},
		hasClass: function(a) {
			var b = " " + a + " ";
			for (var c = 0, d = this.length; c < d; c++)
				if ((" " + this[c].className + " ").replace(n, " ").indexOf(b) > -1) return !0;
			return !1
		},
		val: function(a) {
			var c, d, e = this[0];
			if (!arguments.length) {
				if (e) {
					c = f.valHooks[e.nodeName.toLowerCase()] || f.valHooks[e.type];
					if (c && "get" in c && (d = c.get(e, "value")) !== b) return d;
					d = e.value;
					return typeof d == "string" ? d.replace(p, "") : d == null ? "" : d
				}
				return b
			}
			var g = f.isFunction(a);
			return this.each(function(d) {
				var e = f(this),
					h;
				if (this.nodeType === 1) {
					g ? h = a.call(this, d, e.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) &&
						(h = f.map(h, function(a) {
							return a == null ? "" : a + ""
						})), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
					if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
				}
			})
		}
	}), f.extend({
		valHooks: {
			option: {
				get: function(a) {
					var b = a.attributes.value;
					return !b || b.specified ? a.value : a.text
				}
			},
			select: {
				get: function(a) {
					var b, c = a.selectedIndex,
						d = [],
						e = a.options,
						g = a.type === "select-one";
					if (c < 0) return null;
					for (var h = g ? c : 0, i = g ? c + 1 : e.length; h < i; h++) {
						var j = e[h];
						if (j.selected && (f.support.optDisabled ? !j.disabled : j.getAttribute("disabled") === null) && (!j.parentNode
								.disabled || !f.nodeName(j.parentNode, "optgroup"))) {
							b = f(j).val();
							if (g) return b;
							d.push(b)
						}
					}
					if (g && !d.length && e.length) return f(e[c]).val();
					return d
				},
				set: function(a, b) {
					var c = f.makeArray(b);
					f(a).find("option").each(function() {
						this.selected = f.inArray(f(this).val(), c) >= 0
					}), c.length || (a.selectedIndex = -1);
					return c
				}
			}
		},
		attrFn: {
			val: !0,
			css: !0,
			html: !0,
			text: !0,
			data: !0,
			width: !0,
			height: !0,
			offset: !0
		},
		attrFix: {
			tabindex: "tabIndex"
		},
		attr: function(a, c, d, e) {
			var g = a.nodeType;
			if (!a || g === 3 || g === 8 || g === 2) return b;
			if (e && c in f.attrFn) return f(a)[c](d);
			if (!("getAttribute" in a)) return f.prop(a, c, d);
			var h, i, j = g !== 1 || !f.isXMLDoc(a);
			j && (c = f.attrFix[c] || c, i = f.attrHooks[c], i || (t.test(c) ? i = w : v && c !== "className" && (f.nodeName(
				a, "form") || u.test(c)) && (i = v)));
			if (d !== b) {
				if (d === null) {
					f.removeAttr(a, c);
					return b
				}
				if (i && "set" in i && j && (h = i.set(a, d, c)) !== b) return h;
				a.setAttribute(c, "" + d);
				return d
			}
			if (i && "get" in i && j && (h = i.get(a, c)) !== null) return h;
			h = a.getAttribute(c);
			return h === null ? b : h
		},
		removeAttr: function(a, b) {
			var c;
			a.nodeType === 1 && (b = f.attrFix[b] || b, f.support.getSetAttribute ? a.removeAttribute(b) : (f.attr(a, b, ""),
				a.removeAttributeNode(a.getAttributeNode(b))), t.test(b) && (c = f.propFix[b] || b) in a && (a[c] = !1))
		},
		attrHooks: {
			type: {
				set: function(a, b) {
					if (q.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");
					else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
						var c = a.value;
						a.setAttribute("type", b), c && (a.value = c);
						return b
					}
				}
			},
			tabIndex: {
				get: function(a) {
					var c = a.getAttributeNode("tabIndex");
					return c && c.specified ? parseInt(c.value, 10) : r.test(a.nodeName) || s.test(a.nodeName) && a.href ? 0 : b
				}
			},
			value: {
				get: function(a, b) {
					if (v && f.nodeName(a, "button")) return v.get(a, b);
					return b in a ? a.value : null
				},
				set: function(a, b, c) {
					if (v && f.nodeName(a, "button")) return v.set(a, b, c);
					a.value = b
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(a, c, d) {
			var e = a.nodeType;
			if (!a || e === 3 || e === 8 || e === 2) return b;
			var g, h, i = e !== 1 || !f.isXMLDoc(a);
			i && (c = f.propFix[c] || c, h = f.propHooks[c]);
			return d !== b ? h && "set" in h && (g = h.set(a, d, c)) !== b ? g : a[c] = d : h && "get" in h && (g = h.get(a,
				c)) !== b ? g : a[c]
		},
		propHooks: {}
	}), w = {
		get: function(a, c) {
			return f.prop(a, c) ? c.toLowerCase() : b
		},
		set: function(a, b, c) {
			var d;
			b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
			return c
		}
	}, f.support.getSetAttribute || (f.attrFix = f.propFix, v = f.attrHooks.name = f.attrHooks.title = f.valHooks.button = {
		get: function(a, c) {
			var d;
			d = a.getAttributeNode(c);
			return d && d.nodeValue !== "" ? d.nodeValue : b
		},
		set: function(a, b, c) {
			var d = a.getAttributeNode(c);
			if (d) {
				d.nodeValue = b;
				return b
			}
		}
	}, f.each(["width", "height"], function(a, b) {
		f.attrHooks[b] = f.extend(f.attrHooks[b], {
			set: function(a, c) {
				if (c === "") {
					a.setAttribute(b, "auto");
					return c
				}
			}
		})
	})), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(a, c) {
		f.attrHooks[c] = f.extend(f.attrHooks[c], {
			get: function(a) {
				var d = a.getAttribute(c, 2);
				return d === null ? b : d
			}
		})
	}), f.support.style || (f.attrHooks.style = {
		get: function(a) {
			return a.style.cssText.toLowerCase() || b
		},
		set: function(a, b) {
			return a.style.cssText = "" + b
		}
	}), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
		get: function(a) {
			var b = a.parentNode;
			b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
		}
	})), f.support.checkOn || f.each(["radio", "checkbox"], function() {
		f.valHooks[this] = {
			get: function(a) {
				return a.getAttribute("value") === null ? "on" : a.value
			}
		}
	}), f.each(["radio", "checkbox"], function() {
		f.valHooks[this] = f.extend(f.valHooks[this], {
			set: function(a, b) {
				if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
			}
		})
	});
	var x = /\.(.*)$/,
		y = /^(?:textarea|input|select)$/i,
		z = /\./g,
		A = / /g,
		B = /[^\w\s.|`]/g,
		C = function(a) {
			return a.replace(B, "\\$&")
		};
	f.event = {
		add: function(a, c, d, e) {
			if (a.nodeType !== 3 && a.nodeType !== 8) {
				if (d === !1) d = D;
				else if (!d) return;
				var g, h;
				d.handler && (g = d, d = g.handler), d.guid || (d.guid = f.guid++);
				var i = f._data(a);
				if (!i) return;
				var j = i.events,
					k = i.handle;
				j || (i.events = j = {}), k || (i.handle = k = function(a) {
					return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.handle.apply(k.elem,
						arguments) : b
				}), k.elem = a, c = c.split(" ");
				var l, m = 0,
					n;
				while (l = c[m++]) {
					h = g ? f.extend({}, g) : {
						handler: d,
						data: e
					}, l.indexOf(".") > -1 ? (n = l.split("."), l = n.shift(), h.namespace = n.slice(0).sort().join(".")) : (n = [],
						h.namespace = ""), h.type = l, h.guid || (h.guid = d.guid);
					var o = j[l],
						p = f.event.special[l] || {};
					if (!o) {
						o = j[l] = [];
						if (!p.setup || p.setup.call(a, e, n, k) === !1) a.addEventListener ? a.addEventListener(l, k, !1) : a.attachEvent &&
							a.attachEvent("on" + l, k)
					}
					p.add && (p.add.call(a, h), h.handler.guid || (h.handler.guid = d.guid)), o.push(h), f.event.global[l] = !0
				}
				a = null
			}
		},
		global: {},
		remove: function(a, c, d, e) {
			if (a.nodeType !== 3 && a.nodeType !== 8) {
				d === !1 && (d = D);
				var g, h, i, j, k = 0,
					l, m, n, o, p, q, r, s = f.hasData(a) && f._data(a),
					t = s && s.events;
				if (!s || !t) return;
				c && c.type && (d = c.handler, c = c.type);
				if (!c || typeof c == "string" && c.charAt(0) === ".") {
					c = c || "";
					for (h in t) f.event.remove(a, h + c);
					return
				}
				c = c.split(" ");
				while (h = c[k++]) {
					r = h, q = null, l = h.indexOf(".") < 0, m = [], l || (m = h.split("."), h = m.shift(), n = new RegExp(
						"(^|\\.)" + f.map(m.slice(0).sort(), C).join("\\.(?:.*\\.)?") + "(\\.|$)")), p = t[h];
					if (!p) continue;
					if (!d) {
						for (j = 0; j < p.length; j++) {
							q = p[j];
							if (l || n.test(q.namespace)) f.event.remove(a, r, q.handler, j), p.splice(j--, 1)
						}
						continue
					}
					o = f.event.special[h] || {};
					for (j = e || 0; j < p.length; j++) {
						q = p[j];
						if (d.guid === q.guid) {
							if (l || n.test(q.namespace)) e == null && p.splice(j--, 1), o.remove && o.remove.call(a, q);
							if (e != null) break
						}
					}
					if (p.length === 0 || e != null && p.length === 1)(!o.teardown || o.teardown.call(a, m) === !1) && f.removeEvent(
						a, h, s.handle), g = null, delete t[h]
				}
				if (f.isEmptyObject(t)) {
					var u = s.handle;
					u && (u.elem = null), delete s.events, delete s.handle, f.isEmptyObject(s) && f.removeData(a, b, !0)
				}
			}
		},
		customEvent: {
			getData: !0,
			setData: !0,
			changeData: !0
		},
		trigger: function(c, d, e, g) {
			var h = c.type || c,
				i = [],
				j;
			h.indexOf("!") >= 0 && (h = h.slice(0, -1), j = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
			if (!!e && !f.event.customEvent[h] || !!f.event.global[h]) {
				c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.exclusive = j, c
					.namespace = i.join("."), c.namespace_re = new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)");
				if (g || !e) c.preventDefault(), c.stopPropagation();
				if (!e) {
					f.each(f.cache, function() {
						var a = f.expando,
							b = this[a];
						b && b.events && b.events[h] && f.event.trigger(c, d, b.handle.elem)
					});
					return
				}
				if (e.nodeType === 3 || e.nodeType === 8) return;
				c.result = b, c.target = e, d = d != null ? f.makeArray(d) : [], d.unshift(c);
				var k = e,
					l = h.indexOf(":") < 0 ? "on" + h : "";
				do {
					var m = f._data(k, "handle");
					c.currentTarget = k, m && m.apply(k, d), l && f.acceptData(k) && k[l] && k[l].apply(k, d) === !1 && (c.result = !
						1, c.preventDefault()), k = k.parentNode || k.ownerDocument || k === c.target.ownerDocument && a
				} while (k && !c.isPropagationStopped());
				if (!c.isDefaultPrevented()) {
					var n, o = f.event.special[h] || {};
					if ((!o._default || o._default.call(e.ownerDocument, c) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(
							e)) {
						try {
							l && e[h] && (n = e[l], n && (e[l] = null), f.event.triggered = h, e[h]())
						} catch (p) {}
						n && (e[l] = n), f.event.triggered = b
					}
				}
				return c.result
			}
		},
		handle: function(c) {
			c = f.event.fix(c || a.event);
			var d = ((f._data(this, "events") || {})[c.type] || []).slice(0),
				e = !c.exclusive && !c.namespace,
				g = Array.prototype.slice.call(arguments, 0);
			g[0] = c, c.currentTarget = this;
			for (var h = 0, i = d.length; h < i; h++) {
				var j = d[h];
				if (e || c.namespace_re.test(j.namespace)) {
					c.handler = j.handler, c.data = j.data, c.handleObj = j;
					var k = j.handler.apply(this, g);
					k !== b && (c.result = k, k === !1 && (c.preventDefault(), c.stopPropagation()));
					if (c.isImmediatePropagationStopped()) break
				}
			}
			return c.result
		},
		props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which"
			.split(" "),
		fix: function(a) {
			if (a[f.expando]) return a;
			var d = a;
			a = f.Event(d);
			for (var e = this.props.length, g; e;) g = this.props[--e], a[g] = d[g];
			a.target || (a.target = a.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), !a.relatedTarget &&
				a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
			if (a.pageX == null && a.clientX != null) {
				var h = a.target.ownerDocument || c,
					i = h.documentElement,
					j = h.body;
				a.pageX = a.clientX + (i && i.scrollLeft || j && j.scrollLeft || 0) - (i && i.clientLeft || j && j.clientLeft ||
					0), a.pageY = a.clientY + (i && i.scrollTop || j && j.scrollTop || 0) - (i && i.clientTop || j && j.clientTop ||
					0)
			}
			a.which == null && (a.charCode != null || a.keyCode != null) && (a.which = a.charCode != null ? a.charCode : a.keyCode),
				!a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey), !a.which && a.button !== b && (a.which = a.button & 1 ? 1 :
					a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
			return a
		},
		guid: 1e8,
		proxy: f.proxy,
		special: {
			ready: {
				setup: f.bindReady,
				teardown: f.noop
			},
			live: {
				add: function(a) {
					f.event.add(this, N(a.origType, a.selector), f.extend({}, a, {
						handler: M,
						guid: a.handler.guid
					}))
				},
				remove: function(a) {
					f.event.remove(this, N(a.origType, a.selector), a)
				}
			},
			beforeunload: {
				setup: function(a, b, c) {
					f.isWindow(this) && (this.onbeforeunload = c)
				},
				teardown: function(a, b) {
					this.onbeforeunload === b && (this.onbeforeunload = null)
				}
			}
		}
	}, f.removeEvent = c.removeEventListener ? function(a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c, !1)
	} : function(a, b, c) {
		a.detachEvent && a.detachEvent("on" + b, c)
	}, f.Event = function(a, b) {
		if (!this.preventDefault) return new f.Event(a, b);
		a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue ===
				!1 || a.getPreventDefault && a.getPreventDefault() ? E : D) : this.type = a, b && f.extend(this, b), this.timeStamp =
			f.now(), this[f.expando] = !0
	}, f.Event.prototype = {
		preventDefault: function() {
			this.isDefaultPrevented = E;
			var a = this.originalEvent;
			!a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
		},
		stopPropagation: function() {
			this.isPropagationStopped = E;
			var a = this.originalEvent;
			!a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = E, this.stopPropagation()
		},
		isDefaultPrevented: D,
		isPropagationStopped: D,
		isImmediatePropagationStopped: D
	};
	var F = function(a) {
			var b = a.relatedTarget,
				c = !1,
				d = a.type;
			a.type = a.data, b !== this && (b && (c = f.contains(this, b)), c || (f.event.handle.apply(this, arguments), a.type =
				d))
		},
		G = function(a) {
			a.type = a.data, f.event.handle.apply(this, arguments)
		};
	f.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(a, b) {
		f.event.special[a] = {
			setup: function(c) {
				f.event.add(this, b, c && c.selector ? G : F, a)
			},
			teardown: function(a) {
				f.event.remove(this, b, a && a.selector ? G : F)
			}
		}
	}), f.support.submitBubbles || (f.event.special.submit = {
		setup: function(a, b) {
			if (!f.nodeName(this, "form")) f.event.add(this, "click.specialSubmit", function(a) {
				var b = a.target,
					c = b.type;
				(c === "submit" || c === "image") && f(b).closest("form").length && K("submit", this, arguments)
			}), f.event.add(this, "keypress.specialSubmit", function(a) {
				var b = a.target,
					c = b.type;
				(c === "text" || c === "password") && f(b).closest("form").length && a.keyCode === 13 && K("submit", this,
					arguments)
			});
			else return !1
		},
		teardown: function(a) {
			f.event.remove(this, ".specialSubmit")
		}
	});
	if (!f.support.changeBubbles) {
		var H, I = function(a) {
				var b = a.type,
					c = a.value;
				b === "radio" || b === "checkbox" ? c = a.checked : b === "select-multiple" ? c = a.selectedIndex > -1 ? f.map(a.options,
					function(a) {
						return a.selected
					}).join("-") : "" : f.nodeName(a, "select") && (c = a.selectedIndex);
				return c
			},
			J = function(c) {
				var d = c.target,
					e, g;
				if (!!y.test(d.nodeName) && !d.readOnly) {
					e = f._data(d, "_change_data"), g = I(d), (c.type !== "focusout" || d.type !== "radio") && f._data(d,
						"_change_data", g);
					if (e === b || g === e) return;
					if (e != null || g) c.type = "change", c.liveFired = b, f.event.trigger(c, arguments[1], d)
				}
			};
		f.event.special.change = {
			filters: {
				focusout: J,
				beforedeactivate: J,
				click: function(a) {
					var b = a.target,
						c = f.nodeName(b, "input") ? b.type : "";
					(c === "radio" || c === "checkbox" || f.nodeName(b, "select")) && J.call(this, a)
				},
				keydown: function(a) {
					var b = a.target,
						c = f.nodeName(b, "input") ? b.type : "";
					(a.keyCode === 13 && !f.nodeName(b, "textarea") || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c ===
						"select-multiple") && J.call(this, a)
				},
				beforeactivate: function(a) {
					var b = a.target;
					f._data(b, "_change_data", I(b))
				}
			},
			setup: function(a, b) {
				if (this.type === "file") return !1;
				for (var c in H) f.event.add(this, c + ".specialChange", H[c]);
				return y.test(this.nodeName)
			},
			teardown: function(a) {
				f.event.remove(this, ".specialChange");
				return y.test(this.nodeName)
			}
		}, H = f.event.special.change.filters, H.focus = H.beforeactivate
	}
	f.support.focusinBubbles || f.each({
		focus: "focusin",
		blur: "focusout"
	}, function(a, b) {
		function e(a) {
			var c = f.event.fix(a);
			c.type = b, c.originalEvent = {}, f.event.trigger(c, null, c.target), c.isDefaultPrevented() && a.preventDefault()
		}
		var d = 0;
		f.event.special[b] = {
			setup: function() {
				d++ === 0 && c.addEventListener(a, e, !0)
			},
			teardown: function() {
				--d === 0 && c.removeEventListener(a, e, !0)
			}
		}
	}), f.each(["bind", "one"], function(a, c) {
		f.fn[c] = function(a, d, e) {
			var g;
			if (typeof a == "object") {
				for (var h in a) this[c](h, d, a[h], e);
				return this
			}
			if (arguments.length === 2 || d === !1) e = d, d = b;
			c === "one" ? (g = function(a) {
				f(this).unbind(a, g);
				return e.apply(this, arguments)
			}, g.guid = e.guid || f.guid++) : g = e;
			if (a === "unload" && c !== "one") this.one(a, d, e);
			else
				for (var i = 0, j = this.length; i < j; i++) f.event.add(this[i], a, g, d);
			return this
		}
	}), f.fn.extend({
		unbind: function(a, b) {
			if (typeof a == "object" && !a.preventDefault)
				for (var c in a) this.unbind(c, a[c]);
			else
				for (var d = 0, e = this.length; d < e; d++) f.event.remove(this[d], a, b);
			return this
		},
		delegate: function(a, b, c, d) {
			return this.live(b, c, d, a)
		},
		undelegate: function(a, b, c) {
			return arguments.length === 0 ? this.unbind("live") : this.die(b, null, c, a)
		},
		trigger: function(a, b) {
			return this.each(function() {
				f.event.trigger(a, b, this)
			})
		},
		triggerHandler: function(a, b) {
			if (this[0]) return f.event.trigger(a, b, this[0], !0)
		},
		toggle: function(a) {
			var b = arguments,
				c = a.guid || f.guid++,
				d = 0,
				e = function(c) {
					var e = (f.data(this, "lastToggle" + a.guid) || 0) % d;
					f.data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
					return b[e].apply(this, arguments) || !1
				};
			e.guid = c;
			while (d < b.length) b[d++].guid = c;
			return this.click(e)
		},
		hover: function(a, b) {
			return this.mouseenter(a).mouseleave(b || a)
		}
	});
	var L = {
		focus: "focusin",
		blur: "focusout",
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	};
	f.each(["live", "die"], function(a, c) {
			f.fn[c] = function(a, d, e, g) {
				var h, i = 0,
					j, k, l, m = g || this.selector,
					n = g ? this : f(this.context);
				if (typeof a == "object" && !a.preventDefault) {
					for (var o in a) n[c](o, d, a[o], m);
					return this
				}
				if (c === "die" && !a && g && g.charAt(0) === ".") {
					n.unbind(g);
					return this
				}
				if (d === !1 || f.isFunction(d)) e = d || D, d = b;
				a = (a || "").split(" ");
				while ((h = a[i++]) != null) {
					j = x.exec(h), k = "", j && (k = j[0], h = h.replace(x, ""));
					if (h === "hover") {
						a.push("mouseenter" + k, "mouseleave" + k);
						continue
					}
					l = h, L[h] ? (a.push(L[h] + k), h = h + k) : h = (L[h] || h) + k;
					if (c === "live")
						for (var p = 0, q = n.length; p < q; p++) f.event.add(n[p], "live." + N(h, m), {
							data: d,
							selector: m,
							handler: e,
							origType: h,
							origHandler: e,
							preType: l
						});
					else n.unbind("live." + N(h, m), e)
				}
				return this
			}
		}), f.each(
			"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error"
			.split(" "),
			function(a, b) {
				f.fn[b] = function(a, c) {
					c == null && (c = a, a = null);
					return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
				}, f.attrFn && (f.attrFn[b] = !0)
			}),
		function() {
			function u(a, b, c, d, e, f) {
				for (var g = 0, h = d.length; g < h; g++) {
					var i = d[g];
					if (i) {
						var j = !1;
						i = i[a];
						while (i) {
							if (i.sizcache === c) {
								j = d[i.sizset];
								break
							}
							if (i.nodeType === 1) {
								f || (i.sizcache = c, i.sizset = g);
								if (typeof b != "string") {
									if (i === b) {
										j = !0;
										break
									}
								} else if (k.filter(b, [i]).length > 0) {
									j = i;
									break
								}
							}
							i = i[a]
						}
						d[g] = j
					}
				}
			}

			function t(a, b, c, d, e, f) {
				for (var g = 0, h = d.length; g < h; g++) {
					var i = d[g];
					if (i) {
						var j = !1;
						i = i[a];
						while (i) {
							if (i.sizcache === c) {
								j = d[i.sizset];
								break
							}
							i.nodeType === 1 && !f && (i.sizcache = c, i.sizset = g);
							if (i.nodeName.toLowerCase() === b) {
								j = i;
								break
							}
							i = i[a]
						}
						d[g] = j
					}
				}
			}
			var a =
				/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
				d = 0,
				e = Object.prototype.toString,
				g = !1,
				h = !0,
				i = /\\/g,
				j = /\W/;
			[0, 0].sort(function() {
				h = !1;
				return 0
			});
			var k = function(b, d, f, g) {
				f = f || [], d = d || c;
				var h = d;
				if (d.nodeType !== 1 && d.nodeType !== 9) return [];
				if (!b || typeof b != "string") return f;
				var i, j, n, o, q, r, s, t, u = !0,
					w = k.isXML(d),
					x = [],
					y = b;
				do {
					a.exec(""), i = a.exec(y);
					if (i) {
						y = i[3], x.push(i[1]);
						if (i[2]) {
							o = i[3];
							break
						}
					}
				} while (i);
				if (x.length > 1 && m.exec(b))
					if (x.length === 2 && l.relative[x[0]]) j = v(x[0] + x[1], d);
					else {
						j = l.relative[x[0]] ? [d] : k(x.shift(), d);
						while (x.length) b = x.shift(), l.relative[b] && (b += x.shift()), j = v(b, j)
					}
				else {
					!g && x.length > 1 && d.nodeType === 9 && !w && l.match.ID.test(x[0]) && !l.match.ID.test(x[x.length - 1]) && (q =
						k.find(x.shift(), d, w), d = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]);
					if (d) {
						q = g ? {
								expr: x.pop(),
								set: p(g)
							} : k.find(x.pop(), x.length === 1 && (x[0] === "~" || x[0] === "+") && d.parentNode ? d.parentNode : d, w), j =
							q.expr ? k.filter(q.expr, q.set) : q.set, x.length > 0 ? n = p(j) : u = !1;
						while (x.length) r = x.pop(), s = r, l.relative[r] ? s = x.pop() : r = "", s == null && (s = d), l.relative[r](
							n, s, w)
					} else n = x = []
				}
				n || (n = j), n || k.error(r || b);
				if (e.call(n) === "[object Array]")
					if (!u) f.push.apply(f, n);
					else if (d && d.nodeType === 1)
					for (t = 0; n[t] != null; t++) n[t] && (n[t] === !0 || n[t].nodeType === 1 && k.contains(d, n[t])) && f.push(j[t]);
				else
					for (t = 0; n[t] != null; t++) n[t] && n[t].nodeType === 1 && f.push(j[t]);
				else p(n, f);
				o && (k(o, h, f, g), k.uniqueSort(f));
				return f
			};
			k.uniqueSort = function(a) {
				if (r) {
					g = h, a.sort(r);
					if (g)
						for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
				}
				return a
			}, k.matches = function(a, b) {
				return k(a, null, null, b)
			}, k.matchesSelector = function(a, b) {
				return k(b, null, null, [a]).length > 0
			}, k.find = function(a, b, c) {
				var d;
				if (!a) return [];
				for (var e = 0, f = l.order.length; e < f; e++) {
					var g, h = l.order[e];
					if (g = l.leftMatch[h].exec(a)) {
						var j = g[1];
						g.splice(1, 1);
						if (j.substr(j.length - 1) !== "\\") {
							g[1] = (g[1] || "").replace(i, ""), d = l.find[h](g, b, c);
							if (d != null) {
								a = a.replace(l.match[h], "");
								break
							}
						}
					}
				}
				d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
				return {
					set: d,
					expr: a
				}
			}, k.filter = function(a, c, d, e) {
				var f, g, h = a,
					i = [],
					j = c,
					m = c && c[0] && k.isXML(c[0]);
				while (a && c.length) {
					for (var n in l.filter)
						if ((f = l.leftMatch[n].exec(a)) != null && f[2]) {
							var o, p, q = l.filter[n],
								r = f[1];
							g = !1, f.splice(1, 1);
							if (r.substr(r.length - 1) === "\\") continue;
							j === i && (i = []);
							if (l.preFilter[n]) {
								f = l.preFilter[n](f, j, d, i, e, m);
								if (!f) g = o = !0;
								else if (f === !0) continue
							}
							if (f)
								for (var s = 0;
									(p = j[s]) != null; s++)
									if (p) {
										o = q(p, f, s, j);
										var t = e ^ !!o;
										d && o != null ? t ? g = !0 : j[s] = !1 : t && (i.push(p), g = !0)
									} if (o !== b) {
								d || (j = i), a = a.replace(l.match[n], "");
								if (!g) return [];
								break
							}
						} if (a === h)
						if (g == null) k.error(a);
						else break;
					h = a
				}
				return j
			}, k.error = function(a) {
				throw "Syntax error, unrecognized expression: " + a
			};
			var l = k.selectors = {
					order: ["ID", "NAME", "TAG"],
					match: {
						ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
						CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
						NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
						ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
						TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
						CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
						POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
						PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
					},
					leftMatch: {},
					attrMap: {
						"class": "className",
						"for": "htmlFor"
					},
					attrHandle: {
						href: function(a) {
							return a.getAttribute("href")
						},
						type: function(a) {
							return a.getAttribute("type")
						}
					},
					relative: {
						"+": function(a, b) {
							var c = typeof b == "string",
								d = c && !j.test(b),
								e = c && !d;
							d && (b = b.toLowerCase());
							for (var f = 0, g = a.length, h; f < g; f++)
								if (h = a[f]) {
									while ((h = h.previousSibling) && h.nodeType !== 1);
									a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
								} e && k.filter(b, a, !0)
						},
						">": function(a, b) {
							var c, d = typeof b == "string",
								e = 0,
								f = a.length;
							if (d && !j.test(b)) {
								b = b.toLowerCase();
								for (; e < f; e++) {
									c = a[e];
									if (c) {
										var g = c.parentNode;
										a[e] = g.nodeName.toLowerCase() === b ? g : !1
									}
								}
							} else {
								for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
								d && k.filter(b, a, !0)
							}
						},
						"": function(a, b, c) {
							var e, f = d++,
								g = u;
							typeof b == "string" && !j.test(b) && (b = b.toLowerCase(), e = b, g = t), g("parentNode", b, f, a, e, c)
						},
						"~": function(a, b, c) {
							var e, f = d++,
								g = u;
							typeof b == "string" && !j.test(b) && (b = b.toLowerCase(), e = b, g = t), g("previousSibling", b, f, a, e, c)
						}
					},
					find: {
						ID: function(a, b, c) {
							if (typeof b.getElementById != "undefined" && !c) {
								var d = b.getElementById(a[1]);
								return d && d.parentNode ? [d] : []
							}
						},
						NAME: function(a, b) {
							if (typeof b.getElementsByName != "undefined") {
								var c = [],
									d = b.getElementsByName(a[1]);
								for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
								return c.length === 0 ? null : c
							}
						},
						TAG: function(a, b) {
							if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
						}
					},
					preFilter: {
						CLASS: function(a, b, c, d, e, f) {
							a = " " + a[1].replace(i, "") + " ";
							if (f) return a;
							for (var g = 0, h;
								(h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(
								a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
							return !1
						},
						ID: function(a) {
							return a[1].replace(i, "")
						},
						TAG: function(a, b) {
							return a[1].replace(i, "").toLowerCase()
						},
						CHILD: function(a) {
							if (a[1] === "nth") {
								a[2] || k.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
								var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[
									2]) && "0n+" + a[2] || a[2]);
								a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
							} else a[2] && k.error(a[0]);
							a[0] = d++;
							return a
						},
						ATTR: function(a, b, c, d, e, f) {
							var g = a[1] = a[1].replace(i, "");
							!f && l.attrMap[g] && (a[1] = l.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(i, ""), a[2] === "~=" && (a[4] =
								" " + a[4] + " ");
							return a
						},
						PSEUDO: function(b, c, d, e, f) {
							if (b[1] === "not")
								if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = k(b[3], null, null, c);
								else {
									var g = k.filter(b[3], c, d, !0 ^ f);
									d || e.push.apply(e, g);
									return !1
								}
							else if (l.match.POS.test(b[0]) || l.match.CHILD.test(b[0])) return !0;
							return b
						},
						POS: function(a) {
							a.unshift(!0);
							return a
						}
					},
					filters: {
						enabled: function(a) {
							return a.disabled === !1 && a.type !== "hidden"
						},
						disabled: function(a) {
							return a.disabled === !0
						},
						checked: function(a) {
							return a.checked === !0
						},
						selected: function(a) {
							a.parentNode && a.parentNode.selectedIndex;
							return a.selected === !0
						},
						parent: function(a) {
							return !!a.firstChild
						},
						empty: function(a) {
							return !a.firstChild
						},
						has: function(a, b, c) {
							return !!k(c[3], a).length
						},
						header: function(a) {
							return /h\d/i.test(a.nodeName)
						},
						text: function(a) {
							var b = a.getAttribute("type"),
								c = a.type;
							return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
						},
						radio: function(a) {
							return a.nodeName.toLowerCase() === "input" && "radio" === a.type
						},
						checkbox: function(a) {
							return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
						},
						file: function(a) {
							return a.nodeName.toLowerCase() === "input" && "file" === a.type
						},
						password: function(a) {
							return a.nodeName.toLowerCase() === "input" && "password" === a.type
						},
						submit: function(a) {
							var b = a.nodeName.toLowerCase();
							return (b === "input" || b === "button") && "submit" === a.type
						},
						image: function(a) {
							return a.nodeName.toLowerCase() === "input" && "image" === a.type
						},
						reset: function(a) {
							var b = a.nodeName.toLowerCase();
							return (b === "input" || b === "button") && "reset" === a.type
						},
						button: function(a) {
							var b = a.nodeName.toLowerCase();
							return b === "input" && "button" === a.type || b === "button"
						},
						input: function(a) {
							return /input|select|textarea|button/i.test(a.nodeName)
						},
						focus: function(a) {
							return a === a.ownerDocument.activeElement
						}
					},
					setFilters: {
						first: function(a, b) {
							return b === 0
						},
						last: function(a, b, c, d) {
							return b === d.length - 1
						},
						even: function(a, b) {
							return b % 2 === 0
						},
						odd: function(a, b) {
							return b % 2 === 1
						},
						lt: function(a, b, c) {
							return b < c[3] - 0
						},
						gt: function(a, b, c) {
							return b > c[3] - 0
						},
						nth: function(a, b, c) {
							return c[3] - 0 === b
						},
						eq: function(a, b, c) {
							return c[3] - 0 === b
						}
					},
					filter: {
						PSEUDO: function(a, b, c, d) {
							var e = b[1],
								f = l.filters[e];
							if (f) return f(a, c, b, d);
							if (e === "contains") return (a.textContent || a.innerText || k.getText([a]) || "").indexOf(b[3]) >= 0;
							if (e === "not") {
								var g = b[3];
								for (var h = 0, i = g.length; h < i; h++)
									if (g[h] === a) return !1;
								return !0
							}
							k.error(e)
						},
						CHILD: function(a, b) {
							var c = b[1],
								d = a;
							switch (c) {
								case "only":
								case "first":
									while (d = d.previousSibling)
										if (d.nodeType === 1) return !1;
									if (c === "first") return !0;
									d = a;
								case "last":
									while (d = d.nextSibling)
										if (d.nodeType === 1) return !1;
									return !0;
								case "nth":
									var e = b[2],
										f = b[3];
									if (e === 1 && f === 0) return !0;
									var g = b[0],
										h = a.parentNode;
									if (h && (h.sizcache !== g || !a.nodeIndex)) {
										var i = 0;
										for (d = h.firstChild; d; d = d.nextSibling) d.nodeType === 1 && (d.nodeIndex = ++i);
										h.sizcache = g
									}
									var j = a.nodeIndex - f;
									return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
							}
						},
						ID: function(a, b) {
							return a.nodeType === 1 && a.getAttribute("id") === b
						},
						TAG: function(a, b) {
							return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
						},
						CLASS: function(a, b) {
							return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
						},
						ATTR: function(a, b) {
							var c = b[1],
								d = l.attrHandle[c] ? l.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
								e = d + "",
								f = b[2],
								g = b[4];
							return d == null ? f === "!=" : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e +
								" ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length -
								g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
						},
						POS: function(a, b, c, d) {
							var e = b[2],
								f = l.setFilters[e];
							if (f) return f(a, c, b, d)
						}
					}
				},
				m = l.match.POS,
				n = function(a, b) {
					return "\\" + (b - 0 + 1)
				};
			for (var o in l.match) l.match[o] = new RegExp(l.match[o].source + /(?![^\[]*\])(?![^\(]*\))/.source), l.leftMatch[
				o] = new RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[o].source.replace(/\\(\d+)/g, n));
			var p = function(a, b) {
				a = Array.prototype.slice.call(a, 0);
				if (b) {
					b.push.apply(b, a);
					return b
				}
				return a
			};
			try {
				Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
			} catch (q) {
				p = function(a, b) {
					var c = 0,
						d = b || [];
					if (e.call(a) === "[object Array]") Array.prototype.push.apply(d, a);
					else if (typeof a.length == "number")
						for (var f = a.length; c < f; c++) d.push(a[c]);
					else
						for (; a[c]; c++) d.push(a[c]);
					return d
				}
			}
			var r, s;
			c.documentElement.compareDocumentPosition ? r = function(a, b) {
					if (a === b) {
						g = !0;
						return 0
					}
					if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
					return a.compareDocumentPosition(b) & 4 ? -1 : 1
				} : (r = function(a, b) {
					if (a === b) {
						g = !0;
						return 0
					}
					if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
					var c, d, e = [],
						f = [],
						h = a.parentNode,
						i = b.parentNode,
						j = h;
					if (h === i) return s(a, b);
					if (!h) return -1;
					if (!i) return 1;
					while (j) e.unshift(j), j = j.parentNode;
					j = i;
					while (j) f.unshift(j), j = j.parentNode;
					c = e.length, d = f.length;
					for (var k = 0; k < c && k < d; k++)
						if (e[k] !== f[k]) return s(e[k], f[k]);
					return k === c ? s(a, f[k], -1) : s(e[k], b, 1)
				}, s = function(a, b, c) {
					if (a === b) return c;
					var d = a.nextSibling;
					while (d) {
						if (d === b) return -1;
						d = d.nextSibling
					}
					return 1
				}), k.getText = function(a) {
					var b = "",
						c;
					for (var d = 0; a[d]; d++) c = a[d], c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c.nodeType !== 8 &&
						(b += k.getText(c.childNodes));
					return b
				},
				function() {
					var a = c.createElement("div"),
						d = "script" + (new Date).getTime(),
						e = c.documentElement;
					a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (l.find.ID =
						function(a, c, d) {
							if (typeof c.getElementById != "undefined" && !d) {
								var e = c.getElementById(a[1]);
								return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue ===
									a[1] ? [e] : b : []
							}
						}, l.filter.ID = function(a, b) {
							var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
							return a.nodeType === 1 && c && c.nodeValue === b
						}), e.removeChild(a), e = a = null
				}(),
				function() {
					var a = c.createElement("div");
					a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (l.find.TAG = function(a, b) {
							var c = b.getElementsByTagName(a[1]);
							if (a[1] === "*") {
								var d = [];
								for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
								c = d
							}
							return c
						}), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild
						.getAttribute("href") !== "#" && (l.attrHandle.href = function(a) {
							return a.getAttribute("href", 2)
						}), a = null
				}(), c.querySelectorAll && function() {
					var a = k,
						b = c.createElement("div"),
						d = "__sizzle__";
					b.innerHTML = "<p class='TEST'></p>";
					if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
						k = function(b, e, f, g) {
							e = e || c;
							if (!g && !k.isXML(e)) {
								var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
								if (h && (e.nodeType === 1 || e.nodeType === 9)) {
									if (h[1]) return p(e.getElementsByTagName(b), f);
									if (h[2] && l.find.CLASS && e.getElementsByClassName) return p(e.getElementsByClassName(h[2]), f)
								}
								if (e.nodeType === 9) {
									if (b === "body" && e.body) return p([e.body], f);
									if (h && h[3]) {
										var i = e.getElementById(h[3]);
										if (!i || !i.parentNode) return p([], f);
										if (i.id === h[3]) return p([i], f)
									}
									try {
										return p(e.querySelectorAll(b), f)
									} catch (j) {}
								} else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
									var m = e,
										n = e.getAttribute("id"),
										o = n || d,
										q = e.parentNode,
										r = /^\s*[+~]/.test(b);
									n ? o = o.replace(/'/g, "\\$&") : e.setAttribute("id", o), r && q && (e = e.parentNode);
									try {
										if (!r || q) return p(e.querySelectorAll("[id='" + o + "'] " + b), f)
									} catch (s) {} finally {
										n || m.removeAttribute("id")
									}
								}
							}
							return a(b, e, f, g)
						};
						for (var e in a) k[e] = a[e];
						b = null
					}
				}(),
				function() {
					var a = c.documentElement,
						b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
					if (b) {
						var d = !b.call(c.createElement("div"), "div"),
							e = !1;
						try {
							b.call(c.documentElement, "[test!='']:sizzle")
						} catch (f) {
							e = !0
						}
						k.matchesSelector = function(a, c) {
							c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
							if (!k.isXML(a)) try {
								if (e || !l.match.PSEUDO.test(c) && !/!=/.test(c)) {
									var f = b.call(a, c);
									if (f || !d || a.document && a.document.nodeType !== 11) return f
								}
							} catch (g) {}
							return k(c, null, null, [a]).length > 0
						}
					}
				}(),
				function() {
					var a = c.createElement("div");
					a.innerHTML = "<div class='test e'></div><div class='test'></div>";
					if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
						a.lastChild.className = "e";
						if (a.getElementsByClassName("e").length === 1) return;
						l.order.splice(1, 0, "CLASS"), l.find.CLASS = function(a, b, c) {
							if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
						}, a = null
					}
				}(), c.documentElement.contains ? k.contains = function(a, b) {
					return a !== b && (a.contains ? a.contains(b) : !0)
				} : c.documentElement.compareDocumentPosition ? k.contains = function(a, b) {
					return !!(a.compareDocumentPosition(b) & 16)
				} : k.contains = function() {
					return !1
				}, k.isXML = function(a) {
					var b = (a ? a.ownerDocument || a : 0).documentElement;
					return b ? b.nodeName !== "HTML" : !1
				};
			var v = function(a, b) {
				var c, d = [],
					e = "",
					f = b.nodeType ? [b] : b;
				while (c = l.match.PSEUDO.exec(a)) e += c[0], a = a.replace(l.match.PSEUDO, "");
				a = l.relative[a] ? a + "*" : a;
				for (var g = 0, h = f.length; g < h; g++) k(a, f[g], d);
				return k.filter(e, d)
			};
			f.find = k, f.expr = k.selectors, f.expr[":"] = f.expr.filters, f.unique = k.uniqueSort, f.text = k.getText, f.isXMLDoc =
				k.isXML, f.contains = k.contains
		}();
	var O = /Until$/,
		P = /^(?:parents|prevUntil|prevAll)/,
		Q = /,/,
		R = /^.[^:#\[\.,]*$/,
		S = Array.prototype.slice,
		T = f.expr.match.POS,
		U = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	f.fn.extend({
		find: function(a) {
			var b = this,
				c, d;
			if (typeof a != "string") return f(a).filter(function() {
				for (c = 0, d = b.length; c < d; c++)
					if (f.contains(b[c], this)) return !0
			});
			var e = this.pushStack("", "find", a),
				g, h, i;
			for (c = 0, d = this.length; c < d; c++) {
				g = e.length, f.find(a, this[c], e);
				if (c > 0)
					for (h = g; h < e.length; h++)
						for (i = 0; i < g; i++)
							if (e[i] === e[h]) {
								e.splice(h--, 1);
								break
							}
			}
			return e
		},
		has: function(a) {
			var b = f(a);
			return this.filter(function() {
				for (var a = 0, c = b.length; a < c; a++)
					if (f.contains(this, b[a])) return !0
			})
		},
		not: function(a) {
			return this.pushStack(W(this, a, !1), "not", a)
		},
		filter: function(a) {
			return this.pushStack(W(this, a, !0), "filter", a)
		},
		is: function(a) {
			return !!a && (typeof a == "string" ? f.filter(a, this).length > 0 : this.filter(a).length > 0)
		},
		closest: function(a, b) {
			var c = [],
				d, e, g = this[0];
			if (f.isArray(a)) {
				var h, i, j = {},
					k = 1;
				if (g && a.length) {
					for (d = 0, e = a.length; d < e; d++) i = a[d], j[i] || (j[i] = T.test(i) ? f(i, b || this.context) : i);
					while (g && g.ownerDocument && g !== b) {
						for (i in j) h = j[i], (h.jquery ? h.index(g) > -1 : f(g).is(h)) && c.push({
							selector: i,
							elem: g,
							level: k
						});
						g = g.parentNode, k++
					}
				}
				return c
			}
			var l = T.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
			for (d = 0, e = this.length; d < e; d++) {
				g = this[d];
				while (g) {
					if (l ? l.index(g) > -1 : f.find.matchesSelector(g, a)) {
						c.push(g);
						break
					}
					g = g.parentNode;
					if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
				}
			}
			c = c.length > 1 ? f.unique(c) : c;
			return this.pushStack(c, "closest", a)
		},
		index: function(a) {
			if (!a || typeof a == "string") return f.inArray(this[0], a ? f(a) : this.parent().children());
			return f.inArray(a.jquery ? a[0] : a, this)
		},
		add: function(a, b) {
			var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
				d = f.merge(this.get(), c);
			return this.pushStack(V(c[0]) || V(d[0]) ? d : f.unique(d))
		},
		andSelf: function() {
			return this.add(this.prevObject)
		}
	}), f.each({
		parent: function(a) {
			var b = a.parentNode;
			return b && b.nodeType !== 11 ? b : null
		},
		parents: function(a) {
			return f.dir(a, "parentNode")
		},
		parentsUntil: function(a, b, c) {
			return f.dir(a, "parentNode", c)
		},
		next: function(a) {
			return f.nth(a, 2, "nextSibling")
		},
		prev: function(a) {
			return f.nth(a, 2, "previousSibling")
		},
		nextAll: function(a) {
			return f.dir(a, "nextSibling")
		},
		prevAll: function(a) {
			return f.dir(a, "previousSibling")
		},
		nextUntil: function(a, b, c) {
			return f.dir(a, "nextSibling", c)
		},
		prevUntil: function(a, b, c) {
			return f.dir(a, "previousSibling", c)
		},
		siblings: function(a) {
			return f.sibling(a.parentNode.firstChild, a)
		},
		children: function(a) {
			return f.sibling(a.firstChild)
		},
		contents: function(a) {
			return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
		}
	}, function(a, b) {
		f.fn[a] = function(c, d) {
			var e = f.map(this, b, c),
				g = S.call(arguments);
			O.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !U[a] ? f.unique(
				e) : e, (this.length > 1 || Q.test(d)) && P.test(a) && (e = e.reverse());
			return this.pushStack(e, a, g.join(","))
		}
	}), f.extend({
		filter: function(a, b, c) {
			c && (a = ":not(" + a + ")");
			return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
		},
		dir: function(a, c, d) {
			var e = [],
				g = a[c];
			while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g =
				g[c];
			return e
		},
		nth: function(a, b, c, d) {
			b = b || 1;
			var e = 0;
			for (; a; a = a[c])
				if (a.nodeType === 1 && ++e === b) break;
			return a
		},
		sibling: function(a, b) {
			var c = [];
			for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
			return c
		}
	});
	var X = / jQuery\d+="(?:\d+|null)"/g,
		Y = /^\s+/,
		Z = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
		$ = /<([\w:]+)/,
		_ = /<tbody/i,
		ba = /<|&#?\w+;/,
		bb = /<(?:script|object|embed|option|style)/i,
		bc = /checked\s*(?:[^=]|=\s*.checked.)/i,
		bd = /\/(java|ecma)script/i,
		be = /^\s*<!(?:\[CDATA\[|\-\-)/,
		bf = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			area: [1, "<map>", "</map>"],
			_default: [0, "", ""]
		};
	bf.optgroup = bf.option, bf.tbody = bf.tfoot = bf.colgroup = bf.caption = bf.thead, bf.th = bf.td, f.support.htmlSerialize ||
		(bf._default = [1, "div<div>", "</div>"]), f.fn.extend({
			text: function(a) {
				if (f.isFunction(a)) return this.each(function(b) {
					var c = f(this);
					c.text(a.call(this, b, c.text()))
				});
				if (typeof a != "object" && a !== b) return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(
					a));
				return f.text(this)
			},
			wrapAll: function(a) {
				if (f.isFunction(a)) return this.each(function(b) {
					f(this).wrapAll(a.call(this, b))
				});
				if (this[0]) {
					var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
						var a = this;
						while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
						return a
					}).append(this)
				}
				return this
			},
			wrapInner: function(a) {
				if (f.isFunction(a)) return this.each(function(b) {
					f(this).wrapInner(a.call(this, b))
				});
				return this.each(function() {
					var b = f(this),
						c = b.contents();
					c.length ? c.wrapAll(a) : b.append(a)
				})
			},
			wrap: function(a) {
				return this.each(function() {
					f(this).wrapAll(a)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
				}).end()
			},
			append: function() {
				return this.domManip(arguments, !0, function(a) {
					this.nodeType === 1 && this.appendChild(a)
				})
			},
			prepend: function() {
				return this.domManip(arguments, !0, function(a) {
					this.nodeType === 1 && this.insertBefore(a, this.firstChild)
				})
			},
			before: function() {
				if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
					this.parentNode.insertBefore(a, this)
				});
				if (arguments.length) {
					var a = f(arguments[0]);
					a.push.apply(a, this.toArray());
					return this.pushStack(a, "before", arguments)
				}
			},
			after: function() {
				if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) {
					this.parentNode.insertBefore(a, this.nextSibling)
				});
				if (arguments.length) {
					var a = this.pushStack(this, "after", arguments);
					a.push.apply(a, f(arguments[0]).toArray());
					return a
				}
			},
			remove: function(a, b) {
				for (var c = 0, d;
					(d = this[c]) != null; c++)
					if (!a || f.filter(a, [d]).length) !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData(
						[d])), d.parentNode && d.parentNode.removeChild(d);
				return this
			},
			empty: function() {
				for (var a = 0, b;
					(b = this[a]) != null; a++) {
					b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
					while (b.firstChild) b.removeChild(b.firstChild)
				}
				return this
			},
			clone: function(a, b) {
				a = a == null ? !1 : a, b = b == null ? a : b;
				return this.map(function() {
					return f.clone(this, a, b)
				})
			},
			html: function(a) {
				if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(X, "") : null;
				if (typeof a == "string" && !bb.test(a) && (f.support.leadingWhitespace || !Y.test(a)) && !bf[($.exec(a) || ["",
						""
					])[1].toLowerCase()]) {
					a = a.replace(Z, "<$1></$2>");
					try {
						for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName(
							"*")), this[c].innerHTML = a)
					} catch (e) {
						this.empty().append(a)
					}
				} else f.isFunction(a) ? this.each(function(b) {
					var c = f(this);
					c.html(a.call(this, b, c.html()))
				}) : this.empty().append(a);
				return this
			},
			replaceWith: function(a) {
				if (this[0] && this[0].parentNode) {
					if (f.isFunction(a)) return this.each(function(b) {
						var c = f(this),
							d = c.html();
						c.replaceWith(a.call(this, b, d))
					});
					typeof a != "string" && (a = f(a).detach());
					return this.each(function() {
						var b = this.nextSibling,
							c = this.parentNode;
						f(this).remove(), b ? f(b).before(a) : f(c).append(a)
					})
				}
				return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
			},
			detach: function(a) {
				return this.remove(a, !0)
			},
			domManip: function(a, c, d) {
				var e, g, h, i, j = a[0],
					k = [];
				if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bc.test(j)) return this.each(
					function() {
						f(this).domManip(a, c, d, !0)
					});
				if (f.isFunction(j)) return this.each(function(e) {
					var g = f(this);
					a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
				});
				if (this[0]) {
					i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ?
						e = {
							fragment: i
						} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
					if (g) {
						c = c && f.nodeName(g, "tr");
						for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bg(this[l], g) : this[l], e.cacheable || m >
							1 && l < n ? f.clone(h, !0, !0) : h)
					}
					k.length && f.each(k, bm)
				}
				return this
			}
		}), f.buildFragment = function(a, b, d) {
			var e, g, h, i;
			b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof a[0] ==
				"string" && a[0].length < 512 && i === c && a[0].charAt(0) === "<" && !bb.test(a[0]) && (f.support.checkClone || !
					bc.test(a[0])) && (g = !0, h = f.fragments[a[0]], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(),
					f.clean(a, i, e, d)), g && (f.fragments[a[0]] = h ? e : 1);
			return {
				fragment: e,
				cacheable: g
			}
		}, f.fragments = {}, f.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(a, b) {
			f.fn[a] = function(c) {
				var d = [],
					e = f(c),
					g = this.length === 1 && this[0].parentNode;
				if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
					e[b](this[0]);
					return this
				}
				for (var h = 0, i = e.length; h < i; h++) {
					var j = (h > 0 ? this.clone(!0) : this).get();
					f(e[h])[b](j), d = d.concat(j)
				}
				return this.pushStack(d, a, e.selector)
			}
		}), f.extend({
			clone: function(a, b, c) {
				var d = a.cloneNode(!0),
					e, g, h;
				if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(
						a)) {
					bi(a, d), e = bj(a), g = bj(d);
					for (h = 0; e[h]; ++h) bi(e[h], g[h])
				}
				if (b) {
					bh(a, d);
					if (c) {
						e = bj(a), g = bj(d);
						for (h = 0; e[h]; ++h) bh(e[h], g[h])
					}
				}
				e = g = null;
				return d
			},
			clean: function(a, b, d, e) {
				var g;
				b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
				var h = [],
					i;
				for (var j = 0, k;
					(k = a[j]) != null; j++) {
					typeof k == "number" && (k += "");
					if (!k) continue;
					if (typeof k == "string")
						if (!ba.test(k)) k = b.createTextNode(k);
						else {
							k = k.replace(Z, "<$1></$2>");
							var l = ($.exec(k) || ["", ""])[1].toLowerCase(),
								m = bf[l] || bf._default,
								n = m[0],
								o = b.createElement("div");
							o.innerHTML = m[1] + k + m[2];
							while (n--) o = o.lastChild;
							if (!f.support.tbody) {
								var p = _.test(k),
									q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes :
									[];
								for (i = q.length - 1; i >= 0; --i) f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(
									q[i])
							}!f.support.leadingWhitespace && Y.test(k) && o.insertBefore(b.createTextNode(Y.exec(k)[0]), o.firstChild), k =
								o.childNodes
						} var r;
					if (!f.support.appendChecked)
						if (k[0] && typeof(r = k.length) == "number")
							for (i = 0; i < r; i++) bl(k[i]);
						else bl(k);
					k.nodeType ? h.push(k) : h = f.merge(h, k)
				}
				if (d) {
					g = function(a) {
						return !a.type || bd.test(a.type)
					};
					for (j = 0; h[j]; j++)
						if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) e.push(h[
							j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
						else {
							if (h[j].nodeType === 1) {
								var s = f.grep(h[j].getElementsByTagName("script"), g);
								h.splice.apply(h, [j + 1, 0].concat(s))
							}
							d.appendChild(h[j])
						}
				}
				return h
			},
			cleanData: function(a) {
				var b, c, d = f.cache,
					e = f.expando,
					g = f.event.special,
					h = f.support.deleteExpando;
				for (var i = 0, j;
					(j = a[i]) != null; i++) {
					if (j.nodeName && f.noData[j.nodeName.toLowerCase()]) continue;
					c = j[f.expando];
					if (c) {
						b = d[c] && d[c][e];
						if (b && b.events) {
							for (var k in b.events) g[k] ? f.event.remove(j, k) : f.removeEvent(j, k, b.handle);
							b.handle && (b.handle.elem = null)
						}
						h ? delete j[f.expando] : j.removeAttribute && j.removeAttribute(f.expando), delete d[c]
					}
				}
			}
		});
	var bn = /alpha\([^)]*\)/i,
		bo = /opacity=([^)]*)/,
		bp = /([A-Z]|^ms)/g,
		bq = /^-?\d+(?:px)?$/i,
		br = /^-?\d/,
		bs = /^[+\-]=/,
		bt = /[^+\-\.\de]+/g,
		bu = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		bv = ["Left", "Right"],
		bw = ["Top", "Bottom"],
		bx, by, bz;
	f.fn.css = function(a, c) {
		if (arguments.length === 2 && c === b) return this;
		return f.access(this, a, c, !0, function(a, c, d) {
			return d !== b ? f.style(a, c, d) : f.css(a, c)
		})
	}, f.extend({
		cssHooks: {
			opacity: {
				get: function(a, b) {
					if (b) {
						var c = bx(a, "opacity", "opacity");
						return c === "" ? "1" : c
					}
					return a.style.opacity
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": f.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(a, c, d, e) {
			if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
				var g, h, i = f.camelCase(c),
					j = a.style,
					k = f.cssHooks[i];
				c = f.cssProps[i] || i;
				if (d === b) {
					if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
					return j[c]
				}
				h = typeof d;
				if (h === "number" && isNaN(d) || d == null) return;
				h === "string" && bs.test(d) && (d = +d.replace(bt, "") + parseFloat(f.css(a, c)), h = "number"), h ===
					"number" && !f.cssNumber[i] && (d += "px");
				if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
					j[c] = d
				} catch (l) {}
			}
		},
		css: function(a, c, d) {
			var e, g;
			c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
			if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
			if (bx) return bx(a, c)
		},
		swap: function(a, b, c) {
			var d = {};
			for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
			c.call(a);
			for (e in b) a.style[e] = d[e]
		}
	}), f.curCSS = f.css, f.each(["height", "width"], function(a, b) {
		f.cssHooks[b] = {
			get: function(a, c, d) {
				var e;
				if (c) {
					if (a.offsetWidth !== 0) return bA(a, b, d);
					f.swap(a, bu, function() {
						e = bA(a, b, d)
					});
					return e
				}
			},
			set: function(a, b) {
				if (!bq.test(b)) return b;
				b = parseFloat(b);
				if (b >= 0) return b + "px"
			}
		}
	}), f.support.opacity || (f.cssHooks.opacity = {
		get: function(a, b) {
			return bo.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) /
				100 + "" : b ? "1" : ""
		},
		set: function(a, b) {
			var c = a.style,
				d = a.currentStyle;
			c.zoom = 1;
			var e = f.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")",
				g = d && d.filter || c.filter || "";
			c.filter = bn.test(g) ? g.replace(bn, e) : g + " " + e
		}
	}), f(function() {
		f.support.reliableMarginRight || (f.cssHooks.marginRight = {
			get: function(a, b) {
				var c;
				f.swap(a, {
					display: "inline-block"
				}, function() {
					b ? c = bx(a, "margin-right", "marginRight") : c = a.style.marginRight
				});
				return c
			}
		})
	}), c.defaultView && c.defaultView.getComputedStyle && (by = function(a, c) {
		var d, e, g;
		c = c.replace(bp, "-$1").toLowerCase();
		if (!(e = a.ownerDocument.defaultView)) return b;
		if (g = e.getComputedStyle(a, null)) d = g.getPropertyValue(c), d === "" && !f.contains(a.ownerDocument.documentElement,
			a) && (d = f.style(a, c));
		return d
	}), c.documentElement.currentStyle && (bz = function(a, b) {
		var c, d = a.currentStyle && a.currentStyle[b],
			e = a.runtimeStyle && a.runtimeStyle[b],
			f = a.style;
		!bq.test(d) && br.test(d) && (c = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = b ===
			"fontSize" ? "1em" : d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e));
		return d === "" ? "auto" : d
	}), bx = by || bz, f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
		var b = a.offsetWidth,
			c = a.offsetHeight;
		return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style.display || f.css(a, "display")) ===
			"none"
	}, f.expr.filters.visible = function(a) {
		return !f.expr.filters.hidden(a)
	});
	var bB = /%20/g,
		bC = /\[\]$/,
		bD = /\r?\n/g,
		bE = /#.*$/,
		bF = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
		bG = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		bH = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/,
		bI = /^(?:GET|HEAD)$/,
		bJ = /^\/\//,
		bK = /\?/,
		bL = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		bM = /^(?:select|textarea)/i,
		bN = /\s+/,
		bO = /([?&])_=[^&]*/,
		bP = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
		bQ = f.fn.load,
		bR = {},
		bS = {},
		bT, bU;
	try {
		bT = e.href
	} catch (bV) {
		bT = c.createElement("a"), bT.href = "", bT = bT.href
	}
	bU = bP.exec(bT.toLowerCase()) || [], f.fn.extend({
		load: function(a, c, d) {
			if (typeof a != "string" && bQ) return bQ.apply(this, arguments);
			if (!this.length) return this;
			var e = a.indexOf(" ");
			if (e >= 0) {
				var g = a.slice(e, a.length);
				a = a.slice(0, e)
			}
			var h = "GET";
			c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h =
				"POST"));
			var i = this;
			f.ajax({
				url: a,
				type: h,
				dataType: "html",
				data: c,
				complete: function(a, b, c) {
					c = a.responseText, a.isResolved() && (a.done(function(a) {
						c = a
					}), i.html(g ? f("<div>").append(c.replace(bL, "")).find(g) : c)), d && i.each(d, [c, b, a])
				}
			});
			return this
		},
		serialize: function() {
			return f.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				return this.elements ? f.makeArray(this.elements) : this
			}).filter(function() {
				return this.name && !this.disabled && (this.checked || bM.test(this.nodeName) || bG.test(this.type))
			}).map(function(a, b) {
				var c = f(this).val();
				return c == null ? null : f.isArray(c) ? f.map(c, function(a, c) {
					return {
						name: b.name,
						value: a.replace(bD, "\r\n")
					}
				}) : {
					name: b.name,
					value: c.replace(bD, "\r\n")
				}
			}).get()
		}
	}), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
		f.fn[b] = function(a) {
			return this.bind(b, a)
		}
	}), f.each(["get", "post"], function(a, c) {
		f[c] = function(a, d, e, g) {
			f.isFunction(d) && (g = g || e, e = d, d = b);
			return f.ajax({
				type: c,
				url: a,
				data: d,
				success: e,
				dataType: g
			})
		}
	}), f.extend({
		getScript: function(a, c) {
			return f.get(a, b, c, "script")
		},
		getJSON: function(a, b, c) {
			return f.get(a, b, c, "json")
		},
		ajaxSetup: function(a, b) {
			b ? f.extend(!0, a, f.ajaxSettings, b) : (b = a, a = f.extend(!0, f.ajaxSettings, b));
			for (var c in {
					context: 1,
					url: 1
				}) c in b ? a[c] = b[c] : c in f.ajaxSettings && (a[c] = f.ajaxSettings[c]);
			return a
		},
		ajaxSettings: {
			url: bT,
			isLocal: bH.test(bU[1]),
			global: !0,
			type: "GET",
			contentType: "application/x-www-form-urlencoded",
			processData: !0,
			async: !0,
			accepts: {
				xml: "application/xml, text/xml",
				html: "text/html",
				text: "text/plain",
				json: "application/json, text/javascript",
				"*": "*/*"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": a.String,
				"text html": !0,
				"text json": f.parseJSON,
				"text xml": f.parseXML
			}
		},
		ajaxPrefilter: bW(bR),
		ajaxTransport: bW(bS),
		ajax: function(a, c) {
			function w(a, c, l, m) {
				if (s !== 2) {
					s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a ? 4 : 0;
					var o, r, u, w = l ? bZ(d, v, l) : b,
						x, y;
					if (a >= 200 && a < 300 || a === 304) {
						if (d.ifModified) {
							if (x = v.getResponseHeader("Last-Modified")) f.lastModified[k] = x;
							if (y = v.getResponseHeader("Etag")) f.etag[k] = y
						}
						if (a === 304) c = "notmodified", o = !0;
						else try {
							r = b$(d, w), c = "success", o = !0
						} catch (z) {
							c = "parsererror", u = z
						}
					} else {
						u = c;
						if (!c || a) c = "error", a < 0 && (a = 0)
					}
					v.status = a, v.statusText = c, o ? h.resolveWith(e, [r, c, v]) : h.rejectWith(e, [v, c, u]), v.statusCode(j),
						j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.resolveWith(e, [v, c]), t &&
						(g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
				}
			}
			typeof a == "object" && (c = a, a = b), c = c || {};
			var d = f.ajaxSetup({}, c),
				e = d.context || d,
				g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
				h = f.Deferred(),
				i = f._Deferred(),
				j = d.statusCode || {},
				k, l = {},
				m = {},
				n, o, p, q, r, s = 0,
				t, u, v = {
					readyState: 0,
					setRequestHeader: function(a, b) {
						if (!s) {
							var c = a.toLowerCase();
							a = m[c] = m[c] || a, l[a] = b
						}
						return this
					},
					getAllResponseHeaders: function() {
						return s === 2 ? n : null
					},
					getResponseHeader: function(a) {
						var c;
						if (s === 2) {
							if (!o) {
								o = {};
								while (c = bF.exec(n)) o[c[1].toLowerCase()] = c[2]
							}
							c = o[a.toLowerCase()]
						}
						return c === b ? null : c
					},
					overrideMimeType: function(a) {
						s || (d.mimeType = a);
						return this
					},
					abort: function(a) {
						a = a || "abort", p && p.abort(a), w(0, a);
						return this
					}
				};
			h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.done, v.statusCode = function(a) {
					if (a) {
						var b;
						if (s < 2)
							for (b in a) j[b] = [j[b], a[b]];
						else b = a[v.status], v.then(b, b)
					}
					return this
				}, d.url = ((a || d.url) + "").replace(bE, "").replace(bJ, bU[1] + "//"), d.dataTypes = f.trim(d.dataType ||
					"*").toLowerCase().split(bN), d.crossDomain == null && (r = bP.exec(d.url.toLowerCase()), d.crossDomain = !(!r ||
					r[1] == bU[1] && r[2] == bU[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bU[3] || (bU[1] === "http:" ?
						80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)),
				bX(bR, d, c, v);
			if (s === 2) return !1;
			t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bI.test(d.type), t && f.active++ === 0 && f.event.trigger(
				"ajaxStart");
			if (!d.hasContent) {
				d.data && (d.url += (bK.test(d.url) ? "&" : "?") + d.data), k = d.url;
				if (d.cache === !1) {
					var x = f.now(),
						y = d.url.replace(bO, "$1_=" + x);
					d.url = y + (y === d.url ? (bK.test(d.url) ? "&" : "?") + "_=" + x : "")
				}
			}(d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),
				d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]),
					f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d
					.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : d.accepts[
						"*"]);
			for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
			if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
				v.abort();
				return !1
			}
			for (u in {
					success: 1,
					error: 1,
					complete: 1
				}) v[u](d[u]);
			p = bX(bS, d, c, v);
			if (!p) w(-1, "No Transport");
			else {
				v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function() {
					v.abort("timeout")
				}, d.timeout));
				try {
					s = 1, p.send(l, w)
				} catch (z) {
					status < 2 ? w(-1, z) : f.error(z)
				}
			}
			return v
		},
		param: function(a, c) {
			var d = [],
				e = function(a, b) {
					b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
				};
			c === b && (c = f.ajaxSettings.traditional);
			if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function() {
				e(this.name, this.value)
			});
			else
				for (var g in a) bY(g, a[g], c, e);
			return d.join("&").replace(bB, "+")
		}
	}), f.extend({
		active: 0,
		lastModified: {},
		etag: {}
	});
	var b_ = f.now(),
		ca = /(\=)\?(&|$)|\?\?/i;
	f.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			return f.expando + "_" + b_++
		}
	}), f.ajaxPrefilter("json jsonp", function(b, c, d) {
		var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
		if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ca.test(b.url) || e && ca.test(b.data))) {
			var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
				i = a[h],
				j = b.url,
				k = b.data,
				l = "$1" + h + "$2";
			b.jsonp !== !1 && (j = j.replace(ca, l), b.url === j && (e && (k = k.replace(ca, l)), b.data === k && (j += (/\?/
				.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function(a) {
				g = [a]
			}, d.always(function() {
				a[h] = i, g && f.isFunction(i) && a[h](g[0])
			}), b.converters["script json"] = function() {
				g || f.error(h + " was not called");
				return g[0]
			}, b.dataTypes[0] = "json";
			return "script"
		}
	}), f.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /javascript|ecmascript/
		},
		converters: {
			"text script": function(a) {
				f.globalEval(a);
				return a
			}
		}
	}), f.ajaxPrefilter("script", function(a) {
		a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
	}), f.ajaxTransport("script", function(a) {
		if (a.crossDomain) {
			var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
			return {
				send: function(f, g) {
					d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url,
						d.onload = d.onreadystatechange = function(a, c) {
							if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e &&
								d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
						}, e.insertBefore(d, e.firstChild)
				},
				abort: function() {
					d && d.onload(0, 1)
				}
			}
		}
	});
	var cb = a.ActiveXObject ? function() {
			for (var a in cd) cd[a](0, 1)
		} : !1,
		cc = 0,
		cd;
	f.ajaxSettings.xhr = a.ActiveXObject ? function() {
			return !this.isLocal && ce() || cf()
		} : ce,
		function(a) {
			f.extend(f.support, {
				ajax: !!a,
				cors: !!a && "withCredentials" in a
			})
		}(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function(c) {
			if (!c.crossDomain || f.support.cors) {
				var d;
				return {
					send: function(e, g) {
						var h = c.xhr(),
							i, j;
						c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
						if (c.xhrFields)
							for (j in c.xhrFields) h[j] = c.xhrFields[j];
						c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] &&
							(e["X-Requested-With"] = "XMLHttpRequest");
						try {
							for (j in e) h.setRequestHeader(j, e[j])
						} catch (k) {}
						h.send(c.hasContent && c.data || null), d = function(a, e) {
							var j, k, l, m, n;
							try {
								if (d && (e || h.readyState === 4)) {
									d = b, i && (h.onreadystatechange = f.noop, cb && delete cd[i]);
									if (e) h.readyState !== 4 && h.abort();
									else {
										j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml =
											n), m.text = h.responseText;
										try {
											k = h.statusText
										} catch (o) {
											k = ""
										}!j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
									}
								}
							} catch (p) {
								e || g(-1, p)
							}
							m && g(j, k, m, l)
						}, !c.async || h.readyState === 4 ? d() : (i = ++cc, cb && (cd || (cd = {}, f(a).unload(cb)), cd[i] = d), h.onreadystatechange =
							d)
					},
					abort: function() {
						d && d(0, 1)
					}
				}
			}
		});
	var cg = {},
		ch, ci, cj = /^(?:toggle|show|hide)$/,
		ck = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
		cl, cm = [
			["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
			["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
			["opacity"]
		],
		cn, co = a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
	f.fn.extend({
		show: function(a, b, c) {
			var d, e;
			if (a || a === 0) return this.animate(cr("show", 3), a, b, c);
			for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d,
				"olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(
				d, "olddisplay", cs(d.nodeName)));
			for (g = 0; g < h; g++) {
				d = this[g];
				if (d.style) {
					e = d.style.display;
					if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
				}
			}
			return this
		},
		hide: function(a, b, c) {
			if (a || a === 0) return this.animate(cr("hide", 3), a, b, c);
			for (var d = 0, e = this.length; d < e; d++)
				if (this[d].style) {
					var g = f.css(this[d], "display");
					g !== "none" && !f._data(this[d], "olddisplay") && f._data(this[d], "olddisplay", g)
				} for (d = 0; d < e; d++) this[d].style && (this[d].style.display = "none");
			return this
		},
		_toggle: f.fn.toggle,
		toggle: function(a, b, c) {
			var d = typeof a == "boolean";
			f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function() {
				var b = d ? a : f(this).is(":hidden");
				f(this)[b ? "show" : "hide"]()
			}) : this.animate(cr("toggle", 3), a, b, c);
			return this
		},
		fadeTo: function(a, b, c, d) {
			return this.filter(":hidden").css("opacity", 0).show().end().animate({
				opacity: b
			}, a, c, d)
		},
		animate: function(a, b, c, d) {
			var e = f.speed(b, c, d);
			if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
			a = f.extend({}, a);
			return this[e.queue === !1 ? "each" : "queue"](function() {
				e.queue === !1 && f._mark(this);
				var b = f.extend({}, e),
					c = this.nodeType === 1,
					d = c && f(this).is(":hidden"),
					g, h, i, j, k, l, m, n, o;
				b.animatedProperties = {};
				for (i in a) {
					g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] =
							h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing ||
						"swing";
					if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
					c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style
						.overflowY
					], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (f.support.inlineBlockNeedsLayout ?
						(j = cs(this.nodeName), j === "inline" ? this.style.display = "inline-block" : (this.style.display =
							"inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
				}
				b.overflow != null && (this.style.overflow = "hidden");
				for (i in a) k = new f.fx(this, b, i), h = a[i], cj.test(h) ? k[h === "toggle" ? d ? "show" : "hide" : h]() :
					(l = ck.exec(h), m = k.cur(), l ? (n = parseFloat(l[2]), o = l[3] || (f.cssNumber[i] ? "" : "px"), o !==
						"px" && (f.style(this, i, (n || 1) + o), m = (n || 1) / k.cur() * m, f.style(this, i, m + o)), l[1] && (n =
							(l[1] === "-=" ? -1 : 1) * n + m), k.custom(m, n, o)) : k.custom(m, h, ""));
				return !0
			})
		},
		stop: function(a, b) {
			a && this.queue([]), this.each(function() {
				var a = f.timers,
					c = a.length;
				b || f._unmark(!0, this);
				while (c--) a[c].elem === this && (b && a[c](!0), a.splice(c, 1))
			}), b || this.dequeue();
			return this
		}
	}), f.each({
		slideDown: cr("show", 1),
		slideUp: cr("hide", 1),
		slideToggle: cr("toggle", 1),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(a, b) {
		f.fn[a] = function(a, c, d) {
			return this.animate(b, a, c, d)
		}
	}), f.extend({
		speed: function(a, b, c) {
			var d = a && typeof a == "object" ? f.extend({}, a) : {
				complete: c || !c && b || f.isFunction(a) && a,
				duration: a,
				easing: c && b || b && !f.isFunction(b) && b
			};
			d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[
				d.duration] : f.fx.speeds._default, d.old = d.complete, d.complete = function(a) {
				f.isFunction(d.old) && d.old.call(this), d.queue !== !1 ? f.dequeue(this) : a !== !1 && f._unmark(this)
			};
			return d
		},
		easing: {
			linear: function(a, b, c, d) {
				return c + d * a
			},
			swing: function(a, b, c, d) {
				return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
			}
		},
		timers: [],
		fx: function(a, b, c) {
			this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
		}
	}), f.fx.prototype = {
		update: function() {
			this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)
				(this)
		},
		cur: function() {
			if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[
				this.prop];
			var a, b = f.css(this.elem, this.prop);
			return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
		},
		custom: function(a, b, c) {
			function h(a) {
				return d.step(a)
			}
			var d = this,
				e = f.fx,
				g;
			this.startTime = cn || cp(), this.start = a, this.end = b, this.unit = c || this.unit || (f.cssNumber[this.prop] ?
					"" : "px"), this.now = this.start, this.pos = this.state = 0, h.elem = this.elem, h() && f.timers.push(h) && !
				cl && (co ? (cl = !0, g = function() {
					cl && (co(g), e.tick())
				}, co(g)) : cl = setInterval(e.tick, e.interval))
		},
		show: function() {
			this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop ===
				"width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
		},
		hide: function() {
			this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
		},
		step: function(a) {
			var b = cn || cp(),
				c = !0,
				d = this.elem,
				e = this.options,
				g, h;
			if (a || b >= e.duration + this.startTime) {
				this.now = this.end, this.pos = this.state = 1, this.update(), e.animatedProperties[this.prop] = !0;
				for (g in e.animatedProperties) e.animatedProperties[g] !== !0 && (c = !1);
				if (c) {
					e.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function(a, b) {
						d.style["overflow" + b] = e.overflow[a]
					}), e.hide && f(d).hide();
					if (e.hide || e.show)
						for (var i in e.animatedProperties) f.style(d, i, e.orig[i]);
					e.complete.call(d)
				}
				return !1
			}
			e.duration == Infinity ? this.now = b : (h = b - this.startTime, this.state = h / e.duration, this.pos = f.easing[
					e.animatedProperties[this.prop]](this.state, h, 0, 1, e.duration), this.now = this.start + (this.end - this.start) *
				this.pos), this.update();
			return !0
		}
	}, f.extend(f.fx, {
		tick: function() {
			for (var a = f.timers, b = 0; b < a.length; ++b) a[b]() || a.splice(b--, 1);
			a.length || f.fx.stop()
		},
		interval: 13,
		stop: function() {
			clearInterval(cl), cl = null
		},
		speeds: {
			slow: 600,
			fast: 200,
			_default: 400
		},
		step: {
			opacity: function(a) {
				f.style(a.elem, "opacity", a.now)
			},
			_default: function(a) {
				a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop ===
					"height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
			}
		}
	}), f.expr && f.expr.filters && (f.expr.filters.animated = function(a) {
		return f.grep(f.timers, function(b) {
			return a === b.elem
		}).length
	});
	var ct = /^t(?:able|d|h)$/i,
		cu = /^(?:body|html)$/i;
	"getBoundingClientRect" in c.documentElement ? f.fn.offset = function(a) {
		var b = this[0],
			c;
		if (a) return this.each(function(b) {
			f.offset.setOffset(this, a, b)
		});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
		try {
			c = b.getBoundingClientRect()
		} catch (d) {}
		var e = b.ownerDocument,
			g = e.documentElement;
		if (!c || !f.contains(g, b)) return c ? {
			top: c.top,
			left: c.left
		} : {
			top: 0,
			left: 0
		};
		var h = e.body,
			i = cv(e),
			j = g.clientTop || h.clientTop || 0,
			k = g.clientLeft || h.clientLeft || 0,
			l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
			m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft,
			n = c.top + l - j,
			o = c.left + m - k;
		return {
			top: n,
			left: o
		}
	} : f.fn.offset = function(a) {
		var b = this[0];
		if (a) return this.each(function(b) {
			f.offset.setOffset(this, a, b)
		});
		if (!b || !b.ownerDocument) return null;
		if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
		f.offset.initialize();
		var c, d = b.offsetParent,
			e = b,
			g = b.ownerDocument,
			h = g.documentElement,
			i = g.body,
			j = g.defaultView,
			k = j ? j.getComputedStyle(b, null) : b.currentStyle,
			l = b.offsetTop,
			m = b.offsetLeft;
		while ((b = b.parentNode) && b !== i && b !== h) {
			if (f.offset.supportsFixedPosition && k.position === "fixed") break;
			c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop,
					m += b.offsetLeft, f.offset.doesNotAddBorder && (!f.offset.doesAddBorderForTableAndCells || !ct.test(b.nodeName)) &&
					(l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f
				.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) ||
					0, m += parseFloat(c.borderLeftWidth) || 0), k = c
		}
		if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft;
		f.offset.supportsFixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(
			h.scrollLeft, i.scrollLeft));
		return {
			top: l,
			left: m
		}
	}, f.offset = {
		initialize: function() {
			var a = c.body,
				b = c.createElement("div"),
				d, e, g, h, i = parseFloat(f.css(a, "marginTop")) || 0,
				j =
				"<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
			f.extend(b.style, {
					position: "absolute",
					top: 0,
					left: 0,
					margin: 0,
					border: 0,
					width: "1px",
					height: "1px",
					visibility: "hidden"
				}), b.innerHTML = j, a.insertBefore(b, a.firstChild), d = b.firstChild, e = d.firstChild, h = d.nextSibling.firstChild
				.firstChild, this.doesNotAddBorder = e.offsetTop !== 5, this.doesAddBorderForTableAndCells = h.offsetTop === 5,
				e.style.position = "fixed", e.style.top = "20px", this.supportsFixedPosition = e.offsetTop === 20 || e.offsetTop ===
				15, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", this.subtractsBorderForOverflowNotVisible =
				e.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i, a.removeChild(b), f.offset.initialize =
				f.noop
		},
		bodyOffset: function(a) {
			var b = a.offsetTop,
				c = a.offsetLeft;
			f.offset.initialize(), f.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0,
				c += parseFloat(f.css(a, "marginLeft")) || 0);
			return {
				top: b,
				left: c
			}
		},
		setOffset: function(a, b, c) {
			var d = f.css(a, "position");
			d === "static" && (a.style.position = "relative");
			var e = f(a),
				g = e.offset(),
				h = f.css(a, "top"),
				i = f.css(a, "left"),
				j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
				k = {},
				l = {},
				m, n;
			j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) &&
				(b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left +
					n), "using" in b ? b.using.call(a, k) : e.css(k)
		}
	}, f.fn.extend({
		position: function() {
			if (!this[0]) return null;
			var a = this[0],
				b = this.offsetParent(),
				c = this.offset(),
				d = cu.test(b[0].nodeName) ? {
					top: 0,
					left: 0
				} : b.offset();
			c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top +=
				parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
			return {
				top: c.top - d.top,
				left: c.left - d.left
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var a = this.offsetParent || c.body;
				while (a && !cu.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
				return a
			})
		}
	}), f.each(["Left", "Top"], function(a, c) {
		var d = "scroll" + c;
		f.fn[d] = function(c) {
			var e, g;
			if (c === b) {
				e = this[0];
				if (!e) return null;
				g = cv(e);
				return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[
					d] || g.document.body[d] : e[d]
			}
			return this.each(function() {
				g = cv(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
			})
		}
	}), f.each(["Height", "Width"], function(a, c) {
		var d = c.toLowerCase();
		f.fn["inner" + c] = function() {
			var a = this[0];
			return a && a.style ? parseFloat(f.css(a, d, "padding")) : null
		}, f.fn["outer" + c] = function(a) {
			var b = this[0];
			return b && b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : null
		}, f.fn[d] = function(a) {
			var e = this[0];
			if (!e) return a == null ? null : this;
			if (f.isFunction(a)) return this.each(function(b) {
				var c = f(this);
				c[d](a.call(this, b, c[d]()))
			});
			if (f.isWindow(e)) {
				var g = e.document.documentElement["client" + c];
				return e.document.compatMode === "CSS1Compat" && g || e.document.body["client" + c] || g
			}
			if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement[
				"scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
			if (a === b) {
				var h = f.css(e, d),
					i = parseFloat(h);
				return f.isNaN(i) ? h : i
			}
			return this.css(d, typeof a == "string" ? a : a + "px")
		}
	}), a.jQuery = a.$ = f
})(window);

//--
(function(h) {
	h.browser = h.extend({
		chrome: (/chrome/i).test(navigator.userAgent)
	}, h.browser);
	var m = h.scrollTo = function(b, c, g) {
		h(window).scrollTo(b, c, g)
	};
	m.defaults = {
		axis: 'y',
		duration: 1
	};
	m.window = function(b) {
		return h(window).scrollable()
	};
	h.fn.scrollable = function() {
		return this.map(function() {
			var b = this.parentWindow || this.defaultView,
				c = this.nodeName == '#document' ? b.frameElement || b : this,
				g = c.contentDocument || (c.contentWindow || c).document,
				i = c.setInterval;
			return c.nodeName == 'IFRAME' || i && (h.browser.safari || h.browser.chrome) ? g.body : i ? (g.compatMode && g.compatMode !==
				"BackCompat" ? g.documentElement : g.body) : this
		})
	};
	h.fn.scrollTo = function(r, j, a) {
		if (typeof j == 'object') {
			a = j;
			j = 0
		}
		if (typeof a == 'function') a = {
			onAfter: a
		};
		a = h.extend({}, m.defaults, a);
		j = j || a.speed || a.duration;
		a.queue = a.queue && a.axis.length > 1;
		if (a.queue) j /= 2;
		a.offset = n(a.offset);
		a.over = n(a.over);
		return this.scrollable().each(function() {
			var k = this,
				o = h(k),
				d = r,
				l, e = {},
				p = o.is('html,body');
			switch (typeof d) {
				case 'number':
				case 'string':
					if (/^([+-]=)?\d+(px)?$/.test(d)) {
						d = n(d);
						break
					}
					d = h(d, this);
				case 'object':
					if (d.is || d.style) l = (d = h(d)).offset()
			}
			h.each(a.axis.split(''), function(b, c) {
				var g = c == 'x' ? 'Left' : 'Top',
					i = g.toLowerCase(),
					f = 'scroll' + g,
					s = k[f],
					t = c == 'x' ? 'Width' : 'Height',
					v = t.toLowerCase();
				if (l) {
					e[f] = l[i] + (p ? 0 : s - o.offset()[i]);
					if (a.margin) {
						e[f] -= parseInt(d.css('margin' + g)) || 0;
						e[f] -= parseInt(d.css('border' + g + 'Width')) || 0
					}
					e[f] += a.offset[i] || 0;
					if (a.over[i]) e[f] += d[v]() * a.over[i]
				} else e[f] = d[i];
				if (/^\d+$/.test(e[f])) e[f] = e[f] <= 0 ? 0 : Math.min(e[f], u(t));
				if (!b && a.queue) {
					if (s != e[f]) q(a.onAfterFirst);
					delete e[f]
				}
			});
			q(a.onAfter);

			function q(b) {
				o.animate(e, j, a.easing, b && function() {
					b.call(this, r, a)
				})
			};

			function u(b) {
				var c = 'scroll' + b,
					g = k.ownerDocument;
				return p ? Math.max(g.documentElement[c], g.body[c]) : k[c]
			}
		}).end()
	};

	function n(b) {
		return typeof b == 'object' ? b : {
			top: b,
			left: b
		}
	}
})(jQuery);


//--
(function($) {
	$.fn.lazyload = function(options) {
		var settings = {
			threshold: 0,
			failurelimit: 0,
			event: "scroll",
			effect: "show",
			container: window
		};
		if (options) {
			$.extend(settings, options);
		}
		var elements = this;
		if ("scroll" == settings.event) {
			$(settings.container).bind("scroll", function(event) {
				var counter = 0;
				elements.each(function() {
					if ($.abovethetop(this, settings) || $.leftofbegin(this, settings)) {} else if (!$.belowthefold(this,
							settings) && !$.rightoffold(this, settings)) {
						$(this).trigger("appear");
					} else {
						if (counter++ > settings.failurelimit) {
							return false;
						}
					}
				});
				var temp = $.grep(elements, function(element) {
					return !element.loaded;
				});
				elements = $(temp);
			});
		}
		this.each(function() {
			var self = this;
			if (undefined == $(self).attr("original")) {
				$(self).attr("original", $(self).attr("src"));
			}
			if ("scroll" != settings.event || undefined == $(self).attr("src") || settings.placeholder == $(self).attr("src") ||
				($.abovethetop(self, settings) || $.leftofbegin(self, settings) || $.belowthefold(self, settings) || $.rightoffold(
					self, settings))) {
				if (settings.placeholder) {
					$(self).attr("src", settings.placeholder);
				} else {
					$(self).removeAttr("src");
				}
				self.loaded = false;
			} else {
				self.loaded = true;
			}
			$(self).one("appear", function() {
				if (!this.loaded) {
					$("<img />").bind("load", function() {
						$(self).hide().attr("src", $(self).attr("original"))[settings.effect](settings.effectspeed);
						self.loaded = true;
					}).attr("src", $(self).attr("original"));
				};
			});
			if ("scroll" != settings.event) {
				$(self).bind(settings.event, function(event) {
					if (!self.loaded) {
						$(self).trigger("appear");
					}
				});
			}
		});
		$(settings.container).trigger(settings.event);
		return this;
	};
	$.belowthefold = function(element, settings) {
		if (settings.container === undefined || settings.container === window) {
			var fold = $(window).height() + $(window).scrollTop();
		} else {
			var fold = $(settings.container).offset().top + $(settings.container).height();
		}
		return fold <= $(element).offset().top - settings.threshold;
	};
	$.rightoffold = function(element, settings) {
		if (settings.container === undefined || settings.container === window) {
			var fold = $(window).width() + $(window).scrollLeft();
		} else {
			var fold = $(settings.container).offset().left + $(settings.container).width();
		}
		return fold <= $(element).offset().left - settings.threshold;
	};
	$.abovethetop = function(element, settings) {
		if (settings.container === undefined || settings.container === window) {
			var fold = $(window).scrollTop();
		} else {
			var fold = $(settings.container).offset().top;
		}
		return fold >= $(element).offset().top + settings.threshold + $(element).height();
	};
	$.leftofbegin = function(element, settings) {
		if (settings.container === undefined || settings.container === window) {
			var fold = $(window).scrollLeft();
		} else {
			var fold = $(settings.container).offset().left;
		}
		return fold >= $(element).offset().left + settings.threshold + $(element).width();
	};
	$.extend($.expr[':'], {
		"below-the-fold": "$.belowthefold(a, {threshold : 0, container: window})",
		"above-the-fold": "!$.belowthefold(a, {threshold : 0, container: window})",
		"right-of-fold": "$.rightoffold(a, {threshold : 0, container: window})",
		"left-of-fold": "!$.rightoffold(a, {threshold : 0, container: window})"
	});
})(jQuery);

//feed sub=
eval(function(p, a, c, k, e, d) {
	e = function(c) {
		return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	if (!''.replace(/^/, String)) {
		while (c--) {
			d[e(c)] = k[c] || e(c)
		}
		k = [function(e) {
			return d[e]
		}];
		e = function() {
			return '\\w+'
		};
		c = 1
	};
	while (c--) {
		if (k[c]) {
			p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
		}
	}
	return p
}(
	'(7(){7 3o(32,14,1h){6 2w=C.V(32).26;6 U=\'<a l="#\'+14+\'">@\'+2w.1p(/\\t|\\n|\\r\\n/g,"")+\' </a> \\n\';3Y(U,1h)}7 5x(32,14,3j,1h){6 2w=C.V(32).26;6 W=C.V(3j).26;6 U=\'<3W 68="#\'+3j+\'">\';U+=\'\\n<3v><a l="#\'+14+\'">\'+2w.1p(/\\t|\\n|\\r\\n/g,"")+\'</a> :</3v>\';U+=W.1p(/\\t/g,"");U+=\'</3W>\\n\';4A(U,1h)}7 3Y(U,1h){i(C.V(1h)&&C.V(1h).1d==\'58\'){J=C.V(1h)}12{2C("59 W 37 57 53 5b!");K 17}i(J.A.5P(U)>-1){2C("6k\'6j 5D 5L o 3o!");K 17}i(J.A.1p(/\\s|\\t|\\n/g,"")==\'\'){J.A=U}12{J.A=J.A.1p(/[\\n]*$/g,"")+\'\\n\\n\'+U}}7 4A(U,1h){i(C.V(1h)&&C.V(1h).1d==\'58\'){J=C.V(1h)}12{2C("59 W 37 57 53 5b!");K 17}i(C.5i){J.2G();5k=C.5i.5S();5k.1A=U;J.2G()}12 i(J.2L||J.2L==\'0\'){6 3N=J.2L;6 4O=J.4Q;6 2H=3N;J.A=J.A.3U(0,3N)+U+J.A.3U(4O,J.A.M);2H+=U.M;J.2G();J.2L=2H;J.4Q=2H}12{J.A+=U;J.2G()}}7 4u(4M,3s,4R){C.V(4M).6l=7(4L){6 2j=1D;2j=N.4K?N.4K:4L;i(2j!=1D&&2j.6q&&2j.62==13){C.V(3s).G()}};C.V(3s).A+=4R}7 33(1v){6 3p=1v.B(\'w.W-3C\');i(3p.M>0){3p.1B(1I);K}6 2A=1v.B(\'a.2A\');6 14=2A.1m(\'l\').2Y(9);6 1y=C.2E(\'w\');1y.2g=\'W-3C\';6 2d=C.2E(\'a\');2d.l=\'#4U\';2d.26=\'5Z\';4(2d).G(7(){3o(\'5z-\'+14,\'W-\'+14,\'W\')});1y.2y(2d);6 4T=C.5w(\' | \');1y.2y(4T);6 2b=C.2E(\'a\');2b.l=\'#4U\';2b.26=\'6i\';4(2b).G(7(){5x(\'5z-\'+14,\'W-\'+14,\'6r-\'+14,\'W\')});1y.2y(2b);i(/6g/.2T(2A.1m(\'D\'))){6 5v=C.5w(\' | \');1y.2y(5v);6 2M=C.2E(\'a\');2M.l=P.4p+\'/4a-5H/W.1z?2o=5I&c=\'+14;2M.26=\'5K\';1y.2y(2M)}4(1y).X().4d(1v.B(\'w.4y\')).1B(1I)}7 34(1v){1v.B(\'w.W-3C\').2Q(28)}4.42.1r=7(e){6 1Q={15:0,E:0};3q{1Q.15+=e.5M||0;1Q.E+=e.5V||0;e=e.5U}5c(e);K 1Q};4.42.5W=7(e){6 2W={1k:0,1t:0};2W.1k=e.5G;2W.1t=e.5E;K 2W};6 3a=1D;6 3b=1D;6 3L=1D;6 3R=1D;6 3H=1D;4(C).5F(7(){4(\'3h.40[4J*="5T.H"]\').6s({6h:\'L://1X.4r.H/4a-1c/61/6b/3h/6c-40.69\',67:\'1B\'});i(C.V(\'50\')){4(\'#4H\').G(7(){4(o).1u(\'2O\').1n(\'2S\');4(\'#3X\').1u(\'2S\').1n(\'2O\');4(\'#4x\').2Q(7(){4(\'#1C\').1B(7(){4(\'#3D\').1O()})})});4(\'#3X\').G(7(){4(o).1u(\'2O\').1n(\'2S\');4(\'#4H\').1u(\'2S\').1n(\'2O\');4(\'#3D\').2f();4(\'#1C\').2Q(7(){4(\'#4x\').1B()})});4(\'#6a\').R(7(){4(\'#4w\').1O();4(o).f(\'66 &4v;\')},7(){4(\'#4w\').2f();4(o).f(\'64 &4v;\');4(\'#5Y-60 3v\').f(4(\'#2w\').63())});4(\'#1C z.2r\').2u(7(){33(4(o))},7(){34(4(o))});4u(\'W\',\'3Z-2B\',\' (6d+6o)\');i(!4.6n.6p){6 h=/^#W-/;6 4G=/^@/;6 16=4(\'#1C\');16.B(\'z p a\').4f(7(){i(4(o).1m(\'l\').4F(h)&&4(o).1A().4F(4G)){4(o).1n(\'4E\')}});4(\'.4E\').2u(7(){6 2m=o;6 14=4(o).1m(\'l\');i(4(14).6f(\'.2r\')){4(\'<z j="2r 19"></z>\').X().f(\'<w j="4B"></w><w j="2P">\'+4(14).f()+\'</w>\').23(4(\'#1C\'));16.B(\'.19\').1S({15:4().1r(o).15+4(o).1k()+10,E:4().1r(o).E-22}).2K({3n:\'1\'})}12{6 h=14.2Y(9);4.2a({1d:\'4e\',k:\'?2o=5X&h=\'+h,41:17,45:\'f\',4V:\'4P=44-8\',38:7(){4(\'<z j="2r 19"></z>\').X().f(\'<w j="4B"></w><w j="2P"><p j="2a-56 4h">55...</p></w>\').23(4(\'#1C\'));16.B(\'.19\').1S({15:4().1r(2m).15+4(2m).1k()+10,E:4().1r(2m).E-22}).2K({3n:\'1\'})},3l:7(18){6 3d=4(18+\'</z>\');3d.X().23(16);16.B(\'.19 .2P\').f(3d.f())},3Q:7(){16.B(\'.19 .2P\').f(\'<p j="4h">5h, 5f 1M 4S 18.</p>\')}})}},7(){16.B(\'.19\').2Q(1I,7(){4(o).5J()})})}}4(\'a[D*="T"]\').G(7(){N.Z(o.l);K 17});4(\'a[l!="#"][l!="#5r"][l^="#"]\').G(7(){4.3A(o.l.1p(/^.*#/g,\'#\'),28);K 17});i(4(\'#5C\').M>0){4(\'w.1b\').4f(7(){6 2n=o;6 h=4(2n).1m(\'h\');i(/^1b\\-[0-9]+$/.2T(h)){6 R=4(\'<a D="F" j="R 2i"></a>\');R.R(7(){31(h,2n)},7(){2i(2n)});R.4d(4(2n))}})}6 4q=3V({29:P.29,27:P.27,2z:P.2z,2V:P.4p,2q:P.2q});6 3M=4(4q);3M.X().23(4(\'#5R w.3I\'));5p(\'O\',\'2h\',\'5N 1A 1M 47 5O...\');3M.1B(3F);6 4m=4I({2v:P.2v,20:P.20,1l:P.1l,2p:P.2p,1e:P.1e,1q:P.1q,1L:P.1L,1E:P.1E,1F:P.1F,1G:P.1G,1N:P.1N});6 3J=4(4m);3J.X().23(4(\'#6F w.3I\')).B(\'a[D*="T"]\').G(7(){N.Z(o.l);K 17});5e();51();3J.1B(3F);6 2R=4(\'#2R\');i(2R.M==1){6 4l=4o();6 3G=4(4l);3G.X().7A(4(\'#2R\'));4i();3G.1O(3F)}4(N).7z(7(){3E()});3E()});7 4o(){f=\'<w h="m">\';f+=\'7y 7x:\';f+=\'<a D="F" j="3x-m" y="4k">4k</a>\';f+=\'<a D="F" j="25-m" y="3K">3K</a>\';f+=\'<a D="F" j="3f-m" y="4j">4j</a>\';f+=\'<a D="F" j="39-m" y="开心网">开心网</a>\';f+=\'<a D="F" j="3g-m" y="人人网">人人网</a>\';f+=\'<a D="F" j="1H-m" y="豆瓣">豆瓣</a>\';f+=\'<a D="F" j="3r-m" y="饭否">饭否</a>\';f+=\'<a D="F" j="1T-m" y="新浪微博">新浪微博</a>\';f+=\'<a D="F" j="4t-m" y="网易微博">网易微博</a>\';f+=\'<a D="F" j="2s-m" y="腾讯微博">腾讯微博</a>\';f+=\'<a D="F" j="3k-m" y="搜狐微博">搜狐微博</a>\';f+=\'</w>\';K f}7 1g(1k,1t){K[\'7B=0,7C=0,7G=1,1k=\'+1k+\',1t=\'+1t+\',15=\',(4g.1k-1k)/2,\',E=\',(4g.1t-1t)/2].7F(\'\')}7 4i(){6 S=3O(C.7E);6 y=3O(C.y.3U(0,76));6 3i=3O(\'7D.H\');6 1i=\'m\';6 3m=\'L://1X.4r.H/\';4(\'a.3x-m\').G(7(){6 k=\'L://3x.H/m.1z?u=\'+S+\'&t=\'+y;6 I=1g(4c,4z);N.Z(k,1i,I)});4(\'a.25-m\').G(7(){6 k=\'L://25.H/m?k=\'+S+\'&1A=\'+y;6 I=1g(7w,7v);N.Z(k,1i,I)});4(\'a.3f-m\').G(7(){6 k=\'L://3f.H/1b?k=\'+S+\'&y=\'+y;6 I=1g(4C,4C);N.Z(k,1i,I)});4(\'a.39-m\').G(7(){6 k=\'L://1X.39.H/7o/m.1z?7n=\'+S+\'&7m=\'+S+\'&7k=\'+y;6 I=1g(7l,7p);N.Z(k,1i,I)});4(\'a.3g-m\').G(7(){6 k=\'L://m.3g.H/m/7q?S=\'+S+\'&y=\'+y;6 I=1g(4c,4z);N.Z(k,1i,I)});4(\'a.1H-m\').G(7(){6 k=\'L://1X.1H.H/7u/?k=\'+S+\'&y=\'+y;6 I=1g(7t,7s);N.Z(k,1i,I)});4(\'a.3r-m\').G(7(){6 k=\'L://3r.H/7I?u=\'+S+\'&t=\'+y;6 I=1g(7H,7N);N.Z(k,1i,I)});4(\'a.1T-m\').G(7(){6 k=\'L://v.t.1T.H.7Y/m/m.1z?k=\'+S+\'&y=\'+y;6 I=1g(7X,7W);N.Z(k,1i,I)});4(\'a.4t-m\').G(7(){6 k=\'L://t.80.H/7Z/6t/7U.3q?S=\'+S+\'3i=\'+3i+\'&4y=\'+y+\' \'+S;6 I=1g(7V,7M);N.Z(k,1i,I)});4(\'a.2s-m\').G(7(){6 k=\'L://v.t.36.H/m/m.1z?y=\'+y+\'&k=\'+S+\'&3m=\'+3m;6 I=1g(7L,7J);N.Z(k,1i,I)});4(\'a.3k-m\').G(7(){6 k=\'L://t.3k.H/7O/1b.7P?&k=\'+S+\'&y=\'+y+\'&1c=5g-8\';6 I=1g(7S,7R);N.Z(k,1i,I)})}7 3V(Q){6 29=Q.29;6 27=Q.27;6 2z=Q.2z;6 2V=Q.2V;6 2q=Q.2q;f=\'<w h="7Q">\';i(29&&27.M>0){f+=\'<2N 2o="\'+2z+\'" h="29-47-37">\';f+=\'<w j="1c">\';f+=\'<1K h="O" 1d="1A" x-49-48  j="43" 1Z="q" 4b="24" />\';f+=\'<1K h="2h" 1d="2B" j="2X" 1Z="6K" A="" />\';f+=\'<1K 1d="3e" 1Z="6J" A="\'+27+\'" />\';f+=\'<1K 1d="3e" 1Z="7j" A="6I:11" />\';f+=\'<1K 1d="3e" 1Z="6L" A="44-8" />\';f+=\'</w>\';f+=\'</2N>\'}12{f+=\'<2N 2o="\'+2V+\'" 6M="6Q">\';f+=\'<w j="1c">\';f+=\'<1K h="O" 1d="1A" j="43" x-49-48 1Z="s" 4b="24" A="\'+2q+\'" />\';f+=\'<1K h="2h" 1d="2B" j="2X" A="" />\';f+=\'</w>\';f+=\'</2N>\'}f+=\'</w>\';K f}7 4I(Q){6 2v=Q.2v;6 20=Q.20;6 1l=Q.1l;6 2p=Q.2p;6 1e=Q.1e;6 1q=Q.1q;6 1L=Q.1L;6 1E=Q.1E;6 1F=Q.1F;6 1G=Q.1G;6 1N=Q.1N;f=\'<w j="6y">\';i(2p){f+=\'<w h="3w" j="3u">\';i(1e==\'1T\'){1q=1E}12 i(1e==\'25\'){1q=1L}12 i(1e==\'2s\'){1q=1F}12{1q=1G}f+=\'<a D="T F" h="3y-1j" j="\'+1e+\'" l="\'+1q+\'">6x 6w</a>\';f+=\'<1w>\';i(1e!=\'1T\'&&1E.M>0){f+=\'<z><a D="T F" h="1T-1j" j="1j" l="\'+1E+\'">新浪微博</a></z>\'}i(1e!=\'25\'&&1L.M>0){f+=\'<z><a D="T F" h="25-1j" j="1j" l="\'+1L+\'">3K</a></z>\'}i(1e!=\'2s\'&&1F.M>0){f+=\'<z><a D="T F" h="2s-1j" j="1j" l="\'+1F+\'">腾讯微博</a></z>\'}i(1e!=\'1H\'&&1G.M>0){f+=\'<z><a D="T F" h="1H-1j" j="1j" l="\'+1G+\'">豆瓣</a></z>\'}f+=\'</1w>\';f+=\'</w>\'}f+=\'<w h="2c" j="3u">\';f+=\'<a D="T F" h="3T" y="4W 1M o 4X..." l="\'+1l+\'">\';i(1N&&4D(1N,10)>0){f+=5j(1N)+\' 6v\'}12{f+=\' 6z 5m\'}f+=\'</a>\';f+=\'<1w>\';f+=\'<z><a D="T F" h="5A-1a" j="1a" l="L://6A.5A.H/6E?6D=\'+1l+\'">6C</a></z>\';f+=\'<z><a D="T F" h="5t-1a" j="1a" l="L://1a.5t.H/b.3q?k=\'+1l+\'">有道</a></z>\';f+=\'<z><a D="T F" h="5s-1a" j="1a" l="L://1X.5s.H/2c.1z?k=\'+1l+\'">鲜果</a></z>\';f+=\'<z><a D="T F" h="5o-1a" j="1a" l="L://1X.5o.H/6R.1z?k=\'+1l+\'">抓虾</a></z>\';f+=\'<z><a D="T F" h="1H-1a" j="1a" l="L://9.1H.H/1a/2c?k=\'+1l+\'">豆瓣九点</a></z>\';i(2v&&20.M>0){f+=\'<z><a D="T F" h="4Z-1a" y="4W 1M o 4X 7a 4Z..." l="\'+20+\'">78 5m</a></z>\'}f+=\'</1w>\';f+=\'</w>\';f+=\'<w j="7c 3u">\';f+=\'<a 2m="7d" l="L://4N.36.H/7h-7f/7e?h=77"><3h 75="0" 6X="填写您的邮件地址，订阅我们的精彩内容：" 4J="L://6V.4N.36.H/6T/6U/6Y/6Z/74/73.72" /></a>\';f+=\'</a>\';f+=\'</w>\';K f}7 51(){4(\'#3w\').2u(7(){6 Y=o;2e(3b);3a=1W(7(){6 R=4(Y).B(\'a#3y-1j\');6 52=R.1r(Y).15+R.2k()-4(Y).B(\'1w\').2k();R.1n(\'2J\');4(Y).B(\'1w\').1S({15:52,E:R.1r(Y).E+30}).1O()},1I)},7(){6 Y=o;2e(3a);3b=1W(7(){4(Y).B(\'1w\').2f(7(){4(\'#3w a#3y-1j\').1u(\'2J\')})},1I)})}7 5e(){4(\'#2c\').2u(7(){6 Y=o;2e(3R);3L=1W(7(){6 R=4(Y).B(\'a#3T\');R.1n(\'2J\');4(Y).B(\'1w\').1S({15:R.1r(Y).15,E:R.1r(Y).E+30}).1O()},1I)},7(){6 Y=o;2e(3L);3R=1W(7(){4(Y).B(\'1w\').2f(7(){4(\'#2c a#3T\').1u(\'2J\')})},1I)})}7 5j(1J){1J=1J+\'\';6 3z=/(-?\\d+)(\\d{3})/;5c(3z.2T(1J)){1J=1J.1p(3z,"$1,$2")}K 1J}7 3E(){6 1x=4(\'#54-1M-E\');6 1c=4(\'#1c .3I\');i(1x.M>0){2e(3H);1x.X()}12{1x=4(\'<a h="54-1M-E" l="#">7g</a>\');1x.23(4(\'#1c\'));1x.G(7(){4.3A({E:0},28);K 17})}i(4(C).5a()<=79){K}3H=1W(7(){6 2I=4(\'#2I\');6 3S=2I.1Q().E+2I.2U();6 E=4(C).5a()+4(N).1t();i(E>=3S-70){E=3S-6B}12{E-=21}1x.1S(\'E\',E+\'1P\');1x.1B()},28)}7 31(h,1b){i(4(1b).B(\'.1c\').1A()==\'\'||4(1b).B(\'.1c a.6G-S\').M>0){4s(h)}4(1b).B(\'.1c\').1O();4(1b).B(\'a.R\').1u(\'2i\').1n(\'31\')}7 2i(1b){4(1b).B(\'.1c\').2f();4(1b).B(\'a.R\').1u(\'31\').1n(\'2i\')}7 5p(5B,5y,19){6 O=C.V(5B);6 2h=C.V(5y);i(O.A==\'\'||O.A==19){O.2g+=\' 35\';O.A=19}O.6H=7(e){i(O.A==19){O.A=\'\';O.2g=O.2g.1p(\' 35\',\'\')}};O.7i=7(e){i(O.A==\'\'){O.2g+=\' 35\';O.A=19}};2h.7K=7(e){i(O.A==\'\'||O.A==19){K 17}}}7 4s(h){6 4n=h.2Y(5);4.2a({1d:\'4e\',k:\'?2o=81&h=\'+4n,41:17,45:\'f\',4V:\'6P/6N; 4P=5g-8\',38:7(){2D(h,\'<p j="2a-56">55...</p>\')},3l:7(18){2D(h,18,71)},3Q:7(){2D(h,\'<p>5h, 5f 1M 4S 18.</p>\')}})}7 2D(h,18,5n){6 2Z=4(\'#\'+h+\' .1c\');2Z.f(18);i(5n){2Z.B(\'a[D*="T"]\').G(7(){N.Z(o.l);K 17});2Z.B(\'a[l!="#"][l!="#5r"][l^="#"]\').G(7(){4.3A(o.l.1p(/^.*#/g,\'#\'),28,{1Q:0});K 17})}}i(4(\'#1U\').M>0){6 1R=4(\'#1U\');6 16=4(\'#1C\');6 1s=4(\'#1U-46\');6 1o=4(\'#1U-5u\');6 1f=4(\'#3Z-2B\');7 3P(1V,2x,2t,1f){i(--1V>0){1W(7(){1f.1n(\'1Y-2X\');1f.1m(\'A\',1V+2x);3P(1V,2x,2t,1f)},6O)}12{1f.1m(\'A\',2t);1f.1u(\'1Y-2X\');1f.5d(\'1Y\')}}1R.2B(7(){6 3B=0;6 3t=16.B(\'z:3c .2A\');i(3t.M>0){3B=4D(3t.1A().2Y(1),10)}4.2a({k:P.6m+\'/50-2a.1z\',18:4(o).7r()+\'&6e=\'+3B,1d:\'5Q\',38:7(){i(1s.M<=0){1s=4(\'<w h="1U-46"></w>\').X()}i(1o.M<=0){1o=4(\'<5q h="1U-5u">6u 5l...</5q>\').X()}2l=1R.1Q();1s.1S({\'3n\':\'0.65\',\'1k\':1R.2k()+\'1P\',\'1t\':1R.2U()+\'1P\',\'15\':2l.15+\'1P\',\'E\':2l.E+\'1P\'}).2K();1f.1m(\'1Y\',\'1Y\');1R.2F(1s);1R.2F(1o);1o.1S({\'15\':(2l.15+(1s.2k()-1o.2k())/2)+\'1P\',\'E\':(2l.E+(1s.2U()-1o.2U())/2)+\'1P\'}).2K()},3Q:7(18){1s.X();1o.X();1f.5d(\'1Y\');2C(18.6W)},3l:7(18){1s.X();1o.X();C.V(\'W\').A=\'\';6 2t=1f.1m(\'A\');6 1V=10;6 2x=\' 7b 5l 2F 6S W\';3P(1V,2x,2t,1f);i(16.M<=0){4(\'#3D\').2F(\'<4Y h="1C"></4Y>\')}12 i(16.M==1){6 1v=16.B(\'z:3c\');i(!/2r/.2T(1v.1m(\'j\'))){1v.X()}}16.7T(18);16.B(\'z:3c\').X().1O(28).2u(7(){33(4(o))},7(){34(4(o))}).B(\'a[D*="T"]\').G(7(){N.Z(o.l);K 17})}});K 17})}})();',
	62, 498,
	'||||jQuery||var|function||||||||html||id|if|class|url|href|share||this||||||||div||title|li|value|find|document|rel|top|nofollow|click|com|params|field|return|http|length|window|searchtxt|global|args|toggle|link|external|insertStr|getElementById|comment|hide|_self|open|||else||commentId|left|commentList|false|data|tip|reader|post|content|type|socialName|submitButton|getParamsOfShareWindow|commentBox|windowName|zone|width|feedUrl|attr|addClass|commentMessage|replace|defaultUrl|cumulativeOffset|commentMask|height|removeClass|commentNode|ul|topLink|wrap|php|text|fadeIn|thecomments|null|sinaUrl|tencentUrl|doubanUrl|douban|200|num|input|twitterUrl|to|subcount|slideDown|px|offset|commentformNode|css|sina|commentform|delayTime|setTimeout|www|disabled|name|emailFeedUrl|||appendTo||twitter|innerHTML|cseCx|400|cse|ajax|quoteButton|subscribe|replyButton|clearTimeout|slideUp|className|searchbtn|collapse|ev|outerWidth|formOffset|target|_post|action|includeSocial|searchKeywords|hreview|tencent|submitText|hover|includeEmailFeed|author|delayText|appendChild|cseUrl|anchor|submit|alert|loadPostContent|createElement|before|focus|cursorPos|footer|current|show|selectionStart|editButton|form|tab|innerbox|fadeOut|announce|curtab|test|outerHeight|searchUrl|dimension|button|slice|contentNode||expand|authorId|overComment|outComment|searchtip|qq|box|beforeSend|kaixin001|followMouseoverThread|followMouseoutThread|last|addedComment|hidden|delicious|renren|img|source|commentBodyId|sohu|success|site|opacity|reply|actionNode|do|fanfou|submitbnt|commentAnchor|combobox|strong|follow|facebook|default|re|scrollTo|commentCount|act|commentnavi|toggleGotop|800|shareObj|topLinkThread|inner|scocialObj|Twitter|feedMouseoverThread|searchObj|startPos|encodeURIComponent|delayComment|error|feedMouseoutThread|pageHeight|feedrss|substring|createSearch|blockquote|trackbacktab|appendReply|cmt|avatar|cache|fn|textfield|UTF|dataType|mask|search|speech|webkit|wp|size|626|prependTo|GET|each|screen|msg|bindShareList|Delicious|Facebook|shareHtml|scocialHtml|postId|createShares|serverUrl|searchHtml|uedbox|loadPost|netease|loadCommentShortcut|raquo|author_info|thetrackbacks|info|436|insertQuote|arrow|550|parseInt|atreply|match|at|commenttab|createSocials|src|event|moz_ev|frm|list|endPos|charset|selectionEnd|desc|load|sepBetweenReplyAndQuote|respond|contentType|Subscribe|blog|ol|email|comments|bindFollowList|leftPos|not|back|Loading|loader|does|textarea|The|scrollTop|exist|while|removeAttr|bindFeedList|failed|utf|Oops|selection|formatInteger|sel|wait|feed|needInit|zhuaxia|searchboxInit|span|ViewPollResults|xianguo|youdao|message|sepBetweenQuoteAndEdit|createTextNode|quote|buttonId|reviewer|google|textfileId|pagenavi|already|offsetHeight|ready|offsetWidth|admin|editcomment|remove|Edit|appended|offsetLeft|Type|here|indexOf|POST|header|createRange|gravatar|offsetParent|offsetTop|getVisibleSize|load_comment|welcome|Reply|row|themes|keyCode|val|Change||Close|effect|cite|gif|show_author_info|wylive|loading|Ctrl|index|is|editable|placeholder|Quote|ve|You|onkeydown|templateUrl|browser|Enter|opera|ctrlKey|commentbody|lazyload|user|Please|subscribers|me|Follow|clearfix|RSS|fusion|91|Google|feedurl|add|navigation|more|onfocus|FORID|cx|sa|ie|method|json|1000|application|get|add_channel|next|zh_CN|htmledition|rescdn|responseText|alt|images|qunfa||true|png|picMode_dark_s|manage|border||b292a489439cfa651ceadc65431392fce132f383bb842cd3|Email|90|via|sec|qqmail|_blank|qf_invite|bin|Top|cgi|onblur|cof|rtitle|540|rcontent|rurl|repaste|342|buttonshare|serialize|350|450|recommend|375|500|on|Share|scroll|insertBefore|toolbar|status|NeoEase|location|join|resizable|600|sharer|668|onclick|634|468|348|third|jsp|searchbox|510|650|append|checkLogin|642|523|607|cn|article|163|load_post'
	.split('|'), 0, {}))

//--highslide
var hs = {
	lang: {
		loadingText: 'Loading...',
		loadingTitle: 'Click to cancel',
		focusTitle: 'Click to bring to front',
		fullExpandTitle: 'Expand to actual size',
		creditsText: 'Powered by <i>Highslide JS</i>',
		creditsTitle: 'Go to the Highslide JS homepage',
		previousText: 'Previous',
		nextText: 'Next',
		moveText: 'Move',
		closeText: 'Close',
		closeTitle: 'Close (esc)',
		resizeTitle: 'Resize',
		playText: 'Play',
		playTitle: 'Play slideshow (spacebar)',
		pauseText: 'Pause',
		pauseTitle: 'Pause slideshow (spacebar)',
		previousTitle: 'Previous (arrow left)',
		nextTitle: 'Next (arrow right)',
		moveTitle: 'Move',
		fullExpandText: 'Full size',
		restoreTitle: 'Click to close image, click and drag to move. Use arrow keys for next and previous.'
	},
	graphicsDir: 'http://www.uedbox.com/wp-content/themes/wylive/plus/auto-highslide/highslide/graphics/',
	restoreCursor: 'zoomout.cur',
	expandSteps: 10,
	expandDuration: 250,
	restoreSteps: 10,
	restoreDuration: 250,
	marginLeft: 15,
	marginRight: 15,
	marginTop: 15,
	marginBottom: 15,
	zIndexCounter: 1001,
	loadingOpacity: 0.75,
	allowMultipleInstances: true,
	numberOfImagesToPreload: 5,
	outlineWhileAnimating: 2,
	outlineStartOffset: 3,
	fullExpandPosition: 'bottom right',
	fullExpandOpacity: 1,
	padToMinWidth: false,
	showCredits: false,
	creditsHref: 'http://vikjavev.no/highslide/',
	enableKeyListener: true,
	allowWidthReduction: false,
	allowHeightReduction: true,
	preserveContent: true,
	objectLoadTime: 'before',
	cacheAjax: true,
	dragByHeading: true,
	minWidth: 200,
	minHeight: 200,
	allowSizeReduction: true,
	outlineType: 'drop-shadow',
	wrapperClassName: 'highslide-wrapper',
	skin: {
		contentWrapper: '<div class="highslide-header"><ul>' + '<li class="highslide-previous">' +
			'<a href="#" title="{hs.lang.previousTitle}" onclick="return hs.previous(this)">' +
			'<span>{hs.lang.previousText}</span></a>' + '</li>' + '<li class="highslide-next">' +
			'<a href="#" title="{hs.lang.nextTitle}" onclick="return hs.next(this)">' + '<span>{hs.lang.nextText}</span></a>' +
			'</li>' + '<li class="highslide-move">' + '<a href="#" title="{hs.lang.moveTitle}" onclick="return false">' +
			'<span>{hs.lang.moveText}</span></a>' + '</li>' + '<li class="highslide-close">' +
			'<a href="#" title="{hs.lang.closeTitle}" onclick="return hs.close(this)">' +
			'<span>{hs.lang.closeText}</span></a>' + '</li>' + '</ul></div>' + '<div class="highslide-body"></div>' +
			'<div class="highslide-footer"><div>' +
			'<span class="highslide-resize" title="{hs.lang.resizeTitle}"><span></span></span>' + '</div></div>'
	},
	preloadTheseImages: [],
	continuePreloading: true,
	expanders: [],
	overrides: ['allowSizeReduction', 'outlineType', 'outlineWhileAnimating', 'captionId', 'captionText', 'captionEval',
		'captionOverlay', 'headingId', 'headingText', 'headingEval', 'headingOverlay', 'dragByHeading', 'contentId',
		'width', 'height', 'allowWidthReduction', 'allowHeightReduction', 'preserveContent', 'maincontentId',
		'maincontentText', 'maincontentEval', 'objectType', 'cacheAjax', 'objectWidth', 'objectHeight', 'objectLoadTime',
		'swfOptions', 'wrapperClassName', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'slideshowGroup', 'easing',
		'easingClose', 'fadeInOut', 'src'
	],
	overlays: [],
	idCounter: 0,
	oPos: {
		x: ['leftpanel', 'left', 'center', 'right', 'rightpanel'],
		y: ['above', 'top', 'middle', 'bottom', 'below']
	},
	mouse: {},
	headingOverlay: {},
	captionOverlay: {},
	swfOptions: {
		flashvars: {},
		params: {},
		attributes: {}
	},
	faders: [],
	pendingOutlines: {},
	sleeping: [],
	preloadTheseAjax: [],
	cacheBindings: [],
	cachedGets: {},
	clones: {},
	ie: (document.all && !window.opera),
	safari: /Safari/.test(navigator.userAgent),
	geckoMac: /Macintosh.+rv:1\.[0-8].+Gecko/.test(navigator.userAgent),
	$: function(id) {
		return document.getElementById(id)
	},
	push: function(arr, val) {
		arr[arr.length] = val
	},
	createElement: function(tag, attribs, styles, parent, nopad) {
		var el = document.createElement(tag);
		if (attribs) hs.setAttribs(el, attribs);
		if (nopad) hs.setStyles(el, {
			padding: 0,
			border: 'none',
			margin: 0
		});
		if (styles) hs.setStyles(el, styles);
		if (parent) parent.appendChild(el);
		return el
	},
	setAttribs: function(el, attribs) {
		for (var x in attribs) el[x] = attribs[x]
	},
	setStyles: function(el, styles) {
		for (var x in styles) {
			if (hs.ie && x == 'opacity') {
				if (styles[x] > 0.99) el.style.removeAttribute('filter');
				else el.style.filter = 'alpha(opacity=' + (styles[x] * 100) + ')'
			} else el.style[x] = styles[x]
		}
	},
	ieVersion: function() {
		var arr = navigator.appVersion.split("MSIE");
		return arr[1] ? parseFloat(arr[1]) : null
	},
	getPageSize: function() {
		var iebody = document.compatMode && document.compatMode != 'BackCompat' ? document.documentElement : document.body;
		var width = hs.ie ? iebody.clientWidth : (document.documentElement.clientWidth || self.innerWidth),
			height = hs.ie ? iebody.clientHeight : self.innerHeight;
		return {
			width: width,
			height: height,
			scrollLeft: hs.ie ? iebody.scrollLeft : pageXOffset,
			scrollTop: hs.ie ? iebody.scrollTop : pageYOffset
		}
	},
	getPosition: function(el) {
		var p = {
			x: el.offsetLeft,
			y: el.offsetTop
		};
		while (el.offsetParent) {
			el = el.offsetParent;
			p.x += el.offsetLeft;
			p.y += el.offsetTop;
			if (el != document.body && el != document.documentElement) {
				p.x -= el.scrollLeft;
				p.y -= el.scrollTop
			}
		}
		return p
	},
	expand: function(a, params, custom) {
		if (a.getParams) return params;
		try {
			new hs.Expander(a, params, custom);
			return false
		} catch (e) {
			return true
		}
	},
	htmlExpand: function(a, params, custom) {
		if (a.getParams) return params;
		for (var i = 0; i < hs.sleeping.length; i++) {
			if (hs.sleeping[i] && hs.sleeping[i].a == a) {
				hs.sleeping[i].awake();
				hs.sleeping[i] = null;
				return false
			}
		}
		try {
			hs.hasHtmlexpanders = true;
			new hs.Expander(a, params, custom, 'html');
			return false
		} catch (e) {
			return true
		}
	},
	getSelfRendered: function() {
		return hs.createElement('div', {
			className: 'highslide-html-content',
			innerHTML: hs.replaceLang(hs.skin.contentWrapper)
		})
	},
	getElementByClass: function(el, tagName, className) {
		var els = el.getElementsByTagName(tagName);
		for (var i = 0; i < els.length; i++) {
			if ((new RegExp(className)).test(els[i].className)) {
				return els[i]
			}
		}
		return null
	},
	replaceLang: function(s) {
		s = s.replace(/\s/g, ' ');
		var re = /{hs\.lang\.([^}]+)\}/g,
			matches = s.match(re),
			lang;
		for (var i = 0; i < matches.length; i++) {
			lang = matches[i].replace(re, "$1");
			if (typeof hs.lang[lang] != 'undefined') s = s.replace(matches[i], hs.lang[lang])
		}
		return s
	},
	getCacheBinding: function(a) {
		for (var i = 0; i < hs.cacheBindings.length; i++) {
			if (hs.cacheBindings[i][0] == a) {
				var c = hs.cacheBindings[i][1];
				hs.cacheBindings[i][1] = c.cloneNode(1);
				return c
			}
		}
		return null
	},
	preloadAjax: function(e) {
		var arr = hs.getAnchors();
		for (var i = 0; i < arr.htmls.length; i++) {
			var a = arr.htmls[i];
			if (hs.getParam(a, 'objectType') == 'ajax' && hs.getParam(a, 'cacheAjax')) hs.push(hs.preloadTheseAjax, a)
		}
		hs.preloadAjaxElement(0)
	},
	preloadAjaxElement: function(i) {
		if (!hs.preloadTheseAjax[i]) return;
		var a = hs.preloadTheseAjax[i];
		var cache = hs.getNode(hs.getParam(a, 'contentId'));
		if (!cache) cache = hs.getSelfRendered();
		var ajax = new hs.Ajax(a, cache, 1);
		ajax.onError = function() {};
		ajax.onLoad = function() {
			hs.push(hs.cacheBindings, [a, cache]);
			hs.preloadAjaxElement(i + 1)
		};
		ajax.run()
	},
	focusTopmost: function() {
		var topZ = 0,
			topmostKey = -1;
		for (var i = 0; i < hs.expanders.length; i++) {
			if (hs.expanders[i]) {
				if (hs.expanders[i].wrapper.style.zIndex && hs.expanders[i].wrapper.style.zIndex > topZ) {
					topZ = hs.expanders[i].wrapper.style.zIndex;
					topmostKey = i
				}
			}
		}
		if (topmostKey == -1) hs.focusKey = -1;
		else hs.expanders[topmostKey].focus()
	},
	getParam: function(a, param) {
		a.getParams = a.onclick;
		var p = a.getParams ? a.getParams() : null;
		a.getParams = null;
		return (p && typeof p[param] != 'undefined') ? p[param] : (typeof hs[param] != 'undefined' ? hs[param] : null)
	},
	getSrc: function(a) {
		var src = hs.getParam(a, 'src');
		if (src) return src;
		return a.href
	},
	getNode: function(id) {
		var node = hs.$(id),
			clone = hs.clones[id],
			a = {};
		if (!node && !clone) return null;
		if (!clone) {
			clone = node.cloneNode(true);
			clone.id = '';
			hs.clones[id] = clone;
			return node
		} else {
			return clone.cloneNode(true)
		}
	},
	discardElement: function(d) {
		hs.garbageBin.appendChild(d);
		hs.garbageBin.innerHTML = ''
	},
	previousOrNext: function(el, op) {
		hs.updateAnchors();
		var exp = hs.last = hs.getExpander(el);
		try {
			var adj = hs.upcoming = exp.getAdjacentAnchor(op);
			adj.onclick()
		} catch (e) {
			hs.last = hs.upcoming = null
		}
		try {
			exp.close()
		} catch (e) {}
		return false
	},
	previous: function(el) {
		return hs.previousOrNext(el, -1)
	},
	next: function(el) {
		return hs.previousOrNext(el, 1)
	},
	keyHandler: function(e) {
		if (!e) e = window.event;
		if (!e.target) e.target = e.srcElement;
		if (e.target.form) return true;
		var op = null;
		switch (e.keyCode) {
			case 32:
			case 34:
			case 39:
			case 40:
				op = 1;
				break;
			case 8:
			case 33:
			case 37:
			case 38:
				op = -1;
				break;
			case 27:
			case 13:
				op = 0
		}
		if (op !== null) {
			hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);
			if (!hs.enableKeyListener) return true;
			if (e.preventDefault) e.preventDefault();
			else e.returnValue = false;
			var exp = hs.getExpander();
			if (exp) {
				if (op == 0) {
					exp.close()
				} else {
					hs.previousOrNext(exp.key, op)
				}
				return false
			}
		}
		return true
	},
	registerOverlay: function(overlay) {
		hs.push(hs.overlays, overlay)
	},
	getWrapperKey: function(element) {
		var el, re = /^highslide-wrapper-([0-9]+)$/;
		el = element;
		while (el.parentNode) {
			if (el.id && re.test(el.id)) return el.id.replace(re, "$1");
			el = el.parentNode
		}
		el = element;
		while (el.parentNode) {
			if (el.tagName && hs.isHsAnchor(el)) {
				for (var key = 0; key < hs.expanders.length; key++) {
					var exp = hs.expanders[key];
					if (exp && exp.a == el) return key
				}
			}
			el = el.parentNode
		}
		return null
	},
	getExpander: function(el) {
		if (typeof el == 'undefined') return hs.expanders[hs.focusKey] || null;
		if (typeof el == 'number') return hs.expanders[el] || null;
		if (typeof el == 'string') el = hs.$(el);
		return hs.expanders[hs.getWrapperKey(el)] || null
	},
	isHsAnchor: function(a) {
		return (a.onclick && a.onclick.toString().replace(/\s/g, ' ').match(/hs.(htmlE|e)xpand/))
	},
	reOrder: function() {
		for (var i = 0; i < hs.expanders.length; i++)
			if (hs.expanders[i] && hs.expanders[i].isExpanded) hs.focusTopmost()
	},
	mouseClickHandler: function(e) {
		if (!e) e = window.event;
		if (e.button > 1) return true;
		if (!e.target) e.target = e.srcElement;
		var el = e.target;
		while (el.parentNode && !(/highslide-(image|move|html|resize)/.test(el.className))) {
			el = el.parentNode
		}
		var exp = hs.getExpander(el);
		if (exp && (exp.isClosing || !exp.isExpanded)) return true;
		if (exp && e.type == 'mousedown') {
			if (e.target.form) return true;
			var match = el.className.match(/highslide-(image|move|resize)/);
			if (match) {
				hs.dragArgs = {
					exp: exp,
					type: match[1],
					left: exp.x.min,
					width: exp.x.span,
					top: exp.y.min,
					height: exp.y.span,
					clickX: e.clientX,
					clickY: e.clientY
				};
				hs.addEventListener(document, 'mousemove', hs.dragHandler);
				if (e.preventDefault) e.preventDefault();
				if (/highslide-(image|html)-blur/.test(exp.content.className)) {
					exp.focus();
					hs.hasFocused = true
				}
				return false
			} else if (/highslide-html/.test(el.className) && hs.focusKey != exp.key) {
				exp.focus();
				exp.redoShowHide()
			}
		} else if (e.type == 'mouseup') {
			hs.removeEventListener(document, 'mousemove', hs.dragHandler);
			if (hs.dragArgs) {
				if (hs.dragArgs.type == 'image') hs.dragArgs.exp.content.style.cursor = hs.styleRestoreCursor;
				var hasDragged = hs.dragArgs.hasDragged;
				if (!hasDragged && !hs.hasFocused && !/(move|resize)/.test(hs.dragArgs.type)) {
					exp.close()
				} else if (hasDragged || (!hasDragged && hs.hasHtmlexpanders)) {
					hs.dragArgs.exp.redoShowHide()
				}
				if (hs.dragArgs.exp.releaseMask) hs.dragArgs.exp.releaseMask.style.display = 'none';
				hs.hasFocused = false;
				hs.dragArgs = null
			} else if (/highslide-image-blur/.test(el.className)) {
				el.style.cursor = hs.styleRestoreCursor
			}
		}
		return false
	},
	dragHandler: function(e) {
		if (!hs.dragArgs) return true;
		if (!e) e = window.event;
		var a = hs.dragArgs,
			exp = a.exp;
		if (exp.iframe) {
			if (!exp.releaseMask) exp.releaseMask = hs.createElement('div', null, {
				position: 'absolute',
				width: exp.x.span + 'px',
				height: exp.y.span + 'px',
				left: 0,
				top: 0,
				zIndex: 4,
				background: (hs.ie ? 'white' : 'none'),
				opacity: 0.01
			}, exp.wrapper, true);
			if (exp.releaseMask.style.display == 'none') exp.releaseMask.style.display = ''
		}
		a.dX = e.clientX - a.clickX;
		a.dY = e.clientY - a.clickY;
		var distance = Math.sqrt(Math.pow(a.dX, 2) + Math.pow(a.dY, 2));
		if (!a.hasDragged) a.hasDragged = (a.type != 'image' && distance > 0) || (distance > (hs.dragSensitivity || 5));
		if (a.hasDragged && e.clientX > 5 && e.clientY > 5) {
			if (a.type == 'resize') exp.resize(a);
			else exp.move(a)
		}
		return false
	},
	wrapperMouseHandler: function(e) {
		try {
			if (!e) e = window.event;
			var over = /mouseover/i.test(e.type);
			if (!e.target) e.target = e.srcElement;
			if (hs.ie) e.relatedTarget = over ? e.fromElement : e.toElement;
			var exp = hs.getExpander(e.target);
			if (!exp.isExpanded) return;
			if (!exp || !e.relatedTarget || hs.getExpander(e.relatedTarget) == exp || hs.dragArgs) return;
			for (var i = 0; i < exp.overlays.length; i++) {
				var o = hs.$('hsId' + exp.overlays[i]);
				if (o && o.hideOnMouseOut) {
					var from = over ? 0 : o.opacity,
						to = over ? o.opacity : 0;
					hs.fade(o, from, to)
				}
			}
		} catch (e) {}
	},
	addEventListener: function(el, event, func) {
		try {
			el.addEventListener(event, func, false)
		} catch (e) {
			try {
				el.detachEvent('on' + event, func);
				el.attachEvent('on' + event, func)
			} catch (e) {
				el['on' + event] = func
			}
		}
	},
	removeEventListener: function(el, event, func) {
		try {
			el.removeEventListener(event, func, false)
		} catch (e) {
			try {
				el.detachEvent('on' + event, func)
			} catch (e) {
				el['on' + event] = null
			}
		}
	},
	preloadFullImage: function(i) {
		if (hs.continuePreloading && hs.preloadTheseImages[i] && hs.preloadTheseImages[i] != 'undefined') {
			var img = document.createElement('img');
			img.onload = function() {
				img = null;
				hs.preloadFullImage(i + 1)
			};
			img.src = hs.preloadTheseImages[i]
		}
	},
	preloadImages: function(number) {
		if (number && typeof number != 'object') hs.numberOfImagesToPreload = number;
		var arr = hs.getAnchors();
		for (var i = 0; i < arr.images.length && i < hs.numberOfImagesToPreload; i++) {
			hs.push(hs.preloadTheseImages, hs.getSrc(arr.images[i]))
		}
		if (hs.outlineType) new hs.Outline(hs.outlineType, function() {
			hs.preloadFullImage(0)
		});
		else hs.preloadFullImage(0);
		var cur = hs.createElement('img', {
			src: hs.graphicsDir + hs.restoreCursor
		})
	},
	init: function() {
		if (!hs.container) {
			hs.container = hs.createElement('div', null, {
				position: 'absolute',
				left: 0,
				top: 0,
				width: '100%',
				zIndex: hs.zIndexCounter
			}, document.body, true);
			hs.loading = hs.createElement('a', {
				className: 'highslide-loading',
				title: hs.lang.loadingTitle,
				innerHTML: hs.lang.loadingText,
				href: 'javascript:;'
			}, {
				position: 'absolute',
				top: '-9999px',
				opacity: hs.loadingOpacity,
				zIndex: 1
			}, hs.container);
			hs.garbageBin = hs.createElement('div', null, {
				display: 'none'
			}, hs.container);
			hs.clearing = hs.createElement('div', null, {
				clear: 'both',
				paddingTop: '1px'
			}, null, true);
			Math.linearTween = function(t, b, c, d) {
				return c * t / d + b
			};
			Math.easeInQuad = function(t, b, c, d) {
				return c * (t /= d) * t + b
			};
			for (var x in hs.langDefaults) {
				if (typeof hs[x] != 'undefined') hs.lang[x] = hs[x];
				else if (typeof hs.lang[x] == 'undefined' && typeof hs.langDefaults[x] != 'undefined') hs.lang[x] = hs.langDefaults[
					x]
			}
			hs.ie6SSL = (hs.ie && hs.ieVersion() <= 6 && location.protocol == 'https:')
		}
	},
	domReady: function() {
		hs.isDomReady = true;
		if (hs.onDomReady) hs.onDomReady()
	},
	updateAnchors: function() {
		var els = document.getElementsByTagName('*'),
			all = [],
			images = [],
			htmls = [],
			groups = {},
			re;
		for (var i = 0; i < els.length; i++) {
			re = hs.isHsAnchor(els[i]);
			if (re) {
				hs.push(all, els[i]);
				if (re[0] == 'hs.expand') hs.push(images, els[i]);
				else if (re[0] == 'hs.htmlExpand') hs.push(htmls, els[i]);
				var g = hs.getParam(els[i], 'slideshowGroup') || 'none';
				if (!groups[g]) groups[g] = [];
				hs.push(groups[g], els[i])
			}
		}
		hs.anchors = {
			all: all,
			groups: groups,
			images: images,
			htmls: htmls
		};
		return hs.anchors
	},
	getAnchors: function() {
		return hs.anchors || hs.updateAnchors()
	},
	fade: function(el, o, oFinal, dur, i, dir) {
		if (typeof i == 'undefined') {
			if (typeof dur != 'number') dur = 250;
			if (dur < 25) {
				hs.setStyles(el, {
					opacity: oFinal
				});
				return
			}
			i = hs.faders.length;
			dir = oFinal > o ? 1 : -1;
			var step = (25 / (dur - dur % 25)) * Math.abs(o - oFinal)
		}
		o = parseFloat(o);
		var skip = (el.fade === 0 || el.fade === false || (el.fade == 2 && hs.ie));
		el.style.visibility = ((skip ? oFinal : o) <= 0) ? 'hidden' : 'visible';
		if (skip || o < 0 || (dir == 1 && o > oFinal)) return;
		if (el.fading && el.fading.i != i) {
			clearTimeout(hs.faders[el.fading.i]);
			o = el.fading.o
		}
		el.fading = {
			i: i,
			o: o,
			step: (step || el.fading.step)
		};
		el.style.visibility = (o <= 0) ? 'hidden' : 'visible';
		hs.setStyles(el, {
			opacity: o
		});
		hs.faders[i] = setTimeout(function() {
			hs.fade(el, o + el.fading.step * dir, oFinal, null, i, dir)
		}, 25)
	},
	close: function(el) {
		var exp = hs.getExpander(el);
		if (exp) exp.close();
		return false
	}
};
hs.Outline = function(outlineType, onLoad) {
	this.onLoad = onLoad;
	this.outlineType = outlineType;
	var v = hs.ieVersion(),
		tr;
	this.hasAlphaImageLoader = hs.ie && v >= 5.5 && v < 7;
	if (!outlineType) {
		if (onLoad) onLoad();
		return
	}
	hs.init();
	this.table = hs.createElement('table', {
		cellSpacing: 0
	}, {
		visibility: 'hidden',
		position: 'absolute',
		borderCollapse: 'collapse'
	}, hs.container, true);
	var tbody = hs.createElement('tbody', null, null, this.table, 1);
	this.td = [];
	for (var i = 0; i <= 8; i++) {
		if (i % 3 == 0) tr = hs.createElement('tr', null, {
			height: 'auto'
		}, tbody, true);
		this.td[i] = hs.createElement('td', null, null, tr, true);
		var style = i != 4 ? {
			lineHeight: 0,
			fontSize: 0
		} : {
			position: 'relative'
		};
		hs.setStyles(this.td[i], style)
	}
	this.td[4].className = outlineType;
	this.preloadGraphic()
};
hs.Outline.prototype = {
	preloadGraphic: function() {
		var src = hs.graphicsDir + (hs.outlinesDir || "outlines/") + this.outlineType + ".png";
		var appendTo = hs.safari ? hs.container : null;
		this.graphic = hs.createElement('img', null, {
			position: 'absolute',
			left: '-9999px',
			top: '-9999px'
		}, appendTo, true);
		var pThis = this;
		this.graphic.onload = function() {
			pThis.onGraphicLoad()
		};
		this.graphic.src = src
	},
	onGraphicLoad: function() {
		var o = this.offset = this.graphic.width / 4,
			pos = [
				[0, 0],
				[0, -4],
				[-2, 0],
				[0, -8], 0, [-2, -8],
				[0, -2],
				[0, -6],
				[-2, -2]
			],
			dim = {
				height: (2 * o) + 'px',
				width: (2 * o) + 'px'
			};
		hs.discardElement(this.graphic);
		for (var i = 0; i <= 8; i++) {
			if (pos[i]) {
				if (this.hasAlphaImageLoader) {
					var w = (i == 1 || i == 7) ? '100%' : this.graphic.width + 'px';
					var div = hs.createElement('div', null, {
						width: '100%',
						height: '100%',
						position: 'relative',
						overflow: 'hidden'
					}, this.td[i], true);
					hs.createElement('div', null, {
						filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale, src='" + this.graphic.src +
							"')",
						position: 'absolute',
						width: w,
						height: this.graphic.height + 'px',
						left: (pos[i][0] * o) + 'px',
						top: (pos[i][1] * o) + 'px'
					}, div, true)
				} else {
					hs.setStyles(this.td[i], {
						background: 'url(' + this.graphic.src + ') ' + (pos[i][0] * o) + 'px ' + (pos[i][1] * o) + 'px'
					})
				}
				if (window.opera && (i == 3 || i == 5)) hs.createElement('div', null, dim, this.td[i], true);
				hs.setStyles(this.td[i], dim)
			}
		}
		if (hs.pendingOutlines[this.outlineType]) hs.pendingOutlines[this.outlineType].destroy();
		hs.pendingOutlines[this.outlineType] = this;
		if (this.onLoad) this.onLoad()
	},
	setPosition: function(exp, pos, vis) {
		pos = pos || {
			x: exp.x.min,
			y: exp.y.min,
			w: exp.x.span + exp.x.p1 + exp.x.p2,
			h: exp.y.span + exp.y.p1 + exp.y.p2
		};
		if (vis) this.table.style.visibility = (pos.h >= 4 * this.offset) ? 'visible' : 'hidden';
		hs.setStyles(this.table, {
			left: (pos.x - this.offset) + 'px',
			top: (pos.y - this.offset) + 'px',
			width: (pos.w + 2 * (exp.x.cb + this.offset)) + 'px'
		});
		pos.w += 2 * (exp.x.cb - this.offset);
		pos.h += +2 * (exp.y.cb - this.offset);
		hs.setStyles(this.td[4], {
			width: pos.w >= 0 ? pos.w + 'px' : 0,
			height: pos.h >= 0 ? pos.h + 'px' : 0
		});
		if (this.hasAlphaImageLoader) this.td[3].style.height = this.td[5].style.height = this.td[4].style.height
	},
	destroy: function(hide) {
		if (hide) this.table.style.visibility = 'hidden';
		else hs.discardElement(this.table)
	}
};
hs.Expander = function(a, params, custom, contentType) {
	if (document.readyState && hs.ie && !hs.isDomReady) {
		hs.onDomReady = function() {
			new hs.Expander(a, params, custom, contentType)
		};
		return
	}
	this.a = a;
	this.custom = custom;
	this.contentType = contentType || 'image';
	this.isHtml = (contentType == 'html');
	this.isImage = !this.isHtml;
	hs.continuePreloading = false;
	this.overlays = [];
	hs.init();
	var key = this.key = hs.expanders.length;
	for (var i = 0; i < hs.overrides.length; i++) {
		var name = hs.overrides[i];
		this[name] = params && typeof params[name] != 'undefined' ? params[name] : hs[name]
	}
	if (!this.src) this.src = a.href;
	var el = (params && params.thumbnailId) ? hs.$(params.thumbnailId) : a;
	el = this.thumb = el.getElementsByTagName('img')[0] || el;
	this.thumbsUserSetId = el.id || a.id;
	for (var i = 0; i < hs.expanders.length; i++) {
		if (hs.expanders[i] && hs.expanders[i].a == a) {
			hs.expanders[i].focus();
			return false
		}
	}
	for (var i = 0; i < hs.expanders.length; i++) {
		if (hs.expanders[i] && hs.expanders[i].thumb != el && !hs.expanders[i].onLoadStarted) {
			hs.expanders[i].cancelLoading()
		}
	}
	hs.expanders[this.key] = this;
	if (!hs.allowMultipleInstances) {
		if (hs.expanders[key - 1]) hs.expanders[key - 1].close();
		if (typeof hs.focusKey != 'undefined' && hs.expanders[hs.focusKey]) hs.expanders[hs.focusKey].close()
	}
	var pos = hs.getPosition(el);
	var x = this.x = {};
	x.t = el.width ? parseInt(el.width) : el.offsetWidth;
	x.tpos = pos.x;
	x.tb = (el.offsetWidth - x.t) / 2;
	var y = this.y = {};
	y.t = el.height ? parseInt(el.height) : el.offsetHeight;
	y.tpos = pos.y;
	y.tb = (el.offsetHeight - y.t) / 2;
	x.p1 = x.p2 = y.p1 = y.p2 = 0;
	this.wrapper = hs.createElement('div', {
		id: 'highslide-wrapper-' + this.key,
		className: this.wrapperClassName
	}, {
		visibility: 'hidden',
		position: 'absolute',
		zIndex: hs.zIndexCounter++
	}, null, true);
	this.wrapper.onmouseover = this.wrapper.onmouseout = hs.wrapperMouseHandler;
	if (this.contentType == 'image' && this.outlineWhileAnimating == 2) this.outlineWhileAnimating = 0;
	if (!this.outlineType) {
		this[this.contentType + 'Create']()
	} else if (hs.pendingOutlines[this.outlineType]) {
		this.connectOutline();
		this[this.contentType + 'Create']()
	} else {
		this.showLoading();
		var exp = this;
		new hs.Outline(this.outlineType, function() {
			exp.connectOutline();
			exp[exp.contentType + 'Create']()
		})
	}
	return true
};
hs.Expander.prototype = {
	connectOutline: function(x, y) {
		var o = this.outline = hs.pendingOutlines[this.outlineType];
		o.table.style.zIndex = this.wrapper.style.zIndex;
		hs.pendingOutlines[this.outlineType] = null
	},
	showLoading: function() {
		if (this.onLoadStarted || this.loading) return;
		this.loading = hs.loading;
		var exp = this;
		this.loading.onclick = function() {
			exp.cancelLoading()
		};
		var exp = this,
			l = (this.x.tpos + this.x.tb + (this.x.t - this.loading.offsetWidth) / 2) + 'px',
			t = (this.y.tpos + (this.y.t - this.loading.offsetHeight) / 2) + 'px';
		setTimeout(function() {
			if (exp.loading) hs.setStyles(exp.loading, {
				left: l,
				top: t
			})
		}, 100)
	},
	imageCreate: function() {
		var exp = this;
		var img = document.createElement('img');
		this.content = img;
		img.onload = function() {
			if (hs.expanders[exp.key]) exp.contentLoaded()
		};
		if (hs.blockRightClick) img.oncontextmenu = function() {
			return false
		};
		img.className = 'highslide-image';
		hs.setStyles(img, {
			visibility: 'hidden',
			display: 'block',
			position: 'absolute',
			maxWidth: '9999px',
			zIndex: 3
		});
		img.title = hs.lang.restoreTitle;
		if (hs.safari) hs.container.appendChild(img);
		if (hs.ie && hs.flushImgSize) img.src = null;
		img.src = this.src;
		this.showLoading()
	},
	htmlCreate: function() {
		this.content = hs.getCacheBinding(this.a);
		if (!this.content) this.content = hs.getNode(this.contentId);
		if (!this.content) this.content = hs.getSelfRendered();
		this.getInline(['maincontent']);
		if (this.maincontent) {
			var body = hs.getElementByClass(this.content, 'div', 'highslide-body');
			if (body) body.appendChild(this.maincontent);
			this.maincontent.style.display = 'block'
		}
		this.innerContent = this.content;
		if (/(swf|iframe)/.test(this.objectType)) this.setObjContainerSize(this.innerContent);
		hs.container.appendChild(this.wrapper);
		hs.setStyles(this.wrapper, {
			position: 'static',
			padding: '0 ' + hs.marginRight + 'px 0 ' + hs.marginLeft + 'px'
		});
		this.content = hs.createElement('div', {
			className: 'highslide-html'
		}, {
			position: 'relative',
			zIndex: 3,
			overflow: 'hidden'
		}, this.wrapper);
		this.mediumContent = hs.createElement('div', null, null, this.content, 1);
		this.mediumContent.appendChild(this.innerContent);
		hs.setStyles(this.innerContent, {
			position: 'relative',
			display: 'block'
		});
		if (this.width) this.innerContent.style.width = this.width + 'px';
		if (this.height) this.innerContent.style.height = this.height + 'px';
		if (this.innerContent.offsetWidth < this.minWidth) this.innerContent.style.width = this.minWidth + 'px';
		if (this.objectType == 'ajax' && !hs.getCacheBinding(this.a)) {
			this.showLoading();
			var ajax = new hs.Ajax(this.a, this.innerContent);
			var exp = this;
			ajax.onLoad = function() {
				if (hs.expanders[exp.key]) exp.contentLoaded()
			};
			ajax.onError = function() {
				location.href = exp.src
			};
			ajax.run()
		} else if (this.objectType == 'iframe' && this.objectLoadTime == 'before') {
			this.writeExtendedContent()
		} else this.contentLoaded()
	},
	contentLoaded: function() {
		try {
			if (!this.content) return;
			this.content.onload = null;
			if (this.onLoadStarted) return;
			else this.onLoadStarted = true;
			var x = this.x,
				y = this.y;
			if (this.loading) {
				hs.setStyles(this.loading, {
					top: '-9999px'
				});
				this.loading = null
			}
			this.marginBottom = hs.marginBottom;
			if (this.isImage) {
				x.full = this.content.width;
				y.full = this.content.height;
				hs.setStyles(this.content, {
					width: this.x.t + 'px',
					height: this.y.t + 'px'
				})
			} else if (this.htmlGetSize) this.htmlGetSize();
			this.wrapper.appendChild(this.content);
			hs.setStyles(this.wrapper, {
				left: this.x.tpos + 'px',
				top: this.y.tpos + 'px'
			});
			hs.container.appendChild(this.wrapper);
			x.cb = (this.content.offsetWidth - this.x.t) / 2;
			y.cb = (this.content.offsetHeight - this.y.t) / 2;
			var modMarginRight = hs.marginRight + 2 * x.cb;
			this.marginBottom += 2 * y.cb;
			this.getOverlays();
			var ratio = x.full / y.full;
			var minWidth = this.allowSizeReduction ? this.minWidth : x.full;
			var minHeight = this.allowSizeReduction ? this.minHeight : y.full;
			var justify = {
				x: 'auto',
				y: 'auto'
			};
			var page = hs.getPageSize();
			x.min = x.tpos - x.cb + x.tb;
			x.span = Math.min(x.full, this.maxWidth || x.full);
			x.minSpan = Math.min(x.full, minWidth);
			x.marginMin = hs.marginLeft;
			x.marginMax = modMarginRight;
			x.scroll = page.scrollLeft;
			x.clientSpan = page.width;
			this.justify(x);
			y.min = y.tpos - y.cb + y.tb;
			y.span = Math.min(y.full, this.maxHeight || y.full);
			y.minSpan = Math.min(y.full, minHeight);
			y.marginMin = hs.marginTop;
			y.marginMax = this.marginBottom;
			y.scroll = page.scrollTop;
			y.clientSpan = page.height;
			this.justify(y);
			if (this.isHtml) this.htmlSizeOperations();
			if (this.overlayBox) this.sizeOverlayBox(0, 1);
			if (this.allowSizeReduction) {
				if (this.isImage) this.correctRatio(ratio);
				else this.fitOverlayBox();
				if (this.isImage && this.x.full > this.x.span) {
					this.createFullExpand();
					if (this.overlays.length == 1) this.sizeOverlayBox()
				}
			}
			this.show()
		} catch (e) {
			window.location.href = this.src
		}
	},
	setObjContainerSize: function(parent, auto) {
		var c = hs.getElementByClass(parent, 'DIV', 'highslide-body');
		if (/(iframe|swf)/.test(this.objectType)) {
			if (this.objectWidth) c.style.width = this.objectWidth + 'px';
			if (this.objectHeight) c.style.height = this.objectHeight + 'px'
		}
	},
	writeExtendedContent: function() {
		if (this.hasExtendedContent) return;
		var exp = this;
		this.body = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');
		if (this.objectType == 'iframe') {
			this.showLoading();
			var ruler = hs.clearing.cloneNode(1);
			this.body.appendChild(ruler);
			this.newWidth = this.innerContent.offsetWidth;
			if (!this.objectWidth) this.objectWidth = ruler.offsetWidth;
			var hDiff = this.innerContent.offsetHeight - this.body.offsetHeight,
				h = this.objectHeight || (hs.getPageSize()).height - hDiff - hs.marginTop - hs.marginBottom,
				onload = this.objectLoadTime == 'before' ? ' onload="if (hs.expanders[' + this.key + ']) hs.expanders[' + this.key +
				'].contentLoaded()" ' : '';
			this.body.innerHTML += '<iframe name="hs' + (new Date()).getTime() + '" frameborder="0" key="' + this.key + '" ' +
				' allowtransparency="true" style="width:' + this.objectWidth + 'px; height:' + h + 'px" ' + onload + ' src="' +
				this.src + '"></iframe>';
			this.ruler = this.body.getElementsByTagName('div')[0];
			this.iframe = this.body.getElementsByTagName('iframe')[0];
			if (this.objectLoadTime == 'after') this.correctIframeSize()
		}
		if (this.objectType == 'swf') {
			this.body.id = this.body.id || 'hs-flash-id-' + this.key;
			var a = this.swfOptions;
			if (typeof a.params.wmode == 'undefined') a.params.wmode = 'transparent';
			if (swfobject) swfobject.embedSWF(this.src, this.body.id, this.objectWidth, this.objectHeight, a.version || '7', a
				.expressInstallSwfurl, a.flashvars, a.params, a.attributes)
		}
		this.hasExtendedContent = true
	},
	htmlGetSize: function() {
		if (this.iframe && !this.objectHeight) {
			var h;
			try {
				var doc = this.iframe.contentDocument || this.iframe.contentWindow.document;
				var clearing = doc.createElement('div');
				clearing.style.clear = 'both';
				doc.body.appendChild(clearing);
				h = clearing.offsetTop;
				if (hs.ie) h += parseInt(doc.body.currentStyle.marginTop) + parseInt(doc.body.currentStyle.marginBottom) - 1
			} catch (e) {
				h = 300
			}
			this.iframe.style.height = this.body.style.height = h + 'px'
		}
		this.innerContent.appendChild(hs.clearing);
		if (!this.x.full) this.x.full = this.innerContent.offsetWidth;
		this.y.full = this.innerContent.offsetHeight;
		this.innerContent.removeChild(hs.clearing);
		if (hs.ie && this.newHeight > parseInt(this.innerContent.currentStyle.height)) {
			this.newHeight = parseInt(this.innerContent.currentStyle.height)
		}
		hs.setStyles(this.wrapper, {
			position: 'absolute',
			padding: '0'
		});
		hs.setStyles(this.content, {
			width: this.x.t + 'px',
			height: this.y.t + 'px'
		})
	},
	correctIframeSize: function() {
		var wDiff = this.innerContent.offsetWidth - this.ruler.offsetWidth;
		if (wDiff < 0) wDiff = 0;
		var hDiff = this.innerContent.offsetHeight - this.body.offsetHeight;
		hs.setStyles(this.iframe, {
			width: (this.x.span - wDiff) + 'px',
			height: (this.y.span - hDiff) + 'px'
		});
		hs.setStyles(this.body, {
			width: this.iframe.style.width,
			height: this.iframe.style.height
		});
		this.scrollingContent = this.iframe;
		this.scrollerDiv = this.scrollingContent
	},
	htmlSizeOperations: function() {
		this.setObjContainerSize(this.innerContent);
		if (this.objectType == 'swf' && this.objectLoadTime == 'before') this.writeExtendedContent();
		if (this.x.span < this.x.full && !this.allowWidthReduction) this.x.span = this.x.full;
		if (this.y.span < this.y.full && !this.allowHeightReduction) this.y.span = this.y.full;
		this.scrollerDiv = this.innerContent;
		hs.setStyles(this.mediumContent, {
			width: this.x.span + 'px',
			position: 'relative',
			left: (this.x.min - this.x.tpos) + 'px',
			top: (this.y.min - this.y.tpos) + 'px'
		});
		hs.setStyles(this.innerContent, {
			border: 'none',
			width: 'auto',
			height: 'auto'
		});
		var node = hs.getElementByClass(this.innerContent, 'DIV', 'highslide-body');
		if (node && !/(iframe|swf)/.test(this.objectType)) {
			var cNode = node;
			node = hs.createElement(cNode.nodeName, null, {
				overflow: 'hidden'
			}, null, true);
			cNode.parentNode.insertBefore(node, cNode);
			node.appendChild(hs.clearing);
			node.appendChild(cNode);
			var wDiff = this.innerContent.offsetWidth - node.offsetWidth;
			var hDiff = this.innerContent.offsetHeight - node.offsetHeight;
			node.removeChild(hs.clearing);
			var kdeBugCorr = hs.safari || navigator.vendor == 'KDE' ? 1 : 0;
			hs.setStyles(node, {
				width: (this.x.span - wDiff - kdeBugCorr) + 'px',
				height: (this.y.span - hDiff) + 'px',
				overflow: 'auto',
				position: 'relative'
			});
			if (kdeBugCorr && cNode.offsetHeight > node.offsetHeight) {
				node.style.width = (parseInt(node.style.width) + kdeBugCorr) + 'px'
			}
			this.scrollingContent = node;
			this.scrollerDiv = this.scrollingContent
		}
		if (this.iframe && this.objectLoadTime == 'before') this.correctIframeSize();
		if (!this.scrollingContent && this.y.span < this.mediumContent.offsetHeight) this.scrollerDiv = this.content;
		if (this.scrollerDiv == this.content && !this.allowWidthReduction && !/(iframe|swf)/.test(this.objectType)) {
			this.x.span += 17
		}
		if (this.scrollerDiv && this.scrollerDiv.offsetHeight > this.scrollerDiv.parentNode.offsetHeight) {
			setTimeout("try { hs.expanders[" + this.key + "].scrollerDiv.style.overflow = 'auto'; } catch(e) {}", hs.expandDuration)
		}
	},
	justify: function(p, moveOnly) {
		var tgt, dim = p == this.x ? 'x' : 'y';
		var hasMovedMin = false;
		var allowReduce = true;
		p.min = Math.round(p.min - ((p.span + p.p1 + p.p2 - p.t) / 2));
		if (p.min < p.scroll + p.marginMin) {
			p.min = p.scroll + p.marginMin;
			hasMovedMin = true
		}
		if (!moveOnly && p.span < p.minSpan) {
			p.span = p.minSpan;
			allowReduce = false
		}
		if (p.min + p.span + p.p1 + p.p2 > p.scroll + p.clientSpan - p.marginMax) {
			if (!moveOnly && hasMovedMin && allowReduce) {
				p.span = p.clientSpan - p.marginMin - p.marginMax
			} else if (p.span + p.p1 + p.p2 < p.clientSpan - p.marginMin - p.marginMax) {
				p.min = p.scroll + p.clientSpan - p.span - p.marginMin - p.marginMax - p.p1 - p.p2
			} else {
				p.min = p.scroll + p.marginMin;
				if (!moveOnly && allowReduce) p.span = p.clientSpan - p.marginMin - p.marginMax
			}
		}
		if (!moveOnly && p.span < p.minSpan) {
			p.span = p.minSpan;
			allowReduce = false
		}
		if (p.min < p.marginMin) {
			var tmpMin = p.min;
			p.min = p.marginMin;
			if (allowReduce && !moveOnly) p.span = p.span - (p.min - tmpMin)
		}
	},
	correctRatio: function(ratio) {
		var x = this.x,
			y = this.y;
		var changed = false;
		if (x.span / y.span > ratio) {
			x.span = y.span * ratio;
			if (x.span < x.minSpan) {
				x.span = x.minSpan;
				y.span = x.span / ratio
			}
			changed = true
		} else if (x.span / y.span < ratio) {
			var tmpHeight = y.span;
			y.span = x.span / ratio;
			changed = true
		}
		this.fitOverlayBox(ratio);
		if (changed) {
			x.min = x.tpos - x.cb + x.tb;
			x.minSpan = x.span;
			this.justify(x, true);
			y.min = y.tpos - y.cb + y.tb;
			y.minSpan = y.span;
			this.justify(y, true);
			if (this.overlayBox) this.sizeOverlayBox()
		}
	},
	fitOverlayBox: function(ratio) {
		var x = this.x,
			y = this.y;
		if (this.overlayBox) {
			while (y.span > this.minHeight && x.span > this.minWidth && y.marginMin + y.p1 + y.span + y.p2 + y.marginMax > y.clientSpan) {
				y.span -= 10;
				if (ratio) x.span = y.span * ratio;
				this.sizeOverlayBox(0, 1)
			}
		}
	},
	show: function() {
		var imgPos = {
			x: this.x.min - 20,
			y: this.y.min - 20,
			w: this.x.span + 40,
			h: this.y.span + 40
		};
		hs.hideSelects = (hs.ie && hs.ieVersion() < 7);
		if (hs.hideSelects) this.showHideElements('SELECT', 'hidden', imgPos);
		hs.hideIframes = ((window.opera && navigator.appVersion < 9) || navigator.vendor == 'KDE' || (hs.ie && hs.ieVersion() <
			5.5));
		if (hs.hideIframes) this.showHideElements('IFRAME', 'hidden', imgPos);
		if (hs.geckoMac) this.showHideElements('*', 'hidden', imgPos);
		this.changeSize(1, {
			xmin: this.x.tpos + this.x.tb - this.x.cb,
			ymin: this.y.tpos + this.y.tb - this.y.cb,
			xspan: this.x.t,
			yspan: this.y.t,
			xp1: 0,
			xp2: 0,
			yp1: 0,
			yp2: 0,
			o: hs.outlineStartOffset
		}, {
			xmin: this.x.min,
			ymin: this.y.min,
			xspan: this.x.span,
			yspan: this.y.span,
			xp1: this.x.p1,
			yp1: this.y.p1,
			xp2: this.x.p2,
			yp2: this.y.p2,
			o: this.outline ? this.outline.offset : 0
		}, hs.expandDuration, hs.expandSteps)
	},
	changeSize: function(up, from, to, dur, steps) {
		if (this.outline && !this.outlineWhileAnimating) {
			if (up) this.outline.setPosition(this);
			else this.outline.destroy((this.isHtml && this.preserveContent))
		}
		if (!up && this.overlayBox) {
			if (this.isHtml && this.preserveContent) {
				this.overlayBox.style.top = '-9999px';
				hs.container.appendChild(this.overlayBox)
			} else hs.discardElement(this.overlayBox)
		}
		if (this.fadeInOut) {
			from.op = up ? 0 : 1;
			to.op = up
		}
		var t, exp = this,
			easing = Math[this.easing] || Math.easeInQuad;
		if (!up) easing = Math[this.easingClose] || easing;
		for (var i = 1; i <= steps; i++) {
			t = Math.round(i * (dur / steps));
			(function() {
				var pI = i,
					size = {};
				for (var x in from) {
					size[x] = easing(t, from[x], to[x] - from[x], dur);
					if (!/^op$/.test(x)) size[x] = Math.round(size[x])
				}
				setTimeout(function() {
					if (up && pI == 1) {
						exp.content.style.visibility = 'visible';
						exp.a.className += ' highslide-active-anchor'
					}
					exp.setSize(size)
				}, t)
			})()
		}
		if (up) {
			setTimeout(function() {
				if (exp.outline) exp.outline.table.style.visibility = "visible"
			}, t);
			setTimeout(function() {
				exp.afterExpand()
			}, t + 50)
		} else setTimeout(function() {
			exp.afterClose()
		}, t)
	},
	setSize: function(to) {
		try {
			if (to.op) hs.setStyles(this.wrapper, {
				opacity: to.op
			});
			hs.setStyles(this.wrapper, {
				width: (to.xspan + to.xp1 + to.xp2 + 2 * this.x.cb) + 'px',
				height: (to.yspan + to.yp1 + to.yp2 + 2 * this.y.cb) + 'px',
				left: to.xmin + 'px',
				top: to.ymin + 'px'
			});
			hs.setStyles(this.content, {
				top: to.yp1 + 'px',
				left: to.xp1 + 'px',
				width: to.xspan + 'px',
				height: to.yspan + 'px'
			});
			if (this.isHtml) {
				hs.setStyles(this.mediumContent, {
					left: (this.x.min - to.xmin + this.x.p1 - to.xp1) + 'px',
					top: (this.y.min - to.ymin + this.y.p1 - to.yp1) + 'px'
				});
				this.innerContent.style.visibility = 'visible'
			}
			if (this.outline && this.outlineWhileAnimating) {
				var o = this.outline.offset - to.o;
				this.outline.setPosition(this, {
					x: to.xmin + o,
					y: to.ymin + o,
					w: to.xspan + to.xp1 + to.xp2 + -2 * o,
					h: to.yspan + to.yp1 + to.yp2 + -2 * o
				}, 1)
			}
			this.wrapper.style.visibility = 'visible'
		} catch (e) {
			window.location.href = this.src
		}
	},
	afterExpand: function() {
		this.isExpanded = true;
		this.focus();
		if (this.isHtml && this.objectLoadTime == 'after') this.writeExtendedContent();
		if (this.isHtml) {
			if (this.iframe) {
				try {
					var exp = this,
						doc = this.iframe.contentDocument || this.iframe.contentWindow.document;
					hs.addEventListener(doc, 'mousedown', function() {
						if (hs.focusKey != exp.key) exp.focus()
					})
				} catch (e) {}
				if (hs.ie && typeof this.isClosing != 'boolean') this.iframe.style.width = (this.objectWidth - 1) + 'px'
			}
		}
		this.prepareNextOutline();
		if (this.overlayBox) this.showOverlays()
	},
	prepareNextOutline: function() {
		var key = this.key;
		var outlineType = this.outlineType;
		new hs.Outline(outlineType, function() {
			try {
				hs.expanders[key].preloadNext()
			} catch (e) {}
		})
	},
	preloadNext: function() {
		var next = this.getAdjacentAnchor(1);
		if (next && next.onclick.toString().match(/hs\.expand/)) var img = hs.createElement('img', {
			src: hs.getSrc(next)
		})
	},
	getAdjacentAnchor: function(op) {
		var current = this.getAnchorIndex(),
			as = hs.anchors.groups[this.slideshowGroup || 'none'];
		if (!as[current + op] && this.slideshow && this.slideshow.repeat) {
			if (op == 1) return as[0];
			else if (op == -1) return as[as.length - 1]
		}
		return as[current + op] || null
	},
	getAnchorIndex: function() {
		var arr = hs.anchors.groups[this.slideshowGroup || 'none'];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == this.a) return i
		}
		return null
	},
	cancelLoading: function() {
		hs.expanders[this.key] = null;
		if (this.loading) hs.loading.style.left = '-9999px'
	},
	writeCredits: function() {
		this.credits = hs.createElement('a', {
			href: hs.creditsHref,
			className: 'highslide-credits',
			innerHTML: hs.lang.creditsText,
			title: hs.lang.creditsTitle
		});
		this.createOverlay({
			overlayId: this.credits,
			position: 'top left'
		})
	},
	getInline: function(types, addOverlay) {
		for (var i = 0; i < types.length; i++) {
			var type = types[i],
				s = null;
			if (!this[type + 'Id'] && this.thumbsUserSetId) this[type + 'Id'] = type + '-for-' + this.thumbsUserSetId;
			if (this[type + 'Id']) this[type] = hs.getNode(this[type + 'Id']);
			if (!this[type] && !this[type + 'Text'] && this[type + 'Eval']) try {
				s = eval(this[type + 'Eval'])
			} catch (e) {}
			if (!this[type] && this[type + 'Text']) {
				s = this[type + 'Text']
			}
			if (!this[type] && !s) {
				var next = this.a.nextSibling;
				while (next && !hs.isHsAnchor(next)) {
					if ((new RegExp('highslide-' + type)).test(next.className || null)) {
						this[type] = next.cloneNode(1);
						break
					}
					next = next.nextSibling
				}
			}
			if (!this[type] && s) this[type] = hs.createElement('div', {
				className: 'highslide-' + type,
				innerHTML: s
			});
			if (addOverlay && this[type]) {
				var o = {
					position: (type == 'heading') ? 'above' : 'below'
				};
				for (var x in this[type + 'Overlay']) o[x] = this[type + 'Overlay'][x];
				o.overlayId = this[type];
				this.createOverlay(o)
			}
		}
	},
	showHideElements: function(tagName, visibility, imgPos) {
		var els = document.getElementsByTagName(tagName);
		var prop = tagName == '*' ? 'overflow' : 'visibility';
		for (var i = 0; i < els.length; i++) {
			if (prop == 'visibility' || (document.defaultView.getComputedStyle(els[i], "").getPropertyValue('overflow') ==
					'auto' || els[i].getAttribute('hidden-by') != null)) {
				var hiddenBy = els[i].getAttribute('hidden-by');
				if (visibility == 'visible' && hiddenBy) {
					hiddenBy = hiddenBy.replace('[' + this.key + ']', '');
					els[i].setAttribute('hidden-by', hiddenBy);
					if (!hiddenBy) els[i].style[prop] = els[i].origProp
				} else if (visibility == 'hidden') {
					var elPos = hs.getPosition(els[i]);
					elPos.w = els[i].offsetWidth;
					elPos.h = els[i].offsetHeight;
					var clearsX = (elPos.x + elPos.w < imgPos.x || elPos.x > imgPos.x + imgPos.w);
					var clearsY = (elPos.y + elPos.h < imgPos.y || elPos.y > imgPos.y + imgPos.h);
					var wrapperKey = hs.getWrapperKey(els[i]);
					if (!clearsX && !clearsY && wrapperKey != this.key) {
						if (!hiddenBy) {
							els[i].setAttribute('hidden-by', '[' + this.key + ']');
							els[i].origProp = els[i].style[prop];
							els[i].style[prop] = 'hidden'
						} else if (!hiddenBy.match('[' + this.key + ']')) {
							els[i].setAttribute('hidden-by', hiddenBy + '[' + this.key + ']')
						}
					} else if (hiddenBy == '[' + this.key + ']' || hs.focusKey == wrapperKey) {
						els[i].setAttribute('hidden-by', '');
						els[i].style[prop] = els[i].origProp || ''
					} else if (hiddenBy && hiddenBy.match('[' + this.key + ']')) {
						els[i].setAttribute('hidden-by', hiddenBy.replace('[' + this.key + ']', ''))
					}
				}
			}
		}
	},
	focus: function() {
		this.wrapper.style.zIndex = hs.zIndexCounter++;
		for (var i = 0; i < hs.expanders.length; i++) {
			if (hs.expanders[i] && i == hs.focusKey) {
				var blurExp = hs.expanders[i];
				blurExp.content.className += ' highslide-' + blurExp.contentType + '-blur';
				if (blurExp.isImage) {
					blurExp.content.style.cursor = hs.ie ? 'hand' : 'pointer';
					blurExp.content.title = hs.lang.focusTitle
				}
			}
		}
		if (this.outline) this.outline.table.style.zIndex = this.wrapper.style.zIndex;
		this.content.className = 'highslide-' + this.contentType;
		if (this.isImage) {
			this.content.title = hs.lang.restoreTitle;
			hs.styleRestoreCursor = window.opera ? 'pointer' : 'url(' + hs.graphicsDir + hs.restoreCursor + '), pointer';
			if (hs.ie && hs.ieVersion() < 6) hs.styleRestoreCursor = 'hand';
			this.content.style.cursor = hs.styleRestoreCursor
		}
		hs.focusKey = this.key;
		hs.addEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler)
	},
	move: function(e) {
		this.x.min = e.left + e.dX;
		this.y.min = e.top + e.dY;
		if (e.type == 'image') this.content.style.cursor = 'move';
		hs.setStyles(this.wrapper, {
			left: this.x.min + 'px',
			top: this.y.min + 'px'
		});
		if (this.outline) this.outline.setPosition(this)
	},
	resize: function(e) {
		var w, h, r = e.width / e.height;
		w = Math.max(e.width + e.dX, Math.min(this.minWidth, this.x.full));
		if (this.isImage && Math.abs(w - this.x.full) < 12) w = this.x.full;
		h = this.isHtml ? e.height + e.dY : w / r;
		if (h < Math.min(this.minHeight, this.y.full)) {
			h = Math.min(this.minHeight, this.y.full);
			if (this.isImage) w = h * r
		}
		this.x.span = w;
		this.y.span = h;
		if (this.isHtml) {
			var d = this.scrollerDiv;
			if (typeof this.wDiff == 'undefined') {
				this.wDiff = this.innerContent.offsetWidth - d.offsetWidth;
				this.hDiff = this.innerContent.offsetHeight - d.offsetHeight
			}
			hs.setStyles(d, {
				width: (this.x.span - this.wDiff) + 'px',
				height: (this.y.span - this.hDiff) + 'px'
			})
		}
		var size = {
			width: this.x.span + 'px',
			height: this.y.span + 'px'
		};
		hs.setStyles(this.content, size);
		if (this.releaseMask) hs.setStyles(this.releaseMask, size);
		if (this.isHtml) {
			this.mediumContent.style.width = 'auto';
			if (this.body) hs.setStyles(this.body, {
				width: 'auto',
				height: 'auto'
			})
		}
		if (this.overlayBox) this.sizeOverlayBox(true);
		hs.setStyles(this.wrapper, {
			width: (this.x.p1 + this.x.p2 + 2 * this.x.cb + this.x.span) + 'px',
			height: (this.y.p1 + this.y.p2 + 2 * this.y.cb + this.y.span) + 'px'
		});
		if (this.outline) this.outline.setPosition(this)
	},
	close: function() {
		if (this.isClosing || !this.isExpanded) return;
		this.isClosing = true;
		hs.removeEventListener(document, window.opera ? 'keypress' : 'keydown', hs.keyHandler);
		try {
			if (this.isHtml) this.htmlPrepareClose();
			this.content.style.cursor = 'default';
			this.changeSize(0, {
				xmin: this.x.min,
				ymin: this.y.min,
				xspan: this.x.span,
				yspan: parseInt(this.content.style.height),
				xp1: this.x.p1,
				yp1: this.y.p1,
				xp2: this.x.p2,
				yp2: this.y.p2,
				o: this.outline ? this.outline.offset : 0
			}, {
				xmin: this.x.tpos - this.x.cb + this.x.tb,
				ymin: this.y.tpos - this.y.cb + this.y.tb,
				xspan: this.x.t,
				yspan: this.y.t,
				xp1: 0,
				yp1: 0,
				xp2: 0,
				yp2: 0,
				o: hs.outlineStartOffset
			}, hs.restoreDuration, hs.restoreSteps)
		} catch (e) {
			this.afterClose()
		}
	},
	htmlPrepareClose: function() {
		if (hs.geckoMac) {
			if (!hs.mask) hs.mask = hs.createElement('div', null, {
				position: 'absolute'
			}, hs.container);
			hs.setStyles(hs.mask, {
				width: this.x.span + 'px',
				height: this.y.span + 'px',
				left: this.x.min + 'px',
				top: this.y.min + 'px',
				display: 'block'
			})
		}
		if (this.objectType == 'swf') try {
			hs.$(this.body.id).StopPlay()
		} catch (e) {}
		if (this.objectLoadTime == 'after' && !this.preserveContent) this.destroyObject();
		if (this.scrollerDiv && this.scrollerDiv != this.scrollingContent) this.scrollerDiv.style.overflow = 'hidden'
	},
	destroyObject: function() {
		if (hs.ie && this.iframe) try {
			this.iframe.contentWindow.document.body.innerHTML = ''
		} catch (e) {}
		if (this.objectType == 'swf') swfobject.removeSWF(this.body.id);
		this.body.innerHTML = ''
	},
	sleep: function() {
		if (this.outline) this.outline.table.style.display = 'none';
		this.releaseMask = null;
		this.wrapper.style.display = 'none';
		hs.push(hs.sleeping, this)
	},
	awake: function() {
		hs.expanders[this.key] = this;
		if (!hs.allowMultipleInstances && hs.focusKey != this.key) {
			try {
				hs.expanders[hs.focusKey].close()
			} catch (e) {}
		}
		var z = hs.zIndexCounter++,
			stl = {
				display: '',
				zIndex: z
			};
		hs.setStyles(this.wrapper, stl);
		this.isClosing = false;
		var o = this.outline || 0;
		if (o) {
			if (!this.outlineWhileAnimating) stl.visibility = 'hidden';
			hs.setStyles(o.table, stl)
		}
		this.show()
	},
	createOverlay: function(o) {
		var el = o.overlayId;
		if (typeof el == 'string') el = hs.getNode(el);
		if (!el || typeof el == 'string') return;
		el.style.display = 'block';
		this.genOverlayBox();
		var width = o.width && /^[0-9]+(px|%)$/.test(o.width) ? o.width : 'auto';
		if (/^(left|right)panel$/.test(o.position) && !/^[0-9]+px$/.test(o.width)) width = '200px';
		var overlay = hs.createElement('div', {
			id: 'hsId' + hs.idCounter++,
			hsId: o.hsId
		}, {
			position: 'absolute',
			visibility: 'hidden',
			width: width
		}, this.overlayBox, true);
		overlay.appendChild(el);
		hs.setAttribs(overlay, {
			hideOnMouseOut: o.hideOnMouseOut,
			opacity: o.opacity || 1,
			hsPos: o.position,
			fade: o.fade
		});
		if (this.gotOverlays) {
			this.positionOverlay(overlay);
			if (!overlay.hideOnMouseOut || this.mouseIsOver) hs.fade(overlay, 0, overlay.opacity)
		}
		hs.push(this.overlays, hs.idCounter - 1)
	},
	positionOverlay: function(overlay) {
		var p = overlay.hsPos || 'middle center';
		if (/left$/.test(p)) overlay.style.left = 0;
		if (/center$/.test(p)) hs.setStyles(overlay, {
			left: '50%',
			marginLeft: '-' + Math.round(overlay.offsetWidth / 2) + 'px'
		});
		if (/right$/.test(p)) overlay.style.right = 0;
		if (/^leftpanel$/.test(p)) {
			hs.setStyles(overlay, {
				right: '100%',
				marginRight: this.x.cb + 'px',
				top: -this.y.cb + 'px',
				bottom: -this.y.cb + 'px',
				overflow: 'auto'
			});
			this.x.p1 = overlay.offsetWidth
		} else if (/^rightpanel$/.test(p)) {
			hs.setStyles(overlay, {
				left: '100%',
				marginLeft: this.x.cb + 'px',
				top: -this.y.cb + 'px',
				bottom: -this.y.cb + 'px',
				overflow: 'auto'
			});
			this.x.p2 = overlay.offsetWidth
		}
		if (/^top/.test(p)) overlay.style.top = 0;
		if (/^middle/.test(p)) hs.setStyles(overlay, {
			top: '50%',
			marginTop: '-' + Math.round(overlay.offsetHeight / 2) + 'px'
		});
		if (/^bottom/.test(p)) overlay.style.bottom = 0;
		if (/^above$/.test(p)) {
			hs.setStyles(overlay, {
				left: (-this.x.p1 - this.x.cb) + 'px',
				right: (-this.x.p2 - this.x.cb) + 'px',
				bottom: '100%',
				marginBottom: this.y.cb + 'px',
				width: 'auto'
			});
			this.y.p1 = overlay.offsetHeight
		} else if (/^below$/.test(p)) {
			hs.setStyles(overlay, {
				position: 'relative',
				left: (-this.x.p1 - this.x.cb) + 'px',
				right: (-this.x.p2 - this.x.cb) + 'px',
				top: '100%',
				marginTop: this.y.cb + 'px',
				width: 'auto'
			});
			this.y.p2 = overlay.offsetHeight;
			overlay.style.position = 'absolute'
		}
	},
	getOverlays: function() {
		this.getInline(['heading', 'caption'], true);
		if (this.heading && this.dragByHeading) this.heading.className += ' highslide-move';
		if (hs.showCredits) this.writeCredits();
		for (var i = 0; i < hs.overlays.length; i++) {
			var o = hs.overlays[i],
				tId = o.thumbnailId,
				sg = o.slideshowGroup;
			if ((!tId && !sg) || (tId && tId == this.thumbsUserSetId) || (sg && sg === this.slideshowGroup)) {
				if (this.isImage || (this.isHtml && o.useOnHtml)) this.createOverlay(o)
			}
		}
		var os = [];
		for (var i = 0; i < this.overlays.length; i++) {
			var o = hs.$('hsId' + this.overlays[i]);
			if (/panel$/.test(o.hsPos)) this.positionOverlay(o);
			else hs.push(os, o)
		}
		var curW = this.x.p1 + this.x.full + this.x.p2;
		if (hs.padToMinWidth && curW < hs.minWidth) {
			this.x.p1 += (hs.minWidth - curW) / 2;
			this.x.p2 += (hs.minWidth - curW) / 2
		}
		for (var i = 0; i < os.length; i++) this.positionOverlay(os[i]);
		this.gotOverlays = true
	},
	genOverlayBox: function() {
		if (!this.overlayBox) this.overlayBox = hs.createElement('div', null, {
			position: 'absolute',
			width: this.x.span ? this.x.span + 'px' : this.x.full + 'px',
			height: 0,
			visibility: 'hidden',
			overflow: 'hidden',
			zIndex: hs.ie ? 4 : null
		}, hs.container, true)
	},
	sizeOverlayBox: function(doWrapper, doPanels) {
		hs.setStyles(this.overlayBox, {
			width: this.x.span + 'px',
			height: this.y.span + 'px'
		});
		if (doWrapper || doPanels) {
			for (var i = 0; i < this.overlays.length; i++) {
				var o = hs.$('hsId' + this.overlays[i]);
				if (o && /^(above|below)$/.test(o.hsPos)) {
					if (hs.ie && (hs.ieVersion() <= 6 || document.compatMode == 'BackCompat')) {
						o.style.width = (this.overlayBox.offsetWidth + 2 * this.x.cb - this.x.p1 - this.x.p2) + 'px'
					}
					this.y[o.hsPos == 'above' ? 'p1' : 'p2'] = o.offsetHeight
				}
			}
		}
		if (doWrapper) {
			hs.setStyles(this.content, {
				top: this.y.p1 + 'px'
			});
			hs.setStyles(this.overlayBox, {
				top: (this.y.p1 + this.y.cb) + 'px'
			})
		}
	},
	showOverlays: function() {
		hs.setStyles(this.overlayBox, {
			top: (this.y.p1 + this.y.cb) + 'px',
			left: (this.x.p1 + this.x.cb) + 'px',
			visibility: 'visible',
			overflow: 'visible'
		});
		this.wrapper.appendChild(this.overlayBox);
		var page = hs.getPageSize(),
			mX = hs.mouse.x + page.scrollLeft,
			mY = hs.mouse.y + page.scrollTop;
		this.mouseIsOver = this.x.min < mX && mX < this.x.min + this.x.p1 + this.x.span + this.x.p2 && this.y.min < mY &&
			mY < this.y.min + this.y.p1 + this.y.span + this.y.p2;
		for (var i = 0; i < this.overlays.length; i++) {
			var o = hs.$('hsId' + this.overlays[i]);
			o.style.zIndex = 4;
			if (!o.hideOnMouseOut || this.mouseIsOver) hs.fade(o, 0, o.opacity)
		}
	},
	createFullExpand: function() {
		this.fullExpandLabel = hs.createElement('a', {
			href: 'javascript:hs.expanders[' + this.key + '].doFullExpand();',
			title: hs.lang.fullExpandTitle,
			className: 'highslide-full-expand'
		});
		this.createOverlay({
			overlayId: this.fullExpandLabel,
			position: hs.fullExpandPosition,
			hideOnMouseOut: true,
			opacity: hs.fullExpandOpacity
		})
	},
	doFullExpand: function() {
		try {
			if (this.fullExpandLabel) hs.discardElement(this.fullExpandLabel);
			this.focus();
			this.x.min = parseInt(this.wrapper.style.left) - (this.x.full - this.content.width) / 2;
			if (this.x.min < hs.marginLeft) this.x.min = hs.marginLeft;
			this.wrapper.style.left = this.x.min + 'px';
			hs.setStyles(this.content, {
				width: this.x.full + 'px',
				height: this.y.full + 'px'
			});
			this.x.span = this.x.full;
			this.y.span = this.y.full;
			if (this.overlayBox) this.sizeOverlayBox(true);
			hs.setStyles(this.wrapper, {
				width: (this.x.p1 + 2 * this.x.cb + this.x.span + this.x.p2) + 'px',
				height: (this.y.p1 + 2 * this.y.cb + this.y.span + this.y.p2) + 'px'
			});
			if (this.outline) this.outline.setPosition(this);
			this.redoShowHide()
		} catch (e) {
			window.location.href = this.content.src
		}
	},
	redoShowHide: function() {
		var imgPos = {
			x: parseInt(this.wrapper.style.left) - 20,
			y: parseInt(this.wrapper.style.top) - 20,
			w: this.content.offsetWidth + 40,
			h: this.content.offsetHeight + 40
		};
		if (hs.hideSelects) this.showHideElements('SELECT', 'hidden', imgPos);
		if (hs.hideIframes) this.showHideElements('IFRAME', 'hidden', imgPos);
		if (hs.geckoMac) this.showHideElements('*', 'hidden', imgPos)
	},
	afterClose: function() {
		this.a.className = this.a.className.replace('highslide-active-anchor', '');
		if (hs.hideSelects) this.showHideElements('SELECT', 'visible');
		if (hs.hideIframes) this.showHideElements('IFRAME', 'visible');
		if (hs.geckoMac) this.showHideElements('*', 'visible');
		if (this.isHtml && this.preserveContent) this.sleep();
		else {
			if (this.outline && this.outlineWhileAnimating) this.outline.destroy();
			hs.discardElement(this.wrapper)
		}
		if (hs.mask) hs.mask.style.display = 'none';
		hs.expanders[this.key] = null;
		hs.reOrder()
	}
};
hs.Ajax = function(a, content, pre) {
	this.a = a;
	this.content = content;
	this.pre = pre
};
hs.Ajax.prototype = {
	run: function() {
		if (!this.src) this.src = hs.getSrc(this.a);
		if (this.src.match('#')) {
			var arr = this.src.split('#');
			this.src = arr[0];
			this.id = arr[1]
		}
		if (hs.cachedGets[this.src]) {
			this.cachedGet = hs.cachedGets[this.src];
			if (this.id) this.getElementContent();
			else this.loadHTML();
			return
		}
		try {
			this.xmlHttp = new XMLHttpRequest()
		} catch (e) {
			try {
				this.xmlHttp = new ActiveXObject("Msxml2.XMLHTTP")
			} catch (e) {
				try {
					this.xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")
				} catch (e) {
					this.onError()
				}
			}
		}
		var pThis = this;
		this.xmlHttp.onreadystatechange = function() {
			if (pThis.xmlHttp.readyState == 4) {
				if (pThis.id) pThis.getElementContent();
				else pThis.loadHTML()
			}
		};
		this.xmlHttp.open("GET", this.src, true);
		this.xmlHttp.send(null)
	},
	getElementContent: function() {
		hs.init();
		var attribs = window.opera || hs.ie6SSL ? {
			src: 'about:blank'
		} : null;
		this.iframe = hs.createElement('iframe', attribs, {
			position: 'absolute',
			left: '-9999px'
		}, hs.container);
		this.loadHTML()
	},
	loadHTML: function() {
		var s = this.cachedGet || this.xmlHttp.responseText;
		if (this.pre) hs.cachedGets[this.src] = s;
		if (!hs.ie || hs.ieVersion() >= 5.5) {
			s = s.replace(/\s/g, ' ').replace(new RegExp('<link[^>]*>', 'gi'), '').replace(new RegExp(
				'<script[^>]*>.*?</script>', 'gi'), '');
			if (this.iframe) {
				var doc = this.iframe.contentDocument;
				if (!doc && this.iframe.contentWindow) doc = this.iframe.contentWindow.document;
				if (!doc) {
					var pThis = this;
					setTimeout(function() {
						pThis.loadHTML()
					}, 25);
					return
				}
				doc.open();
				doc.write(s);
				doc.close();
				try {
					s = doc.getElementById(this.id).innerHTML
				} catch (e) {
					try {
						s = this.iframe.document.getElementById(this.id).innerHTML
					} catch (e) {}
				}
			} else {
				s = s.replace(new RegExp('^.*?<body[^>]*>(.*?)</body>.*?$', 'i'), '$1')
			}
		}
		hs.getElementByClass(this.content, 'DIV', 'highslide-body').innerHTML = s;
		this.onLoad();
		for (var x in this) this[x] = null
	}
};
if (document.readyState && hs.ie) {
	var src = (window.location.protocol == 'https:') ? '://0' : 'javascript:void(0)';
	document.write('<script type="text/javascript" defer="defer" src="' + src + '" ' +
		'onreadystatechange="if (this.readyState == \'complete\') hs.domReady();"' + '><\/script>')
}
hs.langDefaults = hs.lang;
var HsExpander = hs.Expander;
hs.addEventListener(document, 'mousemove', function(e) {
	hs.mouse = {
		x: e.clientX,
		y: e.clientY
	}
});
hs.addEventListener(document, 'mousedown', hs.mouseClickHandler);
hs.addEventListener(document, 'mouseup', hs.mouseClickHandler);
hs.addEventListener(window, 'load', hs.preloadImages);
hs.addEventListener(window, 'load', hs.preloadAjax);

//--wp_codebox.js
var userAgent = navigator.userAgent.toLowerCase();
var is_webtv = userAgent.indexOf('webtv') != -1;
var is_kon = userAgent.indexOf('konqueror') != -1;
var is_mac = userAgent.indexOf('mac') != -1;
var is_saf = userAgent.indexOf('applewebkit') != -1 || navigator.vendor == 'Apple Computer, Inc.';
var is_opera = userAgent.indexOf('opera') != -1 && opera.version();
var is_moz = (navigator.product == 'Gecko' && !is_saf) && userAgent.substr(userAgent.indexOf('firefox') + 8, 3);
var is_ns = userAgent.indexOf('compatible') == -1 && userAgent.indexOf('mozilla') != -1 && !is_opera && !is_webtv && !
	is_saf;
var is_ie = (userAgent.indexOf('msie') != -1 && !is_opera && !is_saf && !is_webtv) && userAgent.substr(userAgent.indexOf(
	'msie') + 5, 3);

function copycode(obj) {
	obj = document.getElementById(obj);
	if (is_ie && obj.style.display != 'none') {
		var rng = document.body.createTextRange();
		rng.moveToElementText(obj);
		rng.scrollIntoView();
		rng.select();
		rng.execCommand("Copy");
		rng.collapse(false)
	}
}

function getBrowserType() {
	var detect = navigator.userAgent.toLowerCase();
	var browser;
	var doCheckIt = function(bString) {
		place = detect.indexOf(bString) + 1;
		return place
	};
	if (doCheckIt('konqueror')) {
		browser = "konqueror"
	} else if (doCheckIt('safari')) {
		browser = "safari"
	} else if (doCheckIt('omniweb')) {
		browser = "omniweb"
	} else if (doCheckIt('opera')) {
		browser = "opera"
	} else if (doCheckIt('webtv')) {
		browser = "webtv"
	} else if (doCheckIt('icab')) {
		browser = "icab"
	} else if (doCheckIt('msie')) {
		browser = "msie"
	} else if (doCheckIt('firefox')) {
		browser = "firefox"
	} else if (!doCheckIt('compatible')) {
		browser = "nn"
	}
	return browser
}

function strTrim(str) {
	var i, j;
	i = 0;
	j = str.length - 1;
	str = str.split("");
	while (i < str.length) {
		if (str[i] == " ") {
			str[i] = ""
		} else {
			break
		}
		i++
	}
	while (j > 0) {
		if (str[j] == " ") {
			str[j] = ""
		} else {
			break
		}
		j--
	}
	return str.join("")
}

function igEncodeHTML(igHTML) {
	var regExLT = /</g;
	var regExGT = />/g;
	igHTML = igHTML.replace(regExLT, "&lt;");
	igHTML = igHTML.replace(regExGT, "&gt;");
	return igHTML
}

function doCleanUp(sTxt) {
	sTxt = sTxt.replace(/(\r\n|\r|\n)/g, "\n");
	var arrTxt = sTxt.split("\n");
	for (i = 0; i < arrTxt.length; i++) {
		if (arrTxt[i].substr((arrTxt[i].length - 1), 1) == " ") {
			arrTxt[i] = arrTxt[i].substr(0, (arrTxt[i].length - 1))
		}
		if (arrTxt[i].substr((arrTxt[i].length - 1), 1) == "	") {
			arrTxt[i] = arrTxt[i].substr(0, (arrTxt[i].length - 1))
		}
	}
	sTxt = arrTxt.join("\n");
	var regExNL1a = /([\n]{2,})/g;
	var regExNL1b = /([ ]{1,})\n/g;
	var regExNL1c = /([	|\t]{1,})\n/g;
	var regExNL1d = /\n([ ]{1,})\n/g;
	var regExNL1e = /\n([	|\t]{1,})\n/g;
	var regExNL1g = / {4}/g;
	sTxt = sTxt.replace(regExNL1g, "	");
	sTxt = sTxt.replace(regExNL1d, "\n").replace(regExNL1e, "\n");
	sTxt = sTxt.replace(regExNL1b, "\n").replace(regExNL1c, "\n");
	sTxt = sTxt.replace(regExNL1a, "\n");
	if (sTxt.substr(0, 1) == "\n") {
		sTxt = sTxt.substr(1, sTxt.length)
	}
	if (sTxt.substr((sTxt.length - 1), 1) == "\n") {
		sTxt = sTxt.substr(0, (sTxt.length - 1))
	}
	return sTxt
}

function getTagCode(sID) {
	var myBrowser = strTrim(navigator.appName.substring(0, 9));
	myBrowser = myBrowser.toLowerCase();
	if (document.getElementById) {
		oDoc = document.getElementById(sID)
	} else if (document.all) {
		oDoc = document.all[sID]
	}
	var getTxt = "";
	if (typeof(oDoc.innerText) != 'undefined') {
		getTxt = strTrim(oDoc.innerText)
	} else {
		getTxt = strTrim(oDoc.innerHTML);
		var regExLi = /<\/li>/gi;
		var regExHTML = /<\S[^>]*>/g;
		var regExAnd = /&amp;/g;
		var regExSpace = /&nbsp;/g;
		var regExLT = /&lt;/g;
		var regExGT = /&gt;/g;
		getTxt = getTxt.replace(regExLi, "\n");
		getTxt = getTxt.replace(regExHTML, "");
		getTxt = getTxt.replace(regExAnd, "&");
		getTxt = getTxt.replace(regExSpace, " ");
		getTxt = getTxt.replace(regExLT, "<");
		getTxt = getTxt.replace(regExGT, ">")
	}
	return getTxt
}

function showCodeTxt(sId) {
	var cdTxt = igEncodeHTML(getTagCode(sId));
	cdTxt = doCleanUp(cdTxt);
	var cdTxtPrefix =
		"<html><head><title>WP-CODEBOX &raquo; Plain-Text View</title><style>body { margin:0px; padding:0px; white-space:nowrap; }</style></head><body><pre>\n";
	var cdTxtSuffix = "\n</pre><br /></body></html>";
	cdWin = window.open("about:blank", "cdWin",
		"toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=700,height=400,left=35,top=85");
	cdWin.document.open();
	cdWin.document.write(cdTxtPrefix + cdTxt + cdTxtSuffix);
	cdWin.document.close()
}

function getCodeTxt(sId) {
	var cdTxt = igEncodeHTML(getTagCode(sId));
	cdTxt = doCleanUp(cdTxt);
	return cdTxt
}

function hidePlainTxt(bID) {
	var oCodeBox = document.getElementById(bID);
	if (arrCode[bID] == "") {
		alert("The HTML View for this Code Box is not available")
	} else {
		var lnkID = "l" + bID;
		lnkID = lnkID.toLowerCase();
		var oLnk = document.getElementById(lnkID);
		var sInnerHTML = "<a href=\"#\" onclick=\"javascript:showPlainTxt('" + bID + "'); return false;\">PLAIN TEXT</a>";
		oLnk.innerHTML = sInnerHTML;
		oCodeBox.innerHTML = "";
		oCodeBox.innerHTML = arrCode[bID];
		arrCode[bID] = ""
	}
}

function showPlainTxt(bID) {
	var sHtmlCode, sPlainCode, sInnerHTML, oLnk, intHeightDiff, intWidthDiff;
	var browserName = getBrowserType();
	if (browserName == "msie") {
		intHeightDiff = 20;
		intWidthDiff = 5
	} else if (browserName == "opera") {
		intHeightDiff = 20;
		intWidthDiff = 12
	} else if (browserName == "firefox") {
		intHeightDiff = 20;
		intWidthDiff = 12
	}
	var oCodeBox = document.getElementById(bID);
	sHtmlCode = oCodeBox.innerHTML;
	arrCode[bID] = sHtmlCode;
	var lnkID = "l" + bID;
	lnkID = lnkID.toLowerCase();
	oLnk = document.getElementById(lnkID);
	sInnerHTML = "<a href=\"#\" onclick=\"javascript:hidePlainTxt('" + bID + "'); return false;\">HILITED HTML</a>";
	oLnk.innerHTML = sInnerHTML;
	sPlainCode = getCodeTxt(bID);
	var cbHeight = oCodeBox.parentNode.clientHeight;
	var cbWidth = oCodeBox.parentNode.clientWidth;
	var ptHeight = cbHeight - intHeightDiff;
	var ptWidth = cbWidth - intWidthDiff;
	sPlainCodeHTML = "<textarea style=\"width:" + ptWidth + "px; height:" + ptHeight + "px;\" wrap=\"off\">" + sPlainCode +
		"</textarea>";
	oCodeBox.innerHTML = "";
	oCodeBox.innerHTML = sPlainCodeHTML
}
var $jcodebox = jQuery.noConflict();
$jcodebox(document).ready(function() {
	$jcodebox(".wp_codebox_msgheader").click(function(event) {
		if (event.target == this) {
			$jcodebox(this).next(".wp_codebox").slideToggle("slow");
			$jcodebox(this).toggleClass("active")
		}
	});
	$jcodebox(".wp_codebox_hide").next(".wp_codebox").hide();
	$jcodebox(".wp_codebox_hide").addClass("active")
});

//--wp-easyarchives-jquery.js
eval(function(p, a, c, k, e, d) {
	e = function(c) {
		return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	if (!''.replace(/^/, String)) {
		while (c--) {
			d[e(c)] = k[c] || e(c)
		}
		k = [function(e) {
			return d[e]
		}];
		e = function() {
			return '\\w+'
		};
		c = 1
	};
	while (c--) {
		if (k[c]) {
			p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
		}
	}
	return p
}(
	'(1(){f b=\'\';f y=\'\';1 d(){f j=(s.j==V)?\'S...\':s.j+\'...\';f v=s.16+\'/?10=12\'+\'&b=\'+b+\'&w=\'+y;2.15({11:\'14\',v:v,Z:t,17:\'X/q; R=T-8\',Y:1(g){i.z.A.x=\'U\';2(\'#4-6 r.3-W\').q(\'<r 13="3-1g">\'+j+\'</r>\')},1j:1(g){2(\'#4-6\').18(1(){2(9).q(g).1l(1(){u()})});i.z.A.x=\'E\'},1m:1(g){2(\'#4-6\').q(\'<p>1n, 1i 1h 1b g.</p>\');i.z.A.x=\'E\'}})}1 J(7){b=7.C;d()}1 M(7){y=7.C;d()}1 e(5,F){f n=0;G(F){n=1c}G(5.1d(\'.3-c-5\')){5.B().D().1f(n,1(){5.l().m(\'3-k-5\')}).l().m(\'3-k\')}1e{5.B().D().1k(n,1(){5.l().m(\'3-c-5\')}).l().m(\'3-c\')}}1 O(){2(\'#4-6 a.3-c-5\').P(1(){e(2(9),t)})}1 N(){2(\'#4-6 a.3-k-5\').P(1(){e(2(9),t)})}1 u(){2(\'#4-6 a.3-c-5\').o(1(){e(2(9),Q)});2(\'#4-6 a.3-k-5\').o(1(){e(2(9),Q)});2(\'#4-6 I.3-19-H\').o(1(){N()});2(\'#4-6 I.3-1a-H\').o(1(){O()});2(\'#4-6 7.3-b-h\').d(1(){J(9)});2(\'#4-6 7.3-w-h\').d(1(){M(9)})}2(i).1o(1(){2(\'#4-6 7.3-b-h\').L(\'K\',\'0\');2(\'#4-6 7.3-w-h\').L(\'K\',\'0\');u()})})();',
	62, 87,
	'|function|jQuery|ea|easy|button|archives|select||this||year|open|change|toggle|var|data|selector|document|loadingText|closed|removeClass|addClass|duration|click||html|div|aeGlobal|false|bindActions|url|author|cursor|authorId|body|style|parent|value|next|auto|isEffect|if|all|input|changeYear|selectedIndex|attr|changeAuthor|expandAll|collapseAll|each|true|charset|Loading|utf|wait|undefined|filter|text|beforeSend|cache|action|type|ea_monthly_ajax|class|GET|ajax|serverUrl|contentType|fadeOut|expand|collapse|load|400|is|else|hide|loader|to|failed|success|show|fadeIn|error|Oops|ready'
	.split('|'), 0, {}));

//--spig
eval(function(p, a, c, k, e, d) {
	e = function(c) {
		return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	if (!''.replace(/^/, String)) {
		while (c--) {
			d[e(c)] = k[c] || e(c)
		}
		k = [function(e) {
			return d[e]
		}];
		e = function() {
			return '\\w+'
		};
		c = 1
	};
	while (c--) {
		if (k[c]) {
			p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
		}
	}
	return p
}(
	'l(g).o(8($){$("#h").1V(8(e){q(e.2k==3){9("秘密通道:<2l /><a 10=\\"J://1f.1c.L/\\" N=\\"订阅\\">嗷嗷嗷</a>    <a 10=\\"J://1c.L\\" N=\\"首页\\">首页</a>",1j)}});$("#h").2j("2i",8(e){2f p})});l(g).o(8($){$("#D").2g(8(){$("#D").T("2h",1)})});l(g).o(8($){$(".Q").j(8(){$(".Q").T("17",0.3);m=["我隐身了，你看不到我","我会隐身哦！嘿嘿！","别动手动脚的，把手拿开！","把手拿开我才出来！"];d i=c.A(c.z()*m.v);9(m[i])});$(".Q").2m(8(){$(".Q").T("17",1)})});l(g).o(8($){q(2n){d w=(2s 2t()).2r();q(w>0&&w<=6){9(F+\' 你是夜猫子呀？还不睡觉，明天起的来么你？\',M)}E q(w>6&&w<=11){9(F+\' 早上好，早起的鸟儿有虫吃噢！早起的虫儿被鸟吃，你是鸟儿还是虫儿？嘻嘻！\',M)}E q(w>11&&w<=14){9(F+\' 中午了，吃饭了么？不要饿着了，饿死了谁来挺我呀！\',M)}E q(w>14&&w<=18){9(F+\' 中午的时光真难熬！还好有你在！\',M)}E{9(F+\' 快来逗我玩吧！\',M)}}E{9(\'欢迎\'+F+\'来到新浪微博《\'+N+\'》\',M)}$(".h").C({k:$(".h").r().k+17,n:g.P.1g-O},{K:p,B:I})});l(g).o(8($){$(\'1E a\').H(8(){9(\'正在用吃奶的劲加载《<u 1b="1a:#Y;">\'+$(15).1k()+\'</u>》请稍候\')});$(\'1E a\').j(8(){9(\'要看看《<u 1b="1a:#Y;">\'+$(15).1k()+\'</u>》这篇文章么？\')});$(\'#1D-1F\').j(8(){9(\'要翻到上一页吗?\')});$(\'#1C-1F\').j(8(){9(\'要翻到下一页吗?\')});$(\'#2e-2p 2u a\').j(8(){9(\'去 <u 1b="1a:#Y;">\'+$(15).1k()+\'</u> 逛逛\')});$(\'.2c\').j(8(){9(\'<u 1b="1a:#Y;">\'+F+\'</u> 向评论栏出发吧！\')});$(\'#24\').j(8(){9(\'确认提交了么？\')});$(\'#s\').2d(8(){9(\'输入你想搜索的关键词再按2b(回车)键就可以搜索啦!\')});$(\'#1p-1D\').j(8(){9(\'点它可以后退哦！\')});$(\'#1p-1C\').j(8(){9(\'点它可以前进哦！\')});$(\'#2a\').j(8(){9(\'点它可以重新载入此页哦！\')});$(\'#1p-29\').j(8(){9(\'点它就可以回到首页啦！\')});$(\'#26\').j(8(){9(\'点它可以把此页加入书签哦！\')});$(\'#27-28 a\').j(8(){9(\'嘘，从这里可以进入控制面板的哦！\')});$(\'.1z-2o a\').j(8(){9(\'点击查看此分类下得所有文章\')});$(\'.1z-2C a\').j(8(){9(\'点它可以直接跳到评论列表处.\')});$(\'#2J-2I u a\').j(8(){9(\'你知道吗?点它可以分享本文到\'+$(15).2M(\'N\'))})});l(g).o(8($){V.1A(8(){m=["播报明日天气<S 1B=\\"19\\" 12=\\"J://t.19.L/1G/1H-1y.1m\\"1N=\\“0\\” 1O=\\"1M\\" 1L=\\"1I\\"  1J=\\"1K\\" 1P=\\"Z\\" ></S>","陪我聊天吧！","<a 10=\\"J://1f.1c.L/\\" 1v=\\"1u\\" 1w=\\"1t\\" 1s=\\"R\\"><U 1r=\\"0\\" N=\\"订阅体验盒子\\" 1x=\\"R\\" 12=\\"/21-1Y/1Z/20/U/22.1Q\\"></a>","好无聊哦，你都不陪我玩！","…@……!………","^%#&*!@*(&#)(!)(","我可爱吧！嘻嘻!~^2K^!~~","谁淫荡呀?~谁淫荡?，你淫荡呀!~~你淫荡！~~","从前有座山，山上有座庙，庙里有个老和尚给小和尚讲故事，讲：“从前有座……”"];d i=c.A(c.z()*m.v);9(m[i],1j)},2E)});l(g).o(8($){V.1A(8(){m=["播报明日天气<S 1B=\\"19\\" 12=\\"J://t.19.L/1G/1H-1y.1m\\"1N=\\“0\\” 1O=\\"1M\\" 1L=\\"1I\\"  1J=\\"1K\\" 1P=\\"Z\\" ></S>","快快订阅我的博客吧！<a 10=\\"J://1f.1c.L/\\" 1v=\\"1u\\" 1w=\\"1t\\" 1s=\\"R\\"><U 1r=\\"0\\" N=\\"订阅体验盒子\\" 1x=\\"R\\" 12=\\"/21-1Y/1Z/20/U/22.1Q\\"></a>","乾坤大挪移！","我飘过来了！~","我飘过去了","我得意地飘！~飘！~"];d i=c.A(c.z()*m.v);s=[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.X,-0.1,-0.2,-0.3,-0.4,-0.5,-0.6,-0.7,-0.X];d G=c.A(c.z()*s.v);d 1W=c.A(c.z()*s.v);$(".h").C({n:g.P.1g/2*(1+s[G]),k:g.P.1X/2*(1+s[G])},{B:2H,1R:9(m[i])})},2G)});l(g).o(8($){$("#1n").H(8(){9("留下你的尊姓大名！");$(".h").C({k:$("#1n").r().k-13,n:$("#1n").r().n-O},{K:p,B:I})});$("#1o").H(8(){9("留下你的邮箱，不然就是无头像人士了！");$(".h").C({k:$("#1o").r().k-13,n:$("#1o").r().n-O},{K:p,B:I})});$("#1h").H(8(){9("快快告诉我你的家在哪里，好让我去参观参观！");$(".h").C({k:$("#1h").r().k-13,n:$("#1h").r().n-O},{K:p,B:I})});$("#1e").H(8(){9("认真填写哦！不然会被认作垃圾评论的！我的乖乖~");$(".h").C({k:$("#1e").r().k-13,n:$("#1e").r().n-O},{K:p,B:I})})});d 2N=2y;l(g).o(8($){d f=$(".h").r().k;$(V).2x(8(){$(".h").C({k:$(V).2z()+f+17},{K:p,B:I})})});l(g).o(8($){d 1d=0;$(".Q").H(8(){q(!W){1d++;q(1d>4){m=["你有完没完呀？","你已经摸我"+1d+"次了","非礼呀！救命！2A，2D 2B"];d i=c.A(c.z()*m.v)}E{m=["筋斗云！~我飞！","我跑呀跑呀跑！~~","别摸我，大男人，有什么好摸的！","惹不起你，我还躲不起你么？","不要摸我了，我会告诉老婆来打你的！","干嘛动我呀！小心我咬你！"];d i=c.A(c.z()*m.v)}s=[0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.X,-0.1,-0.2,-0.3,-0.4,-0.5,-0.6,-0.7,-0.X];d G=c.A(c.z()*s.v);d 1W=c.A(c.z()*s.v);$(".h").C({n:g.P.1g/2*(1+s[G]),k:g.P.1X/2*(1+s[G])},{B:2w,1R:9(m[i])})}E{W=p}})});8 9(a,b){q(b==2F)b=1j;l("#D").2O().2L();l("#D").1m(a);l("#D").2v();l("#D").T("1",1);l("#D").25(b)};d 16=p;d W=p;d 1l,1i;l(g).o(8($){$("#h").1V(8(e){16=Z;1l=e.1S-1U($("#h").1q("n"));1i=e.1T-1U($("#h").1q("k"))});$(g).23(8(e){q(16){d x=e.1S-1l;d y=e.1T-1i;$("#h").1q({k:y,n:x});W=Z}}).2q(8(){16=p})});',
	62, 175,
	'||||||||function|showMessage|||Math|var|||document|spig||mouseover|top|jQuery|msgs|left|ready|false|if|offset|||span|length|now|||random|floor|duration|animate|message|else|visitor|i1|click|1000|http|queue|com|6000|title|170|body|mumu|Feed|iframe|fadeTo|img|window|ismove|75|0099cc|true|href||src|70||this|_move|300||xidie|color|style|uedbox|stat_click|comment|feed|offsetWidth|url|_y|10000|text|_x|html|author|email|go|css|border|tip|external|_blank|target|rel|alt|0601|post|setInterval|name|next|prev|h2|page|skin|2010|15px|width|130px|height|no|frameborder|scrolling|allowtransparency|png|complete|pageX|pageY|parseInt|mousedown|i2|offsetheight|content|themes|wylive|wp|rss|mousemove|submit|fadeOut|addfav|nav|two|home|refresh|Enter|comments|focus|index|return|hover|100|contextmenu|bind|which|br|mouseout|isindex|category|links|mouseup|getHours|new|Date|li|fadeIn|500|scroll|50|scrollTop|OH|ladygaga|heat|My|35000|null|45000|2000|shareto|tho|_|stop|attr|spig_top|hide'
	.split('|'), 0, {}));

//wp-recentcomments-jquery.js
eval(function(p, a, c, k, e, r) {
	e = function(c) {
		return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	if (!''.replace(/^/, String)) {
		while (c--) r[e(c)] = k[c] || e(c);
		k = [function(e) {
			return r[e]
		}];
		e = function() {
			return '\\w+'
		};
		c = 1
	};
	while (c--)
		if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
	return p
}(
	'1d=9(){6.d=2i;6.7={1A:\'c-Y-1B\',1C:\'c-2j-1B\',1e:\'c-Y-\',2k:\'c-Y\',1D:\'c-2l\',Z:\'c-1E\',1f:\'c-L\',1g:\'c-1F\',1G:\'c-2m\',D:\'c-2n\',16:\'c-2o\',1h:\'c-2p\',1i:\'c-t\',1j:\'c-2q\',1k:\'c-2r\',1l:\'c-2s\',1H:\'c-2t\'};6.r={E:17,M:17,p:17}};1d.2u={1I:9(7){6.7=7||6.7;5 E=l(\'#\'+6.7.1A);5 M=l(\'#\'+6.7.1C);b(E.q<=0||M.q<=0){v N}6.r.E=E.18(11);6.r.M=M.18(11);6.r.p=E.1J();6.1m(6.d.2v)},y:9(y){5 3=6;5 w=3.d.19;w+=\'?1K=c-1n\';w+=\'&y=\'+y;l.1n({12:\'1L\',w:w,1M:N,1N:\'m\',1O:\'1P=1Q-8\',2w:9(){3.1o(\'2x\');3.1R()},1S:9(O){5 F=2y(\'(\'+O+\')\');3.1m(F);3.1o(\'2z\')}})},1m:9(F){5 3=6;b(!F.13){3.r.p.m(\'<P>\'+3.d.2A+\'</P>\');v N}5 1p=3.1T(F.13);5 1a=3.1U(F.t);b(1a.q>0){1p+=1a}3.r.p.1V(9(){l(6).m(1p).1W(9(){b(3.d.2B){3.r.p.h(\'P\').2C(9(){3.1X({4:l(6)})})}b(3.d.Q){3.1Y()}b(1a.q>0){3.1Z({4:l(6),z:F.t.y})}})});v 11},1T:9(13){5 p=l(\'<2D>\');2E(5 i=0;i<13.q;i++){5 4=13[i];5 14=17;b(4.12==\'2F\'||4.12==\'2G\'){14=6.20(4)}G{14=6.21(4)}b(14){p.1q(14)}}v p.m()},1U:9(t){b(!t){v\'\'}5 z=1r(t.y,10);b(z<=1&&!t.22){v\'\'}5 3=6;5 R=\'<P j="\'+3.7.1i+\' c-2H">\';b(z>=2){b(z>2){R+=\'<a "A=B" j="\'+3.7.1j+\'">\'+3.d.2I+\'</a>\'}R+=\'<a "A=B" j="\'+3.7.1k+\'">\'+3.d.2J+\'</a>\'}b(t.22){R+=\'<a "A=B" j="\'+3.7.1l+\'">\'+3.d.2K+\'</a>\'}R+=\'</P>\';v R},1X:9(e){5 4=e.4;5 3=6;5 n=4.h(\'H.\'+3.7.Z+\':o(0)\');5 23=n.h(\'I.\'+3.7.1f+\':o(0)\');b(23.q==1){n.1J().2L(9(k){3.24(k,{3:3,4:4})},9(k){3.25(k,{3:3,4:4})})}},1Z:9(e){5 4=e.4;5 z=e.z;5 3=6;5 1s=4.h(\'a.\'+3.7.1j+\':o(0)\');b(1s){1s.15(9(k){3.y(1)})}5 1t=4.h(\'a.\'+3.7.1k+\':o(0)\');b(1t){1t.15(9(k){3.y(1r(z,10)-1)})}5 1u=4.h(\'a.\'+3.7.1l+\':o(0)\');b(1u){1u.15(9(k){3.y(1r(z,10)+1)})}},21:9(4){5 x=6.r.E.18(11);5 1b=x.h(\'H.\'+6.7.1D+\':o(0)\');5 n=x.h(\'H.\'+6.7.Z+\':o(0)\');x.f(\'J\',6.7.1e+4.J);b(4.S.q<=0){4.S=6.d.2M}b(4.1v){5 T=\'\';b(4.U&&4.U.q>0){5 V=\'B\';b(6.d.Q&&4.U.26(6.d.19)!=0){V+=\' Q\'}T=\'<a j="c-1w" A="\'+V+\'" W="\'+4.U+\'">\'+4.S+\'</a>\'}G{T=\'<I j="c-1w">\'+4.S+\'</I>\'}5 27=\'<a j="c-2N" A="B" W="\'+4.28+\'#Y-\'+4.J+\'">\'+4.1x+\'</a>\';1b.m(6.d.2O.1y(/%2P%/g,T).1y(/%2Q%/g,27))}G{5 T=\'<a j="c-1w" A="B" W="\'+4.28+\'#Y-\'+4.J+\'" 1v="\'+4.1x+\'">\'+4.S+\'</a>\';1b.m(T)}n.m(4.1E);b(4.L){5 L=l(\'<I>\');L.f(\'j\',6.7.1f);L.m(\'...\');n.1q(L)}b(4.29){5 C=l(\'<2R>\');C.f(\'j\',\'c-C c-\'+6.d.2S);C.f(\'2T\',6.d.2a);C.f(\'2U\',6.d.2a);C.f(\'2V\',\'\');C.f(\'2W\',4.29);C.2b(1b)}v x},20:9(4){5 x=6.r.M.18(11);5 2c=x.h(\'I.\'+6.7.1G+\':o(0)\');x.2X(\'J\');5 V=\'B\';b(6.d.Q&&4.U.26(6.d.19)!=0){V+=\' Q\'}5 X=l(\'<a>\');X.f(\'A\',V);X.f(\'W\',4.U);X.f(\'1v\',4.1x);X.m(4.S);x.1q(X);2c.m(4.12+\': \');v x},1Y:9(){5 p=6.r.p;p.h(\'a[A*="Q"]\').15(9(){2d.2e(6.W);v N})},2Y:9(k,e){2d.2e(e.2Z.W);b(k.2f){k.2f()}G{k.30=N}},24:9(k,e){5 3=e.3;5 4=e.4;5 n=4.h(\'H.\'+3.7.Z+\':o(0)\');5 s=4.h(\'a.\'+3.7.D+\':o(0)\');b(s.q==1){s.1W()}G{5 s=l(\'<a>\');s.f(\'A\',\'B\');s.f(\'j\',3.7.D+\' \'+3.7.16);s.15(9(k){3.2g(k,{3:3,4:4,K:s})});s.2b(n)}},25:9(k,e){5 3=e.3;5 4=e.4;5 s=4.h(\'a.\'+3.7.D+\':o(0)\');b(s.q==1){s.1V()}},2g:9(k,e){5 3=e.3;5 4=e.4;5 K=e.K;5 u=4.h(\'H.\'+3.7.1g+\':o(0)\');5 n=4.h(\'H.\'+3.7.Z+\':o(0)\');b(u.q==1&&K.31(\'.\'+3.7.16)){n.1c();u.1z();K.f(\'j\',3.7.D+\' \'+3.7.1h)}G b(u.q==1){u.1c();n.1z();K.f(\'j\',3.7.D+\' \'+3.7.16)}G{u=l(\'<H>\');u.f(\'j\',3.7.1g);u.1c();u.32(n);5 w=3.d.19;w+=\'?1K=c-1F\';w+=\'&J=\'+4.f(\'J\').1y(3.7.1e,\'\');l.1n({12:\'1L\',w:w,1M:N,1N:\'m\',1O:\'1P=1Q-8\',1S:9(O){b(O.q<=0){O=n.m()}u.m(O);n.1c();u.1z();K.f(\'j\',3.7.D+\' \'+3.7.1h)}})}},1R:9(){5 t=6.r.p.h(\'P.\'+6.7.1i+\':o(0)\');b(t){t.m(\'<I j="\'+6.7.1H+\'">\'+6.d.33+\'...<I>\')}},1o:9(2h){6.r.p.34(\'35\',2h)}};l(36).37(9(){(38 1d()).1I()});',
	62, 195,
	'|||_self|item|var|this|config||function||if|rc|param|args|attr||find||class|ev|jQuery|html|itemExcerpt|eq|list|length|context|itemToggle|navi|itemContent|return|url|itemNode|page|pageNumber|rel|nofollow|avatar|toggleClass|commentTemp|json|else|div|span|id|source|ellipsis|pingTemp|false|data|li|external|code|reviewerName|reviewerLink|reviewerUrl|relTag|href|pingLink|comment|excerptClass||true|type|items|node|click|collapseClass|null|clone|serverUrl|naviCode|itemInfo|hide|RecentComment|itemIdPrefix|ellipsisClass|contentClass|expandClass|naviClass|newestClass|newerClass|olderClass|_buildList|ajax|_changeCursor|listCode|append|parseInt|newestLink|newerLink|olderLink|title|reviewer|postTitle|replace|show|commentTempId|temp|pingTempId|infoClass|excerpt|content|labelClass|loadingClass|init|parent|action|GET|cache|dataType|contentType|charset|UTF|_loading|success|_createCommentCode|_createNaviCode|fadeOut|fadeIn|_bindCommentAction|_initLinks|_bindNaviAction|_buildPing|_buildComment|more|itemEllipsis|_enterCommnet|_leaveCommnet|indexOf|postLink|postUrl|avatarImage|avatarSize|insertBefore|itemLabel|window|open|preventDefault|_toggleComment|status|rcGlobal|ping|commentClass|info|label|toggle|collapse|expand|newest|newer|older|loading|prototype|initJson|beforeSend|wait|eval|auto|noCommentsText|showContent|each|ul|for|pingback|trackback|clearfix|newestText|newerText|olderText|hover|anonymous|post|infoTemp|REVIEWER|POST|img|avatarPosition|width|height|alt|src|removeAttr|_bindPopup|link|returnValue|is|insertAfter|loadingText|css|cursor|document|ready|new'
	.split('|'), 0, {}));

//$menus_min_bar.js
jQuery(function() {
	jQuery("#menus").minibar();
	jQuery("#mynav2").minibar({
		idx: 2
	})
});
(function($) {
	jQuery.fn.minibar = function(opt) {
		var $menus = this.css("position", "relative"),
			$ba = $("<div/>").appendTo($menus);
		opt = $.extend({}, $.fn.minibar.defaults, opt);
		$menus.find("li").hover(function() {
			var t = this;
			clearTimeout($ba.data("timer"));
			_set(t)
		}, function() {
			var t = this;
			$ba.data("timer", setTimeout(function() {
				_set($menus.find("." + opt.cur), t)
			}, 300))
		});
		opt.idx && _set($menus.find("li").eq(opt.idx).addClass(opt.cur));

		function _set(sel, sel2) {
			var $cu = $(sel),
				$tu = $(sel2);
			if ($cu.length) {
				var ow = $cu.outerWidth(),
					ol = $cu.position().left;
				if ($ba.css("position") !== "absolute") {
					$ba.css({
						position: "absolute",
						height: 4,
						top: 0,
						overflow: "hidden",
						backgroundColor: "#F21664",
						width: 0,
						left: ol + ow / 2
					})
				}
				$ba.stop().animate({
					width: ow,
					left: ol
				}, 300)
			} else {
				if ($tu.length) {
					var ow = $tu.outerWidth(),
						ol = $tu.position().left;
					$ba.stop().animate({
						width: 0,
						left: ol + ow / 2
					}, 300)
				}
			}
		}
		return $menus
	};
	jQuery.fn.minibar.defaults = {
		idx: null,
		cur: "cur"
	}
})(jQuery);
