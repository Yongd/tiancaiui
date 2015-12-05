function hexToRgb(t) {
	var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
	t = t.replace(e, function(t, e, i, n) {
		return e + e + i + i + n + n
	});
	var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
	return i ? {
		r: parseInt(i[1], 16),
		g: parseInt(i[2], 16),
		b: parseInt(i[3], 16)
	} : null
}
function clamp(t, e, i) {
	return Math.min(Math.max(t, e), i)
}
function isInArray(t, e) {
	return e.indexOf(t) > -1
}
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
	def: "easeOutQuad",
	swing: function(t, e, i, n, o) {
		return jQuery.easing[jQuery.easing.def](t, e, i, n, o)
	},
	easeInQuad: function(t, e, i, n, o) {
		return n * (e /= o) * e + i
	},
	easeOutQuad: function(t, e, i, n, o) {
		return -n * (e /= o) * (e - 2) + i
	},
	easeInOutQuad: function(t, e, i, n, o) {
		return (e /= o / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
	},
	easeInCubic: function(t, e, i, n, o) {
		return n * (e /= o) * e * e + i
	},
	easeOutCubic: function(t, e, i, n, o) {
		return n * ((e = e / o - 1) * e * e + 1) + i
	},
	easeInOutCubic: function(t, e, i, n, o) {
		return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
	},
	easeInQuart: function(t, e, i, n, o) {
		return n * (e /= o) * e * e * e + i
	},
	easeOutQuart: function(t, e, i, n, o) {
		return -n * ((e = e / o - 1) * e * e * e - 1) + i
	},
	easeInOutQuart: function(t, e, i, n, o) {
		return (e /= o / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
	},
	easeInQuint: function(t, e, i, n, o) {
		return n * (e /= o) * e * e * e * e + i
	},
	easeOutQuint: function(t, e, i, n, o) {
		return n * ((e = e / o - 1) * e * e * e * e + 1) + i
	},
	easeInOutQuint: function(t, e, i, n, o) {
		return (e /= o / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
	},
	easeInSine: function(t, e, i, n, o) {
		return -n * Math.cos(e / o * (Math.PI / 2)) + n + i
	},
	easeOutSine: function(t, e, i, n, o) {
		return n * Math.sin(e / o * (Math.PI / 2)) + i
	},
	easeInOutSine: function(t, e, i, n, o) {
		return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i
	},
	easeInExpo: function(t, e, i, n, o) {
		return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i
	},
	easeOutExpo: function(t, e, i, n, o) {
		return e == o ? i + n : n * (-Math.pow(2, -10 * e / o) + 1) + i
	},
	easeInOutExpo: function(t, e, i, n, o) {
		return 0 == e ? i : e == o ? i + n : (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
	},
	easeInCirc: function(t, e, i, n, o) {
		return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i
	},
	easeOutCirc: function(t, e, i, n, o) {
		return n * Math.sqrt(1 - (e = e / o - 1) * e) + i
	},
	easeInOutCirc: function(t, e, i, n, o) {
		return (e /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
	},
	easeInElastic: function(t, e, i, n, o) {
		var s = 1.70158,
			r = 0,
			a = n;
		if (0 == e) return i;
		if (1 == (e /= o)) return i + n;
		if (r || (r = .3 * o), a < Math.abs(n)) {
			a = n;
			var s = r / 4
		} else var s = r / (2 * Math.PI) * Math.asin(n / a);
		return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * o - s) * Math.PI / r)) + i
	},
	easeOutElastic: function(t, e, i, n, o) {
		var s = 1.70158,
			r = 0,
			a = n;
		if (0 == e) return i;
		if (1 == (e /= o)) return i + n;
		if (r || (r = .3 * o), a < Math.abs(n)) {
			a = n;
			var s = r / 4
		} else var s = r / (2 * Math.PI) * Math.asin(n / a);
		return a * Math.pow(2, -10 * e) * Math.sin(2 * (e * o - s) * Math.PI / r) + n + i
	},
	easeInOutElastic: function(t, e, i, n, o) {
		var s = 1.70158,
			r = 0,
			a = n;
		if (0 == e) return i;
		if (2 == (e /= o / 2)) return i + n;
		if (r || (r = .3 * o * 1.5), a < Math.abs(n)) {
			a = n;
			var s = r / 4
		} else var s = r / (2 * Math.PI) * Math.asin(n / a);
		return 1 > e ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * o - s) * Math.PI / r) + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * o - s) * Math.PI / r) * .5 + n + i
	},
	easeInBack: function(t, e, i, n, o, s) {
		return void 0 == s && (s = 1.70158), n * (e /= o) * e * ((s + 1) * e - s) + i
	},
	easeOutBack: function(t, e, i, n, o, s) {
		return void 0 == s && (s = 1.70158), n * ((e = e / o - 1) * e * ((s + 1) * e + s) + 1) + i
	},
	easeInOutBack: function(t, e, i, n, o, s) {
		return void 0 == s && (s = 1.70158), (e /= o / 2) < 1 ? n / 2 * e * e * (((s *= 1.525) + 1) * e - s) + i : n / 2 * ((e -= 2) * e * (((s *= 1.525) + 1) * e + s) + 2) + i
	},
	easeInBounce: function(t, e, i, n, o) {
		return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i
	},
	easeOutBounce: function(t, e, i, n, o) {
		return (e /= o) < 1 / 2.75 ? 7.5625 * n * e * e + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
	},
	easeInOutBounce: function(t, e, i, n, o) {
		return o / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) + .5 * n + i
	}
}), window.Modernizr = function(t, e, i) {
	function n(t) {
		b.cssText = t
	}
	function o(t, e) {
		return n(C.join(t + ";") + (e || ""))
	}
	function s(t, e) {
		return typeof t === e
	}
	function r(t, e) {
		return !!~ ("" + t).indexOf(e)
	}
	function a(t, e) {
		for (var n in t) {
			var o = t[n];
			if (!r(o, "-") && b[o] !== i) return "pfx" == e ? o : !0
		}
		return !1
	}
	function l(t, e, n) {
		for (var o in t) {
			var r = e[t[o]];
			if (r !== i) return n === !1 ? t[o] : s(r, "function") ? r.bind(n || e) : r
		}
		return !1
	}
	function c(t, e, i) {
		var n = t.charAt(0).toUpperCase() + t.slice(1),
			o = (t + " " + I.join(n + " ") + n).split(" ");
		return s(e, "string") || s(e, "undefined") ? a(o, e) : (o = (t + " " + k.join(n + " ") + n).split(" "), l(o, e, i))
	}
	function u() {
		f.input = function(i) {
			for (var n = 0, o = i.length; o > n; n++) M[i[n]] = i[n] in _;
			return M.list && (M.list = !! e.createElement("datalist") && !! t.HTMLDataListElement), M
		}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function(t) {
			for (var n, o, s, r = 0, a = t.length; a > r; r++) _.setAttribute("type", o = t[r]), n = "text" !== _.type, n && (_.value = w, _.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && _.style.WebkitAppearance !== i ? (g.appendChild(_), s = e.defaultView, n = s.getComputedStyle && "textfield" !== s.getComputedStyle(_, null).WebkitAppearance && 0 !== _.offsetHeight, g.removeChild(_)) : /^(search|tel)$/.test(o) || (n = /^(url|email)$/.test(o) ? _.checkValidity && _.checkValidity() === !1 : _.value != w)), T[t[r]] = !! n;
			return T
		}("search tel url email datetime date month week time datetime-local number range color".split(" "))
	}
	var h, p, d = "2.6.2",
		f = {},
		m = !0,
		g = e.documentElement,
		v = "modernizr",
		y = e.createElement(v),
		b = y.style,
		_ = e.createElement("input"),
		w = ":)",
		x = {}.toString,
		C = " -webkit- -moz- -o- -ms- ".split(" "),
		S = "Webkit Moz O ms",
		I = S.split(" "),
		k = S.toLowerCase().split(" "),
		E = {
			svg: "http://www.w3.org/2000/svg"
		},
		z = {},
		T = {},
		M = {},
		P = [],
		A = P.slice,
		O = function(t, i, n, o) {
			var s, r, a, l, c = e.createElement("div"),
				u = e.body,
				h = u || e.createElement("body");
			if (parseInt(n, 10)) for (; n--;) a = e.createElement("div"), a.id = o ? o[n] : v + (n + 1), c.appendChild(a);
			return s = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), c.id = v, (u ? c : h).innerHTML += s, h.appendChild(c), u || (h.style.background = "", h.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(h)), r = i(c, t), u ? c.parentNode.removeChild(c) : (h.parentNode.removeChild(h), g.style.overflow = l), !! r
		},
		L = function(e) {
			var i = t.matchMedia || t.msMatchMedia;
			if (i) return i(e).matches;
			var n;
			return O("@media " + e + " { #" + v + " { position: absolute; } }", function(e) {
				n = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
			}), n
		},
		j = function() {
			function t(t, o) {
				o = o || e.createElement(n[t] || "div"), t = "on" + t;
				var r = t in o;
				return r || (o.setAttribute || (o = e.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(t, ""), r = s(o[t], "function"), s(o[t], "undefined") || (o[t] = i), o.removeAttribute(t))), o = null, r
			}
			var n = {
				select: "input",
				change: "input",
				submit: "form",
				reset: "form",
				error: "img",
				load: "img",
				abort: "img"
			};
			return t
		}(),
		$ = {}.hasOwnProperty;
	p = s($, "undefined") || s($.call, "undefined") ?
	function(t, e) {
		return e in t && s(t.constructor.prototype[e], "undefined")
	} : function(t, e) {
		return $.call(t, e)
	}, Function.prototype.bind || (Function.prototype.bind = function(t) {
		var e = this;
		if ("function" != typeof e) throw new TypeError;
		var i = A.call(arguments, 1),
			n = function() {
				if (this instanceof n) {
					var o = function() {};
					o.prototype = e.prototype;
					var s = new o,
						r = e.apply(s, i.concat(A.call(arguments)));
					return Object(r) === r ? r : s
				}
				return e.apply(t, i.concat(A.call(arguments)))
			};
		return n
	}), z.flexbox = function() {
		return c("flexWrap")
	}, z.canvas = function() {
		var t = e.createElement("canvas");
		return !!t.getContext && !! t.getContext("2d")
	}, z.canvastext = function() {
		return !!f.canvas && !! s(e.createElement("canvas").getContext("2d").fillText, "function")
	}, z.webgl = function() {
		return !!t.WebGLRenderingContext
	}, z.touch = function() {
		var i;
		return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : O(["@media (", C.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
			i = 9 === t.offsetTop
		}), i
	}, z.geolocation = function() {
		return "geolocation" in navigator
	}, z.postmessage = function() {
		return !!t.postMessage
	}, z.websqldatabase = function() {
		return !!t.openDatabase
	}, z.indexedDB = function() {
		return !!c("indexedDB", t)
	}, z.hashchange = function() {
		return j("hashchange", t) && (e.documentMode === i || e.documentMode > 7)
	}, z.history = function() {
		return !!t.history && !! history.pushState
	}, z.draganddrop = function() {
		var t = e.createElement("div");
		return "draggable" in t || "ondragstart" in t && "ondrop" in t
	}, z.websockets = function() {
		return "WebSocket" in t || "MozWebSocket" in t
	}, z.rgba = function() {
		return n("background-color:rgba(150,255,150,.5)"), r(b.backgroundColor, "rgba")
	}, z.hsla = function() {
		return n("background-color:hsla(120,40%,100%,.5)"), r(b.backgroundColor, "rgba") || r(b.backgroundColor, "hsla")
	}, z.multiplebgs = function() {
		return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
	}, z.backgroundsize = function() {
		return c("backgroundSize")
	}, z.borderimage = function() {
		return c("borderImage")
	}, z.borderradius = function() {
		return c("borderRadius")
	}, z.boxshadow = function() {
		return c("boxShadow")
	}, z.textshadow = function() {
		return "" === e.createElement("div").style.textShadow
	}, z.opacity = function() {
		return o("opacity:.55"), /^0.55$/.test(b.opacity)
	}, z.cssanimations = function() {
		return c("animationName")
	}, z.csscolumns = function() {
		return c("columnCount")
	}, z.cssgradients = function() {
		var t = "background-image:",
			e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
			i = "linear-gradient(left top,#9f9, white);";
		return n((t + "-webkit- ".split(" ").join(e + t) + C.join(i + t)).slice(0, -t.length)), r(b.backgroundImage, "gradient")
	}, z.cssreflections = function() {
		return c("boxReflect")
	}, z.csstransforms = function() {
		return !!c("transform")
	}, z.csstransforms3d = function() {
		var t = !! c("perspective");
		return t && "webkitPerspective" in g.style && O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e) {
			t = 9 === e.offsetLeft && 3 === e.offsetHeight
		}), t
	}, z.csstransitions = function() {
		return c("transition")
	}, z.fontface = function() {
		var t;
		return O('@font-face {font-family:"font";src:url("https://")}', function(i, n) {
			var o = e.getElementById("smodernizr"),
				s = o.sheet || o.styleSheet,
				r = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
			t = /src/i.test(r) && 0 === r.indexOf(n.split(" ")[0])
		}), t
	}, z.generatedcontent = function() {
		var t;
		return O(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function(e) {
			t = e.offsetHeight >= 3
		}), t
	}, z.video = function() {
		var t = e.createElement("video"),
			i = !1;
		try {
			(i = !! t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
		} catch (n) {}
		return i
	}, z.audio = function() {
		var t = e.createElement("audio"),
			i = !1;
		try {
			(i = !! t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
		} catch (n) {}
		return i
	}, z.localstorage = function() {
		try {
			return localStorage.setItem(v, v), localStorage.removeItem(v), !0
		} catch (t) {
			return !1
		}
	}, z.sessionstorage = function() {
		try {
			return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
		} catch (t) {
			return !1
		}
	}, z.webworkers = function() {
		return !!t.Worker
	}, z.applicationcache = function() {
		return !!t.applicationCache
	}, z.svg = function() {
		return !!e.createElementNS && !! e.createElementNS(E.svg, "svg").createSVGRect
	}, z.inlinesvg = function() {
		var t = e.createElement("div");
		return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == E.svg
	}, z.smil = function() {
		return !!e.createElementNS && /SVGAnimate/.test(x.call(e.createElementNS(E.svg, "animate")))
	}, z.svgclippaths = function() {
		return !!e.createElementNS && /SVGClipPath/.test(x.call(e.createElementNS(E.svg, "clipPath")))
	};
	for (var D in z) p(z, D) && (h = D.toLowerCase(), f[h] = z[D](), P.push((f[h] ? "" : "no-") + h));
	return f.input || u(), f.addTest = function(t, e) {
		if ("object" == typeof t) for (var n in t) p(t, n) && f.addTest(n, t[n]);
		else {
			if (t = t.toLowerCase(), f[t] !== i) return f;
			e = "function" == typeof e ? e() : e, "undefined" != typeof m && m && (g.className += " " + (e ? "" : "no-") + t), f[t] = e
		}
		return f
	}, n(""), y = _ = null, function(t, e) {
		function i(t, e) {
			var i = t.createElement("p"),
				n = t.getElementsByTagName("head")[0] || t.documentElement;
			return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
		}
		function n() {
			var t = v.elements;
			return "string" == typeof t ? t.split(" ") : t
		}
		function o(t) {
			var e = g[t[f]];
			return e || (e = {}, m++, t[f] = m, g[m] = e), e
		}
		function s(t, i, n) {
			if (i || (i = e), u) return i.createElement(t);
			n || (n = o(i));
			var s;
			return s = n.cache[t] ? n.cache[t].cloneNode() : d.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t), s.canHaveChildren && !p.test(t) ? n.frag.appendChild(s) : s
		}
		function r(t, i) {
			if (t || (t = e), u) return t.createDocumentFragment();
			i = i || o(t);
			for (var s = i.frag.cloneNode(), r = 0, a = n(), l = a.length; l > r; r++) s.createElement(a[r]);
			return s
		}
		function a(t, e) {
			e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(i) {
				return v.shivMethods ? s(i, t, e) : e.createElem(i)
			}, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/\w+/g, function(t) {
				return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
			}) + ");return n}")(v, e.frag)
		}
		function l(t) {
			t || (t = e);
			var n = o(t);
			return v.shivCSS && !c && !n.hasCSS && (n.hasCSS = !! i(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || a(t, n), t
		}
		var c, u, h = t.html5 || {},
			p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
			d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
			f = "_html5shiv",
			m = 0,
			g = {};
		!
		function() {
			try {
				var t = e.createElement("a");
				t.innerHTML = "<xyz></xyz>", c = "hidden" in t, u = 1 == t.childNodes.length ||
				function() {
					e.createElement("a");
					var t = e.createDocumentFragment();
					return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
				}()
			} catch (i) {
				c = !0, u = !0
			}
		}();
		var v = {
			elements: h.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
			shivCSS: h.shivCSS !== !1,
			supportsUnknownElements: u,
			shivMethods: h.shivMethods !== !1,
			type: "default",
			shivDocument: l,
			createElement: s,
			createDocumentFragment: r
		};
		t.html5 = v, l(e)
	}(this, e), f._version = d, f._prefixes = C, f._domPrefixes = k, f._cssomPrefixes = I, f.mq = L, f.hasEvent = j, f.testProp = function(t) {
		return a([t])
	}, f.testAllProps = c, f.testStyles = O, f.prefixed = function(t, e, i) {
		return e ? c(t, e, i) : c(t, "pfx")
	}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + P.join(" ") : ""), f
}(this, this.document), function(t, e, i) {
	function n(t) {
		return "[object Function]" == g.call(t)
	}
	function o(t) {
		return "string" == typeof t
	}
	function s() {}
	function r(t) {
		return !t || "loaded" == t || "complete" == t || "uninitialized" == t
	}
	function a() {
		var t = v.shift();
		y = 1, t ? t.t ? f(function() {
			("c" == t.t ? p.injectCss : p.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
		}, 0) : (t(), a()) : y = 0
	}
	function l(t, i, n, o, s, l, c) {
		function u(e) {
			if (!d && r(h.readyState) && (b.r = d = 1, !y && a(), h.onload = h.onreadystatechange = null, e)) {
				"img" != t && f(function() {
					w.removeChild(h)
				}, 50);
				for (var n in k[i]) k[i].hasOwnProperty(n) && k[i][n].onload()
			}
		}
		var c = c || p.errorTimeout,
			h = e.createElement(t),
			d = 0,
			g = 0,
			b = {
				t: n,
				s: i,
				e: s,
				a: l,
				x: c
			};
		1 === k[i] && (g = 1, k[i] = []), "object" == t ? h.data = i : (h.src = i, h.type = t), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function() {
			u.call(this, g)
		}, v.splice(o, 0, b), "img" != t && (g || 2 === k[i] ? (w.insertBefore(h, _ ? null : m), f(u, c)) : k[i].push(h))
	}
	function c(t, e, i, n, s) {
		return y = 0, e = e || "j", o(t) ? l("c" == e ? C : x, t, e, this.i++, i, n, s) : (v.splice(this.i++, 0, t), 1 == v.length && a()), this
	}
	function u() {
		var t = p;
		return t.loader = {
			load: c,
			i: 0
		}, t
	}
	var h, p, d = e.documentElement,
		f = t.setTimeout,
		m = e.getElementsByTagName("script")[0],
		g = {}.toString,
		v = [],
		y = 0,
		b = "MozAppearance" in d.style,
		_ = b && !! e.createRange().compareNode,
		w = _ ? d : m.parentNode,
		d = t.opera && "[object Opera]" == g.call(t.opera),
		d = !! e.attachEvent && !d,
		x = b ? "object" : d ? "script" : "img",
		C = d ? "script" : x,
		S = Array.isArray ||
	function(t) {
		return "[object Array]" == g.call(t)
	}, I = [], k = {}, E = {
		timeout: function(t, e) {
			return e.length && (t.timeout = e[0]), t
		}
	};
	p = function(t) {
		function e(t) {
			var e, i, n, t = t.split("!"),
				o = I.length,
				s = t.pop(),
				r = t.length,
				s = {
					url: s,
					origUrl: s,
					prefixes: t
				};
			for (i = 0; r > i; i++) n = t[i].split("="), (e = E[n.shift()]) && (s = e(s, n));
			for (i = 0; o > i; i++) s = I[i](s);
			return s
		}
		function r(t, o, s, r, a) {
			var l = e(t),
				c = l.autoCallback;
			l.url.split(".").pop().split("?").shift(), l.bypass || (o && (o = n(o) ? o : o[t] || o[r] || o[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, o, s, r, a) : (k[l.url] ? l.noexec = !0 : k[l.url] = 1, s.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : i, l.noexec, l.attrs, l.timeout), (n(o) || n(c)) && s.load(function() {
				u(), o && o(l.origUrl, a, r), c && c(l.origUrl, a, r), k[l.url] = 2
			})))
		}
		function a(t, e) {
			function i(t, i) {
				if (t) {
					if (o(t)) i || (h = function() {
						var t = [].slice.call(arguments);
						p.apply(this, t), d()
					}), r(t, h, e, 0, c);
					else if (Object(t) === t) for (l in a = function() {
						var e, i = 0;
						for (e in t) t.hasOwnProperty(e) && i++;
						return i
					}(), t) t.hasOwnProperty(l) && (!i && !--a && (n(h) ? h = function() {
						var t = [].slice.call(arguments);
						p.apply(this, t), d()
					} : h[l] = function(t) {
						return function() {
							var e = [].slice.call(arguments);
							t && t.apply(this, e), d()
						}
					}(p[l])), r(t[l], h, e, l, c))
				} else!i && d()
			}
			var a, l, c = !! t.test,
				u = t.load || t.both,
				h = t.callback || s,
				p = h,
				d = t.complete || s;
			i(c ? t.yep : t.nope, !! u), u && i(u)
		}
		var l, c, h = this.yepnope.loader;
		if (o(t)) r(t, 0, h, 0);
		else if (S(t)) for (l = 0; l < t.length; l++) c = t[l], o(c) ? r(c, 0, h, 0) : S(c) ? p(c) : Object(c) === c && a(c, h);
		else Object(t) === t && a(t, h)
	}, p.addPrefix = function(t, e) {
		E[t] = e
	}, p.addFilter = function(t) {
		I.push(t)
	}, p.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", h = function() {
		e.removeEventListener("DOMContentLoaded", h, 0), e.readyState = "complete"
	}, 0)), t.yepnope = u(), t.yepnope.executeStack = a, t.yepnope.injectJs = function(t, i, n, o, l, c) {
		var u, h, d = e.createElement("script"),
			o = o || p.errorTimeout;
		d.src = t;
		for (h in n) d.setAttribute(h, n[h]);
		i = c ? a : i || s, d.onreadystatechange = d.onload = function() {
			!u && r(d.readyState) && (u = 1, i(), d.onload = d.onreadystatechange = null)
		}, f(function() {
			u || (u = 1, i(1))
		}, o), l ? d.onload() : m.parentNode.insertBefore(d, m)
	}, t.yepnope.injectCss = function(t, i, n, o, r, l) {
		var c, o = e.createElement("link"),
			i = l ? a : i || s;
		o.href = t, o.rel = "stylesheet", o.type = "text/css";
		for (c in n) o.setAttribute(c, n[c]);
		r || (m.parentNode.insertBefore(o, m), f(i, 0))
	}
}(this, document), Modernizr.load = function() {
	yepnope.apply(window, [].slice.call(arguments, 0))
}, function(t) {
	function e() {}
	function i(t) {
		function i(e) {
			e.prototype.option || (e.prototype.option = function(e) {
				t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
			})
		}
		function o(e, i) {
			t.fn[e] = function(o) {
				if ("string" == typeof o) {
					for (var r = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
						var c = this[a],
							u = t.data(c, e);
						if (u) if (t.isFunction(u[o]) && "_" !== o.charAt(0)) {
							var h = u[o].apply(u, r);
							if (void 0 !== h) return h
						} else s("no such method '" + o + "' for " + e + " instance");
						else s("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
					}
					return this
				}
				return this.each(function() {
					var n = t.data(this, e);
					n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
				})
			}
		}
		if (t) {
			var s = "undefined" == typeof console ? e : function(t) {
					console.error(t)
				};
			return t.bridget = function(t, e) {
				i(e), o(t, e)
			}, t.bridget
		}
	}
	var n = Array.prototype.slice;
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window), function(t) {
	function e(e) {
		var i = t.event;
		return i.target = i.target || i.srcElement || e, i
	}
	var i = document.documentElement,
		n = function() {};
	i.addEventListener ? n = function(t, e, i) {
		t.addEventListener(e, i, !1)
	} : i.attachEvent && (n = function(t, i, n) {
		t[i + n] = n.handleEvent ?
		function() {
			var i = e(t);
			n.handleEvent.call(n, i)
		} : function() {
			var i = e(t);
			n.call(t, i)
		}, t.attachEvent("on" + i, t[i + n])
	});
	var o = function() {};
	i.removeEventListener ? o = function(t, e, i) {
		t.removeEventListener(e, i, !1)
	} : i.detachEvent && (o = function(t, e, i) {
		t.detachEvent("on" + e, t[e + i]);
		try {
			delete t[e + i]
		} catch (n) {
			t[e + i] = void 0
		}
	});
	var s = {
		bind: n,
		unbind: o
	};
	"function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : t.eventie = s
}(this), function(t) {
	function e(t) {
		"function" == typeof t && (e.isReady ? t() : r.push(t))
	}
	function i(t) {
		var i = "readystatechange" === t.type && "complete" !== s.readyState;
		e.isReady || i || n()
	}
	function n() {
		e.isReady = !0;
		for (var t = 0, i = r.length; i > t; t++) {
			var n = r[t];
			n()
		}
	}
	function o(o) {
		return "complete" === s.readyState ? n() : (o.bind(s, "DOMContentLoaded", i), o.bind(s, "readystatechange", i), o.bind(t, "load", i)), e
	}
	var s = t.document,
		r = [];
	e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window), function() {
	function t() {}
	function e(t, e) {
		for (var i = t.length; i--;) if (t[i].listener === e) return i;
		return -1
	}
	function i(t) {
		return function() {
			return this[t].apply(this, arguments)
		}
	}
	var n = t.prototype,
		o = this,
		s = o.EventEmitter;
	n.getListeners = function(t) {
		var e, i, n = this._getEvents();
		if (t instanceof RegExp) {
			e = {};
			for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
		} else e = n[t] || (n[t] = []);
		return e
	}, n.flattenListeners = function(t) {
		var e, i = [];
		for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
		return i
	}, n.getListenersAsObject = function(t) {
		var e, i = this.getListeners(t);
		return i instanceof Array && (e = {}, e[t] = i), e || i
	}, n.addListener = function(t, i) {
		var n, o = this.getListenersAsObject(t),
			s = "object" == typeof i;
		for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(s ? i : {
			listener: i,
			once: !1
		});
		return this
	}, n.on = i("addListener"), n.addOnceListener = function(t, e) {
		return this.addListener(t, {
			listener: e,
			once: !0
		})
	}, n.once = i("addOnceListener"), n.defineEvent = function(t) {
		return this.getListeners(t), this
	}, n.defineEvents = function(t) {
		for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
		return this
	}, n.removeListener = function(t, i) {
		var n, o, s = this.getListenersAsObject(t);
		for (o in s) s.hasOwnProperty(o) && (n = e(s[o], i), -1 !== n && s[o].splice(n, 1));
		return this
	}, n.off = i("removeListener"), n.addListeners = function(t, e) {
		return this.manipulateListeners(!1, t, e)
	}, n.removeListeners = function(t, e) {
		return this.manipulateListeners(!0, t, e)
	}, n.manipulateListeners = function(t, e, i) {
		var n, o, s = t ? this.removeListener : this.addListener,
			r = t ? this.removeListeners : this.addListeners;
		if ("object" != typeof e || e instanceof RegExp) for (n = i.length; n--;) s.call(this, e, i[n]);
		else for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? s.call(this, n, o) : r.call(this, n, o));
		return this
	}, n.removeEvent = function(t) {
		var e, i = typeof t,
			n = this._getEvents();
		if ("string" === i) delete n[t];
		else if (t instanceof RegExp) for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
		else delete this._events;
		return this
	}, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
		var i, n, o, s, r = this.getListenersAsObject(t);
		for (o in r) if (r.hasOwnProperty(o)) for (n = r[o].length; n--;) i = r[o][n], i.once === !0 && this.removeListener(t, i.listener), s = i.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, i.listener);
		return this
	}, n.trigger = i("emitEvent"), n.emit = function(t) {
		var e = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(t, e)
	}, n.setOnceReturnValue = function(t) {
		return this._onceReturnValue = t, this
	}, n._getOnceReturnValue = function() {
		return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
	}, n._getEvents = function() {
		return this._events || (this._events = {})
	}, t.noConflict = function() {
		return o.EventEmitter = s, t
	}, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
		return t
	}) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this), function(t) {
	function e(t) {
		if (t) {
			if ("string" == typeof n[t]) return t;
			t = t.charAt(0).toUpperCase() + t.slice(1);
			for (var e, o = 0, s = i.length; s > o; o++) if (e = i[o] + t, "string" == typeof n[e]) return e
		}
	}
	var i = "Webkit Moz ms Ms O".split(" "),
		n = document.documentElement.style;
	"function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
		return e
	}) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window), function(t) {
	function e(t) {
		var e = parseFloat(t),
			i = -1 === t.indexOf("%") && !isNaN(e);
		return i && e
	}
	function i() {}
	function n() {
		for (var t = {
			width: 0,
			height: 0,
			innerWidth: 0,
			innerHeight: 0,
			outerWidth: 0,
			outerHeight: 0
		}, e = 0, i = r.length; i > e; e++) {
			var n = r[e];
			t[n] = 0
		}
		return t
	}
	function o(i) {
		function o() {
			if (!p) {
				p = !0;
				var n = t.getComputedStyle;
				if (c = function() {
					var t = n ?
					function(t) {
						return n(t, null)
					} : function(t) {
						return t.currentStyle
					};
					return function(e) {
						var i = t(e);
						return i || s("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
					}
				}(), u = i("boxSizing")) {
					var o = document.createElement("div");
					o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[u] = "border-box";
					var r = document.body || document.documentElement;
					r.appendChild(o);
					var a = c(o);
					h = 200 === e(a.width), r.removeChild(o)
				}
			}
		}
		function a(t) {
			if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
				var i = c(t);
				if ("none" === i.display) return n();
				var s = {};
				s.width = t.offsetWidth, s.height = t.offsetHeight;
				for (var a = s.isBorderBox = !(!u || !i[u] || "border-box" !== i[u]), p = 0, d = r.length; d > p; p++) {
					var f = r[p],
						m = i[f];
					m = l(t, m);
					var g = parseFloat(m);
					s[f] = isNaN(g) ? 0 : g
				}
				var v = s.paddingLeft + s.paddingRight,
					y = s.paddingTop + s.paddingBottom,
					b = s.marginLeft + s.marginRight,
					_ = s.marginTop + s.marginBottom,
					w = s.borderLeftWidth + s.borderRightWidth,
					x = s.borderTopWidth + s.borderBottomWidth,
					C = a && h,
					S = e(i.width);
				S !== !1 && (s.width = S + (C ? 0 : v + w));
				var I = e(i.height);
				return I !== !1 && (s.height = I + (C ? 0 : y + x)), s.innerWidth = s.width - (v + w), s.innerHeight = s.height - (y + x), s.outerWidth = s.width + b, s.outerHeight = s.height + _, s
			}
		}
		function l(e, i) {
			if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
			var n = e.style,
				o = n.left,
				s = e.runtimeStyle,
				r = s && s.left;
			return r && (s.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, r && (s.left = r), i
		}
		var c, u, h, p = !1;
		return a
	}
	var s = "undefined" == typeof console ? i : function(t) {
			console.error(t)
		},
		r = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
	"function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window), function(t) {
	function e(t, e) {
		return t[r](e)
	}
	function i(t) {
		if (!t.parentNode) {
			var e = document.createDocumentFragment();
			e.appendChild(t)
		}
	}
	function n(t, e) {
		i(t);
		for (var n = t.parentNode.querySelectorAll(e), o = 0, s = n.length; s > o; o++) if (n[o] === t) return !0;
		return !1
	}
	function o(t, n) {
		return i(t), e(t, n)
	}
	var s, r = function() {
			if (t.matchesSelector) return "matchesSelector";
			for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
				var o = e[i],
					s = o + "MatchesSelector";
				if (t[s]) return s
			}
		}();
	if (r) {
		var a = document.createElement("div"),
			l = e(a, "div");
		s = l ? e : o
	} else s = n;
	"function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
		return s
	}) : "object" == typeof exports ? module.exports = s : window.matchesSelector = s
}(Element.prototype), function(t) {
	function e(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}
	function i(t) {
		for (var e in t) return !1;
		return e = null, !0
	}
	function n(t) {
		return t.replace(/([A-Z])/g, function(t) {
			return "-" + t.toLowerCase()
		})
	}
	function o(t, o, s) {
		function a(t, e) {
			t && (this.element = t, this.layout = e, this.position = {
				x: 0,
				y: 0
			}, this._create())
		}
		var l = s("transition"),
			c = s("transform"),
			u = l && c,
			h = !! s("perspective"),
			p = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "otransitionend",
				transition: "transitionend"
			}[l],
			d = ["transform", "transition", "transitionDuration", "transitionProperty"],
			f = function() {
				for (var t = {}, e = 0, i = d.length; i > e; e++) {
					var n = d[e],
						o = s(n);
					o && o !== n && (t[n] = o)
				}
				return t
			}();
		e(a.prototype, t.prototype), a.prototype._create = function() {
			this._transn = {
				ingProperties: {},
				clean: {},
				onEnd: {}
			}, this.css({
				position: "absolute"
			})
		}, a.prototype.handleEvent = function(t) {
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, a.prototype.getSize = function() {
			this.size = o(this.element)
		}, a.prototype.css = function(t) {
			var e = this.element.style;
			for (var i in t) {
				var n = f[i] || i;
				e[n] = t[i]
			}
		}, a.prototype.getPosition = function() {
			var t = r(this.element),
				e = this.layout.options,
				i = e.isOriginLeft,
				n = e.isOriginTop,
				o = parseInt(t[i ? "left" : "right"], 10),
				s = parseInt(t[n ? "top" : "bottom"], 10);
			o = isNaN(o) ? 0 : o, s = isNaN(s) ? 0 : s;
			var a = this.layout.size;
			o -= i ? a.paddingLeft : a.paddingRight, s -= n ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = s
		}, a.prototype.layoutPosition = function() {
			var t = this.layout.size,
				e = this.layout.options,
				i = {};
			e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
		};
		var m = h ?
		function(t, e) {
			return "translate3d(" + t + "px, " + e + "px, 0)"
		} : function(t, e) {
			return "translate(" + t + "px, " + e + "px)"
		};
		a.prototype._transitionTo = function(t, e) {
			this.getPosition();
			var i = this.position.x,
				n = this.position.y,
				o = parseInt(t, 10),
				s = parseInt(e, 10),
				r = o === this.position.x && s === this.position.y;
			if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
			var a = t - i,
				l = e - n,
				c = {},
				u = this.layout.options;
			a = u.isOriginLeft ? a : -a, l = u.isOriginTop ? l : -l, c.transform = m(a, l), this.transition({
				to: c,
				onTransitionEnd: {
					transform: this.layoutPosition
				},
				isCleaning: !0
			})
		}, a.prototype.goTo = function(t, e) {
			this.setPosition(t, e), this.layoutPosition()
		}, a.prototype.moveTo = u ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
			this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
		}, a.prototype._nonTransition = function(t) {
			this.css(t.to), t.isCleaning && this._removeStyles(t.to);
			for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
		}, a.prototype._transition = function(t) {
			if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
			var e = this._transn;
			for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
			for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
			if (t.from) {
				this.css(t.from);
				var n = this.element.offsetHeight;
				n = null
			}
			this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
		};
		var g = c && n(c) + ",opacity";
		a.prototype.enableTransition = function() {
			this.isTransitioning || (this.css({
				transitionProperty: g,
				transitionDuration: this.layout.options.transitionDuration
			}), this.element.addEventListener(p, this, !1))
		}, a.prototype.transition = a.prototype[l ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
			this.ontransitionend(t)
		}, a.prototype.onotransitionend = function(t) {
			this.ontransitionend(t)
		};
		var v = {
			"-webkit-transform": "transform",
			"-moz-transform": "transform",
			"-o-transform": "transform"
		};
		a.prototype.ontransitionend = function(t) {
			if (t.target === this.element) {
				var e = this._transn,
					n = v[t.propertyName] || t.propertyName;
				if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
					var o = e.onEnd[n];
					o.call(this), delete e.onEnd[n]
				}
				this.emitEvent("transitionEnd", [this])
			}
		}, a.prototype.disableTransition = function() {
			this.removeTransitionStyles(), this.element.removeEventListener(p, this, !1), this.isTransitioning = !1
		}, a.prototype._removeStyles = function(t) {
			var e = {};
			for (var i in t) e[i] = "";
			this.css(e)
		};
		var y = {
			transitionProperty: "",
			transitionDuration: ""
		};
		return a.prototype.removeTransitionStyles = function() {
			this.css(y)
		}, a.prototype.removeElem = function() {
			this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
		}, a.prototype.remove = function() {
			if (!l || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
			var t = this;
			this.on("transitionEnd", function() {
				return t.removeElem(), !0
			}), this.hide()
		}, a.prototype.reveal = function() {
			delete this.isHidden, this.css({
				display: ""
			});
			var t = this.layout.options;
			this.transition({
				from: t.hiddenStyle,
				to: t.visibleStyle,
				isCleaning: !0
			})
		}, a.prototype.hide = function() {
			this.isHidden = !0, this.css({
				display: ""
			});
			var t = this.layout.options;
			this.transition({
				from: t.visibleStyle,
				to: t.hiddenStyle,
				isCleaning: !0,
				onTransitionEnd: {
					opacity: function() {
						this.isHidden && this.css({
							display: "none"
						})
					}
				}
			})
		}, a.prototype.destroy = function() {
			this.css({
				position: "",
				left: "",
				right: "",
				top: "",
				bottom: "",
				transition: "",
				transform: ""
			})
		}, a
	}
	var s = t.getComputedStyle,
		r = s ?
	function(t) {
		return s(t, null)
	} : function(t) {
		return t.currentStyle
	};
	"function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
}(window), function(t) {
	function e(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}
	function i(t) {
		return "[object Array]" === h.call(t)
	}
	function n(t) {
		var e = [];
		if (i(t)) e = t;
		else if (t && "number" == typeof t.length) for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
		else e.push(t);
		return e
	}
	function o(t, e) {
		var i = d(e, t); - 1 !== i && e.splice(i, 1)
	}
	function s(t) {
		return t.replace(/(.)([A-Z])/g, function(t, e, i) {
			return e + "-" + i
		}).toLowerCase()
	}
	function r(i, r, h, d, f, m) {
		function g(t, i) {
			if ("string" == typeof t && (t = a.querySelector(t)), !t || !p(t)) return void(l && l.error("Bad " + this.constructor.namespace + " element: " + t));
			this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
			var n = ++v;
			this.element.outlayerGUID = n, y[n] = this, this._create(), this.options.isInitLayout && this.layout()
		}
		var v = 0,
			y = {};
		return g.namespace = "outlayer", g.Item = m, g.defaults = {
			containerStyle: {
				position: "relative"
			},
			isInitLayout: !0,
			isOriginLeft: !0,
			isOriginTop: !0,
			isResizeBound: !0,
			isResizingContainer: !0,
			transitionDuration: "0.4s",
			hiddenStyle: {
				opacity: 0,
				transform: "scale(0.001)"
			},
			visibleStyle: {
				opacity: 1,
				transform: "scale(1)"
			}
		}, e(g.prototype, h.prototype), g.prototype.option = function(t) {
			e(this.options, t)
		}, g.prototype._create = function() {
			this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
		}, g.prototype.reloadItems = function() {
			this.items = this._itemize(this.element.children)
		}, g.prototype._itemize = function(t) {
			for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, s = e.length; s > o; o++) {
				var r = e[o],
					a = new i(r, this);
				n.push(a)
			}
			return n
		}, g.prototype._filterFindItemElements = function(t) {
			t = n(t);
			for (var e = this.options.itemSelector, i = [], o = 0, s = t.length; s > o; o++) {
				var r = t[o];
				if (p(r)) if (e) {
					f(r, e) && i.push(r);
					for (var a = r.querySelectorAll(e), l = 0, c = a.length; c > l; l++) i.push(a[l])
				} else i.push(r)
			}
			return i
		}, g.prototype.getItemElements = function() {
			for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
			return t
		}, g.prototype.layout = function() {
			this._resetLayout(), this._manageStamps();
			var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			this.layoutItems(this.items, t), this._isLayoutInited = !0
		}, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
			this.getSize()
		}, g.prototype.getSize = function() {
			this.size = d(this.element)
		}, g.prototype._getMeasurement = function(t, e) {
			var i, n = this.options[t];
			n ? ("string" == typeof n ? i = this.element.querySelector(n) : p(n) && (i = n), this[t] = i ? d(i)[e] : n) : this[t] = 0
		}, g.prototype.layoutItems = function(t, e) {
			t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
		}, g.prototype._getItemsForLayout = function(t) {
			for (var e = [], i = 0, n = t.length; n > i; i++) {
				var o = t[i];
				o.isIgnored || e.push(o)
			}
			return e
		}, g.prototype._layoutItems = function(t, e) {
			function i() {
				n.emitEvent("layoutComplete", [n, t])
			}
			var n = this;
			if (!t || !t.length) return void i();
			this._itemsOn(t, "layout", i);
			for (var o = [], s = 0, r = t.length; r > s; s++) {
				var a = t[s],
					l = this._getItemLayoutPosition(a);
				l.item = a, l.isInstant = e || a.isLayoutInstant, o.push(l)
			}
			this._processLayoutQueue(o)
		}, g.prototype._getItemLayoutPosition = function() {
			return {
				x: 0,
				y: 0
			}
		}, g.prototype._processLayoutQueue = function(t) {
			for (var e = 0, i = t.length; i > e; e++) {
				var n = t[e];
				this._positionItem(n.item, n.x, n.y, n.isInstant)
			}
		}, g.prototype._positionItem = function(t, e, i, n) {
			n ? t.goTo(e, i) : t.moveTo(e, i)
		}, g.prototype._postLayout = function() {
			this.resizeContainer()
		}, g.prototype.resizeContainer = function() {
			if (this.options.isResizingContainer) {
				var t = this._getContainerSize();
				t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
			}
		}, g.prototype._getContainerSize = u, g.prototype._setContainerMeasure = function(t, e) {
			if (void 0 !== t) {
				var i = this.size;
				i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
			}
		}, g.prototype._itemsOn = function(t, e, i) {
			function n() {
				return o++, o === s && i.call(r), !0
			}
			for (var o = 0, s = t.length, r = this, a = 0, l = t.length; l > a; a++) {
				var c = t[a];
				c.on(e, n)
			}
		}, g.prototype.ignore = function(t) {
			var e = this.getItem(t);
			e && (e.isIgnored = !0)
		}, g.prototype.unignore = function(t) {
			var e = this.getItem(t);
			e && delete e.isIgnored
		}, g.prototype.stamp = function(t) {
			if (t = this._find(t)) {
				this.stamps = this.stamps.concat(t);
				for (var e = 0, i = t.length; i > e; e++) {
					var n = t[e];
					this.ignore(n)
				}
			}
		}, g.prototype.unstamp = function(t) {
			if (t = this._find(t)) for (var e = 0, i = t.length; i > e; e++) {
				var n = t[e];
				o(n, this.stamps), this.unignore(n)
			}
		}, g.prototype._find = function(t) {
			return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n(t)) : void 0
		}, g.prototype._manageStamps = function() {
			if (this.stamps && this.stamps.length) {
				this._getBoundingRect();
				for (var t = 0, e = this.stamps.length; e > t; t++) {
					var i = this.stamps[t];
					this._manageStamp(i)
				}
			}
		}, g.prototype._getBoundingRect = function() {
			var t = this.element.getBoundingClientRect(),
				e = this.size;
			this._boundingRect = {
				left: t.left + e.paddingLeft + e.borderLeftWidth,
				top: t.top + e.paddingTop + e.borderTopWidth,
				right: t.right - (e.paddingRight + e.borderRightWidth),
				bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
			}
		}, g.prototype._manageStamp = u, g.prototype._getElementOffset = function(t) {
			var e = t.getBoundingClientRect(),
				i = this._boundingRect,
				n = d(t),
				o = {
					left: e.left - i.left - n.marginLeft,
					top: e.top - i.top - n.marginTop,
					right: i.right - e.right - n.marginRight,
					bottom: i.bottom - e.bottom - n.marginBottom
				};
			return o
		}, g.prototype.handleEvent = function(t) {
			var e = "on" + t.type;
			this[e] && this[e](t)
		}, g.prototype.bindResize = function() {
			this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
		}, g.prototype.unbindResize = function() {
			this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
		}, g.prototype.onresize = function() {
			function t() {
				e.resize(), delete e.resizeTimeout
			}
			this.resizeTimeout && clearTimeout(this.resizeTimeout);
			var e = this;
			this.resizeTimeout = setTimeout(t, 100)
		}, g.prototype.resize = function() {
			this.isResizeBound && this.needsResizeLayout() && this.layout()
		}, g.prototype.needsResizeLayout = function() {
			var t = d(this.element),
				e = this.size && t;
			return e && t.innerWidth !== this.size.innerWidth
		}, g.prototype.addItems = function(t) {
			var e = this._itemize(t);
			return e.length && (this.items = this.items.concat(e)), e
		}, g.prototype.appended = function(t) {
			var e = this.addItems(t);
			e.length && (this.layoutItems(e, !0), this.reveal(e))
		}, g.prototype.prepended = function(t) {
			var e = this._itemize(t);
			if (e.length) {
				var i = this.items.slice(0);
				this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
			}
		}, g.prototype.reveal = function(t) {
			var e = t && t.length;
			if (e) for (var i = 0; e > i; i++) {
				var n = t[i];
				n.reveal()
			}
		}, g.prototype.hide = function(t) {
			var e = t && t.length;
			if (e) for (var i = 0; e > i; i++) {
				var n = t[i];
				n.hide()
			}
		}, g.prototype.getItem = function(t) {
			for (var e = 0, i = this.items.length; i > e; e++) {
				var n = this.items[e];
				if (n.element === t) return n
			}
		}, g.prototype.getItems = function(t) {
			if (t && t.length) {
				for (var e = [], i = 0, n = t.length; n > i; i++) {
					var o = t[i],
						s = this.getItem(o);
					s && e.push(s)
				}
				return e
			}
		}, g.prototype.remove = function(t) {
			t = n(t);
			var e = this.getItems(t);
			if (e && e.length) {
				this._itemsOn(e, "remove", function() {
					this.emitEvent("removeComplete", [this, e])
				});
				for (var i = 0, s = e.length; s > i; i++) {
					var r = e[i];
					r.remove(), o(r, this.items)
				}
			}
		}, g.prototype.destroy = function() {
			var t = this.element.style;
			t.height = "", t.position = "", t.width = "";
			for (var e = 0, i = this.items.length; i > e; e++) {
				var n = this.items[e];
				n.destroy()
			}
			this.unbindResize();
			var o = this.element.outlayerGUID;
			delete y[o], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
		}, g.data = function(t) {
			var e = t && t.outlayerGUID;
			return e && y[e]
		}, g.create = function(t, i) {
			function n() {
				g.apply(this, arguments)
			}
			return Object.create ? n.prototype = Object.create(g.prototype) : e(n.prototype, g.prototype), n.prototype.constructor = n, n.defaults = e({}, g.defaults), e(n.defaults, i), n.prototype.settings = {}, n.namespace = t, n.data = g.data, n.Item = function() {
				m.apply(this, arguments)
			}, n.Item.prototype = new m, r(function() {
				for (var e = s(t), i = a.querySelectorAll(".js-" + e), o = "data-" + e + "-options", r = 0, u = i.length; u > r; r++) {
					var h, p = i[r],
						d = p.getAttribute(o);
					try {
						h = d && JSON.parse(d)
					} catch (f) {
						l && l.error("Error parsing " + o + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + f);
						continue
					}
					var m = new n(p, h);
					c && c.data(p, t, m)
				}
			}), c && c.bridget && c.bridget(t, n), n
		}, g.Item = m, g
	}
	var a = t.document,
		l = t.console,
		c = t.jQuery,
		u = function() {},
		h = Object.prototype.toString,
		p = "function" == typeof HTMLElement || "object" == typeof HTMLElement ?
	function(t) {
		return t instanceof HTMLElement
	} : function(t) {
		return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
	}, d = Array.prototype.indexOf ?
	function(t, e) {
		return t.indexOf(e)
	} : function(t, e) {
		for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
		return -1
	};
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], r) : "object" == typeof exports ? module.exports = r(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = r(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
}(window), function(t) {
	function e(t) {
		function e() {
			t.Item.apply(this, arguments)
		}
		e.prototype = new t.Item, e.prototype._create = function() {
			this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
		}, e.prototype.updateSortData = function() {
			if (!this.isIgnored) {
				this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
				var t = this.layout.options.getSortData,
					e = this.layout._sorters;
				for (var i in t) {
					var n = e[i];
					this.sortData[i] = n(this.element, this)
				}
			}
		};
		var i = e.prototype.destroy;
		return e.prototype.destroy = function() {
			i.apply(this, arguments), this.css({
				display: ""
			})
		}, e
	}
	"function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window), function(t) {
	function e(t, e) {
		function i(t) {
			this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
		}
		return function() {
			function t(t) {
				return function() {
					return e.prototype[t].apply(this.isotope, arguments)
				}
			}
			for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, s = n.length; s > o; o++) {
				var r = n[o];
				i.prototype[r] = t(r)
			}
		}(), i.prototype.needsVerticalResizeLayout = function() {
			var e = t(this.isotope.element),
				i = this.isotope.size && e;
			return i && e.innerHeight !== this.isotope.size.innerHeight
		}, i.prototype._getMeasurement = function() {
			this.isotope._getMeasurement.apply(this, arguments)
		}, i.prototype.getColumnWidth = function() {
			this.getSegmentSize("column", "Width")
		}, i.prototype.getRowHeight = function() {
			this.getSegmentSize("row", "Height")
		}, i.prototype.getSegmentSize = function(t, e) {
			var i = t + e,
				n = "outer" + e;
			if (this._getMeasurement(i, n), !this[i]) {
				var o = this.getFirstItemSize();
				this[i] = o && o[n] || this.isotope.size["inner" + e]
			}
		}, i.prototype.getFirstItemSize = function() {
			var e = this.isotope.filteredItems[0];
			return e && e.element && t(e.element)
		}, i.prototype.layout = function() {
			this.isotope.layout.apply(this.isotope, arguments)
		}, i.prototype.getSize = function() {
			this.isotope.getSize(), this.size = this.isotope.size
		}, i.modes = {}, i.create = function(t, e) {
			function n() {
				i.apply(this, arguments)
			}
			return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
		}, i
	}
	"function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window), function(t) {
	function e(t, e) {
		var n = t.create("masonry");
		return n.prototype._resetLayout = function() {
			this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
			var t = this.cols;
			for (this.colYs = []; t--;) this.colYs.push(0);
			this.maxY = 0
		}, n.prototype.measureColumns = function() {
			if (this.getContainerWidth(), !this.columnWidth) {
				var t = this.items[0],
					i = t && t.element;
				this.columnWidth = i && e(i).outerWidth || this.containerWidth
			}
			this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
		}, n.prototype.getContainerWidth = function() {
			var t = this.options.isFitWidth ? this.element.parentNode : this.element,
				i = e(t);
			this.containerWidth = i && i.innerWidth
		}, n.prototype._getItemLayoutPosition = function(t) {
			t.getSize();
			var e = t.size.outerWidth % this.columnWidth,
				n = e && 1 > e ? "round" : "ceil",
				o = Math[n](t.size.outerWidth / this.columnWidth);
			o = Math.min(o, this.cols);
			for (var s = this._getColGroup(o), r = Math.min.apply(Math, s), a = i(s, r), l = {
				x: this.columnWidth * a,
				y: r
			}, c = r + t.size.outerHeight, u = this.cols + 1 - s.length, h = 0; u > h; h++) this.colYs[a + h] = c;
			return l
		}, n.prototype._getColGroup = function(t) {
			if (2 > t) return this.colYs;
			for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
				var o = this.colYs.slice(n, n + t);
				e[n] = Math.max.apply(Math, o)
			}
			return e
		}, n.prototype._manageStamp = function(t) {
			var i = e(t),
				n = this._getElementOffset(t),
				o = this.options.isOriginLeft ? n.left : n.right,
				s = o + i.outerWidth,
				r = Math.floor(o / this.columnWidth);
			r = Math.max(0, r);
			var a = Math.floor(s / this.columnWidth);
			a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
			for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, c = r; a >= c; c++) this.colYs[c] = Math.max(l, this.colYs[c])
		}, n.prototype._getContainerSize = function() {
			this.maxY = Math.max.apply(Math, this.colYs);
			var t = {
				height: this.maxY
			};
			return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
		}, n.prototype._getContainerFitWidth = function() {
			for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
			return (this.cols - t) * this.columnWidth - this.gutter
		}, n.prototype.needsResizeLayout = function() {
			var t = this.containerWidth;
			return this.getContainerWidth(), t !== this.containerWidth
		}, n
	}
	var i = Array.prototype.indexOf ?
	function(t, e) {
		return t.indexOf(e)
	} : function(t, e) {
		for (var i = 0, n = t.length; n > i; i++) {
			var o = t[i];
			if (o === e) return i
		}
		return -1
	};
	"function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window), function(t) {
	function e(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}
	function i(t, i) {
		var n = t.create("masonry"),
			o = n.prototype._getElementOffset,
			s = n.prototype.layout,
			r = n.prototype._getMeasurement;
		e(n.prototype, i.prototype), n.prototype._getElementOffset = o, n.prototype.layout = s, n.prototype._getMeasurement = r;
		var a = n.prototype.measureColumns;
		n.prototype.measureColumns = function() {
			this.items = this.isotope.filteredItems, a.call(this)
		};
		var l = n.prototype._manageStamp;
		return n.prototype._manageStamp = function() {
			this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
		}, n
	}
	"function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], i) : "object" == typeof exports ? module.exports = i(require("../layout-mode"), require("masonry-layout")) : i(t.Isotope.LayoutMode, t.Masonry)
}(window), function(t) {
	function e(t) {
		var e = t.create("fitRows");
		return e.prototype._resetLayout = function() {
			this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
		}, e.prototype._getItemLayoutPosition = function(t) {
			t.getSize();
			var e = t.size.outerWidth + this.gutter,
				i = this.isotope.size.innerWidth + this.gutter;
			0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
			var n = {
				x: this.x,
				y: this.y
			};
			return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
		}, e.prototype._getContainerSize = function() {
			return {
				height: this.maxY
			}
		}, e
	}
	"function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window), function(t) {
	function e(t) {
		var e = t.create("vertical", {
			horizontalAlignment: 0
		});
		return e.prototype._resetLayout = function() {
			this.y = 0
		}, e.prototype._getItemLayoutPosition = function(t) {
			t.getSize();
			var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
				i = this.y;
			return this.y += t.size.outerHeight, {
				x: e,
				y: i
			}
		}, e.prototype._getContainerSize = function() {
			return {
				height: this.y
			}
		}, e
	}
	"function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window), function(t) {
	function e(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}
	function i(t) {
		return "[object Array]" === u.call(t)
	}
	function n(t) {
		var e = [];
		if (i(t)) e = t;
		else if (t && "number" == typeof t.length) for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
		else e.push(t);
		return e
	}
	function o(t, e) {
		var i = h(e, t); - 1 !== i && e.splice(i, 1)
	}
	function s(t, i, s, l, u) {
		function h(t, e) {
			return function(i, n) {
				for (var o = 0, s = t.length; s > o; o++) {
					var r = t[o],
						a = i.sortData[r],
						l = n.sortData[r];
					if (a > l || l > a) {
						var c = void 0 !== e[r] ? e[r] : e,
							u = c ? 1 : -1;
						return (a > l ? 1 : -1) * u
					}
				}
				return 0
			}
		}
		var p = t.create("isotope", {
			layoutMode: "masonry",
			isJQueryFiltering: !0,
			sortAscending: !0
		});
		p.Item = l, p.LayoutMode = u, p.prototype._create = function() {
			this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
			for (var e in u.modes) this._initLayoutMode(e)
		}, p.prototype.reloadItems = function() {
			this.itemGUID = 0, t.prototype.reloadItems.call(this)
		}, p.prototype._itemize = function() {
			for (var e = t.prototype._itemize.apply(this, arguments), i = 0, n = e.length; n > i; i++) {
				var o = e[i];
				o.id = this.itemGUID++
			}
			return this._updateItemsSortData(e), e
		}, p.prototype._initLayoutMode = function(t) {
			var i = u.modes[t],
				n = this.options[t] || {};
			this.options[t] = i.options ? e(i.options, n) : n, this.modes[t] = new i(this)
		}, p.prototype.layout = function() {
			return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
		}, p.prototype._layout = function() {
			var t = this._getIsInstant();
			this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
		}, p.prototype.arrange = function(t) {
			this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
		}, p.prototype._init = p.prototype.arrange, p.prototype._getIsInstant = function() {
			var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
			return this._isInstant = t, t
		}, p.prototype._filter = function(t) {
			function e() {
				h.reveal(o), h.hide(s)
			}
			var i = this.options.filter;
			i = i || "*";
			for (var n = [], o = [], s = [], r = this._getFilterTest(i), a = 0, l = t.length; l > a; a++) {
				var c = t[a];
				if (!c.isIgnored) {
					var u = r(c);
					u && n.push(c), u && c.isHidden ? o.push(c) : u || c.isHidden || s.push(c)
				}
			}
			var h = this;
			return this._isInstant ? this._noTransition(e) : e(), n
		}, p.prototype._getFilterTest = function(t) {
			return r && this.options.isJQueryFiltering ?
			function(e) {
				return r(e.element).is(t)
			} : "function" == typeof t ?
			function(e) {
				return t(e.element)
			} : function(e) {
				return s(e.element, t)
			}
		}, p.prototype.updateSortData = function(t) {
			var e;
			t ? (t = n(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
		}, p.prototype._getSorters = function() {
			var t = this.options.getSortData;
			for (var e in t) {
				var i = t[e];
				this._sorters[e] = d(i)
			}
		}, p.prototype._updateItemsSortData = function(t) {
			for (var e = t && t.length, i = 0; e && e > i; i++) {
				var n = t[i];
				n.updateSortData()
			}
		};
		var d = function() {
				function t(t) {
					if ("string" != typeof t) return t;
					var i = a(t).split(" "),
						n = i[0],
						o = n.match(/^\[(.+)\]$/),
						s = o && o[1],
						r = e(s, n),
						l = p.sortDataParsers[i[1]];
					return t = l ?
					function(t) {
						return t && l(r(t))
					} : function(t) {
						return t && r(t)
					}
				}
				function e(t, e) {
					var i;
					return i = t ?
					function(e) {
						return e.getAttribute(t)
					} : function(t) {
						var i = t.querySelector(e);
						return i && c(i)
					}
				}
				return t
			}();
		p.sortDataParsers = {
			parseInt: function(t) {
				return parseInt(t, 10)
			},
			parseFloat: function(t) {
				return parseFloat(t)
			}
		}, p.prototype._sort = function() {
			var t = this.options.sortBy;
			if (t) {
				var e = [].concat.apply(t, this.sortHistory),
					i = h(e, this.options.sortAscending);
				this.filteredItems.sort(i), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
			}
		}, p.prototype._mode = function() {
			var t = this.options.layoutMode,
				e = this.modes[t];
			if (!e) throw Error("No layout mode: " + t);
			return e.options = this.options[t], e
		}, p.prototype._resetLayout = function() {
			t.prototype._resetLayout.call(this), this._mode()._resetLayout()
		}, p.prototype._getItemLayoutPosition = function(t) {
			return this._mode()._getItemLayoutPosition(t)
		}, p.prototype._manageStamp = function(t) {
			this._mode()._manageStamp(t)
		}, p.prototype._getContainerSize = function() {
			return this._mode()._getContainerSize()
		}, p.prototype.needsResizeLayout = function() {
			return this._mode().needsResizeLayout()
		}, p.prototype.appended = function(t) {
			var e = this.addItems(t);
			if (e.length) {
				var i = this._filterRevealAdded(e);
				this.filteredItems = this.filteredItems.concat(i)
			}
		}, p.prototype.prepended = function(t) {
			var e = this._itemize(t);
			if (e.length) {
				var i = this.items.slice(0);
				this.items = e.concat(i), this._resetLayout(), this._manageStamps();
				var n = this._filterRevealAdded(e);
				this.layoutItems(i), this.filteredItems = n.concat(this.filteredItems)
			}
		}, p.prototype._filterRevealAdded = function(t) {
			var e = this._noTransition(function() {
				return this._filter(t)
			});
			return this.layoutItems(e, !0), this.reveal(e), t
		}, p.prototype.insert = function(t) {
			var e = this.addItems(t);
			if (e.length) {
				var i, n, o = e.length;
				for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
				var s = this._filter(e);
				for (this._noTransition(function() {
					this.hide(s)
				}), i = 0; o > i; i++) e[i].isLayoutInstant = !0;
				for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
				this.reveal(s)
			}
		};
		var f = p.prototype.remove;
		return p.prototype.remove = function(t) {
			t = n(t);
			var e = this.getItems(t);
			if (f.call(this, t), e && e.length) for (var i = 0, s = e.length; s > i; i++) {
				var r = e[i];
				o(r, this.filteredItems)
			}
		}, p.prototype.shuffle = function() {
			for (var t = 0, e = this.items.length; e > t; t++) {
				var i = this.items[t];
				i.sortData.random = Math.random()
			}
			this.options.sortBy = "random", this._sort(), this._layout()
		}, p.prototype._noTransition = function(t) {
			var e = this.options.transitionDuration;
			this.options.transitionDuration = 0;
			var i = t.call(this);
			return this.options.transitionDuration = e, i
		}, p.prototype.getFilteredItemElements = function() {
			for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
			return t
		}, p
	}
	var r = t.jQuery,
		a = String.prototype.trim ?
	function(t) {
		return t.trim()
	} : function(t) {
		return t.replace(/^\s+|\s+$/g, "")
	}, l = document.documentElement, c = l.textContent ?
	function(t) {
		return t.textContent
	} : function(t) {
		return t.innerText
	}, u = Object.prototype.toString, h = Array.prototype.indexOf ?
	function(t, e) {
		return t.indexOf(e)
	} : function(t, e) {
		for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
		return -1
	};
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], s) : "object" == typeof exports ? module.exports = s(require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = s(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
}(window), function() {
	var t = [].indexOf ||
	function(t) {
		for (var e = 0, i = this.length; i > e; e++) if (e in this && this[e] === t) return e;
		return -1
	}, e = [].slice;
	!
	function(t, e) {
		return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(i) {
			return e(i, t)
		}) : e(t.jQuery, t)
	}(this, function(i, n) {
		var o, s, r, a, l, c, u, h, p, d, f, m, g, v, y, b;
		return o = i(n), h = t.call(n, "ontouchstart") >= 0, a = {
			horizontal: {},
			vertical: {}
		}, l = 1, u = {}, c = "waypoints-context-id", f = "resize.waypoints", m = "scroll.waypoints", g = 1, v = "waypoints-waypoint-ids", y = "waypoint", b = "waypoints", s = function() {
			function t(t) {
				var e = this;
				this.$element = t, this.element = t[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
					x: t.scrollLeft(),
					y: t.scrollTop()
				}, this.waypoints = {
					horizontal: {},
					vertical: {}
				}, t.data(c, this.id), u[this.id] = this, t.bind(m, function() {
					var t;
					return e.didScroll || h ? void 0 : (e.didScroll = !0, t = function() {
						return e.doScroll(), e.didScroll = !1
					}, n.setTimeout(t, i[b].settings.scrollThrottle))
				}), t.bind(f, function() {
					var t;
					return e.didResize ? void 0 : (e.didResize = !0, t = function() {
						return i[b]("refresh"), e.didResize = !1
					}, n.setTimeout(t, i[b].settings.resizeThrottle))
				})
			}
			return t.prototype.doScroll = function() {
				var t, e = this;
				return t = {
					horizontal: {
						newScroll: this.$element.scrollLeft(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left"
					},
					vertical: {
						newScroll: this.$element.scrollTop(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up"
					}
				}, !h || t.vertical.oldScroll && t.vertical.newScroll || i[b]("refresh"), i.each(t, function(t, n) {
					var o, s, r;
					return r = [], s = n.newScroll > n.oldScroll, o = s ? n.forward : n.backward, i.each(e.waypoints[t], function(t, e) {
						var i, o;
						return n.oldScroll < (i = e.offset) && i <= n.newScroll ? r.push(e) : n.newScroll < (o = e.offset) && o <= n.oldScroll ? r.push(e) : void 0
					}), r.sort(function(t, e) {
						return t.offset - e.offset
					}), s || r.reverse(), i.each(r, function(t, e) {
						return e.options.continuous || t === r.length - 1 ? e.trigger([o]) : void 0
					})
				}), this.oldScroll = {
					x: t.horizontal.newScroll,
					y: t.vertical.newScroll
				}
			}, t.prototype.refresh = function() {
				var t, e, n, o = this;
				return n = i.isWindow(this.element), e = this.$element.offset(), this.doScroll(), t = {
					horizontal: {
						contextOffset: n ? 0 : e.left,
						contextScroll: n ? 0 : this.oldScroll.x,
						contextDimension: this.$element.width(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left",
						offsetProp: "left"
					},
					vertical: {
						contextOffset: n ? 0 : e.top,
						contextScroll: n ? 0 : this.oldScroll.y,
						contextDimension: n ? i[b]("viewportHeight") : this.$element.height(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up",
						offsetProp: "top"
					}
				}, i.each(t, function(t, e) {
					return i.each(o.waypoints[t], function(t, n) {
						var o, s, r, a, l;
						return o = n.options.offset, r = n.offset, s = i.isWindow(n.element) ? 0 : n.$element.offset()[e.offsetProp], i.isFunction(o) ? o = o.apply(n.element) : "string" == typeof o && (o = parseFloat(o), n.options.offset.indexOf("%") > -1 && (o = Math.ceil(e.contextDimension * o / 100))), n.offset = s - e.contextOffset + e.contextScroll - o, n.options.onlyOnScroll && null != r || !n.enabled ? void 0 : null !== r && r < (a = e.oldScroll) && a <= n.offset ? n.trigger([e.backward]) : null !== r && r > (l = e.oldScroll) && l >= n.offset ? n.trigger([e.forward]) : null === r && e.oldScroll >= n.offset ? n.trigger([e.forward]) : void 0
					})
				})
			}, t.prototype.checkEmpty = function() {
				return i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([f, m].join(" ")), delete u[this.id]) : void 0
			}, t
		}(), r = function() {
			function t(t, e, n) {
				var o, s;
				n = i.extend({}, i.fn[y].defaults, n), "bottom-in-view" === n.offset && (n.offset = function() {
					var t;
					return t = i[b]("viewportHeight"), i.isWindow(e.element) || (t = e.$element.height()), t - i(this).outerHeight()
				}), this.$element = t, this.element = t[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = e, this.enabled = n.enabled, this.id = "waypoints" + g++, this.offset = null, this.options = n, e.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, o = null != (s = t.data(v)) ? s : [], o.push(this.id), t.data(v, o)
			}
			return t.prototype.trigger = function(t) {
				return this.enabled ? (null != this.callback && this.callback.apply(this.element, t), this.options.triggerOnce ? this.destroy() : void 0) : void 0
			}, t.prototype.disable = function() {
				return this.enabled = !1
			}, t.prototype.enable = function() {
				return this.context.refresh(), this.enabled = !0
			}, t.prototype.destroy = function() {
				return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
			}, t.getWaypointsByElement = function(t) {
				var e, n;
				return (n = i(t).data(v)) ? (e = i.extend({}, a.horizontal, a.vertical), i.map(n, function(t) {
					return e[t]
				})) : []
			}, t
		}(), d = {
			init: function(t, e) {
				var n;
				return null == e && (e = {}), null == (n = e.handler) && (e.handler = t), this.each(function() {
					var t, n, o, a;
					return t = i(this), o = null != (a = e.context) ? a : i.fn[y].defaults.context, i.isWindow(o) || (o = t.closest(o)), o = i(o), n = u[o.data(c)], n || (n = new s(o)), new r(t, n, e)
				}), i[b]("refresh"), this
			},
			disable: function() {
				return d._invoke(this, "disable")
			},
			enable: function() {
				return d._invoke(this, "enable")
			},
			destroy: function() {
				return d._invoke(this, "destroy")
			},
			prev: function(t, e) {
				return d._traverse.call(this, t, e, function(t, e, i) {
					return e > 0 ? t.push(i[e - 1]) : void 0
				})
			},
			next: function(t, e) {
				return d._traverse.call(this, t, e, function(t, e, i) {
					return e < i.length - 1 ? t.push(i[e + 1]) : void 0
				})
			},
			_traverse: function(t, e, o) {
				var s, r;
				return null == t && (t = "vertical"), null == e && (e = n), r = p.aggregate(e), s = [], this.each(function() {
					var e;
					return e = i.inArray(this, r[t]), o(s, e, r[t])
				}), this.pushStack(s)
			},
			_invoke: function(t, e) {
				return t.each(function() {
					var t;
					return t = r.getWaypointsByElement(this), i.each(t, function(t, i) {
						return i[e](), !0
					})
				}), this
			}
		}, i.fn[y] = function() {
			var t, n;
			return n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], d[n] ? d[n].apply(this, t) : i.isFunction(n) ? d.init.apply(this, arguments) : i.isPlainObject(n) ? d.init.apply(this, [null, n]) : i.error(n ? "The " + n + " method does not exist in jQuery Waypoints." : "jQuery Waypoints needs a callback function or handler option.")
		}, i.fn[y].defaults = {
			context: n,
			continuous: !0,
			enabled: !0,
			horizontal: !1,
			offset: 0,
			triggerOnce: !1
		}, p = {
			refresh: function() {
				return i.each(u, function(t, e) {
					return e.refresh()
				})
			},
			viewportHeight: function() {
				var t;
				return null != (t = n.innerHeight) ? t : o.height()
			},
			aggregate: function(t) {
				var e, n, o;
				return e = a, t && (e = null != (o = u[i(t).data(c)]) ? o.waypoints : void 0), e ? (n = {
					horizontal: [],
					vertical: []
				}, i.each(n, function(t, o) {
					return i.each(e[t], function(t, e) {
						return o.push(e)
					}), o.sort(function(t, e) {
						return t.offset - e.offset
					}), n[t] = i.map(o, function(t) {
						return t.element
					}), n[t] = i.unique(n[t])
				}), n) : []
			},
			above: function(t) {
				return null == t && (t = n), p._filter(t, "vertical", function(t, e) {
					return e.offset <= t.oldScroll.y
				})
			},
			below: function(t) {
				return null == t && (t = n), p._filter(t, "vertical", function(t, e) {
					return e.offset > t.oldScroll.y
				})
			},
			left: function(t) {
				return null == t && (t = n), p._filter(t, "horizontal", function(t, e) {
					return e.offset <= t.oldScroll.x
				})
			},
			right: function(t) {
				return null == t && (t = n), p._filter(t, "horizontal", function(t, e) {
					return e.offset > t.oldScroll.x
				})
			},
			enable: function() {
				return p._invoke("enable")
			},
			disable: function() {
				return p._invoke("disable")
			},
			destroy: function() {
				return p._invoke("destroy")
			},
			extendFn: function(t, e) {
				return d[t] = e
			},
			_invoke: function(t) {
				var e;
				return e = i.extend({}, a.vertical, a.horizontal), i.each(e, function(e, i) {
					return i[t](), !0
				})
			},
			_filter: function(t, e, n) {
				var o, s;
				return (o = u[i(t).data(c)]) ? (s = [], i.each(o.waypoints[e], function(t, e) {
					return n(o, e) ? s.push(e) : void 0
				}), s.sort(function(t, e) {
					return t.offset - e.offset
				}), i.map(s, function(t) {
					return t.element
				})) : []
			}
		}, i[b] = function() {
			var t, i;
			return i = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [], p[i] ? p[i].apply(null, t) : p.aggregate.call(null, i)
		}, i[b].settings = {
			resizeThrottle: 100,
			scrollThrottle: 30
		}, o.load(function() {
			return i[b]("refresh")
		})
	})
}.call(this), function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(t) {
	var e, i, n, o, s, r, a = "Close",
		l = "BeforeClose",
		c = "AfterClose",
		u = "BeforeAppend",
		h = "MarkupParse",
		p = "Open",
		d = "Change",
		f = "mfp",
		m = "." + f,
		g = "mfp-ready",
		v = "mfp-removing",
		y = "mfp-prevent-close",
		b = function() {},
		_ = !! window.jQuery,
		w = t(window),
		x = function(t, i) {
			e.ev.on(f + t + m, i)
		},
		C = function(e, i, n, o) {
			var s = document.createElement("div");
			return s.className = "mfp-" + e, n && (s.innerHTML = n), o ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
		},
		S = function(i, n) {
			e.ev.triggerHandler(f + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
		},
		I = function(i) {
			return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i), e.currTemplate.closeBtn
		},
		k = function() {
			t.magnificPopup.instance || (e = new b, e.init(), t.magnificPopup.instance = e)
		},
		E = function() {
			var t = document.createElement("p").style,
				e = ["ms", "O", "Moz", "Webkit"];
			if (void 0 !== t.transition) return !0;
			for (; e.length;) if (e.pop() + "Transition" in t) return !0;
			return !1
		};
	b.prototype = {
		constructor: b,
		init: function() {
			var i = navigator.appVersion;
			e.isIE7 = -1 !== i.indexOf("MSIE 7."), e.isIE8 = -1 !== i.indexOf("MSIE 8."), e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = E(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
		},
		open: function(i) {
			var o;
			if (i.isObj === !1) {
				e.items = i.items.toArray(), e.index = 0;
				var r, a = i.items;
				for (o = 0; o < a.length; o++) if (r = a[o], r.parsed && (r = r.el[0]), r === i.el[0]) {
					e.index = o;
					break
				}
			} else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
			if (e.isOpen) return void e.updateItemHTML();
			e.types = [], s = "", e.ev = i.mainEl && i.mainEl.length ? i.mainEl.eq(0) : n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = C("bg").on("click" + m, function() {
				e.close()
			}), e.wrap = C("wrap").attr("tabindex", -1).on("click" + m, function(t) {
				e._checkIfClose(t.target) && e.close()
			}), e.container = C("container", e.wrap)), e.contentContainer = C("content"), e.st.preloader && (e.preloader = C("preloader", e.container, e.st.tLoading));
			var l = t.magnificPopup.modules;
			for (o = 0; o < l.length; o++) {
				var c = l[o];
				c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
			}
			S("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (x(h, function(t, e, i, n) {
				i.close_replaceWith = I(n.type)
			}), s += " mfp-close-btn-in") : e.wrap.append(I())), e.st.alignTop && (s += " mfp-align-top"), e.wrap.css(e.fixedContentPos ? {
				overflow: e.st.overflowY,
				overflowX: "hidden",
				overflowY: e.st.overflowY
			} : {
				top: w.scrollTop(),
				position: "absolute"
			}), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
				height: n.height(),
				position: "absolute"
			}), e.st.enableEscapeKey && n.on("keyup" + m, function(t) {
				27 === t.keyCode && e.close()
			}), w.on("resize" + m, function() {
				e.updateSize()
			}), e.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && e.wrap.addClass(s);
			var u = e.wH = w.height(),
				d = {};
			if (e.fixedContentPos && e._hasScrollBar(u)) {
				var f = e._getScrollbarSize();
				f && (d.marginRight = f)
			}
			e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : d.overflow = "hidden");
			var v = e.st.mainClass;
			return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), S("BuildControls"), t("html").css(d), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() {
				e.content ? (e._addClassToMFP(g), e._setFocus()) : e.bgOverlay.addClass(g), n.on("focusin" + m, e._onFocusIn)
			}, 16), e.isOpen = !0, e.updateSize(u), S(p), i
		},
		close: function() {
			e.isOpen && (S(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(v), setTimeout(function() {
				e._close()
			}, e.st.removalDelay)) : e._close())
		},
		_close: function() {
			S(a);
			var i = v + " " + g + " ";
			if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
				var o = {
					marginRight: ""
				};
				e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
			}
			n.off("keyup" + m + " focusin" + m), e.ev.off(m), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), e.st.showCloseBtn && (!e.st.closeBtnInside || e.currTemplate[e.currItem.type] === !0) && e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, S(c)
		},
		updateSize: function(t) {
			if (e.isIOS) {
				var i = document.documentElement.clientWidth / window.innerWidth,
					n = window.innerHeight * i;
				e.wrap.css("height", n), e.wH = n
			} else e.wH = t || w.height();
			e.fixedContentPos || e.wrap.css("height", e.wH), S("Resize")
		},
		updateItemHTML: function() {
			var i = e.items[e.index];
			e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
			var n = i.type;
			if (S("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
				var s = e.st[n] ? e.st[n].markup : !1;
				S("FirstMarkupParse", s), e.currTemplate[n] = s ? t(s) : !0
			}
			o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
			var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
			e.appendContent(r, n), i.preloaded = !0, S(d, i), o = i.type, e.container.prepend(e.contentContainer), S("AfterChange")
		},
		appendContent: function(t, i) {
			e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(I()) : e.content = t : e.content = "", S(u), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
		},
		parseEl: function(i) {
			var n, o = e.items[i];
			if (o.tagName ? o = {
				el: t(o)
			} : (n = o.type, o = {
				data: o,
				src: o.src
			}), o.el) {
				for (var s = e.types, r = 0; r < s.length; r++) if (o.el.hasClass("mfp-" + s[r])) {
					n = s[r];
					break
				}
				o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
			}
			return o.type = n || e.st.type || "inline", o.index = i, o.parsed = !0, e.items[i] = o, S("ElementParse", o), e.items[i]
		},
		addGroup: function(t, i) {
			var n = function(n) {
					n.mfpEl = this, e._openClick(n, t, i)
				};
			i || (i = {});
			var o = "click.magnificPopup";
			i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t, t.off(o).on(o, n)))
		},
		_openClick: function(i, n, o) {
			var s = void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick;
			if (s || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
				var r = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
				if (r) if (t.isFunction(r)) {
					if (!r.call(e)) return !0
				} else if (w.width() < r) return !0;
				i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), e.open(o)
			}
		},
		updateStatus: function(t, n) {
			if (e.preloader) {
				i !== t && e.container.removeClass("mfp-s-" + i), !n && "loading" === t && (n = e.st.tLoading);
				var o = {
					status: t,
					text: n
				};
				S("UpdateStatus", o), t = o.status, n = o.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) {
					t.stopImmediatePropagation()
				}), e.container.addClass("mfp-s-" + t), i = t
			}
		},
		_checkIfClose: function(i) {
			if (!t(i).hasClass(y)) {
				var n = e.st.closeOnContentClick,
					o = e.st.closeOnBgClick;
				if (n && o) return !0;
				if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
				if (i === e.content[0] || t.contains(e.content[0], i)) {
					if (n) return !0
				} else if (o && t.contains(document, i)) return !0;
				return !1
			}
		},
		_addClassToMFP: function(t) {
			e.bgOverlay.addClass(t), e.wrap.addClass(t)
		},
		_removeClassFromMFP: function(t) {
			this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
		},
		_hasScrollBar: function(t) {
			return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || w.height())
		},
		_setFocus: function() {
			(e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
		},
		_onFocusIn: function(i) {
			return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
		},
		_parseMarkup: function(e, i, n) {
			var o;
			n.data && (i = t.extend(n.data, i)), S(h, [e, i, n]), t.each(i, function(t, i) {
				if (void 0 === i || i === !1) return !0;
				if (o = t.split("_"), o.length > 1) {
					var n = e.find(m + "-" + o[0]);
					if (n.length > 0) {
						var s = o[1];
						"replaceWith" === s ? n[0] !== i[0] && n.replaceWith(i) : "img" === s ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(o[1], i)
					}
				} else e.find(m + "-" + t).html(i)
			})
		},
		_getScrollbarSize: function() {
			if (void 0 === e.scrollbarSize) {
				var t = document.createElement("div");
				t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
			}
			return e.scrollbarSize
		}
	}, t.magnificPopup = {
		instance: null,
		proto: b.prototype,
		modules: [],
		open: function(e, i) {
			return k(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e)
		},
		close: function() {
			return t.magnificPopup.instance && t.magnificPopup.instance.close()
		},
		registerModule: function(e, i) {
			i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
		},
		defaults: {
			disableOn: 0,
			key: null,
			midClick: !1,
			mainClass: "",
			preloader: !0,
			focus: "",
			closeOnContentClick: !1,
			closeOnBgClick: !0,
			closeBtnInside: !0,
			showCloseBtn: !0,
			enableEscapeKey: !0,
			modal: !1,
			alignTop: !1,
			removalDelay: 0,
			prependTo: null,
			fixedContentPos: "auto",
			fixedBgPos: "auto",
			overflowY: "auto",
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading..."
		}
	}, t.fn.magnificPopup = function(i) {
		k();
		var n = t(this);
		if ("string" == typeof i) if ("open" === i) {
			var o, s = _ ? n.data("magnificPopup") : n[0].magnificPopup,
				r = parseInt(arguments[1], 10) || 0;
			s.items ? o = s.items[r] : (o = n, s.delegate && (o = o.find(s.delegate)), o = o.eq(r)), e._openClick({
				mfpEl: o
			}, n, s)
		} else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
		else i = t.extend(!0, {}, i), _ ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
		return n
	};
	var z, T = function(i) {
			if (i.data && void 0 !== i.data.title) return i.data.title;
			var n = e.st.image.titleSrc;
			if (n) {
				if (t.isFunction(n)) return n.call(e, i);
				if (i.el) return i.el.attr(n) || ""
			}
			return ""
		};
	t.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function() {
				var i = e.st.image,
					n = ".image";
				e.types.push("image"), x(p + n, function() {
					"image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
				}), x(a + n, function() {
					i.cursor && t(document.body).removeClass(i.cursor), w.off("resize" + m)
				}), x("Resize" + n, e.resizeImage), e.isLowIE && x("AfterChange", e.resizeImage)
			},
			resizeImage: function() {
				var t = e.currItem;
				if (t && t.img && e.st.image.verticalFit) {
					var i = 0;
					e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
				}
			},
			_onImageHasSize: function(t) {
				t.img && (t.hasSize = !0, z && clearInterval(z), t.isCheckingImgSize = !1, S("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
			},
			findImageSize: function(t) {
				var i = 0,
					n = t.img[0],
					o = function(s) {
						z && clearInterval(z), z = setInterval(function() {
							return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(z), i++, 3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500), void 0)
						}, s)
					};
				o(1)
			},
			getImage: function(i, n) {
				var o = 0,
					s = function() {
						i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, S("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(s, 100) : r()))
					},
					r = function() {
						i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
					},
					a = e.st.image,
					l = n.find(".mfp-img");
				if (l.length) {
					var c = document.createElement("img");
					c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", s).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), c = i.img[0], c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
				}
				return e._parseMarkup(n, {
					title: T(i),
					img_replaceWith: i.img
				}, i), e.resizeImage(), i.hasSize ? (z && clearInterval(z), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
			}
		}
	});
	var M, P = function() {
			return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), M
		};
	t.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function(t) {
				return t.is("img") ? t : t.find("img")
			}
		},
		proto: {
			initZoom: function() {
				var t, i = e.st.zoom,
					n = ".zoom";
				if (i.enabled && e.supportsTransition) {
					var o, s, r = i.duration,
						c = function(t) {
							var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
								n = "all " + i.duration / 1e3 + "s " + i.easing,
								o = {
									position: "fixed",
									zIndex: 9999,
									left: 0,
									top: 0,
									"-webkit-backface-visibility": "hidden"
								},
								s = "transition";
							return o["-webkit-" + s] = o["-moz-" + s] = o["-o-" + s] = o[s] = n, e.css(o), e
						},
						u = function() {
							e.content.css("visibility", "visible")
						};
					x("BuildControls" + n, function() {
						if (e._allowZoom()) {
							if (clearTimeout(o), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void u();
							s = c(t), s.css(e._getOffset()), e.wrap.append(s), o = setTimeout(function() {
								s.css(e._getOffset(!0)), o = setTimeout(function() {
									u(), setTimeout(function() {
										s.remove(), t = s = null, S("ZoomAnimationEnded")
									}, 16)
								}, r)
							}, 16)
						}
					}), x(l + n, function() {
						if (e._allowZoom()) {
							if (clearTimeout(o), e.st.removalDelay = r, !t) {
								if (t = e._getItemToZoom(), !t) return;
								s = c(t)
							}
							s.css(e._getOffset(!0)), e.wrap.append(s), e.content.css("visibility", "hidden"), setTimeout(function() {
								s.css(e._getOffset())
							}, 16)
						}
					}), x(a + n, function() {
						e._allowZoom() && (u(), s && s.remove(), t = null)
					})
				}
			},
			_allowZoom: function() {
				return "image" === e.currItem.type
			},
			_getItemToZoom: function() {
				return e.currItem.hasSize ? e.currItem.img : !1
			},
			_getOffset: function(i) {
				var n;
				n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
				var o = n.offset(),
					s = parseInt(n.css("padding-top"), 10),
					r = parseInt(n.css("padding-bottom"), 10);
				o.top -= t(window).scrollTop() - s;
				var a = {
					width: n.width(),
					height: (_ ? n.innerHeight() : n[0].offsetHeight) - r - s
				};
				return P() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
			}
		}
	});
	var A = "iframe",
		O = "//about:blank",
		L = function(t) {
			if (e.currTemplate[A]) {
				var i = e.currTemplate[A].find("iframe");
				i.length && (t || (i[0].src = O), e.isIE8 && i.css("display", t ? "block" : "none"))
			}
		};
	t.magnificPopup.registerModule(A, {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function() {
				e.types.push(A), x("BeforeChange", function(t, e, i) {
					e !== i && (e === A ? L() : i === A && L(!0))
				}), x(a + "." + A, function() {
					L()
				})
			},
			getIframe: function(i, n) {
				var o = i.src,
					s = e.st.iframe;
				t.each(s.patterns, function() {
					return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
				});
				var r = {};
				return s.srcAction && (r[s.srcAction] = o), e._parseMarkup(n, r, i), e.updateStatus("ready"), n
			}
		}
	});
	var j = function(t) {
			var i = e.items.length;
			return t > i - 1 ? t - i : 0 > t ? i + t : t
		},
		$ = function(t, e, i) {
			return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
		};
	t.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function() {
				var i = e.st.gallery,
					o = ".mfp-gallery",
					r = Boolean(t.fn.mfpFastClick);
				return e.direction = !0, i && i.enabled ? (s += " mfp-gallery", x(p + o, function() {
					i.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", function() {
						return e.items.length > 1 ? (e.next(), !1) : void 0
					}), n.on("keydown" + o, function(t) {
						37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
					})
				}), x("UpdateStatus" + o, function(t, i) {
					i.text && (i.text = $(i.text, e.currItem.index, e.items.length))
				}), x(h + o, function(t, n, o, s) {
					var r = e.items.length;
					o.counter = r > 1 ? $(i.tCounter, s.index, r) : ""
				}), x("BuildControls" + o, function() {
					if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
						var n = i.arrowMarkup,
							o = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(y),
							s = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(y),
							a = r ? "mfpFastClick" : "click";
						o[a](function() {
							e.prev()
						}), s[a](function() {
							e.next()
						}), e.isIE7 && (C("b", o[0], !1, !0), C("a", o[0], !1, !0), C("b", s[0], !1, !0), C("a", s[0], !1, !0)), e.container.append(o.add(s))
					}
				}), x(d + o, function() {
					e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
						e.preloadNearbyImages(), e._preloadTimeout = null
					}, 16)
				}), x(a + o, function() {
					n.off(o), e.wrap.off("click" + o), e.arrowLeft && r && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null
				}), void 0) : !1
			},
			next: function() {
				e.direction = !0, e.index = j(e.index + 1), e.updateItemHTML()
			},
			prev: function() {
				e.direction = !1, e.index = j(e.index - 1), e.updateItemHTML()
			},
			goTo: function(t) {
				e.direction = t >= e.index, e.index = t, e.updateItemHTML()
			},
			preloadNearbyImages: function() {
				var t, i = e.st.gallery.preload,
					n = Math.min(i[0], e.items.length),
					o = Math.min(i[1], e.items.length);
				for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t);
				for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t)
			},
			_preloadItem: function(i) {
				if (i = j(i), !e.items[i].preloaded) {
					var n = e.items[i];
					n.parsed || (n = e.parseEl(i)), S("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
						n.hasSize = !0
					}).on("error.mfploader", function() {
						n.hasSize = !0, n.loadError = !0, S("LazyLoadError", n)
					}).attr("src", n.src)), n.preloaded = !0
				}
			}
		}
	}), function() {
		var e = 1e3,
			i = "ontouchstart" in window,
			n = function() {
				w.off("touchmove" + s + " touchend" + s)
			},
			o = "mfpFastClick",
			s = "." + o;
		t.fn.mfpFastClick = function(o) {
			return t(this).each(function() {
				var r, a = t(this);
				if (i) {
					var l, c, u, h, p, d;
					a.on("touchstart" + s, function(t) {
						h = !1, d = 1, p = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], c = p.clientX, u = p.clientY, w.on("touchmove" + s, function(t) {
							p = t.originalEvent ? t.originalEvent.touches : t.touches, d = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - u) > 10) && (h = !0, n())
						}).on("touchend" + s, function(t) {
							n(), h || d > 1 || (r = !0, t.preventDefault(), clearTimeout(l), l = setTimeout(function() {
								r = !1
							}, e), o())
						})
					})
				}
				a.on("click" + s, function() {
					r || o()
				})
			})
		}, t.fn.destroyMfpFastClick = function() {
			t(this).off("touchstart" + s + " click" + s), i && w.off("touchmove" + s + " touchend" + s)
		}
	}(), k()
}), !
function(t, e, i, n) {
	function o(e, i) {
		this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this.drag = t.extend({}, p), this.state = t.extend({}, d), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(o.Plugins, t.proxy(function(t, e) {
			this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this)
		}, this)), t.each(o.Pipe, t.proxy(function(e, i) {
			this._pipe.push({
				filter: i.filter,
				run: t.proxy(i.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}
	function s(t) {
		if (t.touches !== n) return {
			x: t.touches[0].pageX,
			y: t.touches[0].pageY
		};
		if (t.touches === n) {
			if (t.pageX !== n) return {
				x: t.pageX,
				y: t.pageY
			};
			if (t.pageX === n) return {
				x: t.clientX,
				y: t.clientY
			}
		}
	}
	function r(t) {
		var e, n, o = i.createElement("div"),
			s = t;
		for (e in s) if (n = s[e], "undefined" != typeof o.style[n]) return o = null, [n, e];
		return [!1]
	}
	function a() {
		return r(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
	}
	function l() {
		return r(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
	}
	function c() {
		return r(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
	}
	function u() {
		return "ontouchstart" in e || !! navigator.msMaxTouchPoints
	}
	function h() {
		return e.navigator.msPointerEnabled
	}
	var p, d, f;
	p = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	}, d = {
		isTouch: !1,
		isScrolling: !1,
		isSwiping: !1,
		direction: !1,
		inMotion: !1
	}, f = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	}, o.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: e,
		responsiveClass: !1,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		themeClass: "owl-theme",
		baseClass: "owl-carousel",
		itemClass: "owl-item",
		centerClass: "center",
		activeClass: "active"
	}, o.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, o.Plugins = {}, o.Pipe = [{
		filter: ["width", "items", "settings"],
		run: function(t) {
			t.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			var t = this._clones,
				e = this.$stage.children(".cloned");
			(e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			var t, e, i = this._clones,
				n = this._items,
				o = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
			for (t = 0, e = Math.abs(o / 2); e > t; t++) o > 0 ? (this.$stage.children().eq(n.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(n[i[i.length - 1]].clone().addClass("cloned")), i.push(n.length - 1 - (i.length - 1) / 2), this.$stage.prepend(n[i[i.length - 1]].clone().addClass("cloned")))
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			var t, e, i, n = this.settings.rtl ? 1 : -1,
				o = (this.width() / this.settings.items).toFixed(3),
				s = 0;
			for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, s += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : o * t) * n, this._coordinates.push(s)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			var e, i, n = (this.width() / this.settings.items).toFixed(3),
				o = {
					width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
					"padding-left": this.settings.stagePadding || "",
					"padding-right": this.settings.stagePadding || ""
				};
			if (this.$stage.css(o), o = {
				width: this.settings.autoWidth ? "auto" : n - this.settings.margin
			}, o[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
				return t > 1
			}).length > 0) for (e = 0, i = this._coordinates.length; i > e; e++) o.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(o);
			else this.$stage.children().css(o)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(t) {
			t.current && this.reset(this.$stage.children().index(t.current))
		}
	}, {
		filter: ["position"],
		run: function() {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function() {
			var t, e, i, n, o = this.settings.rtl ? 1 : -1,
				s = 2 * this.settings.stagePadding,
				r = this.coordinates(this.current()) + s,
				a = r + this.width() * o,
				l = [];
			for (i = 0, n = this._coordinates.length; n > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + s * o, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
			this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
		}
	}], o.prototype.initialize = function() {
		if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
			var e, i, o;
			if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, o = this.$element.children(i).width(), e.length && 0 >= o) return this.preloadAutoWidthImages(e), !1
		}
		this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
	}, o.prototype.setup = function() {
		var e = this.viewport(),
			i = this.options.responsive,
			n = -1,
			o = null;
		i ? (t.each(i, function(t) {
			e >= t && t > n && (n = Number(t))
		}), o = t.extend({}, this.options, i[n]), delete o.responsive, o.responsiveClass && this.$element.attr("class", function(t, e) {
			return e.replace(/\b owl-responsive-\S+/g, "")
		}).addClass("owl-responsive-" + n)) : o = t.extend({}, this.options), (null === this.settings || this._breakpoint !== n) && (this.trigger("change", {
			property: {
				name: "settings",
				value: o
			}
		}), this._breakpoint = n, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		}))
	}, o.prototype.optionsLogic = function() {
		this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, o.prototype.prepare = function(e) {
		var i = this.trigger("prepare", {
			content: e
		});
		return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", {
			content: i.data
		}), i.data
	}, o.prototype.update = function() {
		for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
			return this[t]
		}, this._invalidated), o = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(o), e++;
		this._invalidated = {}
	}, o.prototype.width = function(t) {
		switch (t = t || o.Width.Default) {
		case o.Width.Inner:
		case o.Width.Outer:
			return this._width;
		default:
			return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, o.prototype.refresh = function() {
		return 0 === this._items.length ? !1 : ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0)
	}, o.prototype.eventsCall = function() {
		this.e._onDragStart = t.proxy(function(t) {
			this.onDragStart(t)
		}, this), this.e._onDragMove = t.proxy(function(t) {
			this.onDragMove(t)
		}, this), this.e._onDragEnd = t.proxy(function(t) {
			this.onDragEnd(t)
		}, this), this.e._onResize = t.proxy(function(t) {
			this.onResize(t)
		}, this), this.e._transitionEnd = t.proxy(function(t) {
			this.transitionEnd(t)
		}, this), this.e._preventClick = t.proxy(function(t) {
			this.preventClick(t)
		}, this)
	}, o.prototype.onThrottledResize = function() {
		e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
	}, o.prototype.onResize = function() {
		return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
	}, o.prototype.eventsRouter = function(t) {
		var e = t.type;
		"mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t)
	}, o.prototype.internalEvents = function() {
		var i = (u(), h());
		this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) {
			this.eventsRouter(t)
		}, this)), this.$stage.on("dragstart", function() {
			return !1
		}), this.$stage.get(0).onselectstart = function() {
			return !1
		}) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) {
			this.eventsRouter(t)
		}, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this))
	}, o.prototype.onDragStart = function(n) {
		var o, r, a, l;
		if (o = n.originalEvent || n || e.event, 3 === o.which || this.state.isTouch) return !1;
		if ("mousedown" === o.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, r = s(o).x, a = s(o).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
		else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
		this.drag.startX = r - this.drag.offsetX, this.drag.startY = a - this.drag.offsetY, this.drag.start = r - this.drag.startX, this.drag.targetEl = o.target || o.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) {
			this.eventsRouter(t)
		}, this))
	}, o.prototype.onDragMove = function(t) {
		var i, o, r, a, l, c;
		this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, o = s(i).x, r = s(i).y, this.drag.currentX = o - this.drag.startX, this.drag.currentY = r - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (a = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), c = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, a + c), l + c)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== n ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
	}, o.prototype.onDragEnd = function(e) {
		var n, o, s;
		if (this.state.isTouch) {
			if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
			this.drag.endTime = (new Date).getTime(), n = this.drag.endTime - this.drag.startTime, o = Math.abs(this.drag.distance), (o > 3 || n > 300) && this.removeClick(this.drag.targetEl), s = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(s), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(s) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents")
		}
	}, o.prototype.removeClick = function(i) {
		this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() {
			t(i).off("click.preventClick")
		}, 300)
	}, o.prototype.preventClick = function(e) {
		e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick")
	}, o.prototype.getTransformProperty = function() {
		var t, i;
		return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12]
	}, o.prototype.closest = function(e) {
		var i = -1,
			n = 30,
			o = this.width(),
			s = this.coordinates();
		return this.settings.freeDrag || t.each(s, t.proxy(function(t, r) {
			return e > r - n && r + n > e ? i = t : this.op(e, "<", r) && this.op(e, ">", s[t + 1] || r - o) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i
		}, this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (i = e = this.maximum())), i
	}, o.prototype.animate = function(e) {
		this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
			transform: "translate3d(" + e + "px,0px, 0px)",
			transition: this.speed() / 1e3 + "s"
		}) : this.state.isTouch ? this.$stage.css({
			left: e + "px"
		}) : this.$stage.animate({
			left: e
		}, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() {
			this.state.inMotion && this.transitionEnd()
		}, this))
	}, o.prototype.current = function(t) {
		if (t === n) return this._current;
		if (0 === this._items.length) return n;
		if (t = this.normalize(t), this._current !== t) {
			var e = this.trigger("change", {
				property: {
					name: "position",
					value: t
				}
			});
			e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, o.prototype.invalidate = function(t) {
		this._invalidated[t] = !0
	}, o.prototype.reset = function(t) {
		t = this.normalize(t), t !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
	}, o.prototype.normalize = function(e, i) {
		var o = i ? this._items.length : this._items.length + this._clones.length;
		return !t.isNumeric(e) || 1 > o ? n : e = this._clones.length ? (e % o + o) % o : Math.max(this.minimum(i), Math.min(this.maximum(i), e))
	}, o.prototype.relative = function(t) {
		return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0)
	}, o.prototype.maximum = function(t) {
		var e, i, n, o = 0,
			s = this.settings;
		if (t) return this._items.length - 1;
		if (!s.loop && s.center) e = this._items.length - 1;
		else if (s.loop || s.center) if (s.loop || s.center) e = this._items.length + s.items;
		else {
			if (!s.autoWidth && !s.merge) throw "Can not detect maximum absolute position.";
			for (revert = s.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
			(n = this.coordinates(o)) && !(n * revert >= i);) e = ++o
		} else e = this._items.length - s.items;
		return e
	}, o.prototype.minimum = function(t) {
		return t ? 0 : this._clones.length / 2
	}, o.prototype.items = function(t) {
		return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
	}, o.prototype.mergers = function(t) {
		return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
	}, o.prototype.clones = function(e) {
		var i = this._clones.length / 2,
			o = i + this._items.length,
			s = function(t) {
				return t % 2 === 0 ? o + t / 2 : i - (t + 1) / 2
			};
		return e === n ? t.map(this._clones, function(t, e) {
			return s(e)
		}) : t.map(this._clones, function(t, i) {
			return t === e ? s(i) : null
		})
	}, o.prototype.speed = function(t) {
		return t !== n && (this._speed = t), this._speed
	}, o.prototype.coordinates = function(e) {
		var i = null;
		return e === n ? t.map(this._coordinates, t.proxy(function(t, e) {
			return this.coordinates(e)
		}, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i)
	}, o.prototype.duration = function(t, e, i) {
		return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
	}, o.prototype.to = function(i, n) {
		if (this.settings.loop) {
			var o = i - this.relative(this.current()),
				s = this.current(),
				r = this.current(),
				a = this.current() + o,
				l = 0 > r - a ? !0 : !1,
				c = this._clones.length + this._items.length;
			a < this.settings.items && l === !1 ? (s = r + this._items.length, this.reset(s)) : a >= c - this.settings.items && l === !0 && (s = r - this._items.length, this.reset(s)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() {
				this.speed(this.duration(this.current(), s + o, n)), this.current(s + o), this.update()
			}, this), 30)
		} else this.speed(this.duration(this.current(), i, n)), this.current(i), this.update()
	}, o.prototype.next = function(t) {
		t = t || !1, this.to(this.relative(this.current()) + 1, t)
	}, o.prototype.prev = function(t) {
		t = t || !1, this.to(this.relative(this.current()) - 1, t)
	}, o.prototype.transitionEnd = function(t) {
		return t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
	}, o.prototype.viewport = function() {
		var n;
		if (this.options.responsiveBaseElement !== e) n = t(this.options.responsiveBaseElement).width();
		else if (e.innerWidth) n = e.innerWidth;
		else {
			if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
			n = i.documentElement.clientWidth
		}
		return n
	}, o.prototype.replace = function(e) {
		this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
			return 1 === this.nodeType
		}).each(t.proxy(function(t, e) {
			e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, o.prototype.add = function(t, e) {
		e = e === n ? this._items.length : this.normalize(e, !0), this.trigger("add", {
			content: t,
			position: e
		}), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
			content: t,
			position: e
		})
	}, o.prototype.remove = function(t) {
		t = this.normalize(t, !0), t !== n && (this.trigger("remove", {
			content: this._items[t],
			position: t
		}), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: t
		}))
	}, o.prototype.addTriggerableEvents = function() {
		var e = t.proxy(function(e, i) {
			return t.proxy(function(t) {
				t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i]))
			}, this)
		}, this);
		t.each({
			next: this.next,
			prev: this.prev,
			to: this.to,
			destroy: this.destroy,
			refresh: this.refresh,
			replace: this.replace,
			add: this.add,
			remove: this.remove
		}, t.proxy(function(t, i) {
			this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel"))
		}, this))
	}, o.prototype.watchVisibility = function() {
		function i(t) {
			return t.offsetWidth > 0 && t.offsetHeight > 0
		}
		function n() {
			i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile))
		}
		i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(n, this), 500))
	}, o.prototype.preloadAutoWidthImages = function(e) {
		var i, n, o, s;
		i = 0, n = this, e.each(function(r, a) {
			o = t(a), s = new Image, s.onload = function() {
				i++, o.attr("src", s.src), o.css("opacity", 1), i >= e.length && (n.state.imagesLoaded = !0, n.initialize())
			}, s.src = o.attr("src") || o.attr("data-src") || o.attr("data-src-retina")
		})
	}, o.prototype.destroy = function() {
		this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		for (var n in this._plugins) this._plugins[n].destroy();
		(this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
			return !1
		})), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
	}, o.prototype.op = function(t, e, i) {
		var n = this.settings.rtl;
		switch (e) {
		case "<":
			return n ? t > i : i > t;
		case ">":
			return n ? i > t : t > i;
		case ">=":
			return n ? i >= t : t >= i;
		case "<=":
			return n ? t >= i : i >= t
		}
	}, o.prototype.on = function(t, e, i, n) {
		t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
	}, o.prototype.off = function(t, e, i, n) {
		t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
	}, o.prototype.trigger = function(e, i, n) {
		var o = {
			item: {
				count: this._items.length,
				index: this.current()
			}
		},
			s = t.camelCase(t.grep(["on", e, n], function(t) {
				return t
			}).join("-").toLowerCase()),
			r = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
				relatedTarget: this
			}, o, i));
		return this._supress[e] || (t.each(this._plugins, function(t, e) {
			e.onTrigger && e.onTrigger(r)
		}), this.$element.trigger(r), this.settings && "function" == typeof this.settings[s] && this.settings[s].apply(this, r)), r
	}, o.prototype.suppress = function(e) {
		t.each(e, t.proxy(function(t, e) {
			this._supress[e] = !0
		}, this))
	}, o.prototype.release = function(e) {
		t.each(e, t.proxy(function(t, e) {
			delete this._supress[e]
		}, this))
	}, o.prototype.browserSupport = function() {
		if (this.support3d = c(), this.support3d) {
			this.transformVendor = l();
			var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
			this.transitionEndVendor = t[a()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
		}
		this.state.orientation = e.orientation
	}, t.fn.owlCarousel = function(e) {
		return this.each(function() {
			t(this).data("owlCarousel") || t(this).data("owlCarousel", new o(this, e))
		})
	}, t.fn.owlCarousel.Constructor = o
}(window.Zepto || window.jQuery, window, document), function(t, e) {
	var i = function(e) {
			this._core = e, this._loaded = [], this._handlers = {
				"initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
					if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, o = i.center && -1 * n || 0, s = (e.property && e.property.value || this._core.current()) + o, r = this._core.clones().length, a = t.proxy(function(t, e) {
						this.load(e)
					}, this); o++ < n;) this.load(r / 2 + this._core.relative(s)), r && t.each(this._core.clones(this._core.relative(s++)), a)
				}, this)
			}, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
	i.Defaults = {
		lazyLoad: !1
	}, i.prototype.load = function(i) {
		var n = this._core.$stage.children().eq(i),
			o = n && n.find(".owl-lazy");
		!o || t.inArray(n.get(0), this._loaded) > -1 || (o.each(t.proxy(function(i, n) {
			var o, s = t(n),
				r = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
			this._core.trigger("load", {
				element: s,
				url: r
			}, "lazy"), s.is("img") ? s.one("load.owl.lazy", t.proxy(function() {
				s.css("opacity", 1), this._core.trigger("loaded", {
					element: s,
					url: r
				}, "lazy")
			}, this)).attr("src", r) : (o = new Image, o.onload = t.proxy(function() {
				s.css({
					"background-image": "url(" + r + ")",
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: s,
					url: r
				}, "lazy")
			}, this), o.src = r)
		}, this)), this._loaded.push(n.get(0)))
	}, i.prototype.destroy = function() {
		var t, e;
		for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
		for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document), function(t) {
	var e = function(i) {
			this._core = i, this._handlers = {
				"initialized.owl.carousel": t.proxy(function() {
					this._core.settings.autoHeight && this.update()
				}, this),
				"changed.owl.carousel": t.proxy(function(t) {
					this._core.settings.autoHeight && "position" == t.property.name && this.update()
				}, this),
				"loaded.owl.lazy": t.proxy(function(t) {
					this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
				}, this)
			}, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
	e.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, e.prototype.update = function() {
		this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
	}, e.prototype.destroy = function() {
		var t, e;
		for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function(t, e, i) {
	var n = function(e) {
			this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
				"resize.owl.carousel": t.proxy(function(t) {
					this._core.settings.video && !this.isInFullScreen() && t.preventDefault()
				}, this),
				"refresh.owl.carousel changed.owl.carousel": t.proxy(function() {
					this._playing && this.stop()
				}, this),
				"prepared.owl.carousel": t.proxy(function(e) {
					var i = t(e.content).find(".owl-video");
					i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
				}, this)
			}, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
				this.play(t)
			}, this))
		};
	n.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, n.prototype.fetch = function(t, e) {
		var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
			n = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
			o = t.attr("data-width") || this._core.settings.videoWidth,
			s = t.attr("data-height") || this._core.settings.videoHeight,
			r = t.attr("href");
		if (!r) throw new Error("Missing video URL.");
		if (n = r.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
		else {
			if (!(n[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
			i = "vimeo"
		}
		n = n[6], this._videos[r] = {
			type: i,
			id: n,
			width: o,
			height: s
		}, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
	}, n.prototype.thumbnail = function(e, i) {
		var n, o, s, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
			a = e.find("img"),
			l = "src",
			c = "",
			u = this._core.settings,
			h = function(t) {
				o = '<div class="owl-video-play-icon"></div>', n = u.lazyLoad ? '<div class="owl-video-tn ' + c + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(o)
			};
		return e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", c = "owl-lazy"), a.length ? (h(a.attr(l)), a.remove(), !1) : void("youtube" === i.type ? (s = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", h(s)) : "vimeo" === i.type && t.ajax({
			type: "GET",
			url: "http://vimeo.com/api/v2/video/" + i.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(t) {
				s = t[0].thumbnail_large, h(s)
			}
		}))
	}, n.prototype.stop = function() {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
	}, n.prototype.play = function(e) {
		this._core.trigger("play", null, "video"), this._playing && this.stop();
		var i, n, o = t(e.target || e.srcElement),
			s = o.closest("." + this._core.settings.itemClass),
			r = this._videos[s.attr("data-video")],
			a = r.width || "100%",
			l = r.height || this._core.$stage.height();
		"youtube" === r.type ? i = '<iframe width="' + a + '" height="' + l + '" src="http://www.youtube.com/embed/' + r.id + "?autoplay=1&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type && (i = '<iframe src="http://player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + a + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), s.addClass("owl-video-playing"), this._playing = s, n = t('<div style="height:' + l + "px; width:" + a + 'px" class="owl-video-frame">' + i + "</div>"), o.after(n)
	}, n.prototype.isInFullScreen = function() {
		var n = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
		return n && t(n).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), n && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0
	}, n.prototype.destroy = function() {
		var t, e;
		this._core.$element.off("click.owl.video");
		for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document), function(t, e, i, n) {
	var o = function(e) {
			this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
				"change.owl.carousel": t.proxy(function(t) {
					"position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
				}, this),
				"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
					this.swapping = "translated" == t.type
				}, this),
				"translate.owl.carousel": t.proxy(function() {
					this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
				}, this)
			}, this.core.$element.on(this.handlers)
		};
	o.Defaults = {
		animateOut: !1,
		animateIn: !1
	}, o.prototype.swap = function() {
		if (1 === this.core.settings.items && this.core.support3d) {
			this.core.speed(0);
			var e, i = t.proxy(this.clear, this),
				n = this.core.$stage.children().eq(this.previous),
				o = this.core.$stage.children().eq(this.next),
				s = this.core.settings.animateIn,
				r = this.core.settings.animateOut;
			this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.css({
				left: e + "px"
			}).addClass("animated owl-animated-out").addClass(r).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), s && o.addClass("animated owl-animated-in").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i))
		}
	}, o.prototype.clear = function(e) {
		t(e.target).css({
			left: ""
		}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
	}, o.prototype.destroy = function() {
		var t, e;
		for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
		for (e in Object.getOwnPropertyNames(this))"function" != typeof this[e] && (this[e] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Animate = o
}(window.Zepto || window.jQuery, window, document), function(t, e, i) {
	var n = function(e) {
			this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.handlers = {
				"translated.owl.carousel refreshed.owl.carousel": t.proxy(function() {
					this.autoplay()
				}, this),
				"play.owl.autoplay": t.proxy(function(t, e, i) {
					this.play(e, i)
				}, this),
				"stop.owl.autoplay": t.proxy(function() {
					this.stop()
				}, this),
				"mouseover.owl.autoplay": t.proxy(function() {
					this.core.settings.autoplayHoverPause && this.pause()
				}, this),
				"mouseleave.owl.autoplay": t.proxy(function() {
					this.core.settings.autoplayHoverPause && this.autoplay()
				}, this)
			}, this.core.$element.on(this.handlers)
		};
	n.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, n.prototype.autoplay = function() {
		this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() {
			this.play()
		}, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval)
	}, n.prototype.play = function() {
		return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
	}, n.prototype.stop = function() {
		e.clearInterval(this.interval)
	}, n.prototype.pause = function() {
		e.clearInterval(this.interval)
	}, n.prototype.destroy = function() {
		var t, i;
		e.clearInterval(this.interval);
		for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
		for (i in Object.getOwnPropertyNames(this))"function" != typeof this[i] && (this[i] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document), function(t) {
	"use strict";
	var e = function(i) {
			this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
				next: this._core.next,
				prev: this._core.prev,
				to: this._core.to
			}, this._handlers = {
				"prepared.owl.carousel": t.proxy(function(e) {
					this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
				}, this),
				"add.owl.carousel": t.proxy(function(e) {
					this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
				}, this),
				"remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) {
					this._core.settings.dotsData && this._templates.splice(t.position, 1)
				}, this),
				"change.owl.carousel": t.proxy(function(t) {
					if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
						var e = this._core.current(),
							i = this._core.maximum(),
							n = this._core.minimum();
						t.data = t.property.value > i ? e >= i ? n : i : t.property.value < n ? i : t.property.value
					}
				}, this),
				"changed.owl.carousel": t.proxy(function(t) {
					"position" == t.property.name && this.draw()
				}, this),
				"refreshed.owl.carousel": t.proxy(function() {
					this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
				}, this)
			}, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
		};
	e.Defaults = {
		nav: !1,
		navRewind: !0,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotData: !1,
		dotsSpeed: !1,
		dotsContainer: !1,
		controlsClass: "owl-controls"
	}, e.prototype.initialize = function() {
		var e, i, n = this._core.settings;
		n.dotsData || (this._templates = [t("<div>").addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), n.navContainer && n.dotsContainer || (this._controls.$container = t("<div>").addClass(n.controlsClass).appendTo(this.$element)), this._controls.$indicators = n.dotsContainer ? t(n.dotsContainer) : t("<div>").hide().addClass(n.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
			var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
			e.preventDefault(), this.to(i, n.dotsSpeed)
		}, this)), e = n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + n.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(n.navClass[0]).html(n.navText[0]).hide().prependTo(e).on("click", t.proxy(function() {
			this.prev(n.navSpeed)
		}, this)), this._controls.$next.addClass(n.navClass[1]).html(n.navText[1]).hide().appendTo(e).on("click", t.proxy(function() {
			this.next(n.navSpeed)
		}, this));
		for (i in this._overrides) this._core[i] = t.proxy(this[i], this)
	}, e.prototype.destroy = function() {
		var t, e, i, n;
		for (t in this._handlers) this.$element.off(t, this._handlers[t]);
		for (e in this._controls) this._controls[e].remove();
		for (n in this.overides) this._core[n] = this._overrides[n];
		for (i in Object.getOwnPropertyNames(this))"function" != typeof this[i] && (this[i] = null)
	}, e.prototype.update = function() {
		var t, e, i, n = this._core.settings,
			o = this._core.clones().length / 2,
			s = o + this._core.items().length,
			r = n.center || n.autoWidth || n.dotData ? 1 : n.dotsEach || n.items;
		if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy) for (this._pages = [], t = o, e = 0, i = 0; s > t; t++)(e >= r || 0 === e) && (this._pages.push({
			start: t - o,
			end: t - o + r - 1
		}), e = 0, ++i), e += this._core.mergers(this._core.relative(t))
	}, e.prototype.draw = function() {
		var e, i, n = "",
			o = this._core.settings,
			s = (this._core.$stage.children(), this._core.relative(this._core.current()));
		if (!o.nav || o.loop || o.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= s), this._controls.$next.toggleClass("disabled", s >= this._core.maximum())), this._controls.$previous.toggle(o.nav), this._controls.$next.toggle(o.nav), o.dots) {
			if (e = this._pages.length - this._controls.$indicators.children().length, o.dotData && 0 !== e) {
				for (i = 0; i < this._controls.$indicators.children().length; i++) n += this._templates[this._core.relative(i)];
				this._controls.$indicators.html(n)
			} else e > 0 ? (n = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(n)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
			this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active")
		}
		this._controls.$indicators.toggle(o.dots)
	}, e.prototype.onTrigger = function(e) {
		var i = this._core.settings;
		e.page = {
			index: t.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items)
		}
	}, e.prototype.current = function() {
		var e = this._core.relative(this._core.current());
		return t.grep(this._pages, function(t) {
			return t.start <= e && t.end >= e
		}).pop()
	}, e.prototype.getPosition = function(e) {
		var i, n, o = this._core.settings;
		return "page" == o.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += o.slideBy : i -= o.slideBy), i
	}, e.prototype.next = function(e) {
		t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
	}, e.prototype.prev = function(e) {
		t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
	}, e.prototype.to = function(e, i, n) {
		var o;
		n ? t.proxy(this._overrides.to, this._core)(e, i) : (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, i))
	}, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function(t, e) {
	"use strict";
	var i = function(n) {
			this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
				"initialized.owl.carousel": t.proxy(function() {
					"URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
				}, this),
				"prepared.owl.carousel": t.proxy(function(e) {
					var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
					this._hashes[i] = e.content
				}, this)
			}, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
				var t = e.location.hash.substring(1),
					i = this._core.$stage.children(),
					n = this._hashes[t] && i.index(this._hashes[t]) || 0;
				return t ? void this._core.to(n, !1, !0) : !1
			}, this))
		};
	i.Defaults = {
		URLhashListener: !1
	}, i.prototype.destroy = function() {
		var i, n;
		t(e).off("hashchange.owl.navigation");
		for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
		for (n in Object.getOwnPropertyNames(this))"function" != typeof this[n] && (this[n] = null)
	}, t.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document), function() {
	var t, e, i, n, o, s, r, a, l, c, u, h, p, d, f, m = {}.hasOwnProperty,
		g = function(t, e) {
			function i() {
				this.constructor = t
			}
			for (var n in e) m.call(e, n) && (t[n] = e[n]);
			return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
		};
	!
	function() {
		var t, e, i, n, o, s, r;
		for (o = ["ms", "moz", "webkit", "o"], s = 0, r = o.length; r > s && (n = o[s], !window.requestAnimationFrame); s++) window.requestAnimationFrame = window[n + "RequestAnimationFrame"], window.cancelAnimationFrame = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"];
		return t = null, i = 0, e = {}, requestAnimationFrame ? window.cancelAnimationFrame ? void 0 : (t = window.requestAnimationFrame, window.requestAnimationFrame = function(n, o) {
			var s;
			return s = ++i, t(function() {
				return e[s] ? void 0 : n()
			}, o), s
		}, window.cancelAnimationFrame = function(t) {
			return e[t] = !0
		}) : (window.requestAnimationFrame = function(t) {
			var e, i, n, o;
			return e = (new Date).getTime(), o = Math.max(0, 16 - (e - n)), i = window.setTimeout(function() {
				return t(e + o)
			}, o), n = e + o, i
		}, window.cancelAnimationFrame = function(t) {
			return clearTimeout(t)
		})
	}(), String.prototype.hashCode = function() {
		var t, e, i, n, o;
		if (e = 0, 0 === this.length) return e;
		for (i = n = 0, o = this.length; o >= 0 ? o > n : n > o; i = o >= 0 ? ++n : --n) t = this.charCodeAt(i), e = (e << 5) - e + t, e &= e;
		return e
	}, d = function(t) {
		var e, i;
		for (e = Math.floor(t / 3600), i = Math.floor((t - 3600 * e) / 60), t -= 3600 * e + 60 * i, t += "", i += ""; i.length < 2;) i = "0" + i;
		for (; t.length < 2;) t = "0" + t;
		return e = e ? e + ":" : "", e + i + ":" + t
	}, h = function(t) {
		return u(t.toFixed(0))
	}, f = function(t, e) {
		var i, n;
		for (i in e) m.call(e, i) && (n = e[i], t[i] = n);
		return t
	}, p = function(t, e) {
		var i, n, o;
		n = {};
		for (i in t) m.call(t, i) && (o = t[i], n[i] = o);
		for (i in e) m.call(e, i) && (o = e[i], n[i] = o);
		return n
	}, u = function(t) {
		var e, i, n, o;
		for (t += "", i = t.split("."), n = i[0], o = "", i.length > 1 && (o = "." + i[1]), e = /(\d+)(\d{3})/; e.test(n);) n = n.replace(e, "$1,$2");
		return n + o
	}, c = function() {
		function t(t, e) {
			null == t && (t = !0), this.clear = null != e ? e : !0, t && AnimationUpdater.add(this)
		}
		return t.prototype.animationSpeed = 32, t.prototype.update = function(t) {
			var e;
			return null == t && (t = !1), t || this.displayedValue !== this.value ? (this.ctx && this.clear && this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), e = this.value - this.displayedValue, this.displayedValue = Math.abs(e / this.animationSpeed) <= .001 ? this.value : this.displayedValue + e / this.animationSpeed, this.render(), !0) : !1
		}, t
	}(), o = function(t) {
		function e() {
			return e.__super__.constructor.apply(this, arguments)
		}
		return g(e, t), e.prototype.setTextField = function(t) {
			return this.textField = t instanceof l ? t : new l(t)
		}, e.prototype.setMinValue = function(t, e) {
			var i, n, o, s, r;
			if (this.minValue = t, null == e && (e = !0), e) {
				for (this.displayedValue = this.minValue, s = this.gp || [], r = [], n = 0, o = s.length; o > n; n++) i = s[n], r.push(i.displayedValue = this.minValue);
				return r
			}
		}, e.prototype.setOptions = function(t) {
			return null == t && (t = null), this.options = p(this.options, t), this.textField && (this.textField.el.style.fontSize = t.fontSize + "px"), this
		}, e
	}(c), l = function() {
		function t(t) {
			this.el = t
		}
		return t.prototype.render = function(t) {
			return this.el.innerHTML = h(t.displayedValue)
		}, t
	}(), t = function(t) {
		function e(t, e) {
			this.elem = t, this.text = null != e ? e : !1, this.value = 1 * this.elem.innerHTML, this.text && (this.value = 0)
		}
		return g(e, t), e.prototype.displayedValue = 0, e.prototype.value = 0, e.prototype.setVal = function(t) {
			return this.value = 1 * t
		}, e.prototype.render = function() {
			var t;
			return t = this.text ? d(this.displayedValue.toFixed(0)) : u(h(this.displayedValue)), this.elem.innerHTML = t
		}, e
	}(c), e = {
		create: function(e) {
			var i, n, o, s;
			for (n = [], o = 0, s = e.length; s > o; o++) i = e[o], n.push(new t(i));
			return n
		}
	}, a = function(t) {
		function e(t) {
			this.gauge = t, this.ctx = this.gauge.ctx, this.canvas = this.gauge.canvas, e.__super__.constructor.call(this, !1, !1), this.setOptions()
		}
		return g(e, t), e.prototype.displayedValue = 0, e.prototype.value = 0, e.prototype.options = {
			strokeWidth: .035,
			length: .1,
			color: "#000000"
		}, e.prototype.setOptions = function(t) {
			return null == t && (t = null), f(this.options, t), this.length = this.canvas.height * this.options.length, this.strokeWidth = this.canvas.height * this.options.strokeWidth, this.maxValue = this.gauge.maxValue, this.minValue = this.gauge.minValue, this.animationSpeed = this.gauge.animationSpeed, this.options.angle = this.gauge.options.angle
		}, e.prototype.render = function() {
			var t, e, i, n, o, s, r, a, l;
			return t = this.gauge.getAngle.call(this, this.displayedValue), e = this.canvas.width / 2, i = .9 * this.canvas.height, a = Math.round(e + this.length * Math.cos(t)), l = Math.round(i + this.length * Math.sin(t)), s = Math.round(e + this.strokeWidth * Math.cos(t - Math.PI / 2)), r = Math.round(i + this.strokeWidth * Math.sin(t - Math.PI / 2)), n = Math.round(e + this.strokeWidth * Math.cos(t + Math.PI / 2)), o = Math.round(i + this.strokeWidth * Math.sin(t + Math.PI / 2)), this.ctx.fillStyle = this.options.color, this.ctx.beginPath(), this.ctx.arc(e, i, this.strokeWidth, 0, 2 * Math.PI, !0), this.ctx.fill(), this.ctx.beginPath(), this.ctx.moveTo(s, r), this.ctx.lineTo(a, l), this.ctx.lineTo(n, o), this.ctx.fill()
		}, e
	}(c), i = function() {
		function t(t) {
			this.elem = t
		}
		return t.prototype.updateValues = function(t) {
			return this.value = t[0], this.maxValue = t[1], this.avgValue = t[2], this.render()
		}, t.prototype.render = function() {
			var t, e;
			return this.textField && this.textField.text(h(this.value)), 0 === this.maxValue && (this.maxValue = 2 * this.avgValue), e = this.value / this.maxValue * 100, t = this.avgValue / this.maxValue * 100, $(".bar-value", this.elem).css({
				width: e + "%"
			}), $(".typical-value", this.elem).css({
				width: t + "%"
			})
		}, t
	}(), r = function(t) {
		function e(t) {
			this.canvas = t, e.__super__.constructor.call(this), "undefined" != typeof G_vmlCanvasManager && (this.canvas = window.G_vmlCanvasManager.initElement(this.canvas)), this.ctx = this.canvas.getContext("2d"), this.gp = [new a(this)], this.setOptions(), this.render()
		}
		return g(e, t), e.prototype.elem = null, e.prototype.value = [20], e.prototype.maxValue = 80, e.prototype.minValue = 0, e.prototype.displayedAngle = 0, e.prototype.displayedValue = 0, e.prototype.lineWidth = 40, e.prototype.paddingBottom = .1, e.prototype.options = {
			colorStart: "#6fadcf",
			colorStop: void 0,
			strokeColor: "#e0e0e0",
			pointer: {
				length: .8,
				strokeWidth: .035
			},
			angle: .15,
			lineWidth: .44,
			fontSize: 40
		}, e.prototype.setOptions = function(t) {
			var i, n, o, s;
			for (null == t && (t = null), e.__super__.setOptions.call(this, t), this.lineWidth = this.canvas.height * (1 - this.paddingBottom) * this.options.lineWidth, this.radius = this.canvas.height * (1 - this.paddingBottom) - this.lineWidth, this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.render(), s = this.gp, n = 0, o = s.length; o > n; n++) i = s[n], i.setOptions(this.options.pointer), i.render();
			return this
		}, e.prototype.set = function(t) {
			var e, i, n, o, s, r;
			if (t instanceof Array || (t = [t]), t.length > this.gp.length) for (e = n = 0, r = t.length - this.gp.length; r >= 0 ? r > n : n > r; e = r >= 0 ? ++n : --n) this.gp.push(new a(this));
			for (e = 0, o = 0, s = t.length; s > o; o++) i = t[o], i > this.maxValue && (this.maxValue = 1.1 * this.value), this.gp[e].value = i, this.gp[e++].setOptions({
				maxValue: this.maxValue,
				angle: this.options.angle
			});
			return this.value = t[t.length - 1], AnimationUpdater.run()
		}, e.prototype.getAngle = function(t) {
			return (1 + this.options.angle) * Math.PI + (t - this.minValue) / (this.maxValue - this.minValue) * (1 - 2 * this.options.angle) * Math.PI
		}, e.prototype.render = function() {
			var t, e, i, n, o, s, r, a, l;
			for (o = this.canvas.width / 2, n = this.canvas.height * (1 - this.paddingBottom), t = this.getAngle(this.displayedValue), this.textField && this.textField.render(this), this.ctx.lineCap = "butt", void 0 !== this.options.customFillStyle ? e = this.options.customFillStyle(this) : void 0 !== this.options.colorStop ? (e = this.ctx.createRadialGradient(o, n, 9, o, n, 70), e.addColorStop(0, this.options.colorStart), e.addColorStop(1, this.options.colorStop)) : e = this.options.colorStart, this.ctx.strokeStyle = e, this.ctx.beginPath(), this.ctx.arc(o, n, this.radius, (1 + this.options.angle) * Math.PI, t, !1), this.ctx.lineWidth = this.lineWidth, this.ctx.stroke(), this.ctx.strokeStyle = this.options.strokeColor, this.ctx.beginPath(), this.ctx.arc(o, n, this.radius, t, (2 - this.options.angle) * Math.PI, !1), this.ctx.stroke(), a = this.gp, l = [], s = 0, r = a.length; r > s; s++) i = a[s], l.push(i.update(!0));
			return l
		}, e
	}(o), n = function(t) {
		function e(t) {
			this.canvas = t, e.__super__.constructor.call(this), "undefined" != typeof G_vmlCanvasManager && (this.canvas = window.G_vmlCanvasManager.initElement(this.canvas)), this.ctx = this.canvas.getContext("2d"), this.setOptions(), this.render()
		}
		return g(e, t), e.prototype.lineWidth = 15, e.prototype.displayedValue = 0, e.prototype.value = 33, e.prototype.maxValue = 80, e.prototype.minValue = 0, e.prototype.options = {
			lineWidth: .1,
			colorStart: "#6f6ea0",
			colorStop: "#c0c0db",
			strokeColor: "#eeeeee",
			shadowColor: "#d5d5d5",
			angle: .35
		}, e.prototype.getAngle = function(t) {
			return (1 - this.options.angle) * Math.PI + (t - this.minValue) / (this.maxValue - this.minValue) * (2 + this.options.angle - (1 - this.options.angle)) * Math.PI
		}, e.prototype.setOptions = function(t) {
			return null == t && (t = null), e.__super__.setOptions.call(this, t), this.lineWidth = this.canvas.height * this.options.lineWidth, this.radius = this.canvas.height / 2 - this.lineWidth / 2, this
		}, e.prototype.set = function(t) {
			return this.value = t, this.value > this.maxValue && (this.maxValue = 1.1 * this.value), AnimationUpdater.run()
		}, e.prototype.render = function() {
			var t, e, i, n, o, s;
			return t = this.getAngle(this.displayedValue), s = this.canvas.width / 2, i = this.canvas.height / 2, this.textField && this.textField.render(this), e = this.ctx.createRadialGradient(s, i, 39, s, i, 70), e.addColorStop(0, this.options.colorStart), e.addColorStop(1, this.options.colorStop), n = this.radius - this.lineWidth / 2, o = this.radius + this.lineWidth / 2, this.ctx.strokeStyle = this.options.strokeColor, this.ctx.beginPath(), this.ctx.arc(s, i, this.radius, (1 - this.options.angle) * Math.PI, (2 + this.options.angle) * Math.PI, !1), this.ctx.lineWidth = this.lineWidth, this.ctx.lineCap = "round", this.ctx.stroke(), this.ctx.strokeStyle = e, this.ctx.beginPath(), this.ctx.arc(s, i, this.radius, (1 - this.options.angle) * Math.PI, t, !1), this.ctx.stroke()
		}, e
	}(o), s = function(t) {
		function e() {
			return e.__super__.constructor.apply(this, arguments)
		}
		return g(e, t), e.prototype.strokeGradient = function(t, e, i, n) {
			var o;
			return o = this.ctx.createRadialGradient(t, e, i, t, e, n), o.addColorStop(0, this.options.shadowColor), o.addColorStop(.12, this.options._orgStrokeColor), o.addColorStop(.88, this.options._orgStrokeColor), o.addColorStop(1, this.options.shadowColor), o
		}, e.prototype.setOptions = function(t) {
			var i, n, o, s;
			return null == t && (t = null), e.__super__.setOptions.call(this, t), s = this.canvas.width / 2, i = this.canvas.height / 2, n = this.radius - this.lineWidth / 2, o = this.radius + this.lineWidth / 2, this.options._orgStrokeColor = this.options.strokeColor, this.options.strokeColor = this.strokeGradient(s, i, n, o), this
		}, e
	}(n), window.AnimationUpdater = {
		elements: [],
		animId: null,
		addAll: function(t) {
			var e, i, n, o;
			for (o = [], i = 0, n = t.length; n > i; i++) e = t[i], o.push(AnimationUpdater.elements.push(e));
			return o
		},
		add: function(t) {
			return AnimationUpdater.elements.push(t)
		},
		run: function() {
			var t, e, i, n, o;
			for (t = !0, o = AnimationUpdater.elements, i = 0, n = o.length; n > i; i++) e = o[i], e.update() && (t = !1);
			return t ? cancelAnimationFrame(AnimationUpdater.animId) : AnimationUpdater.animId = requestAnimationFrame(AnimationUpdater.run)
		}
	}, window.Gauge = r, window.Donut = s, window.BaseDonut = n, window.TextRenderer = l
}.call(this), function(t) {
	function e(t) {
		(t.attr("title") || "string" != typeof t.attr("original-title")) && t.attr("original-title", t.attr("title") || "").removeAttr("title")
	}
	function i(i, n) {
		this.$element = t(i), this.options = n, this.enabled = !0, e(this.$element)
	}
	i.prototype = {
		show: function() {
			var e = this.getTitle();
			if (e && this.enabled) {
				var i = this.tip();
				i.find(".tipsy-inner")[this.options.html ? "html" : "text"](e), i[0].className = "tipsy", i.remove().css({
					top: 0,
					left: 0,
					visibility: "hidden",
					display: "block"
				}).appendTo(document.body);
				var n, o = t.extend({}, this.$element.offset(), {
					width: this.$element[0].offsetWidth,
					height: this.$element[0].offsetHeight
				}),
					s = i[0].offsetWidth,
					r = i[0].offsetHeight,
					a = "function" == typeof this.options.gravity ? this.options.gravity.call(this.$element[0]) : this.options.gravity;
				switch (a.charAt(0)) {
				case "n":
					n = {
						top: o.top + o.height + this.options.offset,
						left: o.left + o.width / 2 - s / 2
					};
					break;
				case "s":
					n = {
						top: o.top - r - this.options.offset,
						left: o.left + o.width / 2 - s / 2
					};
					break;
				case "e":
					n = {
						top: o.top + o.height / 2 - r / 2,
						left: o.left - s - this.options.offset
					};
					break;
				case "w":
					n = {
						top: o.top + o.height / 2 - r / 2,
						left: o.left + o.width + this.options.offset
					}
				}
				2 == a.length && (n.left = "w" == a.charAt(1) ? o.left + o.width / 2 - 15 : o.left + o.width / 2 - s + 15), i.css(n).addClass("tipsy-" + a), this.options.fade ? ($tip_top = i.css("top"), $new_top = parseInt($tip_top) - 20 + "px", i.css({
					top: $new_top
				}), i.stop().css({
					opacity: 0,
					display: "block",
					visibility: "visible"
				}).animate({
					opacity: this.options.opacity,
					top: $tip_top
				}, 300, "easeOutQuad")) : i.css({
					visibility: "visible",
					opacity: this.options.opacity
				})
			}
		},
		hide: function() {
			this.options.fade ? this.tip().stop().fadeOut(function() {
				t(this).remove()
			}) : this.tip().remove()
		},
		getTitle: function() {
			var t, i = this.$element,
				n = this.options;
			e(i);
			var t, n = this.options;
			return "string" == typeof n.title ? t = i.attr("title" == n.title ? "original-title" : n.title) : "function" == typeof n.title && (t = n.title.call(i[0])), t = ("" + t).replace(/(^\s*|\s*$)/, ""), t || n.fallback
		},
		tip: function() {
			return this.$tip || (this.$tip = t('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')), this.$tip
		},
		validate: function() {
			this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
		},
		enable: function() {
			this.enabled = !0
		},
		disable: function() {
			this.enabled = !1
		},
		toggleEnabled: function() {
			this.enabled = !this.enabled
		}
	}, t.fn.tipsy = function(e) {
		function n(n) {
			var o = t.data(n, "tipsy");
			return o || (o = new i(n, t.fn.tipsy.elementOptions(n, e)), t.data(n, "tipsy", o)), o
		}
		function o() {
			var t = n(this);
			t.hoverState = "in", 0 == e.delayIn ? t.show() : setTimeout(function() {
				"in" == t.hoverState && t.show()
			}, e.delayIn)
		}
		function s() {
			var t = n(this);
			t.hoverState = "out", 0 == e.delayOut ? t.hide() : setTimeout(function() {
				"out" == t.hoverState && t.hide()
			}, e.delayOut)
		}
		if (e === !0) return this.data("tipsy");
		if ("string" == typeof e) return this.data("tipsy")[e]();
		if (e = t.extend({}, t.fn.tipsy.defaults, e), e.live || this.each(function() {
			n(this)
		}), "manual" != e.trigger) {
			var r = e.live ? "live" : "bind",
				a = "hover" == e.trigger ? "mouseenter" : "focus",
				l = "hover" == e.trigger ? "mouseleave" : "blur";
			this[r](a, o)[r](l, s)
		}
		return this
	}, t.fn.tipsy.defaults = {
		delayIn: 0,
		delayOut: 0,
		fade: !1,
		fallback: "",
		gravity: "n",
		html: !1,
		live: !1,
		offset: 0,
		opacity: 1,
		title: "title",
		trigger: "hover"
	}, t.fn.tipsy.elementOptions = function(e, i) {
		return t.metadata ? t.extend({}, i, t(e).metadata()) : i
	}, t.fn.tipsy.autoNS = function() {
		return t(this).offset().top > t(document).scrollTop() + t(window).height() / 2 ? "s" : "n"
	}, t.fn.tipsy.autoWE = function() {
		return t(this).offset().left > t(document).scrollLeft() + t(window).width() / 2 ? "e" : "w"
	}
}(jQuery), function(t) {
	var e = -1,
		i = -1,
		n = function(e) {
			var i = null,
				n = [];
			return t(e).each(function() {
				var e = t(this),
					s = e.offset().top - o(e.css("margin-top")),
					r = 0 < n.length ? n[n.length - 1] : null;
				null === r ? n.push(e) : 1 >= Math.floor(Math.abs(i - s)) ? n[n.length - 1] = r.add(e) : n.push(e), i = s
			}), n
		},
		o = function(t) {
			return parseFloat(t) || 0
		},
		s = function(e) {
			var i = {
				byRow: !0,
				remove: !1,
				property: "height"
			};
			return "object" == typeof e ? t.extend(i, e) : ("boolean" == typeof e ? i.byRow = e : "remove" === e && (i.remove = !0), i)
		},
		r = t.fn.matchHeight = function(e) {
			if (e = s(e), e.remove) {
				var i = this;
				return this.css(e.property, ""), t.each(r._groups, function(t, e) {
					e.elements = e.elements.not(i)
				}), this
			}
			return 1 >= this.length ? this : (r._groups.push({
				elements: this,
				options: e
			}), r._apply(this, e), this)
		};
	r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._apply = function(e, i) {
		var a = s(i),
			l = t(e),
			c = [l],
			u = t(window).scrollTop(),
			h = t("html").outerHeight(!0),
			p = l.parents().filter(":hidden");
		return p.each(function() {
			var e = t(this);
			e.data("style-cache", e.attr("style"))
		}), p.css("display", "block"), a.byRow && (l.each(function() {
			var e = t(this),
				i = "inline-block" === e.css("display") ? "inline-block" : "block";
			e.data("style-cache", e.attr("style")), e.css({
				display: i,
				"padding-top": "0",
				"padding-bottom": "0",
				"margin-top": "0",
				"margin-bottom": "0",
				"border-top-width": "0",
				"border-bottom-width": "0",
				height: "100px"
			})
		}), c = n(l), l.each(function() {
			var e = t(this);
			e.attr("style", e.data("style-cache") || "")
		})), t.each(c, function(e, i) {
			var n = t(i),
				s = 0;
			a.byRow && 1 >= n.length ? n.css(a.property, "") : (n.each(function() {
				var e = t(this),
					i = {
						display: "inline-block" === e.css("display") ? "inline-block" : "block"
					};
				i[a.property] = "", e.css(i), e.outerHeight(!1) > s && (s = e.outerHeight(!1)), e.css("display", "")
			}), n.each(function() {
				var e = t(this),
					i = 0;
				"border-box" !== e.css("box-sizing") && (i += o(e.css("border-top-width")) + o(e.css("border-bottom-width")), i += o(e.css("padding-top")) + o(e.css("padding-bottom"))), e.css(a.property, s - i)
			}))
		}), p.each(function() {
			var e = t(this);
			e.attr("style", e.data("style-cache") || null)
		}), r._maintainScroll && t(window).scrollTop(u / h * t("html").outerHeight(!0)), this
	}, r._applyDataApi = function() {
		var e = {};
		t("[data-match-height], [data-mh]").each(function() {
			var i = t(this),
				n = i.attr("data-match-height") || i.attr("data-mh");
			e[n] = n in e ? e[n].add(i) : i
		}), t.each(e, function() {
			this.matchHeight(!0)
		})
	};
	var a = function(e) {
			r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function() {
				r._apply(this.elements, this.options)
			}), r._afterUpdate && r._afterUpdate(e, r._groups)
		};
	r._update = function(n, o) {
		if (o && "resize" === o.type) {
			var s = t(window).width();
			if (s === e) return;
			e = s
		}
		n ? -1 === i && (i = setTimeout(function() {
			a(o), i = -1
		}, r._throttle)) : a(o)
	}, t(r._applyDataApi), t(window).bind("load", function(t) {
		r._update(!1, t)
	}), t(window).bind("resize orientationchange", function(t) {
		r._update(!0, t)
	})
}(jQuery), function(t) {
	t.fn.verticalAlignMiddle = function(e) {
		return this.each(function() {
			var i = t(this),
				n = e || "margin-top";
			t(window).smartresize(function() {
				i.css(n, t(window).width() >= 768 ? (i.parent().height() - i.height()) / 2 : 0)
			})
		})
	}
}(jQuery), function(t) {
	t.fn.flipCounter = function(e) {
		function n() {
			var t = b.data("flipCounter");
			return "undefined" == typeof t ? !1 : !0
		}
		function o(t) {
			var e = b.data("flipCounter"),
				i = e[t];
			return "undefined" != typeof i ? i : !1
		}
		function s(t, e) {
			var i = b.data("flipCounter");
			i[t] = e, b.data("flipCounter", i)
		}
		function r() {
			b.children('[name="' + o("counterFieldName") + '"]').length < 1 && b.append('<input type="hidden" name="' + o("counterFieldName") + '" value="' + o("number") + '" />');
			var e = c(),
				n = p().length;
			if (n > e) for (i = 0; i < n - e; i++) {
				var s = t('<span class="' + o("digitClass") + '" />');
				b.prepend(s)
			} else if (e > n) for (i = 0; i < e - n; i++) b.children("." + o("digitClass")).first().remove();
			b.find("." + o("digitClass")).each(function() {
				0 == t(this).find("span").length && t(this).append("<span>0</span>")
			})
		}
		function a() {
			r();
			var e = p(),
				i = l(),
				n = 0;
			t.each(i, function() {
				digit = e.toString().charAt(n), t(this).find("span").text(digit.replace(" ", "&nbsp;").toString()), n++
			}), h()
		}
		function l() {
			return b.children("." + o("digitClass"))
		}
		function c() {
			return l().length
		}
		function u() {
			var t = parseFloat(b.children('[name="' + o("counterFieldName") + '"]').val());
			return t == t == 0 ? !1 : t
		}
		function h() {
			b.children('[name="' + o("counterFieldName") + '"]').val(o("number"))
		}
		function p() {
			var e = o("number");
			if ("number" != typeof e) return t.error("Attempting to render non-numeric value."), "0";
			var i = "";
			if (o("formatNumberOptions")) t.formatNumber ? i = t.formatNumber(e, o("formatNumberOptions")) : t.error("The numberformatter jQuery plugin is not loaded. This plugin is required to use the formatNumberOptions setting.");
			else if (e >= 0) {
				for (var n = o("numIntegralDigits"), s = n - e.toFixed().toString().length, r = 0; s > r; r++) i += "0";
				i += e.toFixed(o("numFractionalDigits"))
			} else i = "-" + Math.abs(e.toFixed(o("numFractionalDigits")));
			return i
		}
		function d(e) {
			1 == o("animating") && m(), "undefined" != typeof e ? (e = t.extend(b.data("flipCounter"), e), b.data("flipCounter", e)) : e = b.data("flipCounter"), 0 == o("start_time") && s("start_time", (new Date).getTime()), 0 == o("time") && s("time", 0), 0 == o("elapsed") && s("elapsed", "0.0"), 0 == o("start_number") && (s("start_number", o("number")), 0 == o("start_number") && s("start_number", 0)), f();
			var i = o("onAnimationStarted");
			"function" == typeof i && i.call(b, b)
		}
		function f() {
			function t() {
				i += 10, n = Math.floor(i / 10) / 10, Math.round(n) == n && (n += ".0"), s("elapsed", n);
				var o = (new Date).getTime() - e - i,
					h = 0;
				h = "function" == typeof u ? u.apply(b, [!1, i, r, l, c]) : y(!1, i, r, l, c), s("number", h), s("time", i), a(), c > i ? s("interval", window.setTimeout(t, 10 - o)) : m()
			}
			var e = o("start_time"),
				i = o("time"),
				n = o("elapsed"),
				r = o("start_number"),
				l = o("end_number") - o("start_number");
			if (0 == l) return !1;
			var c = o("duration"),
				u = o("easing");
			s("animating", !0), window.setTimeout(t, 10)
		}
		function m() {
			clearTimeout(o("interval")), s("start_time", !1), s("start_number", !1), s("end_number", !1), s("time", 0), s("animating", !1), s("paused", !1);
			var t = o("onAnimationStopped");
			"function" == typeof t && t.call(b, b)
		}
		function g() {
			if (0 == o("animating") || 1 == o("paused")) return !1;
			clearTimeout(o("interval")), s("paused", !0);
			var t = o("onAnimationPaused");
			"function" == typeof t && t.call(b, b)
		}
		function v() {
			if (0 == o("animating") || 0 == o("paused")) return !1;
			s("paused", !1), f();
			var t = o("onAnimationResumed");
			"function" == typeof t && t.call(b, b)
		}
		function y(t, e, i, n, o) {
			return e / o * n + i
		}
		var b = !1,
			_ = {
				number: 0,
				numIntegralDigits: 1,
				numFractionalDigits: 0,
				digitClass: "counter-digit",
				counterFieldName: "counter-value",
				easing: !1,
				duration: 1700,
				onAnimationStarted: !1,
				onAnimationStopped: !1,
				onAnimationPaused: !1,
				onAnimationResumed: !1,
				formatNumberOptions: !1
			},
			w = {
				init: function(e) {
					return this.each(function() {
						b = t(this);
						var i = t.extend(_, e),
							n = b.data("flipCounter");
						e = t.extend(n, i), b.data("flipCounter", e), (e.number === !1 || 0 == e.number) && (e.number = u() !== !1 ? u() : 0, s("number", e.number)), s("animating", !1), s("start_time", !1), b.bind("startAnimation", function(t, e) {
							d(e)
						}), b.bind("pauseAnimation", function() {
							g()
						}), b.bind("resumeAnimation", function() {
							v()
						}), b.bind("stopAnimation", function() {
							m()
						}), b.htmlClean(), a()
					})
				},
				renderCounter: function(e) {
					return this.each(function() {
						b = t(this), n() || t(this).flipCounter(), s("number", e), a()
					})
				},
				setNumber: function(e) {
					return this.each(function() {
						b = t(this), n() || t(this).flipCounter(), s("number", e), a()
					})
				},
				getNumber: function() {
					var e = !1;
					return this.each(e = function() {
						return b = t(this), n() || t(this).flipCounter(), e = o("number")
					}), e
				},
				startAnimation: function(e) {
					return this.each(function() {
						b = t(this), n() || t(this).flipCounter(), b.trigger("startAnimation", e)
					})
				},
				stopAnimation: function() {
					return this.each(function() {
						b = t(this), n() || t(this).flipCounter(), b.trigger("stopAnimation")
					})
				},
				pauseAnimation: function() {
					return this.each(function() {
						b = t(this), n() || t(this).flipCounter(), b.trigger("pauseAnimation")
					})
				},
				resumeAnimation: function() {
					return this.each(function() {
						b = t(this), n() || t(this).flipCounter(), b.trigger("resumeAnimation")
					})
				}
			};
		return w[e] ? w[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exist on jQuery.flipCounter") : w.init.apply(this, arguments)
	}
}(jQuery), function(t) {
	t.fn.extend({
		easyResponsiveTabs: function(e) {
			var i = {
				type: "default",
				width: "auto",
				fit: !0,
				closed: !1,
				activate: function() {}
			},
				e = t.extend(i, e),
				n = e,
				o = n.type,
				s = n.fit,
				r = n.width,
				a = "vertical",
				l = "accordion",
				c = window.location.hash,
				u = !(!window.history || !history.replaceState);
			t(this).bind("tabactivate", function(t, i) {
				"function" == typeof e.activate && e.activate.call(i, t)
			}), this.each(function() {
				function i() {
					o == a && n.addClass("resp-vtabs"), 1 == s && n.css({
						width: "100%",
						margin: "0px"
					}), o == l && (n.addClass("resp-easy-accordion"), n.find(".resp-tabs-list").css("display", "none"))
				}
				var n = t(this),
					h = n.find("ul.resp-tabs-list"),
					p = n.attr("id");
				n.find("ul.resp-tabs-list li").addClass("resp-tab-item"), n.css({
					display: "block",
					width: r
				}), n.find(".resp-tabs-container > div").addClass("resp-tab-content"), i();
				var d;
				n.find(".resp-tab-content").before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");
				var f = 0;
				n.find(".resp-accordion").each(function() {
					d = t(this);
					var e = n.find(".resp-tab-item:eq(" + f + ")"),
						i = n.find(".resp-accordion:eq(" + f + ")");
					i.append(e.html()), i.data(e.data()), d.attr("aria-controls", "tab_item-" + f), f++
				});
				var m, g = 0;
				n.find(".resp-tab-item").each(function() {
					$tabItem = t(this), $tabItem.attr("aria-controls", "tab_item-" + g), $tabItem.attr("role", "tab");
					var e = 0;
					n.find(".resp-tab-content").each(function() {
						m = t(this), m.attr("aria-labelledby", "tab_item-" + e), e++
					}), g++
				});
				var v = 0;
				if ("" != c) {
					var y = c.match(new RegExp(p + "([0-9]+)"));
					null !== y && 2 === y.length && (v = parseInt(y[1], 10) - 1, v > g && (v = 0))
				}
				t(n.find(".resp-tab-item")[v]).addClass("resp-tab-active"), e.closed === !0 || "accordion" === e.closed && !h.is(":visible") || "tabs" === e.closed && h.is(":visible") ? t(n.find(".resp-tab-content")[v]).addClass("resp-tab-content-active resp-accordion-closed") : (t(n.find(".resp-accordion")[v]).addClass("resp-tab-active"), t(n.find(".resp-tab-content")[v]).addClass("resp-tab-content-active").attr("style", "display:block")), n.find("[role=tab]").each(function() {
					var e = t(this);
					e.click(function() {
						var e = t(this),
							i = e.attr("aria-controls");
						if (e.hasClass("resp-accordion") && e.hasClass("resp-tab-active")) return n.find(".resp-tab-content-active").slideUp("", function() {
							t(this).addClass("resp-accordion-closed")
						}), e.removeClass("resp-tab-active"), !1;
						if (!e.hasClass("resp-tab-active") && e.hasClass("resp-accordion") ? (n.find(".resp-tab-active").removeClass("resp-tab-active"), n.find(".resp-tab-content-active").slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), n.find("[aria-controls=" + i + "]").addClass("resp-tab-active"), n.find(".resp-tab-content[aria-labelledby = " + i + "]").slideDown().addClass("resp-tab-content-active")) : (n.find(".resp-tab-active").removeClass("resp-tab-active"), n.find(".resp-tab-content-active").removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), n.find("[aria-controls=" + i + "]").addClass("resp-tab-active"), n.find(".resp-tab-content[aria-labelledby = " + i + "]").addClass("resp-tab-content-active").attr("style", "display:block")), e.trigger("tabactivate", e), u) {
							var o = window.location.hash,
								s = n.find("ul.resp-tabs-list li.resp-tab-active").attr("id");
							if ("" != o) {
								var r = n.find("ul.resp-tabs-list li.resp-tab-active").attr("id");
								s = null != o.match(r) ? o.replace(r, s) : "#" + s
							} else s = "#" + s;
							history.replaceState(null, null, s)
						}
					})
				}), t(window).resize(function() {
					n.find(".resp-accordion-closed").removeAttr("style")
				})
			})
		}
	})
}(jQuery), !
function(t) {
	var e = {
		animation: "dissolve",
		separator: ",",
		speed: 2e3
	};
	t.fx.step.textShadowBlur = function(e) {
		t(e.elem).prop("textShadowBlur", e.now).css({
			textShadow: "0 0 " + Math.floor(e.now) + "px black"
		})
	}, t.fn.textrotator = function(i) {
		var n = t.extend({}, e, i);
		return this.each(function() {
			var e = t(this),
				i = [];
			t.each(e.text().split(n.separator), function(t, e) {
				i.push(e)
			}), e.text(i[0]);
			var o = function() {
					switch (n.animation) {
					case "dissolve":
						e.animate({
							textShadowBlur: 20,
							opacity: 0
						}, 500, function() {
							s = t.inArray(e.text(), i), s + 1 == i.length && (s = -1), e.text(i[s + 1]).animate({
								textShadowBlur: 0,
								opacity: 1
							}, 500)
						});
						break;
					case "flip":
						e.find(".back").length > 0 && e.html(e.find(".back").html());
						var o = e.text(),
							s = t.inArray(o, i);
						s + 1 == i.length && (s = -1), e.html(""), t("<span class='front'>" + o + "</span>").appendTo(e), t("<span class='back'>" + i[s + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({
							"-webkit-transform": " rotateY(-180deg)",
							"-moz-transform": " rotateY(-180deg)",
							"-o-transform": " rotateY(-180deg)",
							transform: " rotateY(-180deg)"
						});
						break;
					case "flipUp":
						e.find(".back").length > 0 && e.html(e.find(".back").html());
						var o = e.text(),
							s = t.inArray(o, i);
						s + 1 == i.length && (s = -1), e.html(""), t("<span class='front'>" + o + "</span>").appendTo(e), t("<span class='back'>" + i[s + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
							"-webkit-transform": " rotateX(-180deg)",
							"-moz-transform": " rotateX(-180deg)",
							"-o-transform": " rotateX(-180deg)",
							transform: " rotateX(-180deg)"
						});
						break;
					case "flipCube":
						e.find(".back").length > 0 && e.html(e.find(".back").html());
						var o = e.text(),
							s = t.inArray(o, i);
						s + 1 == i.length && (s = -1), e.html(""), t("<span class='front'>" + o + "</span>").appendTo(e), t("<span class='back'>" + i[s + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({
							"-webkit-transform": " rotateY(180deg)",
							"-moz-transform": " rotateY(180deg)",
							"-o-transform": " rotateY(180deg)",
							transform: " rotateY(180deg)"
						});
						break;
					case "flipCubeUp":
						e.find(".back").length > 0 && e.html(e.find(".back").html());
						var o = e.text(),
							s = t.inArray(o, i);
						s + 1 == i.length && (s = -1), e.html(""), t("<span class='front'>" + o + "</span>").appendTo(e), t("<span class='back'>" + i[s + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({
							"-webkit-transform": " rotateX(180deg)",
							"-moz-transform": " rotateX(180deg)",
							"-o-transform": " rotateX(180deg)",
							transform: " rotateX(180deg)"
						});
						break;
					case "spin":
						e.find(".rotating").length > 0 && e.html(e.find(".rotating").html()), s = t.inArray(e.text(), i), s + 1 == i.length && (s = -1), e.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(i[s + 1]).show().css({
							"-webkit-transform": " rotate(0) scale(1)",
							"-moz-transform": "rotate(0) scale(1)",
							"-o-transform": "rotate(0) scale(1)",
							transform: "rotate(0) scale(1)"
						});
						break;
					case "fade":
						e.fadeOut(n.speed, function() {
							s = t.inArray(e.text(), i), s + 1 == i.length && (s = -1), e.text(i[s + 1]).fadeIn(n.speed)
						})
					}
				};
			setInterval(o, n.speed)
		})
	}
}(window.jQuery), !
function(t) {
	"use strict";
	var e = function(e, i) {
			this.el = t(e), this.options = t.extend({}, t.fn.typed.defaults, i), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.build()
		};
	e.prototype = {
		constructor: e,
		init: function() {
			var t = this;
			t.timeout = setTimeout(function() {
				t.typewrite(t.strings[t.arrayPos], t.strPos)
			}, t.startDelay)
		},
		build: function() {
			this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.init()
		},
		typewrite: function(t, e) {
			if (this.stop !== !0) {
				var i = Math.round(70 * Math.random()) + this.typeSpeed,
					n = this;
				n.timeout = setTimeout(function() {
					var i = 0,
						o = t.substr(e);
					if ("^" === o.charAt(0)) {
						var s = 1;
						/^\^\d+/.test(o) && (o = /\d+/.exec(o)[0], s += o.length, i = parseInt(o)), t = t.substring(0, e) + t.substring(e + s)
					}
					if ("html" === n.contentType) {
						var r = t.substr(e).charAt(0);
						if ("<" === r || "&" === r) {
							var a = "",
								l = "";
							for (l = "<" === r ? ">" : ";"; t.substr(e).charAt(0) !== l;) a += t.substr(e).charAt(0), e++;
							e++, a += l
						}
					}
					n.timeout = setTimeout(function() {
						if (e === t.length) {
							if (n.options.onStringTyped(n.arrayPos), n.arrayPos === n.strings.length - 1 && (n.options.callback(), n.curLoop++, n.loop === !1 || n.curLoop === n.loopCount)) return;
							n.timeout = setTimeout(function() {
								n.backspace(t, e)
							}, n.backDelay)
						} else {
							0 === e && n.options.preStringTyped(n.arrayPos);
							var i = t.substr(0, e + 1);
							n.attr ? n.el.attr(n.attr, i) : n.isInput ? n.el.val(i) : "html" === n.contentType ? n.el.html(i) : n.el.text(i), e++, n.typewrite(t, e)
						}
					}, i)
				}, i)
			}
		},
		backspace: function(t, e) {
			if (this.stop !== !0) {
				var i = Math.round(70 * Math.random()) + this.backSpeed,
					n = this;
				n.timeout = setTimeout(function() {
					if ("html" === n.contentType && ">" === t.substr(e).charAt(0)) {
						for (var i = "";
						"<" !== t.substr(e).charAt(0);) i -= t.substr(e).charAt(0), e--;
						e--, i += "<"
					}
					var o = t.substr(0, e);
					n.attr ? n.el.attr(n.attr, o) : n.isInput ? n.el.val(o) : "html" === n.contentType ? n.el.html(o) : n.el.text(o), e > n.stopNum ? (e--, n.backspace(t, e)) : e <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.init()) : n.typewrite(n.strings[n.arrayPos], e))
				}, i)
			}
		},
		reset: function() {
			var t = this;
			clearInterval(t.timeout);
			var e = this.el.attr("id");
			this.el.after('<span id="' + e + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), t.options.resetCallback()
		}
	}, t.fn.typed = function(i) {
		return this.each(function() {
			var n = t(this),
				o = n.data("typed"),
				s = "object" == typeof i && i;
			o || n.data("typed", o = new e(this, s)), "string" == typeof i && o[i]()
		})
	}, t.fn.typed.defaults = {
		strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
		typeSpeed: 0,
		startDelay: 0,
		backSpeed: 0,
		backDelay: 500,
		loop: !1,
		loopCount: !1,
		showCursor: !0,
		cursorChar: "|",
		attr: null,
		contentType: "html",
		callback: function() {},
		preStringTyped: function() {},
		onStringTyped: function() {},
		resetCallback: function() {}
	}
}(window.jQuery), jQuery.fn.htmlClean = function() {
	this.contents().filter(function() {
		return 3 != this.nodeType ? (jQuery(this).htmlClean(), !1) : !/\S/.test(this.nodeValue)
	}).remove()
}, function(t, e) {
	var i = function(t, e, i) {
			var n;
			return function() {
				function o() {
					i || t.apply(s, r), n = null
				}
				var s = this,
					r = arguments;
				n ? clearTimeout(n) : i && t.apply(s, r), n = setTimeout(o, e || 150)
			}
		};
	jQuery.fn[e] = function(t) {
		return t ? this.bind("resize", i(t)) : this.trigger(e)
	}
}(jQuery, "smartresize"), function(t, e) {
	var i = function(t, e, i) {
			var n;
			return function() {
				function o() {
					i || t.apply(s, r), n = null
				}
				var s = this,
					r = arguments;
				n ? clearTimeout(n) : i && t.apply(s, r), n = setTimeout(o, e || 100)
			}
		};
	jQuery.fn[e] = function(t, n) {
		return t ? this.bind("scroll", i(t, n)) : this.trigger(e)
	}
}(jQuery, "smartscroll"), jQuery.fn.gauge = function(t, e) {
	this.each(function() {
		var i = jQuery(this),
			n = i.data();
		n.gauge && delete n.gauge, t !== !1 && (n.gauge = new Donut(this).setOptions(t), n.gauge.setTextField(document.getElementById(i.next(".circ_counter_text_holder").children(".circ_counter_text").attr("id"))), n.gauge.maxValue = 100, n.gauge.animationSpeed = 56, n.gauge.set(e))
	})
}, jQuery(function(t) {
	t("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").addClass("buttons_added").append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />'), t(document).on("click", ".plus, .minus", function() {
		var e = t(this).closest(".quantity").find(".qty"),
			i = parseFloat(e.val()),
			n = parseFloat(e.attr("max")),
			o = parseFloat(e.attr("min")),
			s = e.attr("step");
		i && "" !== i && "NaN" !== i || (i = 0), ("" === n || "NaN" === n) && (n = ""), ("" === o || "NaN" === o) && (o = 0), ("any" === s || "" === s || void 0 === s || "NaN" === parseFloat(s)) && (s = 1), t(this).is(".plus") ? e.val(n && (n == i || i > n) ? n : i + parseFloat(s)) : o && (o == i || o > i) ? e.val(o) : i > 0 && e.val(i - parseFloat(s)), e.trigger("change")
	})
});
var pJS = function(t, e) {
		var i = document.querySelector("#" + t + " > .particles-js-canvas-el");
		this.pJS = {
			canvas: {
				el: i,
				w: i.offsetWidth,
				h: i.offsetHeight
			},
			particles: {
				number: {
					value: 90,
					density: {
						enable: !0,
						value_area: 1e3
					}
				},
				color: {
					value: "#fff"
				},
				shape: {
					type: "circle",
					stroke: {
						width: 0,
						color: "#000000"
					},
					polygon: {
						nb_sides: 4
					},
					image: {
						src: "",
						width: 100,
						height: 100
					}
				},
				opacity: {
					value: .5,
					random: !1,
					anim: {
						enable: !1,
						speed: 1,
						opacity_min: .1,
						sync: !1
					}
				},
				size: {
					value: 2,
					random: !0,
					anim: {
						enable: !0,
						speed: 5,
						size_min: .1,
						sync: !1
					}
				},
				line_linked: {
					enable: !0,
					distance: 130,
					color: "#fff",
					opacity: .4,
					width: .8
				},
				move: {
					enable: !0,
					speed: 3,
					direction: "none",
					random: !1,
					straight: !1,
					out_mode: "out",
					bounce: !1,
					attract: {
						enable: !1,
						rotateX: 600,
						rotateY: 1200
					}
				},
				array: []
			},
			interactivity: {
				detect_on: "canvas",
				events: {
					onhover: {
						enable: !0,
						mode: "grab"
					},
					onclick: {
						enable: !0,
						mode: "push"
					},
					resize: !0
				},
				modes: {
					grab: {
						distance: 220,
						line_linked: {
							opacity: 1
						}
					},
					bubble: {
						distance: 300,
						size: 40,
						duration: .4
					},
					repulse: {
						distance: 100,
						duration: .4
					},
					push: {
						particles_nb: 2
					},
					remove: {
						particles_nb: 2
					}
				},
				mouse: {}
			},
			retina_detect: !1,
			fn: {
				interact: {},
				modes: {},
				vendors: {}
			},
			tmp: {}
		};
		var n = this.pJS;
		e && Object.deepExtend(n, e), n.tmp.obj = {
			size_value: n.particles.size.value,
			size_anim_speed: n.particles.size.anim.speed,
			move_speed: n.particles.move.speed,
			line_linked_distance: n.particles.line_linked.distance,
			line_linked_width: n.particles.line_linked.width,
			mode_grab_distance: n.interactivity.modes.grab.distance,
			mode_bubble_distance: n.interactivity.modes.bubble.distance,
			mode_bubble_size: n.interactivity.modes.bubble.size,
			mode_repulse_distance: n.interactivity.modes.repulse.distance
		}, n.fn.retinaInit = function() {
			n.retina_detect && window.devicePixelRatio > 1 ? (n.canvas.pxratio = window.devicePixelRatio, n.tmp.retina = !0) : (n.canvas.pxratio = 1, n.tmp.retina = !1), n.canvas.w = n.canvas.el.offsetWidth * n.canvas.pxratio, n.canvas.h = n.canvas.el.offsetHeight * n.canvas.pxratio, n.particles.size.value = n.tmp.obj.size_value * n.canvas.pxratio, n.particles.size.anim.speed = n.tmp.obj.size_anim_speed * n.canvas.pxratio, n.particles.move.speed = n.tmp.obj.move_speed * n.canvas.pxratio, n.particles.line_linked.distance = n.tmp.obj.line_linked_distance * n.canvas.pxratio, n.interactivity.modes.grab.distance = n.tmp.obj.mode_grab_distance * n.canvas.pxratio, n.interactivity.modes.bubble.distance = n.tmp.obj.mode_bubble_distance * n.canvas.pxratio, n.particles.line_linked.width = n.tmp.obj.line_linked_width * n.canvas.pxratio, n.interactivity.modes.bubble.size = n.tmp.obj.mode_bubble_size * n.canvas.pxratio, n.interactivity.modes.repulse.distance = n.tmp.obj.mode_repulse_distance * n.canvas.pxratio
		}, n.fn.canvasInit = function() {
			n.canvas.ctx = n.canvas.el.getContext("2d")
		}, n.fn.canvasSize = function() {
			n.canvas.el.width = n.canvas.w, n.canvas.el.height = n.canvas.h, n && n.interactivity.events.resize && window.addEventListener("resize", function() {
				n.canvas.w = n.canvas.el.offsetWidth, n.canvas.h = n.canvas.el.offsetHeight, n.tmp.retina && (n.canvas.w *= n.canvas.pxratio, n.canvas.h *= n.canvas.pxratio), n.canvas.el.width = n.canvas.w, n.canvas.el.height = n.canvas.h, n.particles.move.enable || (n.fn.particlesEmpty(), n.fn.particlesCreate(), n.fn.particlesDraw(), n.fn.vendors.densityAutoParticles()), n.fn.vendors.densityAutoParticles()
			})
		}, n.fn.canvasPaint = function() {
			n.canvas.ctx.fillRect(0, 0, n.canvas.w, n.canvas.h)
		}, n.fn.canvasClear = function() {
			n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h)
		}, n.fn.particle = function(t, e, i) {
			if (this.radius = (n.particles.size.random ? Math.random() : 1) * n.particles.size.value, n.particles.size.anim.enable && (this.size_status = !1, this.vs = n.particles.size.anim.speed / 100, n.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * n.canvas.w, this.y = i ? i.y : Math.random() * n.canvas.h, this.x > n.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > n.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), n.particles.move.bounce && n.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == typeof t.value) if (t.value instanceof Array) {
				var o = t.value[Math.floor(Math.random() * n.particles.color.value.length)];
				this.color.rgb = hexToRgb(o)
			} else void 0 != t.value.r && void 0 != t.value.g && void 0 != t.value.b && (this.color.rgb = {
				r: t.value.r,
				g: t.value.g,
				b: t.value.b
			}), void 0 != t.value.h && void 0 != t.value.s && void 0 != t.value.l && (this.color.hsl = {
				h: t.value.h,
				s: t.value.s,
				l: t.value.l
			});
			else "random" == t.value ? this.color.rgb = {
				r: Math.floor(256 * Math.random()) + 0,
				g: Math.floor(256 * Math.random()) + 0,
				b: Math.floor(256 * Math.random()) + 0
			} : "string" == typeof t.value && (this.color = t, this.color.rgb = hexToRgb(this.color.value));
			this.opacity = (n.particles.opacity.random ? Math.random() : 1) * n.particles.opacity.value, n.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = n.particles.opacity.anim.speed / 100, n.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
			var s = {};
			switch (n.particles.move.direction) {
			case "top":
				s = {
					x: 0,
					y: -1
				};
				break;
			case "top-right":
				s = {
					x: .5,
					y: -.5
				};
				break;
			case "right":
				s = {
					x: 1,
					y: -0
				};
				break;
			case "bottom-right":
				s = {
					x: .5,
					y: .5
				};
				break;
			case "bottom":
				s = {
					x: 0,
					y: 1
				};
				break;
			case "bottom-left":
				s = {
					x: -.5,
					y: 1
				};
				break;
			case "left":
				s = {
					x: -1,
					y: 0
				};
				break;
			case "top-left":
				s = {
					x: -.5,
					y: -.5
				};
				break;
			default:
				s = {
					x: 0,
					y: 0
				}
			}
			n.particles.move.straight ? (this.vx = s.x, this.vy = s.y, n.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = s.x + Math.random() - .5, this.vy = s.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
			var r = n.particles.shape.type;
			if ("object" == typeof r) {
				if (r instanceof Array) {
					var a = r[Math.floor(Math.random() * r.length)];
					this.shape = a
				}
			} else this.shape = r;
			if ("image" == this.shape) {
				var l = n.particles.shape;
				this.img = {
					src: l.image.src,
					ratio: l.image.width / l.image.height
				}, this.img.ratio || (this.img.ratio = 1), "svg" == n.tmp.img_type && void 0 != n.tmp.source_svg && (n.fn.vendors.createSvgImg(this), n.tmp.pushing && (this.img.loaded = !1))
			}
		}, n.fn.particle.prototype.draw = function() {
			function t() {
				n.canvas.ctx.drawImage(r, e.x - i, e.y - i, 2 * i, 2 * i / e.img.ratio)
			}
			var e = this;
			if (void 0 != e.radius_bubble) var i = e.radius_bubble;
			else var i = e.radius;
			if (void 0 != e.opacity_bubble) var o = e.opacity_bubble;
			else var o = e.opacity;
			if (e.color.rgb) var s = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + o + ")";
			else var s = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + o + ")";
			switch (n.canvas.ctx.fillStyle = s, n.canvas.ctx.beginPath(), e.shape) {
			case "circle":
				n.canvas.ctx.arc(e.x, e.y, i, 0, 2 * Math.PI, !1);
				break;
			case "edge":
				n.canvas.ctx.rect(e.x - i, e.y - i, 2 * i, 2 * i);
				break;
			case "triangle":
				n.fn.vendors.drawShape(n.canvas.ctx, e.x - i, e.y + i / 1.66, 2 * i, 3, 2);
				break;
			case "polygon":
				n.fn.vendors.drawShape(n.canvas.ctx, e.x - i / (n.particles.shape.polygon.nb_sides / 3.5), e.y - i / .76, 2.66 * i / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 1);
				break;
			case "star":
				n.fn.vendors.drawShape(n.canvas.ctx, e.x - 2 * i / (n.particles.shape.polygon.nb_sides / 4), e.y - i / 1.52, 2 * i * 2.66 / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 2);
				break;
			case "image":
				if ("svg" == n.tmp.img_type) var r = e.img.obj;
				else var r = n.tmp.img_obj;
				r && t()
			}
			n.canvas.ctx.closePath(), n.particles.shape.stroke.width > 0 && (n.canvas.ctx.strokeStyle = n.particles.shape.stroke.color, n.canvas.ctx.lineWidth = n.particles.shape.stroke.width, n.canvas.ctx.stroke()), n.canvas.ctx.fill()
		}, n.fn.particlesCreate = function() {
			for (var t = 0; t < n.particles.number.value; t++) n.particles.array.push(new n.fn.particle(n.particles.color, n.particles.opacity.value))
		}, n.fn.particlesUpdate = function() {
			for (var t = 0; t < n.particles.array.length; t++) {
				var e = n.particles.array[t];
				if (n.particles.move.enable) {
					var i = n.particles.move.speed / 2;
					e.x += e.vx * i, e.y += e.vy * i
				}
				if (n.particles.opacity.anim.enable && (1 == e.opacity_status ? (e.opacity >= n.particles.opacity.value && (e.opacity_status = !1), e.opacity += e.vo) : (e.opacity <= n.particles.opacity.anim.opacity_min && (e.opacity_status = !0), e.opacity -= e.vo), e.opacity < 0 && (e.opacity = 0)), n.particles.size.anim.enable && (1 == e.size_status ? (e.radius >= n.particles.size.value && (e.size_status = !1), e.radius += e.vs) : (e.radius <= n.particles.size.anim.size_min && (e.size_status = !0), e.radius -= e.vs), e.radius < 0 && (e.radius = 0)), "bounce" == n.particles.move.out_mode) var o = {
					x_left: e.radius,
					x_right: n.canvas.w,
					y_top: e.radius,
					y_bottom: n.canvas.h
				};
				else var o = {
					x_left: -e.radius,
					x_right: n.canvas.w + e.radius,
					y_top: -e.radius,
					y_bottom: n.canvas.h + e.radius
				};
				switch (e.x - e.radius > n.canvas.w ? (e.x = o.x_left, e.y = Math.random() * n.canvas.h) : e.x + e.radius < 0 && (e.x = o.x_right, e.y = Math.random() * n.canvas.h), e.y - e.radius > n.canvas.h ? (e.y = o.y_top, e.x = Math.random() * n.canvas.w) : e.y + e.radius < 0 && (e.y = o.y_bottom, e.x = Math.random() * n.canvas.w), n.particles.move.out_mode) {
				case "bounce":
					e.x + e.radius > n.canvas.w ? e.vx = -e.vx : e.x - e.radius < 0 && (e.vx = -e.vx), e.y + e.radius > n.canvas.h ? e.vy = -e.vy : e.y - e.radius < 0 && (e.vy = -e.vy)
				}
				if (isInArray("grab", n.interactivity.events.onhover.mode) && n.fn.modes.grabParticle(e), (isInArray("bubble", n.interactivity.events.onhover.mode) || isInArray("bubble", n.interactivity.events.onclick.mode)) && n.fn.modes.bubbleParticle(e), (isInArray("repulse", n.interactivity.events.onhover.mode) || isInArray("repulse", n.interactivity.events.onclick.mode)) && n.fn.modes.repulseParticle(e), n.particles.line_linked.enable || n.particles.move.attract.enable) for (var s = t + 1; s < n.particles.array.length; s++) {
					var r = n.particles.array[s];
					n.particles.line_linked.enable && n.fn.interact.linkParticles(e, r), n.particles.move.attract.enable && n.fn.interact.attractParticles(e, r), n.particles.move.bounce && n.fn.interact.bounceParticles(e, r)
				}
			}
		}, n.fn.particlesDraw = function() {
			n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h), n.fn.particlesUpdate();
			for (var t = 0; t < n.particles.array.length; t++) {
				var e = n.particles.array[t];
				e.draw()
			}
		}, n.fn.particlesEmpty = function() {
			n.particles.array = []
		}, n.fn.particlesRefresh = function() {
			cancelRequestAnimFrame(n.fn.checkAnimFrame), cancelRequestAnimFrame(n.fn.drawAnimFrame), n.tmp.source_svg = void 0, n.tmp.img_obj = void 0, n.tmp.count_svg = 0, n.fn.particlesEmpty(), n.fn.canvasClear(), n.fn.vendors.start()
		}, n.fn.interact.linkParticles = function(t, e) {
			var i = t.x - e.x,
				o = t.y - e.y,
				s = Math.sqrt(i * i + o * o);
			if (s <= n.particles.line_linked.distance) {
				var r = n.particles.line_linked.opacity - s / (1 / n.particles.line_linked.opacity) / n.particles.line_linked.distance;
				if (r > 0) {
					var a = n.particles.line_linked.color_rgb_line;
					n.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + r + ")", n.canvas.ctx.lineWidth = n.particles.line_linked.width, n.canvas.ctx.beginPath(), n.canvas.ctx.moveTo(t.x, t.y), n.canvas.ctx.lineTo(e.x, e.y), n.canvas.ctx.stroke(), n.canvas.ctx.closePath()
				}
			}
		}, n.fn.interact.attractParticles = function(t, e) {
			var i = t.x - e.x,
				o = t.y - e.y,
				s = Math.sqrt(i * i + o * o);
			if (s <= n.particles.line_linked.distance) {
				var r = i / (1e3 * n.particles.move.attract.rotateX),
					a = o / (1e3 * n.particles.move.attract.rotateY);
				t.vx -= r, t.vy -= a, e.vx += r, e.vy += a
			}
		}, n.fn.interact.bounceParticles = function(t, e) {
			var i = t.x - e.x,
				n = t.y - e.y,
				o = Math.sqrt(i * i + n * n),
				s = t.radius + e.radius;
			s >= o && (t.vx = -t.vx, t.vy = -t.vy, e.vx = -e.vx, e.vy = -e.vy)
		}, n.fn.modes.pushParticles = function(t, e) {
			n.tmp.pushing = !0;
			for (var i = 0; t > i; i++) n.particles.array.push(new n.fn.particle(n.particles.color, n.particles.opacity.value, {
				x: e ? e.pos_x : Math.random() * n.canvas.w,
				y: e ? e.pos_y : Math.random() * n.canvas.h
			})), i == t - 1 && (n.particles.move.enable || n.fn.particlesDraw(), n.tmp.pushing = !1)
		}, n.fn.modes.removeParticles = function(t) {
			n.particles.array.splice(0, t), n.particles.move.enable || n.fn.particlesDraw()
		}, n.fn.modes.bubbleParticle = function(t) {
			function e() {
				t.opacity_bubble = t.opacity, t.radius_bubble = t.radius
			}
			function i(e, i, o, s, a) {
				if (e != i) if (n.tmp.bubble_duration_end) {
					if (void 0 != o) {
						var l = s - h * (s - e) / n.interactivity.modes.bubble.duration,
							c = e - l;
						p = e + c, "size" == a && (t.radius_bubble = p), "opacity" == a && (t.opacity_bubble = p)
					}
				} else if (r <= n.interactivity.modes.bubble.distance) {
					if (void 0 != o) var u = o;
					else var u = s;
					if (u != e) {
						var p = s - h * (s - e) / n.interactivity.modes.bubble.duration;
						"size" == a && (t.radius_bubble = p), "opacity" == a && (t.opacity_bubble = p)
					}
				} else "size" == a && (t.radius_bubble = void 0), "opacity" == a && (t.opacity_bubble = void 0)
			}
			if (n.interactivity.events.onhover.enable && isInArray("bubble", n.interactivity.events.onhover.mode)) {
				var o = t.x - n.interactivity.mouse.pos_x,
					s = t.y - n.interactivity.mouse.pos_y,
					r = Math.sqrt(o * o + s * s),
					a = 1 - r / n.interactivity.modes.bubble.distance;
				if (r <= n.interactivity.modes.bubble.distance) {
					if (a >= 0 && "mousemove" == n.interactivity.status) {
						if (n.interactivity.modes.bubble.size != n.particles.size.value) if (n.interactivity.modes.bubble.size > n.particles.size.value) {
							var l = t.radius + n.interactivity.modes.bubble.size * a;
							l >= 0 && (t.radius_bubble = l)
						} else {
							var c = t.radius - n.interactivity.modes.bubble.size,
								l = t.radius - c * a;
							t.radius_bubble = l > 0 ? l : 0
						}
						if (n.interactivity.modes.bubble.opacity != n.particles.opacity.value) if (n.interactivity.modes.bubble.opacity > n.particles.opacity.value) {
							var u = n.interactivity.modes.bubble.opacity * a;
							u > t.opacity && u <= n.interactivity.modes.bubble.opacity && (t.opacity_bubble = u)
						} else {
							var u = t.opacity - (n.particles.opacity.value - n.interactivity.modes.bubble.opacity) * a;
							u < t.opacity && u >= n.interactivity.modes.bubble.opacity && (t.opacity_bubble = u)
						}
					}
				} else e();
				"mouseleave" == n.interactivity.status && e()
			} else if (n.interactivity.events.onclick.enable && isInArray("bubble", n.interactivity.events.onclick.mode)) {
				if (n.tmp.bubble_clicking) {
					var o = t.x - n.interactivity.mouse.click_pos_x,
						s = t.y - n.interactivity.mouse.click_pos_y,
						r = Math.sqrt(o * o + s * s),
						h = ((new Date).getTime() - n.interactivity.mouse.click_time) / 1e3;
					h > n.interactivity.modes.bubble.duration && (n.tmp.bubble_duration_end = !0), h > 2 * n.interactivity.modes.bubble.duration && (n.tmp.bubble_clicking = !1, n.tmp.bubble_duration_end = !1)
				}
				n.tmp.bubble_clicking && (i(n.interactivity.modes.bubble.size, n.particles.size.value, t.radius_bubble, t.radius, "size"), i(n.interactivity.modes.bubble.opacity, n.particles.opacity.value, t.opacity_bubble, t.opacity, "opacity"))
			}
		}, n.fn.modes.repulseParticle = function(t) {
			function e() {
				var e = Math.atan2(p, h);
				if (t.vx = f * Math.cos(e), t.vy = f * Math.sin(e), "bounce" == n.particles.move.out_mode) {
					var i = {
						x: t.x + t.vx,
						y: t.y + t.vy
					};
					i.x + t.radius > n.canvas.w ? t.vx = -t.vx : i.x - t.radius < 0 && (t.vx = -t.vx), i.y + t.radius > n.canvas.h ? t.vy = -t.vy : i.y - t.radius < 0 && (t.vy = -t.vy)
				}
			}
			if (n.interactivity.events.onhover.enable && isInArray("repulse", n.interactivity.events.onhover.mode) && "mousemove" == n.interactivity.status) {
				var i = t.x - n.interactivity.mouse.pos_x,
					o = t.y - n.interactivity.mouse.pos_y,
					s = Math.sqrt(i * i + o * o),
					r = {
						x: i / s,
						y: o / s
					},
					a = n.interactivity.modes.repulse.distance,
					l = 100,
					c = clamp(1 / a * (-1 * Math.pow(s / a, 2) + 1) * a * l, 0, 50),
					u = {
						x: t.x + r.x * c,
						y: t.y + r.y * c
					};
				"bounce" == n.particles.move.out_mode ? (u.x - t.radius > 0 && u.x + t.radius < n.canvas.w && (t.x = u.x), u.y - t.radius > 0 && u.y + t.radius < n.canvas.h && (t.y = u.y)) : (t.x = u.x, t.y = u.y)
			} else if (n.interactivity.events.onclick.enable && isInArray("repulse", n.interactivity.events.onclick.mode)) if (n.tmp.repulse_finish || (n.tmp.repulse_count++, n.tmp.repulse_count == n.particles.array.length && (n.tmp.repulse_finish = !0)), n.tmp.repulse_clicking) {
				var a = Math.pow(n.interactivity.modes.repulse.distance / 6, 3),
					h = n.interactivity.mouse.click_pos_x - t.x,
					p = n.interactivity.mouse.click_pos_y - t.y,
					d = h * h + p * p,
					f = -a / d * 1;
				a >= d && e()
			} else 0 == n.tmp.repulse_clicking && (t.vx = t.vx_i, t.vy = t.vy_i)
		}, n.fn.modes.grabParticle = function(t) {
			if (n.interactivity.events.onhover.enable && "mousemove" == n.interactivity.status) {
				var e = t.x - n.interactivity.mouse.pos_x,
					i = t.y - n.interactivity.mouse.pos_y,
					o = Math.sqrt(e * e + i * i);
				if (o <= n.interactivity.modes.grab.distance) {
					var s = n.interactivity.modes.grab.line_linked.opacity - o / (1 / n.interactivity.modes.grab.line_linked.opacity) / n.interactivity.modes.grab.distance;
					if (s > 0) {
						var r = n.particles.line_linked.color_rgb_line;
						n.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + s + ")", n.canvas.ctx.lineWidth = n.particles.line_linked.width, n.canvas.ctx.beginPath(), n.canvas.ctx.moveTo(t.x, t.y), n.canvas.ctx.lineTo(n.interactivity.mouse.pos_x, n.interactivity.mouse.pos_y), n.canvas.ctx.stroke(), n.canvas.ctx.closePath()
					}
				}
			}
		}, n.fn.vendors.eventsListeners = function() {
			n.interactivity.el = "window" == n.interactivity.detect_on ? window : n.canvas.el, (n.interactivity.events.onhover.enable || n.interactivity.events.onclick.enable) && (n.interactivity.el.addEventListener("mousemove", function(t) {
				if (n.interactivity.el == window) var e = t.clientX,
					i = t.clientY;
				else var e = t.offsetX || t.clientX,
					i = t.offsetY || t.clientY;
				n.interactivity.mouse.pos_x = e, n.interactivity.mouse.pos_y = i, n.tmp.retina && (n.interactivity.mouse.pos_x *= n.canvas.pxratio, n.interactivity.mouse.pos_y *= n.canvas.pxratio), n.interactivity.status = "mousemove"
			}), n.interactivity.el.addEventListener("mouseleave", function() {
				n.interactivity.mouse.pos_x = null, n.interactivity.mouse.pos_y = null, n.interactivity.status = "mouseleave"
			})), n.interactivity.events.onclick.enable && n.interactivity.el.addEventListener("click", function() {
				if (n.interactivity.mouse.click_pos_x = n.interactivity.mouse.pos_x, n.interactivity.mouse.click_pos_y = n.interactivity.mouse.pos_y, n.interactivity.mouse.click_time = (new Date).getTime(), n.interactivity.events.onclick.enable) switch (n.interactivity.events.onclick.mode) {
				case "push":
					n.particles.move.enable ? n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb, n.interactivity.mouse) : 1 == n.interactivity.modes.push.particles_nb ? n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb, n.interactivity.mouse) : n.interactivity.modes.push.particles_nb > 1 && n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb);
					break;
				case "remove":
					n.fn.modes.removeParticles(n.interactivity.modes.remove.particles_nb);
					break;
				case "bubble":
					n.tmp.bubble_clicking = !0;
					break;
				case "repulse":
					n.tmp.repulse_clicking = !0, n.tmp.repulse_count = 0, n.tmp.repulse_finish = !1, setTimeout(function() {
						n.tmp.repulse_clicking = !1
					}, 1e3 * n.interactivity.modes.repulse.duration)
				}
			})
		}, n.fn.vendors.densityAutoParticles = function() {
			if (n.particles.number.density.enable) {
				var t = n.canvas.el.width * n.canvas.el.height / 1e3;
				n.tmp.retina && (t /= 2 * n.canvas.pxratio);
				var e = t * n.particles.number.value / n.particles.number.density.value_area,
					i = n.particles.array.length - e;
				0 > i ? n.fn.modes.pushParticles(Math.abs(i)) : n.fn.modes.removeParticles(i)
			}
		}, n.fn.vendors.checkOverlap = function(t, e) {
			for (var i = 0; i < n.particles.array.length; i++) {
				var o = n.particles.array[i],
					s = t.x - o.x,
					r = t.y - o.y,
					a = Math.sqrt(s * s + r * r);
				a <= t.radius + o.radius && (t.x = e ? e.x : Math.random() * n.canvas.w, t.y = e ? e.y : Math.random() * n.canvas.h, n.fn.vendors.checkOverlap(t))
			}
		}, n.fn.vendors.createSvgImg = function(t) {
			var e = n.tmp.source_svg,
				i = /#([0-9A-F]{3,6})/gi,
				o = e.replace(i, function() {
					if (t.color.rgb) var e = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + t.opacity + ")";
					else var e = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + t.opacity + ")";
					return e
				}),
				s = new Blob([o], {
					type: "image/svg+xml;charset=utf-8"
				}),
				r = window.URL || window.webkitURL || window,
				a = r.createObjectURL(s),
				l = new Image;
			l.addEventListener("load", function() {
				t.img.obj = l, t.img.loaded = !0, r.revokeObjectURL(a), n.tmp.count_svg++
			}), l.src = a
		}, n.fn.vendors.destroypJS = function() {
			cancelAnimationFrame(n.fn.drawAnimFrame), i.remove(), pJSDom = null
		}, n.fn.vendors.drawShape = function(t, e, i, n, o, s) {
			var r = o * s,
				a = o / s,
				l = 180 * (a - 2) / a,
				c = Math.PI - Math.PI * l / 180;
			t.save(), t.beginPath(), t.translate(e, i), t.moveTo(0, 0);
			for (var u = 0; r > u; u++) t.lineTo(n, 0), t.translate(n, 0), t.rotate(c);
			t.fill(), t.restore()
		}, n.fn.vendors.exportImg = function() {
			window.open(n.canvas.el.toDataURL("image/png"), "_blank")
		}, n.fn.vendors.loadImg = function(t) {
			if (n.tmp.img_error = void 0, "" != n.particles.shape.image.src) if ("svg" == t) {
				var e = new XMLHttpRequest;
				e.open("GET", n.particles.shape.image.src), e.onreadystatechange = function(t) {
					4 == e.readyState && (200 == e.status ? (n.tmp.source_svg = t.currentTarget.response, n.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), n.tmp.img_error = !0))
				}, e.send()
			} else {
				var i = new Image;
				i.addEventListener("load", function() {
					n.tmp.img_obj = i, n.fn.vendors.checkBeforeDraw()
				}), i.src = n.particles.shape.image.src
			} else console.log("Error pJS - No image.src"), n.tmp.img_error = !0
		}, n.fn.vendors.draw = function() {
			"image" == n.particles.shape.type ? "svg" == n.tmp.img_type ? n.tmp.count_svg >= n.particles.number.value ? (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : void 0 != n.tmp.img_obj ? (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame))
		}, n.fn.vendors.checkBeforeDraw = function() {
			"image" == n.particles.shape.type ? "svg" == n.tmp.img_type && void 0 == n.tmp.source_svg ? n.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(n.tmp.checkAnimFrame), n.tmp.img_error || (n.fn.vendors.init(), n.fn.vendors.draw())) : (n.fn.vendors.init(), n.fn.vendors.draw())
		}, n.fn.vendors.init = function() {
			n.fn.retinaInit(), n.fn.canvasInit(), n.fn.canvasSize(), n.fn.canvasPaint(), n.fn.particlesCreate(), n.fn.vendors.densityAutoParticles(), n.particles.line_linked.color_rgb_line = hexToRgb(n.particles.line_linked.color)
		}, n.fn.vendors.start = function() {
			isInArray("image", n.particles.shape.type) ? (n.tmp.img_type = n.particles.shape.image.src.substr(n.particles.shape.image.src.length - 3), n.fn.vendors.loadImg(n.tmp.img_type)) : n.fn.vendors.checkBeforeDraw()
		}, n.fn.vendors.eventsListeners(), n.fn.vendors.start()
	};
Object.deepExtend = function(t, e) {
	for (var i in e) e[i] && e[i].constructor && e[i].constructor === Object ? (t[i] = t[i] || {}, arguments.callee(t[i], e[i])) : t[i] = e[i];
	return t
}, window.requestAnimFrame = function() {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
	function(t) {
		window.setTimeout(t, 1e3 / 60)
	}
}(), window.cancelRequestAnimFrame = function() {
	return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(), window.pJSDom = [], window.particlesJS = function(t, e, i) {
	"string" != typeof t && (e = t, t = "particles-js"), t || (t = "particles-js"), i || (i = "top");
	var n = document.getElementById(t),
		o = "particles-js-canvas-el",
		s = n.getElementsByClassName(o);
	if (s.length) for (; s.length > 0;) n.removeChild(s[0]);
	var r = document.createElement("canvas");
	if (r.className = o, r.style.width = "100%", r.style.height = "100%", r.style.position = "absolute", r.style.top = "0", r.style.left = "0", "top" == i) var a = document.getElementById(t).appendChild(r);
	else if (0 != jQuery("#" + t).find(".upb_row_bg").length) var a = jQuery("#" + t).find(".upb_row_bg").after(r);
	else var a = document.getElementById(t).insertBefore(r, document.getElementById(t).firstChild);
	null != a && pJSDom.push(new pJS(t, e))
};