// jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return-h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return-h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return-h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return-h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return-h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return-h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return-h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return-h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return-(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return-0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});;
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing,
    {
        def: 'easeOutQuad',
        easeInQuad: function (x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b
        },
        easeInCubic: function (x, t, b, c, d) {
            return c * (t /= d) * t * t + b
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b
        },
        easeInQuart: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b
        },
        easeInQuint: function (x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
        },
        easeInElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            }
            else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });


/*!
 * VERSION: 1.16.0
 * DATE: 2015-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function (t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var s, r, n, a, o, l = function (t) {
            var e, s = t.split("."), r = i;
            for (e = 0; s.length > e; e++)r[s[e]] = r = r[s[e]] || {};
            return r
        }, h = l("com.greensock"), _ = 1e-10, u = function (t) {
            var e, i = [], s = t.length;
            for (e = 0; e !== s; i.push(t[e++]));
            return i
        }, m = function () {
        }, f = function () {
            var t = Object.prototype.toString, e = t.call([]);
            return function (i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), c = {}, p = function (s, r, n, a) {
            this.sc = c[s] ? c[s].sc : [], c[s] = this, this.gsClass = null, this.func = n;
            var o = [];
            this.check = function (h) {
                for (var _, u, m, f, d = r.length, v = d; --d > -1;)(_ = c[r[d]] || new p(r[d], [])).gsClass ? (o[d] = _.gsClass, v--) : h && _.sc.push(this);
                if (0 === v && n)for (u = ("com.greensock." + s).split("."), m = u.pop(), f = l(u.join("."))[m] = this.gsClass = n.apply(n, o), a && (i[m] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function () {
                    return f
                }) : s === e && "undefined" != typeof module && module.exports && (module.exports = f)), d = 0; this.sc.length > d; d++)this.sc[d].check()
            }, this.check(!0)
        }, d = t._gsDefine = function (t, e, i, s) {
            return new p(t, e, i, s)
        }, v = h._class = function (t, e, i) {
            return e = e || function () {
                }, d(t, [], function () {
                return e
            }, i), e
        };
        d.globals = i;
        var g = [0, 0, 1, 1], T = [], y = v("easing.Ease", function (t, e, i, s) {
            this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? g.concat(e) : g
        }, !0), w = y.map = {}, P = y.register = function (t, e, i, s) {
            for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)for (n = l[_], r = s ? v("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;)o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
        };
        for (n = y.prototype, n._calcEnd = !1, n.getRatio = function (t) {
            if (this._func)return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type, i = this._power, s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
        }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;)n = s[r] + ",Power" + r, P(new y(null, null, 1, r), n, "easeOut", !0), P(new y(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), P(new y(null, null, 3, r), n, "easeInOut");
        w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
        var b = v("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        n = b.prototype, n.addEventListener = function (t, e, i, s, r) {
            r = r || 0;
            var n, l, h = this._listeners[t], _ = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;)n = h[l], n.c === e && n.s === i ? h.splice(l, 1) : 0 === _ && r > n.pr && (_ = l + 1);
            h.splice(_, 0, {c: e, s: i, up: s, pr: r}), this !== a || o || a.wake()
        }, n.removeEventListener = function (t, e) {
            var i, s = this._listeners[t];
            if (s)for (i = s.length; --i > -1;)if (s[i].c === e)return s.splice(i, 1), void 0
        }, n.dispatchEvent = function (t) {
            var e, i, s, r = this._listeners[t];
            if (r)for (e = r.length, i = this._eventTarget; --e > -1;)s = r[e], s && (s.up ? s.c.call(s.s || i, {
                type: t,
                target: i
            }) : s.c.call(s.s || i))
        };
        var k = t.requestAnimationFrame, S = t.cancelAnimationFrame, A = Date.now || function () {
                return (new Date).getTime()
            }, x = A();
        for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !k;)k = t[s[r] + "RequestAnimationFrame"], S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
        v("Ticker", function (t, e) {
            var i, s, r, n, l, h = this, u = A(), f = e !== !1 && k, c = 500, p = 33, d = "tick", v = function (t) {
                var e, a, o = A() - x;
                o > c && (u += o - p), x += o, h.time = (x - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(v)), a && h.dispatchEvent(d)
            };
            b.call(h), h.time = h.frame = 0, h.tick = function () {
                v(!0)
            }, h.lagSmoothing = function (t, e) {
                c = t || 1 / _, p = Math.min(e, c, 0)
            }, h.sleep = function () {
                null != r && (f && S ? S(r) : clearTimeout(r), s = m, r = null, h === a && (o = !1))
            }, h.wake = function () {
                null !== r ? h.sleep() : h.frame > 10 && (x = A() - c + 5), s = 0 === i ? m : f && k ? k : function (t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                }, h === a && (o = !0), v(2)
            }, h.fps = function (t) {
                return arguments.length ? (i = t, n = 1 / (i || 60), l = this.time + n, h.wake(), void 0) : i
            }, h.useRAF = function (t) {
                return arguments.length ? (h.sleep(), f = t, h.fps(i), void 0) : f
            }, h.fps(t), setTimeout(function () {
                f && (!r || 5 > h.frame) && h.useRAF(!1)
            }, 1500)
        }), n = h.Ticker.prototype = new h.events.EventDispatcher, n.constructor = h.Ticker;
        var R = v("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                o || a.wake();
                var i = this.vars.useFrames ? q : B;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        a = R.ticker = new h.Ticker, n = R.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
        var C = function () {
            o && A() - x > 2e3 && a.wake(), setTimeout(C, 2e3)
        };
        C(), n.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, n.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, n.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, n.seek = function (t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, n.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, n.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, n.render = function () {
        }, n.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, n.isActive = function () {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, n._enabled = function (t, e) {
            return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, n._kill = function () {
            return this._enabled(!1, !1)
        }, n.kill = function (t, e) {
            return this._kill(t, e), this
        }, n._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;)e._dirty = !0, e = e.timeline;
            return this
        }, n._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this);
            return i
        }, n.eventCallback = function (t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length)return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, n.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, n.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, n.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, n.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, n.totalTime = function (t, e, i) {
            if (o || a.wake(), !arguments.length)return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration, r = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)for (; r._timeline;)r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), z.length && $())
            }
            return this
        }, n.progress = n.totalProgress = function (t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, n.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, n.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, n.timeScale = function (t) {
            if (!arguments.length)return this._timeScale;
            if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, n.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, n.paused = function (t) {
            if (!arguments.length)return this._paused;
            var e, i, s = this._timeline;
            return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
        };
        var D = v("core.SimpleTimeline", function (t) {
            R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        n = D.prototype = new R, n.constructor = D, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function (t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)for (s = t._startTime; i && i._startTime > s;)i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, n._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, n.render = function (t, e, i) {
            var s, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;)s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
        }, n.rawTime = function () {
            return o || a.wake(), this._totalTime
        };
        var I = v("TweenLite", function (e, i, s) {
            if (R.call(this, i, s), this.render = I.prototype.render, null == e)throw"Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : I.selector(e) || e;
            var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++)n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = K(n, this, !1), 1 === l && this._siblings[r].length > 1 && J(n, this, null, 1, this._siblings[r])) : (n = a[r--] = I.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1); else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
        }, !0), E = function (e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }, O = function (t, e) {
            var i, s = {};
            for (i in t)G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (s[i] = t[i], delete t[i]);
            t.css = s
        };
        n = I.prototype = new R, n.constructor = I, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, I.version = "1.16.0", I.defaultEase = n._ease = new y(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = a, I.autoSleep = 120, I.lagSmoothing = function (t, e) {
            a.lagSmoothing(t, e)
        }, I.selector = t.$ || t.jQuery || function (e) {
                var i = t.$ || t.jQuery;
                return i ? (I.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
        var z = [], L = {}, N = I._internals = {
            isArray: f,
            isSelector: E,
            lazyTweens: z
        }, U = I._plugins = {}, F = N.tweenLookup = {}, j = 0, G = N.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1
        }, Q = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }, q = R._rootFramesTimeline = new D, B = R._rootTimeline = new D, M = 30, $ = N.lazyRender = function () {
            var t, e = z.length;
            for (L = {}; --e > -1;)t = z[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            z.length = 0
        };
        B._startTime = a.time, q._startTime = a.frame, B._active = q._active = !0, setTimeout($, 1), R._updateRoot = I.render = function () {
            var t, e, i;
            if (z.length && $(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), z.length && $(), a.frame >= M) {
                M = a.frame + (parseInt(I.autoSleep, 10) || 120);
                for (i in F) {
                    for (e = F[i].tweens, t = e.length; --t > -1;)e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete F[i]
                }
                if (i = B._first, (!i || i._paused) && I.autoSleep && !q._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;)i = i._next;
                    i || a.sleep()
                }
            }
        }, a.addEventListener("tick", R._updateRoot);
        var K = function (t, e, i) {
            var s, r, n = t._gsTweenID;
            if (F[n || (t._gsTweenID = n = "t" + j++)] || (F[n] = {
                    target: t,
                    tweens: []
                }), e && (s = F[n].tweens, s[r = s.length] = e, i))for (; --r > -1;)s[r] === e && s.splice(r, 1);
            return F[n].tweens
        }, H = function (t, e, i, s) {
            var r, n, a = t.vars.onOverwrite;
            return a && (r = a(t, e, i, s)), a = I.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1
        }, J = function (t, e, i, s, r) {
            var n, a, o, l;
            if (1 === s || s >= 4) {
                for (l = r.length, n = 0; l > n; n++)if ((o = r[n]) !== e)o._gc || H(o, e) && o._enabled(!1, !1) && (a = !0); else if (5 === s)break;
                return a
            }
            var h, u = e._startTime + _, m = [], f = 0, c = 0 === e._duration;
            for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || V(e, 0, c), 0 === V(o, h, c) && (m[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((c || !o._initted) && 2e-10 >= u - o._startTime || (m[f++] = o)));
            for (n = f; --n > -1;)if (o = m[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                if (2 !== s && !H(o, e))continue;
                o._enabled(!1, !1) && (a = !0)
            }
            return a
        }, V = function (t, e, i) {
            for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                if (n += s._startTime, r *= s._timeScale, s._paused)return -100;
                s = s._timeline
            }
            return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
        };
        n._init = function () {
            var t, e, i, s, r, n = this.vars, a = this._overwrittenProps, o = this._duration, l = !!n.immediateRender, h = n.ease;
            if (n.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                for (s in n.startAt)r[s] = n.startAt[s];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = I.to(this.target, 0, r), l)if (this._time > 0)this._startAt = null; else if (0 !== o)return
            } else if (n.runBackwards && 0 !== o)if (this._startAt)this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else {
                0 !== this._time && (l = !1), i = {};
                for (s in n)G[s] && "autoCSS" !== s || (i[s] = n[s]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && n.lazy !== !1, i.immediateRender = l, this._startAt = I.to(this.target, 0, i), l) {
                    if (0 === this._time)return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            }
            if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, n.easeParams) : w[h] || I.defaultEase : I.defaultEase, n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)for (t = this._targets.length; --t > -1;)this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)for (i = this._firstPT; i;)i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = n.onUpdate, this._initted = !0
        }, n._initProps = function (e, i, s, r) {
            var n, a, o, l, h, _;
            if (null == e)return !1;
            L[e._gsTweenID] && $(), this.vars.css || e.style && e !== t && e.nodeType && U.css && this.vars.autoCSS !== !1 && O(this.vars, e);
            for (n in this.vars) {
                if (_ = this.vars[n], G[n])_ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this)); else if (U[n] && (l = new U[n])._onInitTween(e, this.vars[n], this)) {
                    for (this._firstPT = h = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: n,
                        pg: !0,
                        pr: l._priority
                    }, a = l._overwriteProps.length; --a > -1;)i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[n] = h = {
                    _next: this._firstPT,
                    t: e,
                    p: n,
                    f: "function" == typeof e[n],
                    n: n,
                    pg: !1,
                    pr: 0
                }, h.s = h.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && J(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), o)
        }, n.render = function (t, e, i) {
            var s, r, n, a, o = this._time, l = this._duration, h = this._rawPrevTime;
            if (t >= l)this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _ && "isPause" !== this.data) && h !== t && (i = !0, h > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _); else if (1e-7 > t)this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)), this._initted || (i = !0); else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l, m = this._easeType, f = this._easePower;
                (1 === m || 3 === m && u >= .5) && (u = 1 - u), 3 === m && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === m ? 1 - u : 2 === m ? u : .5 > t / l ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc)return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))return this._time = this._totalTime = o, this._rawPrevTime = h, z.push(this), this._lazy = [t, e], void 0;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || T))), n = this._firstPT; n;)n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || T)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || T), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
            }
        }, n._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target))return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
            var s, r, n, a, o, l, h, _, u;
            if ((f(e) || E(e)) && "number" != typeof e[0])for (s = e.length; --s > -1;)this._kill(t, e[s]) && (l = !0); else {
                if (this._targets) {
                    for (s = this._targets.length; --s > -1;)if (e === this._targets[s]) {
                        o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                        break
                    }
                } else {
                    if (e !== this.target)return !1;
                    o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != typeof t || !t._tempKill), i && (I.onOverwrite || this.vars.onOverwrite)) {
                        for (n in h)o[n] && (u || (u = []), u.push(n));
                        if (!H(this, i, e, u))return !1
                    }
                    for (n in h)(a = o[n]) && (a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, n.invalidate = function () {
            return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
        }, n._enabled = function (t, e) {
            if (o || a.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)for (i = s.length; --i > -1;)this._siblings[i] = K(s[i], this, !0); else this._siblings = K(this.target, this, !0)
            }
            return R.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, I.to = function (t, e, i) {
            return new I(t, e, i)
        }, I.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i)
        }, I.fromTo = function (t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new I(t, e, s)
        }, I.delayedCall = function (t, e, i, s, r) {
            return new I(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, I.set = function (t, e) {
            return new I(t, 0, e)
        }, I.getTweensOf = function (t, e) {
            if (null == t)return [];
            t = "string" != typeof t ? t : I.selector(t) || t;
            var i, s, r, n;
            if ((f(t) || E(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;)s = s.concat(I.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;)for (n = s[i], r = i; --r > -1;)n === s[r] && s.splice(i, 1)
            } else for (s = K(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        }, I.killTweensOf = I.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var s = I.getTweensOf(t, e), r = s.length; --r > -1;)s[r]._kill(i, t)
        };
        var W = v("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = W.prototype
        }, !0);
        if (n = W.prototype, W.version = "1.10.1", W.API = 2, n._firstPT = null, n._addTween = function (t, e, i, s, r, n) {
                var a, o;
                return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: a,
                    f: "function" == typeof t[e],
                    n: r || e,
                    r: n
                }, o._next && (o._next._prev = o), o) : void 0
            }, n.setRatio = function (t) {
                for (var e, i = this._firstPT, s = 1e-6; i;)e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, n._kill = function (t) {
                var e, i = this._overwriteProps, s = this._firstPT;
                if (null != t[this._propName])this._overwriteProps = []; else for (e = i.length; --e > -1;)null != t[i[e]] && i.splice(e, 1);
                for (; s;)null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                return !1
            }, n._roundProps = function (t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, I._onPluginEvent = function (t, e) {
                var i, s, r, n, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, s = r; s && s.pr > o.pr;)s = s._next;
                        (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o, (o._next = s) ? s._prev = o : n = o, o = a
                    }
                    o = e._firstPT = r
                }
                for (; o;)o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, W.activate = function (t) {
                for (var e = t.length; --e > -1;)t[e].API === W.API && (U[(new t[e])._propName] = t[e]);
                return !0
            }, d.plugin = function (t) {
                if (!(t && t.propName && t.init && t.API))throw"illegal plugin definition.";
                var e, i = t.propName, s = t.priority || 0, r = t.overwriteProps, n = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                }, a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                    W.call(this, i, s), this._overwriteProps = r || []
                }, t.global === !0), o = a.prototype = new W(i);
                o.constructor = a, a.API = t.API;
                for (e in n)"function" == typeof t[e] && (o[n[e]] = t[e]);
                return a.version = t.version, W.activate([a]), a
            }, s = t._gsQueue) {
            for (r = 0; s.length > r; r++)s[r]();
            for (n in c)c[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
        }
        o = !1
    }
})("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
;
/*! ScrollMagic v2.0.0 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://janpaepke.github.io/ScrollMagic */
!function (e, t) {
    "function" == typeof define && define.amd ? define(t) : e.ScrollMagic = t()
}(this, function () {
    "use strict";
    var e = function () {
    };
    e.version = "2.0.0", e.Controller = function (n) {
        var i, o, s = "ScrollMagic.Controller", a = {
            f: "FORWARD",
            r: "REVERSE",
            p: "PAUSED"
        }, l = t.defaults, c = this, u = r.extend({}, l, n), f = [], h = !1, d = 0, g = a.p, p = !0, v = 0, m = !0, w = function () {
            for (var e in u)l.hasOwnProperty(e) || delete u[e];
            if (u.container = r.get.elements(u.container)[0], !u.container)throw s + " init failed.";
            p = u.container === window || u.container === document.body || !document.body.contains(u.container), p && (u.container = window), v = u.vertical ? r.get.height(u.container) : r.get.width(u.container), u.container.addEventListener("resize", T), u.container.addEventListener("scroll", T), u.refreshInterval = parseInt(u.refreshInterval) || l.refreshInterval, y()
        }, y = function () {
            u.refreshInterval > 0 && (o = window.setTimeout(x, u.refreshInterval))
        }, E = function () {
            return u.vertical ? r.get.scrollTop(u.container) : r.get.scrollLeft(u.container)
        }, S = function (e) {
            u.vertical ? p ? window.scrollTo(r.get.scrollLeft(), e) : u.container.scrollTop = e : p ? window.scrollTo(e, r.get.scrollTop()) : u.container.scrollLeft = e
        }, b = function () {
            var e = d;
            d = c.scrollPos();
            var t = d - e;
            g = 0 === t ? a.p : t > 0 ? a.f : a.r
        }, F = function () {
            if (m && h) {
                var e = r.type.Array(h) ? h : f.slice(0);
                g === a.r && e.reverse(), e.forEach(function (e) {
                    e.update(!0)
                }), 0 === e.length && u.loglevel >= 3, h = !1
            }
        }, z = function () {
            i = r.rAF(F)
        }, T = function (e) {
            "resize" == e.type && (v = u.vertical ? r.get.height(u.container) : r.get.width(u.container)), b(), h || (h = !0, z())
        }, x = function () {
            if (!p && v != (u.vertical ? r.get.height(u.container) : r.get.width(u.container))) {
                var e;
                try {
                    e = new Event("resize", {bubbles: !1, cancelable: !1})
                } catch (t) {
                    e = document.createEvent("Event"), e.initEvent("resize", !1, !1)
                }
                u.container.dispatchEvent(e)
            }
            f.forEach(function (e) {
                e.refresh()
            }), y()
        };
        this._options = u;
        var R = function (e) {
            if (e.length <= 1)return e;
            var t = e.slice(0);
            return t.sort(function (e, t) {
                return e.scrollOffset() > t.scrollOffset() ? 1 : -1
            }), t
        };
        return this.addScene = function (t) {
            if (r.type.Array(t))t.forEach(function (e) {
                c.addScene(e)
            }); else if (t instanceof e.Scene)if (t.controller() !== c)t.addTo(c); else if (f.indexOf(t) < 0) {
                f.push(t), f = R(f), t.on("shift.controller_sort", function () {
                    f = R(f)
                });
                for (var n in u.globalSceneOptions)t[n] && t[n].call(t, u.globalSceneOptions[n])
            }
            return c
        }, this.removeScene = function (e) {
            if (r.type.Array(e))e.forEach(function (e) {
                c.removeScene(e)
            }); else {
                var t = f.indexOf(e);
                t > -1 && (e.off("shift.controller_sort"), f.splice(t, 1), e.remove())
            }
            return c
        }, this.updateScene = function (t, n) {
            return r.type.Array(t) ? t.forEach(function (e) {
                c.updateScene(e, n)
            }) : n ? t.update(!0) : h !== !0 && t instanceof e.Scene && (h = h || [], -1 == h.indexOf(t) && h.push(t), h = R(h), z()), c
        }, this.update = function (e) {
            return T({type: "resize"}), e && F(), c
        }, this.scrollTo = function (t) {
            if (r.type.Number(t))S.call(u.container, t); else if (t instanceof e.Scene)t.controller() === c ? c.scrollTo(t.scrollOffset()) : log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", t); else if (r.type.Function(t))S = t; else {
                var n = r.get.elements(t)[0];
                if (n) {
                    var i = u.vertical ? "top" : "left", o = r.get.offset(u.container), s = r.get.offset(n);
                    p || (o[i] -= c.scrollPos()), c.scrollTo(s[i] - o[i])
                } else log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", t)
            }
            return c
        }, this.scrollPos = function (e) {
            return arguments.length ? (r.type.Function(e) && (E = e), c) : E.call(c)
        }, this.info = function (e) {
            var t = {
                size: v,
                vertical: u.vertical,
                scrollPos: d,
                scrollDirection: g,
                container: u.container,
                isDocument: p
            };
            return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
        }, this.loglevel = function (e) {
            return arguments.length ? (u.loglevel != e && (u.loglevel = e), c) : u.loglevel
        }, this.enabled = function (e) {
            return arguments.length ? (m != e && (m = !!e, c.updateScene(f, !0)), c) : m
        }, this.destroy = function (e) {
            window.clearTimeout(o);
            for (var t = f.length; t--;)f[t].destroy(e);
            return u.container.removeEventListener("resize", T), u.container.removeEventListener("scroll", T), r.cAF(i), null
        }, w(), c
    };
    var t = {defaults: {container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100}};
    e.Controller.addOption = function (e, n) {
        t.defaults[e] = n
    }, e.Controller.extend = function (t) {
        var n = this;
        e.Controller = function () {
            return n.apply(this, arguments), this.$super = r.extend({}, this), t.apply(this, arguments) || this
        }, r.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller
    }, e.Scene = function (t) {
        var i, o, s = "data-scrollmagic-pin-spacer", a = n.defaults, l = this, c = r.extend({}, a, t), u = "BEFORE", f = 0, h = {
            start: 0,
            end: 0
        }, d = 0, g = !0, p = function () {
            for (var e in c)a.hasOwnProperty(e) || delete c[e];
            for (var t in a)F(t);
            S(), l.on("change.internal", function (e) {
                "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? w() : "reverse" === e.what && l.update())
            }).on("shift.internal", function () {
                v(), l.update()
            })
        };
        this.addTo = function (t) {
            return t instanceof e.Controller && o != t && (o && o.removeScene(l), o = t, S(), m(!0), w(!0), v(), o.info("container").addEventListener("resize", y), t.addScene(l), l.trigger("add", {controller: o}), l.update()), l
        }, this.enabled = function (e) {
            return arguments.length ? (g != e && (g = !!e, l.update(!0)), l) : g
        }, this.remove = function () {
            if (o) {
                o.info("container").removeEventListener("resize", y);
                var e = o;
                o = void 0, e.removeScene(l), l.trigger("remove")
            }
            return l
        }, this.destroy = function (e) {
            return l.trigger("destroy", {reset: e}), l.remove(), l.off("*.*"), null
        }, this.update = function (e) {
            if (o)if (e)if (o.enabled() && g) {
                var t, n = o.info("scrollPos");
                t = c.duration > 0 ? (n - h.start) / (h.end - h.start) : n >= h.start ? 1 : 0, l.trigger("update", {
                    startPos: h.start,
                    endPos: h.end,
                    scrollPos: n
                }), l.progress(t)
            } else T && "DURING" === u && R(!0); else o.updateScene(l, !1);
            return l
        }, this.refresh = function () {
            return m(), w(), l
        }, this.progress = function (e) {
            if (arguments.length) {
                var t = !1, n = u, r = o ? o.info("scrollDirection") : "PAUSED", i = c.reverse || e >= f;
                if (0 === c.duration ? (t = f != e, f = 1 > e && i ? 0 : 1, u = 0 === f ? "BEFORE" : "DURING") : 0 >= e && "BEFORE" !== u && i ? (f = 0, u = "BEFORE", t = !0) : e > 0 && 1 > e && i ? (f = e, u = "DURING", t = !0) : e >= 1 && "AFTER" !== u ? (f = 1, u = "AFTER", t = !0) : "DURING" !== u || i || R(), t) {
                    var s = {progress: f, state: u, scrollDirection: r}, a = u != n, h = function (e) {
                        l.trigger(e, s)
                    };
                    a && "DURING" !== n && (h("enter"), h("BEFORE" === n ? "start" : "end")), h("progress"), a && "DURING" !== u && (h("BEFORE" === u ? "start" : "end"), h("leave"))
                }
                return l
            }
            return f
        };
        var v = function () {
            h = {start: d + c.offset}, o && c.triggerElement && (h.start -= o.info("size") * c.triggerHook), h.end = h.start + c.duration
        }, m = function (e) {
            if (i) {
                var t = "duration";
                b(t, i.call(l)) && !e && (l.trigger("change", {what: t, newval: c[t]}), l.trigger("shift", {reason: t}))
            }
        }, w = function (e) {
            var t = 0, n = c.triggerElement;
            if (o && n) {
                for (var i = o.info(), a = r.get.offset(i.container), u = i.vertical ? "top" : "left"; n.parentNode.hasAttribute(s);)n = n.parentNode;
                var f = r.get.offset(n);
                i.isDocument || (a[u] -= o.scrollPos()), t = f[u] - a[u]
            }
            var h = t != d;
            d = t, h && !e && l.trigger("shift", {reason: "triggerElementPosition"})
        }, y = function () {
            c.triggerHook > 0 && l.trigger("shift", {reason: "containerResize"})
        }, E = r.extend(n.validate, {
            duration: function (e) {
                if (r.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                    var t = parseFloat(e) / 100;
                    e = function () {
                        return o ? o.info("size") * t : 0
                    }
                }
                if (r.type.Function(e)) {
                    i = e;
                    try {
                        e = parseFloat(i())
                    } catch (n) {
                        e = -1
                    }
                }
                if (e = parseFloat(e), !r.type.Number(e) || 0 > e)throw i ? (i = void 0, 0) : 0;
                return e
            }
        }), S = function (e) {
            e = arguments.length ? [e] : Object.keys(E), e.forEach(function (e) {
                var t;
                if (E[e])try {
                    t = E[e](c[e])
                } catch (n) {
                    t = a[e]
                } finally {
                    c[e] = t
                }
            })
        }, b = function (e, t) {
            var n = !1, r = c[e];
            return c[e] != t && (c[e] = t, S(e), n = r != c[e]), n
        }, F = function (e) {
            l[e] || (l[e] = function (t) {
                return arguments.length ? ("duration" === e && (i = void 0), b(e, t) && (l.trigger("change", {
                    what: e,
                    newval: c[e]
                }), n.shifts.indexOf(e) > -1 && l.trigger("shift", {reason: e})), l) : c[e]
            })
        };
        this.controller = function () {
            return o
        }, this.state = function () {
            return u
        }, this.scrollOffset = function () {
            return h.start
        }, this.triggerPosition = function () {
            var e = c.offset;
            return o && (e += c.triggerElement ? d : o.info("size") * l.triggerHook()), e
        };
        var z = {};
        this.on = function (e, t) {
            return r.type.Function(t) && (e = e.trim().split(" "), e.forEach(function (e) {
                var n = e.split("."), r = n[0], i = n[1];
                "*" != r && (z[r] || (z[r] = []), z[r].push({namespace: i || "", callback: t}))
            })), l
        }, this.off = function (e, t) {
            return e ? (e = e.trim().split(" "), e.forEach(function (e) {
                var n = e.split("."), r = n[0], i = n[1] || "", o = "*" === r ? Object.keys(z) : [r];
                o.forEach(function (e) {
                    for (var n = z[e] || [], r = n.length; r--;) {
                        var o = n[r];
                        !o || i !== o.namespace && "*" !== i || t && t != o.callback || n.splice(r, 1)
                    }
                    n.length || delete z[e]
                })
            }), l) : l
        }, this.trigger = function (t, n) {
            if (t) {
                var r = t.trim().split("."), i = r[0], o = r[1], s = z[i];
                s && s.forEach(function (t) {
                    o && o !== t.namespace || t.callback.call(l, new e.Event(i, t.namespace, l, n))
                })
            }
            return l
        };
        var T, x;
        l.on("shift.internal", function (e) {
            var t = "duration" === e.reason;
            ("AFTER" === u && t || "DURING" === u && 0 === c.duration) && R(), t && C()
        }).on("progress.internal", function () {
            R()
        }).on("add.internal", function () {
            C()
        }).on("destroy.internal", function (e) {
            l.removePin(e.reset)
        });
        var R = function (e) {
            if (T && o) {
                var t = o.info();
                if (e || "DURING" !== u) {
                    var n = {
                        position: x.inFlow ? "relative" : "absolute",
                        top: 0,
                        left: 0
                    }, i = r.css(T, "position") != n.position;
                    x.pushFollowers ? c.duration > 0 && ("AFTER" === u && 0 === parseFloat(r.css(x.spacer, "padding-top")) ? i = !0 : "BEFORE" === u && 0 === parseFloat(r.css(x.spacer, "padding-bottom")) && (i = !0)) : n[t.vertical ? "top" : "left"] = c.duration * f, r.css(T, n), i && C()
                } else {
                    "fixed" != r.css(T, "position") && (r.css(T, {position: "fixed"}), C());
                    var s = r.get.offset(x.spacer, !0), a = c.reverse || 0 === c.duration ? t.scrollPos - h.start : Math.round(f * c.duration * 10) / 10;
                    s[t.vertical ? "top" : "left"] += a, r.css(T, {top: s.top, left: s.left})
                }
            }
        }, C = function () {
            if (T && o && x.inFlow) {
                var e = "DURING" === u, t = o.info("vertical"), n = x.spacer.children[0], i = r.isMarginCollapseType(r.css(x.spacer, "display")), s = {};
                x.relSize.width || x.relSize.autoFullWidth ? e ? r.get.width(window) == r.get.width(x.spacer.parentNode) ? r.css(T, {width: x.relSize.autoFullWidth ? "100%" : "inherit"}) : r.css(T, {width: r.get.width(x.spacer)}) : r.css(T, {width: "100%"}) : (s["min-width"] = r.get.width(t ? T : n, !0, !0), s.width = e ? s["min-width"] : "auto"), x.relSize.height ? e ? r.get.height(window) == r.get.height(x.spacer.parentNode) ? r.css(T, {height: "inherit"}) : r.css(T, {height: r.get.height(x.spacer)}) : r.css(T, {height: "100%"}) : (s["min-height"] = r.get.height(t ? n : T, !0, !i), s.height = e ? s["min-height"] : "auto"), x.pushFollowers && (s["padding" + (t ? "Top" : "Left")] = c.duration * f, s["padding" + (t ? "Bottom" : "Right")] = c.duration * (1 - f)), r.css(x.spacer, s)
            }
        }, L = function () {
            o && T && "DURING" === u && !o.info("isDocument") && R()
        }, N = function () {
            o && T && "DURING" === u && ((x.relSize.width || x.relSize.autoFullWidth) && r.get.width(window) != r.get.width(x.spacer.parentNode) || x.relSize.height && r.get.height(window) != r.get.height(x.spacer.parentNode)) && C()
        }, D = function (e) {
            o && T && "DURING" === u && !o.info("isDocument") && (e.preventDefault(), o.scrollTo(o.info("scrollPos") - (e[o.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"] / 3 || 30 * -e.detail)))
        };
        this.setPin = function (e, t) {
            var n = {pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer"};
            if (t = r.extend({}, n, t), e = r.get.elements(e)[0], !e)return l;
            if ("fixed" === r.css(e, "position"))return l;
            if (T) {
                if (T === e)return l;
                l.removePin()
            }
            T = e;
            var i = T.parentNode.style.display, o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
            T.parentNode.style.display = "none";
            var a = "absolute" != r.css(T, "position"), c = r.css(T, o.concat(["display"])), u = r.css(T, ["width", "height"]);
            T.parentNode.style.display = i, !a && t.pushFollowers && (t.pushFollowers = !1);
            var f = T.parentNode.insertBefore(document.createElement("div"), T), h = r.extend(c, {
                position: a ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            });
            if (a || r.extend(h, r.css(T, ["width", "height"])), r.css(f, h), f.setAttribute(s, ""), r.addClass(f, t.spacerClass), x = {
                    spacer: f,
                    relSize: {
                        width: "%" === u.width.slice(-1),
                        height: "%" === u.height.slice(-1),
                        autoFullWidth: "auto" === u.width && a && r.isMarginCollapseType(c.display)
                    },
                    pushFollowers: t.pushFollowers,
                    inFlow: a
                }, !T.___origStyle) {
                T.___origStyle = {};
                var d = T.style, g = o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                g.forEach(function (e) {
                    T.___origStyle[e] = d[e] || ""
                })
            }
            return x.relSize.width && r.css(f, {width: u.width}), x.relSize.height && r.css(f, {height: u.height}), f.appendChild(T), r.css(T, {
                position: a ? "relative" : "absolute",
                margin: "auto",
                top: "auto",
                left: "auto",
                bottom: "auto",
                right: "auto"
            }), (x.relSize.width || x.relSize.autoFullWidth) && r.css(T, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            }), window.addEventListener("scroll", L), window.addEventListener("resize", L), window.addEventListener("resize", N), T.addEventListener("mousewheel", D), T.addEventListener("DOMMouseScroll", D), R(), l
        }, this.removePin = function (e) {
            if (T) {
                if ("DURING" === u && R(!0), e || !o) {
                    var t = x.spacer.children[0];
                    if (t.hasAttribute(s)) {
                        var n = x.spacer.style, i = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                        margins = {}, i.forEach(function (e) {
                            margins[e] = n[e] || ""
                        }), r.css(t, margins)
                    }
                    x.spacer.parentNode.insertBefore(t, x.spacer), x.spacer.parentNode.removeChild(x.spacer), T.parentNode.hasAttribute(s) || (r.css(T, T.___origStyle), delete T.___origStyle)
                }
                window.removeEventListener("scroll", L), window.removeEventListener("resize", L), window.removeEventListener("resize", N), T.removeEventListener("mousewheel", D), T.removeEventListener("DOMMouseScroll", D), T = void 0
            }
            return l
        };
        var O, A = [];
        return l.on("destroy.internal", function (e) {
            l.removeClassToggle(e.reset)
        }), this.setClassToggle = function (e, t) {
            var n = r.get.elements(e);
            return 0 !== n.length && r.type.String(t) ? (A.length > 0 && l.removeClassToggle(), O = t, A = n, l.on("enter.internal_class leave.internal_class", function (e) {
                var t = "enter" === e.type ? r.addClass : r.removeClass;
                A.forEach(function (e) {
                    t(e, O)
                })
            }), l) : l
        }, this.removeClassToggle = function (e) {
            return e && A.forEach(function (e) {
                r.removeClass(e, O)
            }), l.off("start.internal_class end.internal_class"), O = void 0, A = [], l
        }, p(), l
    };
    var n = {
        defaults: {duration: 0, offset: 0, triggerElement: void 0, triggerHook: .5, reverse: !0, loglevel: 2},
        validate: {
            offset: function (e) {
                if (e = parseFloat(e), !r.type.Number(e))throw 0;
                return e
            }, triggerElement: function (e) {
                if (e = e || void 0) {
                    var t = r.get.elements(e)[0];
                    if (!t)throw 0;
                    e = t
                }
                return e
            }, triggerHook: function (e) {
                var t = {onCenter: .5, onEnter: 1, onLeave: 0};
                if (r.type.Number(e))e = Math.max(0, Math.min(parseFloat(e), 1)); else {
                    if (!(e in t))throw 0;
                    e = t[e]
                }
                return e
            }, reverse: function (e) {
                return !!e
            }
        },
        shifts: ["duration", "offset", "triggerHook"]
    };
    e.Scene.addOption = function (e, t, r, i) {
        e in n.defaults || (n.defaults[e] = t, n.validate[e] = r, i && n.shifts.push(e))
    }, e.Scene.extend = function (t) {
        var n = this;
        e.Scene = function () {
            return n.apply(this, arguments), this.$super = r.extend({}, this), t.apply(this, arguments) || this
        }, r.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene
    }, e.Event = function (e, t, n, r) {
        r = r || {};
        for (var i in r)this[i] = r[i];
        return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
    };
    var r = e._util = function (e) {
        var t, n = {}, r = function (e) {
            return parseFloat(e) || 0
        }, i = function (t) {
            return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
        }, o = function (t, n, o, s) {
            if (n = n === document ? e : n, n === e)s = !1; else if (!f.DomElement(n))return 0;
            t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
            var a = (o ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
            if (o && s) {
                var l = i(n);
                a += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight)
            }
            return a
        }, s = function (e) {
            return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (e) {
                return e[1].toUpperCase()
            })
        };
        n.extend = function (e) {
            for (e = e || {}, t = 1; t < arguments.length; t++)if (arguments[t])for (var n in arguments[t])arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
            return e
        }, n.isMarginCollapseType = function (e) {
            return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
        };
        var a = 0, l = ["ms", "moz", "webkit", "o"], c = e.requestAnimationFrame, u = e.cancelAnimationFrame;
        for (t = 0; !c && t < l.length; ++t)c = e[l[t] + "RequestAnimationFrame"], u = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
        c || (c = function (t) {
            var n = (new Date).getTime(), r = Math.max(0, 16 - (n - a)), i = e.setTimeout(function () {
                t(n + r)
            }, r);
            return a = n + r, i
        }), u || (u = function (t) {
            e.clearTimeout(t)
        }), n.rAF = c.bind(e), n.cAF = u.bind(e);
        var f = n.type = function (e) {
            return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
        };
        f.String = function (e) {
            return "string" === f(e)
        }, f.Function = function (e) {
            return "function" === f(e)
        }, f.Array = function (e) {
            return Array.isArray(e)
        }, f.Number = function (e) {
            return !f.Array(e) && e - parseFloat(e) + 1 >= 0
        }, f.DomElement = function (e) {
            return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
        };
        var h = n.get = {};
        return h.elements = function (t) {
            var n = [];
            if (f.String(t))try {
                t = document.querySelectorAll(t)
            } catch (r) {
                return n
            }
            if ("nodelist" === f(t) || f.Array(t))for (var i = 0, o = n.length = t.length; o > i; i++) {
                var s = t[i];
                n[i] = f.DomElement(s) ? s : h.elements(s)
            } else(f.DomElement(t) || t === document || t === e) && (n = [t]);
            return n
        }, h.scrollTop = function (t) {
            return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
        }, h.scrollLeft = function (t) {
            return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
        }, h.width = function (e, t, n) {
            return o("width", e, t, n)
        }, h.height = function (e, t, n) {
            return o("height", e, t, n)
        }, h.offset = function (e, t) {
            var n = {top: 0, left: 0};
            if (e && e.getBoundingClientRect) {
                var r = e.getBoundingClientRect();
                n.top = r.top, n.left = r.left, t || (n.top += h.scrollTop(), n.left += h.scrollLeft())
            }
            return n
        }, n.addClass = function (e, t) {
            t && (e.classList ? e.classList.add(t) : e.className += " " + t)
        }, n.removeClass = function (e, t) {
            t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }, n.css = function (e, t) {
            if (f.String(t))return i(e)[s(t)];
            if (f.Array(t)) {
                var n = {}, r = i(e);
                return t.forEach(function (e) {
                    n[e] = r[s(e)]
                }), n
            }
            for (var o in t) {
                var a = t[o];
                a == parseFloat(a) && (a += "px"), e.style[s(o)] = a
            }
        }, n
    }(window || {});
    return e
});