!function (e) {
    var t = false || document.getElementById("newBridge");
    !function (e) {
        function t(e, t) {
            return P(e, t)
        }

        function i(e, t, i) {
            if (null == i && (null == t ? (i = e, e = null) : (i = t, t = null, e instanceof Array && (t = e, e = null))), null != i) {
                var n = window.opera;
                if (!e && document.attachEvent && (!n || "[object Opera]" !== n.toString())) {
                    var a = W();
                    e = a && a.getAttribute("data-require-id")
                }
                e ? (o(e, t, i), J && clearTimeout(J)) : R[0] = {deps: t, factory: i}
            }
        }

        function n() {
            var e = B.config[this.id];
            return e && "object" == typeof e ? e : {}
        }

        function o(e, t, i) {
            C[e] || (C[e] = {
                id: e,
                depsDec: t,
                deps: t || ["require", "exports", "module"],
                factoryDeps: [],
                factory: i,
                exports: {},
                config: n,
                state: A,
                require: _(e),
                depMs: [],
                depMkv: {},
                depRs: [],
                depPMs: []
            })
        }

        function a(e) {
            var t = C[e];
            if (t && !c(e, F)) {
                var i = t.deps, n = t.factory, o = 0;
                "function" == typeof n && (o = Math.min(n.length, i.length), !t.depsDec && n.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, "").replace(/require\(\s*(['"'])([^'"]+)\1\s*\)/g, function (e, t, n) {
                    i.push(n)
                }));
                var a = [];
                S(i, function (i, n) {
                    var r, s, l = w(i), c = x(l.mod, e);
                    c && !D[c] ? (l.res && (s = {
                        id: i,
                        mod: c,
                        res: l.res
                    }, T[c] = 1, t.depPMs.push(c), t.depRs.push(s)), r = t.depMkv[c], r || (r = {
                        id: l.mod,
                        absId: c,
                        hard: o > n
                    }, t.depMs.push(r), t.depMkv[c] = r, a.push(c))) : r = {absId: c}, o > n && t.factoryDeps.push(s || r)
                }), t.state = F, l(e), g(a)
            }
        }

        function r() {
            for (var e in T)s(e), h(e)
        }

        function s(e) {
            function t(e) {
                if (!c(e, F))return !1;
                if (c(e, M) || i[e])return !0;
                i[e] = 1;
                var n = C[e], o = !0;
                return S(n.depMs, function (e) {
                    return o = t(e.absId)
                }), o && S(n.depRs, function (e) {
                    return o = !(!e.absId || !c(e.absId, O))
                }), o && (n.state = M), o
            }

            var i = {};
            t(e)
        }

        function l(t) {
            function i() {
                if (!n && o.state === M) {
                    n = 1;
                    var i = 1, a = [];
                    if (S(o.factoryDeps, function (e) {
                            var t = e.absId;
                            return D[t] || (h(t), c(t, O)) ? void a.push(t) : (i = 0, !1)
                        }), i) {
                        try {
                            var r = d(a, {
                                require: o.require,
                                exports: o.exports,
                                module: o
                            }), s = o.factory, l = "function" == typeof s ? s.apply(e, r) : s;
                            null != l && (o.exports = l), o.invokeFactory = null, delete T[t]
                        } catch (u) {
                            if (n = 0, /^\[MODULE_MISS\]"([^"]+)/.test(u.message)) {
                                var f = o.depMkv[RegExp.$1];
                                return void(f && (f.hard = 1))
                            }
                            throw u
                        }
                        m(t)
                    }
                }
            }

            var n, o = C[t];
            o.invokeFactory = i, S(o.depPMs, function (e) {
                u(e, function () {
                    S(o.depRs, function (i) {
                        i.absId || i.mod !== e || (i.absId = x(i.id, t), g([i.absId], r))
                    })
                })
            })
        }

        function c(e, t) {
            return C[e] && C[e].state >= t
        }

        function h(e) {
            var t = C[e];
            t && t.invokeFactory && t.invokeFactory()
        }

        function d(e, t) {
            var i = [];
            return S(e, function (e, n) {
                i[n] = t[e] || f(e)
            }), i
        }

        function u(e, t) {
            if (c(e, O))return void t();
            var i = N[e];
            i || (i = N[e] = []), i.push(t)
        }

        function m(e) {
            var t = N[e] || [], i = C[e];
            i.state = O;
            for (var n = t.length; n--;)t[n]();
            t.length = 0, delete N[e]
        }

        function f(e) {
            return c(e, O) ? C[e].exports : null
        }

        function p(e) {
            S(R, function (t) {
                o(e, t.deps, t.factory)
            }), R.length = 0, a(e)
        }

        function g(t, i, n, o) {
            function s() {
                if (!l) {
                    var n = 1;
                    S(t, function (e) {
                        return D[e] ? void 0 : n = !!c(e, O)
                    }), n && (l = 1, "function" == typeof i && i.apply(e, d(t, D)))
                }
            }

            if ("string" == typeof t) {
                if (h(t), !c(t, O))throw new Error('[MODULE_MISS]"' + t + '" is not exists!');
                return f(t)
            }
            o = o || {};
            var l = 0;
            t instanceof Array && (s(), l || (S(t, function (e) {
                D[e] || c(e, O) || (u(e, s), o[e] || (e.indexOf("!") > 0 ? U : V)(e, n), a(e))
            }), r()))
        }

        function V(e) {
            function t() {
                var t = i.readyState;
                if ("undefined" == typeof t || /^(loaded|complete)$/.test(t)) {
                    i.onload = i.onreadystatechange = null, i = null, p(e);
                    for (var n in T)a(n);
                    r()
                }
            }

            if (!z[e] && !C[e]) {
                z[e] = 1;
                var i = document.createElement("script");
                i.setAttribute("charset", "utf-8"), i.setAttribute("data-require-id", e), i.src = k(e + ".js"), i.async = !0, i.readyState ? i.onreadystatechange = t : i.onload = t, X(i)
            }
        }

        function U(e, t) {
            function i(t) {
                r.exports = t || !0, m(e)
            }

            function o(o) {
                var r = t ? C[t].require : P;
                o.load(a.res, r, i, n.call({id: e}))
            }

            if (!C[e]) {
                var a = w(e), r = {id: e, state: F};
                C[e] = r, i.fromText = function (e, t) {
                    T[e] = 1, new Function(t)(), p(e)
                }, o(f(a.mod))
            }
        }

        function y(e, t) {
            var i = I(e, 1, t);
            return i.sort(K), i
        }

        function b() {
            B.baseUrl = B.baseUrl.replace(/\/$/, "") + "/", H = y(B.paths), Y = y(B.map, 1), S(Y, function (e) {
                e.v = y(e.v)
            }), G = [], S(B.packages, function (e) {
                var t = e;
                "string" == typeof e && (t = {
                    name: e.split("/")[0],
                    location: e,
                    main: "main"
                }), t.location = t.location || t.name, t.main = (t.main || "main").replace(/\.js$/i, ""), t.reg = E(t.name), G.push(t)
            }), G.sort(K), q = y(B.urlArgs, 1), j = y(B.noRequests), S(j, function (e) {
                var t = e.v, i = {};
                e.v = i, t instanceof Array || (t = [t]), S(t, function (e) {
                    i[e] = 1
                })
            })
        }

        function v(e, t, i) {
            S(t, function (t) {
                return t.reg.test(e) ? (i(t.v, t.k, t), !1) : void 0
            })
        }

        function k(e) {
            var t = /(\.[a-z0-9]+)$/i, i = /(\?[^#]*)$/, n = "", o = e, a = "";
            i.test(e) && (a = RegExp.$1, e = e.replace(i, "")), t.test(e) && (n = RegExp.$1, o = e.replace(t, ""));
            var r, s = o;
            return v(o, H, function (e, t) {
                s = s.replace(t, e), r = 1
            }), r || v(o, G, function (e, t, i) {
                s = s.replace(i.name, i.location)
            }), /^([a-z]{2,10}:\/)?\//i.test(s) || (s = B.baseUrl + s), s += n + a, v(o, q, function (e) {
                s += (s.indexOf("?") > 0 ? "&" : "?") + e
            }), s
        }

        function _(e) {
            function t(t, n) {
                if ("string" == typeof t)return i[t] || (i[t] = g(x(t, e))), i[t];
                if (t instanceof Array) {
                    var o = [], a = [], r = [];
                    S(t, function (t, i) {
                        var n = w(t), s = x(n.mod, e);
                        a.push(s), T[s] = 1, n.res ? (o.push(s), r[i] = null) : r[i] = s
                    });
                    var s = {};
                    S(a, function (e) {
                        var t;
                        v(e, j, function (e) {
                            t = e
                        }), t && (t["*"] ? s[e] = 1 : S(a, function (i) {
                            return t[i] ? (s[e] = 1, !1) : void 0
                        }))
                    }), g(a, function () {
                        S(r, function (i, n) {
                            null == i && (r[n] = x(t[n], e))
                        }), g(r, n, e)
                    }, e, s)
                }
            }

            var i = {};
            return t.toUrl = function (t) {
                return k(x(t, e))
            }, t
        }

        function x(e, t) {
            if (!e)return "";
            t = t || "";
            var i = w(e);
            if (!i)return e;
            var n = i.res, o = L(i.mod, t);
            if (S(G, function (e) {
                    var t = e.name;
                    return t === o ? (o = t + "/" + e.main, !1) : void 0
                }), v(t, Y, function (e) {
                    v(o, e, function (e, t) {
                        o = o.replace(t, e)
                    })
                }), n) {
                var a = f(o);
                n = a.normalize ? a.normalize(n, function (e) {
                    return x(e, t)
                }) : x(n, t), o += "!" + n
            }
            return o
        }

        function L(e, t) {
            if (0 === e.indexOf(".")) {
                var i = t.split("/"), n = e.split("/"), o = i.length - 1, a = n.length, r = 0, s = 0;
                e:for (var l = 0; a > l; l++) {
                    var c = n[l];
                    switch (c) {
                        case"..":
                            if (!(o > r))break e;
                            r++, s++;
                            break;
                        case".":
                            s++;
                            break;
                        default:
                            break e
                    }
                }
                return i.length = o - r, n = n.slice(s), i.concat(n).join("/")
            }
            return e
        }

        function w(e) {
            var t = e.split("!");
            return t[0] ? {mod: t[0], res: t[1]} : null
        }

        function I(e, t, i) {
            var n = [];
            for (var o in e)if (e.hasOwnProperty(o)) {
                var a = {k: o, v: e[o]};
                n.push(a), t && (a.reg = "*" === o && i ? /^/ : E(o))
            }
            return n
        }

        function W() {
            if (Q)return Q;
            if (Z && "interactive" === Z.readyState)return Z;
            for (var e = document.getElementsByTagName("script"), t = e.length; t--;) {
                var i = e[t];
                if ("interactive" === i.readyState)return Z = i, i
            }
        }

        function X(e) {
            Q = e, ee ? $.insertBefore(e, ee) : $.appendChild(e), Q = null
        }

        function E(e) {
            return new RegExp("^" + e + "(/|$)")
        }

        function S(e, t) {
            if (e instanceof Array)for (var i = 0, n = e.length; n > i && t(e[i], i) !== !1; i++);
        }

        function K(e, t) {
            var i = e.k || e.name, n = t.k || t.name;
            return "*" === n ? -1 : "*" === i ? 1 : n.length - i.length
        }

        var C = {}, T = {}, A = 1, F = 2, M = 3, O = 4, P = _();
        t.version = "1.8.6", t.loader = "esl", t.toUrl = P.toUrl;
        var J;
        i.amd = {};
        var N = {}, D = {require: t, exports: 1, module: 1}, R = [], z = {}, B = {
            baseUrl: "./",
            paths: {},
            config: {},
            map: {},
            packages: [],
            noRequests: {},
            urlArgs: {}
        };
        t.config = function (e) {
            function t(e) {
                o.push(e)
            }

            if (e) {
                for (var i in B) {
                    var n = e[i], o = B[i];
                    if (n)if ("urlArgs" === i && "string" == typeof n)B.urlArgs["*"] = n; else if (o instanceof Array)S(n, t); else if ("object" == typeof o)for (var i in n)o[i] = n[i]; else B[i] = n
                }
                b()
            }
        }, b();
        var H, G, Y, q, j, Q, Z, $ = document.getElementsByTagName("head")[0], ee = document.getElementsByTagName("base")[0];
        ee && ($ = ee.parentNode), e.define || (e.define = i, e.require || (e.require = t), e.esl = t)
    }(t);
    var require = t.require, define = t.define;
    require.config({
        'baseUrl': 'http://s.goutong.baidu.com/embed/1470026693/asset/',
        'paths': {'cl': 'common/css'},
        'packages': [{'name': 'lib', 'location': 'common', 'main': 'lib'}, {
            'name': 'bull',
            'location': '../dep/bull/asset',
            'main': 'main'
        }, {'name': 'im-lib', 'location': '../dep/im-lib/0.1.0/asset/pc', 'main': 'main'}, {
            'name': 'im-core',
            'location': '../dep/im-core/0.2.0/asset',
            'main': 'main'
        }, {'name': 'im-editor', 'location': '../dep/im-editor/0.1.0/asset', 'main': 'main'}, {
            'name': 'im-filter',
            'location': '../dep/im-filter/0.1.0/asset',
            'main': 'main'
        }]
    }), define("bull/aop/JointPoint", ["require"], function (require) {
        function e(e, t, i, n, o, a) {
            this.thisp = e, this.args = t, this.modName = i, this.funcName = n, this.func = o, this.returnValue = a
        }

        return e.prototype = {
            constructor: e, getThis: function () {
                return this.thisp
            }, getArgs: function () {
                return this.args
            }, getModName: function () {
                return this.modName
            }, getFuncName: function () {
                return this.funcName
            }, getFunc: function () {
                return this.func
            }, setReturnValue: function (e) {
                this.returnValue = e
            }, getReturnValue: function () {
                return this.returnValue
            }
        }, e
    }), define("bull/aop/aopEmitter", ["require", "./main"], function (require) {
        function e(e, i, n) {
            var o = [], a = t;
            if (a = a[e] || {}, a = a[i] || {}, a = a[n] || [], "[object Array]" === {}.toString.call(a))for (var r = 0; r < a.length; r++)o.push(a[r]);
            return o
        }

        var exports = {}, t = {};
        return exports.on = function (e, i, n, o) {
            var a = t;
            a[e] = a[e] || {}, a = a[e], a[i] = a[i] || {}, a = a[i], a[n] = a[n] || [], a = a[n], a.push({
                func: o.func,
                funcName: o.funcName,
                modName: o.modName
            })
        }, exports.getBefore = function (t, i) {
            var n = require("./main"), o = n.TypeEnum.BEFORE;
            return e(o, t, i)
        }, exports.queryBefore = function (e, t) {
            var i = exports.getBefore();
            if (console.log("method before " + e + " -> " + t + ":"), !i.length)return void console.log("none");
            for (var n = 0; n < i.length; n++)console.log(i[n].modName + " -> " + i[n].funcName);
            console.log("-----------------------------------")
        }, exports.getAfter = function (t, i) {
            var n = require("./main"), o = n.TypeEnum.AFTER;
            return e(o, t, i)
        }, exports.queryAfter = function (e, t) {
            var i = exports.getAfter();
            if (!i.length)return void console.log("none");
            console.log("method after " + e + " -> " + t + ":");
            for (var n = 0; n < i.length; n++)console.log(i[n].modName + " -> " + i[n].funcName);
            console.log("-----------------------------------")
        }, exports.getRegisterAop = function (e) {
            var i = {}, n = [], o = t[e];
            for (var a in o)if (o.hasOwnProperty(a)) {
                var r = o[a];
                for (var s in r)if (r.hasOwnProperty(s)) {
                    if (!i[s])i[s] = !0, n.push({modName: a, funcName: s, from: r[s][0].modName})
                }
            }
            return n
        }, exports.emit = function (t, i, n, o) {
            for (var a = e(t, i, n), r = 0; r < a.length; r++)a[r].func(o)
        }, exports
    }), define("bull/microPromise/microPromise", ["require"], function (require) {
        function e() {
            for (var e = arguments.length, i = 0, n = t(), o = [], a = 0; e > a; a++) {
                var r = arguments[a];
                !function (t) {
                    r.then(function (a) {
                        if (i++, o[t] = a, i === e)n.resolve.apply(n, o)
                    }, function () {
                        n.reject()
                    })
                }(a)
            }
            return n.promise()
        }

        var t = function () {
            function e() {
                for (var e = this, t = 0; t < o.length; t++)!function (t) {
                    if (r && r[0] && r[0].then)r[0].then(function () {
                        o[t].apply(e, arguments)
                    }); else setTimeout(function () {
                        o[t].apply(e, r)
                    }, 0)
                }(t)
            }

            function i() {
                for (var e = this, t = 0; t < a.length; t++)!function (t) {
                    setTimeout(function () {
                        a[t].apply(e, r)
                    }, 0)
                }(t)
            }

            function n(e, i) {
                var n = t();
                if (h === l.resolved) {
                    var c = this;
                    setTimeout(function () {
                        e.apply(c, r)
                    }, 0)
                } else if (h === l.reject) {
                    var c = this;
                    setTimeout(function () {
                        i.call(c, s)
                    }, 0)
                } else {
                    if (e)o.push(function () {
                        n.resolve(e.apply(c, arguments))
                    });
                    if (i)a.push(function (e) {
                        i(e), n.reject()
                    })
                }
                return n.promise()
            }

            if (!this instanceof t)return new t;
            var o = [], a = [], r = [], s = "", l = {
                pendding: 1,
                resolved: 2,
                rejected: 3
            }, h = l.pendding, c = {
                resolve: function () {
                    var t = Array.prototype.slice.call(arguments, 0);
                    if (h === l.pendding)r = t, h = l.resolved, e.call(this)
                }, reject: function (e) {
                    if (h === l.pendding)s = e, h = l.rejected, i.call(this)
                }, then: n, promise: function () {
                    return {then: n}
                }
            };
            return c
        };
        return {Deferred: t, when: e}
    }), define("bull/aop/main", ["require", "./JointPoint", "./aopEmitter", "../loader", "../microPromise/microPromise"], function (require) {
        function e(e, t, i) {
            a.emit(r.BEFORE, e, t, i)
        }

        function t(e, t, i) {
            a.emit(r.AFTER, e, t, i)
        }

        function i(e) {
            return e = e || "", e.replace(/^\s|\s$/g, "")
        }

        function n(e) {
            e = e || "";
            var t = e.split(","), n = i(t[0] || ""), o = i(t[1]), a = i(t[2]);
            t = n.split(".");
            var r = t[0], s = t[1], l = t[2];
            return {packageName: r, modName: s, funcName: l, before: o, after: a}
        }

        var exports = {}, o = require("./JointPoint"), a = require("./aopEmitter"), r = exports.TypeEnum = {
            BEFORE: "type1",
            AFTER: "type2"
        };
        return exports.createAopProxy = function (i, n, a) {
            var r = require("../loader"), s = require("../microPromise/microPromise");
            return function () {
                var l = [], h = Array.prototype.slice.call(arguments, 0), c = new o(this, h, i, n, a), d = {
                    jointPoint: c,
                    microPromise: s
                };
                e(i, n, c);
                var u = r.getInjection(i) || {}, m = u[n] || [];
                if ("[object Array]" === {}.toString.call(m))for (var f = 0; f < m.length; f++) {
                    var p = m[f];
                    if (p in d)l.push(d[p]); else l.push(r.get(p))
                }
                l = l.concat(h);
                var g = a.apply(this, l);
                if (g && g.then)g.then(function (e) {
                    c.setReturnValue(e), t(i, n, c)
                }); else c.setReturnValue(g), t(i, n, c);
                return g
            }
        }, exports.aspectRegister = function (e, t, i) {
            var o = require("../loader");
            if (-1 === e.indexOf("."))e = t + "." + e;
            for (var s = 0; s < i.length; s++)!function (t) {
                t.before && a.on(r.BEFORE, t.packageName + "." + t.modName, t.funcName, {
                    modName: e,
                    funcName: t.before,
                    func: function (i) {
                        var n = o.get(e)[t.before];
                        if (!n)throw'module "' + e + "\" don't have method " + t.before;
                        n.apply(i.getThis(), i.getArgs())
                    }
                }), t.after && a.on(r.AFTER, t.packageName + "." + t.modName, t.funcName, {
                    modName: e,
                    funcName: t.after,
                    func: function (i) {
                        var n = o.get(e)[t.after];
                        if (!n)throw'module "' + e + "\" don't have method " + t.after;
                        n.apply(i.getThis(), i.getArgs())
                    }
                })
            }(n(i[s]))
        }, exports
    }), define("bull/loader", ["require", "./aop/main"], function (require) {
        function e(t, i) {
            var n;
            if ("function" == typeof i) {
                e(t, i.prototype);
                var o = l(t, a, i);
                return o.prototype = i.prototype, o
            } else {
                for (var a in i)if (i.hasOwnProperty(a)) {
                    if (n = i[a], "function" == typeof n)i[a] = l(t, a, n)
                } else;
                return i
            }
        }

        function t(e) {
            e = e || [];
            for (var t = 0; t < e.length; t++)exports.init(e[t])
        }

        function i(t, i) {
            for (var n in t)if (t.hasOwnProperty(n)) {
                var o = t[n];
                if (n = i + "." + n, a.hasOwnProperty(n)) {
                    if (o._belong && n !== o._belong)throw'module conflict: module "' + n + '" is already register to "' + o._belong + '"'
                } else {
                    if (o._belong)throw'module "' + n + '" already register to "' + o._belong + '"';
                    o._belong = n, a[n] = e(n, o)
                }
            } else;
        }

        function n(e, t) {
            e = e || [];
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                r[n.id] = r[n.id] || {};
                var o = r[n.id], a = n.method;
                for (var s in a)o[s] = a[s]
            }
        }

        function o(e, t) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                h(n.id, t, n.pointCut)
            }
        }

        var exports = {}, a = {}, r = {}, s = require("./aop/main"), l = s.createAopProxy, h = s.aspectRegister;
        return exports.init = function (e) {
            if (!e._initialized) {
                e._initialized = !0;
                var a = e["package"];
                if (!a && (e.resource || e.aspect))throw"package name not found";
                t(e.importConfig), e.resource && i(e.resource, a), e.aspect && o(e.aspect, a), e.injection && n(e.injection, a)
            }
        }, exports.getInjection = function (e) {
            return r[e]
        }, exports.getDeps = function (e) {
            var t = r[e], i = {};
            for (var n in t)if (t.hasOwnProperty(n))for (var o = t[n], a = 0; a < o.length; a++)i[o[a]] = !0;
            delete i[e];
            var s = [];
            for (var n in i)if (n.indexOf(".") > -1)s.push(n);
            return s
        }, exports.queryDep = function (e) {
            var t = exports.getDeps(e);
            if (console.log("deps of " + e + " is:"), !t.length)console.log("none");
            for (var i = 0; i < t.length; i++)console.log(t[i]);
            console.log("-----------------------------------")
        }, exports.getModules = function (e) {
            e = e || "";
            var t = [];
            for (var i in a)if (a.hasOwnProperty(i))if (e) {
                if (i.indexOf(e) > -1)t.push(i)
            } else t.push(i);
            return t
        }, exports.queryModule = function (e) {
            var t = exports.getModules(e);
            if (e)console.log('modules contains "' + e + '":'); else console.log("all modules:");
            for (var i = 0; i < t.length; i++)console.log(t[i]);
            console.log("-----------------------------------")
        }, exports.queryInvoke = function (e) {
            var t = [], i = {};
            for (var n in r)if (r.hasOwnProperty(n)) {
                var o = r[n];
                for (var a in o)if (o.hasOwnProperty(a))for (var s = o[a], l = 0; l < s.length; l++) {
                    var h = s[l];
                    if (h === e) {
                        var c = n + h;
                        if (c in i)continue; else i[c] = !0;
                        t.push({modName: n, funcName: a})
                    }
                }
            }
            if (t.length) {
                console.log("module " + e + " used by these method:");
                for (var l = 0; l < t.length; l++)console.log(t[l].modName + " -> " + a)
            } else console.log("module" + e + " used nowhere");
            console.log("-----------------------------------")
        }, exports.checkDep = function () {
            var e, t = 0;
            console.log("checking deps:");
            for (var i in a)if (a.hasOwnProperty(i)) {
                e = exports.getDeps(i);
                for (var n = 0; n < e.length; n++)if (!exports.has(e[n]))if (e[n].indexOf(".") > -1)t++, console.log(e[n] + " is required by " + i + " but now missing")
            }
            if (!t)console.log("all dependencies is ready");
            console.log("-----------------------------------")
        }, exports.has = function (e) {
            return e in a
        }, exports.get = function (e) {
            if (e in a)return a[e]; else throw'module "' + e + '" not found'
        }, exports
    }), define("bull/main", ["require", "./loader", "./aop/aopEmitter"], function (require) {
        function e() {
            var e = document.createElement("div"), t = e.style;
            t.position = "fixed", t.right = "20px", t.top = "20px", t.border = "solid 1px black", t.backgroundColor = "#eee", e.innerHTML = "\u70b9\u6b64\u67e5\u770b<br/>\u6a21\u5757\u5173\u7cfb";
            var i = !1;
            e.onclick = function () {
                if (!i)i = !0, require(["bull/debug"], function (e) {
                    i = !1, e.entry()
                })
            }, document.body.insertBefore(e, document.body.firstChild)
        }

        function t() {
            var t = location.hash;
            if (t.indexOf("bullDebug") > -1)e()
        }

        var exports = {}, i = require("./loader"), n = require("./aop/aopEmitter");
        return exports.get = i.get, exports.queryBefore = n.queryBefore, exports.queryAfter = n.queryAfter, exports.queryInvoke = i.queryInvoke, exports.queryDep = i.queryDep, exports.checkDep = i.checkDep, exports.queryModule = i.queryModule, exports.init = function (e) {
            t(), i.init(e)
        }, exports
    }), define("bull", ["bull/main"], function (e) {
        return e
    }), define("embed/data/config", ["require"], function (require) {
        var exports = {};
        return exports.staticDomain = "http://s.goutong.baidu.com", exports.getServer = function (e, t) {
            var i = e.getWrap();
            return i = {configBox: i.config, siteObj: i.siteConfig}, i[t] || i
        }, exports.isAutoInvite = function () {
            var e = exports.getServer("configBox");
            return !!(e.inviteBox.autoInvite - 0)
        }, exports
    }), define("embed/data/bullConfig", ["require", "./config"], function (require) {
        return {
            "package": "data",
            resource: {config: require("./config")},
            injection: [{id: "data.config", method: {getServer: ["common.view"]}}]
        }
    }), define("im-lib/lang/isObject", [], function () {
        return function (e) {
            return "[object Object]" == Object.prototype.toString.call(e)
        }
    }), define("im-lib/lang/isArray", [], function () {
        return function (e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        }
    }), define("im-lib/lang/extend", [], function () {
        return function (e, t) {
            for (var i in t)if (t.hasOwnProperty(i))e[i] = t[i];
            return e
        }
    }), define("im-lib/lang/each", ["require", "./isArray"], function (require) {
        return function (e, t, i) {
            if (require("./isArray")(e)) {
                for (var n = e.length, o = 0; n > o; o++)if ("function" == typeof t)t.call(i, e[o], o, e)
            } else for (var a in e)if (e.hasOwnProperty(a))t.call(i, a, e[a], e)
        }
    }), define("im-lib/lang", ["require", "./lang/isObject", "./lang/isArray", "./lang/extend", "./lang/each"], function (require) {
        var exports = {};
        return exports.isObject = require("./lang/isObject"), exports.isArray = require("./lang/isArray"), exports.extend = require("./lang/extend"), exports.each = require("./lang/each"), exports
    }), define("im-lib/json", [], function () {
        function e(e) {
            if (/["\\\x00-\x1f]/.test(e))e = e.replace(/["\\\x00-\x1f]/g, function (e) {
                var t = a[e];
                if (t)return t; else return t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16)
            });
            return '"' + e + '"'
        }

        function t(e) {
            var t, i, n, a = ["["], r = e.length;
            for (i = 0; r > i; i++)switch (n = e[i], typeof n) {
                case"undefined":
                case"function":
                case"unknown":
                    break;
                default:
                    if (t)a.push(",");
                    a.push(o(n)), t = 1
            }
            return a.push("]"), a.join("")
        }

        function i(e) {
            return 10 > e ? "0" + e : e
        }

        function n(e) {
            return '"' + e.getFullYear() + "-" + i(e.getMonth() + 1) + "-" + i(e.getDate()) + "T" + i(e.getHours()) + ":" + i(e.getMinutes()) + ":" + i(e.getSeconds()) + '"'
        }

        function o(i) {
            switch (typeof i) {
                case"undefined":
                    return "undefined";
                case"number":
                    return isFinite(i) ? String(i) : "null";
                case"string":
                    return e(i);
                case"boolean":
                    return String(i);
                default:
                    if (null === i)return "null"; else if (i instanceof Array)return t(i); else if (i instanceof Date)return n(i); else {
                        var a, r, s = ["{"], l = o;
                        for (var h in i)if (Object.prototype.hasOwnProperty.call(i, h))switch (r = i[h], typeof r) {
                            case"undefined":
                            case"unknown":
                            case"function":
                                break;
                            default:
                                if (a)s.push(",");
                                a = 1, s.push(l(h) + ":" + l(r))
                        }
                        return s.push("}"), s.join("")
                    }
            }
        }

        var exports = {};
        exports.parse = function (e) {
            if (window.JSON && JSON.parse)return JSON.parse(e); else return new Function("return (" + e + ")")()
        }, exports.stringify = function (e) {
            if (window.JSON && JSON.stringify)return JSON.stringify(e); else return o(e)
        };
        var a = {"\b": "\\b", " ": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return exports
    }), define("im-lib/net", [], function () {
        function e() {
            if (window.ActiveXObject)try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (e) {
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }
            if (window.XMLHttpRequest)return new XMLHttpRequest; else return void 0
        }

        var exports = {};
        return exports.imgRequest = function (e) {
            var t = document.createElement("img");
            t.src = e
        }, exports.jsonp = function (e, t) {
            function i() {
                return (new Date).getTime()
            }

            function n() {
                return Math.random().toString().substr(2)
            }

            function o(e) {
                if (e) {
                    var t = e.parentNode;
                    if (t && 11 !== t.nodeType)t.removeChild(e)
                }
            }

            function a(e) {
                var t = "";
                if ("string" == typeof e)t = e; else if ("object" == typeof e)for (var n in e)if (e.hasOwnProperty(n))t += "&" + n + "=" + encodeURIComponent(e[n]);
                return t += "&_time=" + i(), t = t.substr(1)
            }

            function r(e, r, s, l) {
                var h, c = (r.op, r.l);
                r = null, e = e + (-1 === e.indexOf("?") ? "?" : "&") + a(r);
                var d = /callback=(\w+)/.exec(e);
                if (d && d[1])h = d[1]; else h = "jsonp_bridge_" + i() + "_" + n(), e = e.replace("?", "?" + t.key + "=" + h + "&");
                var u = document.createElement("script");
                u.type = "text/javascript", u.src = e, u.id = "id_" + h, u.charset = "utf-8";
                var m = !0, f = null;
                if (window[h] = function (e) {
                        clearTimeout(f), window[h] = void 0;
                        var t = document.getElementById("id_" + h);
                        setTimeout(function () {
                            o(t)
                        }, 0), s(e), m = !1
                    }, "onerror"in u)u.onerror = function () {
                    l && l(), o(u)
                }, m = !1;
                var p = 1e4;
                if (1 === c)p += 2e4;
                f = setTimeout(function () {
                    if (m)l && l(), o(u)
                }, p);
                var g = document.getElementsByTagName("head")[0];
                if (g)setTimeout(function () {
                    g.appendChild(u)
                }, 0)
            }

            r(e, t, t.success, t.failure)
        }, exports.request = function (t, i) {
            var n = e();
            return n.open(i.method || "GET", t), n.onreadystatechange = function () {
                if (4 === n.readyState)if (n.status >= 200 && n.status < 300 || 304 === n.status) {
                    if (i.success)i.success(n.responseText)
                } else if (i.failure)i.failure()
            }, n.send(i.data), n
        }, exports.upload = function (e, t, i, n, o) {
            function a() {
                n(), d.onload = function () {
                }, d.parentNode.removeChild(d)
            }

            function r() {
                o(), d.onerror = function () {
                }, d.parentNode.removeChild(d)
            }

            if ("/" === e.charAt(0))e = location.protocol + "//" + location.host + e;
            if ("[object String]" === Object.prototype.toString.call(t)) {
                var s = t;
                clouda.device.fs.post(s, e, {
                    onsuccess: function (e) {
                        if (n)n(e)
                    }, onfail: function () {
                        if (o)o()
                    }, uploadKey: i, param: {}
                })
            } else if (t.nodeName) {
                var l = "upload_iframe" + parseInt(1e4 * Math.random(), 10), h = '<iframe id="' + l + '" name="' + l + '" width="0" height="0" border="0" style="width: 0; height: 0; border: none;">', c = document.createElement("div");
                c.innerHTML = h;
                var d = c.getElementsByTagName("iframe")[0];
                if (document.body.appendChild(d), t.setAttribute("target", l), t.setAttribute("action", e), t.setAttribute("method", "post"), t.setAttribute("enctype", "multipart/form-data"), t.setAttribute("encoding", "multipart/form-data"), d.attachEvent)d.attachEvent("onload", a), d.attachEvent("onerror", r); else d.onload = a, d.onerror = r;
                t.submit()
            } else if (window.FormData) {
                var u = new FormData;
                u.append(i, t), exports.request(e, {success: n, failure: o, data: u, method: "post"})
            }
        }, exports
    }), define("im-lib/util", [], function () {
        var exports = {}, e = "0123456789ABCDEF";
        return exports.uuid = function () {
            for (var t = [], i = 0; 32 > i; i++)t[i] = e.substr(Math.floor(16 * Math.random()), 1);
            t[12] = "4", t[16] = e.substr(3 & t[16] | 8, 1);
            var n = t.join("").toLowerCase();
            return n = n.toLowerCase(), n = n.replace(/^(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})$/, "$1-$2-$3-$4-$5")
        }, exports.decodeHTML = function (e) {
            return e = e || "", e.replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&").replace("&quot;", '"').replace("&nbsp;", " ")
        }, exports.encodeHTML = function (e) {
            return e = e || "", e.replace(/</g, "&lt").replace(/>/g, "&gt").replace(/&/g, "&amp").replace(/"/g, "&quot").replace(/ /g, "&nbsp")
        }, exports.getText = function (e) {
            var t = "";
            if (3 === e.nodeType || 4 === e.nodeType)t += exports.decodeHTML(e.nodeValue); else if ("IMG" === e.tagName)if (e.getAttribute("data-face-id"))return "[" + e.getAttribute("data-face-text") + "]"; else return "[\u56fe\u7247]"; else if (8 !== e.nodeType)for (var i = 0; i < e.childNodes.length; i++)t += exports.getText(e.childNodes[i]);
            return t
        }, exports
    }), define("im-lib/Emitter", [], function () {
        function e() {
        }

        var t = e.prototype;
        return t._getEvents = function () {
            if (!this._events)this._events = {};
            return this._events
        }, t._getMaxListeners = function () {
            if (isNaN(this.maxListeners))this.maxListeners = 10;
            return this.maxListeners
        }, t.on = function (e, t) {
            var i = this._getEvents(), n = this._getMaxListeners();
            i[e] = i[e] || [];
            var o = i[e].length;
            if (o >= n && 0 !== n)throw new RangeError("Warning: possible Emitter memory leak detected. " + o + " listeners added.");
            return i[e].push(t), this
        }, t.once = function (e, t) {
            function i() {
                n.off(e, i), t.apply(this, arguments)
            }

            var n = this;
            return i.listener = t, this.on(e, i), this
        }, t.off = function (e, t) {
            var i = this._getEvents();
            if (0 === arguments.length)return this._events = {}, this;
            var n = i[e];
            if (!n)return this;
            if (1 === arguments.length)return delete i[e], this;
            for (var o, a = 0; a < n.length; a++)if (o = n[a], o === t || o.listener === t) {
                n.splice(a, 1);
                break
            }
            return this
        }, t.emit = function (e) {
            var t = this._getEvents(), i = t[e], n = Array.prototype.slice.call(arguments, 1);
            if (i) {
                i = i.slice(0);
                for (var o = 0, a = i.length; a > o; o++)i[o].apply(this, n)
            }
            return this
        }, t.listeners = function (e) {
            var t = this._getEvents();
            return t[e] || []
        }, t.setMaxListeners = function (e) {
            return this.maxListeners = e, this
        }, e.mixin = function (t) {
            for (var i in e.prototype)t[i] = e.prototype[i];
            return t
        }, e
    }), define("im-lib/userData", [], function () {
        function e(e) {
            return e.replace(o, "___")
        }

        function t() {
        }

        function i() {
            if (!n)try {
                return n = document.createElement("input"), n.type = "hidden", n.addBehavior("#default#userData"), document.body.appendChild(n), !0
            } catch (e) {
                return n = {load: t, save: t, getAttribute: t, setAttribute: t, removeAttribute: t}, !1
            }
            return !0
        }

        var exports = {}, n = null, o = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"), a = 365, r = location.hostname + "_bridge_im";
        return exports.setItem = function (t, o) {
            if (i()) {
                t = e(t);
                var s = new Date;
                s.setDate(s.getDate() + a), n.expires = s.toUTCString(), n.load(r), n.setAttribute(t, o), n.save(r)
            }
        }, exports.getItem = function (t) {
            if (!i())return ""; else return t = e(t), n.load(r), n.getAttribute(t)
        }, exports.removeItem = function () {
            if (i())key = e(key), n.load(r), n.removeAttribute(key), n.save(r)
        }, exports.clear = function () {
            var e = new Date;
            e.setDate(e.getDate() - 1), n.expires = e.toUTCString()
        }, exports
    }), define("im-lib/localStorage", ["require", "./userData"], function (require) {
        var e, exports = {};
        try {
            e = window.localStorage || require("./userData")
        } catch (t) {
            e = require("./userData")
        }
        return exports.setItem = function (t, i) {
            try {
                e.setItem(t, i)
            } catch (n) {
            }
        }, exports.getItem = function (t) {
            return e.getItem(t)
        }, exports.removeItem = function (t) {
            e.removeItem(t)
        }, exports.clear = function () {
            e.clear()
        }, exports
    }), define("im-lib/main", ["require", "./lang", "./json", "./net", "./util", "./Emitter", "./localStorage"], function (require) {
        return {
            lang: require("./lang"),
            json: require("./json"),
            net: require("./net"),
            util: require("./util"),
            Emitter: require("./Emitter"),
            localStorage: require("./localStorage")
        }
    }), define("im-lib", ["im-lib/main"], function (e) {
        return e
    }), define("im-core/main", ["require", "im-lib", "im-lib/Emitter", "bull", "./bullConfig"], function (require) {
        function e(module, e, t) {
            module.on(e, function () {
                var i = Array.prototype.slice.call(arguments);
                i.unshift(t || e), exports.emit.apply(exports, i)
            })
        }

        var t = require("im-lib"), i = require("im-lib/Emitter"), exports = {};
        return i.mixin(exports), exports.messageHandler = function (e, i) {
            var n = i.adata && t.json.parse(i.adata) || {}, o = n.nickname || e.sinfo.nickname || i.from, a = 1e3 * i.time;
            exports.decode(i, function (e) {
                exports.emit("message", e, o, a, i.msgHandlerType || "")
            })
        }, exports.decode = function (e, t) {
        }, exports.init = function (e) {
            var t = require("bull"), i = require("./bullConfig");
            t.init(i), exports.initCore(e)
        }, exports.initCore = function (t, i, n, o, a) {
            n.extend(exports, o), exports.addPlugin(), n.extend(i, a || {}), i.anonym = i.bid ? 0 : 1, t.on("message", exports.messageHandler);
            var r = ["error", "reconnect", "connected", "disconnect", "offline", "csoffline", "invitefail", "queueing", "otherwebimalive", "fetchhistorysuccess", "fetchhistoryfail", "fetchhistoryfinish", "visitorblock", "autoendtalk", "currentIR", "showMsgRemind", "csonline", "transferError", "fininshIR", "updateNewCSR", "visitorTransfer", "unknownMsg"];
            n.each(r, function (i) {
                e(t, i)
            })
        }, exports.addPlugin = function () {
            for (var e = 0; e < arguments.length; e++)exports.plugin(arguments[e])
        }, exports.connect = function (e, t, i, n, o) {
            function a(t) {
                if (t.invited)t.status = 3;
                switch (t.status) {
                    case 0:
                    case 1:
                        e.connect(n, o);
                        break;
                    case 2:
                        e.connect(n, o);
                        break;
                    case 3:
                        if (o.invited || t.invited)t.invited = 1, t.from = o.from, e.connect(n, t); else t.reason = "talk to other", e.disconnect(t), e.setStopPick(!1), e.pick();
                        break;
                    case 4:
                        e.connect(n, o);
                        break;
                    default:
                        e.connect(n, o)
                }
            }

            if (i.isLogin())a(t); else i.login(a, function () {
                exports.emit("error", {type: "init"})
            }, function () {
                exports.emit("visitorblock")
            })
        }, exports.auth = function (e, t, i) {
            if (e.isLogin()); else e.login(function () {
                exports.emit("connected")
            }, function () {
                exports.emit("error", {type: "init"})
            })
        }, exports.send = function (e, t, i, n) {
            function o() {
                exports.emit("sendfinish", i), exports.emit("sendsuccess", i)
            }

            function a() {
                exports.emit("sendfail", i)
            }

            if (!e.isConnected())return exports.emit("sendfail", i), !1; else return t.encode(i, function (t) {
                t.adata = n, e.send(t, o, a)
            }, a), !0
        }, exports.preSend = function (e, t, i) {
            if (!e.isConnected())return !1; else return void e.preSend({mtype: 0, content: i.text})
        }, exports.disconnect = function (e, t, i, n) {
            if (n !== !1)e.disconnect();
            if (i !== !1)t.logout()
        }, exports.plugin = function (e, t) {
            if (t.encoder)e.addEncoder(t.encoder);
            if (t.decoder)e.addDecoder(t.decoder);
            if (t.emit)t.emit = function () {
                var e = Array.prototype.slice.call(arguments);
                exports.emit.apply(exports, e)
            }
        }, exports.get = function (e, t) {
            return e.get(t)
        }, exports.isConnected = function (e) {
            return e.isConnected()
        }, exports.sendOfflineMsg = function (e, t, i, n) {
            function o() {
                exports.emit("sendofflinemsgfinish", i), exports.emit("sendofflinemsgsuccess", i)
            }

            function a() {
                exports.emit("sendofflinemsgfail", i)
            }

            if (e.isConnected())return exports.emit("sendofflinemsgfail", i), !1; else return t.encode(i, function (t) {
                t.adata = n, e.send(t, o, a)
            }, a), !0
        }, exports.fetchHistory = function (e, t) {
            e.fetchHistory(t)
        }, exports
    }), define("im-core", ["im-core/main"], function (e) {
        return e
    }), define("im-core/plugin/fileTransfer", ["require", "../main"], function (require) {
        var e = 1, exports = {};
        exports.encoder = {};
        var t = exports.encoder;
        t.fileAccept = function (t, i) {
            i({
                mtype: e,
                content: {type: "file", data: {bcsName: t.bcsName, name: t.name, size: t.size, type: "accept"}}
            })
        }, t.fileVUpload = function (t, i) {
            i({
                mtype: e,
                content: {
                    type: "file",
                    msgInfo: t.msgInfo,
                    data: {status: t.status, bcsName: t.bcsName, name: t.name, size: t.size, type: "vUpload"}
                }
            })
        }, t.fileVDownLoad = function (t, i) {
            i({
                mtype: e,
                content: {type: "file", data: {status: t.status, bcsName: t.bcsName, name: t.name, type: "vDownLoad"}}
            })
        }, t.fileVCancelSend = function (t, i) {
            i({mtype: e, content: {type: "file", data: {bcsName: t.bcsName, name: t.name, type: "vCancelSend"}}})
        }, exports.decoder = {};
        var i = require("../main");
        return exports.decoder.fileTransfer = function (e, t) {
            e = e || {};
            var n = e.content || {}, o = n.data || {}, a = n.msgInfo || {}, r = {
                bcsName: o.bcsName,
                name: o.name
            }, s = "";
            switch (o.type) {
                case"accept":
                    s = "fileAccept", r.status = o.status;
                    break;
                case"sDownLoad":
                    s = "fileSDownLoad", r.status = o.status;
                    break;
                case"sUpLoad":
                    s = "fileSUpload", r.size = o.size;
                    break;
                case"vCancelSend":
                    s = "vCancelSend";
                    break;
                case"vDownLoad":
                    s = "vDownLoad", r.status = o.status;
                    break;
                case"vUpload":
                    s = "vUpload"
            }
            i.emit(s, r, a, e.msgHandlerType || "")
        }, exports
    }), define("im-core/const", [], function () {
        var exports = {};
        return exports.PLATFORM_PC = 0, exports.PLATFORM_MOBILE = 1, exports.SERVER_TIEXIN = 1, exports.SERVER_DUZHAN = 2, exports.SERVER_QIAO = 3, exports.AUTH_TYPE_LOCAL = 0, exports.AUTH_TYPE_QIAO = 4, exports.AUTH_TYPE_DUZHAN = 5, exports.CHAT_TYPE_USER = 0, exports.CHAT_TYPE_GROUP = 1, exports.CHAT_TYPE_IR = 4, exports.PUSH_TYPE_BYE = 2, exports.PUSH_TYPE_CHAT = 3, exports.PUSH_TYPE_OFFLINE = 4, exports.PUSH_TYPE_FETCH_HISTORY = 5, exports.PUSH_TYPE_PRE_SEND = 6, exports.PUSH_TYPE_FETCH_SESSION_MESSAGE = 7, exports.PUSH_TYPE_MSG_SYNC = 9, exports.CHART_START_TYPE = "vsturl:u", exports
    }), define("im-core/config", ["require", "./const"], function (require) {
        var e = require("./const");
        return {
            bid: "",
            siteid: "",
            eid: "",
            crossDomain: !1,
            platform: e.PLATFORM_PC,
            server: e.SERVER_QIAO,
            authType: e.AUTH_TYPE_QIAO,
            authToken: "bridge",
            urlRoot: "/",
            sid: "-100",
            tid: "-1",
            fromType: 1,
            ttype: 1,
            reasons: ["vstreq:u", "vstsys:u", "vstwtr:u", "vsturl:u", "vstwtr:f", "vstreq:f", "vstsys:f"]
        }
    }), define("im-core/plugin/unknownMsg", ["require", "im-lib", "../config", "im-core"], function (require) {
        function e(e, t) {
            t({
                content: {content: {data: e.content, msgInfo: e.msgInfo || {}, type: e.msgType || ""}, type: r},
                mtype: a
            })
        }

        function t(e, t) {
            e = e || {};
            var r = e.content || {}, s = r.content;
            if (r.mtype === o || r.mtype === a)try {
                s = i.json.parse(r.content), s.msgInfo = s.msgInfo || {};
                var h = e.adata && i.json.parse(e.adata) || {};
                s.nickname = h.nickname || l
            } catch (c) {
                s = r.content
            }
            s.role = e.from === n.bid ? 0 : 1, require("im-core").emit("unknownMsg", s)
        }

        var exports = {}, i = require("im-lib"), n = require("../config"), o = 1, a = 4, r = "unable message", s = "unable message", l = "\u5bf9\u65b9";
        return exports.encoder = {}, exports.encoder[r] = e, exports.decoder = {}, exports.decoder[s] = t, exports
    }), define("im-core/net", ["require", "im-lib"], function (require) {
        function e() {
        }

        var exports = {}, t = require("im-lib").Emitter;
        t.mixin(exports);
        var i = "POST";
        return exports.jsonToQuery = function (e, t, i) {
            var n = [];
            return t.each(i, function (i, o) {
                if (t.isObject(o))o = e.stringify(o);
                n.push(i + "=" + encodeURIComponent(o))
            }), n.join("&")
        }, exports.request = function (t, n, o, a, r, s, l) {
            var h = t.urlRoot + r;
            s = s || {};
            var c = s.failure || e, d = s.success || e;
            s.success = function (e) {
                try {
                    if (-1 !== Object.prototype.toString.call(e).indexOf("String"))e = a.parse(e)
                } catch (t) {
                    return void c()
                }
                if (n.set("sn", e.n_sn), !e.status || 2 === e.status)exports.emit("response", r, e.body || e), d(e.body || e); else exports.emit("auth invalid"), c(e)
            };
            var u = s.data || {};
            if (exports.emit("request", r, u), u.v = t.bid, u.s = t.siteid, u.e = t.eid, u.dev = t.platform, u.auth = n.get(), s.data = null, t.crossDomain) {
                if (h += h.indexOf("?") >= 0 ? "&" : "?", h += exports.jsonToQuery(u), s.type = u.type, s.key = "cb", s.op = u.op, s.l = u.l, 2 === u.type && "chat/push" === r && !d && !c || 3 === u.op && "site/auth" === r && !d && !c || 1 === u.op && "site/st" === r && !d && !c) {
                    var m = document.createElement("img");
                    return void(m.src = h)
                }
                if ("imgCross" === l)o.imgRequest(h); else o.jsonp(h, s)
            } else {
                if (s.method = s.method || "POST", s.method === i)s.data = a.stringify(u), h = h + "?v=" + u.v; else h += h.indexOf("?") >= 0 ? "&" : "?", h += exports.jsonToQuery(u), h += "&v=" + u.v;
                if (s.setCookie)h = h + "&s=" + u.s, h = h + "&t=" + s.setCookie;
                o.request(h, s)
            }
        }, exports.auth = function (e, t, i, n) {
            var o;
            if (0 === e.visitType)o = t ? 0 : 1; else o = t ? 2 : 3;
            var a, r = {success: i, failure: n, data: {op: o, dev: e.platform, ser: e.server}};
            if (!t)r.method = "GET", a = "imgCross";
            exports.request("site/auth", r, a)
        }, exports.poll = function (e, t, i) {
            var n = {success: t, failure: i, data: {l: e ? 1 : 0}};
            exports.request("site/poll", n)
        }, exports.site = function (e, t, i, n) {
            var o, a = {success: i, failure: n, data: {op: e ? 0 : 1, s_info: t, url: location.href}};
            if (!e)a.method = "GET", o = "imgCross";
            exports.request("site/st", a, o)
        }, exports.chat = function (e, t, i) {
            var n = {success: t, failure: i, data: e};
            exports.request("chat/st", n)
        }, exports.pick = function (e, t, i) {
            var n = {success: t, failure: i, data: {l: 1, sid: e || ""}};
            exports.request("chat/poll", n)
        }, exports.push = function (e, t, i) {
            var n = {success: t, failure: i, data: e || {}};
            if (2 === e.type)n.method = "GET";
            exports.request("chat/push", n)
        }, exports.node = function (e, t, i) {
            var n = {success: t, failure: i, data: e || {}};
            exports.request("bookmanage/saveBook.action", n)
        }, exports.upload = function (e, t, i, n, o, a) {
            t.upload(e.urlRoot + i, n, "file", o, a)
        }, exports.getUploadUrl = function (e, t, i, n) {
            return n = n || t.uuid(), e.urlRoot + "wupload/" + n + "/" + i.get("sid")
        }, exports.getDownloadUrl = function (e, t, i, n, o) {
            return n = n || t.uuid(), o = o || n, e.urlRoot + "wdownload/" + n + "/" + i.get("sid") + "/" + n + "?response-content-disposition=attachment;filename=" + o
        }, exports.log = function (e, t, i) {
            var n = t + "/eye/log/js/stat.gif?";
            n += exports.jsonToQuery(i), e.imgRequest(n)
        }, exports
    }), define("im-core/chat", ["require", "im-lib", "./config", "./net"], function (require) {
        function e(e) {
            if (!e && g.connected)exports.emit("disconnect");
            g.stopPick = !0, g.connected = !1, g.sid = ""
        }

        function t() {
            if (!g.connected)if (g.csonline)if (!g.csonline || g.online)g.connected = !0, exports.emit("connected", {sid: g.sid}), m.each(g.msgPool, function (e) {
                exports.emit("message", e)
            }), g.msgPool = []
        }

        function i(t, i) {
            var n = {type: t};
            if (i)n.data = i;
            exports.emit("error", n), e()
        }

        function n(e, t) {
            if (!e.pickType)g.sid = e.sid, g.to = e.uid, g.authType = e.authtype, g.csonline = !0, g.ttype = e.ttype;
            if (t)f.sinfo = e.sinfo && d.json.parse(e.sinfo) || {}
        }

        function o() {
            x = {ifIR: !1, count: 0, id: null}
        }

        function a(e) {
            var t = {}, i = e.length - 1;
            return m.each(e, function (n, o) {
                var a = n.content.bcsName;
                if ("img" === n.content.type && !t[a]) {
                    if (o >= i)return X.push(e[i]), e;
                    m.each(e, function (i, n) {
                        if ("string" == typeof i.content) {
                            var r = document.createElement("div");
                            r.innerHTML = i.content;
                            var s = r.getElementsByTagName("img")[0];
                            if (s && s.tagName && "IMG" === s.tagName.toUpperCase() && s.id === a) {
                                var l = e.splice(o, 1);
                                e.splice(n, 0, l[0]), t[a] = 1
                            }
                        }
                    })
                }
            }), e
        }

        function r(e) {
            var t;
            if (e && 1 === e.status && "auth invalid" === e.errinfo)i("offline"), t = !0;
            return t
        }

        function s(e) {
            if (K = 0, S)S = !1, exports.emit("reconnect");
            if (exports.isConnected()) {
                var t = g.options.siteid;
                if (t)d.localStorage.setItem("ACTIVE_" + t, +new Date)
            }
            m.each(e, function (e) {
                var t = e.type, i = E[t];
                if (i)i(e.msg)
            }), h()
        }

        function l(e) {
            if (K++, K > C && !S)S = !0, exports.emit("offline");
            if (!r(e))setTimeout(function () {
                h()
            }, 3e3)
        }

        function h() {
            if (!g.stopPick)setTimeout(function () {
                p.pick(g.sid, s, l)
            }, 0)
        }

        var c, d = require("im-lib"), u = d.Emitter, m = d.lang, f = require("./config"), p = require("./net"), g = {
            connected: !1,
            stopPick: !1,
            csonline: !1,
            msgPool: []
        }, V = {INVITE: 18, ACCEPT: 20, BYE: 28}, U = {
            OVER: 4,
            TAKE_OVER: 3,
            TRANSFER: 6,
            RECEIVE: 2
        }, y = "blocked", b = "auto", k = {SUCCESS: 0, FAILURE: 1}, v = {
            QUEUEING: 2,
            TALKING: 4
        }, _ = 10, x = {ifIR: !1, count: 1, id: null}, L = {CSR: 0, GROUP: 1, IR: 4}, w = {
            READY: 0,
            BUSY: 1,
            LEAVE: 2,
            UNLOGIN: 3
        }, W = {TRANSFER: 0, CONVERSATION: 1}, I = {
            COUNT: 0,
            LIST: 1,
            MSG_SYNC: 0,
            END_TIME: 0,
            PAGE: 20,
            DEFAULT: 5,
            DELAY: 2e3
        }, X = [], exports = {};
        u.mixin(exports), p.on("auth invalid", function () {
            g.stopPick = !0
        });
        var E = {};
        E[100] = function (e) {
            if (e.op === V.ACCEPT)if (e.st === k.SUCCESS)I.END_TIME = e.systime || 0, g.sid = e.sid, g.to = e.uid, g.authType = e.authtype, g.csonline = !0, g.online = !0, f.sinfo = e.sinfo && d.json.parse(e.sinfo) || {}, exports.fetchOfflineMsg(), I.MSG_SYNC = e.systime || 0; else exports.bye();
            if (e.op === V.BYE)if (e.st === k.SUCCESS) {
                var t = g.options || {};
                if ("talk to other" === e.reason)g.stopPick = !1, t.invited = 0, t.tid = f.tid, t.ttype = 1, t.sid = "", t.from = 4, exports.connect(t.ttype, t, !1)
            } else exports.emit("invitefail");
            if (e.op === V.INVITE) {
                if (I.END_TIME = e.systime || 0, "queue" === e.reason)return;
                if (e.ttype === L.IR)x.ifIR = !0, x.id = e.uid, exports.emit("currentIR");
                if ("re_invite" === e.reason && f.status === v.QUEUEING)return void exports.emit("queueing");
                if ("re_invite" === e.reason) {
                    if (f.sinfo = e.sinfo && d.json.parse(e.sinfo) || {}, g.sid = e.sid, g.to = e.uid, g.authType = e.authtype, g.tid = f.tid || "", g.ttype = e.ttype, g.csonline = !0, g.online = !0, f.syncSessionHistory)exports.fetchSessionMessage();
                    return void exports.fetchOfflineMsg()
                }
                if (e.st === k.SUCCESS)g.sid = e.sid, g.to = e.uid, g.authType = e.authtype, g.csonline = !0, g.ttype = e.ttype, f.sinfo = e.sinfo && d.json.parse(e.sinfo) || {}; else {
                    var i = d.json.parse(e.adata || "{}");
                    return g.to = i.uid || "-1", g.authType = e.authtype, g.csonline = !1, exports.emit("csoffline"), void exports.fetchOfflineMsg()
                }
                exports.fetchOfflineMsg()
            }
        }, E[101] = function (t) {
            if (t.msgHandlerType = t.msgHandlerType || "", t.opr === U.OVER)if (t.reason && -1 !== t.reason.indexOf(y))exports.emit("visitorblock", t), e(); else if (t.reason && -1 !== t.reason.indexOf(b))exports.emit("autoendtalk", t), e(); else i("forceover"); else if (t.opr === U.TAKE_OVER)if (n(t, !0), x.ifIR)o(), exports.emit("fininshIR", {type: "invite"}); else exports.emit("updateNewCSR", f.sinfo); else if (t.opr === U.TRANSFER)if (n(t, !0), x.ifIR)o(), exports.emit("fininshIR", {type: "online"}); else exports.emit("updateNewCSR", f.sinfo); else if (t.opr === U.RECEIVE) {
                var a = t.detail || {};
                if (a.join_action === W.TRANSFER) {
                    var r = !1, s = t.adata && d.json.parse(t.adata) || {}, l = s.transfer || {}, h = t.sinfo && d.json.parse(t.sinfo) || {};
                    if (l.status)r = !0, exports.emit("visitorTransfer", {nickname: h.nickname || ""}, t.msgHandlerType);
                    n(t, r)
                }
            }
        }, E[103] = function (e) {
            if (g.connected) {
                if (exports.emit("message", e), x.ifIR && e.from === x.id && x.count)if (++x.count >= 5)exports.emit("showMsgRemind", x.count), x.count = 0
            } else g.msgPool.push(e)
        }, E[104] = function (e) {
            if (f.status = e.status, e.status === v.QUEUEING)g.sid = e.sid, g.queueing = !0, exports.emit("queueing");
            if (e.status === v.TALKING)if (g.queueing = !1, g.sid = e.sid, g.online = !0, t(), x.ifIR)if ("" !== e.reason)exports.emit("transferError", e)
        }, E[105] = function (e) {
            if (c)clearTimeout(c), c = null;
            var t = e.detail || [];
            if (e.type === I.COUNT) {
                var i = 0;
                if (m.each(t, function (e, t) {
                        i += e.count
                    }), i < I.DEFAULT)i = I.DEFAULT;
                if (i > I.PAGE)i = I.PAGE;
                exports.fetchHistory({count: i})
            } else if (e.type === I.LIST) {
                var n = t.length;
                if (t[0])I.MSG_SYNC = t[0].systime || I.MSG_SYNC;
                if (t[n - 1])I.END_TIME = t[n - 1].systime || I.END_TIME;
                t = X.concat(t), X = [], t = a(t), m.each(t, function (e, t) {
                    e.msgHandlerType = "insertBefore", exports.emit("message", e)
                }), exports.fetchHisFinish(!0, e)
            }
        }, E[106] = function (e) {
            g.sid = e.sid, g.to = e.uid, g.authType = e.authtype, g.csonline = !0, f.sinfo = e.sinfo && d.json.parse(e.sinfo) || {}, exports.fetchOfflineMsg()
        }, E[107] = function (e) {
            if (e.webmsg) {
                var t = d.json.parse(e.webmsg);
                t.body.reverse(), m.each(t.body, function (e) {
                    var t = e.msg;
                    t.msgHandlerType = "insertBefore", t.time = parseInt(+t.time / 1e3, 10);
                    var i = e.msg.content;
                    if (d.lang.isArray(i))m.each(i, function (e) {
                        var i = e.pickType;
                        if (i) {
                            var n = E[i];
                            if (e.msgHandlerType = "insertBefore", n)n(e)
                        } else t.content = e.content || e, t.mtype = e.mtype || 0, exports.emit("message", t)
                    })
                })
            }
        }, E[108] = function (e) {
            if (x.ifIR && e.status === w.READY)exports.emit("csonline", e, "IR"); else if (!g.connected && e.status === w.READY)exports.emit("csonline", e, "OFFLINE_MSG")
        }, exports.receiveOfflineMsg = function (e) {
            var t = {
                sid: "",
                tid: g.tid,
                type: e.PUSH_TYPE_MSG_SYNC,
                tid_authtype: f.authType,
                param: {systime: I.MSG_SYNC}
            };
            p.push(t, null, null)
        }, exports.fetchHisFinish = function (e, i) {
            if (i = i || {}, e)exports.receiveOfflineMsg(), exports.emit("fetchhistorysuccess"); else exports.emit("fetchhistoryfail");
            exports.emit("fetchhistoryfinish", i), t()
        }, exports.fetchHistory = function (e, t) {
            t = t || {};
            var i = f.offlineMsgGetType || 0, n = i ? "" : g.sid, o = i ? "-1" : g.tid, a = i ? f.bid : g.to, r = {
                sid: n,
                tid: o,
                type: e.PUSH_TYPE_FETCH_HISTORY,
                tid_authtype: f.authType,
                param: {
                    type: 1,
                    gettype: i,
                    from: a,
                    max_count: t.count || _,
                    from_authtype: g.authType,
                    endtime: I.END_TIME
                }
            };
            p.push(r, null, exports.fetchHisFinish)
        }, exports.fetchSessionMessage = function (e) {
            var t = g.tid || "", i = t, n = "";
            if (t.indexOf(":")) {
                var o = t.split(":");
                i = o[0], n = o[1] || ""
            }
            var a = d.json.stringify({tag: 1, type: 2, userId: i - 0, subId: n - 0, bid: f.bid}), r = {
                sid: g.sid,
                tid: g.tid,
                type: e.PUSH_TYPE_FETCH_SESSION_MESSAGE,
                tid_authtype: f.authType,
                param: {webmsg: a}
            };
            p.push(r)
        }, exports.bye = function (e) {
            var t = {
                sid: g.options.sid,
                tid: g.tid,
                type: e.PUSH_TYPE_BYE,
                tid_authtype: f.authType,
                param: {reason: "bye for invite error"}
            };
            p.push(t)
        };
        var K = 0, S = !1, C = 3;
        return exports.pick = h, exports.connect = function (e, t, n, o) {
            n = n || {}, g.tid = n.tid || "", g.options = n;
            var a = {
                op: 0,
                sid: n.sid || "",
                tid: g.tid,
                tid_authtype: f.authType,
                invited: n.invited - 0 ? 1 : 0,
                rtype: n.route || 0,
                ttype: t,
                inviterefer: document.referrer,
                reason: f.reasons[n.from] || e.CHART_START_TYPE
            };
            p.chat(a, function () {
                if (o !== !1)g.stopPick = !1, h()
            }, function () {
                i("connect")
            })
        }, exports.talking = function (e, i) {
            if (i = i || {}, e = e || {}, f.sinfo = e.sinfo && d.json.parse(e.sinfo) || {}, g.sid = e.sid, g.to = i.tid, g.authType = e.authtype, g.csonline = !0, g.online = !0, g.tid = e.tid || "", g.options = i, g.stopPick = !1, f.syncSessionHistory)exports.fetchSessionMessage();
            t(), h()
        }, exports.queue = function (e, t) {
            t = t || {}, e = e || {}, f.sinfo = e.sinfo && d.json.parse(e.sinfo) || {}, g.sid = e.sid, g.to = e.uid, g.authType = e.authtype, g.csonline = !0, g.tid = e.tid || "", g.options = t, g.stopPick = !1, exports.emit("queueing"), h()
        }, exports.preSend = function (e, t) {
            if (t.content) {
                t.mtype = 0, t.to = g.to, t.time = (new Date).getTime(), t.rtype = g.ttype;
                var i = {sid: g.sid || "", tid: g.to, type: e.PUSH_TYPE_PRE_SEND, tid_authtype: g.authType, param: t};
                p.push(i)
            }
        }, exports.send = function (e, t, i, n) {
            t.from = f.bid, t.to = g.to, t.time = (new Date).getTime(), t.rtype = g.ttype;
            var o = {
                sid: g.sid || "",
                tid: g.to,
                type: g.csonline ? e.PUSH_TYPE_CHAT : e.PUSH_TYPE_OFFLINE,
                tid_authtype: g.authType,
                param: t
            };
            if (void 0 !== t.adata)o.adata = t.adata, delete t.adata;
            p.push(o, i, function (e) {
                if (r(e), n)n()
            })
        }, exports.disconnect = function (t, i, n) {
            t = t || {};
            var o = void 0 === t.tid_authtype ? g.authType : t.tid_authtype;
            o = o || 4, p.push({
                type: 2,
                sid: t.sid || g.sid,
                tid: t.tid || g.to || -1,
                reason: t.reason || "",
                tid_authtype: o
            }, i, n), e(!0)
        }, exports.isConnected = function () {
            return g.connected
        }, exports.get = function (e) {
            return g[e]
        }, exports.setStopPick = function (e) {
            g.stopPick = e
        }, exports.fetchOfflineMsg = function (e) {
            if (f.syncFetchOfflineMsg) {
                var i = {
                    sid: "",
                    tid: "-1",
                    type: e.PUSH_TYPE_FETCH_HISTORY,
                    tid_authtype: f.authType,
                    param: {type: I.COUNT, from: g.to, from_authtype: g.authType}
                };
                p.push(i, null, exports.fetchHisFinish), c = setTimeout(function () {
                    t()
                }, I.DELAY)
            } else t()
        }, exports
    }), define("im-core/plugin/img", ["require", "im-lib", "../chat", "../net", "im-core/chat", "../main"], function (require) {
        function e(e) {
            return e = e.split(d ? "\\" : "/"), e.pop()
        }

        function t(e) {
            return "wupload/" + e + "/" + r.get("sid")
        }

        function i(e, t) {
            var i = require("im-core/chat");
            return t = t || "a.jpg", "wdownload/" + e + "/" + i.get("sid") + "/" + t
        }

        function n(i, n) {
            var o = (e(i.path), i.bcsName), a = t(o);
            l[a] = {msg: i, done: n};
            var r = '<img id="' + o + '" data-uploaded="0" data-bcsName="' + o + '"/>', d = {mtype: 0, content: r};
            n(d);
            var u = {mtype: c, content: {type: h, bcsName: o}}, m = require("../main");
            s.upload(a, i.form || i.path, function () {
                u.content.status = 0, n(u), m.emit("imgsendsuccess", {bcsName: o, id: i.mid})
            }, function () {
                u.content.status = 1, n(u), m.emit("imgsendfail", {bcsName: o, id: i.id})
            })
        }

        function o(e, t) {
            var n = e.content, o = n.bcsName, a = i(o, "img");
            t({type: h, bcsName: o, bcsUrl: a, status: n.status})
        }

        var a = require("im-lib").Emitter, r = require("../chat"), s = require("../net"), l = {}, h = "img", c = 1, d = / window nt/i.test(navigator.userAgent), exports = {};
        return a.mixin(exports), exports.encoder = {}, exports.encoder[h] = n, exports.decoder = {}, exports.decoder[h] = o, exports
    }), define("im-core/plugin/shake", ["require", "../main"], function (require) {
        function e(e, t) {
            t({mtype: n, content: {type: i}})
        }

        function t(e, t) {
            var i = require("../main");
            i.emit("shake", e.msgHandlerType || ""), t()
        }

        var exports = {}, i = "shake", n = 4;
        return exports.encoder = {}, exports.encoder[i] = e, exports.decoder = {}, exports.decoder[i] = t, exports
    }), define("im-core/plugin/text", ["require", "../chat", "../config", "im-core/chat"], function (require) {
        function e(e, t) {
            var i = document.createElement("div");
            i.innerHTML = e.text || "";
            for (var n = i.getElementsByTagName("img"), o = n.length; o; o--) {
                var a = n[o - 1];
                if (a.getAttribute("data-bcsName")) {
                    var s = document.createElement("img");
                    s.setAttribute("data-bcsName", a.getAttribute("data-bcsName")), s.setAttribute("data-uploaded", a.getAttribute("data-uploaded")), s.id = a.id, a.id = "";
                    var l = a.parentNode;
                    l.insertBefore(s, a), l.removeChild(a)
                }
            }
            t({mtype: r, content: i.innerHTML.replace(/\r|\n/gi, "") || ""})
        }

        function t(e, t) {
            var i = require("im-core/chat");
            return t = t || "a.jpg", o.urlRoot = o.urlRoot || "", o.urlRoot + "wdownload/" + e + "/" + i.get("sid") + "/" + t
        }

        function i(e) {
            var i = document.createElement("div");
            i.innerHTML = e;
            for (var n = i.getElementsByTagName("img"), o = 0; o < n.length; o++) {
                var a = n[o], r = a.getAttribute("data-bcsName"), s = a.getAttribute("data-bcsUrl");
                if (r && !s)s = t(r, r), a.setAttribute("data-bcsUrl", s)
            }
            return i.innerHTML
        }

        function n(e, t) {
            var n = (require("../chat"), i(e.content)), r = e.from === o.bid ? 0 : 1;
            t({type: a, role: r, time: 1e3 * e.time, text: n || ""})
        }

        var o = (require("../chat"), require("../config")), a = "text", r = 0, exports = {};
        return exports.encoder = {}, exports.encoder[a] = e, exports.decoder = {}, exports.decoder[r] = n, exports
    }), define("im-core/plugin/transfer", [], function () {
        function e(e, t) {
            t({mtype: n, content: {type: i}})
        }

        function t(e, t) {
            t()
        }

        var exports = {}, i = "transfer", n = 4;
        return exports.encoder = {}, exports.encoder[i] = e, exports.decoder = {}, exports.decoder[n] = t, exports
    }), define("im-core/plugin/uploaded", [], function () {
        function e(e, t) {
            t({mtype: n, content: {type: i, bcsName: e.bcsName, status: 0}})
        }

        function t(e, t) {
            t()
        }

        var exports = {}, i = "img", n = 1;
        return exports.encoder = {}, exports.encoder.uploaded = e, exports.decoder = {}, exports.decoder.uploaded = t, exports
    }), define("im-core/plugin/voice", ["require", "../config"], function (require) {
        function e(e, t) {
            t({mtype: o, content: e})
        }

        function t(e, t) {
            var o = e.content, s = e.from === i.bid ? 0 : 1;
            t({
                type: n,
                role: s,
                text: a + o.text,
                bcsName: o.bcsName,
                fetchURL: r.replace(/#{bcsName}/g, o.bcsName),
                duration: o.duration,
                token: o.token
            })
        }

        var i = require("../config"), n = "voice", o = 2, a = "\u8bed\u97f3\u8f6c\u8bd1\uff1a", r = 'http://p.qiao.baidu.com/cps/audio/getAudio?reqParam={"audioName": "#{bcsName}"}', exports = {};
        return exports.encoder = {}, exports.encoder[n] = e, exports.decoder = {}, exports.decoder[n] = t, exports
    }), define("im-core/plugin/location", ["require", "../config"], function (require) {
        function e(e, t) {
            t({mtype: o, content: e})
        }

        function t(e, t) {
            var o = e.from === i.bid ? 0 : 1;
            e.content.type = n, e.content.role = o, e.content.text = a, t(e.content)
        }

        var i = require("../config"), n = "location", o = 4, a = "[\u5730\u7406\u4f4d\u7f6e]", exports = {};
        return exports.encoder = {}, exports.encoder[n] = e, exports.decoder = {}, exports.decoder[n] = t, exports
    }), define("im-core/plugin/config", ["require", "./fileTransfer", "./unknownMsg", "./img", "./shake", "./text", "./transfer", "./uploaded", "./voice", "./location"], function (require) {
        return {
            "package": "coreplugin",
            resource: {
                fileTransfer: require("./fileTransfer"),
                unknownMsg: require("./unknownMsg"),
                img: require("./img"),
                shake: require("./shake"),
                text: require("./text"),
                transfer: require("./transfer"),
                uploaded: require("./uploaded"),
                voice: require("./voice"),
                location: require("./location")
            }
        }
    }), define("im-lib/config", ["require", "./lang", "./json", "./net", "./util", "./Emitter", "./localStorage", "./main"], function (require) {
        return {
            "package": "imLib",
            resource: {
                lang: require("./lang"),
                json: require("./json"),
                net: require("./net"),
                util: require("./util"),
                Emitter: require("./Emitter"),
                localStorage: require("./localStorage"),
                main: require("./main")
            }
        }
    }), define("im-core/auth", ["require"], function (require) {
        var e = {}, exports = {};
        return exports.get = function (t, i) {
            var n = {
                anonym: t.anonym,
                key: e.key || "",
                sn: e.sn || "",
                id: t.bid || "",
                from: t.authType,
                token: t.authToken || ""
            };
            if (i)return n[i]; else return n
        }, exports.set = function (t, i) {
            e[t] = i
        }, exports
    }), define("im-core/message", ["require"], function (require) {
        function e() {
        }

        function t(t, i) {
            return t = t || e, i = i || e, function (e) {
                if (e === !1)i(); else if (e)t(e)
            }
        }

        var i = 1, n = 2, o = 4, a = {}, r = {}, exports = {};
        return exports.encode = function (e, i, n) {
            var o = a[e.type];
            if (!o)throw e.type + " message not supported";
            o(e, t(i, n))
        }, exports.decode = function (e, a, s) {
            var l = e.mtype;
            if (l === i || l === o || l === n)if (e.content && e.content.type)if (l = e.content.type, "file" === l)l = "fileTransfer";
            var h = r[l];
            if (h)h(e, t(a, s)); else if (s)s()
        }, exports.addEncoder = function (e, t) {
            e.each(t, function (e, t) {
                a[e] = t
            })
        }, exports.addDecoder = function (e, t) {
            e.each(t, function (e, t) {
                r[e] = t
            })
        }, exports
    }), define("im-core/site", ["require"], function (require) {
        var exports = {};
        return exports.init = function (e, t, i) {
            t.extend(e, i || {}), e.anonym = e.bid ? 0 : 1
        }, exports.enter = function (e, t, i) {
            if (t = t || function () {
                    }, i = i || function () {
                    }, e.isLogin())t(); else e.login(t, i)
        }, exports.leave = function (e) {
            if (e.isLogin())e.logout()
        }, exports
    }), define("im-core/user", ["require", "./net"], function (require) {
        function e() {
            clearTimeout(i), i = null, n = !1
        }

        var exports = {}, t = require("./net");
        t.on("auth invalid", function () {
            e()
        });
        var i, n, o = {INVITE: 1, AUTH: 2}, a = "blocked";
        exports.heartBeat = function (e) {
            function t() {
                i = setTimeout(exports.heartBeat, 15e3)
            }

            e.poll(!1, t, t)
        };
        var r = {};
        return exports.refresh = function (e, t) {
            if (n)t.poll(!0, function (t) {
                e.each(t, function (e) {
                    var t = r[e.type + ""];
                    if (t)t(e.msg)
                }), exports.refresh()
            }, function () {
                setTimeout(exports.refresh, 3e3)
            })
        }, exports.pickHandler1 = function (e, t, i, n) {
            if ("invite" === n.reason)i.sid = n.sid, i.tid = n.uid, i.fromType = 2, i.ttype = 0, e.emit("initiative", n); else if ("chat" === n.reason)i.sid = n.sid, i.tid = n.uid, i.ttype = n.ttype, i.invited = 1, i.sinfo = n.sinfo && t.parse(n.sinfo) || {}, e.emit("forcetalk", n)
        }, exports.pickHandler104 = function (e, t, i) {
            t.status = i.status, e.emit("watchStatus", i)
        }, r[1] = function (e) {
            exports.pickHandler1(e)
        }, r[104] = function (e) {
            exports.pickHandler104(e)
        }, exports.getInfo = function (e) {
            function t() {
                var e = (new Date).getTimezoneOffset(), t = parseInt(e / 60, 10), i = e % 60, n = "-";
                if (0 > t || 0 > i)if (n = "+", t = -t, 0 > i)i = -i;
                return t += "", i += "", "UTC" + n + t + ":" + i
            }

            var i = window.navigator, n = window.screen, o = {
                lang: i.language || i.systemLanguage,
                cbit: n.colorDepth,
                rsl: n.width + "*" + n.height,
                tz: t(),
                referrer: encodeURIComponent(document.referrer)
            };
            return o
        }, exports.enter = function (e, t, i) {
            e.site(!0, exports.getInfo(), function () {
                exports.getEnterResult(t, i)
            }, i)
        }, exports.checkEnterResult = function (e, t, i, o, a) {
            var r = !1;
            return e.each(i, function (i) {
                if (100 === i.type) {
                    var s = i.msg || {};
                    if (3 === s.status && 0 === t.visitType) {
                        var l = t.tid || "", h = t.sid || "";
                        e.extend(t, s), t.tid = l, t.sid = h
                    } else e.extend(t, s);
                    if (r = !0, n = !0, 0 === t.visitType)exports.heartBeat(); else exports.refresh();
                    o(i.msg)
                } else a()
            }), r
        }, exports.checkAuthResult = function (e, t, i, n, r, s) {
            var l = !1;
            return e.each(i, function (e) {
                if (e.type === o.AUTH) {
                    if (l = !0, e = e.msg || {}, e.reason && -1 !== e.reason.indexOf(a))return void(s && s());
                    if (e.valid)t.bid = e.v, exports.enter(n, r); else r()
                }
            }), l
        }, exports.getEnterResult = function (e, t, i) {
            e.poll(!0, function (e) {
                if (!exports.checkEnterResult(e, t, i))exports.getEnterResult(t, i)
            }, i)
        }, exports.getAuthResult = function (e, t, i, n) {
            e.poll(!0, function (e) {
                if (!exports.checkAuthResult(e, t, i, n))exports.getAuthResult(t, i, n)
            }, i)
        }, exports.isLogin = function () {
            return !!i || n
        }, exports.login = function (e, t, i, n, o, a) {
            if (!exports.isLogin())e.auth(!0, function (e) {
                t.set("key", e.key), i.bid = e.v, exports.getAuthResult(n, o, a)
            }, o); else n()
        }, exports.logout = function (t) {
            e(), t.site(!1), t.auth(!1)
        }, exports
    }), define("im-core/log", ["require"], function (require) {
        var exports = {};
        return exports.send = function () {
        }, exports
    }), define("im-core/bullConfig", ["require", "./plugin/config", "im-lib/config", "./main", "./auth", "./config", "./const", "./chat", "./message", "./site", "./user", "./net", "./log"], function (require) {
        return {
            "package": "core",
            importConfig: [require("./plugin/config"), require("im-lib/config")],
            resource: {
                main: require("./main"),
                auth: require("./auth"),
                config: require("./config"),
                "const": require("./const"),
                chat: require("./chat"),
                message: require("./message"),
                site: require("./site"),
                user: require("./user"),
                net: require("./net"),
                log: require("./log")
            },
            injection: [{
                id: "core.main",
                method: {
                    initCore: ["core.chat", "core.config", "imLib.lang", "core.const"],
                    connect: ["core.chat", "core.config", "core.user"],
                    auth: ["core.user"],
                    send: ["core.chat", "core.message"],
                    addPlugin: ["coreplugin.fileTransfer", "coreplugin.img", "coreplugin.unknownMsg", "coreplugin.shake", "coreplugin.text", "coreplugin.transfer", "coreplugin.uploaded", "coreplugin.voice", "coreplugin.location"],
                    preSend: ["core.chat", "core.message"],
                    plugin: ["core.message"],
                    disconnect: ["core.chat", "core.user"],
                    messageHandler: ["core.config"],
                    get: ["core.chat"],
                    bindEvent: ["core.main", "communicate.handler"],
                    isConnected: ["core.chat"],
                    sendOfflineMsg: ["core.chat", "core.message"],
                    fetchHistory: ["core.chat"]
                }
            }, {id: "core.auth", method: {get: ["core.config"]}}, {
                id: "core.chat",
                method: {
                    fetchHistory: ["core.const"],
                    connect: ["core.const"],
                    fetchSessionMessage: ["core.const"],
                    bye: ["core.const"],
                    preSend: ["core.const"],
                    send: ["core.const"],
                    fetchOfflineMsg: ["core.const"],
                    receiveOfflineMsg: ["core.const"]
                }
            }, {id: "core.message", method: {addEncoder: ["imLib.lang"], addDecoder: ["imLib.lang"]}}, {
                id: "core.net",
                method: {
                    jsonToQuery: ["imLib.json", "imLib.lang"],
                    getUploadUrl: ["core.config", "imLib.util", "core.main"],
                    getDownloadUrl: ["core.config", "imLib.util", "core.main"],
                    request: ["core.config", "core.auth", "imLib.net", "imLib.json"],
                    auth: ["core.config"],
                    authOut: ["core.user"],
                    upload: ["core.config", "imLib.net"],
                    initLog: ["core.config", "data.config"],
                    log: ["imLib.net"]
                }
            }, {
                id: "core.site",
                method: {init: ["core.config", "imLib.lang"], enter: ["core.user"], leave: ["core.user"]}
            }, {
                id: "core.user",
                method: {
                    refresh: ["imLib.lang", "core.net"],
                    getInfo: ["imLib.lang"],
                    enter: ["core.net"],
                    checkEnterResult: ["imLib.lang", "core.config"],
                    getAuthResult: ["core.net"],
                    login: ["core.net", "core.auth", "core.config"],
                    logout: ["core.net"],
                    getEnterResult: ["core.net"],
                    pickHandler1: ["core.main", "imLib.json", "core.config"],
                    pickHandler104: ["core.main", "core.config"],
                    heartBeat: ["core.net"],
                    checkAuthResult: ["imLib.lang", "core.config"]
                }
            }],
            aspect: [{id: "core.message", pointCut: ["core.main.decode, , decode"]}, {
                id: "core.net",
                pointCut: ["core.log.send, ,log"]
            }]
        }
    }), define("base/pc/lib", ["require"], function (require) {
        function e(e, t) {
            var i = "", n = 0 > e, o = Math.abs(e) + "";
            if (o.length < t)i = new Array(t - o.length + 1).join("0");
            return (n ? "-" : "") + i + o
        }

        var exports = {}, t = /\{\s*\[(?:native code|function)\]\s*\}/i;
        return exports.isType = function (e, t) {
            return {}.toString.call(e).indexOf("[object " + t) >= 0
        }, exports.isNative = function (e) {
            return !(!e || !t.test(e))
        }, exports.instanceOf = function (e, t) {
            return e && e.hasOwnProperty && e instanceof t
        }, exports.extend = function (e, t) {
            for (var i in t)if (t.hasOwnProperty(i) && "_belong" !== i)e[i] = t[i];
            return e
        }, exports.getBid = function () {
            var e, t = (+new Date).toString(), i = Math.floor(1e5 * Math.random()).toString(), n = 5 - i.length;
            if (n > 0)for (e = 0; n > e; e++)i += "0";
            return t + i
        }, exports.uuid = function () {
            for (var e = [], t = "0123456789abcdef", i = 0; 36 > i; i++)e[i] = t.substr(Math.floor(16 * Math.random()), 1);
            e[14] = "4", e[19] = t.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-";
            var n = e.join("");
            return n
        }, exports.parseTime = function (t, i) {
            function n(e, t) {
                i = i.replace(e, t)
            }

            if ("string" != typeof i)return t.toString();
            var o = t.getFullYear(), a = t.getMonth() + 1, r = t.getDate(), s = t.getHours(), l = t.getMinutes(), h = t.getSeconds();
            return n(/yyyy/g, e(o, 4)), n(/yy/g, e(parseInt(o.toString().slice(2), 10), 2)), n(/MM/g, e(a, 2)), n(/M/g, a), n(/dd/g, e(r, 2)), n(/d/g, r), n(/HH/g, e(s, 2)), n(/H/g, s), n(/hh/g, e(s % 12, 2)), n(/h/g, s % 12), n(/mm/g, e(l, 2)), n(/m/g, l), n(/ss/g, e(h, 2)), n(/s/g, h), i
        }, exports.trim = function (e) {
            var t = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
            return String(e).replace(t, "")
        }, exports.transferDate = function (e) {
            if (e = +e, isNaN(e))return e;
            var t = +new Date(e), i = ["\u4eca\u5929", "\u6628\u5929"], n = 864e5, o = new Date, a = parseInt((+o - 6e4 * o.getTimezoneOffset()) / n, 10), r = a - parseInt((t - 6e4 * o.getTimezoneOffset()) / n, 10);
            if (r = Math.abs(r), r < i.length)return i[r]; else return exports.parseTime(new Date(e), "yyyy-MM-dd")
        }, exports
    }), define("embed/log/main", ["require", "../../base/pc/lib"], function (require) {
        function e(e) {
            return !o[e] && (o[e] = "uuid_" + i.uuid()), o[e]
        }

        function t() {
            return !o.tabid && (o.tabid = "tabid_" + (new Date).getTime()), o.tabid
        }

        var i = require("../../base/pc/lib"), exports = {}, n = {}, o = {pickMsg: 0, pushMsg: 0, ifLoopStart: !1};
        return exports.init = function (e) {
            var t = e.getServer("siteObj");
            n.eid = t.eid, n.siteid = t.siteId, n.platform = t.platform, n.bid = t.bid, n.logRoot = e.staticDomain
        }, exports.addLightMsg = function (e) {
            var t = e.role ? "sub" : "custom";
            if ("sub" === t)o.pickMsg++; else o.pushMsg++
        }, exports.logQueue = function () {
            exports.sendLog(t(), {uuid: e("openUUID"), cncttype: "queue", brgeyemid: "m2007"})
        }, exports.logConnect = function () {
            if (exports.sendLog(t(), {
                    uuid: e("openUUID"),
                    cncttype: "conncetd",
                    brgeyemid: "m2007",
                    winType: "webimLight"
                }), !o.ifLoopStart)exports.logPickMsg(), exports.logPushMsg(), o.ifLoopStart = !0
        }, exports.logOpenWebim = function () {
            exports.sendLog(t(), {uuid: e("openUUID"), brgeyemid: "m2006"})
        }, exports.logClickSeek = function (e) {
            var i = {brgeyemid: "m2005"};
            e && (i.type = e), exports.sendLog(t(), i)
        }, exports.logPickMsg = function () {
            var e = function () {
                var e = o.pickMsg;
                if (o.pickMsg = 0, e > 0)exports.sendLog(t(), {num: e, brgeyemid: "m2004"});
                setTimeout(arguments.callee, 5e3)
            };
            setTimeout(e, 5e3)
        }, exports.logPushMsg = function () {
            var e = function () {
                var e = o.pushMsg;
                if (o.pushMsg = 0, e > 0)exports.sendLog(t(), {num: e, brgeyemid: "m2003"});
                setTimeout(arguments.callee, 5e3)
            };
            setTimeout(e, 5e3)
        }, exports.logEndNb = function () {
            exports.sendLog(t(), {uuid: e("nbUUID"), brgeyemid: "m2002"})
        }, exports.logStartNb = function () {
            exports.sendLog(t(), {uuid: e("nbUUID"), brgeyemid: "m2001"})
        }, exports.logRenderStart = function () {
            exports.sendLog(t(), {uuid: e("renderUUID"), brgeyemid: "m2008"})
        }, exports.logRenderEnd = function () {
            exports.sendLog(t(), {uuid: e("renderUUID"), brgeyemid: "m2009"})
        }, exports.logEnterStart = function () {
            exports.sendLog(t(), {uuid: e("enterUUID"), brgeyemid: "m2010"})
        }, exports.logEnterEnd = function () {
            exports.sendLog(t(), {uuid: e("enterUUID"), brgeyemid: "m2011"})
        }, exports.leaveSite = function () {
            exports.sendLog(t(), {uuid: e("enterUUID"), brgeyemid: "m2012"})
        }, exports.sendLog = function (e, t, i, o, a) {
            var r = a || {};
            r.t = (new Date).getTime(), r.ip = "", r.dtype = i.platform || n.platform || "", r.ucid = i.eid || n.eid, r.uid = t.get("to") || i.tid || "", r.siteid = i.siteid || n.siteid, r.tabid = o, r.bid = i.bid || n.bid, r.sessionid = t.get("sid") || i.sid || "", e.send(n.logRoot, r)
        }, exports
    }), define("embed/log/config", ["require", "./main"], function (require) {
        return {
            "package": "log",
            resource: {main: require("./main")},
            injection: [{
                id: "log.main",
                method: {init: ["data.config"], sendLog: ["core.log", "core.chat", "core.config"]}
            }],
            aspect: [{
                id: "log.main",
                pointCut: ["messagecontainer.main.renderMessage,,addLightMsg", "communicate.handler.connected, ,logConnect", "communicate.handler.queueing, ,logQueue", "icon.handle.acceptClick, ,logClickSeek", "invite.operation.clickInvite, ,logClickSeek", "pmessage.main.init, logRenderStart, ", "pinvite.main.init, , logRenderEnd", "pchat.chat.builtComunicate, logEnterStart, ", "pchat.chat.enterSuccess, ,logEnterEnd", "pchat.leave.pageLeave, , leaveSite"]
            }]
        }
    }), define("embed/icon/iconMain", ["require"], function (require) {
        var exports = {};
        return exports.renderHtml = function (e, t, i, n, o) {
            var a = e.getIconTplData(), r = i.template(t, a);
            n.appendHTML(r, o.getWrap())
        }, exports.init = function (e, t) {
            var i = t.getServer("configBox").seekIcon;
            if (0 !== +i.width && 0 !== +i.height)exports.renderHtml(), e.init()
        }, exports
    }), define("embed/icon/iconHandler", ["require"], function (require) {
        var exports = {};
        return exports.handleAccept = function (e, t) {
            e.clickIcon(t)
        }, exports.bindEvent = function (e, t) {
            e.domOn("nb_icon_wrap", "click", exports.handleAccept), t.bindEvent()
        }, exports.init = function () {
            exports.bindEvent()
        }, exports
    }), define("embed/icon/iconData", ["require"], function (require) {
        var exports = {};
        return exports.getIconTplData = function (e, t) {
            var i = e.getServer("configBox").seekIcon, n = t.dataProcess(i);
            if (i.isCustomerStyle)n.backImg = "background-image: url(" + n.customerStyle.backImg + ");";
            return n
        }, exports
    }), define("embed/icon/pc/iconPc.tpl", [], function () {
        return '<!-- target: iconIcon --><% if (data.isCustomerStyle) { %><ins class="nb-icon-wrap nb-icon-base icon-<%position%> nb-icon-skin-<%skinIndex%> nb-icon-<%iconType%> customer-icon-style" id="nb_icon_wrap" style="<%bottomDistance%>;width:<%width%>px;"><% } else { %><ins class="nb-icon-wrap nb-icon-base icon-<%position%> nb-icon-skin-<%skinIndex%> nb-icon-<%iconType%>" id="nb_icon_wrap" style="<%bottomDistance%>;width:<%width%>px;"><% } %><ins class="nb-icon-icon" style="height:<%height%>px;width:<%width%>px;<%backImg%>;"><ins class="nb-icon-bridge0 nb-icon-bridge-base" data-type="iconInvite"></ins></ins><% if (data.iconType === \'group\') { %><% if (+data.isCustomerStyle === 1) {%><ins class="nb-icon-groups show" style="background-color:<%groupStyle.bgColor%>;<%groupsMargin%>;" id="nb_icon_groups"><% } else { %><ins class="nb-icon-groups show" style="<%groupsMargin%>;" id="nb_icon_groups"><% } %><% for(var i = 0, l = data.groups.length; i < l; i++) {data.group = data.groups[i]; %><% if(data.group.isSelected){ %><% if (+data.isCustomerStyle === 1) {%><ins class="icon-groups-item clearfix" data-id="<%group.groupId%>" style="background-color:<%groupStyle.buttonColor%>;"><ins class="group-icon"></ins><ins class="group-text" style="color:<%groupStyle.fontColor%>"><%group.groupName%></ins></ins><% } else { %><ins class="icon-groups-item clearfix" data-id="<%group.groupId%>"><ins class="group-icon"></ins><ins class="group-text"><%group.groupName%></ins></ins><% } %><% } else { %><ins class="icon-groups-item icon-disable clearfix" data-id=""><ins class="group-icon"></ins><ins class="group-text"><%group.groupName%></ins></ins><% } %><% } %><% } %></ins></ins><!-- end -->'
    }), define("embed/icon/pc/iconPHandler", ["require"], function (require) {
        var exports = {};
        exports.getIconItemEle = function (e, t, i) {
            var n = e.g(t.PREFIXID + "groups");
            if (!e.contain(i, n))return i;
            var o = null;
            if (i.className.match(t.CLASSREG))o = i; else o = exports.getIconItemEle(i.parentNode, e);
            return o
        };
        var e = !0;
        return exports.clickIcon = function (t, i, n, o, a) {
            var r = i.getServer("configBox").seekIcon, s = i.getServer("siteObj");
            if ("false" !== s.online) {
                if (!e)return;
                if (e = !1, r.iconType) {
                    var l = t.getTarget(a);
                    l = exports.getIconItemEle(l, t);
                    var h = l.className;
                    if (-1 !== h.indexOf("icon-disable"))n.showInCenter(); else if (o.CLASSREG.test(h))exports.acceptClick(l.getAttribute("data-id"))
                } else exports.acceptClick(0)
            } else n.showInCenter();
            var c = setTimeout(function () {
                e = !0, clearTimeout(c)
            }, 300)
        }, exports.acceptClick = function (e, t, i) {
            e.accept(0, i), t.hide(["nb_invite_wrap"])
        }, exports.bindEvent = function () {
        }, exports
    }), define("embed/icon/pc/iconPData", ["require"], function (require) {
        var exports = {};
        return exports.dataProcess = function (e, t) {
            var i = e.extend({}, t);
            if (1 === +t.iconType) {
                if (i.isShowGroup = "nb-show", i.iconType = "group", 1 === +i.skinIndex && 1 !== +i.isCustomerStyle)i.groupsMargin = "margin-left:19px"; else i.groupsMargin = "margin-left:0";
                var n = t.groups;
                if (n.length) {
                    var o = 43 * n.length + 10 + 20;
                    if ("right-center" === t.position || "left-center" === t.position)i.bottomDistance = "margin-top:-" + Math.ceil((o + t.height) / 2) + "px"
                }
            } else if (i.isShowGroup = "nb-hide", i.iconType = "icon", "left-center" === t.position || "right-center" === t.position)i.bottomDistance = "margin-top:-" + Math.ceil(t.height / 2) + "px";
            return i
        }, exports
    }), define("embed/icon/pc/iconConst", ["require"], function (require) {
        return {PREFIXID: "nb_icon_", CLASSREG: /icon-groups-item/}
    }), define("embed/icon/iconPConfig", ["require", "./iconMain", "./iconHandler", "./iconData", "./pc/iconPc.tpl", "./pc/iconPHandler", "./pc/iconPData", "./pc/iconConst"], function (require) {
        return {
            "package": "picon",
            resource: {
                main: require("./iconMain"),
                handler: require("./iconHandler"),
                data: require("./iconData"),
                tpl: require("./pc/iconPc.tpl"),
                phandler: require("./pc/iconPHandler"),
                pdata: require("./pc/iconPData"),
                consts: require("./pc/iconConst")
            },
            injection: [{
                id: "picon.phandler",
                method: {
                    clickIcon: ["pbase.dom", "data.config", "pmessage.pmain", "picon.consts"],
                    acceptClick: ["pchat.chat", "pbase.dom"],
                    bindEvent: ["pbase.events"],
                    getIconItemEle: ["pbase.dom", "picon.consts"]
                }
            }, {id: "picon.pdata", method: {dataProcess: ["pbase.lib"]}}, {
                id: "picon.main",
                method: {
                    init: ["picon.handler", "data.config"],
                    renderHtml: ["picon.data", "picon.tpl", "common.util", "pbase.dom", "common.view"]
                }
            }, {id: "picon.data", method: {getIconTplData: ["data.config", "picon.pdata"]}}, {
                id: "picon.handler",
                method: {bindEvent: ["pbase.events", "picon.phandler"], handleAccept: ["picon.phandler"]}
            }],
            aspect: [{id: "picon.main", pointCut: ["pmessage.main.init, , init"]}]
        }
    }), define("embed/invite/inviteMain", ["require"], function (require) {
        var exports = {};
        return exports.renderHtml = function (e, t, i, n, o, a) {
            var r = t.getWrap(), s = i.getInviteStyle(), l = n.template(o, s);
            e.appendHTML(l, r), a.process()
        }, exports.init = function (e) {
            exports.renderHtml(), e.init()
        }, exports
    }), define("embed/invite/inviteData", ["require"], function (require) {
        var exports = {};
        return exports.getInviteStyle = function (e, t) {
            var i = e.getServer("configBox").inviteBox, n = t.dataProcess(i);
            return n
        }, exports
    }), define("embed/invite/inviteHandler", ["require"], function (require) {
        var exports = {};
        return exports.bindEvent = function (e, t, i) {
            i.process();
            var n = i.getClickEle();
            e.domOn(n, "click", i.acceptInvite), e.domOn([t.PREFIXID + "cancel", t.PREFIXID + "tool"], "click", i.refuseInvite)
        }, exports.init = function () {
            exports.bindEvent()
        }, exports
    }), define("embed/invite/pc/invitePMain", ["require"], function (require) {
        var exports = {};
        return exports.inviteWindowGuard = function (e, t, i, n, o) {
            var a = e.getServer("configBox").inviteBox;
            if (e.isAutoInvite()) {
                if (+a.startPage === n.ALL_PAGE)exports.delayToShow(o);
                if (+a.startPage === n.ONLY_STARTPAGE) {
                    var r = t.get(n.INVITE_START_PAGE_COOKIE);
                    if (!r)exports.delayToShow(o); else if (r === location.href)exports.delayToShow(o); else if (document.referrer) {
                        var s = i.getHost(document.referrer);
                        if (s !== location.hostname)exports.delayToShow(o)
                    } else {
                        var l = t.get(n.INVITE_COOKIE_NAME);
                        if (l) {
                            if (l !== location.hostname)exports.delayToShow(o)
                        } else exports.delayToShow(o)
                    }
                }
            }
        }, exports.delayToShow = function (e, t, i, n) {
            var o = e.getServer("configBox").inviteBox, a = o.stayTime;
            if ("number" != typeof a || 0 > a)a = 0; else a = 1e3 * a;
            t.set(i.INVITE_COOKIE_NAME, location.hostname, {path: "/"}), t.set(i.INVITE_START_PAGE_COOKIE, location.href, {path: "/"}), setTimeout(function () {
                exports.startCircleShow(n)
            }, a)
        }, exports.startCircleShow = function (e, t) {
            if (4 !== t.status)e.visibleControl(1); else e.clearTimer(), e.visibleControl(1)
        }, exports.setStyle = function (e, t, i, n) {
            if (e.ie && !(e.ie > 7)) {
                var o = t.g("nb_invite_welcome"), a = n || o.firstChild, r = a.childNodes;
                if (r.length)for (var s = 0, l = r.length; l > s; s++) {
                    var h = r[s];
                    if (3 !== +h.nodeType) {
                        for (var c = a.currentStyle, d = i.PLAIN_STYLE_CONFIG, u = 0, m = d.length; m > u; u++) {
                            var f = d[u];
                            if (c[f] && !h.style[f])h.style[f] = c[f]
                        }
                        if ("STRONG" === h.nodeName)h.style.fontWeight = "bold"; else if ("EM" === h.nodeName)h.style.fontStyle = "italic";
                        if (h.childNodes.length)exports.setStyle(h)
                    } else;
                }
            }
        }, exports.process = function (e, t, i, n) {
            exports.setStyle();
            var o = e.getServer("configBox").inviteBox;
            if (2 === +o.buttonType)t.init(n.g("nb_invite_input"));
            i.on("circleShowInvite", exports.inviteWindowGuard)
        }, exports
    }), define("embed/invite/pc/inviteHandler", ["require"], function (require) {
        var exports = {}, e = null, t = {};
        return exports.clearTimer = function () {
            clearTimeout(e)
        }, exports.countToShow = function (i) {
            if (clearTimeout(e), t.reInvite === i.ALLOW_REINVITE && "number" == typeof t.inviteInterval && +t.inviteInterval >= 0)e = setTimeout(function () {
                exports.visibleControl(1)
            }, 1e3 * +t.inviteInterval)
        }, exports.countToHide = function (i) {
            if (clearTimeout(e), t.autoHide === i.ALLOW_AUTO_HIDE && "number" == typeof t.closeTime && +t.closeTime >= 0)e = setTimeout(function () {
                exports.visibleControl(0)
            }, 1e3 * +t.closeTime)
        }, exports.visibleControl = function (e, i, n, o) {
            var a = e.g(n.INVITEID);
            if (1 === o) {
                if (e.show([a]), t.autoHide === n.ALLOW_AUTO_HIDE)exports.countToHide()
            } else if (0 === o)if (e.hide([a]), t.reInvite === n.ALLOW_REINVITE && t.autoInvite === n.ALLOW_AUTO_INVITE)exports.countToShow()
        }, exports.refuseInvite = function (e, t, i, n) {
            if (2 === e.fromType)t.refuse();
            exports.visibleControl(0), exports.clickInvite("reject"), i.domStop(n)
        }, exports.acceptInvite = function (e, i, n) {
            if (2 === +t.buttonType) {
                var o = n.g("nb_invite_input").value;
                o = i.trim(o), t.inviteTxt = i.filterXSS(o)
            }
            e.accept(), exports.visibleControl(0), exports.clickInvite("accept")
        }, exports.getClickEle = function (e) {
            var i = "";
            if (0 === +t.buttonType)i = e.PREFIXID + "wrap"; else i = e.PREFIXID + "ok";
            return i
        }, exports.clickInvite = function (e) {
        }, exports.process = function (e) {
            t = e.getServer("configBox").inviteBox
        }, exports
    }), define("embed/invite/pc/invitePc.tpl", [], function () {
        return '<!-- target: invite --><ins class="nb-invite-wrap nb-invite-wrap-base nb-position-base nb-<%position%> <%customerStyleClass%> <%talkTypeStyle%>" id="nb_invite_wrap" style="width:<%width%>px;display:none;<%extraPostion%>;"><ins class="nb-invite-body nb-invite-skin-<%skinIndex%>" style="height:<%height%>px;<%customerStyle.backImg%>"><ins class="nb-invite-tool nb-invite-tool-base" id="nb_invite_tool" style=""></ins><ins class="nb-invite-text nb-invite-text-base"><ins class="nb-invite-welcome nb-invite-welcome-base <%isShowText%>" id="nb_invite_welcome"><%welcome%></ins></ins><% if (data.buttonType === 1) { %><ins class="nb-invite-btn-base nb-invte-btns-<%skinIndex%>"><ins class="nb-invite-cancel nb-invite-cancel-base" id="nb_invite_cancel">\u7a0d\u540e\u518d\u8bf4</ins><%if (data.isCustomerStyle == 1) { %><ins class="nb-invite-ok nb-invite-ok-base" id="nb_invite_ok" style="<%customerStyle.acceptBgColor%>;<%customerStyle.acceptFontColor%>;">\u73b0\u5728\u54a8\u8be2</ins><% } else { %><ins class="nb-invite-ok nb-invite-ok-base" id="nb_invite_ok">\u73b0\u5728\u54a8\u8be2</ins><% } %></ins><% } %></ins><% if (data.buttonType == 2) { %><ins class="nb-invite-btn-skin-<%skinIndex%> nb-invte-btns-<%buttonType%>"><%if (data.isCustomerStyle == 1) { %><ins class="nb-invite-ok nb-invite-ok-base nb-direct-send-btn" id="nb_invite_ok" style="<%customerStyle.acceptBgColor%>;<%customerStyle.acceptFontColor%>;">\u53d1\u9001</ins><% } else { %><ins class="nb-invite-ok nb-invite-ok-base nb-direct-send-btn" id="nb_invite_ok">\u53d1\u9001</ins><% } %><ins class="nb-invite-input-wrap"><input type="text" class="nb-invite-input" id="nb_invite_input" maxlength="200" placeholder="\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u8fd9\u91cc\u548c\u6211\u4eec\u8054\u7cfb" data-ph="\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u8fd9\u91cc\u548c\u6211\u4eec\u8054\u7cfb"></ins></ins><% } %></ins><!-- end -->'
    }), define("embed/invite/pc/invitePcData", ["require"], function (require) {
        var exports = {};
        return exports.dataProcess = function (e, t, i) {
            var n = t.extend({}, i), o = "";
            if ("middle" === i.position)o = "margin-left: -" + Math.ceil(i.width / 2) + "px;margin-top: -" + Math.ceil(i.height / 2) + "px";
            if (n.extraPostion = o, n.isCustomerStyle) {
                n.customerStyleClass = "customer-invite-style";
                var a = n.customerStyle;
                if (a.backImg = "background:url(" + a.backImg + ")", a.acceptBgColor = "background-color:" + i.customerStyle.acceptBgColor, a.acceptFontColor = "color:" + i.customerStyle.acceptFontColor, 2 === +i.buttonType)a.acceptBgColor = "background-color:" + i.sendButton.bgColor, a.acceptFontColor = "color:" + i.sendButton.fontColor
            }
            if (2 === +i.buttonType) {
                if (n.talkTypeStyle = "driect-talk-style", "right-bottom" === i.position || "left-bottom" === i.position)n.position = i.position + "-direct"
            } else if (0 === +i.buttonType)n.talkTypeStyle = "blank-talk-style";
            n.isShowText = ["nb-hide", "nb-show"][+i.isShowText];
            var r = e.getServer("siteObj");
            if ("false" === r.online)n.isStop = !0;
            return n
        }, exports
    }), define("embed/invite/pc/inviteConsts", [], function () {
        return {
            INVITEID: "nb_invite_wrap",
            WRAPID: "newBridge",
            PREFIXID: "nb_invite_",
            ALLOW_REINVITE: 1,
            DENY_REINVITE: 0,
            ALLOW_AUTO_HIDE: 1,
            DENY_AUTO_HIDE: 0,
            ALLOW_AUTO_INVITE: 1,
            ONLY_STARTPAGE: 0,
            ALL_PAGE: 1,
            INVITE_COOKIE_NAME: "nb-referrer-hostname",
            INVITE_START_PAGE_COOKIE: "nb-start-page-url",
            PLAIN_STYLE_CONFIG: ["fontSize", "fontStyle", "fontWeight", "textDecoration", "fontFamily", "color"]
        }
    }), define("embed/invite/invitePConfig", ["require", "./inviteMain", "./inviteData", "./inviteHandler", "./pc/invitePMain", "./pc/inviteHandler", "./pc/invitePc.tpl", "./pc/invitePcData", "./pc/inviteConsts"], function (require) {
        return {
            "package": "pinvite",
            resource: {
                main: require("./inviteMain"),
                data: require("./inviteData"),
                handler: require("./inviteHandler"),
                pmain: require("./pc/invitePMain"),
                phandler: require("./pc/inviteHandler"),
                tpl: require("./pc/invitePc.tpl"),
                pdata: require("./pc/invitePcData"),
                consts: require("./pc/inviteConsts")
            },
            injection: [{
                id: "pinvite.main",
                method: {
                    init: ["pinvite.handler"],
                    renderHtml: ["pbase.dom", "common.view", "pinvite.data", "common.util", "pinvite.tpl", "pinvite.pmain"]
                }
            }, {id: "pinvite.data", method: {getInviteStyle: ["data.config", "pinvite.pdata"]}}, {
                id: "pinvite.handler",
                method: {bindEvent: ["pbase.events", "pinvite.consts", "pinvite.phandler"]}
            }, {
                id: "pinvite.pmain",
                method: {
                    setStyle: ["pbase.browser", "pbase.dom", "pinvite.consts"],
                    inviteWindowGuard: ["data.config", "common.cookie", "common.util", "pinvite.consts"],
                    delayToShow: ["data.config", "common.cookie", "pinvite.consts"],
                    startCircleShow: ["pinvite.phandler"],
                    process: ["data.config", "common.placeHolder", "core.main", "pbase.dom"]
                }
            }, {id: "pinvite.pdata", method: {dataProcess: ["data.config", "pbase.lib"]}}, {
                id: "pinvite.phandler",
                method: {
                    process: ["data.config"],
                    acceptInvite: ["pchat.chat", "common.util", "pbase.dom"],
                    refuseInvite: ["core.config", "pchat.chat", "pbase.events"],
                    visibleControl: ["pbase.dom", "data.config", "pinvite.consts"],
                    countToHide: ["pinvite.consts"],
                    countToShow: ["pinvite.consts"],
                    getClickEle: ["pinvite.consts"]
                }
            }],
            aspect: [{id: "pinvite.main", pointCut: ["picon.main.init, , init"]}]
        }
    }), define("embed/message/messageMain", ["require"], function (require) {
        var exports = {};
        return exports.renderHtml = function (e, t, i, n, o, a) {
            var r = t.getMessagetyle(), s = o.getWrap(), l = i.template(e, r);
            n.appendHTML(l, s), a.process(r)
        }, exports.init = function (e) {
            exports.renderHtml(), e.init()
        }, exports
    }), define("embed/message/messageData", ["require"], function (require) {
        var exports = {};
        return exports.getMessagetyle = function (e, t) {
            var i = e.getServer("configBox").noteBoard, n = t.dataProcess(i);
            return n
        }, exports
    }), define("embed/message/messageHandler", ["require"], function (require) {
        var exports = {};
        return exports.sendMessage = function (e) {
            e.sendMessage()
        }, exports.closeMessage = function (e) {
            e.closeMessage()
        }, exports.bindEvent = function (e, t, i) {
            e.domOn(t.PREFIXNODEID + "send", "click", exports.sendMessage), e.domOn([t.PREFIXNODEID + "close", "sucess_close"], "click", exports.closeMessage), i.process()
        }, exports.init = function () {
            exports.bindEvent()
        }, exports
    }), define("embed/message/pc/messagePMain", ["require"], function (require) {
        function e(e, t) {
            if (t)for (var i = 0, n = t.length; n > i; i++) {
                var o = [];
                if (t[i].subItems) {
                    o = o.concat(t[i].subItems);
                    var a = new e;
                    a.init({
                        id: "node_select_wrap_" + t[i].index,
                        layerCont: "nb_nodeboard",
                        name: t[i].name,
                        content: o,
                        readonly: "readonly",
                        selectIndex: 0,
                        zIndex: 99,
                        style: {width: 220, maxHeight: 300, zIndex: 99}
                    })
                }
            }
        }

        var exports = {};
        return exports.showInCenter = function (e) {
            e.showInCenter()
        }, exports.hide = function (e) {
            e.hide(["nb-nodeboard"])
        }, exports.show = function (e) {
            e.show(["nb-nodeboard"])
        }, exports.process = function (t, i) {
            e(t, i.itemsExt)
        }, exports
    }), define("embed/message/pc/messagePData", ["require"], function (require) {
        var exports = {};
        return exports.getMsgText = function (e, t) {
            var i = e.MESSAGERESULTTIP;
            return i[t]
        }, exports.getNodeText = function (e, t) {
            var i = e.MESSAGWTIP;
            if (t)i = i[t];
            return i
        }, exports.dataProcess = function (e, t, i, n, o) {
            var a = n.extend({}, o);
            a.nodeBtnSkinStyle = "nb-nodeboard-send-btn-" + o.skinIndex;
            for (var r = [].concat(a.items, a.itemsExt), s = 0, l = r.length; l > s; s++) {
                var h = r[s];
                if (h.index = l - s, h.required)h.requireTxt = "\uff08\u5fc5\u586b\uff09"
            }
            var c = e.getServer("siteObj"), d = c.online;
            if (1 === +o.isAlwaysDisplay)a.isShow = "nb-show"; else if (2 === +o.isAlwaysDisplay)a.isShow = "nb-hide"; else a.isShow = "true" === d ? "nb-hide" : "nb-show";
            if (a.companyStyle = 1 === o.displayCompany ? "block" : "none", a.cpyInfo = i.filterXSS(o.cpyInfo), a.cpyTel = i.filterXSS(o.cpyTel), t.ie < 10) {
                var u = this.getNodeText();
                a.content = u.content.text, a.name = u.visitorName.text, a.phone = u.visitorPhone.text, a.email = u.visitorEmail.text, a.address = u.visitorAddress.text
            }
            if (t.ie)a.color = "color: #ababab";
            return a.userId = c.userId, a.domain = c.webRoot, a
        }, exports
    }), define("embed/message/pc/messagePc.tpl", [], function () {
        return '<!-- target: nodeBoard --><ins class="nb-nodeboard-base nb-nodeboard-position-base nb-nodeboard-<%position%> <%isShow%>" id="nb_nodeboard"><ins class="nb-nodeboard-contain-base nb-nodeboard-contain"><ins class="nb-nodeboard-top nb-nodeboard-top-<%skinIndex%>"><ins class="nb-head-title">\u8bf7\u60a8\u7559\u8a00</ins><ins class="nb-nodeboard-close" id="nb_nodeboard_close" data-type="min"></ins></ins><% if (data.displayCompany == 1) { %><ins id="nb_nodeboard_text" class="nb-nodeboard-text"><p class="nb-nodeboard-company"><%cpyInfo%></p><p class="nb-nodeboard-link"><%cpyTel%></p></ins><% } %><form id="nb_nodeboard_form" autocomplete="off" class="nb-board-form" action="<%domain%>/bookmanage/saveBook.action?userId=<%userId%>" method="post" accept-charset="utf-8"><ins id="nb_nodeboard_set" class="nb-nodeboard-set"><ins class="nb-nodeboard-content"><textarea id="nb-nodeboard-set-content-js" name="content" data-ph="\u8bf7\u5728\u6b64\u8f93\u5165\u7559\u8a00\u5185\u5bb9\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb\u3002\uff08\u5fc5\u586b\uff09" placeholder="\u8bf7\u5728\u6b64\u8f93\u5165\u7559\u8a00\u5185\u5bb9\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb\u3002\uff08\u5fc5\u586b\uff09" class="nb-nodeboard-set-content"><%content%></textarea></ins><% for (var i = 0, l = data.items.length; i < l; i++) { %><% if (data.items[i].isShow == 1 && data.items[i].name == \'visitorName\') { %><ins class="nb-nodeboard-name" style="z-index:<%items[i].index%>;"><ins class="icon nodeName"></ins><input id="nb_nodeboard_set_name" data-write="<%items[i].required%>" name="visitorName" maxlength="30" class="input" type="text" data-ph="\u59d3\u540d<%items[i].requireTxt%>" placeholder="\u59d3\u540d<%items[i].requireTxt%>"></ins><% } %><% if (data.items[i].isShow == 1 && data.items[i].name == \'visitorPhone\') { %><ins class="nb-nodeboard-name" id="nb_nodeboard_phone" style="z-index:<%items[i].index%>;"><ins class="icon nodePhone"></ins><input id="nb_nodeboard_set_phone" name="visitorPhone" maxlength="30" class="input" data-write="<%items[i].required%>" type="text" data-ph="\u7535\u8bdd<%items[i].requireTxt%>" placeholder="\u7535\u8bdd<%items[i].requireTxt%>"></ins><% } %><% if (data.items[i].isShow == 1 && data.items[i].name == \'visitorEmail\') { %><ins class="nb-nodeboard-name" id="nb_nodeboard_mail" style="z-index:<%items[i].index%>;"><ins class="icon nodeMail"></ins><input id="nb_nodeboard_set_email" name="visitorEmail" maxlength="50" class="input" type="text" data-write="<%items[i].required%>" data-ph="\u90ae\u7bb1<%items[i].requireTxt%>" placeholder="\u90ae\u7bb1<%items[i].requireTxt%>"></ins><% } %><% if (data.items[i].isShow == 1 && data.items[i].name == \'visitorAddress\') { %><ins class="nb-nodeboard-name" style="z-index:<%items[i].index%>;"><ins class="icon nodeAddress"></ins><input id="nb_nodeboard_set_address" name="visitorAddress" class="input" maxlength="50" type="text" data-write="<%items[i].required%>" data-ph="\u5730\u5740<%items[i].requireTxt%>" placeholder="\u5730\u5740<%items[i].requireTxt%>"></ins><% } %><% } %><% for (var j = 0, h = data.itemsExt.length; j < h; j++) { %><% if (data.itemsExt[j].subItems && data.itemsExt[j].isShow) { %><ins class="nb-nodeboard-ext-select" style="z-index:<%itemsExt[j].index%>;"><ins class="nb-nodeboard-select-title"><%itemsExt[j].question%></ins><ins class="nb-nodeboard-select-wrap" id="node_select_wrap_<%itemsExt[j].index%>"></ins></ins><% } %><% if (!data.itemsExt[j].subItems && data.itemsExt[j].isShow) { %><ins class="nb-nodeboard-name nb-nodeboard-ext-input" style="z-index:<%itemsExt[j].index%>;"><ins class="icon nodeExt"></ins><input id="nb_nodeboard_ext_<%itemsExt[j].index%>" name="<%itemsExt[j].name%>" class="input" maxlength="50" type="text" data-write="<%itemsExt[j].required%>" data-ph="<%itemsExt[j].question%><%itemsExt[j].requireTxt%>" placeholder="<%itemsExt[j].question%><%itemsExt[j].requireTxt%>"></ins><% } %><% } %></ins></form><ins class="nb-nodeboard-success" id="nb_nodeboard_success"><ins class="success-box"><ins class="success-icon"></ins><ins class="success-title" id="nb_node_messagetitle">\u611f\u8c22\u7559\u8a00</ins><ins class="success-content" id="nb_node_messagecontent">\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb</ins><ins id="sucess_close" class="sucess-close">\u5173\u95ed</ins></ins></ins><ins class="nb-nodeboard-send" id="nb_node_contain"><ins id="nb_nodeboard_send" class="nb-nodeboard-send-btn <%nodeBtnSkinStyle%>">\u53d1\u9001</ins></ins></ins></ins><!-- end -->'
    }), define("embed/message/pc/messagePHandler", ["require"], function (require) {
        function e(e, t) {
            if (i = {
                    nodeContain: e.g("nb_nodeboard"),
                    tipsEle: e.g(t.PREFIXNODEID + "tips"),
                    nodeTool: e.g(t.PREFIXNODEID + "close"),
                    nodeText: e.g(t.PREFIXNODEID + "text"),
                    nodeSet: e.g(t.PREFIXNODESET),
                    nodeSend: e.g(t.PREFIIXNODE + "contain"),
                    nodeSendBtn: e.g(t.PREFIXNODEID + "send"),
                    nodeSuccesss: e.g(t.PREFIXNODEID + "success"),
                    messageTitle: e.g(t.PREFIIXNODE + "messagetitle"),
                    messageContent: e.g(t.PREFIIXNODE + "messagecontent")
                }, i.nodeContain.className.indexOf("left") >= 0)n = {
                left: "1px",
                right: "auto"
            }; else n = {left: "auto", right: "1px"}
        }

        function t(e, t) {
            if ("enable" === t)e.removeClass(i.nodeSendBtn, "message-disable"); else e.addClass(i.nodeSendBtn, "message-disable")
        }

        var exports = {}, i = {}, n = {};
        exports.hideMessage = function (e, t) {
            var n = i;
            n.nodeTool["data-type"] = "max", n.nodeTool.className = n.nodeTool.className + " " + t.PREFIXCLASS + "max", e.hide([n.nodeText, n.nodeSet, n.nodeSend])
        }, exports.showMessage = function (e, t, n) {
            var o = t.getServer("configBox").noteBoard, a = i;
            if (a.nodeTool["data-type"] = "min", a.nodeTool.className = a.nodeTool.className.replace(n.PREFIXCLASS + "max", ""), 1 === o.displayCompany)e.show([a.nodeText]);
            e.show([a.nodeSet, a.nodeSend])
        }, exports.closeMessage = function (e) {
            var t = i;
            if (e.hide([t.nodeSuccesss]), "min" === t.nodeTool["data-type"] || void 0 === t.nodeTool["data-type"])exports.hideMessage(); else exports.showMessage();
            exports.resetPosition()
        }, exports.resetPosition = function (e, t) {
            e.setStyles(i.nodeContain, t.extend([{
                top: "auto",
                bottom: "1px",
                marginLeft: 0,
                marginTop: 0,
                height: "auto"
            }, n]))
        }, exports.getExtendNode = function (e, t, i) {
            var n = {
                bid: e.bid,
                siteid: e.siteid,
                v: e.bid,
                s: e.siteid,
                e: e.eid,
                client: i.stringify(t.getInfo()),
                referrer: document.referrer,
                origin: document.title || document.URL
            };
            return n
        }, exports.sendMessage = function (e, n, o, a, r) {
            var s = e.validateForm(n.g(r.PREFIXNODEID + "form")), l = n.hasClass(i.nodeSendBtn, "message-disable");
            if (s && !l) {
                t(n, "disable");
                var h = exports.getExtendNode();
                o.postAjax(a.urlRoot + r.SAVEURL, h, r.PREFIXNODEID + "form", exports.sendSucess, !0)
            }
        }, exports.sendSucess = function (e, n, o) {
            var a = e.getMsgText("success");
            if (0 === o.status)n.show([i.nodeSuccesss]), i.messageTitle.innerHTML = a.title, i.messageContent.innerHTML = a.msg, n.hide([i.nodeSet, i.nodeSend]);
            t(n, "enable")
        };
        var o = {height: 0, width: 0};
        return exports.showInCenter = function (t, n) {
            var a = i;
            if (t.show([a.nodeContain]), !a.nodeTool)e(t, n);
            var r = a.nodeTool["data-type"];
            if ("max" === r)exports.showMessage();
            if (!o.width)o.width = a.nodeContain.offsetWidth / 2, o.height = a.nodeContain.offsetHeight / 2;
            t.setStyles(a.nodeContain, {
                top: "50%",
                left: "50%",
                marginLeft: -o.width + "px",
                marginTop: -o.height + "px",
                height: 2 * o.height + "px"
            })
        }, exports.process = function (t, i, n, o) {
            e(t, n), o.registValidate(t.g(n.PREFIXNODEID + "form")), i.init(t.g(n.PREFIXNODEID + "form"))
        }, exports
    }), define("embed/message/pc/messagePConsts", [], function () {
        return {
            SAVEURL: "bookmanage/saveBook.action",
            WRAPID: "newBridge",
            NODEID: "nb-nodeboard",
            PREFIIXNODE: "nb_node_",
            PREFIXNODEID: "nb_nodeboard_",
            PREFIXCLASS: "nb-nodeboard-",
            ERROR_ID: "nb-nodeboard-tips-js",
            PREFIX_NODEID: "nb-nodeboard-",
            PREFIXNODESET: "nb_nodeboard_set",
            MESSAGWTIP: {
                content: {
                    text: "\u8bf7\u5728\u6b64\u8f93\u5165\u7559\u8a00\u5185\u5bb9\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb\u3002\uff08\u5fc5\u586b\uff09",
                    errorTip: "\u7559\u8a00\u5185\u5bb9\u4e0d\u53ef\u4e3a\u7a7a"
                },
                visitorName: {text: "\u59d3\u540d", errorTip: ""},
                visitorPhone: {
                    text: "\u7535\u8bdd",
                    errorTip: "\u8bf7\u8f93\u5165\u6b63\u786e\u683c\u5f0f\u7684\u7535\u8bdd\u53f7\u7801"
                },
                visitorEmail: {
                    text: "\u90ae\u7bb1",
                    errorTip: "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u683c\u5f0f"
                },
                visitorAddress: {text: "\u5730\u5740", errorTip: "\u5730\u5740\u6570\u636e\u8fc7\u957f"},
                overstep: {text: "\u8d85\u6570", errorTip: "\u6570\u636e\u8d85\u8fc7\u6700\u5927\u9650\u957f"}
            },
            MESSAGERESULTTIP: {
                success: {
                    title: "\u611f\u8c22\u7559\u8a00",
                    msg: "\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb"
                }, fail: {title: "\u7559\u8a00\u63d0\u793a", msg: "\u7559\u8a00\u4fdd\u5b58\u5931\u8d25"}
            }
        }
    }), define("embed/message/pc/messageValidate", ["require"], function (require) {
        function e(e) {
            for (var t = !0, i = 0, n = e.length; n > i; i++)if (+e[i].getAttribute("data-write") && ("" === e[i].value || e[i].value === e[i].getAttribute("placeholder"))) {
                t = !1, exports.showErrorTip(e[i], "\u4e0d\u5141\u8bb8\u4e3a\u7a7a!");
                break
            }
            return t
        }

        var exports = {};
        return exports.baseRegex = {
            content: /^.{1,200}$/,
            visitorName: /^.{0,30}$/,
            visitorPhone: /^.{0,30}$/,
            visitorEmail: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            visitorAddress: /^.{0,50}$/
        }, exports.showErrorTip = function (e, t, i) {
            var n = t.parentNode, o = document.createElement("ins");
            o.className = e.PREFIX_NODEID + "tips", o.id = e.PREFIX_NODEID + "tips-js", o.innerHTML = i, n.appendChild(o)
        }, exports.removeErrorTip = function (e, t, i) {
            var n = e.g(t.ERROR_ID);
            if (n) {
                n.parentNode.removeChild(n);
                for (var o, a = i.elements, r = 0; o = a[r]; r++)o.className = o.className.replace("error-tips", "")
            }
        }, exports.validateForm = function (t, i, n) {
            this.removeErrorTip(n);
            var o = !0;
            if (o = e(n)) {
                for (var a, r = n.elements, s = i.getNodeText(), l = 0; a = r[l]; l++) {
                    var h = t.trim(a.value), c = a.name;
                    if ("content" === c && (h === a.getAttribute("data-ph") || "" === h)) {
                        this.showErrorTip(a, s.content.errorTip), o = !1;
                        break
                    }
                    if (h && !h.match(this.baseRegex[c]) && h !== a.getAttribute("data-ph")) {
                        if ("content" === c)this.showErrorTip(a, s.overstep.errorTip); else this.showErrorTip(a, s[c].errorTip);
                        a.className = a.className + " error-tips", o = !1;
                        break
                    }
                }
                return o
            }
        }, exports.registValidate = function (e, t) {
            for (var i, n = t.elements, o = 0; i = n[o]; o++) {
                i.name;
                e.domOn([i], "click", function () {
                    exports.removeErrorTip(t)
                })
            }
        }, exports
    }), define("embed/message/messagePConfig", ["require", "./messageMain", "./messageData", "./messageHandler", "./pc/messagePMain", "./pc/messagePData", "./pc/messagePc.tpl", "./pc/messagePHandler", "./pc/messagePConsts", "./pc/messageValidate"], function (require) {
        return {
            "package": "pmessage",
            resource: {
                main: require("./messageMain"),
                data: require("./messageData"),
                handler: require("./messageHandler"),
                pmain: require("./pc/messagePMain"),
                pdata: require("./pc/messagePData"),
                tpl: require("./pc/messagePc.tpl"),
                phandler: require("./pc/messagePHandler"),
                consts: require("./pc/messagePConsts"),
                validate: require("./pc/messageValidate")
            },
            injection: [{
                id: "pmessage.main",
                method: {
                    init: ["pmessage.handler"],
                    renderHtml: ["pmessage.tpl", "pmessage.data", "common.util", "pbase.dom", "common.view", "pmessage.pmain"]
                }
            }, {
                id: "pmessage.data",
                method: {getMessagetyle: ["data.config", "pmessage.pdata"]}
            }, {
                id: "pmessage.handler",
                method: {
                    bindEvent: ["pbase.events", "pmessage.consts", "pmessage.phandler"],
                    sendMessage: ["pmessage.phandler"],
                    closeMessage: ["pmessage.phandler"]
                }
            }, {
                id: "pmessage.pmain",
                method: {
                    process: ["common.CustomSelect"],
                    showInCenter: ["pmessage.phandler"],
                    hide: ["pbase.dom"],
                    show: ["pbase.dom"]
                }
            }, {
                id: "pmessage.pdata",
                method: {
                    dataProcess: ["data.config", "pbase.browser", "common.util", "pbase.lib"],
                    getNodeText: ["pmessage.consts"],
                    getMsgText: ["pmessage.consts"]
                }
            }, {
                id: "pmessage.phandler",
                method: {
                    process: ["pbase.dom", "common.placeHolder", "pmessage.consts", "pmessage.validate"],
                    showInCenter: ["pbase.dom", "pmessage.consts"],
                    sendMessage: ["pmessage.validate", "pbase.dom", "pbase.post", "core.config", "pmessage.consts"],
                    sendSucess: ["pmessage.pdata", "pbase.dom"],
                    sendFail: ["pmessage.pdata", "pbase.dom"],
                    closeMessage: ["pbase.dom"],
                    getExtendNode: ["core.config", "pbase.client", "pbase.JSON"],
                    hadnleColseNode: ["pbase.dom", "pmessage.consts"],
                    resetPosition: ["pbase.dom", "common.util"],
                    showMessage: ["pbase.dom", "data.config", "pmessage.consts"],
                    hideMessage: ["pbase.dom", "pmessage.consts"]
                }
            }, {
                id: "pmessage.validate",
                method: {
                    validateForm: ["pbase.lib", "pmessage.pdata"],
                    removeErrorTip: ["pbase.dom", "pmessage.consts"],
                    registValidate: ["pbase.events"],
                    showErrorTip: ["pmessage.consts"]
                }
            }],
            aspect: [{id: "pmessage.main", pointCut: ["log.main.init, , init"]}]
        }
    }), define("embed/embedChat/bid", ["require"], function (require) {
        function e(e, t, i) {
            var n = i.OLDBIDKEY + e + "_BID", o = t.getItem(n);
            if (!o)return o; else return o = parseInt(o.substr(0, 13), 16).toString()
        }

        var exports = {};
        return exports.init = function (t, i, n, o, a, r, s) {
            if (i.isObject(s) && "undefined" != typeof r && "" !== r)return r;
            var l = o.BIDPRE + a;
            if (!r)r = t.getItem(l) || e(a, t, o) || n.getBid();
            return t.setItem(l, r), r
        }, exports
    }), define("embed/embedChat/pc/chat", ["require", "exports"], function (require, exports) {
        function e(e, t) {
            var i = window.screen.availWidth, n = window.screen.availHeight;
            return {left: Math.ceil((i - e) / 2), top: Math.ceil((n - t) / 2)}
        }

        function t(e) {
        }

        function i(e) {
        }

        function n(e) {
            exports.openWebimLight(!0)
        }

        var o = null, a = null, r = {};
        exports.initSystemInvite = function (e) {
            e.sid = "-100", e.tid = "-1", e.fromType = 1, e.ttype = 1
        }, exports.refuseSuccess = function (e, t) {
            t.hide([a]), e.fromType = 1
        }, exports.sendInviteMessage = function (e, t, i, n, o) {
            var a = n.getServer("configBox").inviteBox;
            if (a.inviteTxt) {
                var r = new t({main: o.g("nbWebimLightEditor"), styles: {fontSize: "9pt"}});
                r.setContent(a.inviteTxt);
                var s = o.g("nbwlSendBtn");
                i.domTrigger(s, "click")
            }
        }, exports.openWebimLight = function (e, t, i, n) {
            var o = i.getServer("siteObj");
            if (!o.isWebim || n) {
                var a = (false || document.getElementById("newBridge")).require;
                a(["embed/webimlight/main"], function (e) {
                    e.init()
                })
            }
        }, exports.autoOpenWebimLight = function (e, t) {
            var i = e.getServer("siteObj").siteId, n = "webimLightAlive" + i, o = t.localStorage.getItem(n) - 0;
            if (new Date - o < 2e3)exports.openWebimLight()
        }, exports.setVisitorFrom = function (e, t, i, n) {
            var o = t.getServer("siteObj");
            if (e.tid && "-1" !== e.tid && !n)o.from = 4; else if (0 === i)o.from = 5; else o.from = 6
        }, exports.openWebimWindow = function (t, i, n, a, s) {
            var l = n.getServer("siteObj"), h = n.getServer("configBox").inviteBox, c = {
                from: 0,
                sid: "-100",
                tid: s || "-1",
                ttype: 1,
                siteId: l.siteId,
                userId: l.userId
            };
            if (0 !== a)c = {
                from: t.fromType,
                sessionid: t.sid,
                siteId: l.siteId,
                tid: t.tid || "-1",
                userId: l.userId,
                ttype: t.ttype,
                messageText: h.inviteTxt
            }, exports.initSystemInvite();
            r.reqParam = c;
            var d = l.webRoot + "chatIndex", u = 590, m = 550, f = e(u, m), p = "left=" + f.left + ",top=" + f.top + ",resizable=1,width=" + u + ",height=" + m;
            if (!o && 4 !== t.siteStatus || 0 === t.siteStatus) {
                var g = "pcNBBridage" + (new Date).getTime();
                o = window.open(d + "?" + i.jsonToQuery(r), g, p)
            } else if (!o || o.closed || !o.window)o = window.open(d + "?" + i.jsonToQuery(r), "pcNBBridage", p); else o.focus()
        }, exports.accept = function (e, t, i, n, o) {
            var a = i.getServer("siteObj");
            i.getServer("configBox").inviteBox;
            if (this.setVisitorFrom(n, o), !a.isWebim) {
                if (0 !== n) {
                    if (a.invited = 0, 4 === a.from)a.invited = 1
                } else if (0 === n)if (e.gid = o || -1, e.invited = 0, e.tid = -1, o)e.tid = o;
                return void exports.openWebimLight()
            }
            this.openWebimWindow(n, o)
        }, exports.enterSuccess = function (e, t, i, n, o, r, s, l, h) {
            var c = o.getServer("siteObj");
            if (3 === h.status)l.show([a]), n.sid = h.sid, n.tid = h.tid, n.fromType = 2, n.ttype = 0; else if (4 === h.status)l.hide([a]), n.siteStatus = h.status;
            if (e.emit("circleShowInvite", h), exports.autoOpenWebimLight(), exports.initSystemInvite(), 4 !== h.status)i.localStorage.removeItem(r.TALKTYPEPRE + c.siteId);
            var d = s.getItem(r.TALKTYPEPRE + c.siteId);
            if (d && -1 !== d.indexOf("webimlight"))exports.openWebimLight(!0);
            if (4 === h.status) {
                var u = h.sid, d = i.localStorage.getItem(r.TALKTYPEPRE + c.siteId) || "";
                if (!c.isWebim && !t.isConnected() && -1 !== d.indexOf(u))c.from = 5, exports.openWebimLight()
            } else i.localStorage.removeItem(r.TALKTYPEPRE + c.siteId);
            if (n.siteStatus = h.status, -1 !== "3".indexOf(h.status))l.show([a]); else {
                if (l.hide([a]), "iconBox" === c.clcikType && 0 !== h.status)return;
                exports.initSystemInvite()
            }
        }, exports.builtComunicate = function (e, t, o, r, s, l) {
            var h = e.getServer("siteObj");
            o.siteid = h.siteId, o.bid = r.init(h.siteId, h.bid || o.bid, h.session), o.eid = h.eid, o.urlRoot = h.webRoot, o.crossDomain = !0, o.syncSessionHistory = !0, o.visitType = 1, t.init(o), s.init(o), s.enter(exports.enterSuccess, i), t.on("initiative", exports.initiative), t.on("forcetalk", n), t.on("watchStatus", exports.watchStatus), t.on("csoffline", exports.csoffline), a = l.g("nb_invite_wrap")
        }, exports.initiative = function (e, t, i) {
            if (2 === e.fromType)t.show([a])
        }, exports.watchStatus = function (e, t, i, n, o, r, s) {
            var l = t.getServer("siteObj");
            if (a) {
                if (4 === s.status) {
                    if (!l.isWebim && !i.isConnected())exports.openWebimLight()
                } else o.removeItem(n.TALKTYPEPRE + l.siteId);
                if (e.siteStatus = s.status, -1 !== "3".indexOf(s.status))r.show([a]); else r.hide([a]), exports.initSystemInvite()
            }
        }, exports.csoffline = function (e) {
            e.showInCenter()
        }, exports.refuse = function (e, i, n) {
            var o = e.getServer("siteObj"), a = {
                v: o.userId,
                s: o.siteId,
                dev: "0",
                type: 1,
                sid: i.sid,
                tid: i.tid,
                tid_authtype: 4
            };
            n.push(a, exports.refuseSuccess, t)
        }
    }), define("embed/embedChat/pc/leave", ["require"], function (require) {
        var e, exports = {};
        return exports.pageLeave = function (t, i, n, o, a) {
            if (!e) {
                var r = n.getServer("siteObj"), s = 4 === +i.siteStatus, l = o.getItem(a.TALKTYPEPRE + i.siteid);
                if (!l) {
                    if (s && 1 === r.isWebim)t.disconnect(); else t.disconnect(void 0, !1);
                    e = !0
                }
            }
        }, exports.init = function (e) {
            e.domOn(window, "pagehide", exports.pagehideHandler), e.domOn(window, "unload", exports.unloadHandler)
        }, exports.pagehideHandler = function (e) {
            e.domOff(window, "unload", exports.unloadHandler), exports.pageLeave()
        }, exports.unloadHandler = function (e) {
            e.domOff(window, "pagehide", exports.pagehideHandler), exports.pageLeave()
        }, exports
    }), define("embed/embedChat/consts", [], function () {
        return {
            OLDBIDKEY: "QIAO_LS_",
            BIDPRE: "NEWBRIDGE_BID_",
            TALKTYPEPRE: "NEWBRIDGE_TALK_TYPE_",
            DOMAIN: "http://s.goutong.baidu.com"
        }
    }), define("embed/embedChat/config", ["require", "./bid", "./pc/chat", "./pc/leave", "./consts"], function (require) {
        return {
            "package": "pchat",
            resource: {
                bid: require("./bid"),
                chat: require("./pc/chat"),
                leave: require("./pc/leave"),
                consts: require("./consts")
            },
            injection: [{
                id: "pchat.chat",
                method: {
                    setVisitorFrom: ["core.config", "data.config"],
                    openWebimWindow: ["core.config", "core.net", "data.config"],
                    accept: ["core.config", "core.net", "data.config"],
                    builtComunicate: ["data.config", "core.main", "core.config", "pchat.bid", "core.site", "pbase.dom", "pchat.leave"],
                    enterSuccess: ["core.main", "core.chat", "imLib.main", "core.config", "data.config", "pchat.consts", "imLib.localStorage", "pbase.dom"],
                    autoOpenWebimLight: ["data.config", "imLib.main"],
                    openWebimLight: ["pchat.consts", "imLib.localStorage", "data.config"],
                    initSystemInvite: ["core.config"],
                    watchStatus: ["core.config", "data.config", "core.chat", "pchat.consts", "imLib.localStorage", "pbase.dom"],
                    refuse: ["data.config", "core.config", "core.net"],
                    initiative: ["core.config", "pbase.dom"],
                    refuseSuccess: ["core.config", "pbase.dom"],
                    sendInviteMessage: ["common.util", "imEditor.main", "pbase.events", "data.config", "pbase.dom"],
                    csoffline: ["pmessage.pmain"]
                }
            }, {
                id: "pchat.leave",
                method: {
                    pageLeave: ["core.main", "core.config", "data.config", "imLib.localStorage", "pchat.consts"],
                    init: ["pbase.events"],
                    pagehideHandler: ["pbase.events"],
                    unloadHandler: ["pbase.events"]
                }
            }, {id: "pchat.bid", method: {init: ["imLib.localStorage", "imLib.lang", "pbase.lib", "pchat.consts"]}}],
            aspect: [{
                id: "pchat.chat",
                pointCut: ["pinvite.main.init, , builtComunicate", "toolbar.main.enableSendBtn, ,sendInviteMessage"]
            }, {id: "pchat.leave", pointCut: ["pchat.chat.builtComunicate, , init"]}]
        }
    }), define("lib/util", [], function () {
        function e(e, t) {
            for (var i, n = /<%([^%>]+)?%>/g, o = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, a = "var r = [];\n", r = 0, s = function (e, t) {
                return t ? a += e.match(o) ? e + "\n" : "r.push(data." + e + ");\n" : a += "" !== e ? 'r.push("' + e.replace(/"/g, '\\"') + '");\n' : "", s
            }; i = n.exec(e);)s(e.slice(r, i.index))(i[1], !0), r = i.index + i[0].length;
            s(e.substr(r, e.length - r)), a += 'return r.join("");';
            var l = new Function("data", a.replace(/[\r\t\n]/g, ""));
            return l(t)
        }

        function t(e) {
            for (var t = {}, i = e.length; i--;) {
                var n = e[i];
                if (-1 !== Object.prototype.toString.call(n).indexOf("Object"))for (var o in n)if (n.hasOwnProperty(o))t[o] = n[o]
            }
            return t
        }

        function i(e, t) {
            if (e) {
                for (var i = "", n = e.split("<!-- end -->"), o = n.length; o--;) {
                    var a = n[o];
                    if (a) {
                        if (1 === arguments.length)t = a.match(/\w{0,}( \-\->)/g)[0].match(/\w/g).join("");
                        var r = "<!-- target: " + t + " -->";
                        if (-1 !== a.indexOf(r))i = a
                    } else;
                }
                return i
            }
            return ""
        }

        function n(e, t) {
            var i = {};
            i.phoneReg = /(^(\d{3,4}(-?))?\d{7,8})$|^((\+86)|(86))?(1[0-9][0-9]{9})/, i.emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
            var n = t.match(i[e]);
            if (null != n)return !0; else return !1
        }

        function o(e) {
            if ("string" != typeof e)return e; else return e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = e.replace(/\"/g, "&quot;"), e = e.replace(/\'/g, "&apos;")
        }

        function a(e) {
            var t = {};
            if ("object" == typeof e)for (var i in e)if (e.hasOwnProperty && e.hasOwnProperty(i))if ("object" == typeof e[i])t[i] = a(e[i]); else t[i] = e[i];
            return t
        }

        var r = function (e) {
            if ("string" != typeof e)return "";
            var t = document.createElement("a");
            return t.href = e, t.hostname
        }, s = function (e) {
            return /\{\s*\[native code\]\s*\}/.test("" + e)
        }, l = function (e) {
            var t = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
            return String(e).replace(t, "")
        }, h = function (e) {
            if (e = e || {}, !e.x || !e.y)return ""; else return "http://map.baidu.com/mobile/webapp/place/marker/qt=inf&vt=map&act=read_share&code=/point=" + encodeURIComponent(e.x + "|" + e.y) + "&title=" + encodeURIComponent(e.name || "") + "&content=" + encodeURIComponent(e.alias || "")
        }, c = function (e) {
            if (e = e || {}, !e.x || !e.y)return "";
            var t = e.x, i = e.y, n = e.zoom || 15, o = e.width || 220, a = e.height || 110, r = e.style || "-1,http://qiao.baidu.com/site/pinpc.png,-1";
            return "http://api.map.baidu.com/staticimage?width=" + o + "&height=" + a + "&center=" + t + "," + i + "&markers=" + t + "," + i + "&zoom=" + n + "&markerStyles=" + r
        };
        return {
            template: e,
            pickHtml: i,
            regext: n,
            filterXSS: o,
            extend: t,
            cloneObj: a,
            getHost: r,
            isNativeFun: s,
            trim: l,
            getLocationUrl: h,
            getLocationImgUrl: c
        }
    }), define("common/util", ["lib/util"], function (e) {
        return e
    }), define("lib/tpl", [], function () {
        var exports = {}, e = {};
        return exports.parse = function (t) {
            t = t || "";
            var i = 0, n = "";
            t.replace(/<\!\-\-\s*target:\s*(\w+)\s*\-\->/g, function (o, a, r) {
                if (0 !== r)e[n] = t.substring(i, r);
                n = a, i = r
            }), e[n] = t.substring(i, t.length)
        }, exports.get = function (t) {
            return e[t] || ""
        }, exports
    }), define("common/tpl", ["lib/tpl"], function (e) {
        return e
    }), define("lib/pc/fixed_2", [], function () {
        function e() {
            for (var e = 0; e < t.length; e++)exports.setFixedPos(t[e])
        }

        var exports = {}, t = [];
        return exports.setFixedPos = function (e) {
            var t, i = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
            if (e.style.position = "absolute", void 0 === e.fixedTop) {
                if (t = e.style.top || e.currentStyle.top, !t || "auto" === t)if (t = e.style.bottom || e.currentStyle.bottom, t && t.indexOf("%") >= 0)t = i.clientHeight * (100 - parseInt(t, 10)) / 100 - e.offsetHeight; else if ("auto" === t)t = void 0; else if (t)t = i.clientHeight - e.offsetHeight - parseInt(t, 10);
                if (t) {
                    if ("string" == typeof t && t.indexOf("%") >= 0)t = i.clientHeight * parseInt(t, 10) / 100; else t = parseInt(t, 10);
                    e.fixedTop = t
                } else e.fixedTop = void 0
            }
            if (void 0 !== e.fixedTop)e.style.top = Math.max(document.documentElement.scrollTop, document.body.scrollTop) + e.fixedTop + "px"
        }, exports.setFixed = function (i, n) {
            if (n)if (i.ie <= 6 || 7 === i.ie && !i.isStrict()) {
                if (n.fixedTop)return void exports.setFixedPos(n);
                if (!t.length) {
                    var o = document.documentElement;
                    o.style.backgroundImage = "url(about:blank)", o.style.backgroundAttachment = "fixed", document.execCommand("BackgroundImageCache", !1, !0), window.attachEvent("onscroll", e), window.attachEvent("onresize", e)
                }
                t.push(n), exports.setFixedPos(n)
            }
        }, exports
    }), define("common/pc/fixed_2", ["lib/pc/fixed_2"], function (e) {
        return e
    }), define("base/pc/brower", [], function () {
        var e, t = document, i = new RegExp("msie (\\d+\\.\\d+)|trident", "i");
        return {
            ie: function () {
                return i.test(navigator.userAgent) ? t.documentMode || +RegExp.$1 : e
            }(),
            isBDBox: / baiduboxapp\//i.test(navigator.userAgent),
            opera: /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp.$6 || RegExp.$2) : void 0,
            isStrict: function () {
                return "CSS1Compat" === t.compatMode
            },
            isMobile: function () {
                var e = navigator.userAgent;
                return !!e.match(/.*Mobile.*/) || "ontouchstart"in window
            }()
        }
    }), define("base/pc/dom", ["require"], function (require) {
        var exports = {};
        return exports.setStyles = function (e, t) {
            for (var i in t)if (t.hasOwnProperty(i))this.setStyle(e, i, t[i])
        }, exports.setStyle = function (e, t, i) {
            e.style[t] = i
        }, exports.hide = function (e, t) {
            if (e.isType(t, "Array"))for (var i = t.length; i--;) {
                var n = t[i];
                if ("string" == typeof n)n = this.g(n);
                if (n)n.style.display = "none"; else;
            }
        }, exports.show = function (e, t) {
            if (e.isType(t, "Array"))for (var i = t.length; i--;) {
                var n = t[i];
                if ("string" == typeof n)n = this.g(n);
                n.style.display = "block"
            }
        }, exports.attributeName = function (e, t) {
            var i = e.ie, n = {};
            if (8 > i)n = {"for": "htmlFor", "class": "className"}; else n = {htmlFor: "for", className: "class"};
            return n[t] || t
        }, exports.createDom = function (e, t, i) {
            var n = document.createElement(e);
            for (var o in t)if (t.hasOwnProperty(o))if ("styles" === o)this.setStyles(n, t[o]); else n.setAttribute(this.attributeName(o), t[o]);
            if (i)i.appendChild(n);
            return n
        }, exports.hasClass = function (e, t) {
            for (var i = e.className.split(" "), n = 0; n < i.length; n++)if (t === i[n])return !0;
            return !1
        }, exports.modifyClass = function (e, t, i) {
            for (var n = e.className, o = n.split(/\s/), a = {}, r = 0; r < o.length; r++)a[o[r]] = !0;
            if (i)a[t] = !0; else delete a[t];
            o = [];
            for (var s in a)if (a.hasOwnProperty(s))o.push(s);
            e.className = o.join(" ")
        }, exports.addClass = function (e, t) {
            this.modifyClass(e, t, !0)
        }, exports.removeClass = function (e, t) {
            this.modifyClass(e, t, !1)
        }, exports.appendHTML = function (e, t) {
            e = e || "";
            var i = document.createElement("div");
            if (i.innerHTML = e, t)for (; i.firstChild;)t.appendChild(i.firstChild);
            return i.childNodes
        }, exports.appendNodes = function (e, t) {
            for (e = e || []; e[0];)t.appendChild(e[0])
        }, exports.createIframe = function (e, t, i, n) {
            var o = e.ie, a = 9 > o ? '<iframe name="' + i + '">' : "iframe", r = document.createElement(a);
            if (r.setAttribute("id", t), r.setAttribute("name", i), r.style.display = "none", r.setAttribute("src", "about:blank"), n)n.appendChild(r);
            return r
        }, exports.g = function (e, t) {
            var i = null;
            if ("string" == typeof t)i = document.getElementById(t); else if (e.isType(t, "HTML") || "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName)i = t; else if (t === window)i = t;
            return i
        }, exports.contain = function (e, t) {
            if (e === t)return !0;
            if (e === document.body)return !1;
            if (!e)return !1; else return this.contain(e.parentNode, t)
        }, exports.getTarget = function (e) {
            e = e || window.event;
            var t = e.target || e.srcElement;
            return t
        }, exports.scrollToBottom = function (e) {
            e.scrollTop = e.scrollHeight - e.offsetHeight
        }, exports.prependNodes = function (e, t) {
            for (e = e || []; e[0];)t.insertBefore(e[0], t.firstChild || null)
        }, exports.prependHTML = function (e, t) {
            e = e || "";
            var i = document.createElement("div");
            if (i.innerHTML = e, t)for (; i.firstChild;)t.insertBefore(i.firstChild, t.firstChild || null);
            return i.childNodes
        }, exports
    }), define("lib/pc/Fixed", ["require", "../../base/pc/brower", "../../base/pc/dom"], function (require) {
        function e() {
            if (6 === s.ie)c.execCommand("BackgroundImageCache", !1, !0)
        }

        function t() {
            return Math.max(c.documentElement.scrollTop, c.body.scrollTop)
        }

        function i() {
            var e = c.documentElement, t = c.body, i = h ? e : t;
            return i.clientHeight
        }

        function n() {
            return Math.max(c.documentElement.scrollLeft, c.body.scrollLeft)
        }

        function o() {
            var e = c.documentElement, t = c.body, i = h ? e : t;
            return i.clientWidth
        }

        function a(e, t) {
            if (e.indexOf("%") > -1)e = parseInt(e, 10) / 100, e *= t;
            return e = parseInt(e, 10)
        }

        function r(t, i) {
            var n = this;
            if (e(), !t.instanceOf(n, r))n = new r(i); else n.init(i);
            return n
        }

        var s = require("../../base/pc/brower"), l = require("../../base/pc/dom"), h = s.isStrict(), c = document;
        return r.prototype = {
            constructor: r, init: function (e) {
                if (!(s.ie <= 6 || 7 === s.ie && !s.isStrict()) || !e)return null;
                var t = this;
                return t.el = l.g(e), t.el.style.position = "absolute", t.set(), t
            }, set: function () {
                var e = this;
                if (e.isReady())return e.getNodeRect(), e.analyze(), e.setHtml(), void e.bindEvent(); else return void 0
            }, bindEvent: function () {
                var e = this;
                window.attachEvent("onscroll", function () {
                    e.fix()
                }), window.attachEvent("onresize", function () {
                    e.resizeFix()
                })
            }, resizeFix: function () {
                var e = this;
                if (s.ie <= 6)e.getNodeRect(), e.analyze()
            }, analyzeTop: function () {
                var e, t = this, n = t.rect, o = i();
                if (!n.bottom || "auto" === n.bottom)return e = a(n.top, o), void(t.top = e);
                var r = a(n.bottom, o);
                e = o - r - t.el.offsetHeight, t.top = e
            }, analyzeLeft: function () {
                var e, t = this, i = t.rect, n = o();
                if (!i.right || "auto" === i.right)return e = a(i.left, n), void(t.left = e);
                var r = a(i.right, n);
                e = n - r - t.el.offsetWidth, t.left = e
            }, analyze: function () {
                var e = this;
                if (e.isReady())e.analyzeTop(), e.analyzeLeft(), e.fix()
            }, isReady: function () {
                var e = this, t = e.el;
                if (t)return !0; else return !1
            }, setHtml: function () {
                var e = c.documentElement;
                e.style.backgroundImage = "url(about:blank)", e.style.backgroundAttachment = "fixed"
            }, getNodeRect: function () {
                var e = this, t = e.el, i = t.style, n = t.currentStyle;
                e.rect = {
                    top: i.top || n.top,
                    left: i.left || n.left,
                    right: i.right || n.right,
                    bottom: i.bottom || n.bottom
                }
            }, fix: function () {
                var e = this, i = e.el;
                if (e.isReady()) {
                    var o = t(), a = n();
                    i.style.top = o + e.top + "px", i.style.left = a + e.left + "px", i.style.bottom = "auto", i.style.right = "auto"
                }
            }
        }, r
    }), define("common/pc/Fixed", ["lib/pc/Fixed"], function (e) {
        return e
    }), define("lib/view", ["require"], function (e) {
        var exports = {}, t = "newBridge";
        return exports.getWrap = function (e) {
            var i = e.g(t);
            return i
        }, exports
    }), define("common/view", ["lib/view"], function (e) {
        return e
    }), define("lib/pc/placeholder", ["require"], function (require) {
        var exports = {}, e = "placeholder"in document.createElement("input"), t = "data-ph", i = "mess-placeholder", n = "place-style";
        return exports.ctrlFocus = function (e, o) {
            var a = o || window.event, r = a.target || a.srcElement, s = r.getAttribute(t), l = e.trim(r.value);
            if (s === l)r.className = r.className.replace(i, n), r.value = ""
        }, exports.ctrlBlur = function (e, o) {
            var a = o || window.event, r = a.target || a.srcElement, s = r.getAttribute(t), l = e.trim(r.value);
            if ("" === l)r.className = r.className.replace(n, i), r.value = s
        }, exports.init = function (e, n, o, a) {
            if (e.ie && !(e.ie > 9))for (var r, s = a.elements || [a], l = 0; r = s[l]; l++)if ("INPUT" === r.tagName || "TEXTAREA" === r.tagName) {
                var h = r.getAttribute(t);
                if (!h)continue;
                o.domOn(r, "focus", exports.ctrlFocus), o.domOn(r, "blur", exports.ctrlBlur), r.className += " " + i, r.value = h
            }
        }, exports.getValue = function (i) {
            var n = i.value;
            if (!e && i.getAttribute(t) === n)return i.value = "", ""; else return n
        }, exports.getPh = function (e) {
            var i = e.getAttribute(t);
            return i
        }, exports
    }), define("common/pc/placeholder", ["lib/pc/placeholder"], function (e) {
        return e
    }), define("lib/cookie", [], function () {
        var exports = {};
        return exports.get = function (e) {
            var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"), i = t.exec(document.cookie);
            return i ? decodeURIComponent(i[2]) : null
        }, exports.set = function (e, t, i) {
            i = i || {};
            var n;
            if (i.expires)if (n = i.expires, "number" == typeof n)n = new Date, n.setTime(i.expires + n.getTime());
            document.cookie = e + "=" + encodeURIComponent(t) + (i.path ? "; path=" + i.path : "") + (i.expires ? "; expires=" + i.expires.toGMTString() : "") + (i.domain ? "; domain=" + i.domain : "") + (i.secure ? "; secure" : "")
        }, exports
    }), define("common/cookie", ["lib/cookie"], function (e) {
        return e
    }), define("lib/pc/CustomSelect", ["require"], function (require) {
        function e() {
            this.options = {selectIndex: 0, content: [], style: {}}
        }

        function t(e) {
            return document.createElement(e)
        }

        function i(e, i) {
            var n = t(e);
            return n.className = "custom-select-" + i, n
        }

        function n(e, t) {
            for (var i in t)if (t.hasOwnProperty(i))e[i] = t[i];
            return e
        }

        function o(e) {
            for (; e.hasChildNodes();)e.removeChild(e.firstChild)
        }

        function a(e, t) {
            for (; e;) {
                if (e === t)return !0;
                e = e.parentNode
            }
            return !1
        }

        function r(e) {
            var t = e || window.event;
            return t.target || t.srcElement
        }

        function s(e, t, i) {
            if (e.addEventListener)e.addEventListener(t, i, !1); else if (e.attachEvent)e.attachEvent("on" + t, i); else e[t] = i
        }

        function l(e, t) {
            return e[t] ? e[t].split(":")[0] || "" : ""
        }

        function h(e, t) {
            return e[t] ? e[t].split(":")[1] || "" : ""
        }

        function c(e) {
            var t = r(e);
            if (!a(t, this.main))this.hideLayer()
        }

        function d(e) {
            var t = this.body;
            if ("block" === t.style.display)this.hideLayer(); else this.showLayer(), f.apply(this)
        }

        function u(e) {
            var t = r(e);
            if (t.className.indexOf("custom-select-" + U) > -1)this.setProperties({selectIndex: t.index});
            this.hideLayer()
        }

        function m(e) {
            var t = this.container.offsetWidth;
            this.options.style.width = t, this.setProperties({style: this.options}), this.hideLayer()
        }

        function f() {
            var e = this.title.getBoundingClientRect(), t = this.body.offsetHeight, i = this.title.offsetHeight, n = document.documentElement.clientHeight, o = n - (e.top + i), a = g(this.title, V(this.options.layerCont));
            if (t >= o)p(this.body, {
                top: a.top - t + y + "px",
                left: a.left + "px"
            }); else p(this.body, {top: a.top + i - y + "px", left: a.left + "px"})
        }

        function p(e, t) {
            for (var i in t)if (t.hasOwnProperty(i))e.style[i] = t[i]
        }

        function g(e, t) {
            for (var i = 0, n = 0; e;)if (e !== t)i += e.offsetTop, n += e.offsetLeft, e = e.offsetParent; else e = null;
            return {top: i, left: n}
        }

        function V(e) {
            if ("string" == typeof e)return document.getElementById(e); else return null
        }

        var U = "list-item", y = 1;
        return e.prototype.init = function (e) {
            var t = this.container = V(e.id);
            if (t) {
                if (e._self = this, this.options = n(this.options, e), !this.options.style.width)this.options.style.width = t.offsetWidth;
                this.initHtml(this.options), this.initEvent(), t.customSelect = this
            }
        }, e.prototype.initHtml = function (e) {
            if (this.container) {
                this.main = i("ins", "main"), this.title = i("ins", "title"), this.titleContent = i("ins", "title-content"), this.titleInput = i("input", "title-input"), this.body = i("ins", "body"), this.bodyContent = i("ins", "body-content"), this.bodyList = i("ins", "body-list"), this.title.appendChild(this.titleContent), this.title.appendChild(this.titleInput), this.bodyContent.appendChild(this.bodyList), this.body.appendChild(this.bodyContent), this.main.appendChild(this.title), p(this.titleInput, {display: "none"});
                var t = e.layerCont ? V(e.layerCont) : document.getElementsByTagName("body")[0];
                t.appendChild(this.body), this.setProperties(e), this.container.appendChild(this.main)
            }
        }, e.prototype.initEvent = function () {
            var e = this;
            s(this.main, "click", function (t) {
                d.call(e, t)
            }), s(this.body, "click", function (t) {
                u.call(e, t)
            }), s(document, "click", function (t) {
                c.call(e, t)
            }), s(window, "resize", function (t) {
                m.call(e, t)
            }), s(window, "scroll", function (t) {
                e.hideLayer()
            })
        }, e.prototype.showLayer = function () {
            this.body.style.display = "block"
        }, e.prototype.hideLayer = function () {
            this.body.style.display = "none"
        }, e.prototype.setProperties = function (e) {
            var t = [];
            for (var i in e)if (e.hasOwnProperty(i))t.push(i);
            e = this.options = n(this.options, e);
            for (var o = 0, a = t.length; a > o; o++) {
                var r = t[o];
                if ("function" == typeof this.repaint[r])this.repaint[r](e)
            }
        }, e.prototype.getSelectText = function () {
            return this.getText(this.options.selectIndex)
        }, e.prototype.getSelectValue = function () {
            return this.getValue(this.options.selectIndex)
        }, e.prototype.getText = function (e) {
            return this.options.content[e] ? this.options.content[e].split(":")[0] || "" : ""
        }, e.prototype.getValue = function (e) {
            return this.options.content[e] ? this.options.content[e].split(":")[1] || "" : ""
        }, e.prototype.repaint = {
            name: function (e) {
                var t = e._self;
                t.titleInput.setAttribute("name", e.name)
            }, style: function (e) {
                var t = e._self, i = e.style;
                for (var n in i)if (i.hasOwnProperty(n))switch (n) {
                    case"width":
                        var o = parseInt(i.width, 10);
                        t.main.style.width = o + "px", t.title.style.width = o - 2 * y + "px", t.body.style.width = o - 2 * y + "px";
                        break;
                    case"maxHeight":
                        t.bodyList.style.maxHeight = parseInt(i.maxHeight, 10) + "px";
                        break;
                    case"zIndex":
                        t.body.style.zIndex = i.zIndex
                }
            }, title: function (e) {
                var t = e._self, i = e.selectIndex, n = l(e.content, i);
                t.titleContent.innerHTML = n, t.titleInput.value = n;
                var o = t.bodyList.firstChild ? t.bodyList.firstChild.childNodes : [];
                if (o.length) {
                    for (var a = 0, r = o.length; r > a; a++)o[a].className = "custom-select-list-item";
                    o[i].className = "custom-select-list-item active"
                }
            }, content: function (e) {
                for (var t = e._self, n = i("ins", "body-list-cont"), a = e.content || [], r = 0, s = a.length; s > r; r++) {
                    var c = i("ins", U);
                    c.innerHTML = l(a, r), c.setAttribute("value", h(a, r)), c.index = r, n.appendChild(c)
                }
                o(t.bodyList), t.bodyList.appendChild(n)
            }, selectIndex: function (e) {
                this.title(e)
            }
        }, e
    }), define("common/pc/CustomSelect", ["lib/pc/CustomSelect"], function (e) {
        return e
    }), define("lib/convert", [], function () {
        function e(e) {
            var t, a;
            e[0] = o(e[0], -180, 180), e[1] = n(e[1], -74, 74), t = e.slice(0);
            for (var s = 0; s < r.length; s++)if (t[1] >= r[s]) {
                a = l[s];
                break
            }
            if (!a)for (s = r.length - 1; s >= 0; s--)if (t[1] <= -r[s]) {
                a = l[s];
                break
            }
            var h = i(e, a);
            return e = [h[0].toFixed(2), h[1].toFixed(2)]
        }

        function t(e) {
            var t, n;
            t = [Math.abs(e[0]), Math.abs(e[1])];
            for (var o = 0; o < a.length; o++)if (t[1] >= a[o]) {
                n = s[o];
                break
            }
            var r = i(e, n);
            return e = [r[0].toFixed(6), r[1].toFixed(6)]
        }

        function i(e, t) {
            if (e && t) {
                var i = t[0] + t[1] * Math.abs(e[0]), n = Math.abs(e[1]) / t[9], o = t[2] + t[3] * n + t[4] * n * n + t[5] * n * n * n + t[6] * n * n * n * n + t[7] * n * n * n * n * n + t[8] * n * n * n * n * n * n;
                return i *= e[0] < 0 ? -1 : 1, o *= e[1] < 0 ? -1 : 1, [i, o]
            }
        }

        function n(e, t, i) {
            if (null != t)e = Math.max(e, t);
            if (null != i)e = Math.min(e, i);
            return e
        }

        function o(e, t, i) {
            for (; e > i;)e -= i - t;
            for (; t > e;)e += i - t;
            return e
        }

        var exports = {}, a = [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0], r = [75, 60, 45, 30, 15, 0], s = [[1.410526172116255e-8, 898305509648872e-20, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -.03801003308653, 17337981.2], [-7.435856389565537e-9, 8983055097726239e-21, -.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86], [-3.030883460898826e-8, 898305509983578e-20, .30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, .32710905363475, 6856817.37], [-1.981981304930552e-8, 8983055099779535e-21, .03278182852591, 40.31678527705744, .65659298677277, -4.44255534477492, .85341911805263, .12923347998204, -.04625736007561, 4482777.06], [3.09191371068437e-9, 8983055096812155e-21, 6995724062e-14, 23.10934304144901, -.00023663490511, -.6321817810242, -.00663494467273, .03430082397953, -.00466043876332, 2555164.4], [2.890871144776878e-9, 8983055095805407e-21, -3.068298e-8, 7.47137025468032, -353937994e-14, -.02145144861037, -1234426596e-14, .00010322952773, -323890364e-14, 826088.5]], l = [[-.0015702102444, 111320.7020616939, 0x60e374c3105a3, -0x24bb4115e2e164, 0x5cc55543bb0ae8, -0x7ce070193f3784, 0x5e7ca61ddf8150, -0x261a578d8b24d0, 0x665d60f3742ca, 82.5], [.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5], [.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5], [.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-.0003218135878613132, 111320.7020701615, .00369383431289, 823725.6402795718, .46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, .37238884252424, 7.45]];
        return exports.pixelToLngLat = function (e, i, n) {
            return t([e / Math.pow(2, n - 18), i / Math.pow(2, n - 18)])
        }, exports.lngLatToPixel = function (t, i, n) {
            var o = e([t, i]), a = o[0] * Math.pow(2, n - 18), r = o[1] * Math.pow(2, n - 18);
            return [Math.ceil(a), Math.ceil(r)]
        }, exports
    }), define("common/convert", ["lib/convert"], function (e) {
        return e
    }),define("lib/pcConfig", ["require", "./util", "./tpl", "./pc/fixed_2", "./pc/Fixed", "./view", "./pc/placeholder", "./cookie", "./pc/CustomSelect", "./convert"], function (require) {
        return {
            "package": "common",
            resource: {
                util: require("./util"),
                tpl: require("./tpl"),
                fixed: require("./pc/fixed_2"),
                fix: require("./pc/Fixed"),
                view: require("./view"),
                placeHolder: require("./pc/placeholder"),
                cookie: require("./cookie"),
                CustomSelect: require("./pc/CustomSelect"),
                convert: require("./convert")
            },
            injection: [{
                id: "common.fixed",
                method: {Fixed: ["pbase.lib"], setFixed: ["pbase.browser"]}
            }, {id: "common.view", method: {getWrap: ["pbase.dom"]}}, {
                id: "common.placeHolder",
                method: {
                    init: ["pbase.browser", "pbase.lib", "pbase.events"],
                    ctrlFocus: ["pbase.lib"],
                    ctrlBlur: ["pbase.lib"]
                }
            }]
        }
    }),define("common/pcConfig", ["lib/pcConfig"], function (e) {
        return e
    }),define("base/pc/event", ["require"], function (require) {
        var exports = {}, e = {};
        return exports.on = function (t, i) {
            (e[t] = e[t] || []).push(i)
        }, exports.off = function (t, i) {
            var n = [].slice.call(arguments, 0).length;
            if (0 === n.length)return void(e = []);
            if (1 === n.length)return delete e[t], e; else return void 0
        }, exports.trigger = function (t) {
            var i = [].slice.call(arguments, 1), n = e[t];
            if (n)for (var o = n.length; o--;)n[o].call(this, i)
        }, exports.domOn = function (e, t, i, n, o) {
            var a = [];
            if (t.isType(i, "Array"))for (var r = i.length; r--;)a.push(i[r]); else a.push(i);
            for (var s = a.length; s--;) {
                var l = e.g(a[s]) || a[s];
                if (l)if (l.addEventListener)l.addEventListener(n, o, !1); else if (l.attactEvent)l.attachEvent("on" + n, o); else l["on" + n] = o
            }
        }, exports.domTrigger = function (e, t) {
            var i, n = null;
            if (document.createEventObject)i = document.createEventObject(), n = e.fireEvent("on" + t, i); else i = document.createEvent("HTMLEvents"), i.initEvent(t, !0, !0), n = !e.dispatchEvent(i);
            return n
        }, exports.domOff = function (e, t, i, n) {
            var o = e.g(t);
            if (o)if (o.removeEventListener)o.removeEventListener(i, n, !1); else if (o.detactEvent)o.detachEvent("on" + i, n); else o["on" + i] = void 0
        }, exports.domStop = function (e) {
            if (e = e || window.event, e.stopPropagation)e.stopPropagation(); else e.cancelBubble = !0
        }, exports.domPrevent = function (e) {
            if (e = e || window.event, e.preventDefault)e.preventDefault();
            e.returnValue = !1
        }, exports
    }),define("base/pc/post", ["require"], function (require) {
        function e(e) {
            var t = {};
            if (t.status = 0, 0 === t.status)exports.sucess(t); else exports.fail(t);
            var i = e || window.event, n = i.target || i.srcElement;
            n.parentNode.removeChild(n), n.onreadystatechange = null, n.onload = null
        }

        function t() {
        }

        function i(e, t) {
            var i = document.getElementById(t);
            if (!i.hidden) {
                for (var n in e)if (e.hasOwnProperty(n)) {
                    var o = document.createElement("input");
                    o.type = "hidden", o.name = n, o.value = e[n], i.appendChild(o)
                }
                i.hidden = !0
            }
        }

        var exports = {};
        return exports.postAjax = function (n, o, a, r, s, l, h, c) {
            var d = o.getWrap();
            exports.sucess = c || t;
            var u = "nb-board-iframe-js", m = document.getElementById(u);
            if (!m)m = n.createIframe(u, u, d);
            var f;
            if ("object" == typeof m.onload || "object" == typeof m.onreadystatechange)m.onreadystatechange = function () {
                if (/^loaded|complete$/.test(this.readyState))this.onreadystatechange = null, e.call(this)
            }, m.onload = e;
            if (a.ie)f = document.charset, document.charset = "utf-8";
            var p = document.getElementById(h);
            if (!p)p = n.createDom("form", {id: h, action: s, method: "post", "accept-charset": "utf-8"}, d);
            if (i(l, h), p.target = u, a.ie && a.ie < 10)p.onsubmit = function () {
                for (var e, t = p.elements, i = 0; e = t[i]; i++)e.value = r.getValue(e);
                for (p.submit(), i = 0; e = t[i]; i++)if ("" === e.value)e.value = r.getPh(e)
            }, p.onsubmit(); else p.submit();
            document.charset = f
        }, exports
    }),define("base/pc/client", ["require"], function (require) {
        var exports = {};
        return exports.getInfo = function () {
            function e() {
                var e = (new Date).getTimezoneOffset(), t = parseInt(e / 60, 10), i = e % 60, n = "-";
                if (0 > t || 0 > i)if (n = "+", t = -t, 0 > i)i = -i;
                return t += "", i += "", "UTC" + n + t + ":" + i
            }

            var t = window.navigator, i = window.screen, n = {
                language: t.language || t.systemLanguage,
                color: i.colorDepth + "",
                ppi: i.width + "*" + i.height,
                timeZone: e()
            };
            return n
        }, exports
    }),define("base/pc/json", [], function () {
        function e(e) {
            var t = {}.toString.call(e);
            return t = t.substring(8, t.length - 1), t.toLowerCase()
        }

        function t(t) {
            var n = i[e(t)];
            return n ? n(t) : "" + t
        }

        var i = {};
        return i.array = function (e) {
            var i = [];
            i.push("[");
            for (var n = 0, o = e.length; o > n; n++)i.push(t(e[n])), i.push(",");
            return i.splice(i.length - 1, 1), i.push("]"), i.join("")
        }, i.object = function (e) {
            if (null === e)return "null";
            var i = [];
            i.push("{");
            for (var n in e)if (e.hasOwnProperty(n))i = i.concat(['"' + n + '":', t(e[n]), ","]);
            return i.splice(i.length - 1, 1), i.push("}"), i.join("")
        }, i.string = function (e) {
            return '"' + e + '"'
        }, {
            parse: function (e) {
                var t = null;
                try {
                    if (window.JSON && window.JSON.parse)t = window.JSON.parse(e); else t = new Function("return (" + e + ");")()
                } catch (i) {
                }
                return t
            }, stringify: function (e) {
                var i;
                if (window.JSON && window.JSON.stringify)i = window.JSON.stringify(e); else i = t(e);
                return i
            }
        }
    }),define("base/basePcConfig", ["require", "./pc/brower", "./pc/dom", "./pc/lib", "./pc/event", "./pc/post", "./pc/client", "./pc/json"], function (require) {
        return {
            "package": "pbase",
            resource: {
                browser: require("./pc/brower"),
                dom: require("./pc/dom"),
                lib: require("./pc/lib"),
                events: require("./pc/event"),
                post: require("./pc/post"),
                client: require("./pc/client"),
                JSON: require("./pc/json")
            },
            injection: [{
                id: "pbase.post",
                method: {postAjax: ["pbase.dom", "common.view", "pbase.browser", "common.placeHolder"]}
            }, {
                id: "pbase.dom",
                method: {
                    hide: ["pbase.lib"],
                    show: ["pbase.lib"],
                    g: ["pbase.lib"],
                    attributeName: ["pbase.browser"],
                    createIframe: ["pbase.browser"]
                }
            }, {id: "pbase.events", method: {domOn: ["pbase.dom", "pbase.lib"], domOff: ["pbase.dom"]}}]
        }
    }),define("embed/entry/pc/pcConfig", ["require", "../../data/bullConfig", "im-core/bullConfig", "im-lib/config", "../../log/config", "../../icon/iconPConfig", "../../invite/invitePConfig", "../../message/messagePConfig", "../../embedChat/config", "lib/pcConfig", "../../../common/pcConfig", "../../../base/basePcConfig"], function (require) {
        return {
            "package": "embed",
            importConfig: [require("../../data/bullConfig"), require("im-core/bullConfig"), require("im-lib/config"), require("../../log/config"), require("../../icon/iconPConfig"), require("../../invite/invitePConfig"), require("../../message/messagePConfig"), require("../../embedChat/config"), require("lib/pcConfig"), require("../../../common/pcConfig"), require("../../../base/basePcConfig")]
        }
    }),define("cl", ["require", "./base/pc/brower"], function (require) {
        var exports = {}, e = require("./base/pc/brower");
        return exports.load = function (t, i, n, o) {
            var a = document.createElement("link");
            if (a.setAttribute("rel", "stylesheet"), a.setAttribute("type", "text/css"), a.setAttribute("href", i.toUrl(t)), ("object" == typeof a.onload || "object" == typeof a.onreadystatechange) && !e.isBDBox) {
                var r = !1;
                a.onload = function () {
                    a.onreadystatechange = null, a.onload = null, n(!0), r = !0
                }, a.onreadystatechange = function () {
                    if (/^loaded|complete$/.test(this.readyState))this.onreadystatechange = null, a.onload = null, n(!0), r = !0
                }, setTimeout(function () {
                    if (!r)n(!0)
                }, 3e3)
            } else n(!0);
            var s = document.getElementsByTagName("head")[0] || document.body;
            s.appendChild(a)
        }, exports
    }),define("lib/css", ["cl"], function (e) {
        return e
    }),define("common/css", ["cl"], function (e) {
        return e
    }),define("embed/entry/pc/main", ["require", "bull", "./pcConfig", "cl!../../css/pc/main.css"], function (require) {
        var e = require("bull"), t = require("./pcConfig"), exports = {};
        return exports.init = function () {
            e.init(t), e.get("log.main").init(), e.get("log.main").logStartNb(), require("cl!../../css/pc/main.css");
            var i = e.get("data.config"), n = i.getServer("siteObj").isWebim;
            if (!n) {
                var o = (false || document.getElementById("newBridge")).require;
                o(["embed/webimlight/main"], function () {
                })
            }
            e.get("log.main").logEndNb()
        }, exports
    }),require(["embed/entry/pc/main"], function (e) {
        e.init()
    })
}(this);
