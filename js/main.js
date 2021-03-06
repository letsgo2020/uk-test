!function (t) {
    "use strict";

    function e(t) {
        if (!w(t)) return $r;
        y(t.objectMaxDepth) && ($r.objectMaxDepth = n(t.objectMaxDepth) ? t.objectMaxDepth : NaN), y(t.urlErrorParamsEnabled) && T(t.urlErrorParamsEnabled) && ($r.urlErrorParamsEnabled = t.urlErrorParamsEnabled)
    }

    function n(t) {
        return x(t) && 0 < t
    }

    function r(t, e) {
        return e = e || Error, function () {
            var n, r = arguments[0];
            for (n = "[" + (t ? t + ":" : "") + r + "] http://errors.angularjs.org/1.7.8/" + (t ? t + "/" : "") + r, r = 1; r < arguments.length; r++) {
                n = n + (1 == r ? "?" : "&") + "p" + (r - 1) + "=";
                var i, o = encodeURIComponent;
                i = arguments[r], i = "function" == typeof i ? i.toString().replace(/ \{[\s\S]*$/, "") : void 0 === i ? "undefined" : "string" != typeof i ? JSON.stringify(i) : i, n += o(i)
            }
            return new e(n)
        }
    }

    function i(t) {
        if (null == t || E(t)) return !1;
        if (S(t) || _(t) || dr && t instanceof dr) return !0;
        var e = "length" in Object(t) && t.length;
        return x(e) && (0 <= e && e - 1 in t || "function" == typeof t.item)
    }

    function o(t, e, n) {
        var r, a;
        if (t) if (C(t)) for (r in t) "prototype" !== r && "length" !== r && "name" !== r && t.hasOwnProperty(r) && e.call(n, t[r], r, t); else if (S(t) || i(t)) {
            var s = "object" != typeof t;
            for (r = 0, a = t.length; r < a; r++) (s || r in t) && e.call(n, t[r], r, t)
        } else if (t.forEach && t.forEach !== o) t.forEach(e, n, t); else if (b(t)) for (r in t) e.call(n, t[r], r, t); else if ("function" == typeof t.hasOwnProperty) for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t); else for (r in t) vr.call(t, r) && e.call(n, t[r], r, t);
        return t
    }

    function a(t, e, n) {
        for (var r = Object.keys(t).sort(), i = 0; i < r.length; i++) e.call(n, t[r[i]], r[i]);
        return r
    }

    function s(t) {
        return function (e, n) {
            t(n, e)
        }
    }

    function u() {
        return ++Or
    }

    function c(t, e, n) {
        for (var r = t.$$hashKey, i = 0, o = e.length; i < o; ++i) {
            var a = e[i];
            if (w(a) || C(a)) for (var s = Object.keys(a), u = 0, l = s.length; u < l; u++) {
                var f = s[u], h = a[f];
                n && w(h) ? k(h) ? t[f] = new Date(h.valueOf()) : O(h) ? t[f] = new RegExp(h) : h.nodeName ? t[f] = h.cloneNode(!0) : V(h) ? t[f] = h.clone() : (w(t[f]) || (t[f] = S(h) ? [] : {}), c(t[f], [h], !0)) : t[f] = h
            }
        }
        return r ? t.$$hashKey = r : delete t.$$hashKey, t
    }

    function l(t) {
        return c(t, br.call(arguments, 1), !1)
    }

    function f(t) {
        return c(t, br.call(arguments, 1), !0)
    }

    function h(t) {
        return parseInt(t, 10)
    }

    function d(t, e) {
        return l(Object.create(t), e)
    }

    function p() {
    }

    function m(t) {
        return t
    }

    function $(t) {
        return function () {
            return t
        }
    }

    function g(t) {
        return C(t.toString) && t.toString !== kr
    }

    function v(t) {
        return void 0 === t
    }

    function y(t) {
        return void 0 !== t
    }

    function w(t) {
        return null !== t && "object" == typeof t
    }

    function b(t) {
        return null !== t && "object" == typeof t && !Sr(t)
    }

    function _(t) {
        return "string" == typeof t
    }

    function x(t) {
        return "number" == typeof t
    }

    function k(t) {
        return "[object Date]" === kr.call(t)
    }

    function S(t) {
        return Array.isArray(t) || t instanceof Array
    }

    function M(t) {
        switch (kr.call(t)) {
            case"[object Error]":
            case"[object Exception]":
            case"[object DOMException]":
                return !0;
            default:
                return t instanceof Error
        }
    }

    function C(t) {
        return "function" == typeof t
    }

    function O(t) {
        return "[object RegExp]" === kr.call(t)
    }

    function E(t) {
        return t && t.window === t
    }

    function D(t) {
        return t && t.$evalAsync && t.$watch
    }

    function T(t) {
        return "boolean" == typeof t
    }

    function A(t) {
        return t && x(t.length) && Dr.test(kr.call(t))
    }

    function V(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
    }

    function P(t) {
        var e = {};
        t = t.split(",");
        var n;
        for (n = 0; n < t.length; n++) e[t[n]] = !0;
        return e
    }

    function N(t) {
        return yr(t.nodeName || t[0] && t[0].nodeName)
    }

    function I(t, e) {
        var n = t.indexOf(e);
        return 0 <= n && t.splice(n, 1), n
    }

    function R(t, e, r) {
        function i(t, e, n) {
            if (0 > --n) return "...";
            var r, i = e.$$hashKey;
            if (S(t)) {
                r = 0;
                for (var o = t.length; r < o; r++) e.push(a(t[r], n))
            } else if (b(t)) for (r in t) e[r] = a(t[r], n); else if (t && "function" == typeof t.hasOwnProperty) for (r in t) t.hasOwnProperty(r) && (e[r] = a(t[r], n)); else for (r in t) vr.call(t, r) && (e[r] = a(t[r], n));
            return i ? e.$$hashKey = i : delete e.$$hashKey, e
        }

        function a(t, e) {
            if (!w(t)) return t;
            var n = u.indexOf(t);
            if (-1 !== n) return c[n];
            if (E(t) || D(t)) throw Mr("cpws");
            var n = !1, r = s(t);
            return void 0 === r && (r = S(t) ? [] : Object.create(Sr(t)), n = !0), u.push(t), c.push(r), n ? i(t, r, e) : r
        }

        function s(t) {
            switch (kr.call(t)) {
                case"[object Int8Array]":
                case"[object Int16Array]":
                case"[object Int32Array]":
                case"[object Float32Array]":
                case"[object Float64Array]":
                case"[object Uint8Array]":
                case"[object Uint8ClampedArray]":
                case"[object Uint16Array]":
                case"[object Uint32Array]":
                    return new t.constructor(a(t.buffer), t.byteOffset, t.length);
                case"[object ArrayBuffer]":
                    if (!t.slice) {
                        var e = new ArrayBuffer(t.byteLength);
                        return new Uint8Array(e).set(new Uint8Array(t)), e
                    }
                    return t.slice(0);
                case"[object Boolean]":
                case"[object Number]":
                case"[object String]":
                case"[object Date]":
                    return new t.constructor(t.valueOf());
                case"[object RegExp]":
                    return e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex, e;
                case"[object Blob]":
                    return new t.constructor([t], {type: t.type})
            }
            if (C(t.cloneNode)) return t.cloneNode(!0)
        }

        var u = [], c = [];
        if (r = n(r) ? r : NaN, e) {
            if (A(e) || "[object ArrayBuffer]" === kr.call(e)) throw Mr("cpta");
            if (t === e) throw Mr("cpi");
            return S(e) ? e.length = 0 : o(e, function (t, n) {
                "$$hashKey" !== n && delete e[n]
            }), u.push(t), c.push(e), i(t, e, r)
        }
        return a(t, r)
    }

    function U(t, e) {
        return t === e || t !== t && e !== e
    }

    function Y(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t !== t && e !== e) return !0;
        var n, r = typeof t;
        if (r === typeof e && "object" === r) {
            if (!S(t)) {
                if (k(t)) return !!k(e) && U(t.getTime(), e.getTime());
                if (O(t)) return !!O(e) && t.toString() === e.toString();
                if (D(t) || D(e) || E(t) || E(e) || S(e) || k(e) || O(e)) return !1;
                r = ft();
                for (n in t) if ("$" !== n.charAt(0) && !C(t[n])) {
                    if (!Y(t[n], e[n])) return !1;
                    r[n] = !0
                }
                for (n in e) if (!(n in r) && "$" !== n.charAt(0) && y(e[n]) && !C(e[n])) return !1;
                return !0
            }
            if (!S(e)) return !1;
            if ((r = t.length) === e.length) {
                for (n = 0; n < r; n++) if (!Y(t[n], e[n])) return !1;
                return !0
            }
        }
        return !1
    }

    function L(t, e, n) {
        return t.concat(br.call(e, n))
    }

    function j(t, e) {
        var n = 2 < arguments.length ? br.call(arguments, 2) : [];
        return !C(e) || e instanceof RegExp ? e : n.length ? function () {
            return arguments.length ? e.apply(t, L(n, arguments, 0)) : e.apply(t, n)
        } : function () {
            return arguments.length ? e.apply(t, arguments) : e.call(t)
        }
    }

    function F(e, n) {
        var r = n;
        return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? r = void 0 : E(n) ? r = "$WINDOW" : n && t.document === n ? r = "$DOCUMENT" : D(n) && (r = "$SCOPE"), r
    }

    function H(t, e) {
        if (!v(t)) return x(e) || (e = e ? 2 : null), JSON.stringify(t, F, e)
    }

    function W(t) {
        return _(t) ? JSON.parse(t) : t
    }

    function z(t, e) {
        t = t.replace(Nr, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
        return Er(n) ? e : n
    }

    function q(t, e) {
        return t = new Date(t.getTime()), t.setMinutes(t.getMinutes() + e), t
    }

    function B(t, e, n) {
        n = n ? -1 : 1;
        var r = t.getTimezoneOffset();
        return e = z(e, r), q(t, n * (e - r))
    }

    function G(t) {
        t = dr(t).clone().empty();
        var e = dr("<div></div>").append(t).html();
        try {
            return t[0].nodeType === Lr ? yr(e) : e.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (t, e) {
                return "<" + yr(e)
            })
        } catch (t) {
            return yr(e)
        }
    }

    function Z(t) {
        try {
            return decodeURIComponent(t)
        } catch (t) {
        }
    }

    function J(t) {
        var e = {};
        return o((t || "").split("&"), function (t) {
            var n, r, i;
            t && (r = t = t.replace(/\+/g, "%20"), n = t.indexOf("="), -1 !== n && (r = t.substring(0, n), i = t.substring(n + 1)), r = Z(r), y(r) && (i = !y(i) || Z(i), vr.call(e, r) ? S(e[r]) ? e[r].push(i) : e[r] = [e[r], i] : e[r] = i))
        }), e
    }

    function K(t) {
        var e = [];
        return o(t, function (t, n) {
            S(t) ? o(t, function (t) {
                e.push(X(n, !0) + (!0 === t ? "" : "=" + X(t, !0)))
            }) : e.push(X(n, !0) + (!0 === t ? "" : "=" + X(t, !0)))
        }), e.length ? e.join("&") : ""
    }

    function Q(t) {
        return X(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function X(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
    }

    function tt(t, e) {
        var n, r, i = Ir.length;
        for (r = 0; r < i; ++r) if (n = Ir[r] + e, _(n = t.getAttribute(n))) return n;
        return null
    }

    function et(e, n) {
        var r, i, a = {};
        o(Ir, function (t) {
            t += "app", !r && e.hasAttribute && e.hasAttribute(t) && (r = e, i = e.getAttribute(t))
        }), o(Ir, function (t) {
            t += "app";
            var n;
            !r && (n = e.querySelector("[" + t.replace(":", "\\:") + "]")) && (r = n, i = n.getAttribute(t))
        }), r && (Rr ? (a.strictDi = null !== tt(r, "strict-di"), n(r, i ? [i] : [], a)) : t.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))
    }

    function nt(e, n, r) {
        w(r) || (r = {}), r = l({strictDi: !1}, r);
        var i = function () {
            if (e = dr(e), e.injector()) {
                var i = e[0] === t.document ? "document" : G(e);
                throw Mr("btstrpd", i.replace(/</, "&lt;").replace(/>/, "&gt;"))
            }
            return n = n || [], n.unshift(["$provide", function (t) {
                t.value("$rootElement", e)
            }]), r.debugInfoEnabled && n.push(["$compileProvider", function (t) {
                t.debugInfoEnabled(!0)
            }]), n.unshift("ng"), i = Gt(n, r.strictDi), i.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (t, e, n, r) {
                t.$apply(function () {
                    e.data("$injector", r), n(e)(t)
                })
            }]), i
        }, a = /^NG_ENABLE_DEBUG_INFO!/, s = /^NG_DEFER_BOOTSTRAP!/;
        if (t && a.test(t.name) && (r.debugInfoEnabled = !0, t.name = t.name.replace(a, "")), t && !s.test(t.name)) return i();
        t.name = t.name.replace(s, ""), Cr.resumeBootstrap = function (t) {
            return o(t, function (t) {
                n.push(t)
            }), i()
        }, C(Cr.resumeDeferredBootstrap) && Cr.resumeDeferredBootstrap()
    }

    function rt() {
        t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
    }

    function it(t) {
        if (!(t = Cr.element(t).injector())) throw Mr("test");
        return t.get("$$testability")
    }

    function ot(t, e) {
        return e = e || "_", t.replace(Ur, function (t, n) {
            return (n ? e : "") + t.toLowerCase()
        })
    }

    function at(t, e, n) {
        if (!t) throw Mr("areq", e || "?", n || "required");
        return t
    }

    function st(t, e, n) {
        return n && S(t) && (t = t[t.length - 1]), at(C(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
    }

    function ut(t, e) {
        if ("hasOwnProperty" === t) throw Mr("badname", e)
    }

    function ct(t, e, n) {
        if (!e) return t;
        e = e.split(".");
        for (var r, i = t, o = e.length, a = 0; a < o; a++) r = e[a], t && (t = (i = t)[r]);
        return !n && C(t) ? j(i, t) : t
    }

    function lt(t) {
        for (var e, n = t[0], r = t[t.length - 1], i = 1; n !== r && (n = n.nextSibling); i++) (e || t[i] !== n) && (e || (e = dr(br.call(t, 0, i))), e.push(n));
        return e || t
    }

    function ft() {
        return Object.create(null)
    }

    function ht(t) {
        if (null == t) return "";
        switch (typeof t) {
            case"string":
                break;
            case"number":
                t = "" + t;
                break;
            default:
                t = !g(t) || S(t) || k(t) ? H(t) : t.toString()
        }
        return t
    }

    function dt(t) {
        function e(t, e, n) {
            return t[e] || (t[e] = n())
        }

        var n = r("$injector"), i = r("ng");
        return t = e(t, "angular", Object), t.$$minErr = t.$$minErr || r, e(t, "module", function () {
            var t = {};
            return function (r, o, a) {
                var s = {};
                if ("hasOwnProperty" === r) throw i("badname", "module");
                return o && t.hasOwnProperty(r) && (t[r] = null), e(t, r, function () {
                    function t(t, e, n, r) {
                        return r || (r = u), function () {
                            return r[n || "push"]([t, e, arguments]), h
                        }
                    }

                    function e(t, e, n) {
                        return n || (n = u), function (i, o) {
                            return o && C(o) && (o.$$moduleName = r), n.push([t, e, arguments]), h
                        }
                    }

                    if (!o) throw n("nomod", r);
                    var u = [], c = [], l = [], f = t("$injector", "invoke", "push", c), h = {
                        _invokeQueue: u,
                        _configBlocks: c,
                        _runBlocks: l,
                        info: function (t) {
                            if (y(t)) {
                                if (!w(t)) throw i("aobj", "value");
                                return s = t, this
                            }
                            return s
                        },
                        requires: o,
                        name: r,
                        provider: e("$provide", "provider"),
                        factory: e("$provide", "factory"),
                        service: e("$provide", "service"),
                        value: t("$provide", "value"),
                        constant: t("$provide", "constant", "unshift"),
                        decorator: e("$provide", "decorator", c),
                        animation: e("$animateProvider", "register"),
                        filter: e("$filterProvider", "register"),
                        controller: e("$controllerProvider", "register"),
                        directive: e("$compileProvider", "directive"),
                        component: e("$compileProvider", "component"),
                        config: f,
                        run: function (t) {
                            return l.push(t), this
                        }
                    };
                    return a && f(a), h
                })
            }
        })
    }

    function pt(t, e) {
        if (S(t)) {
            e = e || [];
            for (var n = 0, r = t.length; n < r; n++) e[n] = t[n]
        } else if (w(t)) for (n in e = e || {}, t) "$" === n.charAt(0) && "$" === n.charAt(1) || (e[n] = t[n]);
        return e || t
    }

    function mt(t, e) {
        var r = [];
        return n(e) && (t = Cr.copy(t, null, e)), JSON.stringify(t, function (t, e) {
            if (e = F(t, e), w(e)) {
                if (0 <= r.indexOf(e)) return "...";
                r.push(e)
            }
            return e
        })
    }

    function $t(t, e) {
        return e.toUpperCase()
    }

    function gt(t) {
        return t.replace(Wr, $t)
    }

    function vt(t) {
        return 1 === (t = t.nodeType) || !t || 9 === t
    }

    function yt(t, e) {
        var n, r, i = e.createDocumentFragment(), a = [];
        if (Zr.test(t)) {
            for (n = i.appendChild(e.createElement("div")), r = (Jr.exec(t) || ["", ""])[1].toLowerCase(), r = Qr[r] || Qr._default, n.innerHTML = r[1] + t.replace(Kr, "<$1></$2>") + r[2], r = r[0]; r--;) n = n.lastChild;
            a = L(a, n.childNodes), n = i.firstChild, n.textContent = ""
        } else a.push(e.createTextNode(t));
        return i.textContent = "", i.innerHTML = "", o(a, function (t) {
            i.appendChild(t)
        }), i
    }

    function wt(e) {
        if (e instanceof wt) return e;
        var n;
        if (_(e) && (e = Tr(e), n = !0), !(this instanceof wt)) {
            if (n && "<" !== e.charAt(0)) throw Br("nosel");
            return new wt(e)
        }
        if (n) {
            n = t.document;
            var r;
            e = (r = Gr.exec(e)) ? [n.createElement(r[1])] : (r = yt(e, n)) ? r.childNodes : [], At(this, e)
        } else C(e) ? Ut(e) : At(this, e)
    }

    function bt(t) {
        return t.cloneNode(!0)
    }

    function _t(t, e) {
        !e && vt(t) && dr.cleanData([t]), t.querySelectorAll && dr.cleanData(t.querySelectorAll("*"))
    }

    function xt(t) {
        for (var e in t) return !1;
        return !0
    }

    function kt(t) {
        var e = t.ng339, n = e && Fr[e], r = n && n.events, n = n && n.data;
        n && !xt(n) || r && !xt(r) || (delete Fr[e], t.ng339 = void 0)
    }

    function St(t, e, n, r) {
        if (y(r)) throw Br("offargs");
        var i = (r = Ct(t)) && r.events, a = r && r.handle;
        if (a) {
            if (e) {
                var s = function (e) {
                    var r = i[e];
                    y(n) && I(r || [], n), y(n) && r && 0 < r.length || (t.removeEventListener(e, a), delete i[e])
                };
                o(e.split(" "), function (t) {
                    s(t), qr[t] && s(qr[t])
                })
            } else for (e in i) "$destroy" !== e && t.removeEventListener(e, a), delete i[e];
            kt(t)
        }
    }

    function Mt(t, e) {
        var n = t.ng339;
        (n = n && Fr[n]) && (e ? delete n.data[e] : n.data = {}, kt(t))
    }

    function Ct(t, e) {
        var n = t.ng339, n = n && Fr[n];
        return e && !n && (t.ng339 = n = ++Hr, n = Fr[n] = {events: {}, data: {}, handle: void 0}), n
    }

    function Ot(t, e, n) {
        if (vt(t)) {
            var r, i = y(n), o = !i && e && !w(e), a = !e;
            if (t = (t = Ct(t, !o)) && t.data, i) t[gt(e)] = n; else {
                if (a) return t;
                if (o) return t && t[gt(e)];
                for (r in e) t[gt(r)] = e[r]
            }
        }
    }

    function Et(t, e) {
        return !!t.getAttribute && -1 < (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ")
    }

    function Dt(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "), r = n;
            o(e.split(" "), function (t) {
                t = Tr(t), r = r.replace(" " + t + " ", " ")
            }), r !== n && t.setAttribute("class", Tr(r))
        }
    }

    function Tt(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "), r = n;
            o(e.split(" "), function (t) {
                t = Tr(t), -1 === r.indexOf(" " + t + " ") && (r += t + " ")
            }), r !== n && t.setAttribute("class", Tr(r))
        }
    }

    function At(t, e) {
        if (e) if (e.nodeType) t[t.length++] = e; else {
            var n = e.length;
            if ("number" == typeof n && e.window !== e) {
                if (n) for (var r = 0; r < n; r++) t[t.length++] = e[r]
            } else t[t.length++] = e
        }
    }

    function Vt(t, e) {
        return Pt(t, "$" + (e || "ngController") + "Controller")
    }

    function Pt(t, e, n) {
        for (9 === t.nodeType && (t = t.documentElement), e = S(e) ? e : [e]; t;) {
            for (var r = 0, i = e.length; r < i; r++) if (y(n = dr.data(t, e[r]))) return n;
            t = t.parentNode || 11 === t.nodeType && t.host
        }
    }

    function Nt(t) {
        for (_t(t, !0); t.firstChild;) t.removeChild(t.firstChild)
    }

    function It(t, e) {
        e || _t(t);
        var n = t.parentNode;
        n && n.removeChild(t)
    }

    function Rt(e, n) {
        n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : dr(n).on("load", e)
    }

    function Ut(e) {
        function n() {
            t.document.removeEventListener("DOMContentLoaded", n), t.removeEventListener("load", n), e()
        }

        "complete" === t.document.readyState ? t.setTimeout(e) : (t.document.addEventListener("DOMContentLoaded", n), t.addEventListener("load", n))
    }

    function Yt(t, e) {
        var n = ei[e.toLowerCase()];
        return n && ni[N(t)] && n
    }

    function Lt(t, e) {
        var n = function (n, r) {
            n.isDefaultPrevented = function () {
                return n.defaultPrevented
            };
            var i = e[r || n.type], o = i ? i.length : 0;
            if (o) {
                if (v(n.immediatePropagationStopped)) {
                    var a = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function () {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function () {
                    return !0 === n.immediatePropagationStopped
                };
                var s = i.specialHandlerWrapper || jt;
                1 < o && (i = pt(i));
                for (var u = 0; u < o; u++) n.isImmediatePropagationStopped() || s(t, n, i[u])
            }
        };
        return n.elem = t, n
    }

    function jt(t, e, n) {
        n.call(t, e)
    }

    function Ft(t, e, n) {
        var r = e.relatedTarget;
        r && (r === t || Xr.call(t, r)) || n.call(t, e)
    }

    function Ht() {
        this.$get = function () {
            return l(wt, {
                hasClass: function (t, e) {
                    return t.attr && (t = t[0]), Et(t, e)
                }, addClass: function (t, e) {
                    return t.attr && (t = t[0]), Tt(t, e)
                }, removeClass: function (t, e) {
                    return t.attr && (t = t[0]), Dt(t, e)
                }
            })
        }
    }

    function Wt(t, e) {
        var n = t && t.$$hashKey;
        return n ? ("function" == typeof n && (n = t.$$hashKey()), n) : (n = typeof t, n = "function" === n || "object" === n && null !== t ? t.$$hashKey = n + ":" + (e || u)() : n + ":" + t)
    }

    function zt() {
        this._keys = [], this._values = [], this._lastKey = NaN, this._lastIndex = -1
    }

    function qt(t) {
        return t = Function.prototype.toString.call(t).replace(fi, ""), t.match(si) || t.match(ui)
    }

    function Bt(t) {
        return (t = qt(t)) ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function Gt(t, e) {
        function n(t) {
            return function (e, n) {
                if (!w(e)) return t(e, n);
                o(e, s(t))
            }
        }

        function r(t, e) {
            if (ut(t, "service"), (C(e) || S(e)) && (e = p.instantiate(e)), !e.$get) throw hi("pget", t);
            return d[t + "Provider"] = e
        }

        function i(t, e) {
            return function () {
                var n = y.invoke(e, this);
                if (v(n)) throw hi("undef", t);
                return n
            }
        }

        function a(t, e, n) {
            return r(t, {$get: !1 !== n ? i(t, e) : e})
        }

        function u(t) {
            at(v(t) || S(t), "modulesToLoad", "not an array");
            var e, n = [];
            return o(t, function (t) {
                function r(t) {
                    var e, n;
                    for (e = 0, n = t.length; e < n; e++) {
                        var r = t[e], i = p.get(r[0]);
                        i[r[1]].apply(i, r[2])
                    }
                }

                if (!h.get(t)) {
                    h.set(t, !0);
                    try {
                        _(t) ? (e = mr(t), y.modules[t] = e, n = n.concat(u(e.requires)).concat(e._runBlocks), r(e._invokeQueue), r(e._configBlocks)) : C(t) ? n.push(p.invoke(t)) : S(t) ? n.push(p.invoke(t)) : st(t, "module")
                    } catch (e) {
                        throw S(t) && (t = t[t.length - 1]), e.message && e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), hi("modulerr", t, e.stack || e.message || e)
                    }
                }
            }), n
        }

        function c(t, n) {
            function r(e, r) {
                if (t.hasOwnProperty(e)) {
                    if (t[e] === l) throw hi("cdep", e + " <- " + f.join(" <- "));
                    return t[e]
                }
                try {
                    return f.unshift(e), t[e] = l, t[e] = n(e, r), t[e]
                } catch (n) {
                    throw t[e] === l && delete t[e], n
                } finally {
                    f.shift()
                }
            }

            function i(t, n, i) {
                var o = [];
                t = Gt.$$annotate(t, e, i);
                for (var a = 0, s = t.length; a < s; a++) {
                    var u = t[a];
                    if ("string" != typeof u) throw hi("itkn", u);
                    o.push(n && n.hasOwnProperty(u) ? n[u] : r(u, i))
                }
                return o
            }

            return {
                invoke: function (t, e, n, r) {
                    if ("string" == typeof n && (r = n, n = null), n = i(t, n, r), S(t) && (t = t[t.length - 1]), r = t, hr || "function" != typeof r) r = !1; else {
                        var o = r.$$ngIsClass;
                        T(o) || (o = r.$$ngIsClass = /^class\b/.test(Function.prototype.toString.call(r))), r = o
                    }
                    return r ? (n.unshift(null), new (Function.prototype.bind.apply(t, n))) : t.apply(e, n)
                }, instantiate: function (t, e, n) {
                    var r = S(t) ? t[t.length - 1] : t;
                    return t = i(t, e, n), t.unshift(null), new (Function.prototype.bind.apply(r, t))
                }, get: r, annotate: Gt.$$annotate, has: function (e) {
                    return d.hasOwnProperty(e + "Provider") || t.hasOwnProperty(e)
                }
            }
        }

        e = !0 === e;
        var l = {}, f = [], h = new oi, d = {
            $provide: {
                provider: n(r), factory: n(a), service: n(function (t, e) {
                    return a(t, ["$injector", function (t) {
                        return t.instantiate(e)
                    }])
                }), value: n(function (t, e) {
                    return a(t, $(e), !1)
                }), constant: n(function (t, e) {
                    ut(t, "constant"), d[t] = e, m[t] = e
                }), decorator: function (t, e) {
                    var n = p.get(t + "Provider"), r = n.$get;
                    n.$get = function () {
                        var t = y.invoke(r, n);
                        return y.invoke(e, null, {$delegate: t})
                    }
                }
            }
        }, p = d.$injector = c(d, function (t, e) {
            throw Cr.isString(e) && f.push(e), hi("unpr", f.join(" <- "))
        }), m = {}, g = c(m, function (t, e) {
            var n = p.get(t + "Provider", e);
            return y.invoke(n.$get, n, void 0, t)
        }), y = g;
        d.$injectorProvider = {$get: $(g)}, y.modules = p.modules = ft();
        var b = u(t), y = g.get("$injector");
        return y.strictDi = e, o(b, function (t) {
            t && y.invoke(t)
        }), y.loadNewModules = function (t) {
            o(u(t), function (t) {
                t && y.invoke(t)
            })
        }, y
    }

    function Zt() {
        var t = !0;
        this.disableAutoScrolling = function () {
            t = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (e, n, r) {
            function i(t) {
                var e = null;
                return Array.prototype.some.call(t, function (t) {
                    if ("a" === N(t)) return e = t, !0
                }), e
            }

            function o(t) {
                if (t) {
                    t.scrollIntoView();
                    var n;
                    n = a.yOffset, C(n) ? n = n() : V(n) ? (n = n[0], n = "fixed" !== e.getComputedStyle(n).position ? 0 : n.getBoundingClientRect().bottom) : x(n) || (n = 0), n && (t = t.getBoundingClientRect().top, e.scrollBy(0, t - n))
                } else e.scrollTo(0, 0)
            }

            function a(t) {
                t = _(t) ? t : x(t) ? t.toString() : n.hash();
                var e;
                t ? (e = s.getElementById(t)) ? o(e) : (e = i(s.getElementsByName(t))) ? o(e) : "top" === t && o(null) : o(null)
            }

            var s = e.document;
            return t && r.$watch(function () {
                return n.hash()
            }, function (t, e) {
                t === e && "" === t || Rt(function () {
                    r.$evalAsync(a)
                })
            }), a
        }]
    }

    function Jt(t, e) {
        return t || e ? t ? e ? (S(t) && (t = t.join(" ")), S(e) && (e = e.join(" ")), t + " " + e) : t : e : ""
    }

    function Kt(t) {
        _(t) && (t = t.split(" "));
        var e = ft();
        return o(t, function (t) {
            t.length && (e[t] = !0)
        }), e
    }

    function Qt(t) {
        return w(t) ? t : {}
    }

    function Xt(t, e, n, r, i) {
        function a() {
            _ = null, u()
        }

        function s() {
            g = x(), g = v(g) ? null : g, Y(g, M) && (g = M), y = M = g
        }

        function u() {
            var t = y;
            s(), w === c.url() && t === g || (w = c.url(), y = g, o(k, function (t) {
                t(c.url(), g)
            }))
        }

        var c = this, l = t.location, f = t.history, h = t.setTimeout, d = t.clearTimeout, m = {}, $ = i(n);
        c.isMock = !1, c.$$completeOutstandingRequest = $.completeTask, c.$$incOutstandingRequestCount = $.incTaskCount, c.notifyWhenNoOutstandingRequests = $.notifyWhenNoPendingTasks;
        var g, y, w = l.href, b = e.find("base"), _ = null, x = r.history ? function () {
            try {
                return f.state
            } catch (t) {
            }
        } : p;
        s(), c.url = function (e, n, i) {
            if (v(i) && (i = null), l !== t.location && (l = t.location), f !== t.history && (f = t.history), e) {
                var o = y === i;
                if (e = mn(e).href, w === e && (!r.history || o)) return c;
                var a = w && Te(w) === Te(e);
                return w = e, y = i, !r.history || a && o ? (a || (_ = e), n ? l.replace(e) : a ? (n = l, i = e, o = i.indexOf("#"), i = -1 === o ? "" : i.substr(o), n.hash = i) : l.href = e, l.href !== e && (_ = e)) : (f[n ? "replaceState" : "pushState"](i, "", e), s()), _ && (_ = e), c
            }
            return (_ || l.href).replace(/#$/, "")
        }, c.state = function () {
            return g
        };
        var k = [], S = !1, M = null;
        c.onUrlChange = function (e) {
            return S || (r.history && dr(t).on("popstate", a), dr(t).on("hashchange", a), S = !0), k.push(e), e
        }, c.$$applicationDestroyed = function () {
            dr(t).off("hashchange popstate", a)
        }, c.$$checkUrlChange = u, c.baseHref = function () {
            var t = b.attr("href");
            return t ? t.replace(/^(https?:)?\/\/[^\/]*/, "") : ""
        }, c.defer = function (t, e, n) {
            var r;
            return e = e || 0, n = n || $.DEFAULT_TASK_TYPE, $.incTaskCount(n), r = h(function () {
                delete m[r], $.completeTask(t, n)
            }, e), m[r] = n, r
        }, c.defer.cancel = function (t) {
            if (m.hasOwnProperty(t)) {
                var e = m[t];
                return delete m[t], d(t), $.completeTask(p, e), !0
            }
            return !1
        }
    }

    function te() {
        this.$get = ["$window", "$log", "$sniffer", "$document", "$$taskTrackerFactory", function (t, e, n, r, i) {
            return new Xt(t, r, e, n, i)
        }]
    }

    function ee() {
        this.$get = function () {
            function t(t, n) {
                function i(t) {
                    t !== h && (d ? d === t && (d = t.n) : d = t, o(t.n, t.p), o(t, h), h = t, h.n = null)
                }

                function o(t, e) {
                    t !== e && (t && (t.p = e), e && (e.n = t))
                }

                if (t in e) throw r("$cacheFactory")("iid", t);
                var a = 0, s = l({}, n, {id: t}), u = ft(), c = n && n.capacity || Number.MAX_VALUE, f = ft(), h = null,
                    d = null;
                return e[t] = {
                    put: function (t, e) {
                        if (!v(e)) {
                            if (c < Number.MAX_VALUE) {
                                i(f[t] || (f[t] = {key: t}))
                            }
                            return t in u || a++, u[t] = e, a > c && this.remove(d.key), e
                        }
                    }, get: function (t) {
                        if (c < Number.MAX_VALUE) {
                            var e = f[t];
                            if (!e) return;
                            i(e)
                        }
                        return u[t]
                    }, remove: function (t) {
                        if (c < Number.MAX_VALUE) {
                            var e = f[t];
                            if (!e) return;
                            e === h && (h = e.p), e === d && (d = e.n), o(e.n, e.p), delete f[t]
                        }
                        t in u && (delete u[t], a--)
                    }, removeAll: function () {
                        u = ft(), a = 0, f = ft(), h = d = null
                    }, destroy: function () {
                        f = s = u = null, delete e[t]
                    }, info: function () {
                        return l({}, s, {size: a})
                    }
                }
            }

            var e = {};
            return t.info = function () {
                var t = {};
                return o(e, function (e, n) {
                    t[n] = e.info()
                }), t
            }, t.get = function (t) {
                return e[t]
            }, t
        }
    }

    function ne() {
        this.$get = ["$cacheFactory", function (t) {
            return t("templates")
        }]
    }

    function re(e, n) {
        function r(t, e, n) {
            var r = /^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/, i = ft();
            return o(t, function (t, o) {
                if ((t = t.trim()) in x) i[o] = x[t]; else {
                    var a = t.match(r);
                    if (!a) throw wi("iscp", e, o, t, n ? "controller bindings definition" : "isolate scope definition");
                    i[o] = {
                        mode: a[1][0],
                        collection: "*" === a[2],
                        optional: "?" === a[3],
                        attrName: a[4] || o
                    }, a[4] && (x[t] = i[o])
                }
            }), i
        }

        function i(t) {
            var e = t.charAt(0);
            if (!e || e !== yr(e)) throw wi("baddir", t);
            if (t !== t.trim()) throw wi("baddir", t)
        }

        function a(t) {
            var e = t.require || t.controller && t.name;
            return !S(e) && w(e) && o(e, function (t, n) {
                var r = t.match(g);
                t.substring(r[0].length) || (e[n] = r[0] + n)
            }), e
        }

        var u = {}, c = /^\s*directive:\s*([\w-]+)\s+(.*)$/, f = /(([\w-]+)(?::([^;]+))?;?)/,
            h = P("ngSrc,ngSrcset,src,srcset"), g = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, b = /^(on[a-z]+|formaction)$/,
            x = ft();
        this.directive = function t(n, r) {
            return at(n, "name"), ut(n, "directive"), _(n) ? (i(n), at(r, "directiveFactory"), u.hasOwnProperty(n) || (u[n] = [], e.factory(n + "Directive", ["$injector", "$exceptionHandler", function (t, e) {
                var r = [];
                return o(u[n], function (i, o) {
                    try {
                        var s = t.invoke(i);
                        C(s) ? s = {compile: $(s)} : !s.compile && s.link && (s.compile = $(s.link)), s.priority = s.priority || 0, s.index = o, s.name = s.name || n, s.require = a(s);
                        var u = s, c = s.restrict;
                        if (c && (!_(c) || !/[EACM]/.test(c))) throw wi("badrestrict", c, n);
                        u.restrict = c || "EA", s.$$moduleName = i.$$moduleName, r.push(s)
                    } catch (t) {
                        e(t)
                    }
                }), r
            }])), u[n].push(r)) : o(n, s(t)), this
        }, this.component = function t(e, n) {
            function r(t) {
                function e(e) {
                    return C(e) || S(e) ? function (n, r) {
                        return t.invoke(e, this, {$element: n, $attrs: r})
                    } : e
                }

                var r = n.template || n.templateUrl ? n.template : "", a = {
                    controller: i,
                    controllerAs: ue(n.controller) || n.controllerAs || "$ctrl",
                    template: e(r),
                    templateUrl: e(n.templateUrl),
                    transclude: n.transclude,
                    scope: {},
                    bindToController: n.bindings || {},
                    restrict: "E",
                    require: n.require
                };
                return o(n, function (t, e) {
                    "$" === e.charAt(0) && (a[e] = t)
                }), a
            }

            if (!_(e)) return o(e, s(j(this, t))), this;
            var i = n.controller || function () {
            };
            return o(n, function (t, e) {
                "$" === e.charAt(0) && (r[e] = t, C(i) && (i[e] = t))
            }), r.$inject = ["$injector"], this.directive(e, r)
        }, this.aHrefSanitizationWhitelist = function (t) {
            return y(t) ? (n.aHrefSanitizationWhitelist(t), this) : n.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return y(t) ? (n.imgSrcSanitizationWhitelist(t), this) : n.imgSrcSanitizationWhitelist()
        };
        var k = !0;
        this.debugInfoEnabled = function (t) {
            return y(t) ? (k = t, this) : k
        };
        var O = !1;
        this.strictComponentBindingsEnabled = function (t) {
            return y(t) ? (O = t, this) : O
        };
        var E = 10;
        this.onChangesTtl = function (t) {
            return arguments.length ? (E = t, this) : E
        };
        var A = !0;
        this.commentDirectivesEnabled = function (t) {
            return arguments.length ? (A = t, this) : A
        };
        var V = !0;
        this.cssClassDirectivesEnabled = function (t) {
            return arguments.length ? (V = t, this) : V
        };
        var R = ft();
        this.addPropertySecurityContext = function (t, e, n) {
            var r = t.toLowerCase() + "|" + e.toLowerCase();
            if (r in R && R[r] !== n) throw wi("ctxoverride", t, e, R[r], n);
            return R[r] = n, this
        }, function () {
            function t(t, e) {
                o(e, function (e) {
                    R[e.toLowerCase()] = t
                })
            }

            t(Ji.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), t(Ji.CSS, ["*|style"]), t(Ji.URL, "area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" ")), t(Ji.MEDIA_URL, "audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" ")), t(Ji.RESOURCE_URL, "*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))
        }(), this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", function (e, n, i, a, s, $, y, x, P) {
            function L() {
                try {
                    if (!--Vt) throw Ot = void 0, wi("infchng", E);
                    y.$apply(function () {
                        for (var t = 0, e = Ot.length; t < e; ++t) try {
                            Ot[t]()
                        } catch (t) {
                            i(t)
                        }
                        Ot = void 0
                    })
                } finally {
                    Vt++
                }
            }

            function F(t, e) {
                if (!t) return t;
                if (!_(t)) throw wi("srcset", e, t.toString());
                for (var n = "", r = Tr(t), i = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, i = /\s/.test(r) ? i : /(,)/, r = r.split(i), i = Math.floor(r.length / 2), o = 0; o < i; o++) var a = 2 * o, n = n + x.getTrustedMediaUrl(Tr(r[a])), n = n + " " + Tr(r[a + 1]);
                return r = Tr(r[2 * o]).split(/\s/), n += x.getTrustedMediaUrl(Tr(r[0])), 2 === r.length && (n += " " + Tr(r[1])), n
            }

            function H(t, e) {
                if (e) {
                    var n, r, i, o = Object.keys(e);
                    for (n = 0, r = o.length; n < r; n++) i = o[n], this[i] = e[i]
                } else this.$attr = {};
                this.$$element = t
            }

            function W(t, e, n) {
                Dt.innerHTML = "<span " + e + ">", e = Dt.firstChild.attributes;
                var r = e[0];
                e.removeNamedItem(r.name), r.value = n, t.attributes.setNamedItem(r)
            }

            function z(t, e) {
                try {
                    t.addClass(e)
                } catch (t) {
                }
            }

            function q(t, e, n, r, i) {
                t instanceof dr || (t = dr(t));
                var o = B(t, e, t, n, r, i);
                q.$$addScopeClass(t);
                var a = null;
                return function (e, n, r) {
                    if (!t) throw wi("multilink");
                    at(e, "scope"), i && i.needsNewScope && (e = e.$parent.$new()), r = r || {};
                    var s = r.parentBoundTranscludeFn, u = r.transcludeControllers;
                    if (r = r.futureParentElement, s && s.$$boundTransclude && (s = s.$$boundTransclude), a || (a = (r = r && r[0]) && "foreignobject" !== N(r) && kr.call(r).match(/SVG/) ? "svg" : "html"), r = "html" !== a ? dr($t(a, dr("<div></div>").append(t).html())) : n ? ti.clone.call(t) : t, u) for (var c in u) r.data("$" + c + "Controller", u[c].instance);
                    return q.$$addScopeInfo(r, e), n && n(r, e), o && o(e, r, r, s), n || (t = o = null), r
                }
            }

            function B(t, e, n, r, i, o) {
                function a(t, n, r, i) {
                    var o, a, s, u, c, l, d;
                    if (f) for (d = Array(n.length), u = 0; u < h.length; u += 3) o = h[u], d[o] = n[o]; else d = n;
                    for (u = 0, c = h.length; u < c;) a = d[h[u++]], n = h[u++], o = h[u++], n ? (n.scope ? (s = t.$new(), q.$$addScopeInfo(dr(a), s)) : s = t, l = n.transcludeOnThisElement ? J(t, n.transclude, i) : !n.templateOnThisElement && i ? i : !i && e ? J(t, e) : null, n(o, s, a, r, l)) : o && o(t, a.childNodes, void 0, i)
                }

                for (var s, u, c, l, f, h = [], d = S(t) || t instanceof dr, p = 0; p < t.length; p++) s = new H, 11 === hr && Z(t, p, d), u = K(t[p], [], s, 0 === p ? r : void 0, i), (o = u.length ? nt(u, t[p], s, e, n, null, [], [], o) : null) && o.scope && q.$$addScopeClass(s.$$element), s = o && o.terminal || !(c = t[p].childNodes) || !c.length ? null : B(c, o ? (o.transcludeOnThisElement || !o.templateOnThisElement) && o.transclude : e), (o || s) && (h.push(p, o, s), l = !0, f = f || o), o = null;
                return l ? a : null
            }

            function Z(t, e, n) {
                var r, i = t[e], o = i.parentNode;
                if (i.nodeType === Lr) for (; (r = o ? i.nextSibling : t[e + 1]) && r.nodeType === Lr;) i.nodeValue += r.nodeValue, r.parentNode && r.parentNode.removeChild(r), n && r === t[e + 1] && t.splice(e + 1, 1)
            }

            function J(t, e, n) {
                function r(r, i, o, a, s) {
                    return r || (r = t.$new(!1, s), r.$$transcluded = !0), e(r, i, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: o,
                        futureParentElement: a
                    })
                }

                var i, o = r.$$slots = ft();
                for (i in e.$$slots) o[i] = e.$$slots[i] ? J(t, e.$$slots[i], n) : null;
                return r
            }

            function K(t, e, n, r, o) {
                var a, u = n.$attr;
                switch (t.nodeType) {
                    case 1:
                        a = N(t), ut(e, oe(a), "E", r, o);
                        for (var c, l, h, d, p, m = t.attributes, $ = 0, g = m && m.length; $ < g; $++) {
                            var v, b = !1, x = !1, k = !1, S = !1, M = !1;
                            c = m[$], l = c.name, d = c.value, h = oe(l.toLowerCase()), (p = h.match(Rt)) ? (k = "Attr" === p[1], S = "Prop" === p[1], M = "On" === p[1], l = l.replace(_i, "").toLowerCase().substr(4 + p[1].length).replace(/_(.)/g, function (t, e) {
                                return e.toUpperCase()
                            })) : (v = h.match(Ut)) && ct(v[1]) && (b = l, x = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6)), S || M ? (n[h] = d, u[h] = c.name, S ? wt(t, e, h, l) : e.push(ir(s, y, i, h, l, !1))) : (h = oe(l.toLowerCase()), u[h] = l, !k && n.hasOwnProperty(h) || (n[h] = d, Yt(t, h) && (n[h] = !0)), _t(t, e, d, h, k), ut(e, h, "A", r, o, b, x))
                        }
                        if ("input" === a && "hidden" === t.getAttribute("type") && t.setAttribute("autocomplete", "off"), !At) break;
                        if (u = t.className, w(u) && (u = u.animVal), _(u) && "" !== u) for (; t = f.exec(u);) h = oe(t[2]), ut(e, h, "C", r, o) && (n[h] = Tr(t[3])), u = u.substr(t.index + t[0].length);
                        break;
                    case Lr:
                        mt(e, t.nodeValue);
                        break;
                    case 8:
                        if (!Tt) break;
                        Q(t, e, n, r, o)
                }
                return e.sort(dt), e
            }

            function Q(t, e, n, r, i) {
                try {
                    var o = c.exec(t.nodeValue);
                    if (o) {
                        var a = oe(o[1]);
                        ut(e, a, "M", r, i) && (n[a] = Tr(o[2]))
                    }
                } catch (t) {
                }
            }

            function X(t, e, n) {
                var r = [], i = 0;
                if (e && t.hasAttribute && t.hasAttribute(e)) do {
                    if (!t) throw wi("uterdir", e, n);
                    1 === t.nodeType && (t.hasAttribute(e) && i++, t.hasAttribute(n) && i--), r.push(t), t = t.nextSibling
                } while (0 < i); else r.push(t);
                return dr(r)
            }

            function tt(t, e, n) {
                return function (r, i, o, a, s) {
                    return i = X(i[0], e, n), t(r, i, o, a, s)
                }
            }

            function et(t, e, n, r, i, o) {
                var a;
                return t ? q(e, n, r, i, o) : function () {
                    return a || (a = q(e, n, r, i, o), e = n = o = null), a.apply(this, arguments)
                }
            }

            function nt(e, n, r, a, s, u, c, f, h) {
                function d(t, e, n, r) {
                    t && (n && (t = tt(t, n, r)), t.require = m.require, t.directiveName = $, (M === m || m.$$isolateScope) && (t = kt(t, {isolateScope: !0})), c.push(t)), e && (n && (e = tt(e, n, r)), e.require = m.require, e.directiveName = $, (M === m || m.$$isolateScope) && (e = kt(e, {isolateScope: !0})), f.push(e))
                }

                function p(t, e, a, s, u) {
                    function h(t, e, n, r) {
                        var i;
                        if (D(t) || (r = n, n = e, e = t, t = void 0), V && (i = y), n || (n = V ? _.parent() : _), !r) return u(t, e, i, n, T);
                        var o = u.$$slots[r];
                        if (o) return o(t, e, i, n, T);
                        if (v(o)) throw wi("noslot", r, G(_))
                    }

                    var d, p, m, $, g, y, b, _;
                    n === a ? (s = r, _ = r.$$element) : (_ = dr(a), s = new H(_, r)), g = e, M ? $ = e.$new(!0) : x && (g = e.$parent), u && (b = h, b.$$boundTransclude = u, b.isSlotFilled = function (t) {
                        return !!u.$$slots[t]
                    }), k && (y = it(_, s, b, k, $, e, M)), M && (q.$$addScopeInfo(_, $, !0, !(O && (O === M || O === M.$$originalDirective))), q.$$addScopeClass(_, !0), $.$$isolateBindings = M.$$isolateBindings, p = Ct(e, s, $, $.$$isolateBindings, M), p.removeWatches && $.$on("$destroy", p.removeWatches));
                    for (d in y) {
                        p = k[d], m = y[d];
                        var E = p.$$bindings.bindToController;
                        m.instance = m(), _.data("$" + p.name + "Controller", m.instance), m.bindingInfo = Ct(g, s, m.instance, E, p)
                    }
                    for (o(k, function (t, e) {
                        var n = t.require;
                        t.bindToController && !S(n) && w(n) && l(y[e].instance, rt(e, n, _, y))
                    }), o(y, function (t) {
                        var e = t.instance;
                        if (C(e.$onChanges)) try {
                            e.$onChanges(t.bindingInfo.initialChanges)
                        } catch (t) {
                            i(t)
                        }
                        if (C(e.$onInit)) try {
                            e.$onInit()
                        } catch (t) {
                            i(t)
                        }
                        C(e.$doCheck) && (g.$watch(function () {
                            e.$doCheck()
                        }), e.$doCheck()), C(e.$onDestroy) && g.$on("$destroy", function () {
                            e.$onDestroy()
                        })
                    }), d = 0, p = c.length; d < p; d++) m = c[d], St(m, m.isolateScope ? $ : e, _, s, m.require && rt(m.directiveName, m.require, _, y), b);
                    var T = e
                    ;
                    for (M && (M.template || null === M.templateUrl) && (T = $), t && t(T, a.childNodes, void 0, u), d = f.length - 1; 0 <= d; d--) m = f[d], St(m, m.isolateScope ? $ : e, _, s, m.require && rt(m.directiveName, m.require, _, y), b);
                    o(y, function (t) {
                        t = t.instance, C(t.$postLink) && t.$postLink()
                    })
                }

                h = h || {};
                for (var m, $, g, y, b, _ = -Number.MAX_VALUE, x = h.newScopeDirective, k = h.controllerDirectives, M = h.newIsolateScopeDirective, O = h.templateDirective, E = h.nonTlbTranscludeDirective, T = !1, A = !1, V = h.hasElementTranscludeDirective, P = r.$$element = dr(n), I = a, R = !1, U = !1, Y = 0, L = e.length; Y < L; Y++) {
                    m = e[Y];
                    var F = m.$$start, W = m.$$end;
                    if (F && (P = X(n, F, W)), g = void 0, _ > m.priority) break;
                    if ((b = m.scope) && (m.templateUrl || (w(b) ? (pt("new/isolated scope", M || x, m, P), M = m) : pt("new/isolated scope", M, m, P)), x = x || m), $ = m.name, !R && (m.replace && (m.templateUrl || m.template) || m.transclude && !m.$$tlb)) {
                        for (b = Y + 1; R = e[b++];) if (R.transclude && !R.$$tlb || R.replace && (R.templateUrl || R.template)) {
                            U = !0;
                            break
                        }
                        R = !0
                    }
                    if (!m.templateUrl && m.controller && (k = k || ft(), pt("'" + $ + "' controller", k[$], m, P), k[$] = m), b = m.transclude) if (T = !0, m.$$tlb || (pt("transclusion", E, m, P), E = m), "element" === b) V = !0, _ = m.priority, g = P, P = r.$$element = dr(q.$$createComment($, r[$])), n = P[0], xt(s, br.call(g, 0), n), I = et(U, g, a, _, u && u.name, {nonTlbTranscludeDirective: E}); else {
                        var z = ft();
                        if (w(b)) {
                            g = t.document.createDocumentFragment();
                            var B = ft(), Z = ft();
                            o(b, function (t, e) {
                                var n = "?" === t.charAt(0);
                                t = n ? t.substring(1) : t, B[t] = e, z[e] = null, Z[e] = n
                            }), o(P.contents(), function (e) {
                                var n = B[oe(N(e))];
                                n ? (Z[n] = !0, z[n] = z[n] || t.document.createDocumentFragment(), z[n].appendChild(e)) : g.appendChild(e)
                            }), o(Z, function (t, e) {
                                if (!t) throw wi("reqslot", e)
                            });
                            for (var J in z) z[J] && (I = dr(z[J].childNodes), z[J] = et(U, I, a));
                            g = dr(g.childNodes)
                        } else g = dr(bt(n)).contents();
                        P.empty(), I = et(U, g, a, void 0, void 0, {needsNewScope: m.$$isolateScope || m.$$newScope}), I.$$slots = z
                    }
                    if (m.template) if (A = !0, pt("template", O, m, P), O = m, b = C(m.template) ? m.template(P, r) : m.template, b = It(b), m.replace) {
                        if (u = m, g = Zr.test(b) ? se($t(m.templateNamespace, Tr(b))) : [], n = g[0], 1 !== g.length || 1 !== n.nodeType) throw wi("tplrt", $, "");
                        xt(s, P, n), L = {$attr: {}}, b = K(n, [], L);
                        var Q = e.splice(Y + 1, e.length - (Y + 1));
                        (M || x) && st(b, M, x), e = e.concat(b).concat(Q), lt(r, L), L = e.length
                    } else P.html(b);
                    if (m.templateUrl) A = !0, pt("template", O, m, P), O = m, m.replace && (u = m), p = ht(e.splice(Y, e.length - Y), P, r, s, T && I, c, f, {
                        controllerDirectives: k,
                        newScopeDirective: x !== m && x,
                        newIsolateScopeDirective: M,
                        templateDirective: O,
                        nonTlbTranscludeDirective: E
                    }), L = e.length; else if (m.compile) try {
                        y = m.compile(P, r, I);
                        var nt = m.$$originalDirective || m;
                        C(y) ? d(null, j(nt, y), F, W) : y && d(j(nt, y.pre), j(nt, y.post), F, W)
                    } catch (t) {
                        i(t, G(P))
                    }
                    m.terminal && (p.terminal = !0, _ = Math.max(_, m.priority))
                }
                return p.scope = x && !0 === x.scope, p.transcludeOnThisElement = T, p.templateOnThisElement = A, p.transclude = I, h.hasElementTranscludeDirective = V, p
            }

            function rt(t, e, n, r) {
                var i;
                if (_(e)) {
                    var a = e.match(g);
                    e = e.substring(a[0].length);
                    var s = a[1] || a[3], a = "?" === a[2];
                    if ("^^" === s ? n = n.parent() : i = (i = r && r[e]) && i.instance, !i) {
                        var u = "$" + e + "Controller";
                        i = "^^" === s && n[0] && 9 === n[0].nodeType ? null : s ? n.inheritedData(u) : n.data(u)
                    }
                    if (!i && !a) throw wi("ctreq", e, t)
                } else if (S(e)) for (i = [], s = 0, a = e.length; s < a; s++) i[s] = rt(t, e[s], n, r); else w(e) && (i = {}, o(e, function (e, o) {
                    i[o] = rt(t, e, n, r)
                }));
                return i || null
            }

            function it(t, e, n, r, i, o, a) {
                var s, u = ft();
                for (s in r) {
                    var c = r[s],
                        l = {$scope: c === a || c.$$isolateScope ? i : o, $element: t, $attrs: e, $transclude: n},
                        f = c.controller;
                    "@" === f && (f = e[c.name]), l = $(f, l, !0, c.controllerAs), u[c.name] = l, t.data("$" + c.name + "Controller", l.instance)
                }
                return u
            }

            function st(t, e, n) {
                for (var r = 0, i = t.length; r < i; r++) t[r] = d(t[r], {$$isolateScope: e, $$newScope: n})
            }

            function ut(t, n, i, o, a, s, c) {
                if (n === a) return null;
                var l = null;
                if (u.hasOwnProperty(n)) {
                    a = e.get(n + "Directive");
                    for (var f = 0, h = a.length; f < h; f++) if (n = a[f], (v(o) || o > n.priority) && -1 !== n.restrict.indexOf(i)) {
                        if (s && (n = d(n, {$$start: s, $$end: c})), !n.$$bindings) {
                            var p = l = n, m = n.name, $ = {isolateScope: null, bindToController: null};
                            if (w(p.scope) && (!0 === p.bindToController ? ($.bindToController = r(p.scope, m, !0), $.isolateScope = {}) : $.isolateScope = r(p.scope, m, !1)), w(p.bindToController) && ($.bindToController = r(p.bindToController, m, !0)), $.bindToController && !p.controller) throw wi("noctrl", m);
                            l = l.$$bindings = $, w(l.isolateScope) && (n.$$isolateBindings = l.isolateScope)
                        }
                        t.push(n), l = n
                    }
                }
                return l
            }

            function ct(t) {
                if (u.hasOwnProperty(t)) for (var n = e.get(t + "Directive"), r = 0, i = n.length; r < i; r++) if (t = n[r], t.multiElement) return !0;
                return !1
            }

            function lt(t, e) {
                var n = e.$attr, r = t.$attr;
                o(t, function (r, i) {
                    "$" !== i.charAt(0) && (e[i] && e[i] !== r && (r = r.length ? r + ("style" === i ? ";" : " ") + e[i] : e[i]), t.$set(i, r, !0, n[i]))
                }), o(e, function (e, i) {
                    t.hasOwnProperty(i) || "$" === i.charAt(0) || (t[i] = e, "class" !== i && "style" !== i && (r[i] = n[i]))
                })
            }

            function ht(t, e, n, r, s, u, c, l) {
                var f, h, p = [], m = e[0], $ = t.shift(),
                    g = d($, {templateUrl: null, transclude: null, replace: null, $$originalDirective: $}),
                    v = C($.templateUrl) ? $.templateUrl(e, n) : $.templateUrl, y = $.templateNamespace;
                return e.empty(), a(v).then(function (i) {
                    var a, d;
                    if (i = It(i), $.replace) {
                        if (i = Zr.test(i) ? se($t(y, Tr(i))) : [], a = i[0], 1 !== i.length || 1 !== a.nodeType) throw wi("tplrt", $.name, v);
                        i = {$attr: {}}, xt(r, e, a);
                        var b = K(a, [], i);
                        w($.scope) && st(b, !0), t = b.concat(t), lt(n, i)
                    } else a = m, e.html(i);
                    for (t.unshift(g), f = nt(t, a, n, s, e, $, u, c, l), o(r, function (t, n) {
                        t === a && (r[n] = e[0])
                    }), h = B(e[0].childNodes, s); p.length;) {
                        i = p.shift(), d = p.shift();
                        var _ = p.shift(), x = p.shift(), b = e[0];
                        if (!i.$$destroyed) {
                            if (d !== m) {
                                var k = d.className;
                                l.hasElementTranscludeDirective && $.replace || (b = bt(a)), xt(_, dr(d), b), z(dr(b), k)
                            }
                            d = f.transcludeOnThisElement ? J(i, f.transclude, x) : x, f(h, i, b, r, d)
                        }
                    }
                    p = null
                }).catch(function (t) {
                    M(t) && i(t)
                }), function (t, e, n, r, i) {
                    t = i, e.$$destroyed || (p ? p.push(e, n, r, t) : (f.transcludeOnThisElement && (t = J(e, f.transclude, i)), f(h, e, n, r, t)))
                }
            }

            function dt(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
            }

            function pt(t, e, n, r) {
                function i(t) {
                    return t ? " (module: " + t + ")" : ""
                }

                if (e) throw wi("multidir", e.name, i(e.$$moduleName), n.name, i(n.$$moduleName), t, G(r))
            }

            function mt(t, e) {
                var r = n(e, !0);
                r && t.push({
                    priority: 0, compile: function (t) {
                        t = t.parent();
                        var e = !!t.length;
                        return e && q.$$addBindingClass(t), function (t, n) {
                            var i = n.parent();
                            e || q.$$addBindingClass(i), q.$$addBindingInfo(i, r.expressions), t.$watch(r, function (t) {
                                n[0].nodeValue = t
                            })
                        }
                    }
                })
            }

            function $t(e, n) {
                switch (e = yr(e || "html")) {
                    case"svg":
                    case"math":
                        var r = t.document.createElement("div");
                        return r.innerHTML = "<" + e + ">" + n + "</" + e + ">", r.childNodes[0].childNodes;
                    default:
                        return n
                }
            }

            function gt(t, e) {
                return "srcdoc" === e ? x.HTML : "src" === e || "ngSrc" === e ? -1 === ["img", "video", "audio", "source", "track"].indexOf(t) ? x.RESOURCE_URL : x.MEDIA_URL : "xlinkHref" === e ? "image" === t ? x.MEDIA_URL : "a" === t ? x.URL : x.RESOURCE_URL : "form" === t && "action" === e || "base" === t && "href" === e || "link" === t && "href" === e ? x.RESOURCE_URL : "a" !== t || "href" !== e && "ngHref" !== e ? void 0 : x.URL
            }

            function vt(t, e) {
                var n = e.toLowerCase();
                return R[t + "|" + n] || R["*|" + n]
            }

            function yt(t) {
                return F(x.valueOf(t), "ng-prop-srcset")
            }

            function wt(t, e, n, r) {
                if (b.test(r)) throw wi("nodomevents");
                t = N(t);
                var i = vt(t, r), o = m;
                "srcset" !== r || "img" !== t && "source" !== t ? i && (o = x.getTrusted.bind(x, i)) : o = yt, e.push({
                    priority: 100,
                    compile: function (t, e) {
                        var i = s(e[n]), a = s(e[n], function (t) {
                            return x.valueOf(t)
                        });
                        return {
                            pre: function (t, e) {
                                function n() {
                                    var n = i(t);
                                    e[0][r] = o(n)
                                }

                                n(), t.$watch(a, n)
                            }
                        }
                    }
                })
            }

            function _t(t, e, r, i, o) {
                var a = N(t), s = gt(a, i), u = h[i] || o, c = n(r, !o, s, u);
                if (c) {
                    if ("multiple" === i && "select" === a) throw wi("selmulti", G(t));
                    if (b.test(i)) throw wi("nodomevents");
                    e.push({
                        priority: 100, compile: function () {
                            return {
                                pre: function (t, e, o) {
                                    e = o.$$observers || (o.$$observers = ft());
                                    var a = o[i];
                                    a !== r && (c = a && n(a, !0, s, u), r = a), c && (o[i] = c(t), (e[i] || (e[i] = [])).$$inter = !0, (o.$$observers && o.$$observers[i].$$scope || t).$watch(c, function (t, e) {
                                        "class" === i && t !== e ? o.$updateClass(t, e) : o.$set(i, t)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function xt(e, n, r) {
                var i, o, a = n[0], s = n.length, u = a.parentNode;
                if (e) for (i = 0, o = e.length; i < o; i++) if (e[i] === a) {
                    e[i++] = r, o = i + s - 1;
                    for (var c = e.length; i < c; i++, o++) o < c ? e[i] = e[o] : delete e[i];
                    e.length -= s - 1, e.context === a && (e.context = r);
                    break
                }
                for (u && u.replaceChild(r, a), e = t.document.createDocumentFragment(), i = 0; i < s; i++) e.appendChild(n[i]);
                for (dr.hasData(a) && (dr.data(r, dr.data(a)), dr(a).off("$destroy")), dr.cleanData(e.querySelectorAll("*")), i = 1; i < s; i++) delete n[i];
                n[0] = r, n.length = 1
            }

            function kt(t, e) {
                return l(function () {
                    return t.apply(null, arguments)
                }, t, e)
            }

            function St(t, e, n, r, o, a) {
                try {
                    t(e, n, r, o, a)
                } catch (t) {
                    i(t, G(n))
                }
            }

            function Mt(t, e) {
                if (O) throw wi("missingattr", t, e)
            }

            function Ct(t, e, r, i, a) {
                function u(e, n, i) {
                    C(r.$onChanges) && !U(n, i) && (Ot || (t.$$postDigest(L), Ot = []), l || (l = {}, Ot.push(c)), l[e] && (i = l[e].previousValue), l[e] = new ie(i, n))
                }

                function c() {
                    r.$onChanges(l), l = void 0
                }

                var l, f = [], h = {};
                return o(i, function (i, o) {
                    var c, l, d, m, $ = i.attrName, g = i.optional;
                    switch (i.mode) {
                        case"@":
                            g || vr.call(e, $) || (Mt($, a.name), r[o] = e[$] = void 0), g = e.$observe($, function (t) {
                                (_(t) || T(t)) && (u(o, t, r[o]), r[o] = t)
                            }), e.$$observers[$].$$scope = t, c = e[$], _(c) ? r[o] = n(c)(t) : T(c) && (r[o] = c), h[o] = new ie(bi, r[o]), f.push(g);
                            break;
                        case"=":
                            if (!vr.call(e, $)) {
                                if (g) break;
                                Mt($, a.name), e[$] = void 0
                            }
                            if (g && !e[$]) break;
                            l = s(e[$]), m = l.literal ? Y : U, d = l.assign || function () {
                                throw c = r[o] = l(t), wi("nonassign", e[$], $, a.name)
                            }, c = r[o] = l(t), g = function (e) {
                                return m(e, r[o]) || (m(e, c) ? d(t, e = r[o]) : r[o] = e), c = e
                            }, g.$stateful = !0, g = i.collection ? t.$watchCollection(e[$], g) : t.$watch(s(e[$], g), null, l.literal), f.push(g);
                            break;
                        case"<":
                            if (!vr.call(e, $)) {
                                if (g) break;
                                Mt($, a.name), e[$] = void 0
                            }
                            if (g && !e[$]) break;
                            l = s(e[$]);
                            var v = l.literal, y = r[o] = l(t);
                            h[o] = new ie(bi, r[o]), g = t[i.collection ? "$watchCollection" : "$watch"](l, function (t, e) {
                                if (e === t) {
                                    if (e === y || v && Y(e, y)) return;
                                    e = y
                                }
                                u(o, t, e), r[o] = t
                            }), f.push(g);
                            break;
                        case"&":
                            if (g || vr.call(e, $) || Mt($, a.name), (l = e.hasOwnProperty($) ? s(e[$]) : p) === p && g) break;
                            r[o] = function (e) {
                                return l(t, e)
                            }
                    }
                }), {
                    initialChanges: h, removeWatches: f.length && function () {
                        for (var t = 0, e = f.length; t < e; ++t) f[t]()
                    }
                }
            }

            var Ot, Et = /^\w/, Dt = t.document.createElement("div"), Tt = A, At = V, Vt = E;
            H.prototype = {
                $normalize: oe, $addClass: function (t) {
                    t && 0 < t.length && P.addClass(this.$$element, t)
                }, $removeClass: function (t) {
                    t && 0 < t.length && P.removeClass(this.$$element, t)
                }, $updateClass: function (t, e) {
                    var n = ae(t, e);
                    n && n.length && P.addClass(this.$$element, n), (n = ae(e, t)) && n.length && P.removeClass(this.$$element, n)
                }, $set: function (t, e, n, r) {
                    var a = Yt(this.$$element[0], t), s = ri[t], u = t;
                    a ? (this.$$element.prop(t, e), r = a) : s && (this[s] = e, u = s), this[t] = e, r ? this.$attr[t] = r : (r = this.$attr[t]) || (this.$attr[t] = r = ot(t, "-")), "img" === N(this.$$element) && "srcset" === t && (this[t] = e = F(e, "$set('srcset', value)")), !1 !== n && (null === e || v(e) ? this.$$element.removeAttr(r) : Et.test(r) ? a && !1 === e ? this.$$element.removeAttr(r) : this.$$element.attr(r, e) : W(this.$$element[0], r, e)), (t = this.$$observers) && o(t[u], function (t) {
                        try {
                            t(e)
                        } catch (t) {
                            i(t)
                        }
                    })
                }, $observe: function (t, e) {
                    var n = this, r = n.$$observers || (n.$$observers = ft()), i = r[t] || (r[t] = []);
                    return i.push(e), y.$evalAsync(function () {
                        i.$$inter || !n.hasOwnProperty(t) || v(n[t]) || e(n[t])
                    }), function () {
                        I(i, e)
                    }
                }
            };
            var Pt = n.startSymbol(), Nt = n.endSymbol(), It = "{{" === Pt && "}}" === Nt ? m : function (t) {
                return t.replace(/\{\{/g, Pt).replace(/}}/g, Nt)
            }, Rt = /^ng(Attr|Prop|On)([A-Z].*)$/, Ut = /^(.+)Start$/;
            return q.$$addBindingInfo = k ? function (t, e) {
                var n = t.data("$binding") || [];
                S(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
            } : p, q.$$addBindingClass = k ? function (t) {
                z(t, "ng-binding")
            } : p, q.$$addScopeInfo = k ? function (t, e, n, r) {
                t.data(n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", e)
            } : p, q.$$addScopeClass = k ? function (t, e) {
                z(t, e ? "ng-isolate-scope" : "ng-scope")
            } : p, q.$$createComment = function (e, n) {
                var r = "";
                return k && (r = " " + (e || "") + ": ", n && (r += n + " ")), t.document.createComment(r)
            }, q
        }]
    }

    function ie(t, e) {
        this.previousValue = t, this.currentValue = e
    }

    function oe(t) {
        return t.replace(_i, "").replace(xi, function (t, e, n) {
            return n ? e.toUpperCase() : e
        })
    }

    function ae(t, e) {
        var n = "", r = t.split(/\s+/), i = e.split(/\s+/), o = 0;
        t:for (; o < r.length; o++) {
            for (var a = r[o], s = 0; s < i.length; s++) if (a === i[s]) continue t;
            n += (0 < n.length ? " " : "") + a
        }
        return n
    }

    function se(t) {
        t = dr(t);
        var e = t.length;
        if (1 >= e) return t;
        for (; e--;) {
            var n = t[e];
            (8 === n.nodeType || n.nodeType === Lr && "" === n.nodeValue.trim()) && _r.call(t, e, 1)
        }
        return t
    }

    function ue(t, e) {
        if (e && _(e)) return e;
        if (_(t)) {
            var n = Si.exec(t);
            if (n) return n[3]
        }
    }

    function ce() {
        var t = {};
        this.has = function (e) {
            return t.hasOwnProperty(e)
        }, this.register = function (e, n) {
            ut(e, "controller"), w(e) ? l(t, e) : t[e] = n
        }, this.$get = ["$injector", function (e) {
            function n(t, e, n, i) {
                if (!t || !w(t.$scope)) throw r("$controller")("noscp", i, e);
                t.$scope[e] = n
            }

            return function (r, i, o, a) {
                var s, u, c;
                if (o = !0 === o, a && _(a) && (c = a), _(r)) {
                    if (!(a = r.match(Si))) throw ki("ctrlfmt", r);
                    if (u = a[1], c = c || a[3], !(r = t.hasOwnProperty(u) ? t[u] : ct(i.$scope, u, !0))) throw ki("ctrlreg", u);
                    st(r, u, !0)
                }
                return o ? (o = (S(r) ? r[r.length - 1] : r).prototype, s = Object.create(o || null), c && n(i, c, s, u || r.name), l(function () {
                    var t = e.invoke(r, s, i, u);
                    return t !== s && (w(t) || C(t)) && (s = t, c && n(i, c, s, u || r.name)), s
                }, {instance: s, identifier: c})) : (s = e.instantiate(r, i, u), c && n(i, c, s, u || r.name), s)
            }
        }]
    }

    function le() {
        this.$get = ["$window", function (t) {
            return dr(t.document)
        }]
    }

    function fe() {
        this.$get = ["$document", "$rootScope", function (t, e) {
            function n() {
                i = r.hidden
            }

            var r = t[0], i = r && r.hidden;
            return t.on("visibilitychange", n), e.$on("$destroy", function () {
                t.off("visibilitychange", n)
            }), function () {
                return i
            }
        }]
    }

    function he() {
        this.$get = ["$log", function (t) {
            return function (e, n) {
                t.error.apply(t, arguments)
            }
        }]
    }

    function de(t) {
        return w(t) ? k(t) ? t.toISOString() : H(t) : t
    }

    function pe() {
        this.$get = function () {
            return function (t) {
                if (!t) return "";
                var e = [];
                return a(t, function (t, n) {
                    null === t || v(t) || C(t) || (S(t) ? o(t, function (t) {
                        e.push(X(n) + "=" + X(de(t)))
                    }) : e.push(X(n) + "=" + X(de(t))))
                }), e.join("&")
            }
        }
    }

    function me() {
        this.$get = function () {
            return function (t) {
                function e(t, r, i) {
                    S(t) ? o(t, function (t, n) {
                        e(t, r + "[" + (w(t) ? n : "") + "]")
                    }) : w(t) && !k(t) ? a(t, function (t, n) {
                        e(t, r + (i ? "" : "[") + n + (i ? "" : "]"))
                    }) : (C(t) && (t = t()), n.push(X(r) + "=" + (null == t ? "" : X(de(t)))))
                }

                if (!t) return "";
                var n = [];
                return e(t, "", !0), n.join("&")
            }
        }
    }

    function $e(t, e) {
        if (_(t)) {
            var n = t.replace(Ti, "").trim();
            if (n) {
                var r, i = e("Content-Type"), i = i && 0 === i.indexOf(Ci);
                if ((r = i) || (r = (r = n.match(Ei)) && Di[r[0]].test(n)), r) try {
                    t = W(n)
                } catch (e) {
                    if (!i) return t;
                    throw Ai("baddata", t, e)
                }
            }
        }
        return t
    }

    function ge(t) {
        var e, n = ft();
        return _(t) ? o(t.split("\n"), function (t) {
            e = t.indexOf(":");
            var r = yr(Tr(t.substr(0, e)));
            t = Tr(t.substr(e + 1)), r && (n[r] = n[r] ? n[r] + ", " + t : t)
        }) : w(t) && o(t, function (t, e) {
            var r = yr(e), i = Tr(t);
            r && (n[r] = n[r] ? n[r] + ", " + i : i)
        }), n
    }

    function ve(t) {
        var e;
        return function (n) {
            return e || (e = ge(t)), n ? (n = e[yr(n)], void 0 === n && (n = null), n) : e
        }
    }

    function ye(t, e, n, r) {
        return C(r) ? r(t, e, n) : (o(r, function (r) {
            t = r(t, e, n)
        }), t)
    }

    function we() {
        var t = this.defaults = {
            transformResponse: [$e],
            transformRequest: [function (t) {
                return w(t) && "[object File]" !== kr.call(t) && "[object Blob]" !== kr.call(t) && "[object FormData]" !== kr.call(t) ? H(t) : t
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: pt(Oi), put: pt(Oi), patch: pt(Oi)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer",
            jsonpCallbackParam: "callback"
        }, e = !1;
        this.useApplyAsync = function (t) {
            return y(t) ? (e = !!t, this) : e
        };
        var n = this.interceptors = [], i = this.xsrfWhitelistedOrigins = [];
        this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function (a, s, u, c, f, h, d, m) {
            function $(e) {
                function n(t, e) {
                    for (var n = 0, r = e.length; n < r;) {
                        var i = e[n++], o = e[n++];
                        t = t.then(i, o)
                    }
                    return e.length = 0, t
                }

                function i(t, e) {
                    var n, r = {};
                    return o(t, function (t, i) {
                        C(t) ? null != (n = t(e)) && (r[i] = n) : r[i] = t
                    }), r
                }

                function s(t) {
                    var e = l({}, t);
                    return e.data = ye(t.data, t.headers, t.status, u.transformResponse), t = t.status, 200 <= t && 300 > t ? e : h.reject(e)
                }

                if (!w(e)) throw r("$http")("badreq", e);
                if (!_(m.valueOf(e.url))) throw r("$http")("badreq", e.url);
                var u = l({
                    method: "get",
                    transformRequest: t.transformRequest,
                    transformResponse: t.transformResponse,
                    paramSerializer: t.paramSerializer,
                    jsonpCallbackParam: t.jsonpCallbackParam
                }, e);
                u.headers = function (e) {
                    var n, r, o, a = t.headers, s = l({}, e.headers), a = l({}, a.common, a[yr(e.method)]);
                    t:for (n in a) {
                        r = yr(n);
                        for (o in s) if (yr(o) === r) continue t;
                        s[n] = a[n]
                    }
                    return i(s, pt(e))
                }(e), u.method = wr(u.method), u.paramSerializer = _(u.paramSerializer) ? d.get(u.paramSerializer) : u.paramSerializer, a.$$incOutstandingRequestCount("$http");
                var c = [], f = [];
                return e = h.resolve(u), o(M, function (t) {
                    (t.request || t.requestError) && c.unshift(t.request, t.requestError), (t.response || t.responseError) && f.push(t.response, t.responseError)
                }), e = n(e, c), e = e.then(function (e) {
                    var n = e.headers, r = ye(e.data, ve(n), void 0, e.transformRequest);
                    return v(r) && o(n, function (t, e) {
                        "content-type" === yr(e) && delete n[e]
                    }), v(e.withCredentials) && !v(t.withCredentials) && (e.withCredentials = t.withCredentials), g(e, r).then(s, s)
                }), e = n(e, f), e = e.finally(function () {
                    a.$$completeOutstandingRequest(p, "$http")
                })
            }

            function g(n, r) {
                function i(t) {
                    if (t) {
                        var n = {};
                        return o(t, function (t, r) {
                            n[r] = function (n) {
                                function r() {
                                    t(n)
                                }

                                e ? f.$applyAsync(r) : f.$$phase ? r() : f.$apply(r)
                            }
                        }), n
                    }
                }

                function a(t, n, r, i, o) {
                    function a() {
                        c(n, t, r, i, o)
                    }

                    p && (200 <= t && 300 > t ? p.put(A, [t, n, ge(r), i, o]) : p.remove(A)), e ? f.$applyAsync(a) : (a(), f.$$phase || f.$apply())
                }

                function c(t, e, r, i, o) {
                    e = -1 <= e ? e : 0, (200 <= e && 300 > e ? M.resolve : M.reject)({
                        data: t,
                        status: e,
                        headers: ve(r),
                        config: n,
                        statusText: i,
                        xhrStatus: o
                    })
                }

                function l(t) {
                    c(t.data, t.status, pt(t.headers()), t.statusText, t.xhrStatus)
                }

                function d() {
                    var t = $.pendingRequests.indexOf(n);
                    -1 !== t && $.pendingRequests.splice(t, 1)
                }

                var p, g, M = h.defer(), E = M.promise, D = n.headers, T = "jsonp" === yr(n.method), A = n.url;
                return T ? A = m.getTrustedResourceUrl(A) : _(A) || (A = m.valueOf(A)), A = b(A, n.paramSerializer(n.params)), T && (A = x(A, n.jsonpCallbackParam)), $.pendingRequests.push(n), E.then(d, d), !n.cache && !t.cache || !1 === n.cache || "GET" !== n.method && "JSONP" !== n.method || (p = w(n.cache) ? n.cache : w(t.cache) ? t.cache : k), p && (g = p.get(A), y(g) ? g && C(g.then) ? g.then(l, l) : S(g) ? c(g[1], g[0], pt(g[2]), g[3], g[4]) : c(g, 200, {}, "OK", "complete") : p.put(A, E)), v(g) && ((g = O(n.url) ? u()[n.xsrfCookieName || t.xsrfCookieName] : void 0) && (D[n.xsrfHeaderName || t.xsrfHeaderName] = g), s(n.method, A, r, a, D, n.timeout, n.withCredentials, n.responseType, i(n.eventHandlers), i(n.uploadEventHandlers))), E
            }

            function b(t, e) {
                return 0 < e.length && (t += (-1 === t.indexOf("?") ? "?" : "&") + e), t
            }

            function x(t, e) {
                var n = t.split("?");
                if (2 < n.length) throw Ai("badjsonp", t);
                return n = J(n[1]), o(n, function (n, r) {
                    if ("JSON_CALLBACK" === n) throw Ai("badjsonp", t);
                    if (r === e) throw Ai("badjsonp", e, t)
                }), t += (-1 === t.indexOf("?") ? "?" : "&") + e + "=JSON_CALLBACK"
            }

            var k = c("$http");
            t.paramSerializer = _(t.paramSerializer) ? d.get(t.paramSerializer) : t.paramSerializer;
            var M = [];
            o(n, function (t) {
                M.unshift(_(t) ? d.get(t) : d.invoke(t))
            });
            var O = $n(i);
            return $.pendingRequests = [], function (t) {
                o(arguments, function (t) {
                    $[t] = function (e, n) {
                        return $(l({}, n || {}, {method: t, url: e}))
                    }
                })
            }("get", "delete", "head", "jsonp"), function (t) {
                o(arguments, function (t) {
                    $[t] = function (e, n, r) {
                        return $(l({}, r || {}, {method: t, url: e, data: n}))
                    }
                })
            }("post", "put", "patch"), $.defaults = t, $
        }]
    }

    function be() {
        this.$get = function () {
            return function () {
                return new t.XMLHttpRequest
            }
        }
    }

    function _e() {
        this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (t, e, n, r) {
            return xe(t, r, t.defer, e, n[0])
        }]
    }

    function xe(t, e, n, r, i) {
        function a(t, e, n) {
            t = t.replace("JSON_CALLBACK", e);
            var o = i.createElement("script"), a = null;
            return o.type = "text/javascript", o.src = t, o.async = !0, a = function (t) {
                o.removeEventListener("load", a), o.removeEventListener("error", a), i.body.removeChild(o), o = null;
                var s = -1, u = "unknown";
                t && ("load" !== t.type || r.wasCalled(e) || (t = {type: "error"}), u = t.type, s = "error" === t.type ? 404 : 200), n && n(s, u)
            }, o.addEventListener("load", a), o.addEventListener("error", a), i.body.appendChild(o), a
        }

        return function (i, s, u, c, l, f, h, d, p, m) {
            function $(t) {
                x = "timeout" === t, b && b(), _ && _.abort()
            }

            function g(t, e, r, i, o, a) {
                y(k) && n.cancel(k), b = _ = null, t(e, r, i, o, a)
            }

            if (s = s || t.url(), "jsonp" === yr(i)) var w = r.createCallback(s), b = a(s, w, function (t, e) {
                var n = 200 === t && r.getResponse(w);
                g(c, t, n, "", e, "complete"), r.removeCallback(w)
            }); else {
                var _ = e(i, s), x = !1;
                if (_.open(i, s, !0), o(l, function (t, e) {
                    y(t) && _.setRequestHeader(e, t)
                }), _.onload = function () {
                    var t = _.statusText || "", e = "response" in _ ? _.response : _.responseText,
                        n = 1223 === _.status ? 204 : _.status;
                    0 === n && (n = e ? 200 : "file" === mn(s).protocol ? 404 : 0), g(c, n, e, _.getAllResponseHeaders(), t, "complete")
                }, _.onerror = function () {
                    g(c, -1, null, null, "", "error")
                }, _.ontimeout = function () {
                    g(c, -1, null, null, "", "timeout")
                }, _.onabort = function () {
                    g(c, -1, null, null, "", x ? "timeout" : "abort")
                }, o(p, function (t, e) {
                    _.addEventListener(e, t)
                }), o(m, function (t, e) {
                    _.upload.addEventListener(e, t)
                }), h && (_.withCredentials = !0), d) try {
                    _.responseType = d
                } catch (t) {
                    if ("json" !== d) throw t
                }
                _.send(v(u) ? null : u)
            }
            if (0 < f) var k = n(function () {
                $("timeout")
            }, f); else f && C(f.then) && f.then(function () {
                $(y(f.$$timeoutId) ? "timeout" : "abort")
            })
        }
    }

    function ke() {
        var t = "{{", e = "}}";
        this.startSymbol = function (e) {
            return e ? (t = e, this) : t
        }, this.endSymbol = function (t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, r, i) {
            function o(t) {
                return "\\\\\\" + t
            }

            function a(n) {
                return n.replace(h, t).replace(d, e)
            }

            function s(t, e, n, r) {
                var i = t.$watch(function (t) {
                    return i(), r(t)
                }, e, n);
                return i
            }

            function u(o, u, h, d) {
                function p(t) {
                    try {
                        return t = h && !m ? i.getTrusted(h, t) : i.valueOf(t), d && !y(t) ? t : ht(t)
                    } catch (t) {
                        r(Vi.interr(o, t))
                    }
                }

                var m = h === i.URL || h === i.MEDIA_URL;
                if (!o.length || -1 === o.indexOf(t)) {
                    if (u) return;
                    return u = a(o), m && (u = i.getTrusted(h, u)), u = $(u), u.exp = o, u.expressions = [], u.$$watchDelegate = s, u
                }
                d = !!d;
                for (var g, w, b, _, x = 0, k = [], S = o.length, M = [], C = []; x < S;) {
                    if (-1 === (g = o.indexOf(t, x)) || -1 === (w = o.indexOf(e, g + c))) {
                        x !== S && M.push(a(o.substring(x)));
                        break
                    }
                    x !== g && M.push(a(o.substring(x, g))), x = o.substring(g + c, w), k.push(x), x = w + f, C.push(M.length), M.push("")
                }
                _ = 1 === M.length && 1 === C.length;
                var O = m && _ ? void 0 : p;
                if (b = k.map(function (t) {
                    return n(t, O)
                }), !u || k.length) {
                    var E = function (t) {
                        for (var e = 0, n = k.length; e < n; e++) {
                            if (d && v(t[e])) return;
                            M[C[e]] = t[e]
                        }
                        return m ? i.getTrusted(h, _ ? M[0] : M.join("")) : (h && 1 < M.length && Vi.throwNoconcat(o), M.join(""))
                    };
                    return l(function (t) {
                        var e = 0, n = k.length, i = Array(n);
                        try {
                            for (; e < n; e++) i[e] = b[e](t);
                            return E(i)
                        } catch (t) {
                            r(Vi.interr(o, t))
                        }
                    }, {
                        exp: o, expressions: k, $$watchDelegate: function (t, e) {
                            var n;
                            return t.$watchGroup(b, function (r, i) {
                                var o = E(r);
                                e.call(this, o, r !== i ? n : o, t), n = o
                            })
                        }
                    })
                }
            }

            var c = t.length, f = e.length, h = new RegExp(t.replace(/./g, o), "g"),
                d = new RegExp(e.replace(/./g, o), "g");
            return u.startSymbol = function () {
                return t
            }, u.endSymbol = function () {
                return e
            }, u
        }]
    }

    function Se() {
        this.$get = ["$$intervalFactory", "$window", function (t, e) {
            var n = {}, r = function (t) {
                e.clearInterval(t), delete n[t]
            }, i = t(function (t, r, i) {
                return t = e.setInterval(t, r), n[t] = i, t
            }, r);
            return i.cancel = function (t) {
                if (!t) return !1;
                if (!t.hasOwnProperty("$$intervalId")) throw Pi("badprom");
                if (!n.hasOwnProperty(t.$$intervalId)) return !1;
                t = t.$$intervalId;
                var e = n[t], i = e.promise;
                return i.$$state && (i.$$state.pur = !0), e.reject("canceled"), r(t), !0
            }, i
        }]
    }

    function Me() {
        this.$get = ["$browser", "$q", "$$q", "$rootScope", function (t, e, n, r) {
            return function (i, o) {
                return function (a, s, u, c) {
                    function l() {
                        f ? a.apply(null, h) : a(d)
                    }

                    var f = 4 < arguments.length, h = f ? br.call(arguments, 4) : [], d = 0, p = y(c) && !c,
                        m = (p ? n : e).defer(), $ = m.promise;
                    return u = y(u) ? u : 0, $.$$intervalId = i(function () {
                        p ? t.defer(l) : r.$evalAsync(l), m.notify(d++), 0 < u && d >= u && (m.resolve(d), o($.$$intervalId)), p || r.$apply()
                    }, s, m, p), $
                }
            }
        }]
    }

    function Ce(t, e) {
        var n = mn(t);
        e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = h(n.port) || Ri[n.protocol] || null
    }

    function Oe(t, e, n) {
        if (Yi.test(t)) throw Ui("badpath", t);
        var r = "/" !== t.charAt(0);
        r && (t = "/" + t), t = mn(t);
        for (var r = (r && "/" === t.pathname.charAt(0) ? t.pathname.substring(1) : t.pathname).split("/"), i = r.length; i--;) r[i] = decodeURIComponent(r[i]), n && (r[i] = r[i].replace(/\//g, "%2F"));
        n = r.join("/"), e.$$path = n, e.$$search = J(t.search), e.$$hash = decodeURIComponent(t.hash), e.$$path && "/" !== e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
    }

    function Ee(t, e) {
        return t.slice(0, e.length) === e
    }

    function De(t, e) {
        if (Ee(e, t)) return e.substr(t.length)
    }

    function Te(t) {
        var e = t.indexOf("#");
        return -1 === e ? t : t.substr(0, e)
    }

    function Ae(t, e, n) {
        this.$$html5 = !0, n = n || "", Ce(t, this), this.$$parse = function (t) {
            var n = De(e, t);
            if (!_(n)) throw Ui("ipthprfx", t, e);
            Oe(n, this, !0), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$normalizeUrl = function (t) {
            return e + t.substr(1)
        }, this.$$parseLinkUrl = function (r, i) {
            if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
            var o, a;
            return y(o = De(t, r)) ? (a = o, a = n && y(o = De(n, o)) ? e + (De("/", o) || o) : t + a) : y(o = De(e, r)) ? a = e + o : e === r + "/" && (a = e), a && this.$$parse(a), !!a
        }
    }

    function Ve(t, e, n) {
        Ce(t, this), this.$$parse = function (r) {
            var i, o = De(t, r) || De(e, r);
            v(o) || "#" !== o.charAt(0) ? this.$$html5 ? i = o : (i = "", v(o) && (t = r, this.replace())) : (i = De(n, o), v(i) && (i = o)), Oe(i, this, !1), r = this.$$path;
            var o = t, a = /^\/[A-Z]:(\/.*)/;
            Ee(i, o) && (i = i.replace(o, "")), a.exec(i) || (r = (i = a.exec(r)) ? i[1] : r), this.$$path = r, this.$$compose()
        }, this.$$normalizeUrl = function (e) {
            return t + (e ? n + e : "")
        }, this.$$parseLinkUrl = function (e, n) {
            return Te(t) === Te(e) && (this.$$parse(e), !0)
        }
    }

    function Pe(t, e, n) {
        this.$$html5 = !0, Ve.apply(this, arguments), this.$$parseLinkUrl = function (r, i) {
            if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
            var o, a;
            return t === Te(r) ? o = r : (a = De(e, r)) ? o = t + n + a : e === r + "/" && (o = e), o && this.$$parse(o), !!o
        }, this.$$normalizeUrl = function (e) {
            return t + n + e
        }
    }

    function Ne(t) {
        return function () {
            return this[t]
        }
    }

    function Ie(t, e) {
        return function (n) {
            return v(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
        }
    }

    function Re() {
        var t = "!", e = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (e) {
            return y(e) ? (t = e, this) : t
        }, this.html5Mode = function (t) {
            return T(t) ? (e.enabled = t, this) : w(t) ? (T(t.enabled) && (e.enabled = t.enabled), T(t.requireBase) && (e.requireBase = t.requireBase), (T(t.rewriteLinks) || _(t.rewriteLinks)) && (e.rewriteLinks = t.rewriteLinks), this) : e
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, r, i, o, a) {
            function s(t, e) {
                return t === e || mn(t).href === mn(e).href
            }

            function u(t, e, n) {
                var i = l.url(), o = l.$$state;
                try {
                    r.url(t, e, n), l.$$state = r.state()
                } catch (t) {
                    throw l.url(i), l.$$state = o, t
                }
            }

            function c(t, e) {
                n.$broadcast("$locationChangeSuccess", l.absUrl(), t, l.$$state, e)
            }

            var l, f;
            f = r.baseHref();
            var h, d = r.url();
            if (e.enabled) {
                if (!f && e.requireBase) throw Ui("nobase");
                h = d.substring(0, d.indexOf("/", d.indexOf("//") + 2)) + (f || "/"), f = i.history ? Ae : Pe
            } else h = Te(d), f = Ve;
            var p = h.substr(0, Te(h).lastIndexOf("/") + 1);
            l = new f(h, p, "#" + t), l.$$parseLinkUrl(d, d), l.$$state = r.state();
            var m = /^\s*(javascript|mailto):/i;
            o.on("click", function (t) {
                var i = e.rewriteLinks;
                if (i && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 !== t.which && 2 !== t.button) {
                    for (var a = dr(t.target); "a" !== N(a[0]);) if (a[0] === o[0] || !(a = a.parent())[0]) return;
                    if (!_(i) || !v(a.attr(i))) {
                        var i = a.prop("href"), s = a.attr("href") || a.attr("xlink:href");
                        w(i) && "[object SVGAnimatedString]" === i.toString() && (i = mn(i.animVal).href), m.test(i) || !i || a.attr("target") || t.isDefaultPrevented() || !l.$$parseLinkUrl(i, s) || (t.preventDefault(), l.absUrl() !== r.url() && n.$apply())
                    }
                }
            }), l.absUrl() !== d && r.url(l.absUrl(), !0);
            var $ = !0;
            return r.onUrlChange(function (t, e) {
                Ee(t, p) ? (n.$evalAsync(function () {
                    var r, i = l.absUrl(), o = l.$$state;
                    l.$$parse(t), l.$$state = e, r = n.$broadcast("$locationChangeStart", t, i, e, o).defaultPrevented, l.absUrl() === t && (r ? (l.$$parse(i), l.$$state = o, u(i, !1, o)) : ($ = !1, c(i, o)))
                }), n.$$phase || n.$digest()) : a.location.href = t
            }), n.$watch(function () {
                if ($ || l.$$urlUpdatedByLocation) {
                    l.$$urlUpdatedByLocation = !1;
                    var t = r.url(), e = l.absUrl(), o = r.state(), a = l.$$replace,
                        f = !s(t, e) || l.$$html5 && i.history && o !== l.$$state;
                    ($ || f) && ($ = !1, n.$evalAsync(function () {
                        var e = l.absUrl(),
                            r = n.$broadcast("$locationChangeStart", e, t, l.$$state, o).defaultPrevented;
                        l.absUrl() === e && (r ? (l.$$parse(t), l.$$state = o) : (f && u(e, a, o === l.$$state ? null : l.$$state), c(t, o)))
                    }))
                }
                l.$$replace = !1
            }), l
        }]
    }

    function Ue() {
        var t = !0, e = this;
        this.debugEnabled = function (e) {
            return y(e) ? (t = e, this) : t
        }, this.$get = ["$window", function (n) {
            function r(t) {
                return M(t) && (t.stack && a ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
            }

            function i(t) {
                var e = n.console || {}, i = e[t] || e.log || p;
                return function () {
                    var t = [];
                    return o(arguments, function (e) {
                        t.push(r(e))
                    }), Function.prototype.apply.call(i, e, t)
                }
            }

            var a = hr || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
            return {
                log: i("log"), info: i("info"), warn: i("warn"), error: i("error"), debug: function () {
                    var n = i("debug");
                    return function () {
                        t && n.apply(e, arguments)
                    }
                }()
            }
        }]
    }

    function Ye(t) {
        return t + ""
    }

    function Le(t, e) {
        return void 0 !== t ? t : e
    }

    function je(t, e) {
        return void 0 === t ? e : void 0 === e ? t : t + e
    }

    function Fe(t, e) {
        switch (t.type) {
            case qi.MemberExpression:
                if (t.computed) return !1;
                break;
            case qi.UnaryExpression:
                return 1;
            case qi.BinaryExpression:
                return "+" !== t.operator && 1;
            case qi.CallExpression:
                return !1
        }
        return void 0 === e ? Bi : e
    }

    function He(t, e, n) {
        var r, i, a = t.isPure = Fe(t, n);
        switch (t.type) {
            case qi.Program:
                r = !0, o(t.body, function (t) {
                    He(t.expression, e, a), r = r && t.expression.constant
                }), t.constant = r;
                break;
            case qi.Literal:
                t.constant = !0, t.toWatch = [];
                break;
            case qi.UnaryExpression:
                He(t.argument, e, a), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch;
                break;
            case qi.BinaryExpression:
                He(t.left, e, a), He(t.right, e, a), t.constant = t.left.constant && t.right.constant, t.toWatch = t.left.toWatch.concat(t.right.toWatch);
                break;
            case qi.LogicalExpression:
                He(t.left, e, a), He(t.right, e, a), t.constant = t.left.constant && t.right.constant, t.toWatch = t.constant ? [] : [t];
                break;
            case qi.ConditionalExpression:
                He(t.test, e, a), He(t.alternate, e, a), He(t.consequent, e, a), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, t.toWatch = t.constant ? [] : [t];
                break;
            case qi.Identifier:
                t.constant = !1, t.toWatch = [t];
                break;
            case qi.MemberExpression:
                He(t.object, e, a), t.computed && He(t.property, e, a), t.constant = t.object.constant && (!t.computed || t.property.constant), t.toWatch = t.constant ? [] : [t];
                break;
            case qi.CallExpression:
                r = n = !!t.filter && !e(t.callee.name).$stateful, i = [], o(t.arguments, function (t) {
                    He(t, e, a), r = r && t.constant, i.push.apply(i, t.toWatch)
                }), t.constant = r, t.toWatch = n ? i : [t];
                break;
            case qi.AssignmentExpression:
                He(t.left, e, a), He(t.right, e, a), t.constant = t.left.constant && t.right.constant, t.toWatch = [t];
                break;
            case qi.ArrayExpression:
                r = !0, i = [], o(t.elements, function (t) {
                    He(t, e, a), r = r && t.constant, i.push.apply(i, t.toWatch)
                }), t.constant = r, t.toWatch = i;
                break;
            case qi.ObjectExpression:
                r = !0, i = [], o(t.properties, function (t) {
                    He(t.value, e, a), r = r && t.value.constant, i.push.apply(i, t.value.toWatch), t.computed && (He(t.key, e, !1), r = r && t.key.constant, i.push.apply(i, t.key.toWatch))
                }), t.constant = r, t.toWatch = i;
                break;
            case qi.ThisExpression:
                t.constant = !1, t.toWatch = [];
                break;
            case qi.LocalsExpression:
                t.constant = !1, t.toWatch = []
        }
    }

    function We(t) {
        if (1 === t.length) {
            t = t[0].expression;
            var e = t.toWatch;
            return 1 !== e.length ? e : e[0] !== t ? e : void 0
        }
    }

    function ze(t) {
        return t.type === qi.Identifier || t.type === qi.MemberExpression
    }

    function qe(t) {
        if (1 === t.body.length && ze(t.body[0].expression)) return {
            type: qi.AssignmentExpression,
            left: t.body[0].expression,
            right: {type: qi.NGValueParameter},
            operator: "="
        }
    }

    function Be(t) {
        this.$filter = t
    }

    function Ge(t) {
        this.$filter = t
    }

    function Ze(t, e, n) {
        this.ast = new qi(t, n), this.astCompiler = n.csp ? new Ge(e) : new Be(e)
    }

    function Je(t) {
        return C(t.valueOf) ? t.valueOf() : Fi.call(t)
    }

    function Ke() {
        var t, e, n = ft(), r = {true: !0, false: !1, null: null, undefined: void 0};
        this.addLiteral = function (t, e) {
            r[t] = e
        }, this.setIdentifierFns = function (n, r) {
            return t = n, e = r, this
        }, this.$get = ["$filter", function (i) {
            function a(t, e) {
                var r, o;
                switch (typeof t) {
                    case"string":
                        return o = t = t.trim(), r = n[o], r || (r = new zi(g), r = new Ze(r, i, g).parse(t), n[o] = h(r)), $(r, e);
                    case"function":
                        return $(t, e);
                    default:
                        return $(p, e)
                }
            }

            function s(t, e, n) {
                return null == t || null == e ? t === e : !("object" == typeof t && "object" == typeof (t = Je(t)) && !n) && (t === e || t !== t && e !== e)
            }

            function u(t, e, n, r, i) {
                var o, a = r.inputs;
                if (1 === a.length) {
                    var u = s, a = a[0];
                    return t.$watch(function (t) {
                        var e = a(t);
                        return s(e, u, a.isPure) || (o = r(t, void 0, void 0, [e]), u = e && Je(e)), o
                    }, e, n, i)
                }
                for (var c = [], l = [], f = 0, h = a.length; f < h; f++) c[f] = s, l[f] = null;
                return t.$watch(function (t) {
                    for (var e = !1, n = 0, i = a.length; n < i; n++) {
                        var u = a[n](t);
                        (e || (e = !s(u, c[n], a[n].isPure))) && (l[n] = u, c[n] = u && Je(u))
                    }
                    return e && (o = r(t, void 0, void 0, l)), o
                }, e, n, i)
            }

            function c(t, e, n, r, i) {
                function o() {
                    c(u) && s()
                }

                function a(t, e, n, r) {
                    return u = p && r ? r[0] : f(t, e, n, r), c(u) && t.$$postDigest(o), d(u)
                }

                var s, u, c = r.literal ? l : y, f = r.$$intercepted || r, d = r.$$interceptor || m,
                    p = r.inputs && !f.inputs;
                return a.literal = r.literal, a.constant = r.constant, a.inputs = r.inputs, h(a), s = t.$watch(a, e, n, i)
            }

            function l(t) {
                var e = !0;
                return o(t, function (t) {
                    y(t) || (e = !1)
                }), e
            }

            function f(t, e, n, r) {
                var i = t.$watch(function (t) {
                    return i(), r(t)
                }, e, n);
                return i
            }

            function h(t) {
                return t.constant ? t.$$watchDelegate = f : t.oneTime ? t.$$watchDelegate = c : t.inputs && (t.$$watchDelegate = u), t
            }

            function d(t, e) {
                function n(n) {
                    return e(t(n))
                }

                return n.$stateful = t.$stateful || e.$stateful, n.$$pure = t.$$pure && e.$$pure, n
            }

            function $(t, e) {
                if (!e) return t;
                t.$$interceptor && (e = d(t.$$interceptor, e), t = t.$$intercepted);
                var n = !1, r = function (r, i, o, a) {
                    return r = n && a ? a[0] : t(r, i, o, a), e(r)
                };
                return r.$$intercepted = t, r.$$interceptor = e, r.literal = t.literal, r.oneTime = t.oneTime, r.constant = t.constant, e.$stateful || (n = !t.inputs, r.inputs = t.inputs ? t.inputs : [t], e.$$pure || (r.inputs = r.inputs.map(function (t) {
                    return t.isPure === Bi ? function (e) {
                        return t(e)
                    } : t
                }))), h(r)
            }

            var g = {
                csp: Vr().noUnsafeEval,
                literals: R(r),
                isIdentifierStart: C(t) && t,
                isIdentifierContinue: C(e) && e
            };
            return a.$$getAst = function (t) {
                return new Ze(new zi(g), i, g).getAst(t).ast
            }, a
        }]
    }

    function Qe() {
        var t = !0;
        this.$get = ["$rootScope", "$exceptionHandler", function (e, n) {
            return tn(function (t) {
                e.$evalAsync(t)
            }, n, t)
        }], this.errorOnUnhandledRejections = function (e) {
            return y(e) ? (t = e, this) : t
        }
    }

    function Xe() {
        var t = !0;
        this.$get = ["$browser", "$exceptionHandler", function (e, n) {
            return tn(function (t) {
                e.defer(t)
            }, n, t)
        }], this.errorOnUnhandledRejections = function (e) {
            return y(e) ? (t = e, this) : t
        }
    }

    function tn(t, e, n) {
        function i() {
            return new a
        }

        function a() {
            var t = this.promise = new s;
            this.resolve = function (e) {
                f(t, e)
            }, this.reject = function (e) {
                d(t, e)
            }, this.notify = function (e) {
                m(t, e)
            }
        }

        function s() {
            this.$$state = {status: 0}
        }

        function u() {
            for (; !x && k.length;) {
                var t = k.shift();
                if (!t.pur) {
                    t.pur = !0;
                    var n = t.value,
                        n = "Possibly unhandled rejection: " + ("function" == typeof n ? n.toString().replace(/ \{[\s\S]*$/, "") : v(n) ? "undefined" : "string" != typeof n ? mt(n, void 0) : n);
                    M(t.value) ? e(t.value, n) : e(n)
                }
            }
        }

        function c(r) {
            !n || r.pending || 2 !== r.status || r.pur || (0 === x && 0 === k.length && t(u), k.push(r)), !r.processScheduled && r.pending && (r.processScheduled = !0, ++x, t(function () {
                var i, o, a;
                a = r.pending, r.processScheduled = !1, r.pending = void 0;
                try {
                    for (var s = 0, c = a.length; s < c; ++s) {
                        r.pur = !0, o = a[s][0], i = a[s][r.status];
                        try {
                            C(i) ? f(o, i(r.value)) : 1 === r.status ? f(o, r.value) : d(o, r.value)
                        } catch (t) {
                            d(o, t), t && !0 === t.$$passToExceptionHandler && e(t)
                        }
                    }
                } finally {
                    --x, n && 0 === x && t(u)
                }
            }))
        }

        function f(t, e) {
            t.$$state.status || (e === t ? p(t, _("qcycle", e)) : h(t, e))
        }

        function h(t, e) {
            function n(e) {
                a || (a = !0, h(t, e))
            }

            function r(e) {
                a || (a = !0, p(t, e))
            }

            function i(e) {
                m(t, e)
            }

            var o, a = !1;
            try {
                (w(e) || C(e)) && (o = e.then), C(o) ? (t.$$state.status = -1, o.call(e, n, r, i)) : (t.$$state.value = e, t.$$state.status = 1, c(t.$$state))
            } catch (t) {
                r(t)
            }
        }

        function d(t, e) {
            t.$$state.status || p(t, e)
        }

        function p(t, e) {
            t.$$state.value = e, t.$$state.status = 2, c(t.$$state)
        }

        function m(n, r) {
            var i = n.$$state.pending;
            0 >= n.$$state.status && i && i.length && t(function () {
                for (var t, n, o = 0, a = i.length; o < a; o++) {
                    n = i[o][0], t = i[o][3];
                    try {
                        m(n, C(t) ? t(r) : r)
                    } catch (t) {
                        e(t)
                    }
                }
            })
        }

        function $(t) {
            var e = new s;
            return d(e, t), e
        }

        function g(t, e, n) {
            var r = null;
            try {
                C(n) && (r = n())
            } catch (t) {
                return $(t)
            }
            return r && C(r.then) ? r.then(function () {
                return e(t)
            }, $) : e(t)
        }

        function y(t, e, n, r) {
            var i = new s;
            return f(i, t), i.then(e, n, r)
        }

        function b(t) {
            if (!C(t)) throw _("norslvr", t);
            var e = new s;
            return t(function (t) {
                f(e, t)
            }, function (t) {
                d(e, t)
            }), e
        }

        var _ = r("$q", TypeError), x = 0, k = [];
        l(s.prototype, {
            then: function (t, e, n) {
                if (v(t) && v(e) && v(n)) return this;
                var r = new s;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, t, e, n]), 0 < this.$$state.status && c(this.$$state), r
            }, catch: function (t) {
                return this.then(null, t)
            }, finally: function (t, e) {
                return this.then(function (e) {
                    return g(e, O, t)
                }, function (e) {
                    return g(e, $, t)
                }, e)
            }
        });
        var O = y;
        return b.prototype = s.prototype, b.defer = i, b.reject = $, b.when = y, b.resolve = O, b.all = function (t) {
            var e = new s, n = 0, r = S(t) ? [] : {};
            return o(t, function (t, i) {
                n++, y(t).then(function (t) {
                    r[i] = t, --n || f(e, r)
                }, function (t) {
                    d(e, t)
                })
            }), 0 === n && f(e, r), e
        }, b.race = function (t) {
            var e = i();
            return o(t, function (t) {
                y(t).then(e.resolve, e.reject)
            }), e.promise
        }, b
    }

    function en() {
        this.$get = ["$window", "$timeout", function (t, e) {
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
                r = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
                i = !!n, o = i ? function (t) {
                    var e = n(t);
                    return function () {
                        r(e)
                    }
                } : function (t) {
                    var n = e(t, 16.66, !1);
                    return function () {
                        e.cancel(n)
                    }
                };
            return o.supported = i, o
        }]
    }

    function nn() {
        function t(t) {
            function e() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = ++Or, this.$$ChildScope = null, this.$$suspended = !1
            }

            return e.prototype = t, e
        }

        var e = 10, n = r("$rootScope"), a = null, s = null;
        this.digestTtl = function (t) {
            return arguments.length && (e = t), e
        }, this.$get = ["$exceptionHandler", "$parse", "$browser", function (r, u, c) {
            function l(t) {
                t.currentScope.$$destroyed = !0
            }

            function f(t) {
                9 === hr && (t.$$childHead && f(t.$$childHead), t.$$nextSibling && f(t.$$nextSibling)), t.$parent = t.$$nextSibling = t.$$prevSibling = t.$$childHead = t.$$childTail = t.$root = t.$$watchers = null
            }

            function h() {
                this.$id = ++Or, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$suspended = this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function d(t) {
                if (_.$$phase) throw n("inprog", _.$$phase);
                _.$$phase = t
            }

            function m(t, e) {
                do {
                    t.$$watchersCount += e
                } while (t = t.$parent)
            }

            function $(t, e, n) {
                do {
                    t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]
                } while (t = t.$parent)
            }

            function g() {
            }

            function y() {
                for (; S.length;) try {
                    S.shift()()
                } catch (t) {
                    r(t)
                }
                s = null
            }

            function b() {
                null === s && (s = c.defer(function () {
                    _.$apply(y)
                }, null, "$applyAsync"))
            }

            h.prototype = {
                constructor: h, $new: function (e, n) {
                    var r;
                    return n = n || this, e ? (r = new h, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = t(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (e || n !== this) && r.$on("$destroy", l), r
                }, $watch: function (t, e, n, r) {
                    var i = u(t);
                    if (e = C(e) ? e : p, i.$$watchDelegate) return i.$$watchDelegate(this, e, n, i, t);
                    var o = this, s = o.$$watchers, c = {fn: e, last: g, get: i, exp: r || t, eq: !!n};
                    return a = null, s || (s = o.$$watchers = [], s.$$digestWatchIndex = -1), s.unshift(c), s.$$digestWatchIndex++, m(this, 1), function () {
                        var t = I(s, c);
                        0 <= t && (m(o, -1), t < s.$$digestWatchIndex && s.$$digestWatchIndex--), a = null
                    }
                }, $watchGroup: function (t, e) {
                    function n() {
                        u = !1;
                        try {
                            c ? (c = !1, e(i, i, s)) : e(i, r, s)
                        } finally {
                            for (var n = 0; n < t.length; n++) r[n] = i[n]
                        }
                    }

                    var r = Array(t.length), i = Array(t.length), a = [], s = this, u = !1, c = !0;
                    if (!t.length) {
                        var l = !0;
                        return s.$evalAsync(function () {
                            l && e(i, i, s)
                        }), function () {
                            l = !1
                        }
                    }
                    return 1 === t.length ? this.$watch(t[0], function (t, n, o) {
                        i[0] = t, r[0] = n, e(i, t === n ? i : r, o)
                    }) : (o(t, function (t, e) {
                        var r = s.$watch(t, function (t) {
                            i[e] = t, u || (u = !0, s.$evalAsync(n))
                        });
                        a.push(r)
                    }), function () {
                        for (; a.length;) a.shift()()
                    })
                }, $watchCollection: function (t, e) {
                    function n(t) {
                        r = t;
                        var e, n, a;
                        if (!v(r)) {
                            if (w(r)) if (i(r)) for (o !== h && (o = h, m = o.length = 0, l++), t = r.length, m !== t && (l++, o.length = m = t), e = 0; e < t; e++) a = o[e], n = r[e], a !== a && n !== n || a === n || (l++, o[e] = n); else {
                                o !== d && (o = d = {}, m = 0, l++), t = 0;
                                for (e in r) vr.call(r, e) && (t++, n = r[e], a = o[e], e in o ? a !== a && n !== n || a === n || (l++, o[e] = n) : (m++, o[e] = n, l++));
                                if (m > t) for (e in l++, o) vr.call(r, e) || (m--, delete o[e])
                            } else o !== r && (o = r, l++);
                            return l
                        }
                    }

                    n.$$pure = u(t).literal, n.$stateful = !n.$$pure;
                    var r, o, a, s = this, c = 1 < e.length, l = 0, f = u(t, n), h = [], d = {}, p = !0, m = 0;
                    return this.$watch(f, function () {
                        if (p ? (p = !1, e(r, r, s)) : e(r, a, s), c) if (w(r)) if (i(r)) {
                            a = Array(r.length);
                            for (var t = 0; t < r.length; t++) a[t] = r[t]
                        } else for (t in a = {}, r) vr.call(r, t) && (a[t] = r[t]); else a = r
                    })
                }, $digest: function () {
                    var t, i, o, u, l, f, h, p, m, $, v = e, w = x.length ? _ : this, b = [];
                    d("$digest"), c.$$checkUrlChange(), this === _ && null !== s && (c.defer.cancel(s), y()), a = null;
                    do {
                        for (h = !1, p = w, f = 0; f < x.length; f++) {
                            try {
                                $ = x[f], (u = $.fn)($.scope, $.locals)
                            } catch (t) {
                                r(t)
                            }
                            a = null
                        }
                        x.length = 0;
                        t:do {
                            if (f = !p.$$suspended && p.$$watchers) for (f.$$digestWatchIndex = f.length; f.$$digestWatchIndex--;) try {
                                if (t = f[f.$$digestWatchIndex]) if (l = t.get, (i = l(p)) === (o = t.last) || (t.eq ? Y(i, o) : Er(i) && Er(o))) {
                                    if (t === a) {
                                        h = !1;
                                        break t
                                    }
                                } else h = !0, a = t, t.last = t.eq ? R(i, null) : i, u = t.fn, u(i, o === g ? i : o, p), 5 > v && (m = 4 - v, b[m] || (b[m] = []), b[m].push({
                                    msg: C(t.exp) ? "fn: " + (t.exp.name || t.exp.toString()) : t.exp,
                                    newVal: i,
                                    oldVal: o
                                }))
                            } catch (t) {
                                r(t)
                            }
                            if (!(f = !p.$$suspended && p.$$watchersCount && p.$$childHead || p !== w && p.$$nextSibling)) for (; p !== w && !(f = p.$$nextSibling);) p = p.$parent
                        } while (p = f);
                        if ((h || x.length) && !v--) throw _.$$phase = null, n("infdig", e, b)
                    } while (h || x.length);
                    for (_.$$phase = null; M < k.length;) try {
                        k[M++]()
                    } catch (t) {
                        r(t)
                    }
                    k.length = M = 0, c.$$checkUrlChange()
                }, $suspend: function () {
                    this.$$suspended = !0
                }, $isSuspended: function () {
                    return this.$$suspended
                }, $resume: function () {
                    this.$$suspended = !1
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var t = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === _ && c.$$applicationDestroyed(), m(this, -this.$$watchersCount);
                        for (var e in this.$$listenerCount) $(this, this.$$listenerCount[e], e);
                        t && t.$$childHead === this && (t.$$childHead = this.$$nextSibling), t && t.$$childTail === this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = p, this.$on = this.$watch = this.$watchGroup = function () {
                            return p
                        }, this.$$listeners = {}, this.$$nextSibling = null, f(this)
                    }
                }, $eval: function (t, e) {
                    return u(t)(this, e)
                }, $evalAsync: function (t, e) {
                    _.$$phase || x.length || c.defer(function () {
                        x.length && _.$digest()
                    }, null, "$evalAsync"), x.push({scope: this, fn: u(t), locals: e})
                }, $$postDigest: function (t) {
                    k.push(t)
                }, $apply: function (t) {
                    try {
                        d("$apply");
                        try {
                            return this.$eval(t)
                        } finally {
                            _.$$phase = null
                        }
                    } catch (t) {
                        r(t)
                    } finally {
                        try {
                            _.$digest()
                        } catch (t) {
                            throw r(t), t
                        }
                    }
                }, $applyAsync: function (t) {
                    function e() {
                        n.$eval(t)
                    }

                    var n = this;
                    t && S.push(e), t = u(t), b()
                }, $on: function (t, e) {
                    var n = this.$$listeners[t];
                    n || (this.$$listeners[t] = n = []), n.push(e);
                    var r = this;
                    do {
                        r.$$listenerCount[t] || (r.$$listenerCount[t] = 0), r.$$listenerCount[t]++
                    } while (r = r.$parent);
                    var i = this;
                    return function () {
                        var r = n.indexOf(e);
                        -1 !== r && (delete n[r], $(i, 1, t))
                    }
                }, $emit: function (t, e) {
                    var n, i, o, a = [], s = this, u = !1, c = {
                        name: t, targetScope: s, stopPropagation: function () {
                            u = !0
                        }, preventDefault: function () {
                            c.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, l = L([c], arguments, 1);
                    do {
                        for (n = s.$$listeners[t] || a, c.currentScope = s, i = 0, o = n.length; i < o; i++) if (n[i]) try {
                            n[i].apply(null, l)
                        } catch (t) {
                            r(t)
                        } else n.splice(i, 1), i--, o--;
                        if (u) break;
                        s = s.$parent
                    } while (s);
                    return c.currentScope = null, c
                }, $broadcast: function (t, e) {
                    var n = this, i = this, o = {
                        name: t, targetScope: this, preventDefault: function () {
                            o.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[t]) return o;
                    for (var a, s, u = L([o], arguments, 1); n = i;) {
                        for (o.currentScope = n, i = n.$$listeners[t] || [], a = 0, s = i.length; a < s; a++) if (i[a]) try {
                            i[a].apply(null, u)
                        } catch (t) {
                            r(t)
                        } else i.splice(a, 1), a--, s--;
                        if (!(i = n.$$listenerCount[t] && n.$$childHead || n !== this && n.$$nextSibling)) for (; n !== this && !(i = n.$$nextSibling);) n = n.$parent
                    }
                    return o.currentScope = null, o
                }
            };
            var _ = new h, x = _.$$asyncQueue = [], k = _.$$postDigestQueue = [], S = _.$$applyAsyncQueue = [], M = 0;
            return _
        }]
    }

    function rn() {
        var t = /^\s*(https?|s?ftp|mailto|tel|file):/, e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (e) {
            return y(e) ? (t = e, this) : t
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return y(t) ? (e = t, this) : e
        }, this.$get = function () {
            return function (n, r) {
                var i = r ? e : t, o = mn(n && n.trim()).href;
                return "" === o || o.match(i) ? n : "unsafe:" + o
            }
        }
    }

    function on(t) {
        if ("self" === t) return t;
        if (_(t)) {
            if (-1 < t.indexOf("***")) throw Zi("iwcard", t);
            return t = Ar(t).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"), new RegExp("^" + t + "$")
        }
        if (O(t)) return new RegExp("^" + t.source + "$");
        throw Zi("imatcher")
    }

    function an(t) {
        var e = [];
        return y(t) && o(t, function (t) {
            e.push(on(t))
        }), e
    }

    function sn() {
        this.SCE_CONTEXTS = Ji;
        var e = ["self"], n = [];
        this.resourceUrlWhitelist = function (t) {
            return arguments.length && (e = an(t)), e
        }, this.resourceUrlBlacklist = function (t) {
            return arguments.length && (n = an(t)), n
        }, this.$get = ["$injector", "$$sanitizeUri", function (r, i) {
            function o(e, n) {
                var r;
                return "self" === e ? (r = gn(n, eo)) || (t.document.baseURI ? r = t.document.baseURI : (Gi || (Gi = t.document.createElement("a"), Gi.href = ".", Gi = Gi.cloneNode(!1)), r = Gi.href), r = gn(n, r)) : r = !!e.exec(n.href), r
            }

            function a(t) {
                var e = function (t) {
                    this.$$unwrapTrustedValue = function () {
                        return t
                    }
                };
                return t && (e.prototype = new t), e.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, e.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, e
            }

            var s = function (t) {
                throw Zi("unsafe")
            };
            r.has("$sanitize") && (s = r.get("$sanitize"));
            var u = a(), c = {};
            return c[Ji.HTML] = a(u), c[Ji.CSS] = a(u), c[Ji.MEDIA_URL] = a(u), c[Ji.URL] = a(c[Ji.MEDIA_URL]), c[Ji.JS] = a(u), c[Ji.RESOURCE_URL] = a(c[Ji.URL]), {
                trustAs: function (t, e) {
                    var n = c.hasOwnProperty(t) ? c[t] : null;
                    if (!n) throw Zi("icontext", t, e);
                    if (null === e || v(e) || "" === e) return e;
                    if ("string" != typeof e) throw Zi("itype", t);
                    return new n(e)
                }, getTrusted: function (t, r) {
                    if (null === r || v(r) || "" === r) return r;
                    var a = c.hasOwnProperty(t) ? c[t] : null;
                    if (a && r instanceof a) return r.$$unwrapTrustedValue();
                    if (C(r.$$unwrapTrustedValue) && (r = r.$$unwrapTrustedValue()), t === Ji.MEDIA_URL || t === Ji.URL) return i(r.toString(), t === Ji.MEDIA_URL);
                    if (t === Ji.RESOURCE_URL) {
                        var u, l, a = mn(r.toString()), f = !1;
                        for (u = 0, l = e.length; u < l; u++) if (o(e[u], a)) {
                            f = !0;
                            break
                        }
                        if (f) for (u = 0, l = n.length; u < l; u++) if (o(n[u], a)) {
                            f = !1;
                            break
                        }
                        if (f) return r;
                        throw Zi("insecurl", r.toString())
                    }
                    if (t === Ji.HTML) return s(r);
                    throw Zi("unsafe")
                }, valueOf: function (t) {
                    return t instanceof u ? t.$$unwrapTrustedValue() : t
                }
            }
        }]
    }

    function un() {
        var t = !0;
        this.enabled = function (e) {
            return arguments.length && (t = !!e), t
        }, this.$get = ["$parse", "$sceDelegate", function (e, n) {
            if (t && 8 > hr) throw Zi("iequirks");
            var r = pt(Ji);
            r.isEnabled = function () {
                return t
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function (t, e) {
                return e
            }, r.valueOf = m), r.parseAs = function (t, n) {
                var i = e(n);
                return i.literal && i.constant ? i : e(n, function (e) {
                    return r.getTrusted(t, e)
                })
            };
            var i = r.parseAs, a = r.getTrusted, s = r.trustAs;
            return o(Ji, function (t, e) {
                var n = yr(e);
                r[("parse_as_" + n).replace(Ki, $t)] = function (e) {
                    return i(t, e)
                }, r[("get_trusted_" + n).replace(Ki, $t)] = function (e) {
                    return a(t, e)
                }, r[("trust_as_" + n).replace(Ki, $t)] = function (e) {
                    return s(t, e)
                }
            }), r
        }]
    }

    function cn() {
        this.$get = ["$window", "$document", function (t, e) {
            var n = {},
                r = !((!t.nw || !t.nw.process) && t.chrome && (t.chrome.app && t.chrome.app.runtime || !t.chrome.app && t.chrome.runtime && t.chrome.runtime.id)) && t.history && t.history.pushState,
                i = h((/android (\d+)/.exec(yr((t.navigator || {}).userAgent)) || [])[1]),
                o = /Boxee/i.test((t.navigator || {}).userAgent), a = e[0] || {}, s = a.body && a.body.style, u = !1,
                c = !1;
            return s && (u = !!("transition" in s || "webkitTransition" in s), c = !!("animation" in s || "webkitAnimation" in s)), {
                history: !(!r || 4 > i || o),
                hasEvent: function (t) {
                    if ("input" === t && hr) return !1;
                    if (v(n[t])) {
                        var e = a.createElement("div");
                        n[t] = "on" + t in e
                    }
                    return n[t]
                },
                csp: Vr(),
                transitions: u,
                animations: c,
                android: i
            }
        }]
    }

    function ln() {
        this.$get = $(function (t) {
            return new fn(t)
        })
    }

    function fn(t) {
        function e() {
            var t = i.pop();
            return t && t.cb
        }

        function n(t) {
            for (var e = i.length - 1; 0 <= e; --e) {
                var n = i[e];
                if (n.type === t) return i.splice(e, 1), n.cb
            }
        }

        var r = {}, i = [], o = this.ALL_TASKS_TYPE = "$$all$$", a = this.DEFAULT_TASK_TYPE = "$$default$$";
        this.completeTask = function (i, s) {
            s = s || a;
            try {
                i()
            } finally {
                var u;
                u = s || a, r[u] && (r[u]--, r[o]--), u = r[s];
                var c = r[o];
                if (!c || !u) for (u = c ? n : e; c = u(s);) try {
                    c()
                } catch (e) {
                    t.error(e)
                }
            }
        }, this.incTaskCount = function (t) {
            t = t || a, r[t] = (r[t] || 0) + 1, r[o] = (r[o] || 0) + 1
        }, this.notifyWhenNoPendingTasks = function (t, e) {
            e = e || o, r[e] ? i.push({type: e, cb: t}) : t()
        }
    }

    function hn() {
        var t;
        this.httpOptions = function (e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function (e, n, r, i, o) {
            function a(s, u) {
                a.totalPendingRequests++, _(s) && !v(n.get(s)) || (s = o.getTrustedResourceUrl(s));
                var c = r.defaults && r.defaults.transformResponse;
                return S(c) ? c = c.filter(function (t) {
                    return t !== $e
                }) : c === $e && (c = null), r.get(s, l({cache: n, transformResponse: c}, t)).finally(function () {
                    a.totalPendingRequests--
                }).then(function (t) {
                    return n.put(s, t.data)
                }, function (t) {
                    return u || (t = Qi("tpload", s, t.status, t.statusText), e(t)), i.reject(t)
                })
            }

            return a.totalPendingRequests = 0, a
        }]
    }

    function dn() {
        this.$get = ["$rootScope", "$browser", "$location", function (t, e, n) {
            return {
                findBindings: function (t, e, n) {
                    t = t.getElementsByClassName("ng-binding");
                    var r = [];
                    return o(t, function (t) {
                        var i = Cr.element(t).data("$binding");
                        i && o(i, function (i) {
                            n ? new RegExp("(^|\\s)" + Ar(e) + "(\\s|\\||$)").test(i) && r.push(t) : -1 !== i.indexOf(e) && r.push(t)
                        })
                    }), r
                }, findModels: function (t, e, n) {
                    for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                        var o = t.querySelectorAll("[" + r[i] + "model" + (n ? "=" : "*=") + '"' + e + '"]');
                        if (o.length) return o
                    }
                }, getLocation: function () {
                    return n.url()
                }, setLocation: function (e) {
                    e !== n.url() && (n.url(e), t.$digest())
                }, whenStable: function (t) {
                    e.notifyWhenNoOutstandingRequests(t)
                }
            }
        }]
    }

    function pn() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (t, e, n, r, i) {
            function o(o, s, u) {
                C(o) || (u = s, s = o, o = p);
                var c, l = br.call(arguments, 3), f = y(u) && !u, h = (f ? r : n).defer(), d = h.promise;
                return c = e.defer(function () {
                    try {
                        h.resolve(o.apply(null, l))
                    } catch (t) {
                        h.reject(t), i(t)
                    } finally {
                        delete a[d.$$timeoutId]
                    }
                    f || t.$apply()
                }, s, "$timeout"), d.$$timeoutId = c, a[c] = h, d
            }

            var a = {};
            return o.cancel = function (t) {
                if (!t) return !1;
                if (!t.hasOwnProperty("$$timeoutId")) throw Xi("badprom");
                if (!a.hasOwnProperty(t.$$timeoutId)) return !1;
                t = t.$$timeoutId;
                var n = a[t], r = n.promise;
                return r.$$state && (r.$$state.pur = !0), n.reject("canceled"), delete a[t], e.defer.cancel(t)
            }, o
        }]
    }

    function mn(t) {
        return _(t) ? (hr && (to.setAttribute("href", t), t = to.href), to.setAttribute("href", t), t = to.hostname, !no && -1 < t.indexOf(":") && (t = "[" + t + "]"), {
            href: to.href,
            protocol: to.protocol ? to.protocol.replace(/:$/, "") : "",
            host: to.host,
            search: to.search ? to.search.replace(/^\?/, "") : "",
            hash: to.hash ? to.hash.replace(/^#/, "") : "",
            hostname: t,
            port: to.port,
            pathname: "/" === to.pathname.charAt(0) ? to.pathname : "/" + to.pathname
        }) : t
    }

    function $n(t) {
        var e = [eo].concat(t.map(mn));
        return function (t) {
            return t = mn(t), e.some(gn.bind(null, t))
        }
    }

    function gn(t, e) {
        return t = mn(t), e = mn(e), t.protocol === e.protocol && t.host === e.host
    }

    function vn() {
        this.$get = $(t)
    }

    function yn(t) {
        function e(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                return t
            }
        }

        var n = t[0] || {}, r = {}, i = "";
        return function () {
            var t, o, a, s, u;
            try {
                t = n.cookie || ""
            } catch (e) {
                t = ""
            }
            if (t !== i) for (i = t, t = i.split("; "), r = {}, a = 0; a < t.length; a++) o = t[a], 0 < (s = o.indexOf("=")) && (u = e(o.substring(0, s)), v(r[u]) && (r[u] = e(o.substring(s + 1))));
            return r
        }
    }

    function wn() {
        this.$get = yn
    }

    function bn(t) {
        function e(n, r) {
            if (w(n)) {
                var i = {};
                return o(n, function (t, n) {
                    i[n] = e(n, t)
                }), i
            }
            return t.factory(n + "Filter", r)
        }

        this.register = e, this.$get = ["$injector", function (t) {
            return function (e) {
                return t.get(e + "Filter")
            }
        }], e("currency", Mn), e("date", Rn), e("filter", _n), e("json", Un), e("limitTo", Yn), e("lowercase", co), e("number", Cn), e("orderBy", jn), e("uppercase", lo)
    }

    function _n() {
        return function (t, e, n, o) {
            if (!i(t)) {
                if (null == t) return t;
                throw r("filter")("notarray", t)
            }
            o = o || "$";
            var a;
            switch (Sn(e)) {
                case"function":
                    break;
                case"boolean":
                case"null":
                case"number":
                case"string":
                    a = !0;
                case"object":
                    e = xn(e, n, o, a);
                    break;
                default:
                    return t
            }
            return Array.prototype.filter.call(t, e)
        }
    }

    function xn(t, e, n, r) {
        var i = w(t) && n in t;
        return !0 === e ? e = Y : C(e) || (e = function (t, e) {
            return !v(t) && (null === t || null === e ? t === e : !(w(e) || w(t) && !g(t)) && (t = yr("" + t), e = yr("" + e), -1 !== t.indexOf(e)))
        }), function (o) {
            return i && !w(o) ? kn(o, t[n], e, n, !1) : kn(o, t, e, n, r)
        }
    }

    function kn(t, e, n, r, i, o) {
        var a = Sn(t), s = Sn(e);
        if ("string" === s && "!" === e.charAt(0)) return !kn(t, e.substring(1), n, r, i);
        if (S(t)) return t.some(function (t) {
            return kn(t, e, n, r, i)
        });
        switch (a) {
            case"object":
                var u;
                if (i) {
                    for (u in t) if (u.charAt && "$" !== u.charAt(0) && kn(t[u], e, n, r, !0)) return !0;
                    return !o && kn(t, e, n, r, !1)
                }
                if ("object" === s) {
                    for (u in e) if (o = e[u], !C(o) && !v(o) && (a = u === r, !kn(a ? t : t[u], o, n, r, a, a))) return !1;
                    return !0
                }
                return n(t, e);
            case"function":
                return !1;
            default:
                return n(t, e)
        }
    }

    function Sn(t) {
        return null === t ? "null" : typeof t
    }

    function Mn(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n, r) {
            v(n) && (n = e.CURRENCY_SYM), v(r) && (r = e.PATTERNS[1].maxFrac);
            var i = n ? /\u00A4/g : /\s*\u00A4\s*/g;
            return null == t ? t : Dn(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, r).replace(i, n)
        }
    }

    function Cn(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n) {
            return null == t ? t : Dn(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
        }
    }

    function On(t) {
        var e, n, r, i, o, a = 0;
        for (-1 < (n = t.indexOf(io)) && (t = t.replace(io, "")), 0 < (r = t.search(/e/i)) ? (0 > n && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : 0 > n && (n = t.length), r = 0; t.charAt(r) === oo; r++) ;
        if (r === (o = t.length)) e = [0], n = 1; else {
            for (o--; t.charAt(o) === oo;) o--;
            for (n -= r, e = [], i = 0; r <= o; r++, i++) e[i] = +t.charAt(r)
        }
        return n > ro && (e = e.splice(0, ro - 1), a = n - 1, n = 1), {d: e, e: a, i: n}
    }

    function En(t, e, n, r) {
        var i = t.d, o = i.length - t.i;
        if (e = v(e) ? Math.min(Math.max(n, o), r) : +e, n = e + t.i, r = i[n], 0 < n) {
            i.splice(Math.max(t.i, n));
            for (var a = n; a < i.length; a++) i[a] = 0
        } else for (o = Math.max(0, o), t.i = 1, i.length = Math.max(1, n = e + 1), i[0] = 0, a = 1; a < n; a++) i[a] = 0;
        if (5 <= r) if (0 > n - 1) {
            for (r = 0; r > n; r--) i.unshift(0), t.i++;
            i.unshift(1), t.i++
        } else i[n - 1]++;
        for (; o < Math.max(0, e); o++) i.push(0);
        (e = i.reduceRight(function (t, e, n, r) {
            return e += t, r[n] = e % 10, Math.floor(e / 10)
        }, 0)) && (i.unshift(e), t.i++)
    }

    function Dn(t, e, n, r, i) {
        if (!_(t) && !x(t) || isNaN(t)) return "";
        var o = !isFinite(t), a = !1, s = Math.abs(t) + "", u = "";
        if (o) u = "∞"; else {
            for (a = On(s), En(a, i, e.minFrac, e.maxFrac), u = a.d, s = a.i, i = a.e, o = [], a = u.reduce(function (t, e) {
                return t && !e
            }, !0); 0 > s;) u.unshift(0), s++;
            for (0 < s ? o = u.splice(s, u.length) : (o = u, u = [0]), s = [], u.length >= e.lgSize && s.unshift(u.splice(-e.lgSize, u.length).join("")); u.length > e.gSize;) s.unshift(u.splice(-e.gSize, u.length).join(""));
            u.length && s.unshift(u.join("")), u = s.join(n), o.length && (u += r + o.join("")), i && (u += "e+" + i)
        }
        return 0 > t && !a ? e.negPre + u + e.negSuf : e.posPre + u + e.posSuf
    }

    function Tn(t, e, n, r) {
        var i = "";
        for ((0 > t || r && 0 >= t) && (r ? t = 1 - t : (t = -t, i = "-")), t = "" + t; t.length < e;) t = oo + t;
        return n && (t = t.substr(t.length - e)), i + t
    }

    function An(t, e, n, r, i) {
        return n = n || 0, function (o) {
            return o = o["get" + t](), (0 < n || o > -n) && (o += n), 0 === o && -12 === n && (o = 12), Tn(o, e, r, i)
        }
    }

    function Vn(t, e, n) {
        return function (r, i) {
            var o = r["get" + t]();
            return i[wr((n ? "STANDALONE" : "") + (e ? "SHORT" : "") + t)][o]
        }
    }

    function Pn(t) {
        var e = new Date(t, 0, 1).getDay();
        return new Date(t, 0, (4 >= e ? 5 : 12) - e)
    }

    function Nn(t) {
        return function (e) {
            var n = Pn(e.getFullYear());
            return e = +new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay())) - +n, e = 1 + Math.round(e / 6048e5), Tn(e, t)
        }
    }

    function In(t, e) {
        return 0 >= t.getFullYear() ? e.ERAS[0] : e.ERAS[1]
    }

    function Rn(t) {
        function e(t) {
            var e;
            if (e = t.match(n)) {
                t = new Date(0);
                var r = 0, i = 0, o = e[8] ? t.setUTCFullYear : t.setFullYear, a = e[8] ? t.setUTCHours : t.setHours;
                e[9] && (r = h(e[9] + e[10]), i = h(e[9] + e[11])), o.call(t, h(e[1]), h(e[2]) - 1, h(e[3])), r = h(e[4] || 0) - r, i = h(e[5] || 0) - i, o = h(e[6] || 0), e = Math.round(1e3 * parseFloat("0." + (e[7] || 0))), a.call(t, r, i, o, e)
            }
            return t
        }

        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (n, r, i) {
            var a, s, u = "", c = [];
            if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, _(n) && (n = uo.test(n) ? h(n) : e(n)), x(n) && (n = new Date(n)), !k(n) || !isFinite(n.getTime())) return n;
            for (; r;) (s = so.exec(r)) ? (c = L(c, s, 1), r = c.pop()) : (c.push(r), r = null);
            var l = n.getTimezoneOffset();
            return i && (l = z(i, l), n = B(n, i, !0)), o(c, function (e) {
                a = ao[e], u += a ? a(n, t.DATETIME_FORMATS, l) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), u
        }
    }

    function Un() {
        return function (t, e) {
            return v(e) && (e = 2), H(t, e)
        }
    }

    function Yn() {
        return function (t, e, n) {
            return e = 1 / 0 === Math.abs(Number(e)) ? Number(e) : h(e), Er(e) ? t : (x(t) && (t = t.toString()), i(t) ? (n = !n || isNaN(n) ? 0 : h(n), n = 0 > n ? Math.max(0, t.length + n) : n, 0 <= e ? Ln(t, n, n + e) : 0 === n ? Ln(t, e, t.length) : Ln(t, Math.max(0, n + e), n)) : t)
        }
    }

    function Ln(t, e, n) {
        return _(t) ? t.slice(e, n) : br.call(t, e, n)
    }

    function jn(t) {
        function e(e) {
            return e.map(function (e) {
                var n = 1, r = m;
                if (C(e)) r = e; else if (_(e) && ("+" !== e.charAt(0) && "-" !== e.charAt(0) || (n = "-" === e.charAt(0) ? -1 : 1, e = e.substring(1)), "" !== e && (r = t(e), r.constant))) var i = r(),
                    r = function (t) {
                        return t[i]
                    };
                return {get: r, descending: n}
            })
        }

        function n(t) {
            switch (typeof t) {
                case"number":
                case"boolean":
                case"string":
                    return !0;
                default:
                    return !1
            }
        }

        function o(t, e) {
            var n = 0, r = t.type, i = e.type;
            if (r === i) {
                var i = t.value, o = e.value;
                "string" === r ? (i = i.toLowerCase(), o = o.toLowerCase()) : "object" === r && (w(i) && (i = t.index), w(o) && (o = e.index)), i !== o && (n = i < o ? -1 : 1)
            } else n = "undefined" === r ? 1 : "undefined" === i ? -1 : "null" === r ? 1 : "null" === i ? -1 : r < i ? -1 : 1;
            return n
        }

        return function (t, a, s, u) {
            if (null == t) return t;
            if (!i(t)) throw r("orderBy")("notarray", t);
            S(a) || (a = [a]), 0 === a.length && (a = ["+"]);
            var c = e(a), l = s ? -1 : 1, f = C(u) ? u : o;
            return t = Array.prototype.map.call(t, function (t, e) {
                return {
                    value: t,
                    tieBreaker: {value: e, type: "number", index: e},
                    predicateValues: c.map(function (r) {
                        var i = r.get(t);
                        return r = typeof i, null === i ? r = "null" : "object" === r && (C(i.valueOf) && (i = i.valueOf(), n(i)) || g(i) && (i = i.toString(), n(i))), {
                            value: i,
                            type: r,
                            index: e
                        }
                    })
                }
            }), t.sort(function (t, e) {
                for (var n = 0, r = c.length; n < r; n++) {
                    var i = f(t.predicateValues[n], e.predicateValues[n]);
                    if (i) return i * c[n].descending * l
                }
                return (f(t.tieBreaker, e.tieBreaker) || o(t.tieBreaker, e.tieBreaker)) * l
            }), t = t.map(function (t) {
                return t.value
            })
        }
    }

    function Fn(t) {
        return C(t) && (t = {link: t}), t.restrict = t.restrict || "AC", $(t)
    }

    function Hn(t, e, n, r, i) {
        this.$$controls = [], this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = i(e.name || e.ngForm || "")(n), this.$dirty = !1, this.$valid = this.$pristine = !0, this.$submitted = this.$invalid = !1, this.$$parentForm = po, this.$$element = t, this.$$animate = r, Wn(this)
    }

    function Wn(t) {
        t.$$classCache = {}, t.$$classCache[Jo] = !(t.$$classCache[Zo] = t.$$element.hasClass(Zo))
    }

    function zn(t) {
        function e(t, e, n) {
            n && !t.$$classCache[e] ? (t.$$animate.addClass(t.$$element, e), t.$$classCache[e] = !0) : !n && t.$$classCache[e] && (t.$$animate.removeClass(t.$$element, e), t.$$classCache[e] = !1)
        }

        function n(t, n, r) {
            n = n ? "-" + ot(n, "-") : "", e(t, Zo + n, !0 === r), e(t, Jo + n, !1 === r)
        }

        var r = t.set, i = t.unset;
        t.clazz.prototype.$setValidity = function (t, o, a) {
            v(o) ? (this.$pending || (this.$pending = {}), r(this.$pending, t, a)) : (this.$pending && i(this.$pending, t, a), qn(this.$pending) && (this.$pending = void 0)), T(o) ? o ? (i(this.$error, t, a), r(this.$$success, t, a)) : (r(this.$error, t, a), i(this.$$success, t, a)) : (i(this.$error, t, a), i(this.$$success, t, a)), this.$pending ? (e(this, "ng-pending", !0), this.$valid = this.$invalid = void 0, n(this, "", null)) : (e(this, "ng-pending", !1), this.$valid = qn(this.$error), this.$invalid = !this.$valid, n(this, "", this.$valid)), o = this.$pending && this.$pending[t] ? void 0 : !this.$error[t] && (!!this.$$success[t] || null), n(this, t, o), this.$$parentForm.$setValidity(t, o, this)
        }
    }

    function qn(t) {
        if (t) for (var e in t) if (t.hasOwnProperty(e)) return !1;
        return !0
    }

    function Bn(t) {
        t.$formatters.push(function (e) {
            return t.$isEmpty(e) ? e : e.toString()
        })
    }

    function Gn(t, e, n, r, i, o) {
        var a = yr(e[0].type);
        if (!i.android) {
            var s = !1;
            e.on("compositionstart", function () {
                s = !0
            }), e.on("compositionupdate", function (t) {
                (v(t.data) || "" === t.data) && (s = !1)
            }), e.on("compositionend", function () {
                s = !1, c()
            })
        }
        var u, c = function (t) {
            if (u && (o.defer.cancel(u), u = null), !s) {
                var i = e.val();
                t = t && t.type, "password" === a || n.ngTrim && "false" === n.ngTrim || (i = Tr(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, t)
            }
        };
        if (i.hasEvent("input")) e.on("input", c); else {
            var l = function (t, e, n) {
                u || (u = o.defer(function () {
                    u = null, e && e.value === n || c(t)
                }))
            };
            e.on("keydown", function (t) {
                var e = t.keyCode;
                91 === e || 15 < e && 19 > e || 37 <= e && 40 >= e || l(t, this, this.value)
            }), i.hasEvent("paste") && e.on("paste cut drop", l)
        }
        e.on("change", c), Co[a] && r.$$hasNativeValidators && a === n.type && e.on("keydown wheel mousedown", function (t) {
            if (!u) {
                var e = this.validity, n = e.badInput, r = e.typeMismatch;
                u = o.defer(function () {
                    u = null, e.badInput === n && e.typeMismatch === r || c(t)
                })
            }
        }), r.$render = function () {
            var t = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
            e.val() !== t && e.val(t)
        }
    }

    function Zn(t, e) {
        return function (n, r) {
            var i, a;
            if (k(n)) return n;
            if (_(n)) {
                if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), vo.test(n)) return new Date(n);
                if (t.lastIndex = 0, i = t.exec(n)) return i.shift(), a = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0}, o(i, function (t, n) {
                    n < e.length && (a[e[n]] = +t)
                }), i = new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0), 100 > a.yyyy && i.setFullYear(a.yyyy), i
            }
            return NaN
        }
    }

    function Jn(t, e, n, r) {
        return function (i, o, a, s, u, c, l, f) {
            function h(t) {
                return t && !(t.getTime && t.getTime() !== t.getTime())
            }

            function d(t) {
                return y(t) && !k(t) ? p(t) || void 0 : t
            }

            function p(t, e) {
                var r = s.$options.getOption("timezone");
                $ && $ !== r && (e = q(e, z($)));
                var i = n(t, e);
                return !isNaN(i) && r && (i = B(i, r)), i
            }

            Kn(i, o, a, s, t), Gn(i, o, a, s, u, c);
            var m, $, g = "time" === t || "datetimelocal" === t;
            if (s.$parsers.push(function (n) {
                return s.$isEmpty(n) ? null : e.test(n) ? p(n, m) : void (s.$$parserName = t)
            }), s.$formatters.push(function (t) {
                if (t && !k(t)) throw Xo("datefmt", t);
                if (h(t)) {
                    m = t;
                    var e = s.$options.getOption("timezone");
                    e && ($ = e, m = B(m, e, !0));
                    var n = r;
                    return g && _(s.$options.getOption("timeSecondsFormat")) && (n = r.replace("ss.sss", s.$options.getOption("timeSecondsFormat")).replace(/:$/, "")), t = l("date")(t, n, e), g && s.$options.getOption("timeStripZeroSeconds") && (t = t.replace(/(?::00)?(?:\.000)?$/, "")), t
                }
                return $ = m = null, ""
            }), y(a.min) || a.ngMin) {
                var w = a.min || f(a.ngMin)(i), b = d(w);
                s.$validators.min = function (t) {
                    return !h(t) || v(b) || n(t) >= b
                }, a.$observe("min", function (t) {
                    t !== w && (b = d(t), w = t, s.$validate())
                })
            }
            if (y(a.max) || a.ngMax) {
                var x = a.max || f(a.ngMax)(i), S = d(x);
                s.$validators.max = function (t) {
                    return !h(t) || v(S) || n(t) <= S
                }, a.$observe("max", function (t) {
                    t !== x && (S = d(t), x = t, s.$validate())
                })
            }
        }
    }

    function Kn(t, e, n, r, i) {
        (r.$$hasNativeValidators = w(e[0].validity)) && r.$parsers.push(function (t) {
            var n = e.prop("validity") || {};
            if (!n.badInput && !n.typeMismatch) return t;
            r.$$parserName = i
        })
    }

    function Qn(t) {
        t.$parsers.push(function (e) {
            return t.$isEmpty(e) ? null : bo.test(e) ? parseFloat(e) : void (t.$$parserName = "number")
        }), t.$formatters.push(function (e) {
            if (!t.$isEmpty(e)) {
                if (!x(e)) throw Xo("numfmt", e);
                e = e.toString()
            }
            return e
        })
    }

    function Xn(t) {
        return y(t) && !x(t) && (t = parseFloat(t)), Er(t) ? void 0 : t
    }

    function tr(t) {
        var e = t.toString(), n = e.indexOf(".");
        return -1 === n ? -1 < t && 1 > t && (t = /e-(\d+)$/.exec(e)) ? Number(t[1]) : 0 : e.length - n - 1
    }

    function er(t, e, n) {
        t = Number(t);
        var r = (0 | t) !== t, i = (0 | e) !== e, o = (0 | n) !== n;
        if (r || i || o) {
            var a = r ? tr(t) : 0, s = i ? tr(e) : 0, u = o ? tr(n) : 0, a = Math.max(a, s, u), a = Math.pow(10, a);
            t *= a, e *= a, n *= a, r && (t = Math.round(t)), i && (e = Math.round(e)), o && (n = Math.round(n))
        }
        return 0 == (t - e) % n
    }

    function nr(t, e, n, r, i) {
        if (y(r)) {
            if (t = t(r), !t.constant) throw Xo("constexpr", n, r);
            return t(e)
        }
        return i
    }

    function rr(t, e) {
        function n(t, e) {
            if (!t || !t.length) return [];
            if (!e || !e.length) return t;
            var n = [], r = 0;
            t:for (; r < t.length; r++) {
                for (var i = t[r], o = 0; o < e.length; o++) if (i === e[o]) continue t;
                n.push(i)
            }
            return n
        }

        function r(t) {
            if (!t) return t;
            var e = t;
            return S(t) ? e = t.map(r).join(" ") : w(t) ? e = Object.keys(t).filter(function (e) {
                return t[e]
            }).join(" ") : _(t) || (e = t + ""), e
        }

        t = "ngClass" + t;
        var i;
        return ["$parse", function (a) {
            return {
                restrict: "AC", link: function (s, u, c) {
                    function l(t, e) {
                        var n = [];
                        return o(t, function (t) {
                            (0 < e || d[t]) && (d[t] = (d[t] || 0) + e, d[t] === +(0 < e) && n.push(t))
                        }), n.join(" ")
                    }

                    function f(t) {
                        if (t === e) {
                            var n = h, n = l(n && n.split(" "), 1);
                            c.$addClass(n)
                        } else n = h, n = l(n && n.split(" "), -1), c.$removeClass(n);
                        p = t
                    }

                    var h, d = u.data("$classCounts"), p = !0;
                    d || (d = ft(), u.data("$classCounts", d)), "ngClass" !== t && (i || (i = a("$index", function (t) {
                        return 1 & t
                    })), s.$watch(i, f)), s.$watch(a(c[t], r), function (t) {
                        if (p === e) {
                            var r = h && h.split(" "), i = t && t.split(" "), o = n(r, i), r = n(i, r), o = l(o, -1),
                                r = l(r, 1);
                            c.$addClass(r), c.$removeClass(o)
                        }
                        h = t
                    })
                }
            }
        }]
    }

    function ir(t, e, n, r, i, o) {
        return {
            restrict: "A", compile: function (a, s) {
                var u = t(s[r]);
                return function (t, r) {
                    r.on(i, function (r) {
                        var i = function () {
                            u(t, {$event: r})
                        };
                        if (e.$$phase) if (o) t.$evalAsync(i); else try {
                            i()
                        } catch (t) {
                            n(t)
                        } else t.$apply(i)
                    })
                }
            }
        }
    }

    function or(t, e, n, r, i, o, a, s, u) {
        this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = u(n.name || "", !1)(t), this.$$parentForm = po, this.$options = ta, this.$$updateEvents = "", this.$$updateEventHandler = this.$$updateEventHandler.bind(this),
            this.$$parsedNgModel = i(n.ngModel), this.$$parsedNgModelAssign = this.$$parsedNgModel.assign, this.$$ngModelGet = this.$$parsedNgModel, this.$$ngModelSet = this.$$parsedNgModelAssign, this.$$pendingDebounce = null, this.$$parserValid = void 0, this.$$parserName = "parse", this.$$currentValidationRunId = 0, this.$$scope = t, this.$$rootScope = t.$root, this.$$attr = n, this.$$element = r, this.$$animate = o, this.$$timeout = a, this.$$parse = i, this.$$q = s, this.$$exceptionHandler = e, Wn(this), ar(this)
    }

    function ar(t) {
        t.$$scope.$watch(function (e) {
            return e = t.$$ngModelGet(e), e === t.$modelValue || t.$modelValue !== t.$modelValue && e !== e || t.$$setModelValue(e), e
        })
    }

    function sr(t) {
        this.$$options = t
    }

    function ur(t, e) {
        o(e, function (e, n) {
            y(t[n]) || (t[n] = e)
        })
    }

    function cr(t, e) {
        t.prop("selected", e), t.attr("selected", e)
    }

    function lr(t, e, n) {
        if (t) {
            if (_(t) && (t = new RegExp("^" + t + "$")), !t.test) throw r("ngPattern")("noregexp", e, t, G(n));
            return t
        }
    }

    function fr(t) {
        return t = h(t), Er(t) ? -1 : t
    }

    var hr, dr, pr, mr, $r = {objectMaxDepth: 5, urlErrorParamsEnabled: !0}, gr = /^\/(.+)\/([a-z]*)$/,
        vr = Object.prototype.hasOwnProperty, yr = function (t) {
            return _(t) ? t.toLowerCase() : t
        }, wr = function (t) {
            return _(t) ? t.toUpperCase() : t
        }, br = [].slice, _r = [].splice, xr = [].push, kr = Object.prototype.toString, Sr = Object.getPrototypeOf,
        Mr = r("ng"), Cr = t.angular || (t.angular = {}), Or = 0;
    hr = t.document.documentMode;
    var Er = Number.isNaN || function (t) {
        return t !== t
    };
    p.$inject = [], m.$inject = [];
    var Dr = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
        Tr = function (t) {
            return _(t) ? t.trim() : t
        }, Ar = function (t) {
            return t.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        }, Vr = function () {
            if (!y(Vr.rules)) {
                var e = t.document.querySelector("[ng-csp]") || t.document.querySelector("[data-ng-csp]");
                if (e) {
                    var n = e.getAttribute("ng-csp") || e.getAttribute("data-ng-csp");
                    Vr.rules = {
                        noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"),
                        noInlineStyle: !n || -1 !== n.indexOf("no-inline-style")
                    }
                } else {
                    e = Vr;
                    try {
                        new Function(""), n = !1
                    } catch (t) {
                        n = !0
                    }
                    e.rules = {noUnsafeEval: n, noInlineStyle: !1}
                }
            }
            return Vr.rules
        }, Pr = function () {
            if (y(Pr.name_)) return Pr.name_;
            var e, n, r, i, o = Ir.length;
            for (n = 0; n < o; ++n) if (r = Ir[n], e = t.document.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                i = e.getAttribute(r + "jq");
                break
            }
            return Pr.name_ = i
        }, Nr = /:/g, Ir = ["ng-", "data-ng-", "ng:", "x-ng-"], Rr = function (e) {
            var n = e.currentScript;
            return !n || (n instanceof t.HTMLScriptElement || n instanceof t.SVGScriptElement) && (n = n.attributes, [n.getNamedItem("src"), n.getNamedItem("href"), n.getNamedItem("xlink:href")].every(function (t) {
                if (!t) return !0;
                if (!t.value) return !1;
                var n = e.createElement("a");
                if (n.href = t.value, e.location.origin === n.origin) return !0;
                switch (n.protocol) {
                    case"http:":
                    case"https:":
                    case"ftp:":
                    case"blob:":
                    case"file:":
                    case"data:":
                        return !0;
                    default:
                        return !1
                }
            }))
        }(t.document), Ur = /[A-Z]/g, Yr = !1, Lr = 3,
        jr = {full: "1.7.8", major: 1, minor: 7, dot: 8, codeName: "enthusiastic-oblation"};
    wt.expando = "ng339";
    var Fr = wt.cache = {}, Hr = 1;
    wt._data = function (t) {
        return this.cache[t[this.expando]] || {}
    };
    var Wr = /-([a-z])/g, zr = /^-ms-/, qr = {mouseleave: "mouseout", mouseenter: "mouseover"}, Br = r("jqLite"),
        Gr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Zr = /<|&#?\w+;/, Jr = /<([\w:-]+)/,
        Kr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Qr = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Qr.optgroup = Qr.option, Qr.tbody = Qr.tfoot = Qr.colgroup = Qr.caption = Qr.thead, Qr.th = Qr.td;
    var Xr = t.Node.prototype.contains || function (t) {
        return !!(16 & this.compareDocumentPosition(t))
    }, ti = wt.prototype = {
        ready: Ut, toString: function () {
            var t = [];
            return o(this, function (e) {
                t.push("" + e)
            }), "[" + t.join(", ") + "]"
        }, eq: function (t) {
            return dr(0 <= t ? this[t] : this[this.length + t])
        }, length: 0, push: xr, sort: [].sort, splice: [].splice
    }, ei = {};
    o("multiple selected checked disabled readOnly required open".split(" "), function (t) {
        ei[yr(t)] = t
    });
    var ni = {};
    o("input select option textarea button form details".split(" "), function (t) {
        ni[t] = !0
    });
    var ri = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern",
        ngStep: "step"
    };
    o({
        data: Ot, removeData: Mt, hasData: function (t) {
            for (var e in Fr[t.ng339]) return !0;
            return !1
        }, cleanData: function (t) {
            for (var e = 0, n = t.length; e < n; e++) Mt(t[e]), St(t[e])
        }
    }, function (t, e) {
        wt[e] = t
    }), o({
        data: Ot, inheritedData: Pt, scope: function (t) {
            return dr.data(t, "$scope") || Pt(t.parentNode || t, ["$isolateScope", "$scope"])
        }, isolateScope: function (t) {
            return dr.data(t, "$isolateScope") || dr.data(t, "$isolateScopeNoTemplate")
        }, controller: Vt, injector: function (t) {
            return Pt(t, "$injector")
        }, removeAttr: function (t, e) {
            t.removeAttribute(e)
        }, hasClass: Et, css: function (t, e, n) {
            if (e = gt(e.replace(zr, "ms-")), !y(n)) return t.style[e];
            t.style[e] = n
        }, attr: function (t, e, n) {
            var r = t.nodeType;
            if (r !== Lr && 2 !== r && 8 !== r && t.getAttribute) {
                var r = yr(e), i = ei[r];
                if (!y(n)) return t = t.getAttribute(e), i && null !== t && (t = r), null === t ? void 0 : t;
                null === n || !1 === n && i ? t.removeAttribute(e) : t.setAttribute(e, i ? r : n)
            }
        }, prop: function (t, e, n) {
            if (!y(n)) return t[e];
            t[e] = n
        }, text: function () {
            function t(t, e) {
                if (v(e)) {
                    var n = t.nodeType;
                    return 1 === n || n === Lr ? t.textContent : ""
                }
                t.textContent = e
            }

            return t.$dv = "", t
        }(), val: function (t, e) {
            if (v(e)) {
                if (t.multiple && "select" === N(t)) {
                    var n = [];
                    return o(t.options, function (t) {
                        t.selected && n.push(t.value || t.text)
                    }), n
                }
                return t.value
            }
            t.value = e
        }, html: function (t, e) {
            if (v(e)) return t.innerHTML;
            _t(t, !0), t.innerHTML = e
        }, empty: Nt
    }, function (t, e) {
        wt.prototype[e] = function (e, n) {
            var r, i, o = this.length;
            if (t !== Nt && v(2 === t.length && t !== Et && t !== Vt ? e : n)) {
                if (w(e)) {
                    for (r = 0; r < o; r++) if (t === Ot) t(this[r], e); else for (i in e) t(this[r], i, e[i]);
                    return this
                }
                for (r = t.$dv, o = v(r) ? Math.min(o, 1) : o, i = 0; i < o; i++) {
                    var a = t(this[i], e, n);
                    r = r ? r + a : a
                }
                return r
            }
            for (r = 0; r < o; r++) t(this[r], e, n);
            return this
        }
    }), o({
        removeData: Mt, on: function (t, e, n, r) {
            if (y(r)) throw Br("onargs");
            if (vt(t)) {
                r = Ct(t, !0);
                var i = r.events, o = r.handle;
                o || (o = r.handle = Lt(t, i)), r = 0 <= e.indexOf(" ") ? e.split(" ") : [e];
                for (var a = r.length, s = function (e, r, a) {
                    var s = i[e];
                    s || (s = i[e] = [], s.specialHandlerWrapper = r, "$destroy" === e || a || t.addEventListener(e, o)), s.push(n)
                }; a--;) e = r[a], qr[e] ? (s(qr[e], Ft), s(e, void 0, !0)) : s(e)
            }
        }, off: St, one: function (t, e, n) {
            t = dr(t), t.on(e, function r() {
                t.off(e, n), t.off(e, r)
            }), t.on(e, n)
        }, replaceWith: function (t, e) {
            var n, r = t.parentNode;
            _t(t), o(new wt(e), function (e) {
                n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
            })
        }, children: function (t) {
            var e = [];
            return o(t.childNodes, function (t) {
                1 === t.nodeType && e.push(t)
            }), e
        }, contents: function (t) {
            return t.contentDocument || t.childNodes || []
        }, append: function (t, e) {
            var n = t.nodeType;
            if (1 === n || 11 === n) {
                e = new wt(e);
                for (var n = 0, r = e.length; n < r; n++) t.appendChild(e[n])
            }
        }, prepend: function (t, e) {
            if (1 === t.nodeType) {
                var n = t.firstChild;
                o(new wt(e), function (e) {
                    t.insertBefore(e, n)
                })
            }
        }, wrap: function (t, e) {
            var n = dr(e).eq(0).clone()[0], r = t.parentNode;
            r && r.replaceChild(n, t), n.appendChild(t)
        }, remove: It, detach: function (t) {
            It(t, !0)
        }, after: function (t, e) {
            var n = t, r = t.parentNode;
            if (r) {
                e = new wt(e);
                for (var i = 0, o = e.length; i < o; i++) {
                    var a = e[i];
                    r.insertBefore(a, n.nextSibling), n = a
                }
            }
        }, addClass: Tt, removeClass: Dt, toggleClass: function (t, e, n) {
            e && o(e.split(" "), function (e) {
                var r = n;
                v(r) && (r = !Et(t, e)), (r ? Tt : Dt)(t, e)
            })
        }, parent: function (t) {
            return (t = t.parentNode) && 11 !== t.nodeType ? t : null
        }, next: function (t) {
            return t.nextElementSibling
        }, find: function (t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e) : []
        }, clone: bt, triggerHandler: function (t, e, n) {
            var r, i, a = e.type || e, s = Ct(t);
            (s = (s = s && s.events) && s[a]) && (r = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return !0 === this.immediatePropagationStopped
                }, stopPropagation: p, type: a, target: t
            }, e.type && (r = l(r, e)), e = pt(s), i = n ? [r].concat(n) : [r], o(e, function (e) {
                r.isImmediatePropagationStopped() || e.apply(t, i)
            }))
        }
    }, function (t, e) {
        wt.prototype[e] = function (e, n, r) {
            for (var i, o = 0, a = this.length; o < a; o++) v(i) ? (i = t(this[o], e, n, r), y(i) && (i = dr(i))) : At(i, t(this[o], e, n, r));
            return y(i) ? i : this
        }
    }), wt.prototype.bind = wt.prototype.on, wt.prototype.unbind = wt.prototype.off;
    var ii = Object.create(null);
    zt.prototype = {
        _idx: function (t) {
            return t !== this._lastKey && (this._lastKey = t, this._lastIndex = this._keys.indexOf(t)), this._lastIndex
        }, _transformKey: function (t) {
            return Er(t) ? ii : t
        }, get: function (t) {
            if (t = this._transformKey(t), -1 !== (t = this._idx(t))) return this._values[t]
        }, has: function (t) {
            return t = this._transformKey(t), -1 !== this._idx(t)
        }, set: function (t, e) {
            t = this._transformKey(t);
            var n = this._idx(t);
            -1 === n && (n = this._lastIndex = this._keys.length), this._keys[n] = t, this._values[n] = e
        }, delete: function (t) {
            return t = this._transformKey(t), -1 !== (t = this._idx(t)) && (this._keys.splice(t, 1), this._values.splice(t, 1), this._lastKey = NaN, this._lastIndex = -1, !0)
        }
    };
    var oi = zt, ai = [function () {
            this.$get = [function () {
                return oi
            }]
        }], si = /^([^(]+?)=>/, ui = /^[^(]*\(\s*([^)]*)\)/m, ci = /,/, li = /^\s*(_?)(\S+?)\1\s*$/,
        fi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, hi = r("$injector");
    Gt.$$annotate = function (t, e, n) {
        var r;
        if ("function" == typeof t) {
            if (!(r = t.$inject)) {
                if (r = [], t.length) {
                    if (e) throw _(n) && n || (n = t.name || Bt(t)), hi("strictdi", n);
                    e = qt(t), o(e[1].split(ci), function (t) {
                        t.replace(li, function (t, e, n) {
                            r.push(n)
                        })
                    })
                }
                t.$inject = r
            }
        } else S(t) ? (e = t.length - 1, st(t[e], "fn"), r = t.slice(0, e)) : st(t, "fn", !0);
        return r
    };
    var di = r("$animate"), pi = function () {
        this.$get = p
    }, mi = function () {
        var t = new oi, e = [];
        this.$get = ["$$AnimateRunner", "$rootScope", function (n, r) {
            function i(t, e, n) {
                var r = !1;
                return e && (e = _(e) ? e.split(" ") : S(e) ? e : [], o(e, function (e) {
                    e && (r = !0, t[e] = n)
                })), r
            }

            function a() {
                o(e, function (e) {
                    var n = t.get(e);
                    if (n) {
                        var r = Kt(e.attr("class")), i = "", a = "";
                        o(n, function (t, e) {
                            t !== !!r[e] && (t ? i += (i.length ? " " : "") + e : a += (a.length ? " " : "") + e)
                        }), o(e, function (t) {
                            i && Tt(t, i), a && Dt(t, a)
                        }), t.delete(e)
                    }
                }), e.length = 0
            }

            return {
                enabled: p, on: p, off: p, pin: p, push: function (o, s, u, c) {
                    return c && c(), u = u || {}, u.from && o.css(u.from), u.to && o.css(u.to), (u.addClass || u.removeClass) && (s = u.addClass, c = u.removeClass, u = t.get(o) || {}, s = i(u, s, !0), c = i(u, c, !1), (s || c) && (t.set(o, u), e.push(o), 1 === e.length && r.$$postDigest(a))), o = new n, o.complete(), o
                }
            }
        }]
    }, $i = ["$provide", function (t) {
        var e = this, n = null, r = null;
        this.$$registeredAnimations = Object.create(null), this.register = function (n, r) {
            if (n && "." !== n.charAt(0)) throw di("notcsel", n);
            var i = n + "-animation";
            e.$$registeredAnimations[n.substr(1)] = i, t.factory(i, r)
        }, this.customFilter = function (t) {
            return 1 === arguments.length && (r = C(t) ? t : null), r
        }, this.classNameFilter = function (t) {
            if (1 === arguments.length && (n = t instanceof RegExp ? t : null) && /[(\s|\/)]ng-animate[(\s|\/)]/.test(n.toString())) throw n = null, di("nongcls", "ng-animate");
            return n
        }, this.$get = ["$$animateQueue", function (t) {
            function e(t, e, n) {
                if (n) {
                    var r;
                    t:{
                        for (r = 0; r < n.length; r++) {
                            var i = n[r];
                            if (1 === i.nodeType) {
                                r = i;
                                break t
                            }
                        }
                        r = void 0
                    }
                    !r || r.parentNode || r.previousElementSibling || (n = null)
                }
                n ? n.after(t) : e.prepend(t)
            }

            return {
                on: t.on, off: t.off, pin: t.pin, enabled: t.enabled, cancel: function (t) {
                    t.cancel && t.cancel()
                }, enter: function (n, r, i, o) {
                    return r = r && dr(r), i = i && dr(i), r = r || i.parent(), e(n, r, i), t.push(n, "enter", Qt(o))
                }, move: function (n, r, i, o) {
                    return r = r && dr(r), i = i && dr(i), r = r || i.parent(), e(n, r, i), t.push(n, "move", Qt(o))
                }, leave: function (e, n) {
                    return t.push(e, "leave", Qt(n), function () {
                        e.remove()
                    })
                }, addClass: function (e, n, r) {
                    return r = Qt(r), r.addClass = Jt(r.addclass, n), t.push(e, "addClass", r)
                }, removeClass: function (e, n, r) {
                    return r = Qt(r), r.removeClass = Jt(r.removeClass, n), t.push(e, "removeClass", r)
                }, setClass: function (e, n, r, i) {
                    return i = Qt(i), i.addClass = Jt(i.addClass, n), i.removeClass = Jt(i.removeClass, r), t.push(e, "setClass", i)
                }, animate: function (e, n, r, i, o) {
                    return o = Qt(o), o.from = o.from ? l(o.from, n) : n, o.to = o.to ? l(o.to, r) : r, o.tempClasses = Jt(o.tempClasses, i || "ng-inline-animate"), t.push(e, "animate", o)
                }
            }
        }]
    }], gi = function () {
        this.$get = ["$$rAF", function (t) {
            function e(e) {
                n.push(e), 1 < n.length || t(function () {
                    for (var t = 0; t < n.length; t++) n[t]();
                    n = []
                })
            }

            var n = [];
            return function () {
                var t = !1;
                return e(function () {
                    t = !0
                }), function (n) {
                    t ? n() : e(n)
                }
            }
        }]
    }, vi = function () {
        this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function (t, e, n, r, i) {
            function a(t) {
                this.setHost(t);
                var e = n();
                this._doneCallbacks = [], this._tick = function (t) {
                    r() ? i(t, 0, !1) : e(t)
                }, this._state = 0
            }

            return a.chain = function (t, e) {
                function n() {
                    r === t.length ? e(!0) : t[r](function (t) {
                        !1 === t ? e(!1) : (r++, n())
                    })
                }

                var r = 0;
                n()
            }, a.all = function (t, e) {
                function n(n) {
                    i = i && n, ++r === t.length && e(i)
                }

                var r = 0, i = !0;
                o(t, function (t) {
                    t.done(n)
                })
            }, a.prototype = {
                setHost: function (t) {
                    this.host = t || {}
                }, done: function (t) {
                    2 === this._state ? t() : this._doneCallbacks.push(t)
                }, progress: p, getPromise: function () {
                    if (!this.promise) {
                        var e = this;
                        this.promise = t(function (t, n) {
                            e.done(function (e) {
                                !1 === e ? n() : t()
                            })
                        })
                    }
                    return this.promise
                }, then: function (t, e) {
                    return this.getPromise().then(t, e)
                }, catch: function (t) {
                    return this.getPromise().catch(t)
                }, finally: function (t) {
                    return this.getPromise().finally(t)
                }, pause: function () {
                    this.host.pause && this.host.pause()
                }, resume: function () {
                    this.host.resume && this.host.resume()
                }, end: function () {
                    this.host.end && this.host.end(), this._resolve(!0)
                }, cancel: function () {
                    this.host.cancel && this.host.cancel(), this._resolve(!1)
                }, complete: function (t) {
                    var e = this;
                    0 === e._state && (e._state = 1, e._tick(function () {
                        e._resolve(t)
                    }))
                }, _resolve: function (t) {
                    2 !== this._state && (o(this._doneCallbacks, function (e) {
                        e(t)
                    }), this._doneCallbacks.length = 0, this._state = 2)
                }
            }, a
        }]
    }, yi = function () {
        this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (t, e, n) {
            return function (e, r) {
                function i() {
                    return t(function () {
                        o.addClass && (e.addClass(o.addClass), o.addClass = null), o.removeClass && (e.removeClass(o.removeClass), o.removeClass = null), o.to && (e.css(o.to), o.to = null), a || s.complete(), a = !0
                    }), s
                }

                var o = r || {};
                o.$$prepared || (o = R(o)), o.cleanupStyles && (o.from = o.to = null), o.from && (e.css(o.from), o.from = null);
                var a, s = new n;
                return {start: i, end: i}
            }
        }]
    }, wi = r("$compile"), bi = new function () {
    };
    re.$inject = ["$provide", "$$sanitizeUriProvider"], ie.prototype.isFirstChange = function () {
        return this.previousValue === bi
    };
    var _i = /^((?:x|data)[:\-_])/i, xi = /[:\-_]+(.)/g, ki = r("$controller"), Si = /^(\S+)(\s+as\s+([\w$]+))?$/,
        Mi = function () {
            this.$get = ["$document", function (t) {
                return function (e) {
                    return e ? !e.nodeType && e instanceof dr && (e = e[0]) : e = t[0].body, e.offsetWidth + 1
                }
            }]
        }, Ci = "application/json", Oi = {"Content-Type": Ci + ";charset=utf-8"}, Ei = /^\[|^\{(?!\{)/,
        Di = {"[": /]$/, "{": /}$/}, Ti = /^\)]\}',?\n/, Ai = r("$http"),
        Vi = Cr.$interpolateMinErr = r("$interpolate");
    Vi.throwNoconcat = function (t) {
        throw Vi("noconcat", t)
    }, Vi.interr = function (t, e) {
        return Vi("interr", t, e.toString())
    };
    var Pi = r("$interval"), Ni = function () {
            this.$get = function () {
                function t(t) {
                    var e = function (t) {
                        e.data = t, e.called = !0
                    };
                    return e.id = t, e
                }

                var e = Cr.callbacks, n = {};
                return {
                    createCallback: function (r) {
                        r = "_" + (e.$$counter++).toString(36);
                        var i = "angular.callbacks." + r, o = t(r);
                        return n[i] = e[r] = o, i
                    }, wasCalled: function (t) {
                        return n[t].called
                    }, getResponse: function (t) {
                        return n[t].data
                    }, removeCallback: function (t) {
                        delete e[n[t].id], delete n[t]
                    }
                }
            }
        }, Ii = /^([^?#]*)(\?([^#]*))?(#(.*))?$/, Ri = {http: 80, https: 443, ftp: 21}, Ui = r("$location"),
        Yi = /^\s*[\\\/]{2,}/, Li = {
            $$absUrl: "", $$html5: !1, $$replace: !1, $$compose: function () {
                for (var t = this.$$path, e = this.$$hash, n = K(this.$$search), e = e ? "#" + Q(e) : "", t = t.split("/"), r = t.length; r--;) t[r] = Q(t[r].replace(/%2F/g, "/"));
                this.$$url = t.join("/") + (n ? "?" + n : "") + e, this.$$absUrl = this.$$normalizeUrl(this.$$url), this.$$urlUpdatedByLocation = !0
            }, absUrl: Ne("$$absUrl"), url: function (t) {
                if (v(t)) return this.$$url;
                var e = Ii.exec(t);
                return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
            }, protocol: Ne("$$protocol"), host: Ne("$$host"), port: Ne("$$port"), path: Ie("$$path", function (t) {
                return t = null !== t ? t.toString() : "", "/" === t.charAt(0) ? t : "/" + t
            }), search: function (t, e) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (_(t) || x(t)) t = t.toString(), this.$$search = J(t); else {
                            if (!w(t)) throw Ui("isrcharg");
                            t = R(t, {}), o(t, function (e, n) {
                                null == e && delete t[n]
                            }), this.$$search = t
                        }
                        break;
                    default:
                        v(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
                }
                return this.$$compose(), this
            }, hash: Ie("$$hash", function (t) {
                return null !== t ? t.toString() : ""
            }), replace: function () {
                return this.$$replace = !0, this
            }
        };
    o([Pe, Ve, Ae], function (t) {
        t.prototype = Object.create(Li), t.prototype.state = function (e) {
            if (!arguments.length) return this.$$state;
            if (t !== Ae || !this.$$html5) throw Ui("nostate");
            return this.$$state = v(e) ? null : e, this.$$urlUpdatedByLocation = !0, this
        }
    });
    var ji = r("$parse"), Fi = {}.constructor.prototype.valueOf, Hi = ft();
    o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (t) {
        Hi[t] = !0
    });
    var Wi = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, zi = function (t) {
        this.options = t
    };
    zi.prototype = {
        constructor: zi, lex: function (t) {
            for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;) if ('"' === (t = this.text.charAt(this.index)) || "'" === t) this.readString(t); else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent(); else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: t
            }), this.index++; else if (this.isWhitespace(t)) this.index++; else {
                var e = t + this.peek(), n = e + this.peek(2), r = Hi[e], i = Hi[n];
                Hi[t] || r || i ? (t = i ? n : r ? e : t, this.tokens.push({
                    index: this.index,
                    text: t,
                    operator: !0
                }), this.index += t.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        }, is: function (t, e) {
            return -1 !== e.indexOf(t)
        }, peek: function (t) {
            return t = t || 1, this.index + t < this.text.length && this.text.charAt(this.index + t)
        }, isNumber: function (t) {
            return "0" <= t && "9" >= t && "string" == typeof t
        }, isWhitespace: function (t) {
            return " " === t || "\r" === t || "\t" === t || "\n" === t || "\v" === t || " " === t
        }, isIdentifierStart: function (t) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(t, this.codePointAt(t)) : this.isValidIdentifierStart(t)
        }, isValidIdentifierStart: function (t) {
            return "a" <= t && "z" >= t || "A" <= t && "Z" >= t || "_" === t || "$" === t
        }, isIdentifierContinue: function (t) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(t, this.codePointAt(t)) : this.isValidIdentifierContinue(t)
        }, isValidIdentifierContinue: function (t, e) {
            return this.isValidIdentifierStart(t, e) || this.isNumber(t)
        }, codePointAt: function (t) {
            return 1 === t.length ? t.charCodeAt(0) : (t.charCodeAt(0) << 10) + t.charCodeAt(1) - 56613888
        }, peekMultichar: function () {
            var t = this.text.charAt(this.index), e = this.peek();
            if (!e) return t;
            var n = t.charCodeAt(0), r = e.charCodeAt(0);
            return 55296 <= n && 56319 >= n && 56320 <= r && 57343 >= r ? t + e : t
        }, isExpOperator: function (t) {
            return "-" === t || "+" === t || this.isNumber(t)
        }, throwError: function (t, e, n) {
            throw n = n || this.index, e = y(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n, ji("lexerr", t, e, this.text)
        }, readNumber: function () {
            for (var t = "", e = this.index; this.index < this.text.length;) {
                var n = yr(this.text.charAt(this.index));
                if ("." === n || this.isNumber(n)) t += n; else {
                    var r = this.peek();
                    if ("e" === n && this.isExpOperator(r)) t += n; else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" === t.charAt(t.length - 1)) t += n; else {
                        if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" !== t.charAt(t.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({index: e, text: t, constant: !0, value: Number(t)})
        }, readIdent: function () {
            var t = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var e = this.peekMultichar();
                if (!this.isIdentifierContinue(e)) break;
                this.index += e.length
            }
            this.tokens.push({index: t, text: this.text.slice(t, this.index), identifier: !0})
        }, readString: function (t) {
            var e = this.index;
            this.index++;
            for (var n = "", r = t, i = !1; this.index < this.text.length;) {
                var o = this.text.charAt(this.index), r = r + o;
                if (i) "u" === o ? (i = this.text.substring(this.index + 1, this.index + 5), i.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + i + "]"), this.index += 4, n += String.fromCharCode(parseInt(i, 16))) : n += Wi[o] || o, i = !1; else if ("\\" === o) i = !0; else {
                    if (o === t) return this.index++, void this.tokens.push({
                        index: e,
                        text: r,
                        constant: !0,
                        value: n
                    });
                    n += o
                }
                this.index++
            }
            this.throwError("Unterminated quote", e)
        }
    };
    var qi = function (t, e) {
        this.lexer = t, this.options = e
    };
    qi.Program = "Program", qi.ExpressionStatement = "ExpressionStatement", qi.AssignmentExpression = "AssignmentExpression", qi.ConditionalExpression = "ConditionalExpression", qi.LogicalExpression = "LogicalExpression", qi.BinaryExpression = "BinaryExpression", qi.UnaryExpression = "UnaryExpression", qi.CallExpression = "CallExpression", qi.MemberExpression = "MemberExpression", qi.Identifier = "Identifier", qi.Literal = "Literal", qi.ArrayExpression = "ArrayExpression", qi.Property = "Property", qi.ObjectExpression = "ObjectExpression", qi.ThisExpression = "ThisExpression", qi.LocalsExpression = "LocalsExpression", qi.NGValueParameter = "NGValueParameter", qi.prototype = {
        ast: function (t) {
            return this.text = t, this.tokens = this.lexer.lex(t), t = this.program(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
        }, program: function () {
            for (var t = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), !this.expect(";")) return {
                type: qi.Program,
                body: t
            }
        }, expressionStatement: function () {
            return {type: qi.ExpressionStatement, expression: this.filterChain()}
        }, filterChain: function () {
            for (var t = this.expression(); this.expect("|");) t = this.filter(t);
            return t
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var t = this.ternary();
            if (this.expect("=")) {
                if (!ze(t)) throw ji("lval");
                t = {type: qi.AssignmentExpression, left: t, right: this.assignment(), operator: "="}
            }
            return t
        }, ternary: function () {
            var t, e, n = this.logicalOR();
            return this.expect("?") && (t = this.expression(), this.consume(":")) ? (e = this.expression(), {
                type: qi.ConditionalExpression,
                test: n,
                alternate: t,
                consequent: e
            }) : n
        }, logicalOR: function () {
            for (var t = this.logicalAND(); this.expect("||");) t = {
                type: qi.LogicalExpression,
                operator: "||",
                left: t,
                right: this.logicalAND()
            };
            return t
        }, logicalAND: function () {
            for (var t = this.equality(); this.expect("&&");) t = {
                type: qi.LogicalExpression,
                operator: "&&",
                left: t,
                right: this.equality()
            };
            return t
        }, equality: function () {
            for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");) e = {
                type: qi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.relational()
            };
            return e
        }, relational: function () {
            for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");) e = {
                type: qi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.additive()
            };
            return e
        }, additive: function () {
            for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = {
                type: qi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.multiplicative()
            };
            return e
        }, multiplicative: function () {
            for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = {
                type: qi.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.unary()
            };
            return e
        }, unary: function () {
            var t;
            return (t = this.expect("+", "-", "!")) ? {
                type: qi.UnaryExpression,
                operator: t.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        }, primary: function () {
            var t;
            this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? t = R(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? t = {
                type: qi.Literal,
                value: this.options.literals[this.consume().text]
            } : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var e; e = this.expect("(", "[", ".");) "(" === e.text ? (t = {
                type: qi.CallExpression,
                callee: t,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === e.text ? (t = {
                type: qi.MemberExpression,
                object: t,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === e.text ? t = {
                type: qi.MemberExpression,
                object: t,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return t
        }, filter: function (t) {
            t = [t];
            for (var e = {
                type: qi.CallExpression,
                callee: this.identifier(),
                arguments: t,
                filter: !0
            }; this.expect(":");) t.push(this.expression());
            return e
        }, parseArguments: function () {
            var t = [];
            if (")" !== this.peekToken().text) do {
                t.push(this.filterChain())
            } while (this.expect(","));
            return t
        }, identifier: function () {
            var t = this.consume();
            return t.identifier || this.throwError("is not a valid identifier", t), {type: qi.Identifier, name: t.text}
        }, constant: function () {
            return {type: qi.Literal, value: this.consume().value}
        }, arrayDeclaration: function () {
            var t = [];
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                t.push(this.expression())
            } while (this.expect(","));
            return this.consume("]"), {type: qi.ArrayExpression, elements: t}
        }, object: function () {
            var t, e = [];
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                t = {
                    type: qi.Property,
                    kind: "init"
                }, this.peek().constant ? (t.key = this.constant(), t.computed = !1, this.consume(":"), t.value = this.expression()) : this.peek().identifier ? (t.key = this.identifier(), t.computed = !1, this.peek(":") ? (this.consume(":"), t.value = this.expression()) : t.value = t.key) : this.peek("[") ? (this.consume("["), t.key = this.expression(), this.consume("]"), t.computed = !0, this.consume(":"), t.value = this.expression()) : this.throwError("invalid key", this.peek()), e.push(t)
            } while (this.expect(","));
            return this.consume("}"), {type: qi.ObjectExpression, properties: e}
        }, throwError: function (t, e) {
            throw ji("syntax", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
        }, consume: function (t) {
            if (0 === this.tokens.length) throw ji("ueoe", this.text);
            var e = this.expect(t);
            return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
        }, peekToken: function () {
            if (0 === this.tokens.length) throw ji("ueoe", this.text);
            return this.tokens[0]
        }, peek: function (t, e, n, r) {
            return this.peekAhead(0, t, e, n, r)
        }, peekAhead: function (t, e, n, r, i) {
            if (this.tokens.length > t) {
                t = this.tokens[t];
                var o = t.text;
                if (o === e || o === n || o === r || o === i || !(e || n || r || i)) return t
            }
            return !1
        }, expect: function (t, e, n, r) {
            return !!(t = this.peek(t, e, n, r)) && (this.tokens.shift(), t)
        }, selfReferential: {this: {type: qi.ThisExpression}, $locals: {type: qi.LocalsExpression}}
    };
    var Bi = 2;
    Be.prototype = {
        compile: function (t) {
            var e = this;
            this.state = {
                nextId: 0,
                filters: {},
                fn: {vars: [], body: [], own: {}},
                assign: {vars: [], body: [], own: {}},
                inputs: []
            }, He(t, e.$filter);
            var n, r = "";
            return this.stage = "assign", (n = qe(t)) && (this.state.computing = "assign", r = this.nextId(), this.recurse(n, r), this.return_(r), r = "fn.assign=" + this.generateFunction("assign", "s,v,l")), n = We(t.body), e.stage = "inputs", o(n, function (t, n) {
                var r = "fn" + n;
                e.state[r] = {vars: [], body: [], own: {}}, e.state.computing = r;
                var i = e.nextId();
                e.recurse(t, i), e.return_(i), e.state.inputs.push({name: r, isPure: t.isPure}), t.watchId = n
            }), this.state.computing = "fn", this.stage = "main", this.recurse(t), t = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + r + this.watchFns() + "return fn;", t = new Function("$filter", "getStringValue", "ifDefined", "plus", t)(this.$filter, Ye, Le, je), this.state = this.stage = void 0, t
        }, USE: "use", STRICT: "strict", watchFns: function () {
            var t = [], e = this.state.inputs, n = this;
            return o(e, function (e) {
                t.push("var " + e.name + "=" + n.generateFunction(e.name, "s")), e.isPure && t.push(e.name, ".isPure=" + JSON.stringify(e.isPure) + ";")
            }), e.length && t.push("fn.inputs=[" + e.map(function (t) {
                return t.name
            }).join(",") + "];"), t.join("")
        }, generateFunction: function (t, e) {
            return "function(" + e + "){" + this.varsPrefix(t) + this.body(t) + "};"
        }, filterPrefix: function () {
            var t = [], e = this;
            return o(this.state.filters, function (n, r) {
                t.push(n + "=$filter(" + e.escape(r) + ")")
            }), t.length ? "var " + t.join(",") + ";" : ""
        }, varsPrefix: function (t) {
            return this.state[t].vars.length ? "var " + this.state[t].vars.join(",") + ";" : ""
        }, body: function (t) {
            return this.state[t].body.join("")
        }, recurse: function (t, e, n, r, i, a) {
            var s, u, c, l, f, h = this;
            if (r = r || p, !a && y(t.watchId)) e = e || this.nextId(), this.if_("i", this.lazyAssign(e, this.computedMember("i", t.watchId)), this.lazyRecurse(t, e, n, r, i, !0)); else switch (t.type) {
                case qi.Program:
                    o(t.body, function (e, n) {
                        h.recurse(e.expression, void 0, void 0, function (t) {
                            u = t
                        }), n !== t.body.length - 1 ? h.current().body.push(u, ";") : h.return_(u)
                    });
                    break;
                case qi.Literal:
                    l = this.escape(t.value), this.assign(e, l), r(e || l);
                    break;
                case qi.UnaryExpression:
                    this.recurse(t.argument, void 0, void 0, function (t) {
                        u = t
                    }), l = t.operator + "(" + this.ifDefined(u, 0) + ")", this.assign(e, l), r(l);
                    break;
                case qi.BinaryExpression:
                    this.recurse(t.left, void 0, void 0, function (t) {
                        s = t
                    }), this.recurse(t.right, void 0, void 0, function (t) {
                        u = t
                    }), l = "+" === t.operator ? this.plus(s, u) : "-" === t.operator ? this.ifDefined(s, 0) + t.operator + this.ifDefined(u, 0) : "(" + s + ")" + t.operator + "(" + u + ")", this.assign(e, l), r(l);
                    break;
                case qi.LogicalExpression:
                    e = e || this.nextId(), h.recurse(t.left, e), h.if_("&&" === t.operator ? e : h.not(e), h.lazyRecurse(t.right, e)), r(e);
                    break;
                case qi.ConditionalExpression:
                    e = e || this.nextId(), h.recurse(t.test, e), h.if_(e, h.lazyRecurse(t.alternate, e), h.lazyRecurse(t.consequent, e)), r(e);
                    break;
                case qi.Identifier:
                    e = e || this.nextId(), n && (n.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", t.name) + "?l:s"), n.computed = !1, n.name = t.name), h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", t.name)), function () {
                        h.if_("inputs" === h.stage || "s", function () {
                            i && 1 !== i && h.if_(h.isNull(h.nonComputedMember("s", t.name)), h.lazyAssign(h.nonComputedMember("s", t.name), "{}")), h.assign(e, h.nonComputedMember("s", t.name))
                        })
                    }, e && h.lazyAssign(e, h.nonComputedMember("l", t.name))), r(e);
                    break;
                case qi.MemberExpression:
                    s = n && (n.context = this.nextId()) || this.nextId(), e = e || this.nextId(), h.recurse(t.object, s, void 0, function () {
                        h.if_(h.notNull(s), function () {
                            t.computed ? (u = h.nextId(), h.recurse(t.property, u), h.getStringValue(u), i && 1 !== i && h.if_(h.not(h.computedMember(s, u)), h.lazyAssign(h.computedMember(s, u), "{}")), l = h.computedMember(s, u), h.assign(e, l), n && (n.computed = !0, n.name = u)) : (i && 1 !== i && h.if_(h.isNull(h.nonComputedMember(s, t.property.name)), h.lazyAssign(h.nonComputedMember(s, t.property.name), "{}")), l = h.nonComputedMember(s, t.property.name), h.assign(e, l), n && (n.computed = !1, n.name = t.property.name))
                        }, function () {
                            h.assign(e, "undefined")
                        }), r(e)
                    }, !!i);
                    break;
                case qi.CallExpression:
                    e = e || this.nextId(), t.filter ? (u = h.filter(t.callee.name), c = [], o(t.arguments, function (t) {
                        var e = h.nextId();
                        h.recurse(t, e), c.push(e)
                    }), l = u + "(" + c.join(",") + ")", h.assign(e, l), r(e)) : (u = h.nextId(), s = {}, c = [], h.recurse(t.callee, u, s, function () {
                        h.if_(h.notNull(u), function () {
                            o(t.arguments, function (e) {
                                h.recurse(e, t.constant ? void 0 : h.nextId(), void 0, function (t) {
                                    c.push(t)
                                })
                            }), l = s.name ? h.member(s.context, s.name, s.computed) + "(" + c.join(",") + ")" : u + "(" + c.join(",") + ")", h.assign(e, l)
                        }, function () {
                            h.assign(e, "undefined")
                        }), r(e)
                    }));
                    break;
                case qi.AssignmentExpression:
                    u = this.nextId(), s = {}, this.recurse(t.left, void 0, s, function () {
                        h.if_(h.notNull(s.context), function () {
                            h.recurse(t.right, u), l = h.member(s.context, s.name, s.computed) + t.operator + u, h.assign(e, l), r(e || l)
                        })
                    }, 1);
                    break;
                case qi.ArrayExpression:
                    c = [], o(t.elements, function (e) {
                        h.recurse(e, t.constant ? void 0 : h.nextId(), void 0, function (t) {
                            c.push(t)
                        })
                    }), l = "[" + c.join(",") + "]", this.assign(e, l), r(e || l);
                    break;
                case qi.ObjectExpression:
                    c = [], f = !1, o(t.properties, function (t) {
                        t.computed && (f = !0)
                    }), f ? (e = e || this.nextId(), this.assign(e, "{}"), o(t.properties, function (t) {
                        t.computed ? (s = h.nextId(), h.recurse(t.key, s)) : s = t.key.type === qi.Identifier ? t.key.name : "" + t.key.value, u = h.nextId(), h.recurse(t.value, u), h.assign(h.member(e, s, t.computed), u)
                    })) : (o(t.properties, function (e) {
                        h.recurse(e.value, t.constant ? void 0 : h.nextId(), void 0, function (t) {
                            c.push(h.escape(e.key.type === qi.Identifier ? e.key.name : "" + e.key.value) + ":" + t)
                        })
                    }), l = "{" + c.join(",") + "}", this.assign(e, l)), r(e || l);
                    break;
                case qi.ThisExpression:
                    this.assign(e, "s"), r(e || "s");
                    break;
                case qi.LocalsExpression:
                    this.assign(e, "l"), r(e || "l");
                    break;
                case qi.NGValueParameter:
                    this.assign(e, "v"), r(e || "v")
            }
        }, getHasOwnProperty: function (t, e) {
            var n = t + "." + e, r = this.current().own;
            return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, t + "&&(" + this.escape(e) + " in " + t + ")")), r[n]
        }, assign: function (t, e) {
            if (t) return this.current().body.push(t, "=", e, ";"), t
        }, filter: function (t) {
            return this.state.filters.hasOwnProperty(t) || (this.state.filters[t] = this.nextId(!0)), this.state.filters[t]
        }, ifDefined: function (t, e) {
            return "ifDefined(" + t + "," + this.escape(e) + ")"
        }, plus: function (t, e) {
            return "plus(" + t + "," + e + ")"
        }, return_: function (t) {
            this.current().body.push("return ", t, ";")
        }, if_: function (t, e, n) {
            if (!0 === t) e(); else {
                var r = this.current().body;
                r.push("if(", t, "){"), e(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
            }
        },
        not: function (t) {
            return "!(" + t + ")"
        }, isNull: function (t) {
            return t + "==null"
        }, notNull: function (t) {
            return t + "!=null"
        }, nonComputedMember: function (t, e) {
            var n = /[^$_a-zA-Z0-9]/g;
            return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? t + "." + e : t + '["' + e.replace(n, this.stringEscapeFn) + '"]'
        }, computedMember: function (t, e) {
            return t + "[" + e + "]"
        }, member: function (t, e, n) {
            return n ? this.computedMember(t, e) : this.nonComputedMember(t, e)
        }, getStringValue: function (t) {
            this.assign(t, "getStringValue(" + t + ")")
        }, lazyRecurse: function (t, e, n, r, i, o) {
            var a = this;
            return function () {
                a.recurse(t, e, n, r, i, o)
            }
        }, lazyAssign: function (t, e) {
            var n = this;
            return function () {
                n.assign(t, e)
            }
        }, stringEscapeRegex: /[^ a-zA-Z0-9]/g, stringEscapeFn: function (t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }, escape: function (t) {
            if (_(t)) return "'" + t.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (x(t)) return t.toString();
            if (!0 === t) return "true";
            if (!1 === t) return "false";
            if (null === t) return "null";
            if (void 0 === t) return "undefined";
            throw ji("esc")
        }, nextId: function (t, e) {
            var n = "v" + this.state.nextId++;
            return t || this.current().vars.push(n + (e ? "=" + e : "")), n
        }, current: function () {
            return this.state[this.state.computing]
        }
    }, Ge.prototype = {
        compile: function (t) {
            var e = this;
            He(t, e.$filter);
            var n, r;
            (n = qe(t)) && (r = this.recurse(n)), n = We(t.body);
            var i;
            n && (i = [], o(n, function (t, n) {
                var r = e.recurse(t);
                r.isPure = t.isPure, t.input = r, i.push(r), t.watchId = n
            }));
            var a = [];
            return o(t.body, function (t) {
                a.push(e.recurse(t.expression))
            }), t = 0 === t.body.length ? p : 1 === t.body.length ? a[0] : function (t, e) {
                var n;
                return o(a, function (r) {
                    n = r(t, e)
                }), n
            }, r && (t.assign = function (t, e, n) {
                return r(t, n, e)
            }), i && (t.inputs = i), t
        }, recurse: function (t, e, n) {
            var r, i, a, s = this;
            if (t.input) return this.inputs(t.input, t.watchId);
            switch (t.type) {
                case qi.Literal:
                    return this.value(t.value, e);
                case qi.UnaryExpression:
                    return i = this.recurse(t.argument), this["unary" + t.operator](i, e);
                case qi.BinaryExpression:
                case qi.LogicalExpression:
                    return r = this.recurse(t.left), i = this.recurse(t.right), this["binary" + t.operator](r, i, e);
                case qi.ConditionalExpression:
                    return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), e);
                case qi.Identifier:
                    return s.identifier(t.name, e, n);
                case qi.MemberExpression:
                    return r = this.recurse(t.object, !1, !!n), t.computed || (i = t.property.name), t.computed && (i = this.recurse(t.property)), t.computed ? this.computedMember(r, i, e, n) : this.nonComputedMember(r, i, e, n);
                case qi.CallExpression:
                    return a = [], o(t.arguments, function (t) {
                        a.push(s.recurse(t))
                    }), t.filter && (i = this.$filter(t.callee.name)), t.filter || (i = this.recurse(t.callee, !0)), t.filter ? function (t, n, r, o) {
                        for (var s = [], u = 0; u < a.length; ++u) s.push(a[u](t, n, r, o));
                        return t = i.apply(void 0, s, o), e ? {context: void 0, name: void 0, value: t} : t
                    } : function (t, n, r, o) {
                        var s, u = i(t, n, r, o);
                        if (null != u.value) {
                            s = [];
                            for (var c = 0; c < a.length; ++c) s.push(a[c](t, n, r, o));
                            s = u.value.apply(u.context, s)
                        }
                        return e ? {value: s} : s
                    };
                case qi.AssignmentExpression:
                    return r = this.recurse(t.left, !0, 1), i = this.recurse(t.right), function (t, n, o, a) {
                        var s = r(t, n, o, a);
                        return t = i(t, n, o, a), s.context[s.name] = t, e ? {value: t} : t
                    };
                case qi.ArrayExpression:
                    return a = [], o(t.elements, function (t) {
                        a.push(s.recurse(t))
                    }), function (t, n, r, i) {
                        for (var o = [], s = 0; s < a.length; ++s) o.push(a[s](t, n, r, i));
                        return e ? {value: o} : o
                    };
                case qi.ObjectExpression:
                    return a = [], o(t.properties, function (t) {
                        t.computed ? a.push({
                            key: s.recurse(t.key),
                            computed: !0,
                            value: s.recurse(t.value)
                        }) : a.push({
                            key: t.key.type === qi.Identifier ? t.key.name : "" + t.key.value,
                            computed: !1,
                            value: s.recurse(t.value)
                        })
                    }), function (t, n, r, i) {
                        for (var o = {}, s = 0; s < a.length; ++s) a[s].computed ? o[a[s].key(t, n, r, i)] = a[s].value(t, n, r, i) : o[a[s].key] = a[s].value(t, n, r, i);
                        return e ? {value: o} : o
                    };
                case qi.ThisExpression:
                    return function (t) {
                        return e ? {value: t} : t
                    };
                case qi.LocalsExpression:
                    return function (t, n) {
                        return e ? {value: n} : n
                    };
                case qi.NGValueParameter:
                    return function (t, n, r) {
                        return e ? {value: r} : r
                    }
            }
        }, "unary+": function (t, e) {
            return function (n, r, i, o) {
                return n = t(n, r, i, o), n = y(n) ? +n : 0, e ? {value: n} : n
            }
        }, "unary-": function (t, e) {
            return function (n, r, i, o) {
                return n = t(n, r, i, o), n = y(n) ? -n : -0, e ? {value: n} : n
            }
        }, "unary!": function (t, e) {
            return function (n, r, i, o) {
                return n = !t(n, r, i, o), e ? {value: n} : n
            }
        }, "binary+": function (t, e, n) {
            return function (r, i, o, a) {
                var s = t(r, i, o, a);
                return r = e(r, i, o, a), s = je(s, r), n ? {value: s} : s
            }
        }, "binary-": function (t, e, n) {
            return function (r, i, o, a) {
                var s = t(r, i, o, a);
                return r = e(r, i, o, a), s = (y(s) ? s : 0) - (y(r) ? r : 0), n ? {value: s} : s
            }
        }, "binary*": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) * e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary/": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) / e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary%": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) % e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary===": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) === e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary!==": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) !== e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary==": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) == e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary!=": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) != e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary<": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) < e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary>": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) > e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary<=": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) <= e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary>=": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) >= e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary&&": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) && e(r, i, o, a), n ? {value: r} : r
            }
        }, "binary||": function (t, e, n) {
            return function (r, i, o, a) {
                return r = t(r, i, o, a) || e(r, i, o, a), n ? {value: r} : r
            }
        }, "ternary?:": function (t, e, n, r) {
            return function (i, o, a, s) {
                return i = t(i, o, a, s) ? e(i, o, a, s) : n(i, o, a, s), r ? {value: i} : i
            }
        }, value: function (t, e) {
            return function () {
                return e ? {context: void 0, name: void 0, value: t} : t
            }
        }, identifier: function (t, e, n) {
            return function (r, i, o, a) {
                return r = i && t in i ? i : r, n && 1 !== n && r && null == r[t] && (r[t] = {}), i = r ? r[t] : void 0, e ? {
                    context: r,
                    name: t,
                    value: i
                } : i
            }
        }, computedMember: function (t, e, n, r) {
            return function (i, o, a, s) {
                var u, c, l = t(i, o, a, s);
                return null != l && (u = e(i, o, a, s), u += "", r && 1 !== r && l && !l[u] && (l[u] = {}), c = l[u]), n ? {
                    context: l,
                    name: u,
                    value: c
                } : c
            }
        }, nonComputedMember: function (t, e, n, r) {
            return function (i, o, a, s) {
                return i = t(i, o, a, s), r && 1 !== r && i && null == i[e] && (i[e] = {}), o = null != i ? i[e] : void 0, n ? {
                    context: i,
                    name: e,
                    value: o
                } : o
            }
        }, inputs: function (t, e) {
            return function (n, r, i, o) {
                return o ? o[e] : t(n, r, i)
            }
        }
    }, Ze.prototype = {
        constructor: Ze, parse: function (t) {
            t = this.getAst(t);
            var e = this.astCompiler.compile(t.ast), n = t.ast;
            return e.literal = 0 === n.body.length || 1 === n.body.length && (n.body[0].expression.type === qi.Literal || n.body[0].expression.type === qi.ArrayExpression || n.body[0].expression.type === qi.ObjectExpression), e.constant = t.ast.constant, e.oneTime = t.oneTime, e
        }, getAst: function (t) {
            var e = !1;
            return t = t.trim(), ":" === t.charAt(0) && ":" === t.charAt(1) && (e = !0, t = t.substring(2)), {
                ast: this.ast.ast(t),
                oneTime: e
            }
        }
    };
    var Gi, Zi = r("$sce"),
        Ji = {HTML: "html", CSS: "css", MEDIA_URL: "mediaUrl", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"},
        Ki = /_([a-z])/g, Qi = r("$templateRequest"), Xi = r("$timeout"), to = t.document.createElement("a"),
        eo = mn(t.location.href);
    to.href = "http://[::1]";
    var no = "[::1]" === to.hostname;
    yn.$inject = ["$document"], bn.$inject = ["$provide"];
    var ro = 22, io = ".", oo = "0";
    Mn.$inject = ["$locale"], Cn.$inject = ["$locale"];
    var ao = {
            yyyy: An("FullYear", 4, 0, !1, !0),
            yy: An("FullYear", 2, 0, !0, !0),
            y: An("FullYear", 1, 0, !1, !0),
            MMMM: Vn("Month"),
            MMM: Vn("Month", !0),
            MM: An("Month", 2, 1),
            M: An("Month", 1, 1),
            LLLL: Vn("Month", !1, !0),
            dd: An("Date", 2),
            d: An("Date", 1),
            HH: An("Hours", 2),
            H: An("Hours", 1),
            hh: An("Hours", 2, -12),
            h: An("Hours", 1, -12),
            mm: An("Minutes", 2),
            m: An("Minutes", 1),
            ss: An("Seconds", 2),
            s: An("Seconds", 1),
            sss: An("Milliseconds", 3),
            EEEE: Vn("Day"),
            EEE: Vn("Day", !0),
            a: function (t, e) {
                return 12 > t.getHours() ? e.AMPMS[0] : e.AMPMS[1]
            },
            Z: function (t, e, n) {
                return t = -1 * n, t = (0 <= t ? "+" : "") + (Tn(Math[0 < t ? "floor" : "ceil"](t / 60), 2) + Tn(Math.abs(t % 60), 2))
            },
            ww: Nn(2),
            w: Nn(1),
            G: In,
            GG: In,
            GGG: In,
            GGGG: function (t, e) {
                return 0 >= t.getFullYear() ? e.ERANAMES[0] : e.ERANAMES[1]
            }
        }, so = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
        uo = /^-?\d+$/;
    Rn.$inject = ["$locale"];
    var co = $(yr), lo = $(wr);
    jn.$inject = ["$parse"];
    var fo = $({
        restrict: "E", compile: function (t, e) {
            if (!e.href && !e.xlinkHref) return function (t, e) {
                if ("a" === e[0].nodeName.toLowerCase()) {
                    var n = "[object SVGAnimatedString]" === kr.call(e.prop("href")) ? "xlink:href" : "href";
                    e.on("click", function (t) {
                        e.attr(n) || t.preventDefault()
                    })
                }
            }
        }
    }), ho = {};
    o(ei, function (t, e) {
        function n(t, n, i) {
            t.$watch(i[r], function (t) {
                i.$set(e, !!t)
            })
        }

        if ("multiple" !== t) {
            var r = oe("ng-" + e), i = n;
            "checked" === t && (i = function (t, e, i) {
                i.ngModel !== i[r] && n(t, e, i)
            }), ho[r] = function () {
                return {restrict: "A", priority: 100, link: i}
            }
        }
    }), o(ri, function (t, e) {
        ho[e] = function () {
            return {
                priority: 100, link: function (t, n, r) {
                    if ("ngPattern" === e && "/" === r.ngPattern.charAt(0) && (n = r.ngPattern.match(gr))) return void r.$set("ngPattern", new RegExp(n[1], n[2]));
                    t.$watch(r[e], function (t) {
                        r.$set(e, t)
                    })
                }
            }
        }
    }), o(["src", "srcset", "href"], function (t) {
        var e = oe("ng-" + t);
        ho[e] = ["$sce", function (n) {
            return {
                priority: 99, link: function (r, i, o) {
                    var a = t, s = t;
                    "href" === t && "[object SVGAnimatedString]" === kr.call(i.prop("href")) && (s = "xlinkHref", o.$attr[s] = "xlink:href", a = null), o.$set(e, n.getTrustedMediaUrl(o[e])), o.$observe(e, function (e) {
                        e ? (o.$set(s, e), hr && a && i.prop(a, o[s])) : "href" === t && o.$set(s, null)
                    })
                }
            }
        }]
    });
    var po = {
        $addControl: p, $getControls: $([]), $$renameControl: function (t, e) {
            t.$name = e
        }, $removeControl: p, $setValidity: p, $setDirty: p, $setPristine: p, $setSubmitted: p, $$setSubmitted: p
    };
    Hn.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"], Hn.prototype = {
        $rollbackViewValue: function () {
            o(this.$$controls, function (t) {
                t.$rollbackViewValue()
            })
        }, $commitViewValue: function () {
            o(this.$$controls, function (t) {
                t.$commitViewValue()
            })
        }, $addControl: function (t) {
            ut(t.$name, "input"), this.$$controls.push(t), t.$name && (this[t.$name] = t), t.$$parentForm = this
        }, $getControls: function () {
            return pt(this.$$controls)
        }, $$renameControl: function (t, e) {
            var n = t.$name;
            this[n] === t && delete this[n], this[e] = t, t.$name = e
        }, $removeControl: function (t) {
            t.$name && this[t.$name] === t && delete this[t.$name], o(this.$pending, function (e, n) {
                this.$setValidity(n, null, t)
            }, this), o(this.$error, function (e, n) {
                this.$setValidity(n, null, t)
            }, this), o(this.$$success, function (e, n) {
                this.$setValidity(n, null, t)
            }, this), I(this.$$controls, t), t.$$parentForm = po
        }, $setDirty: function () {
            this.$$animate.removeClass(this.$$element, Ko), this.$$animate.addClass(this.$$element, Qo), this.$dirty = !0, this.$pristine = !1, this.$$parentForm.$setDirty()
        }, $setPristine: function () {
            this.$$animate.setClass(this.$$element, Ko, Qo + " ng-submitted"), this.$dirty = !1, this.$pristine = !0, this.$submitted = !1, o(this.$$controls, function (t) {
                t.$setPristine()
            })
        }, $setUntouched: function () {
            o(this.$$controls, function (t) {
                t.$setUntouched()
            })
        }, $setSubmitted: function () {
            for (var t = this; t.$$parentForm && t.$$parentForm !== po;) t = t.$$parentForm;
            t.$$setSubmitted()
        }, $$setSubmitted: function () {
            this.$$animate.addClass(this.$$element, "ng-submitted"), this.$submitted = !0, o(this.$$controls, function (t) {
                t.$$setSubmitted && t.$$setSubmitted()
            })
        }
    }, zn({
        clazz: Hn, set: function (t, e, n) {
            var r = t[e];
            r ? -1 === r.indexOf(n) && r.push(n) : t[e] = [n]
        }, unset: function (t, e, n) {
            var r = t[e];
            r && (I(r, n), 0 === r.length && delete t[e])
        }
    });
    var mo = function (t) {
            return ["$timeout", "$parse", function (e, n) {
                function r(t) {
                    return "" === t ? n('this[""]').assign : n(t).assign || p
                }

                return {
                    name: "form",
                    restrict: t ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: Hn,
                    compile: function (n, i) {
                        n.addClass(Ko).addClass(Zo);
                        var o = i.name ? "name" : !(!t || !i.ngForm) && "ngForm";
                        return {
                            pre: function (t, n, i, a) {
                                var s = a[0];
                                if (!("action" in i)) {
                                    var u = function (e) {
                                        t.$apply(function () {
                                            s.$commitViewValue(), s.$setSubmitted()
                                        }), e.preventDefault()
                                    };
                                    n[0].addEventListener("submit", u), n.on("$destroy", function () {
                                        e(function () {
                                            n[0].removeEventListener("submit", u)
                                        }, 0, !1)
                                    })
                                }
                                (a[1] || s.$$parentForm).$addControl(s);
                                var c = o ? r(s.$name) : p;
                                o && (c(t, s), i.$observe(o, function (e) {
                                    s.$name !== e && (c(t, void 0), s.$$parentForm.$$renameControl(s, e), (c = r(s.$name))(t, s))
                                })), n.on("$destroy", function () {
                                    s.$$parentForm.$removeControl(s), c(t, void 0), l(s, po)
                                })
                            }
                        }
                    }
                }
            }]
        }, $o = mo(), go = mo(!0), vo = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        yo = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        wo = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        bo = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, _o = /^(\d{4,})-(\d{2})-(\d{2})$/,
        xo = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, ko = /^(\d{4,})-W(\d\d)$/,
        So = /^(\d{4,})-(\d\d)$/, Mo = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Co = ft();
    o(["date", "datetime-local", "month", "time", "week"], function (t) {
        Co[t] = !0
    });
    var Oo = {
        text: function (t, e, n, r, i, o) {
            Gn(t, e, n, r, i, o), Bn(r)
        },
        date: Jn("date", _o, Zn(_o, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": Jn("datetimelocal", xo, Zn(xo, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: Jn("time", Mo, Zn(Mo, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: Jn("week", ko, function (t, e) {
            if (k(t)) return t;
            if (_(t)) {
                ko.lastIndex = 0;
                var n = ko.exec(t);
                if (n) {
                    var r = +n[1], i = +n[2], o = n = 0, a = 0, s = 0, u = Pn(r), i = 7 * (i - 1);
                    return e && (n = e.getHours(), o = e.getMinutes(), a = e.getSeconds(), s = e.getMilliseconds()), new Date(r, 0, u.getDate() + i, n, o, a, s)
                }
            }
            return NaN
        }, "yyyy-Www"),
        month: Jn("month", So, Zn(So, ["yyyy", "MM"]), "yyyy-MM"),
        number: function (t, e, n, r, i, o, a, s) {
            Kn(t, e, n, r, "number"), Qn(r), Gn(t, e, n, r, i, o);
            var u;
            if (y(n.min) || n.ngMin) {
                var c = n.min || s(n.ngMin)(t);
                u = Xn(c), r.$validators.min = function (t, e) {
                    return r.$isEmpty(e) || v(u) || e >= u
                }, n.$observe("min", function (t) {
                    t !== c && (u = Xn(t), c = t, r.$validate())
                })
            }
            if (y(n.max) || n.ngMax) {
                var l = n.max || s(n.ngMax)(t), f = Xn(l);
                r.$validators.max = function (t, e) {
                    return r.$isEmpty(e) || v(f) || e <= f
                }, n.$observe("max", function (t) {
                    t !== l && (f = Xn(t), l = t, r.$validate())
                })
            }
            if (y(n.step) || n.ngStep) {
                var h = n.step || s(n.ngStep)(t), d = Xn(h);
                r.$validators.step = function (t, e) {
                    return r.$isEmpty(e) || v(d) || er(e, u || 0, d)
                }, n.$observe("step", function (t) {
                    t !== h && (d = Xn(t), h = t, r.$validate())
                })
            }
        },
        url: function (t, e, n, r, i, o) {
            Gn(t, e, n, r, i, o), Bn(r), r.$validators.url = function (t, e) {
                var n = t || e;
                return r.$isEmpty(n) || yo.test(n)
            }
        },
        email: function (t, e, n, r, i, o) {
            Gn(t, e, n, r, i, o), Bn(r), r.$validators.email = function (t, e) {
                var n = t || e;
                return r.$isEmpty(n) || wo.test(n)
            }
        },
        radio: function (t, e, n, r) {
            var i = !n.ngTrim || "false" !== Tr(n.ngTrim);
            v(n.name) && e.attr("name", ++Or), e.on("change", function (t) {
                var o;
                e[0].checked && (o = n.value, i && (o = Tr(o)), r.$setViewValue(o, t && t.type))
            }), r.$render = function () {
                var t = n.value;
                i && (t = Tr(t)), e[0].checked = t === r.$viewValue
            }, n.$observe("value", r.$render)
        },
        range: function (t, e, n, r, i, o) {
            function a(t, r) {
                e.attr(t, n[t]);
                var i = n[t];
                n.$observe(t, function (t) {
                    t !== i && (i = t, r(t))
                })
            }

            function s(t) {
                f = Xn(t), Er(r.$modelValue) || (l ? (t = e.val(), f > t && (t = f, e.val(t)), r.$setViewValue(t)) : r.$validate())
            }

            function u(t) {
                h = Xn(t), Er(r.$modelValue) || (l ? (t = e.val(), h < t && (e.val(h), t = h < f ? f : h), r.$setViewValue(t)) : r.$validate())
            }

            function c(t) {
                d = Xn(t), Er(r.$modelValue) || (l ? r.$viewValue !== e.val() && r.$setViewValue(e.val()) : r.$validate())
            }

            Kn(t, e, n, r, "range"), Qn(r), Gn(t, e, n, r, i, o);
            var l = r.$$hasNativeValidators && "range" === e[0].type, f = l ? 0 : void 0, h = l ? 100 : void 0,
                d = l ? 1 : void 0, p = e[0].validity;
            t = y(n.min), i = y(n.max), o = y(n.step);
            var m = r.$render;
            r.$render = l && y(p.rangeUnderflow) && y(p.rangeOverflow) ? function () {
                m(), r.$setViewValue(e.val())
            } : m, t && (f = Xn(n.min), r.$validators.min = l ? function () {
                return !0
            } : function (t, e) {
                return r.$isEmpty(e) || v(f) || e >= f
            }, a("min", s)), i && (h = Xn(n.max), r.$validators.max = l ? function () {
                return !0
            } : function (t, e) {
                return r.$isEmpty(e) || v(h) || e <= h
            }, a("max", u)), o && (d = Xn(n.step), r.$validators.step = l ? function () {
                return !p.stepMismatch
            } : function (t, e) {
                return r.$isEmpty(e) || v(d) || er(e, f || 0, d)
            }, a("step", c))
        },
        checkbox: function (t, e, n, r, i, o, a, s) {
            var u = nr(s, t, "ngTrueValue", n.ngTrueValue, !0), c = nr(s, t, "ngFalseValue", n.ngFalseValue, !1);
            e.on("change", function (t) {
                r.$setViewValue(e[0].checked, t && t.type)
            }), r.$render = function () {
                e[0].checked = r.$viewValue
            }, r.$isEmpty = function (t) {
                return !1 === t
            }, r.$formatters.push(function (t) {
                return Y(t, u)
            }), r.$parsers.push(function (t) {
                return t ? u : c
            })
        },
        hidden: p,
        button: p,
        submit: p,
        reset: p,
        file: p
    }, Eo = ["$browser", "$sniffer", "$filter", "$parse", function (t, e, n, r) {
        return {
            restrict: "E", require: ["?ngModel"], link: {
                pre: function (i, o, a, s) {
                    s[0] && (Oo[yr(a.type)] || Oo.text)(i, o, a, s[0], e, t, n, r)
                }
            }
        }
    }], Do = function () {
        var t = {
            configurable: !0, enumerable: !1, get: function () {
                return this.getAttribute("value") || ""
            }, set: function (t) {
                this.setAttribute("value", t)
            }
        };
        return {
            restrict: "E", priority: 200, compile: function (e, n) {
                if ("hidden" === yr(n.type)) return {
                    pre: function (e, n, r, i) {
                        e = n[0], e.parentNode && e.parentNode.insertBefore(e, e.nextSibling), Object.defineProperty && Object.defineProperty(e, "value", t)
                    }
                }
            }
        }
    }, To = /^(true|false|\d+)$/, Ao = function () {
        function t(t, e, n) {
            var r = y(n) ? n : 9 === hr ? "" : null;
            t.prop("value", r), e.$set("value", n)
        }

        return {
            restrict: "A", priority: 100, compile: function (e, n) {
                return To.test(n.ngValue) ? function (e, n, r) {
                    e = e.$eval(r.ngValue), t(n, r, e)
                } : function (e, n, r) {
                    e.$watch(r.ngValue, function (e) {
                        t(n, r, e)
                    })
                }
            }
        }
    }, Vo = ["$compile", function (t) {
        return {
            restrict: "AC", compile: function (e) {
                return t.$$addBindingClass(e), function (e, n, r) {
                    t.$$addBindingInfo(n, r.ngBind), n = n[0], e.$watch(r.ngBind, function (t) {
                        n.textContent = ht(t)
                    })
                }
            }
        }
    }], Po = ["$interpolate", "$compile", function (t, e) {
        return {
            compile: function (n) {
                return e.$$addBindingClass(n), function (n, r, i) {
                    n = t(r.attr(i.$attr.ngBindTemplate)), e.$$addBindingInfo(r, n.expressions), r = r[0], i.$observe("ngBindTemplate", function (t) {
                        r.textContent = v(t) ? "" : t
                    })
                }
            }
        }
    }], No = ["$sce", "$parse", "$compile", function (t, e, n) {
        return {
            restrict: "A", compile: function (r, i) {
                var o = e(i.ngBindHtml), a = e(i.ngBindHtml, function (e) {
                    return t.valueOf(e)
                });
                return n.$$addBindingClass(r), function (e, r, i) {
                    n.$$addBindingInfo(r, i.ngBindHtml), e.$watch(a, function () {
                        var n = o(e);
                        r.html(t.getTrustedHtml(n) || "")
                    })
                }
            }
        }
    }], Io = $({
        restrict: "A", require: "ngModel", link: function (t, e, n, r) {
            r.$viewChangeListeners.push(function () {
                t.$eval(n.ngChange)
            })
        }
    }), Ro = rr("", !0), Uo = rr("Odd", 0), Yo = rr("Even", 1), Lo = Fn({
        compile: function (t, e) {
            e.$set("ngCloak", void 0), t.removeClass("ng-cloak")
        }
    }), jo = [function () {
        return {restrict: "A", scope: !0, controller: "@", priority: 500}
    }], Fo = {}, Ho = {blur: !0, focus: !0};
    o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (t) {
        var e = oe("ng-" + t);
        Fo[e] = ["$parse", "$rootScope", "$exceptionHandler", function (n, r, i) {
            return ir(n, r, i, e, t, Ho[t])
        }]
    });
    var Wo = ["$animate", "$compile", function (t, e) {
        return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (n, r, i, o, a) {
                var s, u, c;
                n.$watch(i.ngIf, function (n) {
                    n ? u || a(function (n, o) {
                        u = o, n[n.length++] = e.$$createComment("end ngIf", i.ngIf), s = {clone: n}, t.enter(n, r.parent(), r)
                    }) : (c && (c.remove(), c = null), u && (u.$destroy(), u = null), s && (c = lt(s.clone), t.leave(c).done(function (t) {
                        !1 !== t && (c = null)
                    }), s = null))
                })
            }
        }
    }], zo = ["$templateRequest", "$anchorScroll", "$animate", function (t, e, n) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: Cr.noop,
            compile: function (r, i) {
                var o = i.ngInclude || i.src, a = i.onload || "", s = i.autoscroll;
                return function (r, i, u, c, l) {
                    var f, h, d, p = 0, m = function () {
                        h && (h.remove(), h = null), f && (f.$destroy(), f = null), d && (n.leave(d).done(function (t) {
                            !1 !== t && (h = null)
                        }), h = d, d = null)
                    };
                    r.$watch(o, function (o) {
                        var u = function (t) {
                            !1 === t || !y(s) || s && !r.$eval(s) || e()
                        }, h = ++p;
                        o ? (t(o, !0).then(function (t) {
                            if (!r.$$destroyed && h === p) {
                                var e = r.$new();
                                c.template = t, t = l(e, function (t) {
                                    m(), n.enter(t, null, i).done(u)
                                }), f = e, d = t, f.$emit("$includeContentLoaded", o), r.$eval(a)
                            }
                        }, function () {
                            r.$$destroyed || h !== p || (m(), r.$emit("$includeContentError", o))
                        }), r.$emit("$includeContentRequested", o)) : (m(), c.template = null)
                    })
                }
            }
        }
    }], qo = ["$compile", function (e) {
        return {
            restrict: "ECA", priority: -400, require: "ngInclude", link: function (n, r, i, o) {
                kr.call(r[0]).match(/SVG/) ? (r.empty(), e(yt(o.template, t.document).childNodes)(n, function (t) {
                    r.append(t)
                }, {futureParentElement: r})) : (r.html(o.template), e(r.contents())(n))
            }
        }
    }], Bo = Fn({
        priority: 450, compile: function () {
            return {
                pre: function (t, e, n) {
                    t.$eval(n.ngInit)
                }
            }
        }
    }), Go = function () {
        return {
            restrict: "A", priority: 100, require: "ngModel", link: function (t, e, n, r) {
                var i = n.ngList || ", ", a = "false" !== n.ngTrim, s = a ? Tr(i) : i;
                r.$parsers.push(function (t) {
                    if (!v(t)) {
                        var e = [];
                        return t && o(t.split(s), function (t) {
                            t && e.push(a ? Tr(t) : t)
                        }), e
                    }
                }), r.$formatters.push(function (t) {
                    if (S(t)) return t.join(i)
                }), r.$isEmpty = function (t) {
                    return !t || !t.length
                }
            }
        }
    }, Zo = "ng-valid", Jo = "ng-invalid", Ko = "ng-pristine", Qo = "ng-dirty", Xo = r("ngModel");
    or.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" "), or.prototype = {
        $$initGetterSetters: function () {
            if (this.$options.getOption("getterSetter")) {
                var t = this.$$parse(this.$$attr.ngModel + "()"), e = this.$$parse(this.$$attr.ngModel + "($$$p)");
                this.$$ngModelGet = function (e) {
                    var n = this.$$parsedNgModel(e);
                    return C(n) && (n = t(e)), n
                }, this.$$ngModelSet = function (t, n) {
                    C(this.$$parsedNgModel(t)) ? e(t, {$$$p: n}) : this.$$parsedNgModelAssign(t, n)
                }
            } else if (!this.$$parsedNgModel.assign) throw Xo("nonassign", this.$$attr.ngModel, G(this.$$element))
        }, $render: p, $isEmpty: function (t) {
            return v(t) || "" === t || null === t || t !== t
        }, $$updateEmptyClasses: function (t) {
            this.$isEmpty(t) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"))
        }, $setPristine: function () {
            this.$dirty = !1, this.$pristine = !0, this.$$animate.removeClass(this.$$element, Qo), this.$$animate.addClass(this.$$element, Ko)
        }, $setDirty: function () {
            this.$dirty = !0, this.$pristine = !1, this.$$animate.removeClass(this.$$element, Ko), this.$$animate.addClass(this.$$element, Qo), this.$$parentForm.$setDirty()
        }, $setUntouched: function () {
            this.$touched = !1, this.$untouched = !0, this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched")
        }, $setTouched: function () {
            this.$touched = !0, this.$untouched = !1, this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched")
        }, $rollbackViewValue: function () {
            this.$$timeout.cancel(this.$$pendingDebounce), this.$viewValue = this.$$lastCommittedViewValue, this.$render()
        }, $validate: function () {
            if (!Er(this.$modelValue)) {
                var t = this.$$lastCommittedViewValue, e = this.$$rawModelValue, n = this.$valid, r = this.$modelValue,
                    i = this.$options.getOption("allowInvalid"), o = this;
                this.$$runValidators(e, t, function (t) {
                    i || n === t || (o.$modelValue = t ? e : void 0, o.$modelValue !== r && o.$$writeModelToScope())
                })
            }
        }, $$runValidators: function (t, e, n) {
            function r(t, e) {
                a === s.$$currentValidationRunId && s.$setValidity(t, e)
            }

            function i(t) {
                a === s.$$currentValidationRunId && n(t)
            }

            this.$$currentValidationRunId++;
            var a = this.$$currentValidationRunId, s = this;
            !function () {
                var t = s.$$parserName;
                return v(s.$$parserValid) ? (r(t, null), !0) : (s.$$parserValid || (o(s.$validators, function (t, e) {
                    r(e, null)
                }), o(s.$asyncValidators, function (t, e) {
                    r(e, null)
                })), r(t, s.$$parserValid), s.$$parserValid)
            }() ? i(!1) : function () {
                var n = !0;
                return o(s.$validators, function (i, o) {
                    var a = Boolean(i(t, e));
                    n = n && a, r(o, a)
                }), !!n || (o(s.$asyncValidators, function (t, e) {
                    r(e, null)
                }), !1)
            }() ? function () {
                var n = [], a = !0;
                o(s.$asyncValidators, function (i, o) {
                    var s = i(t, e);
                    if (!s || !C(s.then)) throw Xo("nopromise", s);
                    r(o, void 0), n.push(s.then(function () {
                        r(o, !0)
                    }, function () {
                        a = !1, r(o, !1)
                    }))
                }), n.length ? s.$$q.all(n).then(function () {
                    i(a)
                }, p) : i(!0)
            }() : i(!1)
        }, $commitViewValue: function () {
            var t = this.$viewValue;
            this.$$timeout.cancel(this.$$pendingDebounce), (this.$$lastCommittedViewValue !== t || "" === t && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(t), this.$$lastCommittedViewValue = t, this.$pristine && this.$setDirty(), this.$$parseAndValidate())
        }, $$parseAndValidate: function () {
            var t = this.$$lastCommittedViewValue, e = this;
            if (this.$$parserValid = !v(t) || void 0, this.$setValidity(this.$$parserName, null), this.$$parserName = "parse", this.$$parserValid) for (var n = 0; n < this.$parsers.length; n++) if (t = this.$parsers[n](t), v(t)) {
                this.$$parserValid = !1;
                break
            }
            Er(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
            var r = this.$modelValue, i = this.$options.getOption("allowInvalid");
            this.$$rawModelValue = t, i && (this.$modelValue = t, e.$modelValue !== r && e.$$writeModelToScope()), this.$$runValidators(t, this.$$lastCommittedViewValue, function (n) {
                i || (e.$modelValue = n ? t : void 0, e.$modelValue !== r && e.$$writeModelToScope())
            })
        }, $$writeModelToScope: function () {
            this.$$ngModelSet(this.$$scope, this.$modelValue), o(this.$viewChangeListeners, function (t) {
                try {
                    t()
                } catch (t) {
                    this.$$exceptionHandler(t)
                }
            }, this)
        }, $setViewValue: function (t, e) {
            this.$viewValue = t, this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(e)
        }, $$debounceViewValueCommit: function (t) {
            var e = this.$options.getOption("debounce");
            x(e[t]) ? e = e[t] : x(e.default) && -1 === this.$options.getOption("updateOn").indexOf(t) ? e = e.default : x(e["*"]) && (e = e["*"]), this.$$timeout.cancel(this.$$pendingDebounce);
            var n = this;
            0 < e ? this.$$pendingDebounce = this.$$timeout(function () {
                n.$commitViewValue()
            }, e) : this.$$rootScope.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function () {
                n.$commitViewValue()
            })
        }, $overrideModelOptions: function (t) {
            this.$options = this.$options.createChild(t), this.$$setUpdateOnEvents()
        }, $processModelValue: function () {
            var t = this.$$format();
            this.$viewValue !== t && (this.$$updateEmptyClasses(t), this.$viewValue = this.$$lastCommittedViewValue = t, this.$render(), this.$$runValidators(this.$modelValue, this.$viewValue, p))
        }, $$format: function () {
            for (var t = this.$formatters, e = t.length, n = this.$modelValue; e--;) n = t[e](n);
            return n
        }, $$setModelValue: function (t) {
            this.$modelValue = this.$$rawModelValue = t, this.$$parserValid = void 0, this.$processModelValue()
        }, $$setUpdateOnEvents: function () {
            this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler), (this.$$updateEvents = this.$options.getOption("updateOn")) && this.$$element.on(this.$$updateEvents, this.$$updateEventHandler)
        }, $$updateEventHandler: function (t) {
            this.$$debounceViewValueCommit(t && t.type)
        }
    }, zn({
        clazz: or, set: function (t, e) {
            t[e] = !0
        }, unset: function (t, e) {
            delete t[e]
        }
    });
    var ta, ea = ["$rootScope", function (t) {
        return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: or,
            priority: 1,
            compile: function (e) {
                return e.addClass(Ko).addClass("ng-untouched").addClass(Zo), {
                    pre: function (t, e, n, r) {
                        var i = r[0];
                        e = r[1] || i.$$parentForm, (r = r[2]) && (i.$options = r.$options), i.$$initGetterSetters(), e.$addControl(i), n.$observe("name", function (t) {
                            i.$name !== t && i.$$parentForm.$$renameControl(i, t)
                        }), t.$on("$destroy", function () {
                            i.$$parentForm.$removeControl(i)
                        })
                    }, post: function (e, n, r, i) {
                        function o() {
                            a.$setTouched()
                        }

                        var a = i[0];
                        a.$$setUpdateOnEvents(), n.on("blur", function () {
                            a.$touched || (t.$$phase ? e.$evalAsync(o) : e.$apply(o))
                        })
                    }
                }
            }
        }
    }], na = /(\s+|^)default(\s+|$)/;
    sr.prototype = {
        getOption: function (t) {
            return this.$$options[t]
        }, createChild: function (t) {
            var e = !1;
            return t = l({}, t), o(t, function (n, r) {
                "$inherit" === n ? "*" === r ? e = !0 : (t[r] = this.$$options[r], "updateOn" === r && (t.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === r && (t.updateOnDefault = !1, t[r] = Tr(n.replace(na, function () {
                    return t.updateOnDefault = !0, " "
                })))
            }, this), e && (delete t["*"], ur(t, this.$$options)), ur(t, ta.$$options), new sr(t)
        }
    }, ta = new sr({
        updateOn: "",
        updateOnDefault: !0,
        debounce: 0,
        getterSetter: !1,
        allowInvalid: !1,
        timezone: null
    });
    var ra = function () {
            function t(t, e) {
                this.$$attrs = t, this.$$scope = e
            }

            return t.$inject = ["$attrs", "$scope"], t.prototype = {
                $onInit: function () {
                    var t = this.parentCtrl ? this.parentCtrl.$options : ta,
                        e = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                    this.$options = t.createChild(e)
                }
            }, {
                restrict: "A",
                priority: 10,
                require: {parentCtrl: "?^^ngModelOptions"},
                bindToController: !0,
                controller: t
            }
        }, ia = Fn({terminal: !0, priority: 1e3}), oa = r("ngOptions"),
        aa = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        sa = ["$compile", "$document", "$parse", function (e, n, r) {
            function a(t, e, n) {
                function o(t, e, n, r, i) {
                    this.selectValue = t, this.viewValue = e, this.label = n, this.group = r, this.disabled = i
                }

                function a(t) {
                    var e;
                    if (!c && i(t)) e = t; else {
                        e = [];
                        for (var n in t) t.hasOwnProperty(n) && "$" !== n.charAt(0) && e.push(n)
                    }
                    return e
                }

                var s = t.match(aa);
                if (!s) throw oa("iexp", t, G(e));
                var u = s[5] || s[7], c = s[6];
                t = / as /.test(s[0]) && s[1];
                var l = s[9];
                e = r(s[2] ? s[1] : u);
                var f = t && r(t) || e, h = l && r(l), d = l ? function (t, e) {
                        return h(n, e)
                    } : function (t) {
                        return Wt(t)
                    }, p = function (t, e) {
                        return d(t, w(t, e))
                    }, m = r(s[2] || s[1]), $ = r(s[3] || ""), g = r(s[4] || ""), v = r(s[8]), y = {},
                    w = c ? function (t, e) {
                        return y[c] = e, y[u] = t, y
                    } : function (t) {
                        return y[u] = t, y
                    };
                return {
                    trackBy: l, getTrackByValue: p, getWatchables: r(v, function (t) {
                        var e = [];
                        t = t || [];
                        for (var r = a(t), i = r.length, o = 0; o < i; o++) {
                            var u = t === r ? o : r[o], c = t[u], u = w(c, u), c = d(c, u);
                            e.push(c), (s[2] || s[1]) && (c = m(n, u), e.push(c)), s[4] && (u = g(n, u), e.push(u))
                        }
                        return e
                    }), getOptions: function () {
                        for (var t = [], e = {}, r = v(n) || [], i = a(r), s = i.length, u = 0; u < s; u++) {
                            var c = r === i ? u : i[u], h = w(r[c], c), y = f(n, h), c = d(y, h), b = m(n, h),
                                _ = $(n, h), h = g(n, h), y = new o(c, y, b, _, h);
                            t.push(y), e[c] = y
                        }
                        return {
                            items: t, selectValueMap: e, getOptionFromViewValue: function (t) {
                                return e[p(t)]
                            }, getViewValueFromOption: function (t) {
                                return l ? R(t.viewValue) : t.viewValue
                            }
                        }
                    }
                }
            }

            var s = t.document.createElement("option"), u = t.document.createElement("optgroup");
            return {
                restrict: "A", terminal: !0, require: ["select", "ngModel"], link: {
                    pre: function (t, e, n, r) {
                        r[0].registerOption = p
                    }, post: function (t, r, i, c) {
                        function l(t) {
                            var e = (t = g.getOptionFromViewValue(t)) && t.element;
                            return e && !e.selected && (e.selected = !0), t
                        }

                        function f(t, e) {
                            t.element = e, e.disabled = t.disabled, t.label !== e.label && (e.label = t.label, e.textContent = t.label), e.value = t.selectValue
                        }

                        var h = c[0], d = c[1], p = i.multiple;
                        c = 0;
                        for (var m = r.children(), $ = m.length; c < $; c++) if ("" === m[c].value) {
                            h.hasEmptyOption = !0, h.emptyOption = m.eq(c);
                            break
                        }
                        r.empty(), c = !!h.emptyOption, dr(s.cloneNode(!1)).val("?");
                        var g, v = a(i.ngOptions, r, t), w = n[0].createDocumentFragment();
                        h.generateUnknownOptionValue = function (t) {
                            return "?"
                        }, p ? (h.writeValue = function (t) {
                            if (g) {
                                var e = t && t.map(l) || [];
                                g.items.forEach(function (t) {
                                    t.element.selected && -1 === Array.prototype.indexOf.call(e, t) && (t.element.selected = !1)
                                })
                            }
                        }, h.readValue = function () {
                            var t = r.val() || [], e = [];
                            return o(t, function (t) {
                                (t = g.selectValueMap[t]) && !t.disabled && e.push(g.getViewValueFromOption(t))
                            }), e
                        }, v.trackBy && t.$watchCollection(function () {
                            if (S(d.$viewValue)) return d.$viewValue.map(function (t) {
                                return v.getTrackByValue(t)
                            })
                        }, function () {
                            d.$render()
                        })) : (h.writeValue = function (t) {
                            if (g) {
                                var e = r[0].options[r[0].selectedIndex], n = g.getOptionFromViewValue(t);
                                e && e.removeAttribute("selected"), n ? (r[0].value !== n.selectValue && (h.removeUnknownOption(), r[0].value = n.selectValue, n.element.selected = !0), n.element.setAttribute("selected", "selected")) : h.selectUnknownOrEmptyOption(t)
                            }
                        }, h.readValue = function () {
                            var t = g.selectValueMap[r.val()];
                            return t && !t.disabled ? (h.unselectEmptyOption(), h.removeUnknownOption(), g.getViewValueFromOption(t)) : null
                        }, v.trackBy && t.$watch(function () {
                            return v.getTrackByValue(d.$viewValue)
                        }, function () {
                            d.$render()
                        })), c && (e(h.emptyOption)(t), r.prepend(h.emptyOption), 8 === h.emptyOption[0].nodeType ? (h.hasEmptyOption = !1, h.registerOption = function (t, e) {
                            "" === e.val() && (h.hasEmptyOption = !0, h.emptyOption = e, h.emptyOption.removeClass("ng-scope"), d.$render(), e.on("$destroy", function () {
                                var t = h.$isEmptyOptionSelected();
                                h.hasEmptyOption = !1, h.emptyOption = void 0, t && d.$render()
                            }))
                        }) : h.emptyOption.removeClass("ng-scope")), t.$watchCollection(v.getWatchables, function () {
                            var t = g && h.readValue();
                            if (g) for (var e = g.items.length - 1; 0 <= e; e--) {
                                var n = g.items[e];
                                It(y(n.group) ? n.element.parentNode : n.element)
                            }
                            g = v.getOptions();
                            var i = {};
                            g.items.forEach(function (t) {
                                var e;
                                if (y(t.group)) {
                                    e = i[t.group], e || (e = u.cloneNode(!1), w.appendChild(e), e.label = null === t.group ? "null" : t.group, i[t.group] = e);
                                    var n = s.cloneNode(!1);
                                    e.appendChild(n), f(t, n)
                                } else e = s.cloneNode(!1), w.appendChild(e), f(t, e)
                            }), r[0].appendChild(w), d.$render(), d.$isEmpty(t) || (e = h.readValue(), (v.trackBy || p ? Y(t, e) : t === e) || (d.$setViewValue(e), d.$render()))
                        })
                    }
                }
            }
        }], ua = ["$locale", "$interpolate", "$log", function (t, e, n) {
            var r = /{}/g, i = /^when(Minus)?(.+)$/;
            return {
                link: function (a, s, u) {
                    function c(t) {
                        s.text(t || "")
                    }

                    var l, f = u.count, h = u.$attr.when && s.attr(u.$attr.when), d = u.offset || 0, m = a.$eval(h) || {},
                        $ = {}, g = e.startSymbol(), y = e.endSymbol(), w = g + f + "-" + d + y, b = Cr.noop;
                    o(u, function (t, e) {
                        var n = i.exec(e);
                        n && (n = (n[1] ? "-" : "") + yr(n[2]), m[n] = s.attr(u.$attr[e]))
                    }), o(m, function (t, n) {
                        $[n] = e(t.replace(r, w))
                    }), a.$watch(f, function (e) {
                        var r = parseFloat(e), i = Er(r);
                        i || r in m || (r = t.pluralCat(r - d)), r === l || i && Er(l) || (b(), i = $[r], v(i) ? (null != e && n.debug("ngPluralize: no rule defined for '" + r + "' in " + h), b = p, c()) : b = a.$watch(i, c), l = r)
                    })
                }
            }
        }], ca = r("ngRef"), la = ["$parse", function (t) {
            return {
                priority: -1, restrict: "A", compile: function (e, n) {
                    var r = oe(N(e)), i = t(n.ngRef), o = i.assign || function () {
                        throw ca("nonassign", n.ngRef)
                    };
                    return function (t, e, a) {
                        var s;
                        if (a.hasOwnProperty("ngRefRead")) {
                            if ("$element" === a.ngRefRead) s = e; else if (!(s = e.data("$" + a.ngRefRead + "Controller"))) throw ca("noctrl", a.ngRefRead, n.ngRef)
                        } else s = e.data("$" + r + "Controller");
                        s = s || e, o(t, s), e.on("$destroy", function () {
                            i(t) === s && o(t, null)
                        })
                    }
                }
            }
        }], fa = ["$parse", "$animate", "$compile", function (t, e, n) {
            var a = r("ngRepeat"), s = function (t, e, n, r, i, o, a) {
                t[n] = r, i && (t[i] = o), t.$index = e, t.$first = 0 === e, t.$last = e === a - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 == (1 & e))
            }, u = function (t, e, n) {
                return Wt(n)
            }, c = function (t, e) {
                return e
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function (r, l) {
                    var f = l.ngRepeat, h = n.$$createComment("end ngRepeat", f),
                        d = f.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!d) throw a("iexp", f);
                    var p = d[1], m = d[2], $ = d[3], g = d[4],
                        d = p.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);
                    if (!d) throw a("iidexp", p);
                    var v = d[3] || d[1], y = d[2];
                    if ($ && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test($) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test($))) throw a("badident", $);
                    var w;
                    if (g) {
                        var b = {$id: Wt}, _ = t(g);
                        w = function (t, e, n, r) {
                            return y && (b[y] = e), b[v] = n, b.$index = r, _(t, b)
                        }
                    }
                    return function (t, n, r, l, d) {
                        var p = ft();
                        t.$watchCollection(m, function (r) {
                            var l, m, g, _, x, k, S, M, C, O, E = n[0], D = ft();
                            if ($ && (t[$] = r), i(r)) M = r, m = w || u; else for (O in m = w || c, M = [], r) vr.call(r, O) && "$" !== O.charAt(0) && M.push(O);
                            for (_ = M.length, O = Array(_), l = 0; l < _; l++) if (x = r === M ? l : M[l], k = r[x], S = m(t, x, k, l), p[S]) C = p[S], delete p[S], D[S] = C, O[l] = C; else {
                                if (D[S]) throw o(O, function (t) {
                                    t && t.scope && (p[t.id] = t)
                                }), a("dupes", f, S, k);
                                O[l] = {id: S, scope: void 0, clone: void 0}, D[S] = !0
                            }
                            b && (b[v] = void 0);
                            for (g in p) {
                                if (C = p[g], S = lt(C.clone), e.leave(S), S[0].parentNode) for (l = 0, m = S.length; l < m; l++) S[l].$$NG_REMOVED = !0;
                                C.scope.$destroy()
                            }
                            for (l = 0; l < _; l++) if (x = r === M ? l : M[l], k = r[x], C = O[l], C.scope) {
                                g = E;
                                do {
                                    g = g.nextSibling
                                } while (g && g.$$NG_REMOVED);
                                C.clone[0] !== g && e.move(lt(C.clone), null, E), E = C.clone[C.clone.length - 1], s(C.scope, l, v, k, y, x, _)
                            } else d(function (t, n) {
                                C.scope = n;
                                var r = h.cloneNode(!1);
                                t[t.length++] = r, e.enter(t, null, E), E = r, C.clone = t, D[C.id] = C, s(C.scope, l, v, k, y, x, _)
                            });
                            p = D
                        })
                    }
                }
            }
        }], ha = ["$animate", function (t) {
            return {
                restrict: "A", multiElement: !0, link: function (e, n, r) {
                    e.$watch(r.ngShow, function (e) {
                        t[e ? "removeClass" : "addClass"](n, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], da = ["$animate", function (t) {
            return {
                restrict: "A", multiElement: !0, link: function (e, n, r) {
                    e.$watch(r.ngHide, function (e) {
                        t[e ? "addClass" : "removeClass"](n, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], pa = Fn(function (t, e, n) {
            t.$watchCollection(n.ngStyle, function (t, n) {
                n && t !== n && (t || (t = {}), o(n, function (e, n) {
                    null == t[n] && (t[n] = "")
                })), t && e.css(t)
            })
        }), ma = ["$animate", "$compile", function (t, e) {
            return {
                require: "ngSwitch", controller: ["$scope", function () {
                    this.cases = {}
                }], link: function (n, r, i, a) {
                    var s = [], u = [], c = [], l = [], f = function (t, e) {
                        return function (n) {
                            !1 !== n && t.splice(e, 1)
                        }
                    };
                    n.$watch(i.ngSwitch || i.on, function (n) {
                        for (var r, i; c.length;) t.cancel(c.pop());
                        for (r = 0, i = l.length; r < i; ++r) {
                            var h = lt(u[r].clone);
                            l[r].$destroy(), (c[r] = t.leave(h)).done(f(c, r))
                        }
                        u.length = 0, l.length = 0, (s = a.cases["!" + n] || a.cases["?"]) && o(s, function (n) {
                            n.transclude(function (r, i) {
                                l.push(i);
                                var o = n.element;
                                r[r.length++] = e.$$createComment("end ngSwitchWhen"), u.push({clone: r}), t.enter(r, o.parent(), o)
                            })
                        })
                    })
                }
            }
        }], $a = Fn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (t, e, n, r, i) {
                t = n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function (t, e, n) {
                    return n[e - 1] !== t
                }), o(t, function (t) {
                    r.cases["!" + t] = r.cases["!" + t] || [], r.cases["!" + t].push({transclude: i, element: e})
                })
            }
        }), ga = Fn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (t, e, n, r, i) {
                r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({transclude: i, element: e})
            }
        }), va = r("ngTransclude"), ya = ["$compile", function (t) {
            return {
                restrict: "EAC", compile: function (e) {
                    var n = t(e.contents());
                    return e.empty(), function (t, e, r, i, o) {
                        function a() {
                            n(t, function (t) {
                                e.append(t)
                            })
                        }

                        if (!o) throw va("orphan", G(e));
                        r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = ""), r = r.ngTransclude || r.ngTranscludeSlot, o(function (t, n) {
                            var r;
                            if (r = t.length) t:{
                                r = 0;
                                for (var i = t.length; r < i; r++) {
                                    var o = t[r];
                                    if (o.nodeType !== Lr || o.nodeValue.trim()) {
                                        r = !0;
                                        break t
                                    }
                                }
                                r = void 0
                            }
                            r ? e.append(t) : (a(), n.$destroy())
                        }, null, r), r && !o.isSlotFilled(r) && a()
                    }
                }
            }
        }], wa = ["$templateCache", function (t) {
            return {
                restrict: "E", terminal: !0, compile: function (e, n) {
                    "text/ng-template" === n.type && t.put(n.id, e[0].text)
                }
            }
        }], ba = {$setViewValue: p, $render: p}, _a = ["$element", "$scope", function (e, n) {
            function r() {
                s || (s = !0, n.$$postDigest(function () {
                    s = !1, o.ngModelCtrl.$render()
                }))
            }

            function i(t) {
                u || (u = !0, n.$$postDigest(function () {
                    n.$$destroyed || (u = !1, o.ngModelCtrl.$setViewValue(o.readValue()), t && o.ngModelCtrl.$render())
                }))
            }

            var o = this, a = new oi;
            o.selectValueMap = {}, o.ngModelCtrl = ba, o.multiple = !1, o.unknownOption = dr(t.document.createElement("option")), o.hasEmptyOption = !1, o.emptyOption = void 0, o.renderUnknownOption = function (t) {
                t = o.generateUnknownOptionValue(t), o.unknownOption.val(t), e.prepend(o.unknownOption), cr(o.unknownOption, !0), e.val(t)
            }, o.updateUnknownOption = function (t) {
                t = o.generateUnknownOptionValue(t), o.unknownOption.val(t), cr(o.unknownOption, !0), e.val(t)
            }, o.generateUnknownOptionValue = function (t) {
                return "? " + Wt(t) + " ?"
            }, o.removeUnknownOption = function () {
                o.unknownOption.parent() && o.unknownOption.remove()
            }, o.selectEmptyOption = function () {
                o.emptyOption && (e.val(""), cr(o.emptyOption, !0))
            }, o.unselectEmptyOption = function () {
                o.hasEmptyOption && cr(o.emptyOption, !1)
            }, n.$on("$destroy", function () {
                o.renderUnknownOption = p
            }), o.readValue = function () {
                var t = e.val(), t = t in o.selectValueMap ? o.selectValueMap[t] : t;
                return o.hasOption(t) ? t : null
            }, o.writeValue = function (t) {
                var n = e[0].options[e[0].selectedIndex];
                n && cr(dr(n), !1), o.hasOption(t) ? (o.removeUnknownOption(), n = Wt(t), e.val(n in o.selectValueMap ? n : t), cr(dr(e[0].options[e[0].selectedIndex]), !0)) : o.selectUnknownOrEmptyOption(t)
            }, o.addOption = function (t, e) {
                if (8 !== e[0].nodeType) {
                    ut(t, '"option value"'), "" === t && (o.hasEmptyOption = !0, o.emptyOption = e);
                    var n = a.get(t) || 0;
                    a.set(t, n + 1), r()
                }
            }, o.removeOption = function (t) {
                var e = a.get(t);
                e && (1 === e ? (a.delete(t), "" === t && (o.hasEmptyOption = !1, o.emptyOption = void 0)) : a.set(t, e - 1))
            }, o.hasOption = function (t) {
                return !!a.get(t)
            }, o.$hasEmptyOption = function () {
                return o.hasEmptyOption
            }, o.$isUnknownOptionSelected = function () {
                return e[0].options[0] === o.unknownOption[0]
            }, o.$isEmptyOptionSelected = function () {
                return o.hasEmptyOption && e[0].options[e[0].selectedIndex] === o.emptyOption[0]
            }, o.selectUnknownOrEmptyOption = function (t) {
                null == t && o.emptyOption ? (o.removeUnknownOption(), o.selectEmptyOption()) : o.unknownOption.parent().length ? o.updateUnknownOption(t) : o.renderUnknownOption(t)
            };
            var s = !1, u = !1;
            o.registerOption = function (t, e, n, a, s) {
                if (n.$attr.ngValue) {
                    var u, c;
                    n.$observe("value", function (t) {
                        var n, r = e.prop("selected");
                        y(c) && (o.removeOption(u), delete o.selectValueMap[c], n = !0), c = Wt(t), u = t, o.selectValueMap[c] = t, o.addOption(t, e), e.attr("value", c), n && r && i()
                    })
                } else a ? n.$observe("value", function (t) {
                    o.readValue();
                    var n, r = e.prop("selected");
                    y(u) && (o.removeOption(u), n = !0), u = t, o.addOption(t, e), n && r && i()
                }) : s ? t.$watch(s, function (t, r) {
                    n.$set("value", t);
                    var a = e.prop("selected");
                    r !== t && o.removeOption(r), o.addOption(t, e), r && a && i()
                }) : o.addOption(n.value, e);
                n.$observe("disabled", function (t) {
                    ("true" === t || t && e.prop("selected")) && (o.multiple ? i(!0) : (o.ngModelCtrl.$setViewValue(null), o.ngModelCtrl.$render()))
                }), e.on("$destroy", function () {
                    var t = o.readValue(), e = n.value;
                    o.removeOption(e), r(), (o.multiple && t && -1 !== t.indexOf(e) || t === e) && i(!0)
                })
            }
        }], xa = function () {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: _a,
                priority: 1,
                link: {
                    pre: function (t, e, n, r) {
                        var i = r[0], a = r[1];
                        if (a) {
                            if (i.ngModelCtrl = a, e.on("change", function () {
                                i.removeUnknownOption(), t.$apply(function () {
                                    a.$setViewValue(i.readValue())
                                })
                            }), n.multiple) {
                                i.multiple = !0, i.readValue = function () {
                                    var t = [];
                                    return o(e.find("option"), function (e) {
                                        e.selected && !e.disabled && (e = e.value, t.push(e in i.selectValueMap ? i.selectValueMap[e] : e))
                                    }), t
                                }, i.writeValue = function (t) {
                                    o(e.find("option"), function (e) {
                                        var n = !!t && (-1 !== Array.prototype.indexOf.call(t, e.value) || -1 !== Array.prototype.indexOf.call(t, i.selectValueMap[e.value]));
                                        n !== e.selected && cr(dr(e), n)
                                    })
                                };
                                var s, u = NaN;
                                t.$watch(function () {
                                    u !== a.$viewValue || Y(s, a.$viewValue) || (s = pt(a.$viewValue), a.$render()), u = a.$viewValue
                                }), a.$isEmpty = function (t) {
                                    return !t || 0 === t.length
                                }
                            }
                        } else i.registerOption = p
                    }, post: function (t, e, n, r) {
                        var i = r[1];
                        if (i) {
                            var o = r[0];
                            i.$render = function () {
                                o.writeValue(i.$viewValue)
                            }
                        }
                    }
                }
            }
        }, ka = ["$interpolate", function (t) {
            return {
                restrict: "E", priority: 100, compile: function (e, n) {
                    var r, i;
                    return y(n.ngValue) || (y(n.value) ? r = t(n.value, !0) : (i = t(e.text(), !0)) || n.$set("value", e.text())), function (t, e, n) {
                        var o = e.parent();
                        (o = o.data("$selectController") || o.parent().data("$selectController")) && o.registerOption(t, e, n, r, i)
                    }
                }
            }
        }], Sa = ["$parse", function (t) {
            return {
                restrict: "A", require: "?ngModel", link: function (e, n, r, i) {
                    if (i) {
                        var o = r.hasOwnProperty("required") || t(r.ngRequired)(e);
                        r.ngRequired || (r.required = !0), i.$validators.required = function (t, e) {
                            return !o || !i.$isEmpty(e)
                        }, r.$observe("required", function (t) {
                            o !== t && (o = t, i.$validate())
                        })
                    }
                }
            }
        }], Ma = ["$parse", function (t) {
            return {
                restrict: "A", require: "?ngModel", compile: function (e, n) {
                    var r, i;
                    return n.ngPattern && (r = n.ngPattern, i = "/" === n.ngPattern.charAt(0) && gr.test(n.ngPattern) ? function () {
                        return n.ngPattern
                    } : t(n.ngPattern)), function (t, e, n, o) {
                        if (o) {
                            var a = n.pattern;
                            n.ngPattern ? a = i(t) : r = n.pattern;
                            var s = lr(a, r, e);
                            n.$observe("pattern", function (t) {
                                var n = s;
                                s = lr(t, r, e), (n && n.toString()) !== (s && s.toString()) && o.$validate()
                            }), o.$validators.pattern = function (t, e) {
                                return o.$isEmpty(e) || v(s) || s.test(e)
                            }
                        }
                    }
                }
            }
        }], Ca = ["$parse", function (t) {
            return {
                restrict: "A", require: "?ngModel", link: function (e, n, r, i) {
                    if (i) {
                        var o = r.maxlength || t(r.ngMaxlength)(e), a = fr(o);
                        r.$observe("maxlength", function (t) {
                            o !== t && (a = fr(t), o = t, i.$validate())
                        }), i.$validators.maxlength = function (t, e) {
                            return 0 > a || i.$isEmpty(e) || e.length <= a
                        }
                    }
                }
            }
        }], Oa = ["$parse", function (t) {
            return {
                restrict: "A", require: "?ngModel", link: function (e, n, r, i) {
                    if (i) {
                        var o = r.minlength || t(r.ngMinlength)(e), a = fr(o) || -1;
                        r.$observe("minlength", function (t) {
                            o !== t && (a = fr(t) || -1, o = t, i.$validate())
                        }), i.$validators.minlength = function (t, e) {
                            return i.$isEmpty(e) || e.length >= a
                        }
                    }
                }
            }
        }];
    t.angular.bootstrap ? t.console && console.log("WARNING: Tried to load AngularJS more than once.") : (function () {
        var e;
        if (!Yr) {
            var n = Pr();
            (pr = v(n) ? t.jQuery : n ? t[n] : void 0) && pr.fn.on ? (dr = pr, l(pr.fn, {
                scope: ti.scope,
                isolateScope: ti.isolateScope,
                controller: ti.controller,
                injector: ti.injector,
                inheritedData: ti.inheritedData
            })) : dr = wt, e = dr.cleanData, dr.cleanData = function (t) {
                for (var n, r, i = 0; null != (r = t[i]); i++) (n = (dr._data(r) || {}).events) && n.$destroy && dr(r).triggerHandler("$destroy");
                e(t)
            }, Cr.element = dr, Yr = !0
        }
    }(), function (n) {
        l(n, {
            errorHandlingConfig: e,
            bootstrap: nt,
            copy: R,
            extend: l,
            merge: f,
            equals: Y,
            element: dr,
            forEach: o,
            injector: Gt,
            noop: p,
            bind: j,
            toJson: H,
            fromJson: W,
            identity: m,
            isUndefined: v,
            isDefined: y,
            isString: _,
            isFunction: C,
            isObject: w,
            isNumber: x,
            isElement: V,
            isArray: S,
            version: jr,
            isDate: k,
            callbacks: {$$counter: 0},
            getTestability: it,
            reloadWithDebugInfo: rt,
            $$minErr: r,
            $$csp: Vr,
            $$encodeUriSegment: Q,
            $$encodeUriQuery: X,
            $$lowercase: yr,
            $$stringify: ht,
            $$uppercase: wr
        }), mr = dt(t), mr("ng", ["ngLocale"], ["$provide", function (t) {
            t.provider({$$sanitizeUri: rn}), t.provider("$compile", re).directive({
                a: fo,
                input: Eo,
                textarea: Eo,
                form: $o,
                script: wa,
                select: xa,
                option: ka,
                ngBind: Vo,
                ngBindHtml: No,
                ngBindTemplate: Po,
                ngClass: Ro,
                ngClassEven: Yo,
                ngClassOdd: Uo,
                ngCloak: Lo,
                ngController: jo,
                ngForm: go,
                ngHide: da,
                ngIf: Wo,
                ngInclude: zo,
                ngInit: Bo,
                ngNonBindable: ia,
                ngPluralize: ua,
                ngRef: la,
                ngRepeat: fa,
                ngShow: ha,
                ngStyle: pa,
                ngSwitch: ma,
                ngSwitchWhen: $a,
                ngSwitchDefault: ga,
                ngOptions: sa,
                ngTransclude: ya,
                ngModel: ea,
                ngList: Go,
                ngChange: Io,
                pattern: Ma,
                ngPattern: Ma,
                required: Sa,
                ngRequired: Sa,
                minlength: Oa,
                ngMinlength: Oa,
                maxlength: Ca,
                ngMaxlength: Ca,
                ngValue: Ao,
                ngModelOptions: ra
            }).directive({ngInclude: qo, input: Do}).directive(ho).directive(Fo), t.provider({
                $anchorScroll: Zt,
                $animate: $i,
                $animateCss: yi,
                $$animateJs: pi,
                $$animateQueue: mi,
                $$AnimateRunner: vi,
                $$animateAsyncRun: gi,
                $browser: te,
                $cacheFactory: ee,
                $controller: ce,
                $document: le,
                $$isDocumentHidden: fe,
                $exceptionHandler: he,
                $filter: bn,
                $$forceReflow: Mi,
                $interpolate: ke,
                $interval: Se,
                $$intervalFactory: Me,
                $http: we,
                $httpParamSerializer: pe,
                $httpParamSerializerJQLike: me,
                $httpBackend: _e,
                $xhrFactory: be,
                $jsonpCallbacks: Ni,
                $location: Re,
                $log: Ue,
                $parse: Ke,
                $rootScope: nn,
                $q: Qe,
                $$q: Xe,
                $sce: un,
                $sceDelegate: sn,
                $sniffer: cn,
                $$taskTrackerFactory: ln,
                $templateCache: ne,
                $templateRequest: hn,
                $$testability: dn,
                $timeout: pn,
                $window: vn,
                $$rAF: en,
                $$jqLite: Ht,
                $$Map: ai,
                $$cookieReader: wn
            })
        }]).info({angularVersion: "1.7.8"})
    }(Cr), Cr.module("ngLocale", [], ["$provide", function (t) {
        function e(t) {
            t += "";
            var e = t.indexOf(".");
            return -1 == e ? 0 : t.length - e - 1
        }

        t.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                short: "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function (t, n) {
                var r = 0 | t, i = n;
                return void 0 === i && (i = Math.min(e(t), 3)), Math.pow(10, i), 1 == r && 0 == i ? "one" : "other"
            }
        })
    }]), dr(function () {
        et(t.document, nt)
    }))
}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), function (t, e) {
    "use strict";

    function n(t) {
        var e = [];
        return h(e, c).chars(t), e.join("")
    }

    var r, i, o, a, s, u, c, l, f, h, d = e.$$minErr("$sanitize");
    e.module("ngSanitize", []).provider("$sanitize", function () {
        function n(t, e) {
            return p(t.split(","), e)
        }

        function p(t, e) {
            var n, r = {};
            for (n = 0; n < t.length; n++) r[e ? u(t[n]) : t[n]] = !0;
            return r
        }

        function m(t, e) {
            e && e.length && i(t, p(e))
        }

        function $(t) {
            for (var e = {}, n = 0, r = t.length; n < r; n++) {
                var i = t[n];
                e[i.name] = i.value
            }
            return e
        }

        function g(t) {
            return t.replace(/&/g, "&amp;").replace(_, function (t) {
                var e = t.charCodeAt(0);
                return t = t.charCodeAt(1), "&#" + (1024 * (e - 55296) + (t - 56320) + 65536) + ";"
            }).replace(x, function (t) {
                return "&#" + t.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function v(e) {
            for (; e;) {
                if (e.nodeType === t.Node.ELEMENT_NODE) for (var n = e.attributes, r = 0, i = n.length; r < i; r++) {
                    var o = n[r], a = o.name.toLowerCase();
                    "xmlns:ns1" !== a && 0 !== a.lastIndexOf("ns1:", 0) || (e.removeAttributeNode(o), r--, i--)
                }
                (n = e.firstChild) && v(n), e = y("nextSibling", e)
            }
        }

        function y(t, e) {
            var n = e[t];
            if (n && l.call(e, n)) throw d("elclob", e.outerHTML || e.outerText);
            return n
        }

        var w = !1, b = !1;
        this.$get = ["$$sanitizeUri", function (t) {
            return w = !0, b && i(D, O), function (e) {
                var n = [];
                return f(e, h(n, function (e, n) {
                    return !/^unsafe:/.test(t(e, n))
                })), n.join("")
            }
        }], this.enableSvg = function (t) {
            return s(t) ? (b = t, this) : b
        }, this.addValidElements = function (t) {
            return w || (a(t) && (t = {htmlElements: t}), m(O, t.svgElements), m(k, t.htmlVoidElements), m(D, t.htmlVoidElements), m(D, t.htmlElements)), this
        }, this.addValidAttrs = function (t) {
            return w || i(A, p(t, !0)), this
        }, r = e.bind, i = e.extend, o = e.forEach, a = e.isArray, s = e.isDefined, u = e.$$lowercase, c = e.noop, f = function (t, e) {
            null === t || void 0 === t ? t = "" : "string" != typeof t && (t = "" + t);
            var n = V(t);
            if (!n) return "";
            var r = 5;
            do {
                if (0 === r) throw d("uinput");
                r--, t = n.innerHTML, n = V(t)
            } while (t !== n.innerHTML);
            for (r = n.firstChild; r;) {
                switch (r.nodeType) {
                    case 1:
                        e.start(r.nodeName.toLowerCase(), $(r.attributes));
                        break;
                    case 3:
                        e.chars(r.textContent)
                }
                var i;
                if (!((i = r.firstChild) || (1 === r.nodeType && e.end(r.nodeName.toLowerCase()), i = y("nextSibling", r)))) for (; null == i && (r = y("parentNode", r)) !== n;) i = y("nextSibling", r), 1 === r.nodeType && e.end(r.nodeName.toLowerCase());
                r = i
            }
            for (; r = n.firstChild;) n.removeChild(r)
        }, h = function (t, e) {
            var n = !1, i = r(t, t.push);
            return {
                start: function (t, r) {
                    t = u(t), !n && E[t] && (n = t), n || !0 !== D[t] || (i("<"), i(t), o(r, function (n, r) {
                        var o = u(r), a = "img" === t && "src" === o || "background" === o;
                        !0 !== A[o] || !0 === T[o] && !e(n, a) || (i(" "), i(r), i('="'), i(g(n)), i('"'))
                    }), i(">"))
                }, end: function (t) {
                    t = u(t), n || !0 !== D[t] || !0 === k[t] || (i("</"), i(t), i(">")), t == n && (n = !1)
                }, chars: function (t) {
                    n || i(g(t))
                }
            }
        }, l = t.Node.prototype.contains || function (t) {
            return !!(16 & this.compareDocumentPosition(t))
        };
        var _ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, x = /([^#-~ |!])/g, k = n("area,br,col,hr,img,wbr"),
            S = n("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), M = n("rp,rt"), C = i({}, M, S),
            S = i({}, S, n("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
            M = i({}, M, n("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            O = n("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
            E = n("script,style"), D = i({}, k, S, M, C),
            T = n("background,cite,href,longdesc,src,xlink:href,xml:base"),
            C = n("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
            M = n("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
            A = i({}, T, M, C), V = function (t, e) {
                function n(e) {
                    e = "<remove></remove>" + e;
                    try {
                        var n = (new t.DOMParser).parseFromString(e, "text/html").body;
                        return n.firstChild.remove(), n
                    } catch (t) {
                    }
                }

                function r(t) {
                    return o.innerHTML = t, e.documentMode && v(o), o
                }

                var i;
                if (!e || !e.implementation) throw d("noinert");
                i = e.implementation.createHTMLDocument("inert");
                var o = (i.documentElement || i.getDocumentElement()).querySelector("body");
                return o.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', o.querySelector("svg") ? (o.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', o.querySelector("svg img") ? n : r) : function (e) {
                    e = "<remove></remove>" + e;
                    try {
                        e = encodeURI(e)
                    } catch (t) {
                        return
                    }
                    var n = new t.XMLHttpRequest;
                    return n.responseType = "document", n.open("GET", "data:text/html;charset=utf-8," + e, !1), n.send(null), e = n.response.body, e.firstChild.remove(), e
                }
            }(t, t.document)
    }).info({angularVersion: "1.7.8"}), e.module("ngSanitize").filter("linky", ["$sanitize", function (t) {
        var r = /((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
            i = /^mailto:/i, o = e.$$minErr("linky"), a = e.isDefined, s = e.isFunction, u = e.isObject, c = e.isString;
        return function (e, l, f) {
            function h(t) {
                t && g.push(n(t))
            }

            if (null == e || "" === e) return e;
            if (!c(e)) throw o("notstring", e);
            for (var d, p, m = s(f) ? f : u(f) ? function () {
                return f
            } : function () {
                return {}
            }, $ = e, g = []; e = $.match(r);) d = e[0], e[2] || e[4] || (d = (e[3] ? "http://" : "mailto:") + d), p = e.index, h($.substr(0, p)), function (t, e) {
                var n, r = m(t);
                g.push("<a ");
                for (n in r) g.push(n + '="' + r[n] + '" ');
                !a(l) || "target" in r || g.push('target="', l, '" '), g.push('href="', t.replace(/"/g, "&quot;"), '">'), h(e), g.push("</a>")
            }(d, e[0].replace(i, "")), $ = $.substring(p + e[0].length);
            return h($), t(g.join(""))
        }
    }])
}(window, window.angular), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function () {
    "use strict";

    function t() {
        return Xt.apply(null, arguments)
    }

    function e(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function n(t) {
        return null != t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function r(t) {
        return void 0 === t
    }

    function i(t) {
        return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
    }

    function o(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function a(t, e) {
        var n, r = [];
        for (n = 0; n < t.length; ++n) r.push(e(t[n], n));
        return r
    }

    function s(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function u(t, e) {
        for (var n in e) s(e, n) && (t[n] = e[n]);
        return s(e, "toString") && (t.toString = e.toString), s(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function c(t, e, n, r) {
        return $t(t, e, n, r, !0).utc()
    }

    function l(t) {
        return null == t._pf && (t._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), t._pf
    }

    function f(t) {
        if (null == t._isValid) {
            var e = l(t), n = te.call(e.parsedDateParts, function (t) {
                    return null != t
                }),
                r = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
            if (t._strict && (r = r && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return r;
            t._isValid = r
        }
        return t._isValid
    }

    function h(t) {
        var e = c(NaN);
        return null != t ? u(l(e), t) : l(e).userInvalidated = !0, e
    }

    function d(t, e) {
        var n, i, o;
        if (r(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), r(e._i) || (t._i = e._i), r(e._f) || (t._f = e._f), r(e._l) || (t._l = e._l), r(e._strict) || (t._strict = e._strict), r(e._tzm) || (t._tzm = e._tzm), r(e._isUTC) || (t._isUTC = e._isUTC), r(e._offset) || (t._offset = e._offset), r(e._pf) || (t._pf = l(e)), r(e._locale) || (t._locale = e._locale), 0 < ne.length) for (n = 0; n < ne.length; n++) r(o = e[i = ne[n]]) || (t[i] = o);
        return t
    }

    function p(e) {
        d(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === re && (re = !0, t.updateOffset(this), re = !1)
    }

    function m(t) {
        return t instanceof p || null != t && null != t._isAMomentObject
    }

    function $(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
    }

    function g(t) {
        var e = +t, n = 0;
        return 0 !== e && isFinite(e) && (n = $(e)), n
    }

    function v(t, e, n) {
        var r, i = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), a = 0;
        for (r = 0; r < i; r++) (n && t[r] !== e[r] || !n && g(t[r]) !== g(e[r])) && a++;
        return a + o
    }

    function y(e) {
        !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function w(e, n) {
        var r = !0;
        return u(function () {
            if (null != t.deprecationHandler && t.deprecationHandler(null, e), r) {
                for (var i, o = [], a = 0; a < arguments.length; a++) {
                    if (i = "", "object" == typeof arguments[a]) {
                        for (var s in i += "\n[" + a + "] ", arguments[0]) i += s + ": " + arguments[0][s] + ", ";
                        i = i.slice(0, -2)
                    } else i = arguments[a];
                    o.push(i)
                }
                y(e + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), r = !1
            }
            return n.apply(this, arguments)
        }, n)
    }

    function b(e, n) {
        null != t.deprecationHandler && t.deprecationHandler(e, n), ie[e] || (y(n), ie[e] = !0)
    }

    function _(t) {
        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function x(t, e) {
        var r, i = u({}, t);
        for (r in e) s(e, r) && (n(t[r]) && n(e[r]) ? (i[r] = {}, u(i[r], t[r]), u(i[r], e[r])) : null != e[r] ? i[r] = e[r] : delete i[r]);
        for (r in t) s(t, r) && !s(e, r) && n(t[r]) && (i[r] = u({}, i[r]));
        return i
    }

    function k(t) {
        null != t && this.set(t)
    }

    function S(t, e) {
        var n = t.toLowerCase();
        oe[n] = oe[n + "s"] = oe[e] = t
    }

    function M(t) {
        return "string" == typeof t ? oe[t] || oe[t.toLowerCase()] : void 0
    }

    function C(t) {
        var e, n, r = {};
        for (n in t) s(t, n) && (e = M(n)) && (r[e] = t[n]);
        return r
    }

    function O(t, e) {
        ae[t] = e
    }

    function E(t, e, n) {
        var r = "" + Math.abs(t), i = e - r.length;
        return (0 <= t ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
    }

    function D(t, e, n, r) {
        var i = r;
        "string" == typeof r && (i = function () {
            return this[r]()
        }), t && (le[t] = i), e && (le[e[0]] = function () {
            return E(i.apply(this, arguments), e[1], e[2])
        }), n && (le[n] = function () {
            return this.localeData().ordinal(i.apply(this, arguments), t)
        })
    }

    function T(t, e) {
        return t.isValid() ? (e = A(e, t.localeData()), ce[e] = ce[e] || function (t) {
            var e, n, r, i = t.match(se);
            for (e = 0, n = i.length; e < n; e++) le[i[e]] ? i[e] = le[i[e]] : i[e] = (r = i[e]).match(/\[[\s\S]/) ? r.replace(/^\[|\]$/g, "") : r.replace(/\\/g, "");
            return function (e) {
                var r, o = "";
                for (r = 0; r < n; r++) o += _(i[r]) ? i[r].call(e, t) : i[r];
                return o
            }
        }(e), ce[e](t)) : t.localeData().invalidDate()
    }

    function A(t, e) {
        function n(t) {
            return e.longDateFormat(t) || t
        }

        var r = 5;
        for (ue.lastIndex = 0; 0 <= r && ue.test(t);) t = t.replace(ue, n), ue.lastIndex = 0, r -= 1;
        return t
    }

    function V(t, e, n) {
        Ce[t] = _(e) ? e : function (t, r) {
            return t && n ? n : e
        }
    }

    function P(t, e) {
        return s(Ce, t) ? Ce[t](e._strict, e._locale) : new RegExp(N(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, r, i) {
            return e || n || r || i
        })))
    }

    function N(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function I(t, e) {
        var n, r = e;
        for ("string" == typeof t && (t = [t]), i(e) && (r = function (t, n) {
            n[e] = g(t)
        }), n = 0; n < t.length; n++) Oe[t[n]] = r
    }

    function R(t, e) {
        I(t, function (t, n, r, i) {
            r._w = r._w || {}, e(t, r._w, r, i)
        })
    }

    function U(t) {
        return Y(t) ? 366 : 365
    }

    function Y(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    }

    function L(e, n) {
        return function (r) {
            return null != r ? (F(this, e, r), t.updateOffset(this, n), this) : j(this, e)
        }
    }

    function j(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function F(t, e, n) {
        t.isValid() && !isNaN(n) && ("FullYear" === e && Y(t.year()) && 1 === t.month() && 29 === t.date() ? t._d["set" + (t._isUTC ? "UTC" : "") + e](n, t.month(), H(n, t.month())) : t._d["set" + (t._isUTC ? "UTC" : "") + e](n))
    }

    function H(t, e) {
        if (isNaN(t) || isNaN(e)) return NaN;
        var n, r = (e % (n = 12) + n) % n;
        return t += (e - r) / 12, 1 === r ? Y(t) ? 29 : 28 : 31 - r % 7 % 2
    }

    function W(t, e) {
        var n;
        if (!t.isValid()) return t;
        if ("string" == typeof e) if (/^\d+$/.test(e)) e = g(e); else if (!i(e = t.localeData().monthsParse(e))) return t;
        return n = Math.min(t.date(), H(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
    }

    function z(e) {
        return null != e ? (W(this, e), t.updateOffset(this, !0), this) : j(this, "Month")
    }

    function q() {
        function t(t, e) {
            return e.length - t.length
        }

        var e, n, r = [], i = [], o = [];
        for (e = 0; e < 12; e++) n = c([2e3, e]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
        for (r.sort(t), i.sort(t), o.sort(t), e = 0; e < 12; e++) r[e] = N(r[e]), i[e] = N(i[e]);
        for (e = 0; e < 24; e++) o[e] = N(o[e]);
        this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function B(t) {
        var e;
        if (t < 100 && 0 <= t) {
            var n = Array.prototype.slice.call(arguments);
            n[0] = t + 400, e = new Date(Date.UTC.apply(null, n)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)
        } else e = new Date(Date.UTC.apply(null, arguments));
        return e
    }

    function G(t, e, n) {
        var r = 7 + e - n;
        return -(7 + B(t, 0, r).getUTCDay() - e) % 7 + r - 1
    }

    function Z(t, e, n, r, i) {
        var o, a, s = 1 + 7 * (e - 1) + (7 + n - r) % 7 + G(t, r, i);
        return a = s <= 0 ? U(o = t - 1) + s : s > U(t) ? (o = t + 1, s - U(t)) : (o = t, s), {year: o, dayOfYear: a}
    }

    function J(t, e, n) {
        var r, i, o = G(t.year(), e, n), a = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
        return a < 1 ? r = a + K(i = t.year() - 1, e, n) : a > K(t.year(), e, n) ? (r = a - K(t.year(), e, n), i = t.year() + 1) : (i = t.year(), r = a), {
            week: r,
            year: i
        }
    }

    function K(t, e, n) {
        var r = G(t, e, n), i = G(t + 1, e, n);
        return (U(t) - r + i) / 7
    }

    function Q(t, e) {
        return t.slice(e, 7).concat(t.slice(0, e))
    }

    function X() {
        function t(t, e) {
            return e.length - t.length
        }

        var e, n, r, i, o, a = [], s = [], u = [], l = [];
        for (e = 0; e < 7; e++) n = c([2e3, 1]).day(e), r = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), a.push(r), s.push(i), u.push(o), l.push(r), l.push(i), l.push(o);
        for (a.sort(t), s.sort(t), u.sort(t), l.sort(t), e = 0; e < 7; e++) s[e] = N(s[e]), u[e] = N(u[e]), l[e] = N(l[e]);
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
    }

    function tt() {
        return this.hours() % 12 || 12
    }

    function et(t, e) {
        D(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function nt(t, e) {
        return e._meridiemParse
    }

    function rt(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function it(t) {
        var e = null;
        if (!tn[t] && "undefined" != typeof module && module && module.exports) try {
            e = Ke._abbr, require("./locale/" + t), ot(e)
        } catch (t) {
        }
        return tn[t]
    }

    function ot(t, e) {
        var n;
        return t && ((n = r(e) ? st(t) : at(t, e)) ? Ke = n : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), Ke._abbr
    }

    function at(t, e) {
        if (null === e) return delete tn[t], null;
        var n, r = Xe;
        if (e.abbr = t, null != tn[t]) b("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = tn[t]._config; else if (null != e.parentLocale) if (null != tn[e.parentLocale]) r = tn[e.parentLocale]._config; else {
            if (null == (n = it(e.parentLocale))) return en[e.parentLocale] || (en[e.parentLocale] = []), en[e.parentLocale].push({
                name: t,
                config: e
            }), null;
            r = n._config
        }
        return tn[t] = new k(x(r, e)), en[t] && en[t].forEach(function (t) {
            at(t.name, t.config)
        }), ot(t), tn[t]
    }

    function st(t) {
        var n;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Ke;
        if (!e(t)) {
            if (n = it(t)) return n;
            t = [t]
        }
        return function (t) {
            for (var e, n, r, i, o = 0; o < t.length;) {
                for (e = (i = rt(t[o]).split("-")).length, n = (n = rt(t[o + 1])) ? n.split("-") : null; 0 < e;) {
                    if (r = it(i.slice(0, e).join("-"))) return r;
                    if (n && n.length >= e && v(i, n, !0) >= e - 1) break;
                    e--
                }
                o++
            }
            return Ke
        }(t)
    }

    function ut(t) {
        var e, n = t._a
        ;
        return n && -2 === l(t).overflow && (e = n[De] < 0 || 11 < n[De] ? De : n[Te] < 1 || n[Te] > H(n[Ee], n[De]) ? Te : n[Ae] < 0 || 24 < n[Ae] || 24 === n[Ae] && (0 !== n[Ve] || 0 !== n[Pe] || 0 !== n[Ne]) ? Ae : n[Ve] < 0 || 59 < n[Ve] ? Ve : n[Pe] < 0 || 59 < n[Pe] ? Pe : n[Ne] < 0 || 999 < n[Ne] ? Ne : -1, l(t)._overflowDayOfYear && (e < Ee || Te < e) && (e = Te), l(t)._overflowWeeks && -1 === e && (e = Ie), l(t)._overflowWeekday && -1 === e && (e = Re), l(t).overflow = e), t
    }

    function ct(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function lt(e) {
        var n, r, i, o, a, s = [];
        if (!e._d) {
            var u, c;
            for (u = e, c = new Date(t.now()), i = u._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()], e._w && null == e._a[Te] && null == e._a[De] && function (t) {
                var e, n, r, i, o, a, s, u;
                if (null != (e = t._w).GG || null != e.W || null != e.E) o = 1, a = 4, n = ct(e.GG, t._a[Ee], J(gt(), 1, 4).year), r = ct(e.W, 1), ((i = ct(e.E, 1)) < 1 || 7 < i) && (u = !0); else {
                    o = t._locale._week.dow, a = t._locale._week.doy;
                    var c = J(gt(), o, a);
                    n = ct(e.gg, t._a[Ee], c.year), r = ct(e.w, c.week), null != e.d ? ((i = e.d) < 0 || 6 < i) && (u = !0) : null != e.e ? (i = e.e + o, (e.e < 0 || 6 < e.e) && (u = !0)) : i = o
                }
                r < 1 || r > K(n, o, a) ? l(t)._overflowWeeks = !0 : null != u ? l(t)._overflowWeekday = !0 : (s = Z(n, r, i, o, a), t._a[Ee] = s.year, t._dayOfYear = s.dayOfYear)
            }(e), null != e._dayOfYear && (a = ct(e._a[Ee], i[Ee]), (e._dayOfYear > U(a) || 0 === e._dayOfYear) && (l(e)._overflowDayOfYear = !0), r = B(a, 0, e._dayOfYear), e._a[De] = r.getUTCMonth(), e._a[Te] = r.getUTCDate()), n = 0; n < 3 && null == e._a[n]; ++n) e._a[n] = s[n] = i[n];
            for (; n < 7; n++) e._a[n] = s[n] = null == e._a[n] ? 2 === n ? 1 : 0 : e._a[n];
            24 === e._a[Ae] && 0 === e._a[Ve] && 0 === e._a[Pe] && 0 === e._a[Ne] && (e._nextDay = !0, e._a[Ae] = 0), e._d = (e._useUTC ? B : function (t, e, n, r, i, o, a) {
                var s;
                return t < 100 && 0 <= t ? (s = new Date(t + 400, e, n, r, i, o, a), isFinite(s.getFullYear()) && s.setFullYear(t)) : s = new Date(t, e, n, r, i, o, a), s
            }).apply(null, s), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ae] = 24), e._w && void 0 !== e._w.d && e._w.d !== o && (l(e).weekdayMismatch = !0)
        }
    }

    function ft(t) {
        var e, n, r, i, o, a, s = t._i, u = nn.exec(s) || rn.exec(s);
        if (u) {
            for (l(t).iso = !0, e = 0, n = an.length; e < n; e++) if (an[e][1].exec(u[1])) {
                i = an[e][0], r = !1 !== an[e][2];
                break
            }
            if (null == i) return void (t._isValid = !1);
            if (u[3]) {
                for (e = 0, n = sn.length; e < n; e++) if (sn[e][1].exec(u[3])) {
                    o = (u[2] || " ") + sn[e][0];
                    break
                }
                if (null == o) return void (t._isValid = !1)
            }
            if (!r && null != o) return void (t._isValid = !1);
            if (u[4]) {
                if (!on.exec(u[4])) return void (t._isValid = !1);
                a = "Z"
            }
            t._f = i + (o || "") + (a || ""), pt(t)
        } else t._isValid = !1
    }

    function ht(t, e, n, r, i, o) {
        var a = [function (t) {
            var e = parseInt(t, 10);
            return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e
        }(t), Fe.indexOf(e), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)];
        return o && a.push(parseInt(o, 10)), a
    }

    function dt(t) {
        var e, n, r,
            i = cn.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (i) {
            var o = ht(i[4], i[3], i[2], i[5], i[6], i[7]);
            if (e = i[1], n = o, r = t, e && qe.indexOf(e) !== new Date(n[0], n[1], n[2]).getDay() && (l(r).weekdayMismatch = !0, !(r._isValid = !1))) return;
            t._a = o, t._tzm = function (t, e, n) {
                if (t) return ln[t];
                if (e) return 0;
                var r = parseInt(n, 10), i = r % 100;
                return (r - i) / 100 * 60 + i
            }(i[8], i[9], i[10]), t._d = B.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), l(t).rfc2822 = !0
        } else t._isValid = !1
    }

    function pt(e) {
        if (e._f !== t.ISO_8601) if (e._f !== t.RFC_2822) {
            e._a = [], l(e).empty = !0;
            var n, r, i, o, a, u, c, f, h = "" + e._i, d = h.length, p = 0;
            for (i = A(e._f, e._locale).match(se) || [], n = 0; n < i.length; n++) o = i[n], (r = (h.match(P(o, e)) || [])[0]) && (0 < (a = h.substr(0, h.indexOf(r))).length && l(e).unusedInput.push(a), h = h.slice(h.indexOf(r) + r.length), p += r.length), le[o] ? (r ? l(e).empty = !1 : l(e).unusedTokens.push(o), u = o, f = e, null != (c = r) && s(Oe, u) && Oe[u](c, f._a, f, u)) : e._strict && !r && l(e).unusedTokens.push(o);
            l(e).charsLeftOver = d - p, 0 < h.length && l(e).unusedInput.push(h), e._a[Ae] <= 12 && !0 === l(e).bigHour && 0 < e._a[Ae] && (l(e).bigHour = void 0), l(e).parsedDateParts = e._a.slice(0), l(e).meridiem = e._meridiem, e._a[Ae] = function (t, e, n) {
                var r;
                return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : (null != t.isPM && ((r = t.isPM(n)) && e < 12 && (e += 12), r || 12 !== e || (e = 0)), e)
            }(e._locale, e._a[Ae], e._meridiem), lt(e), ut(e)
        } else dt(e); else ft(e)
    }

    function mt(s) {
        var c, $, g, v, y = s._i, w = s._f;
        return s._locale = s._locale || st(s._l), null === y || void 0 === w && "" === y ? h({nullInput: !0}) : ("string" == typeof y && (s._i = y = s._locale.preparse(y)), m(y) ? new p(ut(y)) : (o(y) ? s._d = y : e(w) ? function (t) {
            var e, n, r, i, o;
            if (0 === t._f.length) return l(t).invalidFormat = !0, t._d = new Date(NaN);
            for (i = 0; i < t._f.length; i++) o = 0, e = d({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[i], pt(e), f(e) && (o += l(e).charsLeftOver, o += 10 * l(e).unusedTokens.length, l(e).score = o, (null == r || o < r) && (r = o, n = e));
            u(t, n || e)
        }(s) : w ? pt(s) : r($ = (c = s)._i) ? c._d = new Date(t.now()) : o($) ? c._d = new Date($.valueOf()) : "string" == typeof $ ? (g = c, null === (v = un.exec(g._i)) ? (ft(g), !1 === g._isValid && (delete g._isValid, dt(g), !1 === g._isValid && (delete g._isValid, t.createFromInputFallback(g)))) : g._d = new Date(+v[1])) : e($) ? (c._a = a($.slice(0), function (t) {
            return parseInt(t, 10)
        }), lt(c)) : n($) ? function (t) {
            if (!t._d) {
                var e = C(t._i);
                t._a = a([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                    return t && parseInt(t, 10)
                }), lt(t)
            }
        }(c) : i($) ? c._d = new Date($) : t.createFromInputFallback(c), f(s) || (s._d = null), s))
    }

    function $t(t, r, i, o, a) {
        var s, u = {};
        return !0 !== i && !1 !== i || (o = i, i = void 0), (n(t) && function (t) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
            var e;
            for (e in t) if (t.hasOwnProperty(e)) return !1;
            return !0
        }(t) || e(t) && 0 === t.length) && (t = void 0), u._isAMomentObject = !0, u._useUTC = u._isUTC = a, u._l = i, u._i = t, u._f = r, u._strict = o, (s = new p(ut(mt(u))))._nextDay && (s.add(1, "d"), s._nextDay = void 0), s
    }

    function gt(t, e, n, r) {
        return $t(t, e, n, r, !1)
    }

    function vt(t, n) {
        var r, i;
        if (1 === n.length && e(n[0]) && (n = n[0]), !n.length) return gt();
        for (r = n[0], i = 1; i < n.length; ++i) n[i].isValid() && !n[i][t](r) || (r = n[i]);
        return r
    }

    function yt(t) {
        var e = C(t), n = e.year || 0, r = e.quarter || 0, i = e.month || 0, o = e.week || e.isoWeek || 0,
            a = e.day || 0, s = e.hour || 0, u = e.minute || 0, c = e.second || 0, l = e.millisecond || 0;
        this._isValid = function (t) {
            for (var e in t) if (-1 === Ue.call(dn, e) || null != t[e] && isNaN(t[e])) return !1;
            for (var n = !1, r = 0; r < dn.length; ++r) if (t[dn[r]]) {
                if (n) return !1;
                parseFloat(t[dn[r]]) !== g(t[dn[r]]) && (n = !0)
            }
            return !0
        }(e), this._milliseconds = +l + 1e3 * c + 6e4 * u + 1e3 * s * 60 * 60, this._days = +a + 7 * o, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = st(), this._bubble()
    }

    function wt(t) {
        return t instanceof yt
    }

    function bt(t) {
        return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function _t(t, e) {
        D(t, 0, 0, function () {
            var t = this.utcOffset(), n = "+";
            return t < 0 && (t = -t, n = "-"), n + E(~~(t / 60), 2) + e + E(~~t % 60, 2)
        })
    }

    function xt(t, e) {
        var n = (e || "").match(t);
        if (null === n) return null;
        var r = ((n[n.length - 1] || []) + "").match(pn) || ["-", 0, 0], i = 60 * r[1] + g(r[2]);
        return 0 === i ? 0 : "+" === r[0] ? i : -i
    }

    function kt(e, n) {
        var r, i;
        return n._isUTC ? (r = n.clone(), i = (m(e) || o(e) ? e.valueOf() : gt(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + i), t.updateOffset(r, !1), r) : gt(e).local()
    }

    function St(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function Mt() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }

    function Ct(t, e) {
        var n, r, o, a = t, u = null;
        return wt(t) ? a = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : i(t) ? (a = {}, e ? a[e] = t : a.milliseconds = t) : (u = mn.exec(t)) ? (n = "-" === u[1] ? -1 : 1, a = {
            y: 0,
            d: g(u[Te]) * n,
            h: g(u[Ae]) * n,
            m: g(u[Ve]) * n,
            s: g(u[Pe]) * n,
            ms: g(bt(1e3 * u[Ne])) * n
        }) : (u = $n.exec(t)) ? (n = "-" === u[1] ? -1 : 1, a = {
            y: Ot(u[2], n),
            M: Ot(u[3], n),
            w: Ot(u[4], n),
            d: Ot(u[5], n),
            h: Ot(u[6], n),
            m: Ot(u[7], n),
            s: Ot(u[8], n)
        }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (o = function (t, e) {
            var n;
            return t.isValid() && e.isValid() ? (e = kt(e, t), t.isBefore(e) ? n = Et(t, e) : ((n = Et(e, t)).milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                milliseconds: 0,
                months: 0
            }
        }(gt(a.from), gt(a.to)), (a = {}).ms = o.milliseconds, a.M = o.months), r = new yt(a), wt(t) && s(t, "_locale") && (r._locale = t._locale), r
    }

    function Ot(t, e) {
        var n = t && parseFloat(t.replace(",", "."));
        return (isNaN(n) ? 0 : n) * e
    }

    function Et(t, e) {
        var n = {};
        return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
    }

    function Dt(t, e) {
        return function (n, r) {
            var i;
            return null === r || isNaN(+r) || (b(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = r, r = i), Tt(this, Ct(n = "string" == typeof n ? +n : n, r), t), this
        }
    }

    function Tt(e, n, r, i) {
        var o = n._milliseconds, a = bt(n._days), s = bt(n._months);
        e.isValid() && (i = null == i || i, s && W(e, j(e, "Month") + s * r), a && F(e, "Date", j(e, "Date") + a * r), o && e._d.setTime(e._d.valueOf() + o * r), i && t.updateOffset(e, a || s))
    }

    function At(t, e) {
        var n = 12 * (e.year() - t.year()) + (e.month() - t.month()), r = t.clone().add(n, "months");
        return -(n + (e - r < 0 ? (e - r) / (r - t.clone().add(n - 1, "months")) : (e - r) / (t.clone().add(n + 1, "months") - r))) || 0
    }

    function Vt(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (null != (e = st(t)) && (this._locale = e), this)
    }

    function Pt() {
        return this._locale
    }

    function Nt(t, e) {
        return (t % e + e) % e
    }

    function It(t, e, n) {
        return t < 100 && 0 <= t ? new Date(t + 400, e, n) - wn : new Date(t, e, n).valueOf()
    }

    function Rt(t, e, n) {
        return t < 100 && 0 <= t ? Date.UTC(t + 400, e, n) - wn : Date.UTC(t, e, n)
    }

    function Ut(t, e) {
        D(0, [t, t.length], 0, e)
    }

    function Yt(t, e, n, r, i) {
        var o;
        return null == t ? J(this, r, i).year : ((o = K(t, r, i)) < e && (e = o), function (t, e, n, r, i) {
            var o = Z(t, e, n, r, i), a = B(o.year, 0, o.dayOfYear);
            return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
        }.call(this, t, e, n, r, i))
    }

    function Lt(t, e) {
        e[Ne] = g(1e3 * ("0." + t))
    }

    function jt(t) {
        return t
    }

    function Ft(t, e, n, r) {
        var i = st(), o = c().set(r, e);
        return i[n](o, t)
    }

    function Ht(t, e, n) {
        if (i(t) && (e = t, t = void 0), t = t || "", null != e) return Ft(t, e, n, "month");
        var r, o = [];
        for (r = 0; r < 12; r++) o[r] = Ft(t, r, n, "month");
        return o
    }

    function Wt(t, e, n, r) {
        "boolean" == typeof t ? i(e) && (n = e, e = void 0) : (e = t, t = !1, i(n = e) && (n = e, e = void 0)), e = e || "";
        var o, a = st(), s = t ? a._week.dow : 0;
        if (null != n) return Ft(e, (n + s) % 7, r, "day");
        var u = [];
        for (o = 0; o < 7; o++) u[o] = Ft(e, (o + s) % 7, r, "day");
        return u
    }

    function zt(t, e, n, r) {
        var i = Ct(e, n);
        return t._milliseconds += r * i._milliseconds, t._days += r * i._days, t._months += r * i._months, t._bubble()
    }

    function qt(t) {
        return t < 0 ? Math.floor(t) : Math.ceil(t)
    }

    function Bt(t) {
        return 4800 * t / 146097
    }

    function Gt(t) {
        return 146097 * t / 4800
    }

    function Zt(t) {
        return function () {
            return this.as(t)
        }
    }

    function Jt(t) {
        return function () {
            return this.isValid() ? this._data[t] : NaN
        }
    }

    function Kt(t) {
        return (0 < t) - (t < 0) || +t
    }

    function Qt() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t, e, n = Bn(this._milliseconds) / 1e3, r = Bn(this._days), i = Bn(this._months);
        e = $((t = $(n / 60)) / 60), n %= 60, t %= 60;
        var o = $(i / 12), a = i %= 12, s = r, u = e, c = t, l = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
            f = this.asSeconds();
        if (!f) return "P0D";
        var h = f < 0 ? "-" : "", d = Kt(this._months) !== Kt(f) ? "-" : "", p = Kt(this._days) !== Kt(f) ? "-" : "",
            m = Kt(this._milliseconds) !== Kt(f) ? "-" : "";
        return h + "P" + (o ? d + o + "Y" : "") + (a ? d + a + "M" : "") + (s ? p + s + "D" : "") + (u || c || l ? "T" : "") + (u ? m + u + "H" : "") + (c ? m + c + "M" : "") + (l ? m + l + "S" : "")
    }

    var Xt, te;
    te = Array.prototype.some ? Array.prototype.some : function (t) {
        for (var e = Object(this), n = e.length >>> 0, r = 0; r < n; r++) if (r in e && t.call(this, e[r], r, e)) return !0;
        return !1
    };
    var ee, ne = t.momentProperties = [], re = !1, ie = {};
    t.suppressDeprecationWarnings = !1, t.deprecationHandler = null, ee = Object.keys ? Object.keys : function (t) {
        var e, n = [];
        for (e in t) s(t, e) && n.push(e);
        return n
    };
    var oe = {}, ae = {},
        se = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        ue = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, ce = {}, le = {}, fe = /\d/, he = /\d\d/, de = /\d{3}/,
        pe = /\d{4}/, me = /[+-]?\d{6}/, $e = /\d\d?/, ge = /\d\d\d\d?/, ve = /\d\d\d\d\d\d?/, ye = /\d{1,3}/,
        we = /\d{1,4}/, be = /[+-]?\d{1,6}/, _e = /\d+/, xe = /[+-]?\d+/, ke = /Z|[+-]\d\d:?\d\d/gi,
        Se = /Z|[+-]\d\d(?::?\d\d)?/gi,
        Me = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        Ce = {}, Oe = {}, Ee = 0, De = 1, Te = 2, Ae = 3, Ve = 4, Pe = 5, Ne = 6, Ie = 7, Re = 8;
    D("Y", 0, 0, function () {
        var t = this.year();
        return t <= 9999 ? "" + t : "+" + t
    }), D(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), D(0, ["YYYY", 4], 0, "year"), D(0, ["YYYYY", 5], 0, "year"), D(0, ["YYYYYY", 6, !0], 0, "year"), S("year", "y"), O("year", 1), V("Y", xe), V("YY", $e, he), V("YYYY", we, pe), V("YYYYY", be, me), V("YYYYYY", be, me), I(["YYYYY", "YYYYYY"], Ee), I("YYYY", function (e, n) {
        n[Ee] = 2 === e.length ? t.parseTwoDigitYear(e) : g(e)
    }), I("YY", function (e, n) {
        n[Ee] = t.parseTwoDigitYear(e)
    }), I("Y", function (t, e) {
        e[Ee] = parseInt(t, 10)
    }), t.parseTwoDigitYear = function (t) {
        return g(t) + (68 < g(t) ? 1900 : 2e3)
    };
    var Ue, Ye = L("FullYear", !0);
    Ue = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
        var e;
        for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
        return -1
    }, D("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), D("MMM", 0, 0, function (t) {
        return this.localeData().monthsShort(this, t)
    }), D("MMMM", 0, 0, function (t) {
        return this.localeData().months(this, t)
    }), S("month", "M"), O("month", 8), V("M", $e), V("MM", $e, he), V("MMM", function (t, e) {
        return e.monthsShortRegex(t)
    }), V("MMMM", function (t, e) {
        return e.monthsRegex(t)
    }), I(["M", "MM"], function (t, e) {
        e[De] = g(t) - 1
    }), I(["MMM", "MMMM"], function (t, e, n, r) {
        var i = n._locale.monthsParse(t, r, n._strict);
        null != i ? e[De] = i : l(n).invalidMonth = t
    });
    var Le = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        je = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Fe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), He = Me, We = Me;
    D("w", ["ww", 2], "wo", "week"), D("W", ["WW", 2], "Wo", "isoWeek"), S("week", "w"), S("isoWeek", "W"), O("week", 5), O("isoWeek", 5), V("w", $e), V("ww", $e, he), V("W", $e), V("WW", $e, he), R(["w", "ww", "W", "WW"], function (t, e, n, r) {
        e[r.substr(0, 1)] = g(t)
    }), D("d", 0, "do", "day"), D("dd", 0, 0, function (t) {
        return this.localeData().weekdaysMin(this, t)
    }), D("ddd", 0, 0, function (t) {
        return this.localeData().weekdaysShort(this, t)
    }), D("dddd", 0, 0, function (t) {
        return this.localeData().weekdays(this, t)
    }), D("e", 0, 0, "weekday"), D("E", 0, 0, "isoWeekday"), S("day", "d"), S("weekday", "e"), S("isoWeekday", "E"), O("day", 11), O("weekday", 11), O("isoWeekday", 11), V("d", $e), V("e", $e), V("E", $e), V("dd", function (t, e) {
        return e.weekdaysMinRegex(t)
    }), V("ddd", function (t, e) {
        return e.weekdaysShortRegex(t)
    }), V("dddd", function (t, e) {
        return e.weekdaysRegex(t)
    }), R(["dd", "ddd", "dddd"], function (t, e, n, r) {
        var i = n._locale.weekdaysParse(t, r, n._strict);
        null != i ? e.d = i : l(n).invalidWeekday = t
    }), R(["d", "e", "E"], function (t, e, n, r) {
        e[r] = g(t)
    });
    var ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        qe = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Be = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ge = Me, Ze = Me,
        Je = Me;
    D("H", ["HH", 2], 0, "hour"), D("h", ["hh", 2], 0, tt), D("k", ["kk", 2], 0, function () {
        return this.hours() || 24
    }), D("hmm", 0, 0, function () {
        return "" + tt.apply(this) + E(this.minutes(), 2)
    }), D("hmmss", 0, 0, function () {
        return "" + tt.apply(this) + E(this.minutes(), 2) + E(this.seconds(), 2)
    }), D("Hmm", 0, 0, function () {
        return "" + this.hours() + E(this.minutes(), 2)
    }), D("Hmmss", 0, 0, function () {
        return "" + this.hours() + E(this.minutes(), 2) + E(this.seconds(), 2)
    }), et("a", !0), et("A", !1), S("hour", "h"), O("hour", 13), V("a", nt), V("A", nt), V("H", $e), V("h", $e), V("k", $e), V("HH", $e, he), V("hh", $e, he), V("kk", $e, he), V("hmm", ge), V("hmmss", ve), V("Hmm", ge), V("Hmmss", ve), I(["H", "HH"], Ae), I(["k", "kk"], function (t, e, n) {
        var r = g(t);
        e[Ae] = 24 === r ? 0 : r
    }), I(["a", "A"], function (t, e, n) {
        n._isPm = n._locale.isPM(t), n._meridiem = t
    }), I(["h", "hh"], function (t, e, n) {
        e[Ae] = g(t), l(n).bigHour = !0
    }), I("hmm", function (t, e, n) {
        var r = t.length - 2;
        e[Ae] = g(t.substr(0, r)), e[Ve] = g(t.substr(r)), l(n).bigHour = !0
    }), I("hmmss", function (t, e, n) {
        var r = t.length - 4, i = t.length - 2;
        e[Ae] = g(t.substr(0, r)), e[Ve] = g(t.substr(r, 2)), e[Pe] = g(t.substr(i)), l(n).bigHour = !0
    }), I("Hmm", function (t, e, n) {
        var r = t.length - 2;
        e[Ae] = g(t.substr(0, r)), e[Ve] = g(t.substr(r))
    }), I("Hmmss", function (t, e, n) {
        var r = t.length - 4, i = t.length - 2;
        e[Ae] = g(t.substr(0, r)), e[Ve] = g(t.substr(r, 2)), e[Pe] = g(t.substr(i))
    });
    var Ke, Qe = L("Hours", !0), Xe = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            months: je,
            monthsShort: Fe,
            week: {dow: 0, doy: 6},
            weekdays: ze,
            weekdaysMin: Be,
            weekdaysShort: qe,
            meridiemParse: /[ap]\.?m?\.?/i
        }, tn = {}, en = {},
        nn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        rn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        on = /Z|[+-]\d\d(?::?\d\d)?/,
        an = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
        sn = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
        un = /^\/?Date\((\-?\d+)/i,
        cn = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        ln = {UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480};
    t.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), t.ISO_8601 = function () {
    }, t.RFC_2822 = function () {
    };
    var fn = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var t = gt.apply(null, arguments);
            return this.isValid() && t.isValid() ? t < this ? this : t : h()
        }),
        hn = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var t = gt.apply(null, arguments);
            return this.isValid() && t.isValid() ? this < t ? this : t : h()
        }), dn = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    _t("Z", ":"), _t("ZZ", ""), V("Z", Se), V("ZZ", Se), I(["Z", "ZZ"], function (t, e, n) {
        n._useUTC = !0, n._tzm = xt(Se, t)
    });
    var pn = /([\+\-]|\d\d)/gi;
    t.updateOffset = function () {
    };
    var mn = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
        $n = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    Ct.fn = yt.prototype, Ct.invalid = function () {
        return Ct(NaN)
    };
    var gn = Dt(1, "add"), vn = Dt(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var yn = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    }), wn = 126227808e5;
    D(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), D(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), Ut("gggg", "weekYear"), Ut("ggggg", "weekYear"), Ut("GGGG", "isoWeekYear"), Ut("GGGGG", "isoWeekYear"), S("weekYear", "gg"), S("isoWeekYear", "GG"), O("weekYear", 1), O("isoWeekYear", 1), V("G", xe), V("g", xe), V("GG", $e, he), V("gg", $e, he), V("GGGG", we, pe), V("gggg", we, pe), V("GGGGG", be, me), V("ggggg", be, me), R(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, r) {
        e[r.substr(0, 2)] = g(t)
    }), R(["gg", "GG"], function (e, n, r, i) {
        n[i] = t.parseTwoDigitYear(e)
    }), D("Q", 0, "Qo", "quarter"), S("quarter", "Q"), O("quarter", 7), V("Q", fe), I("Q", function (t, e) {
        e[De] = 3 * (g(t) - 1)
    }), D("D", ["DD", 2], "Do", "date"), S("date", "D"), O("date", 9), V("D", $e), V("DD", $e, he), V("Do", function (t, e) {
        return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
    }), I(["D", "DD"], Te), I("Do", function (t, e) {
        e[Te] = g(t.match($e)[0])
    });
    var bn = L("Date", !0);
    D("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), S("dayOfYear", "DDD"), O("dayOfYear", 4), V("DDD", ye), V("DDDD", de), I(["DDD", "DDDD"], function (t, e, n) {
        n._dayOfYear = g(t)
    }), D("m", ["mm", 2], 0, "minute"), S("minute", "m"), O("minute", 14), V("m", $e), V("mm", $e, he), I(["m", "mm"], Ve);
    var _n = L("Minutes", !1);
    D("s", ["ss", 2], 0, "second"), S("second", "s"), O("second", 15), V("s", $e), V("ss", $e, he), I(["s", "ss"], Pe);
    var xn, kn = L("Seconds", !1);
    for (D("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), D(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), D(0, ["SSS", 3], 0, "millisecond"), D(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), D(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), D(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), D(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), D(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), D(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), S("millisecond", "ms"), O("millisecond", 16), V("S", ye, fe), V("SS", ye, he), V("SSS", ye, de), xn = "SSSS"; xn.length <= 9; xn += "S") V(xn, _e);
    for (xn = "S"; xn.length <= 9; xn += "S") I(xn, Lt);
    var Sn = L("Milliseconds", !1);
    D("z", 0, 0, "zoneAbbr"), D("zz", 0, 0, "zoneName");
    var Mn = p.prototype;
    Mn.add = gn, Mn.calendar = function (e, n) {
        var r = e || gt(), i = kt(r, this).startOf("day"), o = t.calendarFormat(this, i) || "sameElse",
            a = n && (_(n[o]) ? n[o].call(this, r) : n[o]);
        return this.format(a || this.localeData().calendar(o, this, gt(r)))
    }, Mn.clone = function () {
        return new p(this)
    }, Mn.diff = function (t, e, n) {
        var r, i, o;
        if (!this.isValid()) return NaN;
        if (!(r = kt(t, this)).isValid()) return NaN;
        switch (i = 6e4 * (r.utcOffset() - this.utcOffset()), e = M(e)) {
            case"year":
                o = At(this, r) / 12;
                break;
            case"month":
                o = At(this, r);
                break;
            case"quarter":
                o = At(this, r) / 3;
                break;
            case"second":
                o = (this - r) / 1e3;
                break;
            case"minute":
                o = (this - r) / 6e4;
                break;
            case"hour":
                o = (this - r) / 36e5;
                break;
            case"day":
                o = (this - r - i) / 864e5;
                break;
            case"week":
                o = (this - r - i) / 6048e5;
                break;
            default:
                o = this - r
        }
        return n ? o : $(o)
    }, Mn.endOf = function (e) {
        var n;
        if (void 0 === (e = M(e)) || "millisecond" === e || !this.isValid()) return this;
        var r = this._isUTC ? Rt : It;
        switch (e) {
            case"year":
                n = r(this.year() + 1, 0, 1) - 1;
                break;
            case"quarter":
                n = r(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case"month":
                n = r(this.year(), this.month() + 1, 1) - 1;
                break;
            case"week":
                n = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case"isoWeek":
                n = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case"day":
            case"date":
                n = r(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case"hour":
                n = this._d.valueOf(), n += 36e5 - Nt(n + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                break;
            case"minute":
                n = this._d.valueOf(), n += 6e4 - Nt(n, 6e4) - 1;
                break;
            case"second":
                n = this._d.valueOf(), n += 1e3 - Nt(n, 1e3) - 1
        }
        return this._d.setTime(n), t.updateOffset(this, !0), this
    }, Mn.format = function (e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var n = T(this, e);
        return this.localeData().postformat(n)
    }, Mn.from = function (t, e) {
        return this.isValid() && (m(t) && t.isValid() || gt(t).isValid()) ? Ct({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, Mn.fromNow = function (t) {
        return this.from(gt(), t)
    }, Mn.to = function (t, e) {
        return this.isValid() && (m(t) && t.isValid() || gt(t).isValid()) ? Ct({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, Mn.toNow = function (t) {
        return this.to(gt(), t)
    }, Mn.get = function (t) {
        return _(this[t = M(t)]) ? this[t]() : this
    }, Mn.invalidAt = function () {
        return l(this).overflow
    }, Mn.isAfter = function (t, e) {
        var n = m(t) ? t : gt(t);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = M(e) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
    }, Mn.isBefore = function (t, e) {
        var n = m(t) ? t : gt(t);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (e = M(e) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
    }, Mn.isBetween = function (t, e, n, r) {
        var i = m(t) ? t : gt(t), o = m(e) ? e : gt(e);
        return !!(this.isValid() && i.isValid() && o.isValid()) && ("(" === (r = r || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === r[1] ? this.isBefore(o, n) : !this.isAfter(o, n))
    }, Mn.isSame = function (t, e) {
        var n, r = m(t) ? t : gt(t);
        return !(!this.isValid() || !r.isValid()) && ("millisecond" === (e = M(e) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
    }, Mn.isSameOrAfter = function (t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }, Mn.isSameOrBefore = function (t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }, Mn.isValid = function () {
        return f(this)
    }, Mn.lang = yn, Mn.locale = Vt, Mn.localeData = Pt, Mn.max = hn, Mn.min = fn, Mn.parsingFlags = function () {
        return u({}, l(this))
    }, Mn.set = function (t, e) {
        if ("object" == typeof t) for (var n = function (t) {
            var e = [];
            for (var n in t) e.push({unit: n, priority: ae[n]});
            return e.sort(function (t, e) {
                return t.priority - e.priority
            }), e
        }(t = C(t)), r = 0; r < n.length; r++) this[n[r].unit](t[n[r].unit]); else if (_(this[t = M(t)])) return this[t](e);
        return this
    }, Mn.startOf = function (e) {
        var n;
        if (void 0 === (e = M(e)) || "millisecond" === e || !this.isValid()) return this;
        var r = this._isUTC ? Rt : It;
        switch (e) {
            case"year":
                n = r(this.year(), 0, 1);
                break;
            case"quarter":
                n = r(this.year(), this.month() - this.month() % 3, 1);
                break;
            case"month":
                n = r(this.year(), this.month(), 1);
                break;
            case"week":
                n = r(this.year(), this.month(), this.date() - this.weekday());
                break;
            case"isoWeek":
                n = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case"day":
            case"date":
                n = r(this.year(), this.month(), this.date());
                break;
            case"hour":
                n = this._d.valueOf(), n -= Nt(n + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                break;
            case"minute":
                n = this._d.valueOf(), n -= Nt(n, 6e4);
                break;
            case"second":
                n = this._d.valueOf(), n -= Nt(n, 1e3)
        }
        return this._d.setTime(n), t.updateOffset(this, !0), this
    }, Mn.subtract = vn, Mn.toArray = function () {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }, Mn.toObject = function () {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        }
    }, Mn.toDate = function () {
        return new Date(this.valueOf())
    }, Mn.toISOString = function (t) {
        if (!this.isValid()) return null;
        var e = !0 !== t, n = e ? this.clone().utc() : this;
        return n.year() < 0 || 9999 < n.year() ? T(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : _(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", T(n, "Z")) : T(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }, Mn.inspect = function () {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t = "moment", e = "";
        this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
        var n = "[" + t + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = e + '[")]';
        return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + i)
    }, Mn.toJSON = function () {
        return this.isValid() ? this.toISOString() : null
    }, Mn.toString = function () {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, Mn.unix = function () {
        return Math.floor(this.valueOf() / 1e3)
    }, Mn.valueOf = function () {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, Mn.creationData = function () {
        return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
    }, Mn.year = Ye, Mn.isLeapYear = function () {
        return Y(this.year())
    }, Mn.weekYear = function (t) {
        return Yt.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, Mn.isoWeekYear = function (t) {
        return Yt.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, Mn.quarter = Mn.quarters = function (t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }, Mn.month = z, Mn.daysInMonth = function () {
        return H(this.year(), this.month())
    }, Mn.week = Mn.weeks = function (t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }, Mn.isoWeek = Mn.isoWeeks = function (t) {
        var e = J(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }, Mn.weeksInYear = function () {
        var t = this.localeData()._week;
        return K(this.year(), t.dow, t.doy)
    }, Mn.isoWeeksInYear = function () {
        return K(this.year(), 1, 4)
    }, Mn.date = bn, Mn.day = Mn.days = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e, n, r = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (e = t, n = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = n.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - r, "d")) : r
    }, Mn.weekday = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }, Mn.isoWeekday = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null == t) return this.day() || 7;
        var e, n,
            r = (e = t, n = this.localeData(), "string" == typeof e ? n.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
        return this.day(this.day() % 7 ? r : r - 7)
    }, Mn.dayOfYear = function (t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }, Mn.hour = Mn.hours = Qe, Mn.minute = Mn.minutes = _n, Mn.second = Mn.seconds = kn, Mn.millisecond = Mn.milliseconds = Sn, Mn.utcOffset = function (e, n, r) {
        var i, o = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null == e) return this._isUTC ? o : St(this);
        if ("string" == typeof e) {
            if (null === (e = xt(Se, e))) return this
        } else Math.abs(e) < 16 && !r && (e *= 60);
        return !this._isUTC && n && (i = St(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), o !== e && (!n || this._changeInProgress ? Tt(this, Ct(e - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this
    }, Mn.utc = function (t) {
        return this.utcOffset(0, t)
    }, Mn.local = function (t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(St(this), "m")), this
    }, Mn.parseZone = function () {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
            var t = xt(ke, this._i);
            null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
        }
        return this
    }, Mn.hasAlignedHourOffset = function (t) {
        return !!this.isValid() && (t = t ? gt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
    }, Mn.isDST = function () {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, Mn.isLocal = function () {
        return !!this.isValid() && !this._isUTC
    }, Mn.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC
    }, Mn.isUtc = Mt, Mn.isUTC = Mt, Mn.zoneAbbr = function () {
        return this._isUTC ? "UTC" : ""
    }, Mn.zoneName = function () {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, Mn.dates = w("dates accessor is deprecated. Use date instead.", bn), Mn.months = w("months accessor is deprecated. Use month instead", z), Mn.years = w("years accessor is deprecated. Use year instead", Ye), Mn.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }), Mn.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
        if (!r(this._isDSTShifted)) return this._isDSTShifted;
        var t = {};
        if (d(t, this), (t = mt(t))._a) {
            var e = t._isUTC ? c(t._a) : gt(t._a);
            this._isDSTShifted = this.isValid() && 0 < v(t._a, e.toArray())
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var Cn = k.prototype;
    Cn.calendar = function (t, e, n) {
        var r = this._calendar[t] || this._calendar.sameElse;
        return _(r) ? r.call(e, n) : r
    }, Cn.longDateFormat = function (t) {
        var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
        return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
            return t.slice(1)
        }), this._longDateFormat[t])
    }, Cn.invalidDate = function () {
        return this._invalidDate
    }, Cn.ordinal = function (t) {
        return this._ordinal.replace("%d", t)
    }, Cn.preparse = jt, Cn.postformat = jt, Cn.relativeTime = function (t, e, n, r) {
        var i = this._relativeTime[n];
        return _(i) ? i(t, e, n, r) : i.replace(/%d/i, t)
    }, Cn.pastFuture = function (t, e) {
        var n = this._relativeTime[0 < t ? "future" : "past"];
        return _(n) ? n(e) : n.replace(/%s/i, e)
    }, Cn.set = function (t) {
        var e, n
        ;
        for (n in t) _(e = t[n]) ? this[n] = e : this["_" + n] = e;
        this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, Cn.months = function (t, n) {
        return t ? e(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Le).test(n) ? "format" : "standalone"][t.month()] : e(this._months) ? this._months : this._months.standalone
    }, Cn.monthsShort = function (t, n) {
        return t ? e(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Le.test(n) ? "format" : "standalone"][t.month()] : e(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, Cn.monthsParse = function (t, e, n) {
        var r, i, o;
        if (this._monthsParseExact) return function (t, e, n) {
            var r, i, o, a = t.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) o = c([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
            return n ? "MMM" === e ? -1 !== (i = Ue.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Ue.call(this._longMonthsParse, a)) ? i : null : "MMM" === e ? -1 !== (i = Ue.call(this._shortMonthsParse, a)) ? i : -1 !== (i = Ue.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Ue.call(this._longMonthsParse, a)) ? i : -1 !== (i = Ue.call(this._shortMonthsParse, a)) ? i : null
        }.call(this, t, e, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
            if (i = c([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[r].test(t)) return r;
            if (n && "MMM" === e && this._shortMonthsParse[r].test(t)) return r;
            if (!n && this._monthsParse[r].test(t)) return r
        }
    }, Cn.monthsRegex = function (t) {
        return this._monthsParseExact ? (s(this, "_monthsRegex") || q.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (s(this, "_monthsRegex") || (this._monthsRegex = We), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
    }, Cn.monthsShortRegex = function (t) {
        return this._monthsParseExact ? (s(this, "_monthsRegex") || q.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (s(this, "_monthsShortRegex") || (this._monthsShortRegex = He), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, Cn.week = function (t) {
        return J(t, this._week.dow, this._week.doy).week
    }, Cn.firstDayOfYear = function () {
        return this._week.doy
    }, Cn.firstDayOfWeek = function () {
        return this._week.dow
    }, Cn.weekdays = function (t, n) {
        var r = e(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(n) ? "format" : "standalone"];
        return !0 === t ? Q(r, this._week.dow) : t ? r[t.day()] : r
    }, Cn.weekdaysMin = function (t) {
        return !0 === t ? Q(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin
    }, Cn.weekdaysShort = function (t) {
        return !0 === t ? Q(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort
    }, Cn.weekdaysParse = function (t, e, n) {
        var r, i, o;
        if (this._weekdaysParseExact) return function (t, e, n) {
            var r, i, o, a = t.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) o = c([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
            return n ? "dddd" === e ? -1 !== (i = Ue.call(this._weekdaysParse, a)) ? i : null : "ddd" === e ? -1 !== (i = Ue.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Ue.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === e ? -1 !== (i = Ue.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ue.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ue.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === e ? -1 !== (i = Ue.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ue.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ue.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Ue.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = Ue.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ue.call(this._shortWeekdaysParse, a)) ? i : null
        }.call(this, t, e, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
            if (i = c([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[r].test(t)) return r;
            if (n && "ddd" === e && this._shortWeekdaysParse[r].test(t)) return r;
            if (n && "dd" === e && this._minWeekdaysParse[r].test(t)) return r;
            if (!n && this._weekdaysParse[r].test(t)) return r
        }
    }, Cn.weekdaysRegex = function (t) {
        return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || X.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (s(this, "_weekdaysRegex") || (this._weekdaysRegex = Ge), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, Cn.weekdaysShortRegex = function (t) {
        return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || X.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (s(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ze), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, Cn.weekdaysMinRegex = function (t) {
        return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || X.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (s(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Je), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, Cn.isPM = function (t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }, Cn.meridiem = function (t, e, n) {
        return 11 < t ? n ? "pm" : "PM" : n ? "am" : "AM"
    }, ot("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (t) {
            var e = t % 10;
            return t + (1 === g(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
        }
    }), t.lang = w("moment.lang is deprecated. Use moment.locale instead.", ot), t.langData = w("moment.langData is deprecated. Use moment.localeData instead.", st);
    var On = Math.abs, En = Zt("ms"), Dn = Zt("s"), Tn = Zt("m"), An = Zt("h"), Vn = Zt("d"), Pn = Zt("w"),
        Nn = Zt("M"), In = Zt("Q"), Rn = Zt("y"), Un = Jt("milliseconds"), Yn = Jt("seconds"), Ln = Jt("minutes"),
        jn = Jt("hours"), Fn = Jt("days"), Hn = Jt("months"), Wn = Jt("years"), zn = Math.round,
        qn = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11}, Bn = Math.abs, Gn = yt.prototype;
    return Gn.isValid = function () {
        return this._isValid
    }, Gn.abs = function () {
        var t = this._data;
        return this._milliseconds = On(this._milliseconds), this._days = On(this._days), this._months = On(this._months), t.milliseconds = On(t.milliseconds), t.seconds = On(t.seconds), t.minutes = On(t.minutes), t.hours = On(t.hours), t.months = On(t.months), t.years = On(t.years), this
    }, Gn.add = function (t, e) {
        return zt(this, t, e, 1)
    }, Gn.subtract = function (t, e) {
        return zt(this, t, e, -1)
    }, Gn.as = function (t) {
        if (!this.isValid()) return NaN;
        var e, n, r = this._milliseconds;
        if ("month" === (t = M(t)) || "quarter" === t || "year" === t) switch (e = this._days + r / 864e5, n = this._months + Bt(e), t) {
            case"month":
                return n;
            case"quarter":
                return n / 3;
            case"year":
                return n / 12
        } else switch (e = this._days + Math.round(Gt(this._months)), t) {
            case"week":
                return e / 7 + r / 6048e5;
            case"day":
                return e + r / 864e5;
            case"hour":
                return 24 * e + r / 36e5;
            case"minute":
                return 1440 * e + r / 6e4;
            case"second":
                return 86400 * e + r / 1e3;
            case"millisecond":
                return Math.floor(864e5 * e) + r;
            default:
                throw new Error("Unknown unit " + t)
        }
    }, Gn.asMilliseconds = En, Gn.asSeconds = Dn, Gn.asMinutes = Tn, Gn.asHours = An, Gn.asDays = Vn, Gn.asWeeks = Pn, Gn.asMonths = Nn, Gn.asQuarters = In, Gn.asYears = Rn, Gn.valueOf = function () {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12) : NaN
    }, Gn._bubble = function () {
        var t, e, n, r, i, o = this._milliseconds, a = this._days, s = this._months, u = this._data;
        return 0 <= o && 0 <= a && 0 <= s || o <= 0 && a <= 0 && s <= 0 || (o += 864e5 * qt(Gt(s) + a), s = a = 0), u.milliseconds = o % 1e3, t = $(o / 1e3), u.seconds = t % 60, e = $(t / 60), u.minutes = e % 60, n = $(e / 60), u.hours = n % 24, s += i = $(Bt(a += $(n / 24))), a -= qt(Gt(i)), r = $(s / 12), s %= 12, u.days = a, u.months = s, u.years = r, this
    }, Gn.clone = function () {
        return Ct(this)
    }, Gn.get = function (t) {
        return t = M(t), this.isValid() ? this[t + "s"]() : NaN
    }, Gn.milliseconds = Un, Gn.seconds = Yn, Gn.minutes = Ln, Gn.hours = jn, Gn.days = Fn, Gn.weeks = function () {
        return $(this.days() / 7)
    }, Gn.months = Hn, Gn.years = Wn, Gn.humanize = function (t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, n, r, i, o, a, s, u, c, l, f, h = this.localeData(),
            d = (n = !t, r = h, i = Ct(e = this).abs(), o = zn(i.as("s")), a = zn(i.as("m")), s = zn(i.as("h")), u = zn(i.as("d")), c = zn(i.as("M")), l = zn(i.as("y")), (f = o <= qn.ss && ["s", o] || o < qn.s && ["ss", o] || a <= 1 && ["m"] || a < qn.m && ["mm", a] || s <= 1 && ["h"] || s < qn.h && ["hh", s] || u <= 1 && ["d"] || u < qn.d && ["dd", u] || c <= 1 && ["M"] || c < qn.M && ["MM", c] || l <= 1 && ["y"] || ["yy", l])[2] = n, f[3] = 0 < +e, f[4] = r, function (t, e, n, r, i) {
                return i.relativeTime(e || 1, !!n, t, r)
            }.apply(null, f));
        return t && (d = h.pastFuture(+this, d)), h.postformat(d)
    }, Gn.toISOString = Qt, Gn.toString = Qt, Gn.toJSON = Qt, Gn.locale = Vt, Gn.localeData = Pt, Gn.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Qt), Gn.lang = yn, D("X", 0, 0, "unix"), D("x", 0, 0, "valueOf"), V("x", xe), V("X", /[+-]?\d+(\.\d{1,3})?/), I("X", function (t, e, n) {
        n._d = new Date(1e3 * parseFloat(t, 10))
    }), I("x", function (t, e, n) {
        n._d = new Date(g(t))
    }), t.version = "2.24.0", Xt = gt, t.fn = Mn, t.min = function () {
        return vt("isBefore", [].slice.call(arguments, 0))
    }, t.max = function () {
        return vt("isAfter", [].slice.call(arguments, 0))
    }, t.now = function () {
        return Date.now ? Date.now() : +new Date
    }, t.utc = c, t.unix = function (t) {
        return gt(1e3 * t)
    }, t.months = function (t, e) {
        return Ht(t, e, "months")
    }, t.isDate = o, t.locale = ot, t.invalid = h, t.duration = Ct, t.isMoment = m, t.weekdays = function (t, e, n) {
        return Wt(t, e, n, "weekdays")
    }, t.parseZone = function () {
        return gt.apply(null, arguments).parseZone()
    }, t.localeData = st, t.isDuration = wt, t.monthsShort = function (t, e) {
        return Ht(t, e, "monthsShort")
    }, t.weekdaysMin = function (t, e, n) {
        return Wt(t, e, n, "weekdaysMin")
    }, t.defineLocale = at, t.updateLocale = function (t, e) {
        if (null != e) {
            var n, r, i = Xe;
            null != (r = it(t)) && (i = r._config), (n = new k(e = x(i, e))).parentLocale = tn[t], tn[t] = n, ot(t)
        } else null != tn[t] && (null != tn[t].parentLocale ? tn[t] = tn[t].parentLocale : null != tn[t] && delete tn[t]);
        return tn[t]
    }, t.locales = function () {
        return ee(tn)
    }, t.weekdaysShort = function (t, e, n) {
        return Wt(t, e, n, "weekdaysShort")
    }, t.normalizeUnits = M, t.relativeTimeRounding = function (t) {
        return void 0 === t ? zn : "function" == typeof t && (zn = t, !0)
    }, t.relativeTimeThreshold = function (t, e) {
        return void 0 !== qn[t] && (void 0 === e ? qn[t] : (qn[t] = e, "s" === t && (qn.ss = e - 1), !0))
    }, t.calendarFormat = function (t, e) {
        var n = t.diff(e, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }, t.prototype = Mn, t.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    }, t
}), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module && "function" == typeof require ? e(require("../moment")) : "function" == typeof define && define.amd ? define(["../moment"], e) : e(t.moment)
}(this, function (t) {
    "use strict";

    function e(t, e, n) {
        var r = {ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani"}, i = " ";
        return (t % 100 >= 20 || t >= 100 && t % 100 == 0) && (i = " de "), t + i + r[n]
    }

    return t.defineLocale("ro", {
        months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
        monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[mâine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "peste %s",
            past: "%s în urmă",
            s: "câteva secunde",
            ss: e,
            m: "un minut",
            mm: e,
            h: "o oră",
            hh: e,
            d: "o zi",
            dd: e,
            M: "o lună",
            MM: e,
            y: "un an",
            yy: e
        },
        week: {dow: 1, doy: 7}
    })
}), function () {
    "use strict";

    function t(t) {
        return angular.isUndefined(t) || null === t
    }

    function e() {
        try {
            return require("moment")
        } catch (t) {
            throw new Error("Please install moment via npm. Please reference to: https://github.com/urish/angular-moment")
        }
    }

    function n(n, r) {
        if (void 0 === r) {
            if ("function" != typeof require) throw new Error("Moment cannot be found by angular-moment! Please reference to: https://github.com/urish/angular-moment");
            r = e()
        }
        return n.module("angularMoment", []).constant("angularMomentConfig", {
            preprocess: null,
            timezone: null,
            format: null,
            statefulFilters: !0
        }).constant("moment", r).constant("amTimeAgoConfig", {
            withoutSuffix: !1,
            serverTime: null,
            titleFormat: null,
            fullDateThreshold: null,
            fullDateFormat: null,
            fullDateThresholdUnit: "day"
        }).directive("amTimeAgo", ["$window", "moment", "amMoment", "amTimeAgoConfig", function (e, r, i, o) {
            return function (a, s, u) {
                function c() {
                    var t;
                    if (m) t = m; else if (o.serverTime) {
                        var e = (new Date).getTime(), n = e - _ + o.serverTime;
                        t = r(n)
                    } else t = r();
                    return t
                }

                function l() {
                    $ && (e.clearTimeout($), $ = null)
                }

                function f(t) {
                    var n = c().diff(t, b), r = y && n >= y;
                    if (r ? s.text(t.format(w)) : s.text(t.from(c(), g)), v && S && s.attr("title", t.format(v)), !r) {
                        var i = Math.abs(c().diff(t, "minute")), o = 3600;
                        i < 1 ? o = 1 : i < 60 ? o = 30 : i < 180 && (o = 300), $ = e.setTimeout(function () {
                            f(t)
                        }, 1e3 * o)
                    }
                }

                function h(t) {
                    k && s.attr("datetime", t)
                }

                function d() {
                    if (l(), p) {
                        var t = i.preprocessDate(p);
                        f(t), h(t.toISOString())
                    }
                }

                var p, m, $ = null, g = o.withoutSuffix, v = o.titleFormat, y = o.fullDateThreshold,
                    w = o.fullDateFormat, b = o.fullDateThresholdUnit, _ = (new Date).getTime(), x = u.amTimeAgo,
                    k = "TIME" === s[0].nodeName.toUpperCase(), S = !s.attr("title");
                a.$watch(x, function (e) {
                    return t(e) || "" === e ? (l(), void (p && (s.text(""), h(""), p = null))) : (p = e, void d())
                }), n.isDefined(u.amFrom) && a.$watch(u.amFrom, function (e) {
                    m = t(e) || "" === e ? null : r(e), d()
                }), n.isDefined(u.amWithoutSuffix) && a.$watch(u.amWithoutSuffix, function (t) {
                    "boolean" == typeof t ? (g = t, d()) : g = o.withoutSuffix
                }), u.$observe("amFullDateThreshold", function (t) {
                    y = t, d()
                }), u.$observe("amFullDateFormat", function (t) {
                    w = t, d()
                }), u.$observe("amFullDateThresholdUnit", function (t) {
                    b = t, d()
                }), a.$on("$destroy", function () {
                    l()
                }), a.$on("amMoment:localeChanged", function () {
                    d()
                })
            }
        }]).service("amMoment", ["moment", "$rootScope", "$log", "angularMomentConfig", function (t, e, r, i) {
            var o = null;
            this.changeLocale = function (r, i) {
                var o = t.locale(r, i);
                return n.isDefined(r) && e.$broadcast("amMoment:localeChanged"), o
            }, this.changeTimezone = function (n) {
                t.tz && t.tz.setDefault ? (t.tz.setDefault(n), e.$broadcast("amMoment:timezoneChanged")) : r.warn("angular-moment: changeTimezone() works only with moment-timezone.js v0.3.0 or greater."), i.timezone = n, o = n
            }, this.preprocessDate = function (e) {
                return o !== i.timezone && this.changeTimezone(i.timezone), i.preprocess ? i.preprocess(e) : t(!isNaN(parseFloat(e)) && isFinite(e) ? parseInt(e, 10) : e)
            }
        }]).filter("amParse", ["moment", function (t) {
            return function (e, n) {
                return t(e, n)
            }
        }]).filter("amFromUnix", ["moment", function (t) {
            return function (e) {
                return t.unix(e)
            }
        }]).filter("amUtc", ["moment", function (t) {
            return function (e) {
                return t.utc(e)
            }
        }]).filter("amUtcOffset", ["amMoment", function (t) {
            function e(e, n) {
                return t.preprocessDate(e).utcOffset(n)
            }

            return e
        }]).filter("amLocal", ["moment", function (t) {
            return function (e) {
                return t.isMoment(e) ? e.local() : null
            }
        }]).filter("amTimezone", ["amMoment", "angularMomentConfig", "$log", function (t, e, n) {
            function r(e, r) {
                var i = t.preprocessDate(e);
                return r ? i.tz ? i.tz(r) : (n.warn("angular-moment: named timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js ?"), i) : i
            }

            return r
        }]).filter("amCalendar", ["moment", "amMoment", "angularMomentConfig", function (e, n, r) {
            function i(e, r, i) {
                if (t(e)) return "";
                var o = n.preprocessDate(e);
                return o.isValid() ? o.calendar(r, i) : ""
            }

            return i.$stateful = r.statefulFilters, i
        }]).filter("amDifference", ["moment", "amMoment", "angularMomentConfig", function (e, n, r) {
            function i(r, i, o, a) {
                if (t(r)) return "";
                var s = n.preprocessDate(r), u = t(i) ? e() : n.preprocessDate(i);
                return s.isValid() && u.isValid() ? s.diff(u, o, a) : ""
            }

            return i.$stateful = r.statefulFilters, i
        }]).filter("amDateFormat", ["moment", "amMoment", "angularMomentConfig", function (e, n, r) {
            function i(e, r) {
                if (t(e)) return "";
                var i = n.preprocessDate(e);
                return i.isValid() ? i.format(r) : ""
            }

            return i.$stateful = r.statefulFilters, i
        }]).filter("amDurationFormat", ["moment", "angularMomentConfig", function (e, n) {
            function r(n, r, i) {
                return t(n) ? "" : e.duration(n, r).humanize(i)
            }

            return r.$stateful = n.statefulFilters, r
        }]).filter("amTimeAgo", ["moment", "amMoment", "angularMomentConfig", function (e, n, r) {
            function i(r, i, o) {
                var a, s;
                return t(r) ? "" : (r = n.preprocessDate(r), a = e(r), a.isValid() ? (s = e(o), !t(o) && s.isValid() ? a.from(s, i) : a.fromNow(i)) : "")
            }

            return i.$stateful = r.statefulFilters, i
        }]).filter("amSubtract", ["moment", "angularMomentConfig", function (e, n) {
            function r(n, r, i) {
                return t(n) ? "" : e(n).subtract(parseInt(r, 10), i)
            }

            return r.$stateful = n.statefulFilters, r
        }]).filter("amAdd", ["moment", "angularMomentConfig", function (e, n) {
            function r(n, r, i) {
                return t(n) ? "" : e(n).add(parseInt(r, 10), i)
            }

            return r.$stateful = n.statefulFilters, r
        }]).filter("amStartOf", ["moment", "angularMomentConfig", function (e, n) {
            function r(n, r) {
                return t(n) ? "" : e(n).startOf(r)
            }

            return r.$stateful = n.statefulFilters, r
        }]).filter("amEndOf", ["moment", "angularMomentConfig", function (e, n) {
            function r(n, r) {
                return t(n) ? "" : e(n).endOf(r)
            }

            return r.$stateful = n.statefulFilters, r
        }]), "angularMoment"
    }

    var r = window && window.process && window.process.type;
    "function" == typeof define && define.amd ? define(["angular", "moment"], n) : "undefined" != typeof module && module && module.exports && "function" == typeof require && !r ? module.exports = n(require("angular"), require("moment")) : n(angular, ("undefined" != typeof global && void 0 !== global.moment ? global : window).moment)
}();
var Diet = angular.module("Diet", ["ngSanitize", "angularMoment"]);
Diet.config(["$locationProvider", function (t) {
    t.html5Mode(!0)
}]), Diet.factory("API", ["$http", "$sce", function (t, e) {
    return {
        getCity: function () {
            return t({method: "GET", url: "modules/getCity.php"})
        }
    }
}]), Diet.controller("MainCtrl", ["$scope", "$window", "moment", "$timeout", "$interval", "API", function (t, e, n, r, i, o) {
    t.today = n(), t.today = n().format("D MMMM"), t.currentYear = n().format("YYYY"), t.landing = !0, t.loading = !1, t.showQuestion = !1, t.disabledNext = !1, t.showUserResult = !1, t.loadingWidth = 0, t.userAge = "", t.userHeight = "", t.userWeight = "", t.userTargetWeight = "", t.zodiaks = [{
        name: "Aries",
        img: "berbec.svg",
        id: 1
    }, {name: "Taurus", img: "taur.svg", id: 2}, {name: "Gemini", img: "gemeni.svg", id: 3}, {
        name: "Cancer",
        img: "rac.svg",
        id: 4
    }, {name: "Leo", img: "leo.svg", id: 5}, {name: "Virgo", img: "fecioara.svg", id: 6}, {
        name: "Libra",
        img: "balanta.svg",
        id: 7
    }, {name: "Scorpio", img: "scorpion.svg", id: 8}, {
        name: "Sagittarius",
        img: "sagetator.svg",
        id: 9
    }, {name: "Capricorn", img: "capricorn.svg", id: 10}, {
        name: "Aquarius",
        img: "varsator.svg",
        id: 11
    }, {name: "Pisces", img: "pesti.svg", id: 12}], t.questionList = [{
        question: "How often do you drink alcohol? ",
        answers: [{id: 1, answer: "I don’t drink", active: !1}, {
            id: 2,
            answer: "Several times a month",
            active: !1
        }, {id: 3, answer: "Several times a week", active: !1}, {id: 4, answer: "Every day", active: !1}],
        type: "radio"
    }, {
        question: "How often do you eat fast food?",
        answers: [{id: 23, answer: "I eat fast food often", active: !1}, {
            id: 24,
            answer: "Several times a week",
            active: !1
        }, {id: 25, answer: "Rarely, but sometimes I do", active: !1}, {
            id: 26,
            answer: "I don’t eat fast food",
            active: !1
        }],
        type: "radio"
    }, {
        question: "Have any cases of cancer been diagnosed in your close relatives?",
        answers: [{id: 29, answer: "Yes, there were cases of cancer in my close relatives", active: !1}, {
            id: 30,
            answer: "No, there were not any cases",
            active: !1
        }, {id: 5, answer: "I don’t know", active: !1}],
        type: "radio"
    }, {
        question: "Do you smoke?",
        answers: [{id: 31, answer: "No", active: !1}, {id: 32, answer: "Only when I drink alcohol", active: !1}, {
            id: 6,
            answer: "Less than a pack of cigarettes a day",
            active: !1
        }, {id: 7, answer: "More than a pack of cigarettes a day", active: !1}],
        type: "radio"
    }, {
        question: "Do you often travel outside of your country?",
        answers: [{id: 101, answer: "More than 5 times a year", active: !1}, {
            id: 102,
            answer: "3-5 times a year",
            active: !1
        }, {id: 103, answer: "1-2 times a year", active: !1}, {id: 104, answer: "Never", active: !1}],
        type: "radio"
    }, {
        question: "Are you ever ashamed of what you’ve done?",
        answers: [{id: 105, answer: "Yes, often", active: !1}, {
            id: 106,
            answer: "Sometimes but rarely",
            active: !1
        }, {id: 107, answer: "I am never ashamed", active: !1}, {id: 108, answer: "Never", active: !1}],
        type: "radio"
    }, {question: "Enter your birth date:", type: "date"}], o.getCity().then(function (e) {
        t.city = e.data.city
    });
    var a = t.questionList.length + 1, s = 100 / a;
    t.slider_current_amount = s, t.validateQuestion = function (t) {
        return t.find(function (t, e, n) {
            if (t.active) return !0
        })
    }, t.randomIntFromInterval = function (t, e) {
        return Math.floor(Math.random() * (e - t + 1) + t)
    }, t.startQuestion = function () {
        e.scrollTo(0, 0);
        var n = 100 / a;
        t.slider_current_amount = n, t.currentIndex = 0, t.landing = !1, t.showQuestion = !0, document.getElementById("progress").style.width = t.slider_current_amount + "%"
    }, t.nextQuestion = function (n) {
        var o;
        if ("date" === n.type ? t.zodiak ? o = !0 : t.errorMessage = "Error" : o = t.validateQuestion(n.answers), e.scrollTo(0, 0), o) {
            if (t.errorMessage = "", t.currentIndex++, t.slider_current_amount = t.slider_current_amount + s, document.getElementById("progress").style.width = t.slider_current_amount + "%", t.currentIndex === t.questionList.length) {
                t.loading = !0, t.showQuestion = !1;
                var a = i(function () {
                    99 === t.loadingWidth && (i.cancel(a), r(function () {
                        t.loading = !1, t.showUserResult = !0
                    }, 3e3)), t.loadingWidth += 1
                }, 100)
            }
        } else t.errorMessage = "Error"
    }, t.prevQuestion = function () {
        t.errorMessage = "", t.currentIndex--, t.slider_current_amount = t.slider_current_amount - s, document.getElementById("progress").style.width = t.slider_current_amount + "%", t.currentIndex < 0 && (t.landing = !0, t.showQuestion = !1)
    }, t.footerPosition = function () {
        var t = window.innerHeight, n = document.getElementById("summary-footer");
        t > document.getElementById("main-page").offsetHeight + 90 ? (n.style.top = t - 200 + "px", n.style.marginTop = 0) : (n.style.top = "auto", n.style.marginTop = "10px"), angular.element(e).bind("resize", function () {
            var t = window.innerHeight, e = document.getElementById("summary-footer");
            t > document.getElementById("main-page").offsetHeight + 90 ? (e.style.top = t - 200 + "px", e.style.marginTop = 0) : (e.style.top = "auto", e.style.marginTop = "10px")
        })
    }, t.$watch("showUserResult", function (e, n) {
        e && r(function () {
            t.footerPosition()
        })
    }), t.checkAnswer = function (e, n) {
        var r = this.$index;
        switch (n) {
            case"radio":
                e.forEach(function (e, n, i) {
                    e.active = !1, i[r].active = !0, t.disabledNext = !0
                });
                break;
            case"checkbox":
                this.a.active = !this.a.active, t.disabledNext = !0
        }
    }, t.getZodiak = function (e) {
        var n = parseInt(e[0]);
        switch (parseInt(e[1])) {
            case 1:
                t.zodiak = n < 20 ? 10 : 11;
                break;
            case 2:
                t.zodiak = n < 19 ? 11 : 12;
                break;
            case 3:
                t.zodiak = n < 21 ? 12 : 1;
                break;
            case 4:
                t.zodiak = n < 20 ? 1 : 2;
                break;
            case 5:
                t.zodiak = n < 21 ? 2 : 3;
                break;
            case 6:
                t.zodiak = n < 21 ? 3 : 4;
                break;
            case 7:
                t.zodiak = n < 23 ? 4 : 5;
                break;
            case 8:
                t.zodiak = n < 23 ? 5 : 6;
                break;
            case 9:
                t.zodiak = n < 23 ? 6 : 7;
                break;
            case 10:
                t.zodiak = n < 23 ? 7 : 8;
                break;
            case 11:
                t.zodiak = n < 22 ? 8 : 9;
                break;
            case 12:
                t.zodiak = n < 22 ? 9 : 10
        }
        return t.zodiak
    };
    var u;
    t.formChange = function (e) {
        e.day && e.month && e.year && (u = [e.day, e.month], t.zodiak = t.getZodiak(u))
    }
}]);