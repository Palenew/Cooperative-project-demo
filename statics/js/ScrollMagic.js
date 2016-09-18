/*! ScrollMagic v2.0.0 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://janpaepke.github.io/ScrollMagic */
!function (e, n) {
    "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n) : n(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
}(this, function (e, n, t) {
    "use strict";
    e.Scene.addOption("tweenChanges", !1, function (e) {
        return !!e
    }), e.Scene.extend(function () {
        var e, r = this;
        r.on("progress.plugin_gsap", function () {
            i()
        }), r.on("destroy.plugin_gsap", function (e) {
            r.removeTween(e.reset)
        });
        var i = function () {
            if (e) {
                var n = r.progress(), t = r.state();
                e.repeat && -1 === e.repeat() ? "DURING" === t && e.paused() ? e.play() : "DURING" === t || e.paused() || e.pause() : n != e.progress() && (0 === r.duration() ? n > 0 ? e.play() : e.reverse() : r.tweenChanges() && e.tweenTo ? e.tweenTo(n * e.duration()) : e.progress(n).pause())
            }
        };
        r.setTween = function (o, a, s) {
            var u;
            arguments.length > 1 && (arguments.length < 3 && (s = a, a = 1), o = n.to(o, a, s));
            try {
                u = t ? new t({smoothChildTiming: !0}).add(o) : o, u.pause()
            } catch (p) {
                return r
            }
            return e && r.removeTween(), e = u, o.repeat && -1 === o.repeat() && (e.repeat(-1), e.yoyo(o.yoyo())), i(), r
        }, r.removeTween = function (n) {
            return e && (n && e.progress(0).pause(), e.kill(), e = void 0), r
        }
    })
});
;
/*!--------------------------------------------------------------------
 JAVASCRIPT "Outdated Browser"
 Version:    1.1.0 - 2014
 author:     Burocratik
 website:    http://www.burocratik.com
 * @preserve
 -----------------------------------------------------------------------*/
var outdatedBrowser = function (t) {
    function o(t) {
        s.style.opacity = t / 100, s.style.filter = "alpha(opacity=" + t + ")"
    }

    function e(t) {
        o(t), 1 == t && (s.style.display = "block"), 100 == t && (u = !0)
    }

    function r() {
        var t = document.getElementById("btnCloseUpdateBrowser"), o = document.getElementById("btnUpdateBrowser");
        s.style.backgroundColor = bkgColor, s.style.color = txtColor, s.children[0].style.color = txtColor, s.children[1].style.color = txtColor, o.style.color = txtColor, o.style.borderColor && (o.style.borderColor = txtColor), t.style.color = txtColor, t.onmousedown = function () {
            return s.style.display = "none", !1
        }, o.onmouseover = function () {
            this.style.color = bkgColor, this.style.backgroundColor = txtColor
        }, o.onmouseout = function () {
            this.style.color = txtColor, this.style.backgroundColor = bkgColor
        }
    }

    function l() {
        var t = !1;
        if (window.XMLHttpRequest)t = new XMLHttpRequest; else if (window.ActiveXObject)try {
            t = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (o) {
            try {
                t = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (o) {
                t = !1
            }
        }
        return t
    }

    function a(t) {
        var o = l();
        return o && (o.onreadystatechange = function () {
            n(o)
        }, o.open("GET", t, !0), o.send(null)), !1
    }

    function n(t) {
        var o = document.getElementById("outdated");
        return 4 == t.readyState && (o.innerHTML = 200 == t.status || 304 == t.status ? t.responseText : d, r()), !1
    }

    var s = document.getElementById("outdated");
    this.defaultOpts = {
        bgColor: "#f25648",
        color: "#ffffff",
        lowerThan: "transform",
        languagePath: "../outdatedbrowser/lang/en.html"
    }, t ? ("IE8" == t.lowerThan || "borderSpacing" == t.lowerThan ? t.lowerThan = "borderSpacing" : "IE9" == t.lowerThan || "boxShadow" == t.lowerThan ? t.lowerThan = "boxShadow" : "IE10" == t.lowerThan || "transform" == t.lowerThan || "" == t.lowerThan || "undefined" == typeof t.lowerThan ? t.lowerThan = "transform" : ("IE11" == t.lowerThan || "borderImage" == t.lowerThan) && (t.lowerThan = "borderImage"), this.defaultOpts.bgColor = t.bgColor, this.defaultOpts.color = t.color, this.defaultOpts.lowerThan = t.lowerThan, this.defaultOpts.languagePath = t.languagePath, bkgColor = this.defaultOpts.bgColor, txtColor = this.defaultOpts.color, cssProp = this.defaultOpts.lowerThan, languagePath = this.defaultOpts.languagePath) : (bkgColor = this.defaultOpts.bgColor, txtColor = this.defaultOpts.color, cssProp = this.defaultOpts.lowerThan, languagePath = this.defaultOpts.languagePath);
    var u = !0, i = function () {
        var t = document.createElement("div"), o = "Khtml Ms O Moz Webkit".split(" "), e = o.length;
        return function (r) {
            if (r in t.style)return !0;
            for (r = r.replace(/^[a-z]/, function (t) {
                return t.toUpperCase()
            }); e--;)if (o[e] + r in t.style)return !0;
            return !1
        }
    }();
    if (!i("" + cssProp)) {
        if (u && "1" !== s.style.opacity) {
            u = !1;
            for (var c = 1; 100 >= c; c++)setTimeout(function (t) {
                return function () {
                    e(t)
                }
            }(c), 8 * c)
        }
        " " === languagePath || 0 == languagePath.length ? r() : a(languagePath);
        var d = '<h6>Votre navigateur web est obsolète !</h6><p>Mettez à jour votre navigateur pour afficher correctement notre site internet. <a id="btnUpdateBrowser" href="http://outdatedbrowser.com/fr">Mettre à jour maintenant</a></p><p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>'
    }
};
;
function shuffleArray(e) {
    for (var t, n, i = e.length; i; t = parseInt(Math.random() * i), n = e[--i], e[i] = e[t], e[t] = n);
    return e
}
function animateNavBar(e) {
    jQuery(e).hasClass("clicked") || (jQuery(e).addClass("clicked"), setTimeout(function () {
        jQuery(e).addClass("noTransition").removeClass("clicked")
    }, 900), setTimeout(function () {
        jQuery(e).removeClass("noTransition")
    }, 915))
}
var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "Other", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown"
    },
    searchString: function (e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t].string;
            if (this.versionSearchString = e[t].subString, -1 !== n.indexOf(e[t].subString))return e[t].identity
        }
    },
    searchVersion: function (e) {
        var t = e.indexOf(this.versionSearchString);
        if (-1 !== t) {
            var n = e.indexOf("rv:");
            return parseFloat("Trident" === this.versionSearchString && -1 !== n ? e.substring(n + 3) : e.substring(t + this.versionSearchString.length + 1))
        }
    },
    dataBrowser: [{string: navigator.userAgent, subString: "Chrome", identity: "Chrome"}, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer"
    }, {string: navigator.userAgent, subString: "Trident", identity: "Explorer"}, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {string: navigator.userAgent, subString: "Safari", identity: "Safari"}, {
        string: navigator.userAgent,
        subString: "Opera",
        identity: "Opera"
    }]
}, mainTitleHeight, tStart, tEnd, headerHeight;
!function (e) {
    e.fn.showUp = function (t, n) {
        n = n || {};
        var i = e(t), a = n.down || "navbar-hide", r = n.up || "navbar-show", o = n.btnHideShow || ".btn-hide-show", s = n.offset || mainTitleHeight + 150, c = 0, l, u = 3;
        e(window).scroll(function () {
            l = e(this).scrollTop(), scrollDifference = Math.abs(l - c), l > mainTitleHeight + 150 && scrollDifference >= u && (l > c ? i.removeClass(r).addClass(a) : i.removeClass(a).addClass(r)), c = l
        }), e(o).click(function () {
            i.hasClass(a) ? i.removeClass(a).addClass(r) : i.removeClass(r).addClass(a)
        })
    }
}(jQuery), jQuery(document).ready(function () {
    var e = 420, t = 220, n = ".btn-fixed-bottom", i = ".back-to-top";
    jQuery(window).scroll(function () {
        jQuery(this).scrollTop() > t ? jQuery(n).fadeIn(e) : jQuery(n).fadeOut(e)
    }), jQuery(i).click(function (t) {
        return t.preventDefault(), jQuery("html, body").animate({scrollTop: 0}, e), !1
    })
}), hash = function (e) {
    history.pushState ? history.pushState(null, null, e) : location.hash = e
}, window.Modernizr = function (e, t, n) {
    function i(e) {
        g.cssText = e
    }

    function a(e, t) {
        return i(prefixes.join(e + ";") + (t || ""))
    }

    function r(e, t) {
        return typeof e === t
    }

    function o(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function s(e, t) {
        for (var i in e) {
            var a = e[i];
            if (!o(a, "-") && g[a] !== n)return "pfx" == t ? a : !0
        }
        return !1
    }

    function c(e, t, i) {
        for (var a in e) {
            var o = t[e[a]];
            if (o !== n)return i === !1 ? e[a] : r(o, "function") ? o.bind(i || t) : o
        }
        return !1
    }

    function l(e, t, n) {
        var i = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + w.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? s(a, t) : (a = (e + " " + S.join(i + " ") + i).split(" "), c(a, t, n))
    }

    var u = "2.6.2", d = {}, f = !0, h = t.documentElement, p = "modernizr", m = t.createElement(p), g = m.style, v, y = {}.toString, b = "Webkit Moz O ms", w = b.split(" "), S = b.toLowerCase().split(" "), C = {}, T = {}, k = {}, E = [], j = E.slice, x, H = {}.hasOwnProperty, M;
    M = r(H, "undefined") || r(H.call, "undefined") ? function (e, t) {
        return t in e && r(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return H.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t)throw new TypeError;
        var n = j.call(arguments, 1), i = function () {
            if (this instanceof i) {
                var a = function () {
                };
                a.prototype = t.prototype;
                var r = new a, o = t.apply(r, n.concat(j.call(arguments)));
                return Object(o) === o ? o : r
            }
            return t.apply(e, n.concat(j.call(arguments)))
        };
        return i
    }), C.cssanimations = function () {
        return l("animationName")
    };
    for (var F in C)M(C, F) && (x = F.toLowerCase(), d[x] = C[F](), E.push((d[x] ? "" : "no-") + x));
    return d.addTest = function (e, t) {
        if ("object" == typeof e)for (var i in e)M(e, i) && d.addTest(i, e[i]); else {
            if (e = e.toLowerCase(), d[e] !== n)return d;
            t = "function" == typeof t ? t() : t, "undefined" != typeof f && f && (h.className += " " + (t ? "" : "no-") + e), d[e] = t
        }
        return d
    }, i(""), m = v = null, function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"), i = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
        }

        function i() {
            var e = v.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function a(e) {
            var t = m[e[h]];
            return t || (t = {}, p++, e[h] = p, m[p] = t), t
        }

        function r(e, n, i) {
            if (n || (n = t), g)return n.createElement(e);
            i || (i = a(n));
            var r;
            return r = i.cache[e] ? i.cache[e].cloneNode() : d.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), r.canHaveChildren && !u.test(e) ? i.frag.appendChild(r) : r
        }

        function o(e, n) {
            if (e || (e = t), g)return e.createDocumentFragment();
            n = n || a(e);
            for (var r = n.frag.cloneNode(), o = 0, s = i(), c = s.length; c > o; o++)r.createElement(s[o]);
            return r
        }

        function s(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return v.shivMethods ? r(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function (e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(v, t.frag)
        }

        function c(e) {
            e || (e = t);
            var i = a(e);
            return v.shivCSS && !f && !i.hasCSS && (i.hasCSS = !!n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), g || s(e, i), e
        }

        var l = e.html5 || {}, u = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, h = "_html5shiv", p = 0, m = {}, g;
        !function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", f = "hidden"in e, g = 1 == e.childNodes.length || function () {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                    }()
            } catch (n) {
                f = !0, g = !0
            }
        }();
        var v = {
            elements: l.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: l.shivCSS !== !1,
            supportsUnknownElements: g,
            shivMethods: l.shivMethods !== !1,
            type: "default",
            shivDocument: c,
            createElement: r,
            createDocumentFragment: o
        };
        e.html5 = v, c(t)
    }(this, t), d._version = u, d._domPrefixes = S, d._cssomPrefixes = w, d.testProp = function (e) {
        return s([e])
    }, d.testAllProps = l, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + E.join(" ") : ""), d
}(this, this.document), function (e, t, n) {
    function i(e) {
        return "[object Function]" == p.call(e)
    }

    function a(e) {
        return "string" == typeof e
    }

    function r() {
    }

    function o(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function s() {
        var e = m.shift();
        g = 1, e ? e.t ? f(function () {
            ("c" == e.t ? x.injectCss : x.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), s()) : g = 0
    }

    function c(e, n, i, a, r, c, l) {
        function u(t) {
            if (!p && o(d.readyState) && (w.r = p = 1, !g && s(), d.onload = d.onreadystatechange = null, t)) {
                "img" != e && f(function () {
                    b.removeChild(d)
                }, 50);
                for (var i in k[n])k[n].hasOwnProperty(i) && k[n][i].onload()
            }
        }

        var l = l || x.errorTimeout, d = t.createElement(e), p = 0, v = 0, w = {t: i, s: n, e: r, a: c, x: l};
        1 === k[n] && (v = 1, k[n] = []), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function () {
            u.call(this, v)
        }, m.splice(a, 0, w), "img" != e && (v || 2 === k[n] ? (b.insertBefore(d, y ? null : h), f(u, l)) : k[n].push(d))
    }

    function l(e, t, n, i, r) {
        return g = 0, t = t || "j", a(e) ? c("c" == t ? S : w, e, t, this.i++, n, i, r) : (m.splice(this.i++, 0, e), 1 == m.length && s()), this
    }

    function u() {
        var e = x;
        return e.loader = {load: l, i: 0}, e
    }

    var d = t.documentElement, f = e.setTimeout, h = t.getElementsByTagName("script")[0], p = {}.toString, m = [], g = 0, v = "MozAppearance"in d.style, y = v && !!t.createRange().compareNode, b = y ? d : h.parentNode, d = e.opera && "[object Opera]" == p.call(e.opera), d = !!t.attachEvent && !d, w = v ? "object" : d ? "script" : "img", S = d ? "script" : w, C = Array.isArray || function (e) {
            return "[object Array]" == p.call(e)
        }, T = [], k = {}, E = {
        timeout: function (e, t) {
            return t.length && (e.timeout = t[0]), e
        }
    }, j, x;
    x = function (e) {
        function t(e) {
            var e = e.split("!"), t = T.length, n = e.pop(), i = e.length, n = {
                url: n,
                origUrl: n,
                prefixes: e
            }, a, r, o;
            for (r = 0; i > r; r++)o = e[r].split("="), (a = E[o.shift()]) && (n = a(n, o));
            for (r = 0; t > r; r++)n = T[r](n);
            return n
        }

        function o(e, a, r, o, s) {
            var c = t(e), l = c.autoCallback;
            c.url.split(".").pop().split("?").shift(), c.bypass || (a && (a = i(a) ? a : a[e] || a[o] || a[e.split("/").pop().split("?")[0]]), c.instead ? c.instead(e, a, r, o, s) : (k[c.url] ? c.noexec = !0 : k[c.url] = 1, r.load(c.url, c.forceCSS || !c.forceJS && "css" == c.url.split(".").pop().split("?").shift() ? "c" : n, c.noexec, c.attrs, c.timeout), (i(a) || i(l)) && r.load(function () {
                u(), a && a(c.origUrl, s, o), l && l(c.origUrl, s, o), k[c.url] = 2
            })))
        }

        function s(e, t) {
            function n(e, n) {
                if (e) {
                    if (a(e))n || (l = function () {
                        var e = [].slice.call(arguments);
                        u.apply(this, e), d()
                    }), o(e, l, t, 0, s); else if (Object(e) === e)for (h in f = function () {
                        var t = 0, n;
                        for (n in e)e.hasOwnProperty(n) && t++;
                        return t
                    }(), e)e.hasOwnProperty(h) && (!n && !--f && (i(l) ? l = function () {
                        var e = [].slice.call(arguments);
                        u.apply(this, e), d()
                    } : l[h] = function (e) {
                        return function () {
                            var t = [].slice.call(arguments);
                            e && e.apply(this, t), d()
                        }
                    }(u[h])), o(e[h], l, t, h, s))
                } else!n && d()
            }

            var s = !!e.test, c = e.load || e.both, l = e.callback || r, u = l, d = e.complete || r, f, h;
            n(s ? e.yep : e.nope, !!c), c && n(c)
        }

        var c, l, d = this.yepnope.loader;
        if (a(e))o(e, 0, d, 0); else if (C(e))for (c = 0; c < e.length; c++)l = e[c], a(l) ? o(l, 0, d, 0) : C(l) ? x(l) : Object(l) === l && s(l, d); else Object(e) === e && s(e, d)
    }, x.addPrefix = function (e, t) {
        E[e] = t
    }, x.addFilter = function (e) {
        T.push(e)
    }, x.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", j = function () {
        t.removeEventListener("DOMContentLoaded", j, 0), t.readyState = "complete"
    }, 0)), e.yepnope = u(), e.yepnope.executeStack = s, e.yepnope.injectJs = function (e, n, i, a, c, l) {
        var u = t.createElement("script"), d, p, a = a || x.errorTimeout;
        u.src = e;
        for (p in i)u.setAttribute(p, i[p]);
        n = l ? s : n || r, u.onreadystatechange = u.onload = function () {
            !d && o(u.readyState) && (d = 1, n(), u.onload = u.onreadystatechange = null)
        }, f(function () {
            d || (d = 1, n(1))
        }, a), c ? u.onload() : h.parentNode.insertBefore(u, h)
    }, e.yepnope.injectCss = function (e, n, i, a, o, c) {
        var a = t.createElement("link"), l, n = c ? s : n || r;
        a.href = e, a.rel = "stylesheet", a.type = "text/css";
        for (l in i)a.setAttribute(l, i[l]);
        o || (h.parentNode.insertBefore(a, h), f(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, function (e) {
    "use strict";
    function t(e) {
        return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
    }

    function n(e, t) {
        var n = i(e, t) ? r : a;
        n(e, t)
    }

    var i, a, r;
    "classList"in document.documentElement ? (i = function (e, t) {
        return e.classList.contains(t)
    }, a = function (e, t) {
        e.classList.add(t)
    }, r = function (e, t) {
        e.classList.remove(t)
    }) : (i = function (e, n) {
        return t(n).test(e.className)
    }, a = function (e, t) {
        i(e, t) || (e.className = e.className + " " + t)
    }, r = function (e, n) {
        e.className = e.className.replace(t(n), " ")
    });
    var o = {hasClass: i, addClass: a, removeClass: r, toggleClass: n, has: i, add: a, remove: r, toggle: n};
    "function" == typeof define && define.amd ? define(o) : e.classie = o
}(window), jQuery(document).ready(function ($) {
    function e() {
        $("body.realisation").size() ? (tStart = 0, tEnd = 50) : (tStart = $("#main_title").outerHeight() - headerHeight, tEnd = $("#main_title").outerHeight()), mainTitleHeight = $("#main_title").outerHeight(), needRecalc = !1
    }

    function t() {
        $("#masthead").toggle()
    }

    function n(e, t) {
        e != et && Y >= e && e >= 1 && (animateNavBar(t), $("#histoire .pager li").removeClass("selected"), $("#histoire a[data-index=" + e + "]").parents("li").addClass("selected"), TweenLite.to($("#histoire .progressbar span"), 1, {
            css: {width: e * Z - Z / 2},
            ease: Quart.easeOut
        }), $("#histoire .slide").hide().eq(e - 1).show(), et = e)
    }

    function a(e, t, n) {
        this.icone = e, this.intitule = t, this.chiffre = n
    }

    function r(e, t, n, i, a) {
        function r() {
            o.find(".number").html(it[a].chiffre), o.find(".legend").html(it[a].intitule), o.find(".icon").removeClass().addClass("icon ss-" + it[a].icone), o.css(n), TweenLite.to(o, .5, {
                css: i,
                ease: Quint.easeOut
            })
        }

        var o = $(e);
        TweenLite.to(o, .5, {css: t, ease: Quint.easeIn, onComplete: r})
    }

    $('a[href="mailto:contact@mikii.fr"],a[href="mailto:projet@mikii.fr"]').click(function () {
        ga("send", "event", "Email", "Clic", this.href.replace(/^mailto:/i, ""))
    }), BrowserDetect.init(), document.body.className += " " + BrowserDetect.browser, $("#menu_twice").appendTo("#primary"), mainTitleHeight = $("#main_title").outerHeight(), $(window).resize(function () {
        e(), jQuery(window).scroll()
    });
    var o = 0, s = !1, c = 1, l = !1, u, d = !1, f = !1, h = !1;
    if ($("#menuSub").size() && (d = !0), $("#menuSub.dynamic").size() && (f = !0), $(".animatedOnVisible").size() && (h = !0), headerHeight = $("#masthead").outerHeight(), $("body.realisation").size()) {
        u = $("body").attr("data-color"), $("#mainNav_twice li a").css("color", u), $("<style>.bgnd{background-color:" + u + "} #menu_twice .returnHome{color:" + u + " !important} #mainNav_twice li a:after{background:" + u + " !important;} #reaFullScreen .contentReaFull .visit a:hover{color:" + u + " !important;} #reaFullScreen .nav-thumbflip a:hover .icon-wrap{color:" + u + " !important}</style>").appendTo("body");
        var p = 62, m = 83, g = p - m, v = 60, y = 95, b = v - y, w = 44, S = 65, C = w - S, T = 115, k = 193, E = T - k, j = 10, x = 10, H = j - x, M = 0, F = 10, N = M - F, O = 20, z = 30, _ = O - z, D = 65, L = 50, Q = D - L, A, I
    } else var p = 65, m = 100, g = p - m, v = 60, y = 95, b = v - y, w = 41, S = 77, C = w - S, T = 115, k = 193, E = T - k, j = 12, x = 18, H = j - x, M = 0, F = 20, N = M - F, O = 20, z = 45, _ = O - z, D = 65, L = 50, Q = D - L, A, I;
    $(window).scroll(function (e) {
        e.preventDefault(), e.stopPropagation(), l = $(this).scrollTop(), A = (l - tStart) / (tEnd - tStart), A = Math.min(1, Math.max(0, A)), l > mainTitleHeight - headerHeight - 80 ? $("#masthead").addClass("noSubMenu") : $("#masthead").removeClass("noSubMenu"), A >= .6 ? $("#menu_twice").addClass("shadow") : $("#menu_twice").removeClass("shadow"), $("#menuSub").css({height: L + Q * A}).find("li").css({lineHeight: L + Q * A + "px"}), $("#masthead,#menu_twice").css({padding: F + N * A + "px 0"}), $(".cropper").css({width: y + b * A}), $(".returnHome").css({lineHeight: m + g * A + "px"}), $(".SVGLogoContainer").css({
            margin: x + H * A + "px 10px",
            height: S + C * A,
            width: k + E * A
        }), $("#mainNav,#mainNav_twice").css("padding", z + _ * A + "px 0")
    });
    var B = new ScrollMagic.Controller;
    d && new ScrollMagic.Scene({triggerElement: "#menuSub"}).triggerHook(0).setPin("#menuSub").addTo(B);
    var P = TweenLite.to("#slogan span", 1, {css: {opacity: 0}}), q = new ScrollMagic.Scene({
        triggerElement: "#video",
        duration: mainTitleHeight
    }).triggerHook(0).setTween(P).addTo(B), U = TweenLite.fromTo(".arrowDownHeader", 1, {
        css: {
            bottom: "20%",
            opacity: 1,
            width: 30
        }
    }, {css: {bottom: "-30%", opacity: -1, width: 0}}), V = new ScrollMagic.Scene({
        triggerElement: "#video",
        duration: mainTitleHeight
    }).triggerHook(0).setTween(U).addTo(B);
    if (new ScrollMagic.Scene({triggerElement: "#primary"}).setClassToggle("#masthead", "hide").triggerHook(0).addTo(B), d && ($("#menu_twice .container").append('<a href="#" class="backTop icon-up-bold" title="Retour en haut de page" rel="nofollow"></a>'), $("#mainNav_twice").remove(), $("body").addClass("hasSubMenu"), $(".backTop").click(function (e) {
            e.preventDefault(), $("html, body").animate({scrollTop: 0}, 800)
        })), $(window).resize(function () {
            mainTitleHeight = $("#main_title").outerHeight(), q.duration(mainTitleHeight), V.duration(mainTitleHeight)
        }), $(".arrowDownHeader").click(function (e) {
            $("html, body").animate({scrollTop: $("#primary").offset().top - 156}, 1e3)
        }), $("#menuSub.dynamic").size()) {
        var J = [], R = $("#menuSub"), G = $("a", R), K = !1, W = !1, X = $(".spacer").height();
        G.click(function (e) {
            e.preventDefault();
            var t = $($(this).attr("href")).offset().top - (R.height() + X) + 1;
            $(this).hasClass("first") && (t -= 90), $("html, body").animate({scrollTop: t}, 2e3, "easeOutQuint"), hash($(this).attr("href"))
        }), G.each(function () {
            J.push($($(this).attr("href")))
        })
    }
    if ($("#realisations3").size() && $("#realisations3 .rea a.img").each(function (e) {
            $("#realisations3").append("<style>#realisations3 .rea a.img.rea3-" + e + ":before { background:" + $(this).attr("data-color") + " } </style>")
        }), $("#histoire").size()) {
        var Y = $("#histoire .pager li").size(), Z = $("#histoire .pager li a").eq(0).width(), et = 1, tt, nt;
        $("#histoire .pager a").click(function (e) {
            e.preventDefault(), n($(this).attr("data-index"))
        }), $(".nav_prev").click(function (e) {
            nt = $(this), e.preventDefault(), n(parseInt(et) - 1, nt)
        }), $(".nav_next").click(function (e) {
            nt = $(this), e.preventDefault(), n(parseInt(et) + 1, nt)
        }), $("#histoire .progressbar span").width(Z / 2)
    }
    if ($("#chezNous").size()) {
        var it = new Array, at = 0;
        for ($("#statistiquesJS li").each(function () {
            it[at] = new a($(this).attr("data-icon"), $(this).attr("data-intitule"), $(this).attr("data-value")), at += 1
        }), $("#statistiquesJS").remove(), it = shuffleArray(it), i = 0; 4 > i; i++)$(".statsContainer").append('<div class="stats rouge margiGrid"><div class="mover"><i class="icon ss-' + it[i].icone + '"></i><br/><strong class="number">' + it[i].chiffre + '</strong><br/><p class="legend">' + it[i].intitule + "</p></div>");
        var rt = it.length, ot = $(".stats").eq(0).outerHeight(), st = $(".stats").eq(0).css("paddingTop"), ct = $(".stats").eq(0).width(), lt, ut, dt, ft, ht = 99, pt = 99, mt = 99, gt = 99, vt = 4;
        $(".stats").css({height: ot, padding: 0}), $(".stats .mover").css({
            paddingTop: st,
            position: "absolute",
            top: 0,
            width: "100%"
        }), window.setInterval(function () {
            for (var e = Math.round(3 * Math.random()); e == ht || e == pt;)e = Math.round(3 * Math.random());
            for (i = e, pt = ht, ht = i, e = Math.floor(4 * Math.random() + 1); e == mt || e == gt;)e = Math.floor(3 * Math.random() + 1);
            switch (gt = mt, mt = e, ft = $(".stats").eq(i).find(".mover"), e) {
                case 1:
                    lt = {top: ot - parseInt(st), opacity: 0}, ut = {top: -(ot - parseInt(st))}, dt = {
                        top: 0,
                        opacity: 1
                    };
                    break;
                case 2:
                    lt = {top: -(ot - parseInt(st)), opacity: 0}, ut = {top: ot - parseInt(st)}, dt = {
                        top: 0,
                        opacity: 1
                    };
                    break;
                case 3:
                    lt = {left: -(ct / 2), opacity: 0}, ut = {left: ct / 2}, dt = {left: 0, opacity: 1};
                    break;
                case 4:
                    lt = {left: ct / 2, opacity: 0}, ut = {left: -(ct / 2)}, dt = {left: 0, opacity: 1}
            }
            r(ft, lt, ut, dt, vt), vt += 1, vt == rt && (vt = 0)
        }, 4e3)
    }
    if ($(".animatedOnVisible").size() && $(".animatedOnVisible").each(function (e, t) {
            new ScrollMagic.Scene({triggerElement: t}).triggerHook(.8).setClassToggle(t, "animatedNow").addTo(B)
        }), $("#whatisit").size()) {
        var yt = $("#listIcon"), bt, wt = $("#iconInBig img"), St = $("#iconInBig span"), Ct;
        setInterval(function () {
            bt = yt.find("li:first-child"), TweenLite.to(yt, 1.5, {
                left: "130px",
                ease: Expo.easeOut,
                onComplete: function () {
                    yt.append(bt.attr("data-position", 0)), yt.css("left", 0)
                }
            }), bt.addClass("big"), TweenLite.to(bt, 1.5, {
                opacity: 0, ease: Expo.easeOut, onComplete: function () {
                    bt.css("opacity", 1).removeClass("big")
                }
            }), wt.addClass("flip"), St.fadeOut(400, function () {
                $(this).html(bt.attr("data-title")).delay(200).fadeIn()
            }), setTimeout(function () {
                wt.removeAttr("data-srcset srcset"), Ct = bt.find("img").attr("src").replace(".png", "@2x.png"), wt.attr("src", Ct)
            }, 150), setTimeout(function () {
                wt.removeClass("flip")
            }, 2e3)
        }, 4e3)
    }
    $("#navigateur .smallb").size() && $("#navigateur .smallb").each(function () {
        $(this).width(Math.floor(20 * Math.random()) + 80 + "%")
    }), $("#formulaireContact button").click(function (e) {
        e.preventDefault()
    }), $(".list404 .member").click(function () {
        if (!$(".killed").size()) {
            var e = $(this).find("strong").html(), t = $(this).find("i").html().replace("A déjà", "Il a déjà"), n = $(this).find("span.nb").html();
            n = parseInt(n) + 1, $("body").addClass("killed"), $(this).addClass("killed").find("img").eq(2).remove(), $(this).find("strong").html(e + " est triste"), $(this).find("i").html(t + " !"), $.ajax({
                type: "POST",
                url: "http://www.mikii.fr/wp-content/themes/mikii/updateKill.php",
                data: {membre: e}
            }), $(this).find("span.nb").html(n)
        }
    }), outdatedBrowser({
        bgColor: "#f44a4f",
        color: "#ffffff",
        lowerThan: "transform",
        languagePath: "outdatedbrowser/lang/en.html"
    }), $().showUp("#menu_twice,#menuSub", {upClass: "navbar-show", downClass: "navbar-hide"}), setTimeout(function () {
        $("#menu_twice").fadeIn(150)
    }, 300);
    var Tt, kt, Et, jt = $(".returnHome");
    if ($(".hasSubMenu").size() ? (Tt = $("#logoHeader_twice").css("fill"), kt = "#FFFFFF") : (Tt = "#f44a4f", kt = Tt), $(".clicker").hover(function () {
            Et = $(jt).attr("data-hexa"), Et && (Tt = "#FFF", kt = Et, $(jt).css("color", "#FFF")), $(jt).css({
                opacity: 1,
                marginLeft: "5px",
                color: kt
            })
        }, function () {
            $(jt).css({opacity: 0, marginLeft: "0", color: Tt})
        }), e(), jQuery(window).scroll(), setTimeout(function () {
            $(".menu-mobile").removeAttr("style")
        }, 500), $("body.realisation").size() && $("body").append("<style>.menu-button::before{background: linear-gradient(" + u + " 20%, transparent 20%, transparent 40%, " + u + " 40%, " + u + " 60%, transparent 60%, transparent 80%, " + u + " 80%) repeat scroll 0 0 rgba(0, 0, 0, 0) !important;}</style>"), $("body.adwspage").size()) {
        var xt;
        $("a").not('a[href*="mailto"]').not('a[href*="partners"]').each(function () {
            xt = $(this).attr("href"), xt && "/" == xt[xt.length - 1] && (xt = xt.slice(0, -1)), xt && -1 === xt.indexOf("aws") && $(this).attr("href", xt + "/?aws=1")
        })
    }
}), window.onload = function () {
    jQuery(window).scroll(), setTimeout(function () {
        jQuery("#sliderHome").size() && (jQuery(".ls-nav-prev,.ls-nav-next").append("<span class='traitHaut'></span><span class='traitBas'></span>"), jQuery(".ls-nav-prev,.ls-nav-next").click(function (e) {
            nav_bar = jQuery(this), e.preventDefault(), animateNavBar(nav_bar)
        }))
    }, 600)
};