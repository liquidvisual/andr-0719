var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function launchGallery() {
  $("[data-lightbox-group]").each(function () {
    var e = $(this),
        t = e.attr("data-lightbox-group");e.magnificPopup({ delegate: "a", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] }, image: { tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function titleSrc(e) {
          return '<div class="mb-1">' + e.el.attr("title") + "</div><small>" + t + "</small>";
        } }, callbacks: { elementParse: function elementParse(e) {
          (-1 != e.src.indexOf("youtube") || -1 != e.src.indexOf("vimeo") || -1 != e.src.indexOf("maps")) && (e.type = "iframe");
        } } });
  });
}!function (e, t) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
      i = e.document,
      o = Object.getPrototypeOf,
      r = n.slice,
      s = n.concat,
      a = n.push,
      l = n.indexOf,
      c = {},
      u = c.toString,
      d = c.hasOwnProperty,
      f = d.toString,
      h = f.call(Object),
      p = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      g = function g(e) {
    return null != e && e === e.window;
  },
      v = { type: !0, src: !0, noModule: !0 };function y(e, t, n) {
    var o,
        r = (t = t || i).createElement("script");if (r.text = e, n) for (o in v) {
      n[o] && (r[o] = n[o]);
    }t.head.appendChild(r).parentNode.removeChild(r);
  }function b(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? c[u.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var w = function w(e, t) {
    return new w.fn.init(e, t);
  },
      _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function x(e) {
    var t = !!e && "length" in e && e.length,
        n = b(e);return !m(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }w.fn = w.prototype = { jquery: "3.3.1", constructor: w, length: 0, toArray: function toArray() {
      return r.call(this);
    }, get: function get(e) {
      return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      var t = w.merge(this.constructor(), e);return t.prevObject = this, t;
    }, each: function each(e) {
      return w.each(this, e);
    }, map: function map(e) {
      return this.pushStack(w.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function slice() {
      return this.pushStack(r.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: a, sort: n.sort, splice: n.splice }, w.extend = w.fn.extend = function () {
    var e,
        t,
        n,
        i,
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || m(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = s[t], s !== (i = e[t]) && (c && i && (w.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1, r = n && Array.isArray(n) ? n : []) : r = n && w.isPlainObject(n) ? n : {}, s[t] = w.extend(c, r, i)) : void 0 !== i && (s[t] = i));
      }
    }return s;
  }, w.extend({ expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      var t, n;return !(!e || "[object Object]" !== u.call(e)) && (!(t = o(e)) || "function" == typeof (n = d.call(t, "constructor") && t.constructor) && f.call(n) === h);
    }, isEmptyObject: function isEmptyObject(e) {
      var t;for (t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e) {
      y(e);
    }, each: function each(e, t) {
      var n,
          i = 0;if (x(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++) {} else for (i in e) {
        if (!1 === t.call(e[i], i, e[i])) break;
      }return e;
    }, trim: function trim(e) {
      return null == e ? "" : (e + "").replace(_, "");
    }, makeArray: function makeArray(e, t) {
      var n = t || [];return null != e && (x(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : l.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, i = 0, o = e.length; i < n; i++) {
        e[o++] = t[i];
      }return e.length = o, e;
    }, grep: function grep(e, t, n) {
      for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) {
        !t(e[o], o) !== s && i.push(e[o]);
      }return i;
    }, map: function map(e, t, n) {
      var i,
          o,
          r = 0,
          a = [];if (x(e)) for (i = e.length; r < i; r++) {
        null != (o = t(e[r], r, n)) && a.push(o);
      } else for (r in e) {
        null != (o = t(e[r], r, n)) && a.push(o);
      }return s.apply([], a);
    }, guid: 1, support: p }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    c["[object " + t + "]"] = t.toLowerCase();
  });var E = function (e) {
    var t,
        n,
        i,
        o,
        r,
        s,
        a,
        l,
        c,
        u,
        d,
        f,
        h,
        p,
        m,
        g,
        v,
        y,
        b,
        w = "sizzle" + 1 * new Date(),
        _ = e.document,
        x = 0,
        E = 0,
        C = se(),
        T = se(),
        S = se(),
        k = function k(e, t) {
      return e === t && (d = !0), 0;
    },
        D = {}.hasOwnProperty,
        A = [],
        N = A.pop,
        I = A.push,
        L = A.push,
        P = A.slice,
        j = function j(e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        q = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        z = "\\[" + q + "*(" + M + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + q + "*\\]",
        F = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
        H = new RegExp(q + "+", "g"),
        B = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
        R = new RegExp("^" + q + "*," + q + "*"),
        W = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
        U = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]", "g"),
        $ = new RegExp(F),
        Q = new RegExp("^" + M + "$"),
        V = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + z), PSEUDO: new RegExp("^" + F), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"), bool: new RegExp("^(?:" + O + ")$", "i"), needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        J = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"),
        ee = function ee(e, t, n) {
      var i = "0x" + t - 65536;return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function ne(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        ie = function ie() {
      f();
    },
        oe = ye(function (e) {
      return !0 === e.disabled && ("form" in e || "label" in e);
    }, { dir: "parentNode", next: "legend" });try {
      L.apply(A = P.call(_.childNodes), _.childNodes), A[_.childNodes.length].nodeType;
    } catch (e) {
      L = { apply: A.length ? function (e, t) {
          I.apply(e, P.call(t));
        } : function (e, t) {
          for (var n = e.length, i = 0; e[n++] = t[i++];) {}e.length = n - 1;
        } };
    }function re(e, t, i, o) {
      var r,
          a,
          c,
          u,
          d,
          p,
          v,
          y = t && t.ownerDocument,
          x = t ? t.nodeType : 9;if (i = i || [], "string" != typeof e || !e || 1 !== x && 9 !== x && 11 !== x) return i;if (!o && ((t ? t.ownerDocument || t : _) !== h && f(t), t = t || h, m)) {
        if (11 !== x && (d = G.exec(e))) if (r = d[1]) {
          if (9 === x) {
            if (!(c = t.getElementById(r))) return i;if (c.id === r) return i.push(c), i;
          } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i;
        } else {
          if (d[2]) return L.apply(i, t.getElementsByTagName(e)), i;if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(r)), i;
        }if (n.qsa && !S[e + " "] && (!g || !g.test(e))) {
          if (1 !== x) y = t, v = e;else if ("object" !== t.nodeName.toLowerCase()) {
            for ((u = t.getAttribute("id")) ? u = u.replace(te, ne) : t.setAttribute("id", u = w), a = (p = s(e)).length; a--;) {
              p[a] = "#" + u + " " + ve(p[a]);
            }v = p.join(","), y = J.test(e) && me(t.parentNode) || t;
          }if (v) try {
            return L.apply(i, y.querySelectorAll(v)), i;
          } catch (e) {} finally {
            u === w && t.removeAttribute("id");
          }
        }
      }return l(e.replace(B, "$1"), t, i, o);
    }function se() {
      var e = [];return function t(n, o) {
        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o;
      };
    }function ae(e) {
      return e[w] = !0, e;
    }function le(e) {
      var t = h.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function ce(e, t) {
      for (var n = e.split("|"), o = n.length; o--;) {
        i.attrHandle[n[o]] = t;
      }
    }function ue(e, t) {
      var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function de(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function fe(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }function he(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && oe(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function pe(e) {
      return ae(function (t) {
        return t = +t, ae(function (n, i) {
          for (var o, r = e([], n.length, t), s = r.length; s--;) {
            n[o = r[s]] && (n[o] = !(i[o] = n[o]));
          }
        });
      });
    }function me(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }for (t in n = re.support = {}, r = re.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, f = re.setDocument = function (e) {
      var t,
          o,
          s = e ? e.ownerDocument || e : _;return s !== h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, m = !r(h), _ !== h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", ie, !1) : o.attachEvent && o.attachEvent("onunload", ie)), n.attributes = le(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), n.getElementsByTagName = le(function (e) {
        return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
      }), n.getElementsByClassName = K.test(h.getElementsByClassName), n.getById = le(function (e) {
        return p.appendChild(e).id = w, !h.getElementsByName || !h.getElementsByName(w).length;
      }), n.getById ? (i.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && m) {
          var n = t.getElementById(e);return n ? [n] : [];
        }
      }) : (i.filter.ID = function (e) {
        var t = e.replace(Z, ee);return function (e) {
          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
        };
      }, i.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && m) {
          var n,
              i,
              o,
              r = t.getElementById(e);if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];for (o = t.getElementsByName(e), i = 0; r = o[i++];) {
              if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
            }
          }return [];
        }
      }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            i = [],
            o = 0,
            r = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = r[o++];) {
            1 === n.nodeType && i.push(n);
          }return i;
        }return r;
      }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
      }, v = [], g = [], (n.qsa = K.test(h.querySelectorAll)) && (le(function (e) {
        p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + q + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + q + "*(?:value|" + O + ")"), e.querySelectorAll("[id~=" + w + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || g.push(".#.+[+~]");
      }), le(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = h.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + q + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
      })), (n.matchesSelector = K.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function (e) {
        n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", F);
      }), g = g.length && new RegExp(g.join("|")), v = v.length && new RegExp(v.join("|")), t = K.test(p.compareDocumentPosition), b = t || K.test(p.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, k = t ? function (e, t) {
        if (e === t) return d = !0, 0;var i = !e.compareDocumentPosition - !t.compareDocumentPosition;return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === h || e.ownerDocument === _ && b(_, e) ? -1 : t === h || t.ownerDocument === _ && b(_, t) ? 1 : u ? j(u, e) - j(u, t) : 0 : 4 & i ? -1 : 1);
      } : function (e, t) {
        if (e === t) return d = !0, 0;var n,
            i = 0,
            o = e.parentNode,
            r = t.parentNode,
            s = [e],
            a = [t];if (!o || !r) return e === h ? -1 : t === h ? 1 : o ? -1 : r ? 1 : u ? j(u, e) - j(u, t) : 0;if (o === r) return ue(e, t);for (n = e; n = n.parentNode;) {
          s.unshift(n);
        }for (n = t; n = n.parentNode;) {
          a.unshift(n);
        }for (; s[i] === a[i];) {
          i++;
        }return i ? ue(s[i], a[i]) : s[i] === _ ? -1 : a[i] === _ ? 1 : 0;
      }, h) : h;
    }, re.matches = function (e, t) {
      return re(e, null, null, t);
    }, re.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== h && f(e), t = t.replace(U, "='$1']"), n.matchesSelector && m && !S[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))) try {
        var i = y.call(e, t);if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
      } catch (e) {}return re(t, h, null, [e]).length > 0;
    }, re.contains = function (e, t) {
      return (e.ownerDocument || e) !== h && f(e), b(e, t);
    }, re.attr = function (e, t) {
      (e.ownerDocument || e) !== h && f(e);var o = i.attrHandle[t.toLowerCase()],
          r = o && D.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;return void 0 !== r ? r : n.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, re.escape = function (e) {
      return (e + "").replace(te, ne);
    }, re.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, re.uniqueSort = function (e) {
      var t,
          i = [],
          o = 0,
          r = 0;if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(k), d) {
        for (; t = e[r++];) {
          t === e[r] && (o = i.push(r));
        }for (; o--;) {
          e.splice(i[o], 1);
        }
      }return u = null, e;
    }, o = re.getText = function (e) {
      var t,
          n = "",
          i = 0,
          r = e.nodeType;if (r) {
        if (1 === r || 9 === r || 11 === r) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === r || 4 === r) return e.nodeValue;
      } else for (; t = e[i++];) {
        n += o(t);
      }return n;
    }, (i = re.selectors = { cacheLength: 50, createPseudo: ae, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(Z, ee).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = C[e + " "];return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && C(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(e, t, n) {
          return function (i) {
            var o = re.attr(i, e);return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && o.indexOf(n) > -1 : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? (" " + o.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"));
          };
        }, CHILD: function CHILD(e, t, n, i, o) {
          var r = "nth" !== e.slice(0, 3),
              s = "last" !== e.slice(-4),
              a = "of-type" === t;return 1 === i && 0 === o ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var c,
                u,
                d,
                f,
                h,
                p,
                m = r !== s ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                v = a && t.nodeName.toLowerCase(),
                y = !l && !a,
                b = !1;if (g) {
              if (r) {
                for (; m;) {
                  for (f = t; f = f[m];) {
                    if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                  }p = m = "only" === e && !p && "nextSibling";
                }return !0;
              }if (p = [s ? g.firstChild : g.lastChild], s && y) {
                for (b = (h = (c = (u = (d = (f = g)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], f = h && g.childNodes[h]; f = ++h && f && f[m] || (b = h = 0) || p.pop();) {
                  if (1 === f.nodeType && ++b && f === t) {
                    u[e] = [x, h, b];break;
                  }
                }
              } else if (y && (b = h = (c = (u = (d = (f = t)[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === b) for (; (f = ++h && f && f[m] || (b = h = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[w] || (f[w] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [x, b]), f !== t));) {}return (b -= o) === i || b % i == 0 && b / i >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(e, t) {
          var n,
              o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);return o[w] ? o(t) : o.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e, n) {
            for (var i, r = o(e, t), s = r.length; s--;) {
              e[i = j(e, r[s])] = !(n[i] = r[s]);
            }
          }) : function (e) {
            return o(e, 0, n);
          }) : o;
        } }, pseudos: { not: ae(function (e) {
          var t = [],
              n = [],
              i = a(e.replace(B, "$1"));return i[w] ? ae(function (e, t, n, o) {
            for (var r, s = i(e, null, o, []), a = e.length; a--;) {
              (r = s[a]) && (e[a] = !(t[a] = r));
            }
          }) : function (e, o, r) {
            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop();
          };
        }), has: ae(function (e) {
          return function (t) {
            return re(e, t).length > 0;
          };
        }), contains: ae(function (e) {
          return e = e.replace(Z, ee), function (t) {
            return (t.textContent || t.innerText || o(t)).indexOf(e) > -1;
          };
        }), lang: ae(function (e) {
          return Q.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(Z, ee).toLowerCase(), function (t) {
            var n;do {
              if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function root(e) {
          return e === p;
        }, focus: function focus(e) {
          return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: he(!1), disabled: he(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !i.pseudos.empty(e);
        }, header: function header(e) {
          return Y.test(e.nodeName);
        }, input: function input(e) {
          return X.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: pe(function () {
          return [0];
        }), last: pe(function (e, t) {
          return [t - 1];
        }), eq: pe(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: pe(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: pe(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; --i >= 0;) {
            e.push(i);
          }return e;
        }), gt: pe(function (e, t, n) {
          for (var i = n < 0 ? n + t : n; ++i < t;) {
            e.push(i);
          }return e;
        }) } }).pseudos.nth = i.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      i.pseudos[t] = de(t);
    }for (t in { submit: !0, reset: !0 }) {
      i.pseudos[t] = fe(t);
    }function ge() {}function ve(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) {
        i += e[t].value;
      }return i;
    }function ye(e, t, n) {
      var i = t.dir,
          o = t.next,
          r = o || i,
          s = n && "parentNode" === r,
          a = E++;return t.first ? function (t, n, o) {
        for (; t = t[i];) {
          if (1 === t.nodeType || s) return e(t, n, o);
        }return !1;
      } : function (t, n, l) {
        var c,
            u,
            d,
            f = [x, a];if (l) {
          for (; t = t[i];) {
            if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
          }
        } else for (; t = t[i];) {
          if (1 === t.nodeType || s) if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;else {
            if ((c = u[r]) && c[0] === x && c[1] === a) return f[2] = c[2];if (u[r] = f, f[2] = e(t, n, l)) return !0;
          }
        }return !1;
      };
    }function be(e) {
      return e.length > 1 ? function (t, n, i) {
        for (var o = e.length; o--;) {
          if (!e[o](t, n, i)) return !1;
        }return !0;
      } : e[0];
    }function we(e, t, n, i, o) {
      for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) {
        (r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
      }return s;
    }function _e(e, t, n, i, o, r) {
      return i && !i[w] && (i = _e(i)), o && !o[w] && (o = _e(o, r)), ae(function (r, s, a, l) {
        var c,
            u,
            d,
            f = [],
            h = [],
            p = s.length,
            m = r || function (e, t, n) {
          for (var i = 0, o = t.length; i < o; i++) {
            re(e, t[i], n);
          }return n;
        }(t || "*", a.nodeType ? [a] : a, []),
            g = !e || !r && t ? m : we(m, f, e, a, l),
            v = n ? o || (r ? e : p || i) ? [] : s : g;if (n && n(g, v, a, l), i) for (c = we(v, h), i(c, [], a, l), u = c.length; u--;) {
          (d = c[u]) && (v[h[u]] = !(g[h[u]] = d));
        }if (r) {
          if (o || e) {
            if (o) {
              for (c = [], u = v.length; u--;) {
                (d = v[u]) && c.push(g[u] = d);
              }o(null, v = [], c, l);
            }for (u = v.length; u--;) {
              (d = v[u]) && (c = o ? j(r, d) : f[u]) > -1 && (r[c] = !(s[c] = d));
            }
          }
        } else v = we(v === s ? v.splice(p, v.length) : v), o ? o(null, s, v, l) : L.apply(s, v);
      });
    }function xe(e) {
      for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = ye(function (e) {
        return e === t;
      }, a, !0), d = ye(function (e) {
        return j(t, e) > -1;
      }, a, !0), f = [function (e, n, i) {
        var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));return t = null, o;
      }]; l < r; l++) {
        if (n = i.relative[e[l].type]) f = [ye(be(f), n)];else {
          if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
            for (o = ++l; o < r && !i.relative[e[o].type]; o++) {}return _e(l > 1 && be(f), l > 1 && ve(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(B, "$1"), n, l < o && xe(e.slice(l, o)), o < r && xe(e = e.slice(o)), o < r && ve(e));
          }f.push(n);
        }
      }return be(f);
    }return ge.prototype = i.filters = i.pseudos, i.setFilters = new ge(), s = re.tokenize = function (e, t) {
      var n,
          o,
          r,
          s,
          a,
          l,
          c,
          u = T[e + " "];if (u) return t ? 0 : u.slice(0);for (a = e, l = [], c = i.preFilter; a;) {
        for (s in n && !(o = R.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = W.exec(a)) && (n = o.shift(), r.push({ value: n, type: o[0].replace(B, " ") }), a = a.slice(n.length)), i.filter) {
          !(o = V[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({ value: n, type: s, matches: o }), a = a.slice(n.length));
        }if (!n) break;
      }return t ? a.length : a ? re.error(e) : T(e, l).slice(0);
    }, a = re.compile = function (e, t) {
      var n,
          o = [],
          r = [],
          a = S[e + " "];if (!a) {
        for (t || (t = s(e)), n = t.length; n--;) {
          (a = xe(t[n]))[w] ? o.push(a) : r.push(a);
        }(a = S(e, function (e, t) {
          var n = t.length > 0,
              o = e.length > 0,
              r = function r(_r, s, a, l, u) {
            var d,
                p,
                g,
                v = 0,
                y = "0",
                b = _r && [],
                w = [],
                _ = c,
                E = _r || o && i.find.TAG("*", u),
                C = x += null == _ ? 1 : Math.random() || .1,
                T = E.length;for (u && (c = s === h || s || u); y !== T && null != (d = E[y]); y++) {
              if (o && d) {
                for (p = 0, s || d.ownerDocument === h || (f(d), a = !m); g = e[p++];) {
                  if (g(d, s || h, a)) {
                    l.push(d);break;
                  }
                }u && (x = C);
              }n && ((d = !g && d) && v--, _r && b.push(d));
            }if (v += y, n && y !== v) {
              for (p = 0; g = t[p++];) {
                g(b, w, s, a);
              }if (_r) {
                if (v > 0) for (; y--;) {
                  b[y] || w[y] || (w[y] = N.call(l));
                }w = we(w);
              }L.apply(l, w), u && !_r && w.length > 0 && v + t.length > 1 && re.uniqueSort(l);
            }return u && (x = C, c = _), b;
          };return n ? ae(r) : r;
        }(r, o))).selector = e;
      }return a;
    }, l = re.select = function (e, t, n, o) {
      var r,
          l,
          c,
          u,
          d,
          f = "function" == typeof e && e,
          h = !o && s(e = f.selector || e);if (n = n || [], 1 === h.length) {
        if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
          if (!(t = (i.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])) return n;f && (t = t.parentNode), e = e.slice(l.shift().value.length);
        }for (r = V.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);) {
          if ((d = i.find[u]) && (o = d(c.matches[0].replace(Z, ee), J.test(l[0].type) && me(t.parentNode) || t))) {
            if (l.splice(r, 1), !(e = o.length && ve(l))) return L.apply(n, o), n;break;
          }
        }
      }return (f || a(e, h))(o, t, !m, n, !t || J.test(e) && me(t.parentNode) || t), n;
    }, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!d, f(), n.sortDetached = le(function (e) {
      return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
    }), le(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || ce("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), n.attributes && le(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || ce("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), le(function (e) {
      return null == e.getAttribute("disabled");
    }) || ce(O, function (e, t, n) {
      var i;if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
    }), re;
  }(e);w.find = E, w.expr = E.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = E.uniqueSort, w.text = E.getText, w.isXMLDoc = E.isXML, w.contains = E.contains, w.escapeSelector = E.escape;var C = function C(e, t, n) {
    for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (o && w(e).is(n)) break;i.push(e);
      }
    }return i;
  },
      T = function T(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  },
      S = w.expr.match.needsContext;function k(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function A(e, t, n) {
    return m(t) ? w.grep(e, function (e, i) {
      return !!t.call(e, i, e) !== n;
    }) : t.nodeType ? w.grep(e, function (e) {
      return e === t !== n;
    }) : "string" != typeof t ? w.grep(e, function (e) {
      return l.call(t, e) > -1 !== n;
    }) : w.filter(t, e, n);
  }w.filter = function (e, t, n) {
    var i = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? w.find.matchesSelector(i, e) ? [i] : [] : w.find.matches(e, w.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, w.fn.extend({ find: function find(e) {
      var t,
          n,
          i = this.length,
          o = this;if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
        for (t = 0; t < i; t++) {
          if (w.contains(o[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < i; t++) {
        w.find(e, o[t], n);
      }return i > 1 ? w.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(A(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(A(this, e || [], !0));
    }, is: function is(e) {
      return !!A(this, "string" == typeof e && S.test(e) ? w(e) : e || [], !1).length;
    } });var N,
      I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init = function (e, t, n) {
    var o, r;if (!e) return this;if (n = n || N, "string" == typeof e) {
      if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);if (o[1]) {
        if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), D.test(o[1]) && w.isPlainObject(t)) for (o in t) {
          m(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
        }return this;
      }return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this;
    }return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this);
  }).prototype = w.fn, N = w(i);var L = /^(?:parents|prev(?:Until|All))/,
      P = { children: !0, contents: !0, next: !0, prev: !0 };function j(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }w.fn.extend({ has: function has(e) {
      var t = w(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (w.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          i = 0,
          o = this.length,
          r = [],
          s = "string" != typeof e && w(e);if (!S.test(e)) for (; i < o; i++) {
        for (n = this[i]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            r.push(n);break;
          }
        }
      }return this.pushStack(r.length > 1 ? w.uniqueSort(r) : r);
    }, index: function index(e) {
      return e ? "string" == typeof e ? l.call(w(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), w.each({ parent: function parent(e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function parents(e) {
      return C(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return C(e, "parentNode", n);
    }, next: function next(e) {
      return j(e, "nextSibling");
    }, prev: function prev(e) {
      return j(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return C(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return C(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return C(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return C(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return T((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return T(e.firstChild);
    }, contents: function contents(e) {
      return k(e, "iframe") ? e.contentDocument : (k(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
    } }, function (e, t) {
    w.fn[e] = function (n, i) {
      var o = w.map(this, t, n);return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = w.filter(i, o)), this.length > 1 && (P[e] || w.uniqueSort(o), L.test(e) && o.reverse()), this.pushStack(o);
    };
  });var O = /[^\x20\t\r\n\f]+/g;function q(e) {
    return e;
  }function M(e) {
    throw e;
  }function z(e, t, n, i) {
    var o;try {
      e && m(o = e.promise) ? o.call(e).done(t).fail(n) : e && m(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }w.Callbacks = function (e) {
    e = "string" == typeof e ? function (e) {
      var t = {};return w.each(e.match(O) || [], function (e, n) {
        t[n] = !0;
      }), t;
    }(e) : w.extend({}, e);var t,
        n,
        i,
        o,
        r = [],
        s = [],
        a = -1,
        l = function l() {
      for (o = o || e.once, i = t = !0; s.length; a = -1) {
        for (n = s.shift(); ++a < r.length;) {
          !1 === r[a].apply(n[0], n[1]) && e.stopOnFalse && (a = r.length, n = !1);
        }
      }e.memory || (n = !1), t = !1, o && (r = n ? [] : "");
    },
        c = { add: function add() {
        return r && (n && !t && (a = r.length - 1, s.push(n)), function t(n) {
          w.each(n, function (n, i) {
            m(i) ? e.unique && c.has(i) || r.push(i) : i && i.length && "string" !== b(i) && t(i);
          });
        }(arguments), n && !t && l()), this;
      }, remove: function remove() {
        return w.each(arguments, function (e, t) {
          for (var n; (n = w.inArray(t, r, n)) > -1;) {
            r.splice(n, 1), n <= a && a--;
          }
        }), this;
      }, has: function has(e) {
        return e ? w.inArray(e, r) > -1 : r.length > 0;
      }, empty: function empty() {
        return r && (r = []), this;
      }, disable: function disable() {
        return o = s = [], r = n = "", this;
      }, disabled: function disabled() {
        return !r;
      }, lock: function lock() {
        return o = s = [], n || t || (r = n = ""), this;
      }, locked: function locked() {
        return !!o;
      }, fireWith: function fireWith(e, n) {
        return o || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this;
      }, fire: function fire() {
        return c.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!i;
      } };return c;
  }, w.extend({ Deferred: function Deferred(t) {
      var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          o = { state: function state() {
          return i;
        }, always: function always() {
          return r.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return o.then(null, e);
        }, pipe: function pipe() {
          var e = arguments;return w.Deferred(function (t) {
            w.each(n, function (n, i) {
              var o = m(e[i[4]]) && e[i[4]];r[i[1]](function () {
                var e = o && o.apply(this, arguments);e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, then: function then(t, i, o) {
          var r = 0;function s(t, n, i, o) {
            return function () {
              var a = this,
                  l = arguments,
                  c = function c() {
                var e, c;if (!(t < r)) {
                  if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");c = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, m(c) ? o ? c.call(e, s(r, n, q, o), s(r, n, M, o)) : (r++, c.call(e, s(r, n, q, o), s(r, n, M, o), s(r, n, q, n.notifyWith))) : (i !== q && (a = void 0, l = [e]), (o || n.resolveWith)(a, l));
                }
              },
                  u = o ? c : function () {
                try {
                  c();
                } catch (e) {
                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= r && (i !== M && (a = void 0, l = [e]), n.rejectWith(a, l));
                }
              };t ? u() : (w.Deferred.getStackHook && (u.stackTrace = w.Deferred.getStackHook()), e.setTimeout(u));
            };
          }return w.Deferred(function (e) {
            n[0][3].add(s(0, e, m(o) ? o : q, e.notifyWith)), n[1][3].add(s(0, e, m(t) ? t : q)), n[2][3].add(s(0, e, m(i) ? i : M));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? w.extend(e, o) : o;
        } },
          r = {};return w.each(n, function (e, t) {
        var s = t[2],
            a = t[5];o[t[1]] = s.add, a && s.add(function () {
          i = a;
        }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), r[t[0]] = function () {
          return r[t[0] + "With"](this === r ? void 0 : this, arguments), this;
        }, r[t[0] + "With"] = s.fireWith;
      }), o.promise(r), t && t.call(r, r), r;
    }, when: function when(e) {
      var t = arguments.length,
          n = t,
          i = Array(n),
          o = r.call(arguments),
          s = w.Deferred(),
          a = function a(e) {
        return function (n) {
          i[e] = this, o[e] = arguments.length > 1 ? r.call(arguments) : n, --t || s.resolveWith(i, o);
        };
      };if (t <= 1 && (z(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || m(o[n] && o[n].then))) return s.then();for (; n--;) {
        z(o[n], a(n), s.reject);
      }return s.promise();
    } });var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook = function (t, n) {
    e.console && e.console.warn && t && F.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }, w.readyException = function (t) {
    e.setTimeout(function () {
      throw t;
    });
  };var H = w.Deferred();function B() {
    i.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), w.ready();
  }w.fn.ready = function (e) {
    return H.then(e).catch(function (e) {
      w.readyException(e);
    }), this;
  }, w.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || H.resolveWith(i, [w]));
    } }), w.ready.then = H.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(w.ready) : (i.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));var R = function R(e, t, n, i, o, r, s) {
    var a = 0,
        l = e.length,
        c = null == n;if ("object" === b(n)) for (a in o = !0, n) {
      R(e, t, a, n[a], !0, r, s);
    } else if (void 0 !== i && (o = !0, m(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function t(e, _t2, n) {
      return c.call(w(e), n);
    })), t)) for (; a < l; a++) {
      t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
    }return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
  },
      W = /^-ms-/,
      U = /-([a-z])/g;function $(e, t) {
    return t.toUpperCase();
  }function Q(e) {
    return e.replace(W, "ms-").replace(U, $);
  }var V = function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };function X() {
    this.expando = w.expando + X.uid++;
  }X.uid = 1, X.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var i,
          o = this.cache(e);if ("string" == typeof t) o[Q(t)] = n;else for (i in t) {
        o[Q(i)] = t[i];
      }return o;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          i = e[this.expando];if (void 0 !== i) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in i ? [t] : t.match(O) || []).length;for (; n--;) {
            delete i[t[n]];
          }
        }(void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      var t = e[this.expando];return void 0 !== t && !w.isEmptyObject(t);
    } };var Y = new X(),
      K = new X(),
      G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;function Z(e, t, n) {
    var i;if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
      try {
        n = function (e) {
          return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e);
        }(n);
      } catch (e) {}K.set(e, t, n);
    } else n = void 0;return n;
  }w.extend({ hasData: function hasData(e) {
      return K.hasData(e) || Y.hasData(e);
    }, data: function data(e, t, n) {
      return K.access(e, t, n);
    }, removeData: function removeData(e, t) {
      K.remove(e, t);
    }, _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    } }), w.fn.extend({ data: function data(e, t) {
      var n,
          i,
          o,
          r = this[0],
          s = r && r.attributes;if (void 0 === e) {
        if (this.length && (o = K.get(r), 1 === r.nodeType && !Y.get(r, "hasDataAttrs"))) {
          for (n = s.length; n--;) {
            s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Q(i.slice(5)), Z(r, i, o[i]));
          }Y.set(r, "hasDataAttrs", !0);
        }return o;
      }return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? this.each(function () {
        K.set(this, e);
      }) : R(this, function (t) {
        var n;if (r && void 0 === t) return void 0 !== (n = K.get(r, e)) ? n : void 0 !== (n = Z(r, e)) ? n : void 0;this.each(function () {
          K.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function removeData(e) {
      return this.each(function () {
        K.remove(this, e);
      });
    } }), w.extend({ queue: function queue(e, t, n) {
      var i;if (e) return t = (t || "fx") + "queue", i = Y.get(e, t), n && (!i || Array.isArray(n) ? i = Y.access(e, t, w.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = w.queue(e, t),
          i = n.length,
          o = n.shift(),
          r = w._queueHooks(e, t);"inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function () {
        w.dequeue(e, t);
      }, r)), !i && r && r.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return Y.get(e, n) || Y.access(e, n, { empty: w.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        }) });
    } }), w.fn.extend({ queue: function queue(e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = w.queue(this, e, t);w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        w.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      var n,
          i = 1,
          o = w.Deferred(),
          r = this,
          s = this.length,
          a = function a() {
        --i || o.resolveWith(r, [r]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
        (n = Y.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
      }return a(), o.promise(t);
    } });var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      ie = function ie(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display");
  },
      oe = function oe(e, t, n, i) {
    var o,
        r,
        s = {};for (r in t) {
      s[r] = e.style[r], e.style[r] = t[r];
    }for (r in o = n.apply(e, i || []), t) {
      e.style[r] = s[r];
    }return o;
  };function re(e, t, n, i) {
    var o,
        r,
        s = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return w.css(e, t, "");
    },
        l = a(),
        c = n && n[3] || (w.cssNumber[t] ? "" : "px"),
        u = (w.cssNumber[t] || "px" !== c && +l) && te.exec(w.css(e, t));if (u && u[3] !== c) {
      for (l /= 2, c = c || u[3], u = +l || 1; s--;) {
        w.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
      }u *= 2, w.style(e, t, u + c), n = n || [];
    }return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o;
  }var se = {};function ae(e) {
    var t,
        n = e.ownerDocument,
        i = e.nodeName,
        o = se[i];return o || (t = n.body.appendChild(n.createElement(i)), o = w.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), se[i] = o, o);
  }function le(e, t) {
    for (var n, i, o = [], r = 0, s = e.length; r < s; r++) {
      (i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = Y.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && ie(i) && (o[r] = ae(i))) : "none" !== n && (o[r] = "none", Y.set(i, "display", n)));
    }for (r = 0; r < s; r++) {
      null != o[r] && (e[r].style.display = o[r]);
    }return e;
  }w.fn.extend({ show: function show() {
      return le(this, !0);
    }, hide: function hide() {
      return le(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ie(this) ? w(this).show() : w(this).hide();
      });
    } });var ce = /^(?:checkbox|radio)$/i,
      ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      de = /^$|^module$|\/(?:java|ecma)script/i,
      fe = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function he(e, t) {
    var n;return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && k(e, t) ? w.merge([e], n) : n;
  }function pe(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td;var me,
      ge,
      ve = /<|&#?\w+;/;function ye(e, t, n, i, o) {
    for (var r, s, a, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++) {
      if ((r = e[h]) || 0 === r) if ("object" === b(r)) w.merge(f, r.nodeType ? [r] : r);else if (ve.test(r)) {
        for (s = s || d.appendChild(t.createElement("div")), a = (ue.exec(r) || ["", ""])[1].toLowerCase(), l = fe[a] || fe._default, s.innerHTML = l[1] + w.htmlPrefilter(r) + l[2], u = l[0]; u--;) {
          s = s.lastChild;
        }w.merge(f, s.childNodes), (s = d.firstChild).textContent = "";
      } else f.push(t.createTextNode(r));
    }for (d.textContent = "", h = 0; r = f[h++];) {
      if (i && w.inArray(r, i) > -1) o && o.push(r);else if (c = w.contains(r.ownerDocument, r), s = he(d.appendChild(r), "script"), c && pe(s), n) for (u = 0; r = s[u++];) {
        de.test(r.type || "") && n.push(r);
      }
    }return d;
  }me = i.createDocumentFragment().appendChild(i.createElement("div")), (ge = i.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), me.appendChild(ge), p.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;var be = i.documentElement,
      we = /^key/,
      _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      xe = /^([^.]*)(?:\.(.+)|)/;function Ee() {
    return !0;
  }function Ce() {
    return !1;
  }function Te() {
    try {
      return i.activeElement;
    } catch (e) {}
  }function Se(e, t, n, i, o, r) {
    var s, a;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), t) {
        Se(e, a, n, i, t[a], r);
      }return e;
    }if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ce;else if (!o) return e;return 1 === r && (s = o, (o = function o(e) {
      return w().off(e), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = w.guid++)), e.each(function () {
      w.event.add(this, t, o, i, n);
    });
  }w.event = { global: {}, add: function add(e, t, n, i, o) {
      var r,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          m,
          g = Y.get(e);if (g) for (n.handler && (n = (r = n).handler, o = r.selector), o && w.find.matchesSelector(be, o), n.guid || (n.guid = w.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
        return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
      }), c = (t = (t || "").match(O) || [""]).length; c--;) {
        h = m = (a = xe.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h && (d = w.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = w.event.special[h] || {}, u = w.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && w.expr.match.needsContext.test(o), namespace: p.join(".") }, r), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, u) : f.push(u), w.event.global[h] = !0);
      }
    }, remove: function remove(e, t, n, i, o) {
      var r,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          m,
          g = Y.hasData(e) && Y.get(e);if (g && (l = g.events)) {
        for (c = (t = (t || "").match(O) || [""]).length; c--;) {
          if (h = m = (a = xe.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
            for (d = w.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) {
              u = f[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(r, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
            }s && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, g.handle) || w.removeEvent(e, h, g.handle), delete l[h]);
          } else for (h in l) {
            w.event.remove(e, h + t[c], n, i, !0);
          }
        }w.isEmptyObject(l) && Y.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a = w.event.fix(e),
          l = new Array(arguments.length),
          c = (Y.get(this, "events") || {})[a.type] || [],
          u = w.event.special[a.type] || {};for (l[0] = a, t = 1; t < arguments.length; t++) {
        l[t] = arguments[t];
      }if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
        for (s = w.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((w.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }return u.postDispatch && u.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          i,
          o,
          r,
          s,
          a = [],
          l = t.delegateCount,
          c = e.target;if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
        if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
          for (r = [], s = {}, n = 0; n < l; n++) {
            void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? w(o, this).index(c) > -1 : w.find(o, this, null, [c]).length), s[o] && r.push(i);
          }r.length && a.push({ elem: c, handlers: r });
        }
      }return c = this, l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: m(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(e) {
      return e[w.expando] ? e : new w.Event(e);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== Te() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === Te() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && k(this, "input")) return this.click(), !1;
        }, _default: function _default(e) {
          return k(e.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, w.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, w.Event = function (e, t) {
    if (!(this instanceof w.Event)) return new w.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0;
  }, w.Event.prototype = { constructor: w.Event, isDefaultPrevented: Ce, isPropagationStopped: Ce, isImmediatePropagationStopped: Ce, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(e) {
      var t = e.button;return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && _e.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    w.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
        var n,
            i = e.relatedTarget,
            o = e.handleObj;return i && (i === this || w.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), w.fn.extend({ on: function on(e, t, n, i) {
      return Se(this, e, t, n, i);
    }, one: function one(e, t, n, i) {
      return Se(this, e, t, n, i, 1);
    }, off: function off(e, t, n) {
      var i, o;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
        for (o in e) {
          this.off(o, t, e[o]);
        }return this;
      }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function () {
        w.event.remove(this, e, n, t);
      });
    } });var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      De = /<script|<style|<link/i,
      Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ie(e, t) {
    return k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e;
  }function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function Pe(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function je(e, t) {
    var n, i, o, r, s, a, l, c;if (1 === t.nodeType) {
      if (Y.hasData(e) && (r = Y.access(e), s = Y.set(t, r), c = r.events)) for (o in delete s.handle, s.events = {}, c) {
        for (n = 0, i = c[o].length; n < i; n++) {
          w.event.add(t, o, c[o][n]);
        }
      }K.hasData(e) && (a = K.access(e), l = w.extend({}, a), K.set(t, l));
    }
  }function Oe(e, t, n, i) {
    t = s.apply([], t);var o,
        r,
        a,
        l,
        c,
        u,
        d = 0,
        f = e.length,
        h = f - 1,
        g = t[0],
        v = m(g);if (v || f > 1 && "string" == typeof g && !p.checkClone && Ae.test(g)) return e.each(function (o) {
      var r = e.eq(o);v && (t[0] = g.call(this, o, r.html())), Oe(r, t, n, i);
    });if (f && (r = (o = ye(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
      for (l = (a = w.map(he(o, "script"), Le)).length; d < f; d++) {
        c = o, d !== h && (c = w.clone(c, !0, !0), l && w.merge(a, he(c, "script"))), n.call(e[d], c, d);
      }if (l) for (u = a[a.length - 1].ownerDocument, w.map(a, Pe), d = 0; d < l; d++) {
        c = a[d], de.test(c.type || "") && !Y.access(c, "globalEval") && w.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(c.src) : y(c.textContent.replace(Ne, ""), u, c));
      }
    }return e;
  }function qe(e, t, n) {
    for (var i, o = t ? w.filter(t, e) : e, r = 0; null != (i = o[r]); r++) {
      n || 1 !== i.nodeType || w.cleanData(he(i)), i.parentNode && (n && w.contains(i.ownerDocument, i) && pe(he(i, "script")), i.parentNode.removeChild(i));
    }return e;
  }w.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(ke, "<$1></$2>");
    }, clone: function clone(e, t, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u = e.cloneNode(!0),
          d = w.contains(e.ownerDocument, e);if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (s = he(u), i = 0, o = (r = he(e)).length; i < o; i++) {
        a = r[i], l = s[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && ce.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
      }if (t) if (n) for (r = r || he(e), s = s || he(u), i = 0, o = r.length; i < o; i++) {
        je(r[i], s[i]);
      } else je(e, u);return (s = he(u, "script")).length > 0 && pe(s, !d && he(e, "script")), u;
    }, cleanData: function cleanData(e) {
      for (var t, n, i, o = w.event.special, r = 0; void 0 !== (n = e[r]); r++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (i in t.events) {
              o[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
            }n[Y.expando] = void 0;
          }n[K.expando] && (n[K.expando] = void 0);
        }
      }
    } }), w.fn.extend({ detach: function detach(e) {
      return qe(this, e, !0);
    }, remove: function remove(e) {
      return qe(this, e);
    }, text: function text(e) {
      return R(this, function (e) {
        return void 0 === e ? w.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return Oe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return Oe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Ie(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function before() {
      return Oe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return Oe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (w.cleanData(he(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return w.clone(this, e, t);
      });
    }, html: function html(e) {
      return R(this, function (e) {
        var t = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !De.test(e) && !fe[(ue.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = w.htmlPrefilter(e);try {
            for (; n < i; n++) {
              1 === (t = this[n] || {}).nodeType && (w.cleanData(he(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var e = [];return Oe(this, arguments, function (t) {
        var n = this.parentNode;w.inArray(this, e) < 0 && (w.cleanData(he(this)), n && n.replaceChild(t, this));
      }, e);
    } }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    w.fn[e] = function (e) {
      for (var n, i = [], o = w(e), r = o.length - 1, s = 0; s <= r; s++) {
        n = s === r ? this : this.clone(!0), w(o[s])[t](n), a.apply(i, n.get());
      }return this.pushStack(i);
    };
  });var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      ze = function ze(t) {
    var n = t.ownerDocument.defaultView;return n && n.opener || (n = e), n.getComputedStyle(t);
  },
      Fe = new RegExp(ne.join("|"), "i");function He(e, t, n) {
    var i,
        o,
        r,
        s,
        a = e.style;return (n = n || ze(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (s = w.style(e, t)), !p.pixelBoxStyles() && Me.test(s) && Fe.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s;
  }function Be(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }!function () {
    function t() {
      if (u) {
        c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(c).appendChild(u);var t = e.getComputedStyle(u);o = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), r = 36 === n(t.width), u.style.position = "absolute", s = 36 === u.offsetWidth || "absolute", be.removeChild(c), u = null;
      }
    }function n(e) {
      return Math.round(parseFloat(e));
    }var o,
        r,
        s,
        a,
        l,
        c = i.createElement("div"),
        u = i.createElement("div");u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, w.extend(p, { boxSizingReliable: function boxSizingReliable() {
        return t(), r;
      }, pixelBoxStyles: function pixelBoxStyles() {
        return t(), a;
      }, pixelPosition: function pixelPosition() {
        return t(), o;
      }, reliableMarginLeft: function reliableMarginLeft() {
        return t(), l;
      }, scrollboxSize: function scrollboxSize() {
        return t(), s;
      } }));
  }();var Re = /^(none|table(?!-c[ea]).+)/,
      We = /^--/,
      Ue = { position: "absolute", visibility: "hidden", display: "block" },
      $e = { letterSpacing: "0", fontWeight: "400" },
      Qe = ["Webkit", "Moz", "ms"],
      Ve = i.createElement("div").style;function Xe(e) {
    var t = w.cssProps[e];return t || (t = w.cssProps[e] = function (e) {
      if (e in Ve) return e;for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;) {
        if ((e = Qe[n] + t) in Ve) return e;
      }
    }(e) || e), t;
  }function Ye(e, t, n) {
    var i = te.exec(t);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }function Ke(e, t, n, i, o, r) {
    var s = "width" === t ? 1 : 0,
        a = 0,
        l = 0;if (n === (i ? "border" : "content")) return 0;for (; s < 4; s += 2) {
      "margin" === n && (l += w.css(e, n + ne[s], !0, o)), i ? ("content" === n && (l -= w.css(e, "padding" + ne[s], !0, o)), "margin" !== n && (l -= w.css(e, "border" + ne[s] + "Width", !0, o))) : (l += w.css(e, "padding" + ne[s], !0, o), "padding" !== n ? l += w.css(e, "border" + ne[s] + "Width", !0, o) : a += w.css(e, "border" + ne[s] + "Width", !0, o));
    }return !i && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5))), l;
  }function Ge(e, t, n) {
    var i = ze(e),
        o = He(e, t, i),
        r = "border-box" === w.css(e, "boxSizing", !1, i),
        s = r;if (Me.test(o)) {
      if (!n) return o;o = "auto";
    }return s = s && (p.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === w.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (o = parseFloat(o) || 0) + Ke(e, t, n || (r ? "border" : "content"), s, i, o) + "px";
  }function Je(e, t, n, i, o) {
    return new Je.prototype.init(e, t, n, i, o);
  }w.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            var n = He(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            r,
            s,
            a = Q(t),
            l = We.test(t),
            c = e.style;if (l || (t = Xe(a)), s = w.cssHooks[t] || w.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];"string" === (r = typeof n === "undefined" ? "undefined" : _typeof(n)) && (o = te.exec(n)) && o[1] && (n = re(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (w.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n));
      }
    }, css: function css(e, t, n, i) {
      var o,
          r,
          s,
          a = Q(t);return We.test(t) || (t = Xe(a)), (s = w.cssHooks[t] || w.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = He(e, t, i)), "normal" === o && t in $e && (o = $e[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
    } }), w.each(["height", "width"], function (e, t) {
    w.cssHooks[t] = { get: function get(e, n, i) {
        if (n) return !Re.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, t, i) : oe(e, Ue, function () {
          return Ge(e, t, i);
        });
      }, set: function set(e, n, i) {
        var o,
            r = ze(e),
            s = "border-box" === w.css(e, "boxSizing", !1, r),
            a = i && Ke(e, t, i, s, r);return s && p.scrollboxSize() === r.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - Ke(e, t, "border", !1, r) - .5)), a && (o = te.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Ye(0, n, a);
      } };
  }), w.cssHooks.marginLeft = Be(p.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - oe(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    w.cssHooks[e + t] = { expand: function expand(n) {
        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) {
          o[e + ne[i] + t] = r[i] || r[i - 2] || r[0];
        }return o;
      } }, "margin" !== e && (w.cssHooks[e + t].set = Ye);
  }), w.fn.extend({ css: function css(e, t) {
      return R(this, function (e, t, n) {
        var i,
            o,
            r = {},
            s = 0;if (Array.isArray(t)) {
          for (i = ze(e), o = t.length; s < o; s++) {
            r[t[s]] = w.css(e, t[s], !1, i);
          }return r;
        }return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
      }, e, t, arguments.length > 1);
    } }), w.Tween = Je, Je.prototype = { constructor: Je, init: function init(e, t, n, i, o, r) {
      this.elem = e, this.prop = n, this.easing = o || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (w.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = Je.propHooks[this.prop];return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
    }, run: function run(e) {
      var t,
          n = Je.propHooks[this.prop];return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this;
    } }, Je.prototype.init.prototype = Je.prototype, Je.propHooks = { _default: { get: function get(e) {
        var t;return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      }, set: function set(e) {
        w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit);
      } } }, Je.propHooks.scrollTop = Je.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, w.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, w.fx = Je.prototype.init, w.fx.step = {};var Ze,
      et,
      tt = /^(?:toggle|show|hide)$/,
      nt = /queueHooks$/;function it() {
    et && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(it) : e.setTimeout(it, w.fx.interval), w.fx.tick());
  }function ot() {
    return e.setTimeout(function () {
      Ze = void 0;
    }), Ze = Date.now();
  }function rt(e, t) {
    var n,
        i = 0,
        o = { height: e };for (t = t ? 1 : 0; i < 4; i += 2 - t) {
      o["margin" + (n = ne[i])] = o["padding" + n] = e;
    }return t && (o.opacity = o.width = e), o;
  }function st(e, t, n) {
    for (var i, o = (at.tweeners[t] || []).concat(at.tweeners["*"]), r = 0, s = o.length; r < s; r++) {
      if (i = o[r].call(n, t, e)) return i;
    }
  }function at(e, t, n) {
    var i,
        o,
        r = 0,
        s = at.prefilters.length,
        a = w.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (o) return !1;for (var t = Ze || ot(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) {
        c.tweens[r].run(i);
      }return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
    },
        c = a.promise({ elem: e, props: w.extend({}, t), opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n), originalProperties: t, originalOptions: n, startTime: Ze || ot(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
        var i = w.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);return c.tweens.push(i), i;
      }, stop: function stop(t) {
        var n = 0,
            i = t ? c.tweens.length : 0;if (o) return this;for (o = !0; n < i; n++) {
          c.tweens[n].run(1);
        }return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
      } }),
        u = c.props;for (!function (e, t) {
      var n, i, o, r, s;for (n in e) {
        if (o = t[i = Q(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = w.cssHooks[i]) && ("expand" in s)) for (n in r = s.expand(r), delete e[i], r) {
          (n in e) || (e[n] = r[n], t[n] = o);
        } else t[i] = o;
      }
    }(u, c.opts.specialEasing); r < s; r++) {
      if (i = at.prefilters[r].call(c, e, u, c.opts)) return m(i.stop) && (w._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
    }return w.map(u, st, c), m(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), w.fx.timer(w.extend(l, { elem: e, anim: c, queue: c.opts.queue })), c;
  }w.Animation = w.extend(at, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return re(n.elem, e, te.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(O);for (var n, i = 0, o = e.length; i < o; i++) {
        n = e[i], at.tweeners[n] = at.tweeners[n] || [], at.tweeners[n].unshift(t);
      }
    }, prefilters: [function (e, t, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c,
          u,
          d = "width" in t || "height" in t,
          f = this,
          h = {},
          p = e.style,
          m = e.nodeType && ie(e),
          g = Y.get(e, "fxshow");for (i in n.queue || (null == (s = w._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a();
      }), s.unqueued++, f.always(function () {
        f.always(function () {
          s.unqueued--, w.queue(e, "fx").length || s.empty.fire();
        });
      })), t) {
        if (o = t[i], tt.test(o)) {
          if (delete t[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
            if ("show" !== o || !g || void 0 === g[i]) continue;m = !0;
          }h[i] = g && g[i] || w.style(e, i);
        }
      }if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h)) for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = g && g.display) && (c = Y.get(e, "display")), "none" === (u = w.css(e, "display")) && (c ? u = c : (le([e], !0), c = e.style.display || c, u = w.css(e, "display"), le([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === w.css(e, "float") && (l || (f.done(function () {
        p.display = c;
      }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, h) {
        l || (g ? "hidden" in g && (m = g.hidden) : g = Y.access(e, "fxshow", { display: c }), r && (g.hidden = !m), m && le([e], !0), f.done(function () {
          for (i in m || le([e]), Y.remove(e, "fxshow"), h) {
            w.style(e, i, h[i]);
          }
        })), l = st(m ? g[i] : 0, i, f), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0));
      }
    }], prefilter: function prefilter(e, t) {
      t ? at.prefilters.unshift(e) : at.prefilters.push(e);
    } }), w.speed = function (e, t, n) {
    var i = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? w.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t };return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      m(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
    }, i;
  }, w.fn.extend({ fadeTo: function fadeTo(e, t, n, i) {
      return this.filter(ie).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
    }, animate: function animate(e, t, n, i) {
      var o = w.isEmptyObject(e),
          r = w.speed(t, n, i),
          s = function s() {
        var t = at(this, w.extend({}, e), r);(o || Y.get(this, "finish")) && t.stop(!0);
      };return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
    }, stop: function stop(e, t, n) {
      var i = function i(e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            o = null != e && e + "queueHooks",
            r = w.timers,
            s = Y.get(this);if (o) s[o] && s[o].stop && i(s[o]);else for (o in s) {
          s[o] && s[o].stop && nt.test(o) && i(s[o]);
        }for (o = r.length; o--;) {
          r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
        }!t && n || w.dequeue(this, e);
      });
    }, finish: function finish(e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = Y.get(this),
            i = n[e + "queue"],
            o = n[e + "queueHooks"],
            r = w.timers,
            s = i ? i.length : 0;for (n.finish = !0, w.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) {
          r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
        }for (t = 0; t < s; t++) {
          i[t] && i[t].finish && i[t].finish.call(this);
        }delete n.finish;
      });
    } }), w.each(["toggle", "show", "hide"], function (e, t) {
    var n = w.fn[t];w.fn[t] = function (e, i, o) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(rt(t, !0), e, i, o);
    };
  }), w.each({ slideDown: rt("show"), slideUp: rt("hide"), slideToggle: rt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    w.fn[e] = function (e, n, i) {
      return this.animate(t, e, n, i);
    };
  }), w.timers = [], w.fx.tick = function () {
    var e,
        t = 0,
        n = w.timers;for (Ze = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || w.fx.stop(), Ze = void 0;
  }, w.fx.timer = function (e) {
    w.timers.push(e), w.fx.start();
  }, w.fx.interval = 13, w.fx.start = function () {
    et || (et = !0, it());
  }, w.fx.stop = function () {
    et = null;
  }, w.fx.speeds = { slow: 600, fast: 200, _default: 400 }, w.fn.delay = function (t, n) {
    return t = w.fx && w.fx.speeds[t] || t, n = n || "fx", this.queue(n, function (n, i) {
      var o = e.setTimeout(n, t);i.stop = function () {
        e.clearTimeout(o);
      };
    });
  }, function () {
    var e = i.createElement("input"),
        t = i.createElement("select").appendChild(i.createElement("option"));e.type = "checkbox", p.checkOn = "" !== e.value, p.optSelected = t.selected, (e = i.createElement("input")).value = "t", e.type = "radio", p.radioValue = "t" === e.value;
  }();var lt,
      ct = w.expr.attrHandle;w.fn.extend({ attr: function attr(e, t) {
      return R(this, w.attr, e, t, arguments.length > 1);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    } }), w.extend({ attr: function attr(e, t, n) {
      var i,
          o,
          r = e.nodeType;if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === r && w.isXMLDoc(e) || (o = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = w.find.attr(e, t)) ? void 0 : i);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!p.radioValue && "radio" === t && k(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          i = 0,
          o = t && t.match(O);if (o && 1 === e.nodeType) for (; n = o[i++];) {
        e.removeAttribute(n);
      }
    } }), lt = { set: function set(e, t, n) {
      return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = ct[t] || w.find.attr;ct[t] = function (e, t, i) {
      var o,
          r,
          s = t.toLowerCase();return i || (r = ct[s], ct[s] = o, o = null != n(e, t, i) ? s : null, ct[s] = r), o;
    };
  });var ut = /^(?:input|select|textarea|button)$/i,
      dt = /^(?:a|area)$/i;function ft(e) {
    return (e.match(O) || []).join(" ");
  }function ht(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function pt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(O) || [];
  }w.fn.extend({ prop: function prop(e, t) {
      return R(this, w.prop, e, t, arguments.length > 1);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    } }), w.extend({ prop: function prop(e, t, n) {
      var i,
          o,
          r = e.nodeType;if (3 !== r && 8 !== r && 2 !== r) return 1 === r && w.isXMLDoc(e) || (t = w.propFix[t] || t, o = w.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = w.find.attr(e, "tabindex");return t ? parseInt(t, 10) : ut.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), p.optSelected || (w.propHooks.selected = { get: function get(e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    }, set: function set(e) {
      var t = e.parentNode;t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    } }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    w.propFix[this.toLowerCase()] = this;
  }), w.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;if (m(e)) return this.each(function (t) {
        w(this).addClass(e.call(this, t, ht(this)));
      });if ((t = pt(e)).length) for (; n = this[l++];) {
        if (o = ht(n), i = 1 === n.nodeType && " " + ft(o) + " ") {
          for (s = 0; r = t[s++];) {
            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          }o !== (a = ft(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;if (m(e)) return this.each(function (t) {
        w(this).removeClass(e.call(this, t, ht(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = pt(e)).length) for (; n = this[l++];) {
        if (o = ht(n), i = 1 === n.nodeType && " " + ft(o) + " ") {
          for (s = 0; r = t[s++];) {
            for (; i.indexOf(" " + r + " ") > -1;) {
              i = i.replace(" " + r + " ", " ");
            }
          }o !== (a = ft(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(e, t) {
      var n = typeof e === "undefined" ? "undefined" : _typeof(e),
          i = "string" === n || Array.isArray(e);return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function (n) {
        w(this).toggleClass(e.call(this, n, ht(this), t), t);
      }) : this.each(function () {
        var t, o, r, s;if (i) for (o = 0, r = w(this), s = pt(e); t = s[o++];) {
          r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        } else void 0 !== e && "boolean" !== n || ((t = ht(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      var t,
          n,
          i = 0;for (t = " " + e + " "; n = this[i++];) {
        if (1 === n.nodeType && (" " + ft(ht(n)) + " ").indexOf(t) > -1) return !0;
      }return !1;
    } });var mt = /\r/g;w.fn.extend({ val: function val(e) {
      var t,
          n,
          i,
          o = this[0];return arguments.length ? (i = m(e), this.each(function (n) {
        var o;1 === this.nodeType && (null == (o = i ? e.call(this, n, w(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = w.map(o, function (e) {
          return null == e ? "" : e + "";
        })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
      })) : o ? (t = w.valHooks[o.type] || w.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(mt, "") : null == n ? "" : n : void 0;
    } }), w.extend({ valHooks: { option: { get: function get(e) {
          var t = w.find.attr(e, "value");return null != t ? t : ft(w.text(e));
        } }, select: { get: function get(e) {
          var t,
              n,
              i,
              o = e.options,
              r = e.selectedIndex,
              s = "select-one" === e.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;for (i = r < 0 ? l : s ? r : 0; i < l; i++) {
            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
              if (t = w(n).val(), s) return t;a.push(t);
            }
          }return a;
        }, set: function set(e, t) {
          for (var n, i, o = e.options, r = w.makeArray(t), s = o.length; s--;) {
            ((i = o[s]).selected = w.inArray(w.valHooks.option.get(i), r) > -1) && (n = !0);
          }return n || (e.selectedIndex = -1), r;
        } } } }), w.each(["radio", "checkbox"], function () {
    w.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1;
      } }, p.checkOn || (w.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), p.focusin = "onfocusin" in e;var gt = /^(?:focusinfocus|focusoutblur)$/,
      vt = function vt(e) {
    e.stopPropagation();
  };w.extend(w.event, { trigger: function trigger(t, n, o, r) {
      var s,
          a,
          l,
          c,
          u,
          f,
          h,
          p,
          v = [o || i],
          y = d.call(t, "type") ? t.type : t,
          b = d.call(t, "namespace") ? t.namespace.split(".") : [];if (a = p = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !gt.test(y + w.event.triggered) && (y.indexOf(".") > -1 && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[w.expando] ? t : new w.Event(y, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t)).isTrigger = r ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : w.makeArray(n, [t]), h = w.event.special[y] || {}, r || !h.trigger || !1 !== h.trigger.apply(o, n))) {
        if (!r && !h.noBubble && !g(o)) {
          for (c = h.delegateType || y, gt.test(c + y) || (a = a.parentNode); a; a = a.parentNode) {
            v.push(a), l = a;
          }l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e);
        }for (s = 0; (a = v[s++]) && !t.isPropagationStopped();) {
          p = a, t.type = s > 1 ? c : h.bindType || y, (f = (Y.get(a, "events") || {})[t.type] && Y.get(a, "handle")) && f.apply(a, n), (f = u && a[u]) && f.apply && V(a) && (t.result = f.apply(a, n), !1 === t.result && t.preventDefault());
        }return t.type = y, r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), n) || !V(o) || u && m(o[y]) && !g(o) && ((l = o[u]) && (o[u] = null), w.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, vt), o[y](), t.isPropagationStopped() && p.removeEventListener(y, vt), w.event.triggered = void 0, l && (o[u] = l)), t.result;
      }
    }, simulate: function simulate(e, t, n) {
      var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });w.event.trigger(i, null, t);
    } }), w.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        w.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return w.event.trigger(e, t, n, !0);
    } }), p.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function n(e) {
      w.event.simulate(t, e.target, w.event.fix(e));
    };w.event.special[t] = { setup: function setup() {
        var i = this.ownerDocument || this,
            o = Y.access(i, t);o || i.addEventListener(e, n, !0), Y.access(i, t, (o || 0) + 1);
      }, teardown: function teardown() {
        var i = this.ownerDocument || this,
            o = Y.access(i, t) - 1;o ? Y.access(i, t, o) : (i.removeEventListener(e, n, !0), Y.remove(i, t));
      } };
  });var yt = e.location,
      bt = Date.now(),
      wt = /\?/;w.parseXML = function (t) {
    var n;if (!t || "string" != typeof t) return null;try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }return n && !n.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), n;
  };var _t = /\[\]$/,
      xt = /\r?\n/g,
      Et = /^(?:submit|button|image|reset|file)$/i,
      Ct = /^(?:input|select|textarea|keygen)/i;function Tt(e, t, n, i) {
    var o;if (Array.isArray(t)) w.each(t, function (t, o) {
      n || _t.test(e) ? i(e, o) : Tt(e + "[" + ("object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && null != o ? t : "") + "]", o, n, i);
    });else if (n || "object" !== b(t)) i(e, t);else for (o in t) {
      Tt(e + "[" + o + "]", t[o], n, i);
    }
  }w.param = function (e, t) {
    var n,
        i = [],
        o = function o(e, t) {
      var n = m(t) ? t() : t;i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
      o(this.name, this.value);
    });else for (n in e) {
      Tt(n, e[n], t, o);
    }return i.join("&");
  }, w.fn.extend({ serialize: function serialize() {
      return w.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = w.prop(this, "elements");return e ? w.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !w(this).is(":disabled") && Ct.test(this.nodeName) && !Et.test(e) && (this.checked || !ce.test(e));
      }).map(function (e, t) {
        var n = w(this).val();return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
          return { name: t.name, value: e.replace(xt, "\r\n") };
        }) : { name: t.name, value: n.replace(xt, "\r\n") };
      }).get();
    } });var St = /%20/g,
      kt = /#.*$/,
      Dt = /([?&])_=[^&]*/,
      At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Nt = /^(?:GET|HEAD)$/,
      It = /^\/\//,
      Lt = {},
      Pt = {},
      jt = "*/".concat("*"),
      Ot = i.createElement("a");function qt(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var i,
          o = 0,
          r = t.toLowerCase().match(O) || [];if (m(n)) for (; i = r[o++];) {
        "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      }
    };
  }function Mt(e, t, n, i) {
    var o = {},
        r = e === Pt;function s(a) {
      var l;return o[a] = !0, w.each(e[a] || [], function (e, a) {
        var c = a(t, n, i);return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1);
      }), l;
    }return s(t.dataTypes[0]) || !o["*"] && s("*");
  }function zt(e, t) {
    var n,
        i,
        o = w.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
    }return i && w.extend(!0, e, i), e;
  }Ot.href = yt.href, w.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: yt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": jt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
    }, ajaxPrefilter: qt(Lt), ajaxTransport: qt(Pt), ajax: function ajax(t, n) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t, t = void 0), n = n || {};var o,
          r,
          s,
          a,
          l,
          c,
          u,
          d,
          f,
          h,
          p = w.ajaxSetup({}, n),
          m = p.context || p,
          g = p.context && (m.nodeType || m.jquery) ? w(m) : w.event,
          v = w.Deferred(),
          y = w.Callbacks("once memory"),
          b = p.statusCode || {},
          _ = {},
          x = {},
          E = "canceled",
          C = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (u) {
            if (!a) for (a = {}; t = At.exec(s);) {
              a[t[1].toLowerCase()] = t[2];
            }t = a[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return u ? s : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, _[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == u && (p.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          var t;if (e) if (u) C.always(e[C.status]);else for (t in e) {
            b[t] = [b[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          var t = e || E;return o && o.abort(t), T(0, t), this;
        } };if (v.promise(C), p.url = ((t || p.url || yt.href) + "").replace(It, yt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(O) || [""], null == p.crossDomain) {
        c = i.createElement("a");try {
          c.href = p.url, c.href = c.href, p.crossDomain = Ot.protocol + "//" + Ot.host != c.protocol + "//" + c.host;
        } catch (e) {
          p.crossDomain = !0;
        }
      }if (p.data && p.processData && "string" != typeof p.data && (p.data = w.param(p.data, p.traditional)), Mt(Lt, p, n, C), u) return C;for (f in (d = w.event && p.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nt.test(p.type), r = p.url.replace(kt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(St, "+")) : (h = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (wt.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(Dt, "$1"), h = (wt.test(r) ? "&" : "?") + "_=" + bt++ + h), p.url = r + h), p.ifModified && (w.lastModified[r] && C.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && C.setRequestHeader("If-None-Match", w.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + jt + "; q=0.01" : "") : p.accepts["*"]), p.headers) {
        C.setRequestHeader(f, p.headers[f]);
      }if (p.beforeSend && (!1 === p.beforeSend.call(m, C, p) || u)) return C.abort();if (E = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), o = Mt(Pt, p, n, C)) {
        if (C.readyState = 1, d && g.trigger("ajaxSend", [C, p]), u) return C;p.async && p.timeout > 0 && (l = e.setTimeout(function () {
          C.abort("timeout");
        }, p.timeout));try {
          u = !1, o.send(_, T);
        } catch (e) {
          if (u) throw e;T(-1, e);
        }
      } else T(-1, "No Transport");function T(t, n, i, a) {
        var c,
            f,
            h,
            _,
            x,
            E = n;u || (u = !0, l && e.clearTimeout(l), o = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, i && (_ = function (e, t, n) {
          for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
          }if (i) for (o in a) {
            if (a[o] && a[o].test(i)) {
              l.unshift(o);break;
            }
          }if (l[0] in n) r = l[0];else {
            for (o in n) {
              if (!l[0] || e.converters[o + " " + l[0]]) {
                r = o;break;
              }s || (s = o);
            }r = r || s;
          }if (r) return r !== l[0] && l.unshift(r), n[r];
        }(p, C, i)), _ = function (e, t, n, i) {
          var o,
              r,
              s,
              a,
              l,
              c = {},
              u = e.dataTypes.slice();if (u[1]) for (s in e.converters) {
            c[s.toLowerCase()] = e.converters[s];
          }for (r = u.shift(); r;) {
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
              if (!(s = c[l + " " + r] || c["* " + r])) for (o in c) {
                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                  !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));break;
                }
              }if (!0 !== s) if (s && e.throws) t = s(t);else try {
                t = s(t);
              } catch (e) {
                return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r };
              }
            }
          }return { state: "success", data: t };
        }(p, _, C, c), c ? (p.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (w.lastModified[r] = x), (x = C.getResponseHeader("etag")) && (w.etag[r] = x)), 204 === t || "HEAD" === p.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = _.state, f = _.data, c = !(h = _.error))) : (h = E, !t && E || (E = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || E) + "", c ? v.resolveWith(m, [f, E, C]) : v.rejectWith(m, [C, E, h]), C.statusCode(b), b = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? f : h]), y.fireWith(m, [C, E]), d && (g.trigger("ajaxComplete", [C, p]), --w.active || w.event.trigger("ajaxStop")));
      }return C;
    }, getJSON: function getJSON(e, t, n) {
      return w.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return w.get(e, void 0, t, "script");
    } }), w.each(["get", "post"], function (e, t) {
    w[t] = function (e, n, i, o) {
      return m(n) && (o = o || i, i = n, n = void 0), w.ajax(w.extend({ url: e, type: t, dataType: o, data: n, success: i }, w.isPlainObject(e) && e));
    };
  }), w._evalUrl = function (e) {
    return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, w.fn.extend({ wrapAll: function wrapAll(e) {
      var t;return this[0] && (m(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(e) {
      return m(e) ? this.each(function (t) {
        w(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = w(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function wrap(e) {
      var t = m(e);return this.each(function (n) {
        w(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        w(this).replaceWith(this.childNodes);
      }), this;
    } }), w.expr.pseudos.hidden = function (e) {
    return !w.expr.pseudos.visible(e);
  }, w.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, w.ajaxSettings.xhr = function () {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  };var Ft = { 0: 200, 1223: 204 },
      Ht = w.ajaxSettings.xhr();p.cors = !!Ht && "withCredentials" in Ht, p.ajax = Ht = !!Ht, w.ajaxTransport(function (t) {
    var _n, i;if (p.cors || Ht && !t.crossDomain) return { send: function send(o, r) {
        var s,
            a = t.xhr();if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) {
          a[s] = t.xhrFields[s];
        }for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) {
          a.setRequestHeader(s, o[s]);
        }_n = function n(e) {
          return function () {
            _n && (_n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText }, a.getAllResponseHeaders()));
          };
        }, a.onload = _n(), i = a.onerror = a.ontimeout = _n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
          4 === a.readyState && e.setTimeout(function () {
            _n && i();
          });
        }, _n = _n("abort");try {
          a.send(t.hasContent && t.data || null);
        } catch (e) {
          if (_n) throw e;
        }
      }, abort: function abort() {
        _n && _n();
      } };
  }), w.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), w.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return w.globalEval(e), e;
      } } }), w.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), w.ajaxTransport("script", function (e) {
    var t, _n2;if (e.crossDomain) return { send: function send(o, r) {
        t = w("<script>").prop({ charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
          t.remove(), _n2 = null, e && r("error" === e.type ? 404 : 200, e.type);
        }), i.head.appendChild(t[0]);
      }, abort: function abort() {
        _n2 && _n2();
      } };
  });var Bt,
      Rt = [],
      Wt = /(=)\?(?=&|$)|\?\?/;w.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Rt.pop() || w.expando + "_" + bt++;return this[e] = !0, e;
    } }), w.ajaxPrefilter("json jsonp", function (t, n, i) {
    var o,
        r,
        s,
        a = !1 !== t.jsonp && (Wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(t.data) && "data");if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Wt, "$1" + o) : !1 !== t.jsonp && (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
      return s || w.error(o + " was not called"), s[0];
    }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      void 0 === r ? w(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Rt.push(o)), s && m(r) && r(s[0]), s = r = void 0;
    }), "script";
  }), p.createHTMLDocument = ((Bt = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Bt.childNodes.length), w.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((o = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(o)) : t = i), r = D.exec(e), s = !n && [], r ? [t.createElement(r[1])] : (r = ye([e], t, s), s && s.length && w(s).remove(), w.merge([], r.childNodes)));var o, r, s;
  }, w.fn.load = function (e, t, n) {
    var i,
        o,
        r,
        s = this,
        a = e.indexOf(" ");return a > -1 && (i = ft(e.slice(a)), e = e.slice(0, a)), m(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (o = "POST"), s.length > 0 && w.ajax({ url: e, type: o || "GET", dataType: "html", data: t }).done(function (e) {
      r = arguments, s.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
    }).always(n && function (e, t) {
      s.each(function () {
        n.apply(this, r || [e.responseText, t, e]);
      });
    }), this;
  }, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    w.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), w.expr.pseudos.animated = function (e) {
    return w.grep(w.timers, function (t) {
      return e === t.elem;
    }).length;
  }, w.offset = { setOffset: function setOffset(e, t, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          c = w.css(e, "position"),
          u = w(e),
          d = {};"static" === c && (e.style.position = "relative"), a = u.offset(), r = w.css(e, "top"), l = w.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), m(t) && (t = t.call(e, n, w.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d);
    } }, w.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        w.offset.setOffset(this, e, t);
      });var t,
          n,
          i = this[0];return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            i = this[0],
            o = { top: 0, left: 0 };if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();else {
          for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) {
            e = e.parentNode;
          }e && e !== i && 1 === e.nodeType && ((o = w(e).offset()).top += w.css(e, "borderTopWidth", !0), o.left += w.css(e, "borderLeftWidth", !0));
        }return { top: t.top - o.top - w.css(i, "marginTop", !0), left: t.left - o.left - w.css(i, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === w.css(e, "position");) {
          e = e.offsetParent;
        }return e || be;
      });
    } }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
    var n = "pageYOffset" === t;w.fn[e] = function (i) {
      return R(this, function (e, i, o) {
        var r;if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o;
      }, e, i, arguments.length);
    };
  }), w.each(["top", "left"], function (e, t) {
    w.cssHooks[t] = Be(p.pixelPosition, function (e, n) {
      if (n) return n = He(e, t), Me.test(n) ? w(e).position()[t] + "px" : n;
    });
  }), w.each({ Height: "height", Width: "width" }, function (e, t) {
    w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
      w.fn[i] = function (o, r) {
        var s = arguments.length && (n || "boolean" != typeof o),
            a = n || (!0 === o || !0 === r ? "margin" : "border");return R(this, function (t, n, o) {
          var r;return g(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? w.css(t, n, a) : w.style(t, n, o, a);
        }, t, s ? o : void 0, s);
      };
    });
  }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
    w.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), w.fn.extend({ hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), w.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, i) {
      return this.on(t, e, n, i);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } }), w.proxy = function (e, t) {
    var n, i, o;if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return i = r.call(arguments, 2), (o = function o() {
      return e.apply(t || this, i.concat(r.call(arguments)));
    }).guid = e.guid = e.guid || w.guid++, o;
  }, w.holdReady = function (e) {
    e ? w.readyWait++ : w.ready(!0);
  }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = k, w.isFunction = m, w.isWindow = g, w.camelCase = Q, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
    var t = w.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return w;
  });var Ut = e.jQuery,
      $t = e.$;return w.noConflict = function (t) {
    return e.$ === w && (e.$ = $t), t && e.jQuery === w && (e.jQuery = Ut), w;
  }, t || (e.jQuery = e.$ = w), w;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t();
}(this, function () {
  "use strict";
  var e = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
      t = function () {
    for (var t = ["Edge", "Trident", "Firefox"], n = 0; n < t.length; n += 1) {
      if (e && navigator.userAgent.indexOf(t[n]) >= 0) return 1;
    }return 0;
  }();var n = e && window.Promise ? function (e) {
    var t = !1;return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var n = !1;return function () {
      n || (n = !0, setTimeout(function () {
        n = !1, e();
      }, t));
    };
  };function i(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }function o(e, t) {
    if (1 !== e.nodeType) return [];var n = e.ownerDocument.defaultView.getComputedStyle(e, null);return t ? n[t] : n;
  }function r(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }function s(e) {
    if (!e) return document.body;switch (e.nodeName) {case "HTML":case "BODY":
        return e.ownerDocument.body;case "#document":
        return e.body;}var t = o(e),
        n = t.overflow,
        i = t.overflowX,
        a = t.overflowY;return (/(auto|scroll|overlay)/.test(n + a + i) ? e : s(r(e))
    );
  }function a(e) {
    return e && e.referenceNode ? e.referenceNode : e;
  }var l = e && !(!window.MSInputMethodContext || !document.documentMode),
      c = e && /MSIE 10/.test(navigator.userAgent);function u(e) {
    return 11 === e ? l : 10 === e ? c : l || c;
  }function d(e) {
    if (!e) return document.documentElement;for (var t = u(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }var i = n && n.nodeName;return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === o(n, "position") ? d(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }function f(e) {
    return null !== e.parentNode ? f(e.parentNode) : e;
  }function h(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        i = n ? e : t,
        o = n ? t : e,
        r = document.createRange();r.setStart(i, 0), r.setEnd(o, 0);var s,
        a,
        l = r.commonAncestorContainer;if (e !== l && t !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && d(s.firstElementChild) !== s ? d(l) : l;var c = f(e);return c.host ? h(c.host, t) : h(e, f(t).host);
  }function p(e) {
    var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
        n = e.nodeName;if ("BODY" === n || "HTML" === n) {
      var i = e.ownerDocument.documentElement;return (e.ownerDocument.scrollingElement || i)[t];
    }return e[t];
  }function m(e, t) {
    var n = "x" === t ? "Left" : "Top",
        i = "Left" === n ? "Right" : "Bottom";return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"]);
  }function g(e, t, n, i) {
    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], u(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0);
  }function v(e) {
    var t = e.body,
        n = e.documentElement,
        i = u(10) && getComputedStyle(n);return { height: g("Height", t, n, i), width: g("Width", t, n, i) };
  }var y = function y(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      b = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }return function (t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t;
    };
  }(),
      w = function w(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  },
      _ = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
      }
    }return e;
  };function x(e) {
    return _({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }function E(e) {
    var t = {};try {
      if (u(10)) {
        t = e.getBoundingClientRect();var n = p(e, "top"),
            i = p(e, "left");t.top += n, t.left += i, t.bottom += n, t.right += i;
      } else t = e.getBoundingClientRect();
    } catch (e) {}var r = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
        s = "HTML" === e.nodeName ? v(e.ownerDocument) : {},
        a = s.width || e.clientWidth || r.width,
        l = s.height || e.clientHeight || r.height,
        c = e.offsetWidth - a,
        d = e.offsetHeight - l;if (c || d) {
      var f = o(e);c -= m(f, "x"), d -= m(f, "y"), r.width -= c, r.height -= d;
    }return x(r);
  }function C(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = u(10),
        r = "HTML" === t.nodeName,
        a = E(e),
        l = E(t),
        c = s(e),
        d = o(t),
        f = parseFloat(d.borderTopWidth),
        h = parseFloat(d.borderLeftWidth);n && r && (l.top = Math.max(l.top, 0), l.left = Math.max(l.left, 0));var m = x({ top: a.top - l.top - f, left: a.left - l.left - h, width: a.width, height: a.height });if (m.marginTop = 0, m.marginLeft = 0, !i && r) {
      var g = parseFloat(d.marginTop),
          v = parseFloat(d.marginLeft);m.top -= f - g, m.bottom -= f - g, m.left -= h - v, m.right -= h - v, m.marginTop = g, m.marginLeft = v;
    }return (i && !n ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (m = function (e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = p(t, "top"),
          o = p(t, "left"),
          r = n ? -1 : 1;return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e;
    }(m, t)), m;
  }function T(e) {
    if (!e || !e.parentElement || u()) return document.documentElement;for (var t = e.parentElement; t && "none" === o(t, "transform");) {
      t = t.parentElement;
    }return t || document.documentElement;
  }function S(e, t, n, i) {
    var l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        c = { top: 0, left: 0 },
        u = l ? T(e) : h(e, a(t));if ("viewport" === i) c = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = e.ownerDocument.documentElement,
          i = C(e, n),
          o = Math.max(n.clientWidth, window.innerWidth || 0),
          r = Math.max(n.clientHeight, window.innerHeight || 0),
          s = t ? 0 : p(n),
          a = t ? 0 : p(n, "left");return x({ top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: o, height: r });
    }(u, l);else {
      var d = void 0;"scrollParent" === i ? "BODY" === (d = s(r(t))).nodeName && (d = e.ownerDocument.documentElement) : d = "window" === i ? e.ownerDocument.documentElement : i;var f = C(d, u, l);if ("HTML" !== d.nodeName || function e(t) {
        var n = t.nodeName;if ("BODY" === n || "HTML" === n) return !1;if ("fixed" === o(t, "position")) return !0;var i = r(t);return !!i && e(i);
      }(u)) c = f;else {
        var m = v(e.ownerDocument),
            g = m.height,
            y = m.width;c.top += f.top - f.marginTop, c.bottom = g + f.top, c.left += f.left - f.marginLeft, c.right = y + f.left;
      }
    }var b = "number" == typeof (n = n || 0);return c.left += b ? n : n.left || 0, c.top += b ? n : n.top || 0, c.right -= b ? n : n.right || 0, c.bottom -= b ? n : n.bottom || 0, c;
  }function k(e, t, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;if (-1 === e.indexOf("auto")) return e;var s = S(n, i, r, o),
        a = { top: { width: s.width, height: t.top - s.top }, right: { width: s.right - t.right, height: s.height }, bottom: { width: s.width, height: s.bottom - t.bottom }, left: { width: t.left - s.left, height: s.height } },
        l = Object.keys(a).map(function (e) {
      return _({ key: e }, a[e], { area: (t = a[e], t.width * t.height) });var t;
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        c = l.filter(function (e) {
      var t = e.width,
          i = e.height;return t >= n.clientWidth && i >= n.clientHeight;
    }),
        u = c.length > 0 ? c[0].key : l[0].key,
        d = e.split("-")[1];return u + (d ? "-" + d : "");
  }function D(e, t, n) {
    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;return C(n, i ? T(t) : h(t, a(n)), i);
  }function A(e) {
    var t = e.ownerDocument.defaultView.getComputedStyle(e),
        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
        i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);return { width: e.offsetWidth + i, height: e.offsetHeight + n };
  }function N(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }function I(e, t, n) {
    n = n.split("-")[0];var i = A(e),
        o = { width: i.width, height: i.height },
        r = -1 !== ["right", "left"].indexOf(n),
        s = r ? "top" : "left",
        a = r ? "left" : "top",
        l = r ? "height" : "width",
        c = r ? "width" : "height";return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[N(a)], o;
  }function L(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }function P(e, t, n) {
    return (void 0 === n ? e : e.slice(0, function (e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n;
      });var i = L(e, function (e) {
        return e[t] === n;
      });return e.indexOf(i);
    }(e, "name", n))).forEach(function (e) {
      e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n = e.function || e.fn;e.enabled && i(n) && (t.offsets.popper = x(t.offsets.popper), t.offsets.reference = x(t.offsets.reference), t = n(t, e));
    }), t;
  }function j(e, t) {
    return e.some(function (e) {
      var n = e.name;return e.enabled && n === t;
    });
  }function O(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
      var o = t[i],
          r = o ? "" + o + n : e;if (void 0 !== document.body.style[r]) return r;
    }return null;
  }function q(e) {
    var t = e.ownerDocument;return t ? t.defaultView : window;
  }function M(e, t, n, i) {
    n.updateBound = i, q(e).addEventListener("resize", n.updateBound, { passive: !0 });var o = s(e);return function e(t, n, i, o) {
      var r = "BODY" === t.nodeName,
          a = r ? t.ownerDocument.defaultView : t;a.addEventListener(n, i, { passive: !0 }), r || e(s(a.parentNode), n, i, o), o.push(a);
    }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n;
  }function z() {
    var e, t;this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, q(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t));
  }function F(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }function H(e, t) {
    Object.keys(t).forEach(function (n) {
      var i = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && F(t[n]) && (i = "px"), e.style[n] = t[n] + i;
    });
  }var B = e && /Firefox/i.test(navigator.userAgent);function R(e, t, n) {
    var i = L(e, function (e) {
      return e.name === t;
    }),
        o = !!i && e.some(function (e) {
      return e.name === n && e.enabled && e.order < i.order;
    });if (!o) {
      var r = "`" + t + "`",
          s = "`" + n + "`";console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!");
    }return o;
  }var W = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      U = W.slice(3);function $(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = U.indexOf(e),
        i = U.slice(n + 1).concat(U.slice(0, n));return t ? i.reverse() : i;
  }var Q = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };function V(e, t, n, i) {
    var o = [0, 0],
        r = -1 !== ["right", "left"].indexOf(i),
        s = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        a = s.indexOf(L(s, function (e) {
      return -1 !== e.search(/,|\s/);
    }));s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l = /\s*,\s*|\s+/,
        c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];return (c = c.map(function (e, i) {
      var o = (1 === i ? !r : r) ? "height" : "width",
          s = !1;return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return function (e, t, n, i) {
          var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
              r = +o[1],
              s = o[2];if (!r) return e;if (0 === s.indexOf("%")) {
            var a = void 0;switch (s) {case "%p":
                a = n;break;case "%":case "%r":default:
                a = i;}return x(a)[t] / 100 * r;
          }if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;return r;
        }(e, o, t, n);
      });
    })).forEach(function (e, t) {
      e.forEach(function (n, i) {
        F(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1));
      });
    }), o;
  }var X = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = t.split("-")[1];if (i) {
            var o = e.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                u = { start: w({}, l, r[l]), end: w({}, l, r[l] + r[c] - s[c]) };e.offsets.popper = _({}, s, u[i]);
          }return e;
        } }, offset: { order: 200, enabled: !0, fn: function fn(e, t) {
          var n = t.offset,
              i = e.placement,
              o = e.offsets,
              r = o.popper,
              s = o.reference,
              a = i.split("-")[0],
              l = void 0;return l = F(+n) ? [+n, 0] : V(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, t) {
          var n = t.boundariesElement || d(e.instance.popper);e.instance.reference === n && (n = d(n));var i = O("transform"),
              o = e.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[i];o.top = "", o.left = "", o[i] = "";var l = S(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);o.top = r, o.left = s, o[i] = a, t.boundaries = l;var c = t.priority,
              u = e.offsets.popper,
              f = { primary: function primary(e) {
              var n = u[e];return u[e] < l[e] && !t.escapeWithReference && (n = Math.max(u[e], l[e])), w({}, e, n);
            }, secondary: function secondary(e) {
              var n = "right" === e ? "left" : "top",
                  i = u[n];return u[e] > l[e] && !t.escapeWithReference && (i = Math.min(u[n], l[e] - ("right" === e ? u.width : u.height))), w({}, n, i);
            } };return c.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";u = _({}, u, f[t](e));
          }), e.offsets.popper = u, e;
        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function fn(e) {
          var t = e.offsets,
              n = t.popper,
              i = t.reference,
              o = e.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(e, t) {
          var n;if (!R(e.instance.modifiers, "arrow", "keepTogether")) return e;var i = t.element;if ("string" == typeof i) {
            if (!(i = e.instance.popper.querySelector(i))) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;var r = e.placement.split("-")[0],
              s = e.offsets,
              a = s.popper,
              l = s.reference,
              c = -1 !== ["left", "right"].indexOf(r),
              u = c ? "height" : "width",
              d = c ? "Top" : "Left",
              f = d.toLowerCase(),
              h = c ? "left" : "top",
              p = c ? "bottom" : "right",
              m = A(i)[u];l[p] - m < a[f] && (e.offsets.popper[f] -= a[f] - (l[p] - m)), l[f] + m > a[p] && (e.offsets.popper[f] += l[f] + m - a[p]), e.offsets.popper = x(e.offsets.popper);var g = l[f] + l[u] / 2 - m / 2,
              v = o(e.instance.popper),
              y = parseFloat(v["margin" + d]),
              b = parseFloat(v["border" + d + "Width"]),
              _ = g - e.offsets.popper[f] - y - b;return _ = Math.max(Math.min(a[u] - m, _), 0), e.arrowElement = i, e.offsets.arrow = (w(n = {}, f, Math.round(_)), w(n, h, ""), n), e;
        }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(e, t) {
          if (j(e.instance.modifiers, "inner")) return e;if (e.flipped && e.placement === e.originalPlacement) return e;var n = S(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              i = e.placement.split("-")[0],
              o = N(i),
              r = e.placement.split("-")[1] || "",
              s = [];switch (t.behavior) {case Q.FLIP:
              s = [i, o];break;case Q.CLOCKWISE:
              s = $(i);break;case Q.COUNTERCLOCKWISE:
              s = $(i, !0);break;default:
              s = t.behavior;}return s.forEach(function (a, l) {
            if (i !== a || s.length === l + 1) return e;i = e.placement.split("-")[0], o = N(i);var c = e.offsets.popper,
                u = e.offsets.reference,
                d = Math.floor,
                f = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                h = d(c.left) < d(n.left),
                p = d(c.right) > d(n.right),
                m = d(c.top) < d(n.top),
                g = d(c.bottom) > d(n.bottom),
                v = "left" === i && h || "right" === i && p || "top" === i && m || "bottom" === i && g,
                y = -1 !== ["top", "bottom"].indexOf(i),
                b = !!t.flipVariations && (y && "start" === r && h || y && "end" === r && p || !y && "start" === r && m || !y && "end" === r && g),
                w = !!t.flipVariationsByContent && (y && "start" === r && p || y && "end" === r && h || !y && "start" === r && g || !y && "end" === r && m),
                x = b || w;(f || v || x) && (e.flipped = !0, (f || v) && (i = s[l + 1]), x && (r = function (e) {
              return "end" === e ? "start" : "start" === e ? "end" : e;
            }(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = _({}, e.offsets.popper, I(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, "flip"));
          }), e;
        }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: !1, flipVariationsByContent: !1 }, inner: { order: 700, enabled: !1, fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              i = e.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = N(t), e.offsets.popper = x(o), e;
        } }, hide: { order: 800, enabled: !0, fn: function fn(e) {
          if (!R(e.instance.modifiers, "hide", "preventOverflow")) return e;var t = e.offsets.reference,
              n = L(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name;
          }).boundaries;if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (!0 === e.hide) return e;e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === e.hide) return e;e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
          }return e;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(e, t) {
          var n = t.x,
              i = t.y,
              o = e.offsets.popper,
              r = L(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s = void 0 !== r ? r : t.gpuAcceleration,
              a = d(e.instance.popper),
              l = E(a),
              c = { position: o.position },
              u = function (e, t) {
            var n = e.offsets,
                i = n.popper,
                o = n.reference,
                r = Math.round,
                s = Math.floor,
                a = function a(e) {
              return e;
            },
                l = r(o.width),
                c = r(i.width),
                u = -1 !== ["left", "right"].indexOf(e.placement),
                d = -1 !== e.placement.indexOf("-"),
                f = t ? u || d || l % 2 == c % 2 ? r : s : a,
                h = t ? r : a;return { left: f(l % 2 == 1 && c % 2 == 1 && !d && t ? i.left - 1 : i.left), top: h(i.top), bottom: h(i.bottom), right: f(i.right) };
          }(e, window.devicePixelRatio < 2 || !B),
              f = "bottom" === n ? "top" : "bottom",
              h = "right" === i ? "left" : "right",
              p = O("transform"),
              m = void 0,
              g = void 0;if (g = "bottom" === f ? "HTML" === a.nodeName ? -a.clientHeight + u.bottom : -l.height + u.bottom : u.top, m = "right" === h ? "HTML" === a.nodeName ? -a.clientWidth + u.right : -l.width + u.right : u.left, s && p) c[p] = "translate3d(" + m + "px, " + g + "px, 0)", c[f] = 0, c[h] = 0, c.willChange = "transform";else {
            var v = "bottom" === f ? -1 : 1,
                y = "right" === h ? -1 : 1;c[f] = g * v, c[h] = m * y, c.willChange = f + ", " + h;
          }var b = { "x-placement": e.placement };return e.attributes = _({}, b, e.attributes), e.styles = _({}, c, e.styles), e.arrowStyles = _({}, e.offsets.arrow, e.arrowStyles), e;
        }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
          var t, n;return H(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
          }), e.arrowElement && Object.keys(e.arrowStyles).length && H(e.arrowElement, e.arrowStyles), e;
        }, onLoad: function onLoad(e, t, n, i, o) {
          var r = D(o, t, e, n.positionFixed),
              s = k(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return t.setAttribute("x-placement", s), H(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
        }, gpuAcceleration: void 0 } } },
      Y = function () {
    function e(t, o) {
      var r = this,
          s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};y(this, e), this.scheduleUpdate = function () {
        return requestAnimationFrame(r.update);
      }, this.update = n(this.update.bind(this)), this.options = _({}, e.Defaults, s), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = t && t.jquery ? t[0] : t, this.popper = o && o.jquery ? o[0] : o, this.options.modifiers = {}, Object.keys(_({}, e.Defaults.modifiers, s.modifiers)).forEach(function (t) {
        r.options.modifiers[t] = _({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return _({ name: e }, r.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (e) {
        e.enabled && i(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state);
      }), this.update();var a = this.options.eventsEnabled;a && this.enableEventListeners(), this.state.eventsEnabled = a;
    }return b(e, [{ key: "update", value: function value() {
        return function () {
          if (!this.state.isDestroyed) {
            var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };e.offsets.reference = D(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = k(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = I(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
          }
        }.call(this);
      } }, { key: "destroy", value: function value() {
        return function () {
          return this.state.isDestroyed = !0, j(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[O("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
        }.call(this);
      } }, { key: "enableEventListeners", value: function value() {
        return function () {
          this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate));
        }.call(this);
      } }, { key: "disableEventListeners", value: function value() {
        return z.call(this);
      } }]), e;
  }();return Y.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Y.placements = W, Y.Defaults = X, Y;
}), function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}, e.jQuery, e.Popper);
}(this, function (e, t, n) {
  "use strict";
  function i(e) {
    return e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "default" in e ? e : { default: e };
  }var o = i(t),
      r = i(n);function s(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }function a(e, t, n) {
    return t && s(e.prototype, t), n && s(e, n), e;
  }function l() {
    return (l = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];for (var i in n) {
          Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
        }
      }return e;
    }).apply(this, arguments);
  }var c = "transitionend";function u(e) {
    var t = this,
        n = !1;return o.default(this).one(d.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || d.triggerTransitionEnd(t);
    }, e), this;
  }var d = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(e) {
      do {
        e += ~~(1e6 * Math.random());
      } while (document.getElementById(e));return e;
    }, getSelectorFromElement: function getSelectorFromElement(e) {
      var t = e.getAttribute("data-target");if (!t || "#" === t) {
        var n = e.getAttribute("href");t = n && "#" !== n ? n.trim() : "";
      }try {
        return document.querySelector(t) ? t : null;
      } catch (e) {
        return null;
      }
    }, getTransitionDurationFromElement: function getTransitionDurationFromElement(e) {
      if (!e) return 0;var t = o.default(e).css("transition-duration"),
          n = o.default(e).css("transition-delay"),
          i = parseFloat(t),
          r = parseFloat(n);return i || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0;
    }, reflow: function reflow(e) {
      return e.offsetHeight;
    }, triggerTransitionEnd: function triggerTransitionEnd(e) {
      o.default(e).trigger(c);
    }, supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(c);
    }, isElement: function isElement(e) {
      return (e[0] || e).nodeType;
    }, typeCheckConfig: function typeCheckConfig(e, t, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              r = t[i],
              s = r && d.isElement(r) ? "element" : null === (a = r) || void 0 === a ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }
      }var a;
    }, findShadowRoot: function findShadowRoot(e) {
      if (!document.documentElement.attachShadow) return null;if ("function" == typeof e.getRootNode) {
        var t = e.getRootNode();return t instanceof ShadowRoot ? t : null;
      }return e instanceof ShadowRoot ? e : e.parentNode ? d.findShadowRoot(e.parentNode) : null;
    }, jQueryDetection: function jQueryDetection() {
      if (void 0 === o.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e = o.default.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    } };d.jQueryDetection(), o.default.fn.emulateTransitionEnd = u, o.default.event.special[d.TRANSITION_END] = { bindType: c, delegateType: c, handle: function handle(e) {
      if (o.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
    } };var f = o.default.fn.alert,
      h = function () {
    function e(e) {
      this._element = e;
    }var t = e.prototype;return t.close = function (e) {
      var t = this._element;e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
    }, t.dispose = function () {
      o.default.removeData(this._element, "bs.alert"), this._element = null;
    }, t._getRootElement = function (e) {
      var t = d.getSelectorFromElement(e),
          n = !1;return t && (n = document.querySelector(t)), n || (n = o.default(e).closest(".alert")[0]), n;
    }, t._triggerCloseEvent = function (e) {
      var t = o.default.Event("close.bs.alert");return o.default(e).trigger(t), t;
    }, t._removeElement = function (e) {
      var t = this;if (o.default(e).removeClass("show"), o.default(e).hasClass("fade")) {
        var n = d.getTransitionDurationFromElement(e);o.default(e).one(d.TRANSITION_END, function (n) {
          return t._destroyElement(e, n);
        }).emulateTransitionEnd(n);
      } else this._destroyElement(e);
    }, t._destroyElement = function (e) {
      o.default(e).detach().trigger("closed.bs.alert").remove();
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this),
            i = n.data("bs.alert");i || (i = new e(this), n.data("bs.alert", i)), "close" === t && i[t](this);
      });
    }, e._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, a(e, null, [{ key: "VERSION", get: function get() {
        return "4.5.3";
      } }]), e;
  }();o.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', h._handleDismiss(new h())), o.default.fn.alert = h._jQueryInterface, o.default.fn.alert.Constructor = h, o.default.fn.alert.noConflict = function () {
    return o.default.fn.alert = f, h._jQueryInterface;
  };var p = o.default.fn.button,
      m = function () {
    function e(e) {
      this._element = e, this.shouldAvoidTriggerChange = !1;
    }var t = e.prototype;return t.toggle = function () {
      var e = !0,
          t = !0,
          n = o.default(this._element).closest('[data-toggle="buttons"]')[0];if (n) {
        var i = this._element.querySelector('input:not([type="hidden"])');if (i) {
          if ("radio" === i.type) if (i.checked && this._element.classList.contains("active")) e = !1;else {
            var r = n.querySelector(".active");r && o.default(r).removeClass("active");
          }e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || o.default(i).trigger("change")), i.focus(), t = !1;
        }
      }this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && o.default(this._element).toggleClass("active"));
    }, t.dispose = function () {
      o.default.removeData(this._element, "bs.button"), this._element = null;
    }, e._jQueryInterface = function (t, n) {
      return this.each(function () {
        var i = o.default(this),
            r = i.data("bs.button");r || (r = new e(this), i.data("bs.button", r)), r.shouldAvoidTriggerChange = n, "toggle" === t && r[t]();
      });
    }, a(e, null, [{ key: "VERSION", get: function get() {
        return "4.5.3";
      } }]), e;
  }();o.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
    var t = e.target,
        n = t;if (o.default(t).hasClass("btn") || (t = o.default(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();else {
      var i = t.querySelector('input:not([type="hidden"])');if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();"INPUT" !== n.tagName && "LABEL" === t.tagName || m._jQueryInterface.call(o.default(t), "toggle", "INPUT" === n.tagName);
    }
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
    var t = o.default(e.target).closest(".btn")[0];o.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type));
  }), o.default(window).on("load.bs.button.data-api", function () {
    for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
      var i = e[t],
          o = i.querySelector('input:not([type="hidden"])');o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
    }for (var r = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
      var a = e[r];"true" === a.getAttribute("aria-pressed") ? a.classList.add("active") : a.classList.remove("active");
    }
  }), o.default.fn.button = m._jQueryInterface, o.default.fn.button.Constructor = m, o.default.fn.button.noConflict = function () {
    return o.default.fn.button = p, m._jQueryInterface;
  };var g = "carousel",
      v = ".bs.carousel",
      y = o.default.fn[g],
      b = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
      w = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
      _ = ".carousel-indicators",
      x = { TOUCH: "touch", PEN: "pen" },
      E = function () {
    function e(e, t) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(_), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
    }var t = e.prototype;return t.next = function () {
      this._isSliding || this._slide("next");
    }, t.nextWhenVisible = function () {
      var e = o.default(this._element);!document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide("prev");
    }, t.pause = function (e) {
      e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (d.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (e) {
      var t = this;this._activeElement = this._element.querySelector(".active.carousel-item");var n = this._getItemIndex(this._activeElement);if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) o.default(this._element).one("slid.bs.carousel", function () {
        return t.to(e);
      });else {
        if (n === e) return this.pause(), void this.cycle();var i = e > n ? "next" : "prev";this._slide(i, this._items[e]);
      }
    }, t.dispose = function () {
      o.default(this._element).off(v), o.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (e) {
      return e = l({}, b, e), d.typeCheckConfig(g, e, w), e;
    }, t._handleSwipe = function () {
      var e = Math.abs(this.touchDeltaX);if (!(e <= 40)) {
        var t = e / this.touchDeltaX;this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next();
      }
    }, t._addEventListeners = function () {
      var e = this;this._config.keyboard && o.default(this._element).on("keydown.bs.carousel", function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && o.default(this._element).on("mouseenter.bs.carousel", function (t) {
        return e.pause(t);
      }).on("mouseleave.bs.carousel", function (t) {
        return e.cycle(t);
      }), this._config.touch && this._addTouchEventListeners();
    }, t._addTouchEventListeners = function () {
      var e = this;if (this._touchSupported) {
        var t = function t(_t3) {
          e._pointerEvent && x[_t3.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = _t3.originalEvent.clientX : e._pointerEvent || (e.touchStartX = _t3.originalEvent.touches[0].clientX);
        },
            n = function n(t) {
          e._pointerEvent && x[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
            return e.cycle(t);
          }, 500 + e._config.interval));
        };o.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (e) {
          return e.preventDefault();
        }), this._pointerEvent ? (o.default(this._element).on("pointerdown.bs.carousel", function (e) {
          return t(e);
        }), o.default(this._element).on("pointerup.bs.carousel", function (e) {
          return n(e);
        }), this._element.classList.add("pointer-event")) : (o.default(this._element).on("touchstart.bs.carousel", function (e) {
          return t(e);
        }), o.default(this._element).on("touchmove.bs.carousel", function (t) {
          return function (t) {
            t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX;
          }(t);
        }), o.default(this._element).on("touchend.bs.carousel", function (e) {
          return n(e);
        }));
      }
    }, t._keydown = function (e) {
      if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {case 37:
          e.preventDefault(), this.prev();break;case 39:
          e.preventDefault(), this.next();}
    }, t._getItemIndex = function (e) {
      return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e);
    }, t._getItemByDirection = function (e, t) {
      var n = "next" === e,
          i = "prev" === e,
          o = this._getItemIndex(t),
          r = this._items.length - 1;if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;var s = (o + ("prev" === e ? -1 : 1)) % this._items.length;return -1 === s ? this._items[this._items.length - 1] : this._items[s];
    }, t._triggerSlideEvent = function (e, t) {
      var n = this._getItemIndex(e),
          i = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
          r = o.default.Event("slide.bs.carousel", { relatedTarget: e, direction: t, from: i, to: n });return o.default(this._element).trigger(r), r;
    }, t._setActiveIndicatorElement = function (e) {
      if (this._indicatorsElement) {
        var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));o.default(t).removeClass("active");var n = this._indicatorsElement.children[this._getItemIndex(e)];n && o.default(n).addClass("active");
      }
    }, t._slide = function (e, t) {
      var n,
          i,
          r,
          s = this,
          a = this._element.querySelector(".active.carousel-item"),
          l = this._getItemIndex(a),
          c = t || a && this._getItemByDirection(e, a),
          u = this._getItemIndex(c),
          f = Boolean(this._interval);if ("next" === e ? (n = "carousel-item-left", i = "carousel-item-next", r = "left") : (n = "carousel-item-right", i = "carousel-item-prev", r = "right"), c && o.default(c).hasClass("active")) this._isSliding = !1;else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
        this._isSliding = !0, f && this.pause(), this._setActiveIndicatorElement(c);var h = o.default.Event("slid.bs.carousel", { relatedTarget: c, direction: r, from: l, to: u });if (o.default(this._element).hasClass("slide")) {
          o.default(c).addClass(i), d.reflow(c), o.default(a).addClass(n), o.default(c).addClass(n);var p = parseInt(c.getAttribute("data-interval"), 10);p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;var m = d.getTransitionDurationFromElement(a);o.default(a).one(d.TRANSITION_END, function () {
            o.default(c).removeClass(n + " " + i).addClass("active"), o.default(a).removeClass("active " + i + " " + n), s._isSliding = !1, setTimeout(function () {
              return o.default(s._element).trigger(h);
            }, 0);
          }).emulateTransitionEnd(m);
        } else o.default(a).removeClass("active"), o.default(c).addClass("active"), this._isSliding = !1, o.default(this._element).trigger(h);f && this.cycle();
      }
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this).data("bs.carousel"),
            i = l({}, b, o.default(this).data());"object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = l({}, i, t));var r = "string" == typeof t ? t : i.slide;if (n || (n = new e(this, i), o.default(this).data("bs.carousel", n)), "number" == typeof t) n.to(t);else if ("string" == typeof r) {
          if (void 0 === n[r]) throw new TypeError('No method named "' + r + '"');n[r]();
        } else i.interval && i.ride && (n.pause(), n.cycle());
      });
    }, e._dataApiClickHandler = function (t) {
      var n = d.getSelectorFromElement(this);if (n) {
        var i = o.default(n)[0];if (i && o.default(i).hasClass("carousel")) {
          var r = l({}, o.default(i).data(), o.default(this).data()),
              s = this.getAttribute("data-slide-to");s && (r.interval = !1), e._jQueryInterface.call(o.default(i), r), s && o.default(i).data("bs.carousel").to(s), t.preventDefault();
        }
      }
    }, a(e, null, [{ key: "VERSION", get: function get() {
        return "4.5.3";
      } }, { key: "Default", get: function get() {
        return b;
      } }]), e;
  }();o.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", E._dataApiClickHandler), o.default(window).on("load.bs.carousel.data-api", function () {
    for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
      var i = o.default(e[t]);E._jQueryInterface.call(i, i.data());
    }
  }), o.default.fn[g] = E._jQueryInterface, o.default.fn[g].Constructor = E, o.default.fn[g].noConflict = function () {
    return o.default.fn[g] = y, E._jQueryInterface;
  };var C = "collapse",
      T = o.default.fn[C],
      S = { toggle: !0, parent: "" },
      k = { toggle: "boolean", parent: "(string|element)" },
      D = '[data-toggle="collapse"]',
      A = function () {
    function e(e, t) {
      this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));for (var n = [].slice.call(document.querySelectorAll(D)), i = 0, o = n.length; i < o; i++) {
        var r = n[i],
            s = d.getSelectorFromElement(r),
            a = [].slice.call(document.querySelectorAll(s)).filter(function (t) {
          return t === e;
        });null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(r));
      }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }var t = e.prototype;return t.toggle = function () {
      o.default(this._element).hasClass("show") ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          n,
          i = this;if (!this._isTransitioning && !o.default(this._element).hasClass("show") && (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (e) {
        return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains("collapse");
      })).length && (t = null), !(t && (n = o.default(t).not(this._selector).data("bs.collapse")) && n._isTransitioning))) {
        var r = o.default.Event("show.bs.collapse");if (o.default(this._element).trigger(r), !r.isDefaultPrevented()) {
          t && (e._jQueryInterface.call(o.default(t).not(this._selector), "hide"), n || o.default(t).data("bs.collapse", null));var s = this._getDimension();o.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[s] = 0, this._triggerArray.length && o.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0);var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
              l = d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END, function () {
            o.default(i._element).removeClass("collapsing").addClass("collapse show"), i._element.style[s] = "", i.setTransitioning(!1), o.default(i._element).trigger("shown.bs.collapse");
          }).emulateTransitionEnd(l), this._element.style[s] = this._element[a] + "px";
        }
      }
    }, t.hide = function () {
      var e = this;if (!this._isTransitioning && o.default(this._element).hasClass("show")) {
        var t = o.default.Event("hide.bs.collapse");if (o.default(this._element).trigger(t), !t.isDefaultPrevented()) {
          var n = this._getDimension();this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", d.reflow(this._element), o.default(this._element).addClass("collapsing").removeClass("collapse show");var i = this._triggerArray.length;if (i > 0) for (var r = 0; r < i; r++) {
            var s = this._triggerArray[r],
                a = d.getSelectorFromElement(s);if (null !== a) o.default([].slice.call(document.querySelectorAll(a))).hasClass("show") || o.default(s).addClass("collapsed").attr("aria-expanded", !1);
          }this.setTransitioning(!0);this._element.style[n] = "";var l = d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END, function () {
            e.setTransitioning(!1), o.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
          }).emulateTransitionEnd(l);
        }
      }
    }, t.setTransitioning = function (e) {
      this._isTransitioning = e;
    }, t.dispose = function () {
      o.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (e) {
      return (e = l({}, S, e)).toggle = Boolean(e.toggle), d.typeCheckConfig(C, e, k), e;
    }, t._getDimension = function () {
      return o.default(this._element).hasClass("width") ? "width" : "height";
    }, t._getParent = function () {
      var t,
          n = this;d.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
          r = [].slice.call(t.querySelectorAll(i));return o.default(r).each(function (t, i) {
        n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (e, t) {
      var n = o.default(e).hasClass("show");t.length && o.default(t).toggleClass("collapsed", !n).attr("aria-expanded", n);
    }, e._getTargetFromElement = function (e) {
      var t = d.getSelectorFromElement(e);return t ? document.querySelector(t) : null;
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this),
            i = n.data("bs.collapse"),
            r = l({}, S, n.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {});if (!i && r.toggle && "string" == typeof t && /show|hide/.test(t) && (r.toggle = !1), i || (i = new e(this, r), n.data("bs.collapse", i)), "string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t]();
        }
      });
    }, a(e, null, [{ key: "VERSION", get: function get() {
        return "4.5.3";
      } }, { key: "Default", get: function get() {
        return S;
      } }]), e;
  }();o.default(document).on("click.bs.collapse.data-api", D, function (e) {
    "A" === e.currentTarget.tagName && e.preventDefault();var t = o.default(this),
        n = d.getSelectorFromElement(this),
        i = [].slice.call(document.querySelectorAll(n));o.default(i).each(function () {
      var e = o.default(this),
          n = e.data("bs.collapse") ? "toggle" : t.data();A._jQueryInterface.call(e, n);
    });
  }), o.default.fn[C] = A._jQueryInterface, o.default.fn[C].Constructor = A, o.default.fn[C].noConflict = function () {
    return o.default.fn[C] = T, A._jQueryInterface;
  };var N = "dropdown",
      I = o.default.fn[N],
      L = new RegExp("38|40|27"),
      P = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
      j = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
      O = function () {
    function e(e, t) {
      this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }var t = e.prototype;return t.toggle = function () {
      if (!this._element.disabled && !o.default(this._element).hasClass("disabled")) {
        var t = o.default(this._menu).hasClass("show");e._clearMenus(), t || this.show(!0);
      }
    }, t.show = function (t) {
      if (void 0 === t && (t = !1), !(this._element.disabled || o.default(this._element).hasClass("disabled") || o.default(this._menu).hasClass("show"))) {
        var n = { relatedTarget: this._element },
            i = o.default.Event("show.bs.dropdown", n),
            s = e._getParentFromElement(this._element);if (o.default(s).trigger(i), !i.isDefaultPrevented()) {
          if (!this._inNavbar && t) {
            if (void 0 === r.default) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a = this._element;"parent" === this._config.reference ? a = s : d.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && o.default(s).addClass("position-static"), this._popper = new r.default(a, this._menu, this._getPopperConfig());
          }"ontouchstart" in document.documentElement && 0 === o.default(s).closest(".navbar-nav").length && o.default(document.body).children().on("mouseover", null, o.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), o.default(this._menu).toggleClass("show"), o.default(s).toggleClass("show").trigger(o.default.Event("shown.bs.dropdown", n));
        }
      }
    }, t.hide = function () {
      if (!this._element.disabled && !o.default(this._element).hasClass("disabled") && o.default(this._menu).hasClass("show")) {
        var t = { relatedTarget: this._element },
            n = o.default.Event("hide.bs.dropdown", t),
            i = e._getParentFromElement(this._element);o.default(i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), o.default(this._menu).toggleClass("show"), o.default(i).toggleClass("show").trigger(o.default.Event("hidden.bs.dropdown", t)));
      }
    }, t.dispose = function () {
      o.default.removeData(this._element, "bs.dropdown"), o.default(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;o.default(this._element).on("click.bs.dropdown", function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (e) {
      return e = l({}, this.constructor.Default, o.default(this._element).data(), e), d.typeCheckConfig(N, e, this.constructor.DefaultType), e;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = e._getParentFromElement(this._element);t && (this._menu = t.querySelector(".dropdown-menu"));
      }return this._menu;
    }, t._getPlacement = function () {
      var e = o.default(this._element.parentNode),
          t = "bottom-start";return e.hasClass("dropup") ? t = o.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : o.default(this._menu).hasClass("dropdown-menu-right") && (t = "bottom-end"), t;
    }, t._detectNavbar = function () {
      return o.default(this._element).closest(".navbar").length > 0;
    }, t._getOffset = function () {
      var e = this,
          t = {};return "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
      } : t.offset = this._config.offset, t;
    }, t._getPopperConfig = function () {
      var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), l({}, e, this._config.popperConfig);
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this).data("bs.dropdown");if (n || (n = new e(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? t : null), o.default(this).data("bs.dropdown", n)), "string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
        }
      });
    }, e._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), i = 0, r = n.length; i < r; i++) {
        var s = e._getParentFromElement(n[i]),
            a = o.default(n[i]).data("bs.dropdown"),
            l = { relatedTarget: n[i] };if (t && "click" === t.type && (l.clickEvent = t), a) {
          var c = a._menu;if (o.default(s).hasClass("show") && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && o.default.contains(s, t.target))) {
            var u = o.default.Event("hide.bs.dropdown", l);o.default(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), n[i].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), o.default(c).removeClass("show"), o.default(s).removeClass("show").trigger(o.default.Event("hidden.bs.dropdown", l)));
          }
        }
      }
    }, e._getParentFromElement = function (e) {
      var t,
          n = d.getSelectorFromElement(e);return n && (t = document.querySelector(n)), t || e.parentNode;
    }, e._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || o.default(t.target).closest(".dropdown-menu").length)) : L.test(t.which)) && !this.disabled && !o.default(this).hasClass("disabled")) {
        var n = e._getParentFromElement(this),
            i = o.default(n).hasClass("show");if (i || 27 !== t.which) {
          if (t.preventDefault(), t.stopPropagation(), !i || 27 === t.which || 32 === t.which) return 27 === t.which && o.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void o.default(this).trigger("click");var r = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (e) {
            return o.default(e).is(":visible");
          });if (0 !== r.length) {
            var s = r.indexOf(t.target);38 === t.which && s > 0 && s--, 40 === t.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus();
          }
        }
      }
    }, a(e, null, [{ key: "VERSION", get: function get() {
        return "4.5.3";
      } }, { key: "Default", get: function get() {
        return P;
      } }, { key: "DefaultType", get: function get() {
        return j;
      } }]), e;
  }();o.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', O._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", O._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", O._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (e) {
    e.preventDefault(), e.stopPropagation(), O._jQueryInterface.call(o.default(this), "toggle");
  }).on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
    e.stopPropagation();
  }), o.default.fn[N] = O._jQueryInterface, o.default.fn[N].Constructor = O, o.default.fn[N].noConflict = function () {
    return o.default.fn[N] = I, O._jQueryInterface;
  };var q = o.default.fn.modal,
      M = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      z = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
      F = ".modal-dialog",
      H = function () {
    function e(e, t) {
      this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(F), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
    }var t = e.prototype;return t.toggle = function (e) {
      return this._isShown ? this.hide() : this.show(e);
    }, t.show = function (e) {
      var t = this;if (!this._isShown && !this._isTransitioning) {
        o.default(this._element).hasClass("fade") && (this._isTransitioning = !0);var n = o.default.Event("show.bs.modal", { relatedTarget: e });o.default(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), o.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (e) {
          return t.hide(e);
        }), o.default(this._dialog).on("mousedown.dismiss.bs.modal", function () {
          o.default(t._element).one("mouseup.dismiss.bs.modal", function (e) {
            o.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return t._showElement(e);
        }));
      }
    }, t.hide = function (e) {
      var t = this;if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
        var n = o.default.Event("hide.bs.modal");if (o.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;var i = o.default(this._element).hasClass("fade");if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), o.default(document).off("focusin.bs.modal"), o.default(this._element).removeClass("show"), o.default(this._element).off("click.dismiss.bs.modal"), o.default(this._dialog).off("mousedown.dismiss.bs.modal"), i) {
            var r = d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END, function (e) {
              return t._hideModal(e);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      [window, this._element, this._dialog].forEach(function (e) {
        return o.default(e).off(".bs.modal");
      }), o.default(document).off("focusin.bs.modal"), o.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (e) {
      return e = l({}, M, e), d.typeCheckConfig("modal", e, z), e;
    }, t._triggerBackdropTransition = function () {
      var e = this;if ("static" === this._config.backdrop) {
        var t = o.default.Event("hidePrevented.bs.modal");if (o.default(this._element).trigger(t), t.isDefaultPrevented()) return;var n = this._element.scrollHeight > document.documentElement.clientHeight;n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");var i = d.getTransitionDurationFromElement(this._dialog);o.default(this._element).off(d.TRANSITION_END), o.default(this._element).one(d.TRANSITION_END, function () {
          e._element.classList.remove("modal-static"), n || o.default(e._element).one(d.TRANSITION_END, function () {
            e._element.style.overflowY = "";
          }).emulateTransitionEnd(e._element, i);
        }).emulateTransitionEnd(i), this._element.focus();
      } else this.hide();
    }, t._showElement = function (e) {
      var t = this,
          n = o.default(this._element).hasClass("fade"),
          i = this._dialog ? this._dialog.querySelector(".modal-body") : null;this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), o.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && d.reflow(this._element), o.default(this._element).addClass("show"), this._config.focus && this._enforceFocus();var r = o.default.Event("shown.bs.modal", { relatedTarget: e }),
          s = function s() {
        t._config.focus && t._element.focus(), t._isTransitioning = !1, o.default(t._element).trigger(r);
      };if (n) {
        var a = d.getTransitionDurationFromElement(this._dialog);o.default(this._dialog).one(d.TRANSITION_END, s).emulateTransitionEnd(a);
      } else s();
    }, t._enforceFocus = function () {
      var e = this;o.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function (t) {
        document !== t.target && e._element !== t.target && 0 === o.default(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;this._isShown ? o.default(this._element).on("keydown.dismiss.bs.modal", function (t) {
        e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition();
      }) : this._isShown || o.default(this._element).off("keydown.dismiss.bs.modal");
    }, t._setResizeEvent = function () {
      var e = this;this._isShown ? o.default(window).on("resize.bs.modal", function (t) {
        return e.handleUpdate(t);
      }) : o.default(window).off("resize.bs.modal");
    }, t._hideModal = function () {
      var e = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
        o.default(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), o.default(e._element).trigger("hidden.bs.modal");
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (o.default(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (e) {
      var t = this,
          n = o.default(this._element).hasClass("fade") ? "fade" : "";if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), o.default(this._backdrop).appendTo(document.body), o.default(this._element).on("click.dismiss.bs.modal", function (e) {
          t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && t._triggerBackdropTransition();
        }), n && d.reflow(this._backdrop), o.default(this._backdrop).addClass("show"), !e) return;if (!n) return void e();var i = d.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(d.TRANSITION_END, e).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        o.default(this._backdrop).removeClass("show");var r = function r() {
          t._removeBackdrop(), e && e();
        };if (o.default(this._element).hasClass("fade")) {
          var s = d.getTransitionDurationFromElement(this._backdrop);o.default(this._backdrop).one(d.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();
      } else e && e();
    }, t._adjustDialog = function () {
      var e = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var e = document.body.getBoundingClientRect();this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var e = this;if (this._isBodyOverflowing) {
        var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
            n = [].slice.call(document.querySelectorAll(".sticky-top"));o.default(t).each(function (t, n) {
          var i = n.style.paddingRight,
              r = o.default(n).css("padding-right");o.default(n).data("padding-right", i).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px");
        }), o.default(n).each(function (t, n) {
          var i = n.style.marginRight,
              r = o.default(n).css("margin-right");o.default(n).data("margin-right", i).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px");
        });var i = document.body.style.paddingRight,
            r = o.default(document.body).css("padding-right");o.default(document.body).data("padding-right", i).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px");
      }o.default(document.body).addClass("modal-open");
    }, t._resetScrollbar = function () {
      var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));o.default(e).each(function (e, t) {
        var n = o.default(t).data("padding-right");o.default(t).removeData("padding-right"), t.style.paddingRight = n || "";
      });var t = [].slice.call(document.querySelectorAll(".sticky-top"));o.default(t).each(function (e, t) {
        var n = o.default(t).data("margin-right");void 0 !== n && o.default(t).css("margin-right", n).removeData("margin-right");
      });var n = o.default(document.body).data("padding-right");o.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || "";
    }, t._getScrollbarWidth = function () {
      var e = document.createElement("div");e.className = "modal-scrollbar-measure", document.body.appendChild(e);var t = e.getBoundingClientRect().width - e.clientWidth;return document.body.removeChild(e), t;
    }, e._jQueryInterface = function (t, n) {
      return this.each(function () {
        var i = o.default(this).data("bs.modal"),
            r = l({}, M, o.default(this).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {});if (i || (i = new e(this, r), o.default(this).data("bs.modal", i)), "string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t](n);
        } else r.show && i.show(n);
      });
    }, a(e, null, [{ key: "VERSION", get: function get() {
        return "4.5.3";
      } }, { key: "Default", get: function get() {
        return M;
      } }]), e;
  }();o.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
    var t,
        n = this,
        i = d.getSelectorFromElement(this);i && (t = document.querySelector(i));var r = o.default(t).data("bs.modal") ? "toggle" : l({}, o.default(t).data(), o.default(this).data());"A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();var s = o.default(t).one("show.bs.modal", function (e) {
      e.isDefaultPrevented() || s.one("hidden.bs.modal", function () {
        o.default(n).is(":visible") && n.focus();
      });
    });H._jQueryInterface.call(o.default(t), r, this);
  }), o.default.fn.modal = H._jQueryInterface, o.default.fn.modal.Constructor = H, o.default.fn.modal.noConflict = function () {
    return o.default.fn.modal = q, H._jQueryInterface;
  };var B = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      R = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] },
      W = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      U = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function $(e, t, n) {
    if (0 === e.length) return e;if (n && "function" == typeof n) return n(e);for (var i = new window.DOMParser().parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), s = function s(e, n) {
      var i = r[e],
          s = i.nodeName.toLowerCase();if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";var a = [].slice.call(i.attributes),
          l = [].concat(t["*"] || [], t[s] || []);a.forEach(function (e) {
        (function (e, t) {
          var n = e.nodeName.toLowerCase();if (-1 !== t.indexOf(n)) return -1 === B.indexOf(n) || Boolean(e.nodeValue.match(W) || e.nodeValue.match(U));for (var i = t.filter(function (e) {
            return e instanceof RegExp;
          }), o = 0, r = i.length; o < r; o++) {
            if (n.match(i[o])) return !0;
          }return !1;
        })(e, l) || i.removeAttribute(e.nodeName);
      });
    }, a = 0, l = r.length; a < l; a++) {
      s(a);
    }return i.body.innerHTML;
  }var Q = "tooltip",
      V = o.default.fn.tooltip,
      X = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Y = ["sanitize", "whiteList", "sanitizeFn"],
      K = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
      G = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
      J = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", sanitize: !0, sanitizeFn: null, whiteList: R, popperConfig: null },
      Z = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" },
      ee = function () {
    function e(e, t) {
      if (void 0 === r.default) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners();
    }var t = e.prototype;return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (e) {
      if (this._isEnabled) if (e) {
        var t = this.constructor.DATA_KEY,
            n = o.default(e.currentTarget).data(t);n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), o.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (o.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), o.default.removeData(this.element, this.constructor.DATA_KEY), o.default(this.element).off(this.constructor.EVENT_KEY), o.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && o.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;if ("none" === o.default(this.element).css("display")) throw new Error("Please use show on visible elements");var t = o.default.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
        o.default(this.element).trigger(t);var n = d.findShadowRoot(this.element),
            i = o.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);if (t.isDefaultPrevented() || !i) return;var s = this.getTipElement(),
            a = d.getUID(this.constructor.NAME);s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && o.default(s).addClass("fade");var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
            c = this._getAttachment(l);this.addAttachmentClass(c);var u = this._getContainer();o.default(s).data(this.constructor.DATA_KEY, this), o.default.contains(this.element.ownerDocument.documentElement, this.tip) || o.default(s).appendTo(u), o.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new r.default(this.element, s, this._getPopperConfig(c)), o.default(s).addClass("show"), "ontouchstart" in document.documentElement && o.default(document.body).children().on("mouseover", null, o.default.noop);var f = function f() {
          e.config.animation && e._fixTransition();var t = e._hoverState;e._hoverState = null, o.default(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e);
        };if (o.default(this.tip).hasClass("fade")) {
          var h = d.getTransitionDurationFromElement(this.tip);o.default(this.tip).one(d.TRANSITION_END, f).emulateTransitionEnd(h);
        } else f();
      }
    }, t.hide = function (e) {
      var t = this,
          n = this.getTipElement(),
          i = o.default.Event(this.constructor.Event.HIDE),
          r = function r() {
        "show" !== t._hoverState && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), o.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e();
      };if (o.default(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (o.default(n).removeClass("show"), "ontouchstart" in document.documentElement && o.default(document.body).children().off("mouseover", null, o.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, o.default(this.tip).hasClass("fade")) {
          var s = d.getTransitionDurationFromElement(n);o.default(n).one(d.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (e) {
      o.default(this.getTipElement()).addClass("bs-tooltip-" + e);
    }, t.getTipElement = function () {
      return this.tip = this.tip || o.default(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var e = this.getTipElement();this.setElementContent(o.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), o.default(e).removeClass("fade show");
    }, t.setElementContent = function (e, t) {
      "object" != (typeof t === "undefined" ? "undefined" : _typeof(t)) || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = $(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? o.default(t).parent().is(e) || e.empty().append(t) : e.text(o.default(t).text());
    }, t.getTitle = function () {
      var e = this.element.getAttribute("data-original-title");return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
    }, t._getPopperConfig = function (e) {
      var t = this;return l({}, { placement: e, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(e) {
          e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
        }, onUpdate: function onUpdate(e) {
          return t._handlePopperPlacementChange(e);
        } }, this.config.popperConfig);
    }, t._getOffset = function () {
      var e = this,
          t = {};return "function" == typeof this.config.offset ? t.fn = function (t) {
        return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
      } : t.offset = this.config.offset, t;
    }, t._getContainer = function () {
      return !1 === this.config.container ? document.body : d.isElement(this.config.container) ? o.default(this.config.container) : o.default(document).find(this.config.container);
    }, t._getAttachment = function (e) {
      return G[e.toUpperCase()];
    }, t._setListeners = function () {
      var e = this;this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) o.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
          return e.toggle(t);
        });else if ("manual" !== t) {
          var n = "hover" === t ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
              i = "hover" === t ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;o.default(e.element).on(n, e.config.selector, function (t) {
            return e._enter(t);
          }).on(i, e.config.selector, function (t) {
            return e._leave(t);
          });
        }
      }), this._hideModalHandler = function () {
        e.element && e.hide();
      }, o.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, t._fixTitle = function () {
      var e = _typeof(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (e, t) {
      var n = this.constructor.DATA_KEY;(t = t || o.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), o.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), o.default(t.getTipElement()).hasClass("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
        "show" === t._hoverState && t.show();
      }, t.config.delay.show) : t.show());
    }, t._leave = function (e, t) {
      var n = this.constructor.DATA_KEY;(t = t || o.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), o.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
        "out" === t._hoverState && t.hide();
      }, t.config.delay.hide) : t.hide());
    }, t._isWithActiveTrigger = function () {
      for (var e in this._activeTrigger) {
        if (this._activeTrigger[e]) return !0;
      }return !1;
    }, t._getConfig = function (e) {
      var t = o.default(this.element).data();return Object.keys(t).forEach(function (e) {
        -1 !== Y.indexOf(e) && delete t[e];
      }), "number" == typeof (e = l({}, this.constructor.Default, t, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), d.typeCheckConfig(Q, e, this.constructor.DefaultType), e.sanitize && (e.template = $(e.template, e.whiteList, e.sanitizeFn)), e;
    }, t._getDelegateConfig = function () {
      var e = {};if (this.config) for (var t in this.config) {
        this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
      }return e;
    }, t._cleanTipClass = function () {
      var e = o.default(this.getTipElement()),
          t = e.attr("class").match(X);null !== t && t.length && e.removeClass(t.join(""));
    }, t._handlePopperPlacementChange = function (e) {
      this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
    }, t._fixTransition = function () {
      var e = this.getTipElement(),
          t = this.config.animation;null === e.getAttribute("x-placement") && (o.default(e).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t);
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this),
            i = n.data("bs.tooltip"),
            r = "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t;if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, r), n.data("bs.tooltip", i)), "string" == typeof t)) {
          if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t]();
        }
      });
    }, a(e, null, [{ key: "VERSION", get: function get() {
        return "4.5.3";
      } }, { key: "Default", get: function get() {
        return J;
      } }, { key: "NAME", get: function get() {
        return Q;
      } }, { key: "DATA_KEY", get: function get() {
        return "bs.tooltip";
      } }, { key: "Event", get: function get() {
        return Z;
      } }, { key: "EVENT_KEY", get: function get() {
        return ".bs.tooltip";
      } }, { key: "DefaultType", get: function get() {
        return K;
      } }]), e;
  }();o.default.fn.tooltip = ee._jQueryInterface, o.default.fn.tooltip.Constructor = ee, o.default.fn.tooltip.noConflict = function () {
    return o.default.fn.tooltip = V, ee._jQueryInterface;
  };var te = "popover",
      ne = o.default.fn.popover,
      ie = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      oe = l({}, ee.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
      re = l({}, ee.DefaultType, { content: "(string|element|function)" }),
      se = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" },
      ae = function (e) {
    var t, n;function i() {
      return e.apply(this, arguments) || this;
    }n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;var r = i.prototype;return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.addAttachmentClass = function (e) {
      o.default(this.getTipElement()).addClass("bs-popover-" + e);
    }, r.getTipElement = function () {
      return this.tip = this.tip || o.default(this.config.template)[0], this.tip;
    }, r.setContent = function () {
      var e = o.default(this.getTipElement());this.setElementContent(e.find(".popover-header"), this.getTitle());var t = this._getContent();"function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show");
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var e = o.default(this.getTipElement()),
          t = e.attr("class").match(ie);null !== t && t.length > 0 && e.removeClass(t.join(""));
    }, i._jQueryInterface = function (e) {
      return this.each(function () {
        var t = o.default(this).data("bs.popover"),
            n = "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null;if ((t || !/dispose|hide/.test(e)) && (t || (t = new i(this, n), o.default(this).data("bs.popover", t)), "string" == typeof e)) {
          if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
        }
      });
    }, a(i, null, [{ key: "VERSION", get: function get() {
        return "4.5.3";
      } }, { key: "Default", get: function get() {
        return oe;
      } }, { key: "NAME", get: function get() {
        return te;
      } }, { key: "DATA_KEY", get: function get() {
        return "bs.popover";
      } }, { key: "Event", get: function get() {
        return se;
      } }, { key: "EVENT_KEY", get: function get() {
        return ".bs.popover";
      } }, { key: "DefaultType", get: function get() {
        return re;
      } }]), i;
  }(ee);o.default.fn.popover = ae._jQueryInterface, o.default.fn.popover.Constructor = ae, o.default.fn.popover.noConflict = function () {
    return o.default.fn.popover = ne, ae._jQueryInterface;
  };var le = "scrollspy",
      ce = o.default.fn[le],
      ue = { offset: 10, method: "auto", target: "" },
      de = { offset: "number", method: "string", target: "(string|element)" },
      fe = "scroll.bs.scrollspy",
      he = ".nav-link",
      pe = ".list-group-item",
      me = ".dropdown-item",
      ge = function () {
    function e(e, t) {
      var n = this;this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + he + "," + this._config.target + " " + pe + "," + this._config.target + " " + me, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, o.default(this._scrollElement).on(fe, function (e) {
        return n._process(e);
      }), this.refresh(), this._process();
    }var t = e.prototype;return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
          n = "auto" === this._config.method ? t : this._config.method,
          i = "position" === n ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
        var t,
            r = d.getSelectorFromElement(e);if (r && (t = document.querySelector(r)), t) {
          var s = t.getBoundingClientRect();if (s.width || s.height) return [o.default(t)[n]().top + i, r];
        }return null;
      }).filter(function (e) {
        return e;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      o.default.removeData(this._element, "bs.scrollspy"), o.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (e) {
      if ("string" != typeof (e = l({}, ue, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e ? e : {})).target && d.isElement(e.target)) {
        var t = o.default(e.target).attr("id");t || (t = d.getUID(le), o.default(e.target).attr("id", t)), e.target = "#" + t;
      }return d.typeCheckConfig(le, e, de), e;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();if (this._scrollHeight !== t && this.refresh(), e >= n) {
        var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();var t = this._selector.split(",").map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      }),
          n = o.default([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active")) : (n.addClass("active"), n.parents(".nav, .list-group").prev(he + ", " + pe).addClass("active"), n.parents(".nav, .list-group").prev(".nav-item").children(he).addClass("active")), o.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: e });
    }, t._clear = function () {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
        return e.classList.contains("active");
      }).forEach(function (e) {
        return e.classList.remove("active");
      });
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this).data("bs.scrollspy");if (n || (n = new e(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), o.default(this).data("bs.scrollspy", n)), "string" == typeof t) {
          if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');n[t]();
        }
      });
    }, a(e, null, [{ key: "VERSION", get: function get() {
        return "4.5.3";
      } }, { key: "Default", get: function get() {
        return ue;
      } }]), e;
  }();o.default(window).on("load.bs.scrollspy.data-api", function () {
    for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
      var n = o.default(e[t]);ge._jQueryInterface.call(n, n.data());
    }
  }), o.default.fn[le] = ge._jQueryInterface, o.default.fn[le].Constructor = ge, o.default.fn[le].noConflict = function () {
    return o.default.fn[le] = ce, ge._jQueryInterface;
  };var ve = o.default.fn.tab,
      ye = function () {
    function e(e) {
      this._element = e;
    }var t = e.prototype;return t.show = function () {
      var e = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && o.default(this._element).hasClass("active") || o.default(this._element).hasClass("disabled"))) {
        var t,
            n,
            i = o.default(this._element).closest(".nav, .list-group")[0],
            r = d.getSelectorFromElement(this._element);if (i) {
          var s = "UL" === i.nodeName || "OL" === i.nodeName ? "> li > .active" : ".active";n = (n = o.default.makeArray(o.default(i).find(s)))[n.length - 1];
        }var a = o.default.Event("hide.bs.tab", { relatedTarget: this._element }),
            l = o.default.Event("show.bs.tab", { relatedTarget: n });if (n && o.default(n).trigger(a), o.default(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
          r && (t = document.querySelector(r)), this._activate(this._element, i);var c = function c() {
            var t = o.default.Event("hidden.bs.tab", { relatedTarget: e._element }),
                i = o.default.Event("shown.bs.tab", { relatedTarget: n });o.default(n).trigger(t), o.default(e._element).trigger(i);
          };t ? this._activate(t, t.parentNode, c) : c();
        }
      }
    }, t.dispose = function () {
      o.default.removeData(this._element, "bs.tab"), this._element = null;
    }, t._activate = function (e, t, n) {
      var i = this,
          r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? o.default(t).children(".active") : o.default(t).find("> li > .active"))[0],
          s = n && r && o.default(r).hasClass("fade"),
          a = function a() {
        return i._transitionComplete(e, r, n);
      };if (r && s) {
        var l = d.getTransitionDurationFromElement(r);o.default(r).removeClass("show").one(d.TRANSITION_END, a).emulateTransitionEnd(l);
      } else a();
    }, t._transitionComplete = function (e, t, n) {
      if (t) {
        o.default(t).removeClass("active");var i = o.default(t.parentNode).find("> .dropdown-menu .active")[0];i && o.default(i).removeClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
      }if (o.default(e).addClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), d.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && o.default(e.parentNode).hasClass("dropdown-menu")) {
        var r = o.default(e).closest(".dropdown")[0];if (r) {
          var s = [].slice.call(r.querySelectorAll(".dropdown-toggle"));o.default(s).addClass("active");
        }e.setAttribute("aria-expanded", !0);
      }n && n();
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this),
            i = n.data("bs.tab");if (i || (i = new e(this), n.data("bs.tab", i)), "string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t]();
        }
      });
    }, a(e, null, [{ key: "VERSION", get: function get() {
        return "4.5.3";
      } }]), e;
  }();o.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
    e.preventDefault(), ye._jQueryInterface.call(o.default(this), "show");
  }), o.default.fn.tab = ye._jQueryInterface, o.default.fn.tab.Constructor = ye, o.default.fn.tab.noConflict = function () {
    return o.default.fn.tab = ve, ye._jQueryInterface;
  };var be = o.default.fn.toast,
      we = { animation: "boolean", autohide: "boolean", delay: "number" },
      _e = { animation: !0, autohide: !0, delay: 500 },
      xe = function () {
    function e(e, t) {
      this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners();
    }var t = e.prototype;return t.show = function () {
      var e = this,
          t = o.default.Event("show.bs.toast");if (o.default(this._element).trigger(t), !t.isDefaultPrevented()) {
        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");var n = function n() {
          e._element.classList.remove("showing"), e._element.classList.add("show"), o.default(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout(function () {
            e.hide();
          }, e._config.delay));
        };if (this._element.classList.remove("hide"), d.reflow(this._element), this._element.classList.add("showing"), this._config.animation) {
          var i = d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END, n).emulateTransitionEnd(i);
        } else n();
      }
    }, t.hide = function () {
      if (this._element.classList.contains("show")) {
        var e = o.default.Event("hide.bs.toast");o.default(this._element).trigger(e), e.isDefaultPrevented() || this._close();
      }
    }, t.dispose = function () {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), o.default(this._element).off("click.dismiss.bs.toast"), o.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null;
    }, t._getConfig = function (e) {
      return e = l({}, _e, o.default(this._element).data(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e ? e : {}), d.typeCheckConfig("toast", e, this.constructor.DefaultType), e;
    }, t._setListeners = function () {
      var e = this;o.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
        return e.hide();
      });
    }, t._close = function () {
      var e = this,
          t = function t() {
        e._element.classList.add("hide"), o.default(e._element).trigger("hidden.bs.toast");
      };if (this._element.classList.remove("show"), this._config.animation) {
        var n = d.getTransitionDurationFromElement(this._element);o.default(this._element).one(d.TRANSITION_END, t).emulateTransitionEnd(n);
      } else t();
    }, t._clearTimeout = function () {
      clearTimeout(this._timeout), this._timeout = null;
    }, e._jQueryInterface = function (t) {
      return this.each(function () {
        var n = o.default(this),
            i = n.data("bs.toast");if (i || (i = new e(this, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t), n.data("bs.toast", i)), "string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');i[t](this);
        }
      });
    }, a(e, null, [{ key: "VERSION", get: function get() {
        return "4.5.3";
      } }, { key: "DefaultType", get: function get() {
        return we;
      } }, { key: "Default", get: function get() {
        return _e;
      } }]), e;
  }();o.default.fn.toast = xe._jQueryInterface, o.default.fn.toast.Constructor = xe, o.default.fn.toast.noConflict = function () {
    return o.default.fn.toast = be, xe._jQueryInterface;
  }, e.Alert = h, e.Button = m, e.Carousel = E, e.Collapse = A, e.Dropdown = O, e.Modal = H, e.Popover = ae, e.Scrollspy = ge, e.Tab = ye, e.Toast = xe, e.Tooltip = ee, e.Util = d, Object.defineProperty(e, "__esModule", { value: !0 });
}), function (e) {
  "use strict";
  function t(t) {
    return t.is('[type="checkbox"]') ? t.prop("checked") : t.is('[type="radio"]') ? !!e('[name="' + t.attr("name") + '"]:checked').length : t.is("select[multiple]") ? (t.val() || []).length : t.val();
  }var n = function n(i, o) {
    this.options = o, this.validators = e.extend({}, n.VALIDATORS, o.custom), this.$element = e(i), this.$btn = e('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), this.update(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", e.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", e.proxy(this.onSubmit, this)), this.$element.on("reset.bs.validator", e.proxy(this.reset, this)), this.$element.find("[data-match]").each(function () {
      var n = e(this),
          i = n.attr("data-match");e(i).on("input.bs.validator", function (e) {
        t(n) && n.trigger("input.bs.validator");
      });
    }), this.$inputs.filter(function () {
      return t(e(this)) && !e(this).closest(".has-error").length;
    }).trigger("focusout"), this.$element.attr("novalidate", !0);
  };function i(t) {
    return this.each(function () {
      var i = e(this),
          o = e.extend({}, n.DEFAULTS, i.data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t),
          r = i.data("bs.validator");(r || "destroy" != t) && (r || i.data("bs.validator", r = new n(this, o)), "string" == typeof t && r[t]());
    });
  }n.VERSION = "0.11.9", n.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)', n.FOCUS_OFFSET = 20, n.DEFAULTS = { delay: 500, html: !1, disable: !0, focus: !0, custom: {}, errors: { match: "Does not match", minlength: "Not long enough" }, feedback: { success: "glyphicon-ok", error: "glyphicon-remove" } }, n.VALIDATORS = { native: function native(e) {
      var t = e[0];if (t.checkValidity) return !t.checkValidity() && !t.validity.valid && (t.validationMessage || "error!");
    }, match: function match(t) {
      var i = t.attr("data-match");return t.val() !== e(i).val() && n.DEFAULTS.errors.match;
    }, minlength: function minlength(e) {
      var t = e.attr("data-minlength");return e.val().length < t && n.DEFAULTS.errors.minlength;
    } }, n.prototype.update = function () {
    var t = this;return this.$inputs = this.$element.find(n.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]').each(function () {
      t.clearErrors(e(this));
    })), this.toggleSubmit(), this;
  }, n.prototype.onInput = function (t) {
    var n = this,
        i = e(t.target),
        o = "focusout" !== t.type;this.$inputs.is(i) && this.validateInput(i, o).done(function () {
      n.toggleSubmit();
    });
  }, n.prototype.validateInput = function (n, i) {
    t(n);var o = n.data("bs.validator.errors");n.is('[type="radio"]') && (n = this.$element.find('input[name="' + n.attr("name") + '"]'));var r = e.Event("validate.bs.validator", { relatedTarget: n[0] });if (this.$element.trigger(r), !r.isDefaultPrevented()) {
      var s = this;return this.runValidators(n).done(function (t) {
        n.data("bs.validator.errors", t), t.length ? i ? s.defer(n, s.showErrors) : s.showErrors(n) : s.clearErrors(n), o && t.toString() === o.toString() || (r = t.length ? e.Event("invalid.bs.validator", { relatedTarget: n[0], detail: t }) : e.Event("valid.bs.validator", { relatedTarget: n[0], detail: o }), s.$element.trigger(r)), s.toggleSubmit(), s.$element.trigger(e.Event("validated.bs.validator", { relatedTarget: n[0] }));
      });
    }
  }, n.prototype.runValidators = function (n) {
    var i = [],
        o = e.Deferred();function r(e) {
      return function (e) {
        return n.attr("data-" + e + "-error");
      }(e) || ((t = n[0].validity).typeMismatch ? n.attr("data-type-error") : t.patternMismatch ? n.attr("data-pattern-error") : t.stepMismatch ? n.attr("data-step-error") : t.rangeOverflow ? n.attr("data-max-error") : t.rangeUnderflow ? n.attr("data-min-error") : t.valueMissing ? n.attr("data-required-error") : null) || n.attr("data-error");var t;
    }return n.data("bs.validator.deferred") && n.data("bs.validator.deferred").reject(), n.data("bs.validator.deferred", o), e.each(this.validators, e.proxy(function (e, o) {
      var s = null;!t(n) && !n.attr("required") || void 0 === n.attr("data-" + e) && "native" != e || !(s = o.call(this, n)) || (s = r(e) || s, !~i.indexOf(s) && i.push(s));
    }, this)), !i.length && t(n) && n.attr("data-remote") ? this.defer(n, function () {
      var s = {};s[n.attr("name")] = t(n), e.get(n.attr("data-remote"), s).fail(function (e, t, n) {
        i.push(r("remote") || n);
      }).always(function () {
        o.resolve(i);
      });
    }) : o.resolve(i), o.promise();
  }, n.prototype.validate = function () {
    var t = this;return e.when(this.$inputs.map(function (n) {
      return t.validateInput(e(this), !1);
    })).then(function () {
      t.toggleSubmit(), t.focusError();
    }), this;
  }, n.prototype.focusError = function () {
    if (this.options.focus) {
      var t = this.$element.find(".has-error:first :input");0 !== t.length && (e("html, body").animate({ scrollTop: t.offset().top - n.FOCUS_OFFSET }, 250), t.focus());
    }
  }, n.prototype.showErrors = function (t) {
    var n = this.options.html ? "html" : "text",
        i = t.data("bs.validator.errors"),
        o = t.closest(".form-group"),
        r = o.find(".help-block.with-errors"),
        s = o.find(".form-control-feedback");i.length && (i = e("<ul/>").addClass("list-unstyled").append(e.map(i, function (t) {
      return e("<li/>")[n](t);
    })), void 0 === r.data("bs.validator.originalContent") && r.data("bs.validator.originalContent", r.html()), r.empty().append(i), o.addClass("has-error has-danger"), o.hasClass("has-feedback") && s.removeClass(this.options.feedback.success) && s.addClass(this.options.feedback.error) && o.removeClass("has-success"));
  }, n.prototype.clearErrors = function (e) {
    var n = e.closest(".form-group"),
        i = n.find(".help-block.with-errors"),
        o = n.find(".form-control-feedback");i.html(i.data("bs.validator.originalContent")), n.removeClass("has-error has-danger has-success"), n.hasClass("has-feedback") && o.removeClass(this.options.feedback.error) && o.removeClass(this.options.feedback.success) && t(e) && o.addClass(this.options.feedback.success) && n.addClass("has-success");
  }, n.prototype.hasErrors = function () {
    return !!this.$inputs.filter(function () {
      return !!(e(this).data("bs.validator.errors") || []).length;
    }).length;
  }, n.prototype.isIncomplete = function () {
    return !!this.$inputs.filter("[required]").filter(function () {
      var n = t(e(this));return !("string" == typeof n ? e.trim(n) : n);
    }).length;
  }, n.prototype.onSubmit = function (e) {
    this.validate(), (this.isIncomplete() || this.hasErrors()) && e.preventDefault();
  }, n.prototype.toggleSubmit = function () {
    this.options.disable && this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors());
  }, n.prototype.defer = function (t, n) {
    if (n = e.proxy(n, this, t), !this.options.delay) return n();window.clearTimeout(t.data("bs.validator.timeout")), t.data("bs.validator.timeout", window.setTimeout(n, this.options.delay));
  }, n.prototype.reset = function () {
    return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success), this.$inputs.removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function () {
      var t = e(this),
          n = t.data("bs.validator.timeout");window.clearTimeout(n) && t.removeData("bs.validator.timeout");
    }), this.$element.find(".help-block.with-errors").each(function () {
      var t = e(this),
          n = t.data("bs.validator.originalContent");t.removeData("bs.validator.originalContent").html(n);
    }), this.$btn.removeClass("disabled"), this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"), this;
  }, n.prototype.destroy = function () {
    return this.reset(), this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$inputs.off(".bs.validator"), this.options = null, this.validators = null, this.$element = null, this.$btn = null, this.$inputs = null, this;
  };var o = e.fn.validator;e.fn.validator = i, e.fn.validator.Constructor = n, e.fn.validator.noConflict = function () {
    return e.fn.validator = o, this;
  }, e(window).on("load", function () {
    e('form[data-toggle="validator"]').each(function () {
      var t = e(this);i.call(t, t.data());
    });
  });
}(jQuery), function (e, t) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery);
}(window, function (e, t) {
  "use strict";
  var n = Array.prototype.slice,
      i = e.console,
      o = void 0 === i ? function () {} : function (e) {
    i.error(e);
  };function r(i, r, a) {
    (a = a || t || e.jQuery) && (r.prototype.option || (r.prototype.option = function (e) {
      a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e));
    }), a.fn[i] = function (e) {
      var t;return "string" == typeof e ? function (e, t, n) {
        var r,
            s = "$()." + i + '("' + t + '")';return e.each(function (e, l) {
          var c = a.data(l, i);if (c) {
            var u = c[t];if (u && "_" != t.charAt(0)) {
              var d = u.apply(c, n);r = void 0 === r ? d : r;
            } else o(s + " is not a valid method");
          } else o(i + " not initialized. Cannot call methods, i.e. " + s);
        }), void 0 !== r ? r : e;
      }(this, e, n.call(arguments, 1)) : (t = e, this.each(function (e, n) {
        var o = a.data(n, i);o ? (o.option(t), o._init()) : (o = new r(n, t), a.data(n, i, o));
      }), this);
    }, s(a));
  }function s(e) {
    !e || e && e.bridget || (e.bridget = r);
  }return s(t || e.jQuery), r;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.EvEmitter = t();
}("undefined" != typeof window ? window : this, function () {
  function e() {}var t = e.prototype;return t.on = function (e, t) {
    if (e && t) {
      var n = this._events = this._events || {},
          i = n[e] = n[e] || [];return -1 == i.indexOf(t) && i.push(t), this;
    }
  }, t.once = function (e, t) {
    if (e && t) {
      this.on(e, t);var n = this._onceEvents = this._onceEvents || {};return (n[e] = n[e] || {})[t] = !0, this;
    }
  }, t.off = function (e, t) {
    var n = this._events && this._events[e];if (n && n.length) {
      var i = n.indexOf(t);return -1 != i && n.splice(i, 1), this;
    }
  }, t.emitEvent = function (e, t) {
    var n = this._events && this._events[e];if (n && n.length) {
      n = n.slice(0), t = t || [];for (var i = this._onceEvents && this._onceEvents[e], o = 0; o < n.length; o++) {
        var r = n[o];i && i[r] && (this.off(e, r), delete i[r]), r.apply(this, t);
      }return this;
    }
  }, t.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, e;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.getSize = t();
}(window, function () {
  "use strict";
  function e(e) {
    var t = parseFloat(e);return -1 == e.indexOf("%") && !isNaN(t) && t;
  }var t = "undefined" == typeof console ? function () {} : function (e) {
    console.error(e);
  },
      n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      i = n.length;function o(e) {
    var n = getComputedStyle(e);return n || t("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), n;
  }var r,
      s = !1;function a(t) {
    if (function () {
      if (!s) {
        s = !0;var t = document.createElement("div");t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";var n = document.body || document.documentElement;n.appendChild(t);var i = o(t);r = 200 == Math.round(e(i.width)), a.isBoxSizeOuter = r, n.removeChild(t);
      }
    }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.nodeType) {
      var l = o(t);if ("none" == l.display) return function () {
        for (var e = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, t = 0; t < i; t++) {
          e[n[t]] = 0;
        }return e;
      }();var c = {};c.width = t.offsetWidth, c.height = t.offsetHeight;for (var u = c.isBorderBox = "border-box" == l.boxSizing, d = 0; d < i; d++) {
        var f = n[d],
            h = l[f],
            p = parseFloat(h);c[f] = isNaN(p) ? 0 : p;
      }var m = c.paddingLeft + c.paddingRight,
          g = c.paddingTop + c.paddingBottom,
          v = c.marginLeft + c.marginRight,
          y = c.marginTop + c.marginBottom,
          b = c.borderLeftWidth + c.borderRightWidth,
          w = c.borderTopWidth + c.borderBottomWidth,
          _ = u && r,
          x = e(l.width);!1 !== x && (c.width = x + (_ ? 0 : m + b));var E = e(l.height);return !1 !== E && (c.height = E + (_ ? 0 : g + w)), c.innerWidth = c.width - (m + b), c.innerHeight = c.height - (g + w), c.outerWidth = c.width + v, c.outerHeight = c.height + y, c;
    }
  }return a;
}), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.matchesSelector = t();
}(window, function () {
  "use strict";
  var e = function () {
    var e = window.Element.prototype;if (e.matches) return "matches";if (e.matchesSelector) return "matchesSelector";for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
      var i = t[n] + "MatchesSelector";if (e[i]) return i;
    }
  }();return function (t, n) {
    return t[e](n);
  };
}), function (e, t) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector);
}(window, function (e, t) {
  var n = { extend: function extend(e, t) {
      for (var n in t) {
        e[n] = t[n];
      }return e;
    }, modulo: function modulo(e, t) {
      return (e % t + t) % t;
    } },
      i = Array.prototype.slice;n.makeArray = function (e) {
    return Array.isArray(e) ? e : null === e || void 0 === e ? [] : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "number" == typeof e.length ? i.call(e) : [e];
  }, n.removeFrom = function (e, t) {
    var n = e.indexOf(t);-1 != n && e.splice(n, 1);
  }, n.getParent = function (e, n) {
    for (; e.parentNode && e != document.body;) {
      if (e = e.parentNode, t(e, n)) return e;
    }
  }, n.getQueryElement = function (e) {
    return "string" == typeof e ? document.querySelector(e) : e;
  }, n.handleEvent = function (e) {
    var t = "on" + e.type;this[t] && this[t](e);
  }, n.filterFindElements = function (e, i) {
    var o = [];return (e = n.makeArray(e)).forEach(function (e) {
      if (e instanceof HTMLElement) if (i) {
        t(e, i) && o.push(e);for (var n = e.querySelectorAll(i), r = 0; r < n.length; r++) {
          o.push(n[r]);
        }
      } else o.push(e);
    }), o;
  }, n.debounceMethod = function (e, t, n) {
    n = n || 100;var i = e.prototype[t],
        o = t + "Timeout";e.prototype[t] = function () {
      var e = this[o];clearTimeout(e);var t = arguments,
          r = this;this[o] = setTimeout(function () {
        i.apply(r, t), delete r[o];
      }, n);
    };
  }, n.docReady = function (e) {
    var t = document.readyState;"complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e);
  }, n.toDashed = function (e) {
    return e.replace(/(.)([A-Z])/g, function (e, t, n) {
      return t + "-" + n;
    }).toLowerCase();
  };var o = e.console;return n.htmlInit = function (t, i) {
    n.docReady(function () {
      var r = n.toDashed(i),
          s = "data-" + r,
          a = document.querySelectorAll("[" + s + "]"),
          l = document.querySelectorAll(".js-" + r),
          c = n.makeArray(a).concat(n.makeArray(l)),
          u = s + "-options",
          d = e.jQuery;c.forEach(function (e) {
        var n,
            r = e.getAttribute(s) || e.getAttribute(u);try {
          n = r && JSON.parse(r);
        } catch (t) {
          return void (o && o.error("Error parsing " + s + " on " + e.className + ": " + t));
        }var a = new t(e, n);d && d.data(e, i, a);
      });
    });
  }, n;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("get-size")) : (e.Flickity = e.Flickity || {}, e.Flickity.Cell = t(e, e.getSize));
}(window, function (e, t) {
  function n(e, t) {
    this.element = e, this.parent = t, this.create();
  }var i = n.prototype;return i.create = function () {
    this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0;
  }, i.destroy = function () {
    this.unselect(), this.element.style.position = "";var e = this.parent.originSide;this.element.style[e] = "";
  }, i.getSize = function () {
    this.size = t(this.element);
  }, i.setPosition = function (e) {
    this.x = e, this.updateTarget(), this.renderPosition(e);
  }, i.updateTarget = i.setDefaultTarget = function () {
    var e = "left" == this.parent.originSide ? "marginLeft" : "marginRight";this.target = this.x + this.size[e] + this.size.width * this.parent.cellAlign;
  }, i.renderPosition = function (e) {
    var t = this.parent.originSide;this.element.style[t] = this.parent.getPositionValue(e);
  }, i.select = function () {
    this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden");
  }, i.unselect = function () {
    this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true");
  }, i.wrapShift = function (e) {
    this.shift = e, this.renderPosition(this.x + this.parent.slideableWidth * e);
  }, i.remove = function () {
    this.element.parentNode.removeChild(this.element);
  }, n;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/slide", t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : (e.Flickity = e.Flickity || {}, e.Flickity.Slide = t());
}(window, function () {
  "use strict";
  function e(e) {
    this.parent = e, this.isOriginLeft = "left" == e.originSide, this.cells = [], this.outerWidth = 0, this.height = 0;
  }var t = e.prototype;return t.addCell = function (e) {
    if (this.cells.push(e), this.outerWidth += e.size.outerWidth, this.height = Math.max(e.size.outerHeight, this.height), 1 == this.cells.length) {
      this.x = e.x;var t = this.isOriginLeft ? "marginLeft" : "marginRight";this.firstMargin = e.size[t];
    }
  }, t.updateTarget = function () {
    var e = this.isOriginLeft ? "marginRight" : "marginLeft",
        t = this.getLastCell(),
        n = t ? t.size[e] : 0,
        i = this.outerWidth - (this.firstMargin + n);this.target = this.x + this.firstMargin + i * this.parent.cellAlign;
  }, t.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  }, t.select = function () {
    this.cells.forEach(function (e) {
      e.select();
    });
  }, t.unselect = function () {
    this.cells.forEach(function (e) {
      e.unselect();
    });
  }, t.getCellElements = function () {
    return this.cells.map(function (e) {
      return e.element;
    });
  }, e;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("fizzy-ui-utils")) : (e.Flickity = e.Flickity || {}, e.Flickity.animatePrototype = t(e, e.fizzyUIUtils));
}(window, function (e, t) {
  var n = { startAnimation: function startAnimation() {
      this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate());
    }, animate: function animate() {
      this.applyDragForce(), this.applySelectedAttraction();var e = this.x;if (this.integratePhysics(), this.positionSlider(), this.settle(e), this.isAnimating) {
        var t = this;requestAnimationFrame(function () {
          t.animate();
        });
      }
    }, positionSlider: function positionSlider() {
      var e = this.x;this.options.wrapAround && this.cells.length > 1 && (e = t.modulo(e, this.slideableWidth), e -= this.slideableWidth, this.shiftWrapCells(e)), this.setTranslateX(e, this.isAnimating), this.dispatchScrollEvent();
    }, setTranslateX: function setTranslateX(e, t) {
      e += this.cursorPosition, e = this.options.rightToLeft ? -e : e;var n = this.getPositionValue(e);this.slider.style.transform = t ? "translate3d(" + n + ",0,0)" : "translateX(" + n + ")";
    }, dispatchScrollEvent: function dispatchScrollEvent() {
      var e = this.slides[0];if (e) {
        var t = -this.x - e.target,
            n = t / this.slidesWidth;this.dispatchEvent("scroll", null, [n, t]);
      }
    }, positionSliderAtSelected: function positionSliderAtSelected() {
      this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider());
    }, getPositionValue: function getPositionValue(e) {
      return this.options.percentPosition ? .01 * Math.round(e / this.size.innerWidth * 1e4) + "%" : Math.round(e) + "px";
    }, settle: function settle(e) {
      this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * e) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]));
    }, shiftWrapCells: function shiftWrapCells(e) {
      var t = this.cursorPosition + e;this._shiftCells(this.beforeShiftCells, t, -1);var n = this.size.innerWidth - (e + this.slideableWidth + this.cursorPosition);this._shiftCells(this.afterShiftCells, n, 1);
    }, _shiftCells: function _shiftCells(e, t, n) {
      for (var i = 0; i < e.length; i++) {
        var o = e[i],
            r = t > 0 ? n : 0;o.wrapShift(r), t -= o.size.outerWidth;
      }
    }, _unshiftCells: function _unshiftCells(e) {
      if (e && e.length) for (var t = 0; t < e.length; t++) {
        e[t].wrapShift(0);
      }
    }, integratePhysics: function integratePhysics() {
      this.x += this.velocity, this.velocity *= this.getFrictionFactor();
    }, applyForce: function applyForce(e) {
      this.velocity += e;
    }, getFrictionFactor: function getFrictionFactor() {
      return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
    }, getRestingPosition: function getRestingPosition() {
      return this.x + this.velocity / (1 - this.getFrictionFactor());
    }, applyDragForce: function applyDragForce() {
      if (this.isDraggable && this.isPointerDown) {
        var e = this.dragX - this.x - this.velocity;this.applyForce(e);
      }
    }, applySelectedAttraction: function applySelectedAttraction() {
      if (!(this.isDraggable && this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
        var e = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;this.applyForce(e);
      }
    } };return n;
}), function (e, t) {
  if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (n, i, o, r, s, a) {
    return t(e, n, i, o, r, s, a);
  });else if ("object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports) module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));else {
    var n = e.Flickity;e.Flickity = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, n.Cell, n.Slide, n.animatePrototype);
  }
}(window, function (e, t, n, i, o, r, s) {
  var a = e.jQuery,
      l = e.getComputedStyle,
      c = e.console;function u(e, t) {
    for (e = i.makeArray(e); e.length;) {
      t.appendChild(e.shift());
    }
  }var d = 0,
      f = {};function h(e, t) {
    var n = i.getQueryElement(e);if (n) {
      if (this.element = n, this.element.flickityGUID) {
        var o = f[this.element.flickityGUID];return o.option(t), o;
      }a && (this.$element = a(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(t), this._create();
    } else c && c.error("Bad element for Flickity: " + (n || e));
  }h.defaults = { accessibility: !0, cellAlign: "center", freeScrollFriction: .075, friction: .28, namespaceJQueryEvents: !0, percentPosition: !0, resize: !0, selectedAttraction: .025, setGallerySize: !0 }, h.createMethods = [];var p = h.prototype;i.extend(p, t.prototype), p._create = function () {
    var t = this.guid = ++d;for (var n in this.element.flickityGUID = t, f[t] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && e.addEventListener("resize", this), this.options.on) {
      var i = this.options.on[n];this.on(n, i);
    }h.createMethods.forEach(function (e) {
      this[e]();
    }, this), this.options.watchCSS ? this.watchCSS() : this.activate();
  }, p.option = function (e) {
    i.extend(this.options, e);
  }, p.activate = function () {
    this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), u(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"));
  }, p._createSlider = function () {
    var e = document.createElement("div");e.className = "flickity-slider", e.style[this.originSide] = 0, this.slider = e;
  }, p._filterFindCellElements = function (e) {
    return i.filterFindElements(e, this.options.cellSelector);
  }, p.reloadCells = function () {
    this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize();
  }, p._makeCells = function (e) {
    return this._filterFindCellElements(e).map(function (e) {
      return new o(e, this);
    }, this);
  }, p.getLastCell = function () {
    return this.cells[this.cells.length - 1];
  }, p.getLastSlide = function () {
    return this.slides[this.slides.length - 1];
  }, p.positionCells = function () {
    this._sizeCells(this.cells), this._positionCells(0);
  }, p._positionCells = function (e) {
    e = e || 0, this.maxCellHeight = e && this.maxCellHeight || 0;var t = 0;if (e > 0) {
      var n = this.cells[e - 1];t = n.x + n.size.outerWidth;
    }for (var i = this.cells.length, o = e; o < i; o++) {
      var r = this.cells[o];r.setPosition(t), t += r.size.outerWidth, this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight);
    }this.slideableWidth = t, this.updateSlides(), this._containSlides(), this.slidesWidth = i ? this.getLastSlide().target - this.slides[0].target : 0;
  }, p._sizeCells = function (e) {
    e.forEach(function (e) {
      e.getSize();
    });
  }, p.updateSlides = function () {
    if (this.slides = [], this.cells.length) {
      var e = new r(this);this.slides.push(e);var t = "left" == this.originSide ? "marginRight" : "marginLeft",
          n = this._getCanCellFit();this.cells.forEach(function (i, o) {
        if (e.cells.length) {
          var s = e.outerWidth - e.firstMargin + (i.size.outerWidth - i.size[t]);n.call(this, o, s) ? e.addCell(i) : (e.updateTarget(), e = new r(this), this.slides.push(e), e.addCell(i));
        } else e.addCell(i);
      }, this), e.updateTarget(), this.updateSelectedSlide();
    }
  }, p._getCanCellFit = function () {
    var e = this.options.groupCells;if (!e) return function () {
      return !1;
    };if ("number" == typeof e) {
      var t = parseInt(e, 10);return function (e) {
        return e % t != 0;
      };
    }var n = "string" == typeof e && e.match(/^(\d+)%$/),
        i = n ? parseInt(n[1], 10) / 100 : 1;return function (e, t) {
      return t <= (this.size.innerWidth + 1) * i;
    };
  }, p._init = p.reposition = function () {
    this.positionCells(), this.positionSliderAtSelected();
  }, p.getSize = function () {
    this.size = n(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign;
  };var m = { center: { left: .5, right: .5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } };return p.setCellAlign = function () {
    var e = m[this.options.cellAlign];this.cellAlign = e ? e[this.originSide] : this.options.cellAlign;
  }, p.setGallerySize = function () {
    if (this.options.setGallerySize) {
      var e = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;this.viewport.style.height = e + "px";
    }
  }, p._getWrapShiftCells = function () {
    if (this.options.wrapAround) {
      this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);var e = this.cursorPosition,
          t = this.cells.length - 1;this.beforeShiftCells = this._getGapCells(e, t, -1), e = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(e, 0, 1);
    }
  }, p._getGapCells = function (e, t, n) {
    for (var i = []; e > 0;) {
      var o = this.cells[t];if (!o) break;i.push(o), t += n, e -= o.size.outerWidth;
    }return i;
  }, p._containSlides = function () {
    if (this.options.contain && !this.options.wrapAround && this.cells.length) {
      var e = this.options.rightToLeft,
          t = e ? "marginRight" : "marginLeft",
          n = e ? "marginLeft" : "marginRight",
          i = this.slideableWidth - this.getLastCell().size[n],
          o = i < this.size.innerWidth,
          r = this.cursorPosition + this.cells[0].size[t],
          s = i - this.size.innerWidth * (1 - this.cellAlign);this.slides.forEach(function (e) {
        o ? e.target = i * this.cellAlign : (e.target = Math.max(e.target, r), e.target = Math.min(e.target, s));
      }, this);
    }
  }, p.dispatchEvent = function (e, t, n) {
    var i = t ? [t].concat(n) : n;if (this.emitEvent(e, i), a && this.$element) {
      var o = e += this.options.namespaceJQueryEvents ? ".flickity" : "";if (t) {
        var r = a.Event(t);r.type = e, o = r;
      }this.$element.trigger(o, n);
    }
  }, p.select = function (e, t, n) {
    if (this.isActive && (e = parseInt(e, 10), this._wrapSelect(e), (this.options.wrapAround || t) && (e = i.modulo(e, this.slides.length)), this.slides[e])) {
      var o = this.selectedIndex;this.selectedIndex = e, this.updateSelectedSlide(), n ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [e]), e != o && this.dispatchEvent("change", null, [e]), this.dispatchEvent("cellSelect");
    }
  }, p._wrapSelect = function (e) {
    var t = this.slides.length;if (!(this.options.wrapAround && t > 1)) return e;var n = i.modulo(e, t),
        o = Math.abs(n - this.selectedIndex),
        r = Math.abs(n + t - this.selectedIndex),
        s = Math.abs(n - t - this.selectedIndex);!this.isDragSelect && r < o ? e += t : !this.isDragSelect && s < o && (e -= t), e < 0 ? this.x -= this.slideableWidth : e >= t && (this.x += this.slideableWidth);
  }, p.previous = function (e, t) {
    this.select(this.selectedIndex - 1, e, t);
  }, p.next = function (e, t) {
    this.select(this.selectedIndex + 1, e, t);
  }, p.updateSelectedSlide = function () {
    var e = this.slides[this.selectedIndex];e && (this.unselectSelectedSlide(), this.selectedSlide = e, e.select(), this.selectedCells = e.cells, this.selectedElements = e.getCellElements(), this.selectedCell = e.cells[0], this.selectedElement = this.selectedElements[0]);
  }, p.unselectSelectedSlide = function () {
    this.selectedSlide && this.selectedSlide.unselect();
  }, p.selectInitialIndex = function () {
    var e = this.options.initialIndex;if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);else {
      if (e && "string" == typeof e) if (this.queryCell(e)) return void this.selectCell(e, !1, !0);var t = 0;e && this.slides[e] && (t = e), this.select(t, !1, !0);
    }
  }, p.selectCell = function (e, t, n) {
    var i = this.queryCell(e);if (i) {
      var o = this.getCellSlideIndex(i);this.select(o, t, n);
    }
  }, p.getCellSlideIndex = function (e) {
    for (var t = 0; t < this.slides.length; t++) {
      if (-1 != this.slides[t].cells.indexOf(e)) return t;
    }
  }, p.getCell = function (e) {
    for (var t = 0; t < this.cells.length; t++) {
      var n = this.cells[t];if (n.element == e) return n;
    }
  }, p.getCells = function (e) {
    var t = [];return (e = i.makeArray(e)).forEach(function (e) {
      var n = this.getCell(e);n && t.push(n);
    }, this), t;
  }, p.getCellElements = function () {
    return this.cells.map(function (e) {
      return e.element;
    });
  }, p.getParentCell = function (e) {
    var t = this.getCell(e);return t || (e = i.getParent(e, ".flickity-slider > *"), this.getCell(e));
  }, p.getAdjacentCellElements = function (e, t) {
    if (!e) return this.selectedSlide.getCellElements();t = void 0 === t ? this.selectedIndex : t;var n = this.slides.length;if (1 + 2 * e >= n) return this.getCellElements();for (var o = [], r = t - e; r <= t + e; r++) {
      var s = this.options.wrapAround ? i.modulo(r, n) : r,
          a = this.slides[s];a && (o = o.concat(a.getCellElements()));
    }return o;
  }, p.queryCell = function (e) {
    if ("number" == typeof e) return this.cells[e];if ("string" == typeof e) {
      if (e.match(/^[#\.]?[\d\/]/)) return;e = this.element.querySelector(e);
    }return this.getCell(e);
  }, p.uiChange = function () {
    this.emitEvent("uiChange");
  }, p.childUIPointerDown = function (e) {
    "touchstart" != e.type && e.preventDefault(), this.focus();
  }, p.onresize = function () {
    this.watchCSS(), this.resize();
  }, i.debounceMethod(h, "onresize", 150), p.resize = function () {
    if (this.isActive) {
      this.getSize(), this.options.wrapAround && (this.x = i.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");var e = this.selectedElements && this.selectedElements[0];this.selectCell(e, !1, !0);
    }
  }, p.watchCSS = function () {
    this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate());
  }, p.onkeydown = function (e) {
    var t = document.activeElement && document.activeElement != this.element;if (this.options.accessibility && !t) {
      var n = h.keyboardHandlers[e.keyCode];n && n.call(this);
    }
  }, h.keyboardHandlers = { 37: function _() {
      var e = this.options.rightToLeft ? "next" : "previous";this.uiChange(), this[e]();
    }, 39: function _() {
      var e = this.options.rightToLeft ? "previous" : "next";this.uiChange(), this[e]();
    } }, p.focus = function () {
    var t = e.pageYOffset;this.element.focus({ preventScroll: !0 }), e.pageYOffset != t && e.scrollTo(e.pageXOffset, t);
  }, p.deactivate = function () {
    this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function (e) {
      e.destroy();
    }), this.element.removeChild(this.viewport), u(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"));
  }, p.destroy = function () {
    this.deactivate(), e.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), a && this.$element && a.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete f[this.guid];
  }, i.extend(p, s), h.data = function (e) {
    var t = (e = i.getQueryElement(e)) && e.flickityGUID;return t && f[t];
  }, i.htmlInit(h, "flickity"), a && a.bridget && a.bridget("flickity", h), h.setJQuery = function (e) {
    a = e;
  }, h.Cell = o, h.Slide = r, h;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("ev-emitter")) : e.Unipointer = t(e, e.EvEmitter);
}(window, function (e, t) {
  function n() {}var i = n.prototype = Object.create(t.prototype);i.bindStartEvent = function (e) {
    this._bindStartEvent(e, !0);
  }, i.unbindStartEvent = function (e) {
    this._bindStartEvent(e, !1);
  }, i._bindStartEvent = function (t, n) {
    var i = (n = void 0 === n || n) ? "addEventListener" : "removeEventListener",
        o = "mousedown";e.PointerEvent ? o = "pointerdown" : "ontouchstart" in e && (o = "touchstart"), t[i](o, this);
  }, i.handleEvent = function (e) {
    var t = "on" + e.type;this[t] && this[t](e);
  }, i.getTouch = function (e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t];if (n.identifier == this.pointerIdentifier) return n;
    }
  }, i.onmousedown = function (e) {
    var t = e.button;t && 0 !== t && 1 !== t || this._pointerDown(e, e);
  }, i.ontouchstart = function (e) {
    this._pointerDown(e, e.changedTouches[0]);
  }, i.onpointerdown = function (e) {
    this._pointerDown(e, e);
  }, i._pointerDown = function (e, t) {
    e.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDown(e, t));
  }, i.pointerDown = function (e, t) {
    this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]);
  };var o = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] };return i._bindPostStartEvents = function (t) {
    if (t) {
      var n = o[t.type];n.forEach(function (t) {
        e.addEventListener(t, this);
      }, this), this._boundPointerEvents = n;
    }
  }, i._unbindPostStartEvents = function () {
    this._boundPointerEvents && (this._boundPointerEvents.forEach(function (t) {
      e.removeEventListener(t, this);
    }, this), delete this._boundPointerEvents);
  }, i.onmousemove = function (e) {
    this._pointerMove(e, e);
  }, i.onpointermove = function (e) {
    e.pointerId == this.pointerIdentifier && this._pointerMove(e, e);
  }, i.ontouchmove = function (e) {
    var t = this.getTouch(e.changedTouches);t && this._pointerMove(e, t);
  }, i._pointerMove = function (e, t) {
    this.pointerMove(e, t);
  }, i.pointerMove = function (e, t) {
    this.emitEvent("pointerMove", [e, t]);
  }, i.onmouseup = function (e) {
    this._pointerUp(e, e);
  }, i.onpointerup = function (e) {
    e.pointerId == this.pointerIdentifier && this._pointerUp(e, e);
  }, i.ontouchend = function (e) {
    var t = this.getTouch(e.changedTouches);t && this._pointerUp(e, t);
  }, i._pointerUp = function (e, t) {
    this._pointerDone(), this.pointerUp(e, t);
  }, i.pointerUp = function (e, t) {
    this.emitEvent("pointerUp", [e, t]);
  }, i._pointerDone = function () {
    this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
  }, i._pointerReset = function () {
    this.isPointerDown = !1, delete this.pointerIdentifier;
  }, i.pointerDone = function () {}, i.onpointercancel = function (e) {
    e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e);
  }, i.ontouchcancel = function (e) {
    var t = this.getTouch(e.changedTouches);t && this._pointerCancel(e, t);
  }, i._pointerCancel = function (e, t) {
    this._pointerDone(), this.pointerCancel(e, t);
  }, i.pointerCancel = function (e, t) {
    this.emitEvent("pointerCancel", [e, t]);
  }, n.getPointerPoint = function (e) {
    return { x: e.pageX, y: e.pageY };
  }, n;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("unipointer")) : e.Unidragger = t(e, e.Unipointer);
}(window, function (e, t) {
  function n() {}var i = n.prototype = Object.create(t.prototype);i.bindHandles = function () {
    this._bindHandles(!0);
  }, i.unbindHandles = function () {
    this._bindHandles(!1);
  }, i._bindHandles = function (t) {
    for (var n = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener", i = t ? this._touchActionValue : "", o = 0; o < this.handles.length; o++) {
      var r = this.handles[o];this._bindStartEvent(r, t), r[n]("click", this), e.PointerEvent && (r.style.touchAction = i);
    }
  }, i._touchActionValue = "none", i.pointerDown = function (e, t) {
    this.okayPointerDown(e) && (this.pointerDownPointer = t, e.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]));
  };var o = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
      r = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };return i.okayPointerDown = function (e) {
    var t = o[e.target.nodeName],
        n = r[e.target.type],
        i = !t || n;return i || this._pointerReset(), i;
  }, i.pointerDownBlur = function () {
    var e = document.activeElement;e && e.blur && e != document.body && e.blur();
  }, i.pointerMove = function (e, t) {
    var n = this._dragPointerMove(e, t);this.emitEvent("pointerMove", [e, t, n]), this._dragMove(e, t, n);
  }, i._dragPointerMove = function (e, t) {
    var n = { x: t.pageX - this.pointerDownPointer.pageX, y: t.pageY - this.pointerDownPointer.pageY };return !this.isDragging && this.hasDragStarted(n) && this._dragStart(e, t), n;
  }, i.hasDragStarted = function (e) {
    return Math.abs(e.x) > 3 || Math.abs(e.y) > 3;
  }, i.pointerUp = function (e, t) {
    this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t);
  }, i._dragPointerUp = function (e, t) {
    this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t);
  }, i._dragStart = function (e, t) {
    this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(e, t);
  }, i.dragStart = function (e, t) {
    this.emitEvent("dragStart", [e, t]);
  }, i._dragMove = function (e, t, n) {
    this.isDragging && this.dragMove(e, t, n);
  }, i.dragMove = function (e, t, n) {
    e.preventDefault(), this.emitEvent("dragMove", [e, t, n]);
  }, i._dragEnd = function (e, t) {
    this.isDragging = !1, setTimeout(function () {
      delete this.isPreventingClicks;
    }.bind(this)), this.dragEnd(e, t);
  }, i.dragEnd = function (e, t) {
    this.emitEvent("dragEnd", [e, t]);
  }, i.onclick = function (e) {
    this.isPreventingClicks && e.preventDefault();
  }, i._staticClick = function (e, t) {
    this.isIgnoringMouseUp && "mouseup" == e.type || (this.staticClick(e, t), "mouseup" != e.type && (this.isIgnoringMouseUp = !0, setTimeout(function () {
      delete this.isIgnoringMouseUp;
    }.bind(this), 400)));
  }, i.staticClick = function (e, t) {
    this.emitEvent("staticClick", [e, t]);
  }, n.getPointerPoint = t.getPointerPoint, n;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (n, i, o) {
    return t(e, n, i, o);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : e.Flickity = t(e, e.Flickity, e.Unidragger, e.fizzyUIUtils);
}(window, function (e, t, n, i) {
  i.extend(t.defaults, { draggable: ">1", dragThreshold: 3 }), t.createMethods.push("_createDrag");var o = t.prototype;i.extend(o, n.prototype), o._touchActionValue = "pan-y";var r = "createTouch" in document,
      s = !1;o._createDrag = function () {
    this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), r && !s && (e.addEventListener("touchmove", function () {}), s = !0);
  }, o.onActivateDrag = function () {
    this.handles = [this.viewport], this.bindHandles(), this.updateDraggable();
  }, o.onDeactivateDrag = function () {
    this.unbindHandles(), this.element.classList.remove("is-draggable");
  }, o.updateDraggable = function () {
    ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable");
  }, o.bindDrag = function () {
    this.options.draggable = !0, this.updateDraggable();
  }, o.unbindDrag = function () {
    this.options.draggable = !1, this.updateDraggable();
  }, o._uiChangeDrag = function () {
    delete this.isFreeScrolling;
  }, o.pointerDown = function (t, n) {
    this.isDraggable ? this.okayPointerDown(t) && (this._pointerDownPreventDefault(t), this.pointerDownFocus(t), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), e.addEventListener("scroll", this), this._pointerDownDefault(t, n)) : this._pointerDownDefault(t, n);
  }, o._pointerDownDefault = function (e, t) {
    this.pointerDownPointer = { pageX: t.pageX, pageY: t.pageY }, this._bindPostStartEvents(e), this.dispatchEvent("pointerDown", e, [t]);
  };var a = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };function l() {
    return { x: e.pageXOffset, y: e.pageYOffset };
  }return o.pointerDownFocus = function (e) {
    a[e.target.nodeName] || this.focus();
  }, o._pointerDownPreventDefault = function (e) {
    var t = "touchstart" == e.type,
        n = "touch" == e.pointerType,
        i = a[e.target.nodeName];t || n || i || e.preventDefault();
  }, o.hasDragStarted = function (e) {
    return Math.abs(e.x) > this.options.dragThreshold;
  }, o.pointerUp = function (e, t) {
    delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", e, [t]), this._dragPointerUp(e, t);
  }, o.pointerDone = function () {
    e.removeEventListener("scroll", this), delete this.pointerDownScroll;
  }, o.dragStart = function (t, n) {
    this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), e.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [n]));
  }, o.pointerMove = function (e, t) {
    var n = this._dragPointerMove(e, t);this.dispatchEvent("pointerMove", e, [t, n]), this._dragMove(e, t, n);
  }, o.dragMove = function (e, t, n) {
    if (this.isDraggable) {
      e.preventDefault(), this.previousDragX = this.dragX;var i = this.options.rightToLeft ? -1 : 1;this.options.wrapAround && (n.x = n.x % this.slideableWidth);var o = this.dragStartPosition + n.x * i;if (!this.options.wrapAround && this.slides.length) {
        var r = Math.max(-this.slides[0].target, this.dragStartPosition);o = o > r ? .5 * (o + r) : o;var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);o = o < s ? .5 * (o + s) : o;
      }this.dragX = o, this.dragMoveTime = new Date(), this.dispatchEvent("dragMove", e, [t, n]);
    }
  }, o.dragEnd = function (e, t) {
    if (this.isDraggable) {
      this.options.freeScroll && (this.isFreeScrolling = !0);var n = this.dragEndRestingSelect();if (this.options.freeScroll && !this.options.wrapAround) {
        var i = this.getRestingPosition();this.isFreeScrolling = -i > this.slides[0].target && -i < this.getLastSlide().target;
      } else this.options.freeScroll || n != this.selectedIndex || (n += this.dragEndBoostSelect());delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(n), delete this.isDragSelect, this.dispatchEvent("dragEnd", e, [t]);
    }
  }, o.dragEndRestingSelect = function () {
    var e = this.getRestingPosition(),
        t = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
        n = this._getClosestResting(e, t, 1),
        i = this._getClosestResting(e, t, -1);return n.distance < i.distance ? n.index : i.index;
  }, o._getClosestResting = function (e, t, n) {
    for (var i = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function (e, t) {
      return e <= t;
    } : function (e, t) {
      return e < t;
    }; r(t, o) && (i += n, o = t, null !== (t = this.getSlideDistance(-e, i)));) {
      t = Math.abs(t);
    }return { distance: o, index: i - n };
  }, o.getSlideDistance = function (e, t) {
    var n = this.slides.length,
        o = this.options.wrapAround && n > 1,
        r = o ? i.modulo(t, n) : t,
        s = this.slides[r];if (!s) return null;var a = o ? this.slideableWidth * Math.floor(t / n) : 0;return e - (s.target + a);
  }, o.dragEndBoostSelect = function () {
    if (void 0 === this.previousDragX || !this.dragMoveTime || new Date() - this.dragMoveTime > 100) return 0;var e = this.getSlideDistance(-this.dragX, this.selectedIndex),
        t = this.previousDragX - this.dragX;return e > 0 && t > 0 ? 1 : e < 0 && t < 0 ? -1 : 0;
  }, o.staticClick = function (e, t) {
    var n = this.getParentCell(e.target),
        i = n && n.element,
        o = n && this.cells.indexOf(n);this.dispatchEvent("staticClick", e, [t, i, o]);
  }, o.onscroll = function () {
    var e = l(),
        t = this.pointerDownScroll.x - e.x,
        n = this.pointerDownScroll.y - e.y;(Math.abs(t) > 3 || Math.abs(n) > 3) && this._pointerDone();
  }, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (n, i, o) {
    return t(e, n, i, o);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.Unipointer, e.fizzyUIUtils);
}(window, function (e, t, n, i) {
  "use strict";
  var o = "http://www.w3.org/2000/svg";function r(e, t) {
    this.direction = e, this.parent = t, this._create();
  }r.prototype = Object.create(n.prototype), r.prototype._create = function () {
    this.isEnabled = !0, this.isPrevious = -1 == this.direction;var e = this.parent.options.rightToLeft ? 1 : -1;this.isLeft = this.direction == e;var t = this.element = document.createElement("button");t.className = "flickity-button flickity-prev-next-button", t.className += this.isPrevious ? " previous" : " next", t.setAttribute("type", "button"), this.disable(), t.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");var n = this.createSVG();t.appendChild(n), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, r.prototype.activate = function () {
    this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
  }, r.prototype.deactivate = function () {
    this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this);
  }, r.prototype.createSVG = function () {
    var e = document.createElementNS(o, "svg");e.setAttribute("class", "flickity-button-icon"), e.setAttribute("viewBox", "0 0 100 100");var t = document.createElementNS(o, "path"),
        n = function (e) {
      if ("string" == typeof e) return e;return "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
    }(this.parent.options.arrowShape);return t.setAttribute("d", n), t.setAttribute("class", "arrow"), this.isLeft || t.setAttribute("transform", "translate(100, 100) rotate(180) "), e.appendChild(t), e;
  }, r.prototype.handleEvent = i.handleEvent, r.prototype.onclick = function () {
    if (this.isEnabled) {
      this.parent.uiChange();var e = this.isPrevious ? "previous" : "next";this.parent[e]();
    }
  }, r.prototype.enable = function () {
    this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0);
  }, r.prototype.disable = function () {
    this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1);
  }, r.prototype.update = function () {
    var e = this.parent.slides;if (this.parent.options.wrapAround && e.length > 1) this.enable();else {
      var t = e.length ? e.length - 1 : 0,
          n = this.isPrevious ? 0 : t;this[this.parent.selectedIndex == n ? "disable" : "enable"]();
    }
  }, r.prototype.destroy = function () {
    this.deactivate(), this.allOff();
  }, i.extend(t.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }), t.createMethods.push("_createPrevNextButtons");var s = t.prototype;return s._createPrevNextButtons = function () {
    this.options.prevNextButtons && (this.prevButton = new r(-1, this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons));
  }, s.activatePrevNextButtons = function () {
    this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
  }, s.deactivatePrevNextButtons = function () {
    this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
  }, t.PrevNextButton = r, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (n, i, o) {
    return t(e, n, i, o);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.Unipointer, e.fizzyUIUtils);
}(window, function (e, t, n, i) {
  function o(e) {
    this.parent = e, this._create();
  }o.prototype = Object.create(n.prototype), o.prototype._create = function () {
    this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
  }, o.prototype.activate = function () {
    this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder);
  }, o.prototype.deactivate = function () {
    this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder);
  }, o.prototype.setDots = function () {
    var e = this.parent.slides.length - this.dots.length;e > 0 ? this.addDots(e) : e < 0 && this.removeDots(-e);
  }, o.prototype.addDots = function (e) {
    for (var t = document.createDocumentFragment(), n = [], i = this.dots.length, o = i + e, r = i; r < o; r++) {
      var s = document.createElement("li");s.className = "dot", s.setAttribute("aria-label", "Page dot " + (r + 1)), t.appendChild(s), n.push(s);
    }this.holder.appendChild(t), this.dots = this.dots.concat(n);
  }, o.prototype.removeDots = function (e) {
    this.dots.splice(this.dots.length - e, e).forEach(function (e) {
      this.holder.removeChild(e);
    }, this);
  }, o.prototype.updateSelected = function () {
    this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"));
  }, o.prototype.onTap = o.prototype.onClick = function (e) {
    var t = e.target;if ("LI" == t.nodeName) {
      this.parent.uiChange();var n = this.dots.indexOf(t);this.parent.select(n);
    }
  }, o.prototype.destroy = function () {
    this.deactivate(), this.allOff();
  }, t.PageDots = o, i.extend(t.defaults, { pageDots: !0 }), t.createMethods.push("_createPageDots");var r = t.prototype;return r._createPageDots = function () {
    this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots));
  }, r.activatePageDots = function () {
    this.pageDots.activate();
  }, r.updateSelectedPageDots = function () {
    this.pageDots.updateSelected();
  }, r.updatePageDots = function () {
    this.pageDots.setDots();
  }, r.deactivatePageDots = function () {
    this.pageDots.deactivate();
  }, t.PageDots = o, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (e, n, i) {
    return t(e, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : t(e.EvEmitter, e.fizzyUIUtils, e.Flickity);
}(window, function (e, t, n) {
  function i(e) {
    this.parent = e, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this);
  }i.prototype = Object.create(e.prototype), i.prototype.play = function () {
    "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()));
  }, i.prototype.tick = function () {
    if ("playing" == this.state) {
      var e = this.parent.options.autoPlay;e = "number" == typeof e ? e : 3e3;var t = this;this.clear(), this.timeout = setTimeout(function () {
        t.parent.next(!0), t.tick();
      }, e);
    }
  }, i.prototype.stop = function () {
    this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange);
  }, i.prototype.clear = function () {
    clearTimeout(this.timeout);
  }, i.prototype.pause = function () {
    "playing" == this.state && (this.state = "paused", this.clear());
  }, i.prototype.unpause = function () {
    "paused" == this.state && this.play();
  }, i.prototype.visibilityChange = function () {
    this[document.hidden ? "pause" : "unpause"]();
  }, i.prototype.visibilityPlay = function () {
    this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay);
  }, t.extend(n.defaults, { pauseAutoPlayOnHover: !0 }), n.createMethods.push("_createPlayer");var o = n.prototype;return o._createPlayer = function () {
    this.player = new i(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
  }, o.activatePlayer = function () {
    this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
  }, o.playPlayer = function () {
    this.player.play();
  }, o.stopPlayer = function () {
    this.player.stop();
  }, o.pausePlayer = function () {
    this.player.pause();
  }, o.unpausePlayer = function () {
    this.player.unpause();
  }, o.deactivatePlayer = function () {
    this.player.stop(), this.element.removeEventListener("mouseenter", this);
  }, o.onmouseenter = function () {
    this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
  }, o.onmouseleave = function () {
    this.player.unpause(), this.element.removeEventListener("mouseleave", this);
  }, n.Player = i, n;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (n, i) {
    return t(e, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.fizzyUIUtils);
}(window, function (e, t, n) {
  var i = t.prototype;return i.insert = function (e, t) {
    var n = this._makeCells(e);if (n && n.length) {
      var i = this.cells.length;t = void 0 === t ? i : t;var o = function (e) {
        var t = document.createDocumentFragment();return e.forEach(function (e) {
          t.appendChild(e.element);
        }), t;
      }(n),
          r = t == i;if (r) this.slider.appendChild(o);else {
        var s = this.cells[t].element;this.slider.insertBefore(o, s);
      }if (0 === t) this.cells = n.concat(this.cells);else if (r) this.cells = this.cells.concat(n);else {
        var a = this.cells.splice(t, i - t);this.cells = this.cells.concat(n).concat(a);
      }this._sizeCells(n), this.cellChange(t, !0);
    }
  }, i.append = function (e) {
    this.insert(e, this.cells.length);
  }, i.prepend = function (e) {
    this.insert(e, 0);
  }, i.remove = function (e) {
    var t = this.getCells(e);if (t && t.length) {
      var i = this.cells.length - 1;t.forEach(function (e) {
        e.remove();var t = this.cells.indexOf(e);i = Math.min(t, i), n.removeFrom(this.cells, e);
      }, this), this.cellChange(i, !0);
    }
  }, i.cellSizeChange = function (e) {
    var t = this.getCell(e);if (t) {
      t.getSize();var n = this.cells.indexOf(t);this.cellChange(n);
    }
  }, i.cellChange = function (e, t) {
    var n = this.selectedElement;this._positionCells(e), this._getWrapShiftCells(), this.setGallerySize();var i = this.getCell(n);i && (this.selectedIndex = this.getCellSlideIndex(i)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [e]), this.select(this.selectedIndex), t && this.positionSliderAtSelected();
  }, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (n, i) {
    return t(e, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("./flickity"), require("fizzy-ui-utils")) : t(e, e.Flickity, e.fizzyUIUtils);
}(window, function (e, t, n) {
  "use strict";
  t.createMethods.push("_createLazyload");var i = t.prototype;function o(e, t) {
    this.img = e, this.flickity = t, this.load();
  }return i._createLazyload = function () {
    this.on("select", this.lazyLoad);
  }, i.lazyLoad = function () {
    var e = this.options.lazyLoad;if (e) {
      var t = "number" == typeof e ? e : 0,
          i = [];this.getAdjacentCellElements(t).forEach(function (e) {
        var t = function (e) {
          if ("IMG" == e.nodeName) {
            var t = e.getAttribute("data-flickity-lazyload"),
                i = e.getAttribute("data-flickity-lazyload-src"),
                o = e.getAttribute("data-flickity-lazyload-srcset");if (t || i || o) return [e];
          }var r = e.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return n.makeArray(r);
        }(e);i = i.concat(t);
      }), i.forEach(function (e) {
        new o(e, this);
      }, this);
    }
  }, o.prototype.handleEvent = n.handleEvent, o.prototype.load = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this);var e = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
        t = this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src = e, t && this.img.setAttribute("srcset", t), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset");
  }, o.prototype.onload = function (e) {
    this.complete(e, "flickity-lazyloaded");
  }, o.prototype.onerror = function (e) {
    this.complete(e, "flickity-lazyerror");
  }, o.prototype.complete = function (e, t) {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);var n = this.flickity.getParentCell(this.img),
        i = n && n.element;this.flickity.cellSizeChange(i), this.img.classList.add(t), this.flickity.dispatchEvent("lazyLoad", e, i);
  }, t.LazyLoader = o, t;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports && (module.exports = t(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")));
}(window, function (e) {
  return e;
}), function (e, t) {
  "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("flickity"), require("fizzy-ui-utils")) : e.Flickity = t(e.Flickity, e.fizzyUIUtils);
}(window, function (e, t) {
  e.createMethods.push("_createAsNavFor");var n = e.prototype;return n._createAsNavFor = function () {
    this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);var e = this.options.asNavFor;if (e) {
      var t = this;setTimeout(function () {
        t.setNavCompanion(e);
      });
    }
  }, n.setNavCompanion = function (n) {
    n = t.getQueryElement(n);var i = e.data(n);if (i && i != this) {
      this.navCompanion = i;var o = this;this.onNavCompanionSelect = function () {
        o.navCompanionSelect();
      }, i.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0);
    }
  }, n.navCompanionSelect = function (e) {
    var t = this.navCompanion && this.navCompanion.selectedCells;if (t) {
      var n,
          i,
          o,
          r = t[0],
          s = this.navCompanion.cells.indexOf(r),
          a = s + t.length - 1,
          l = Math.floor((n = s, i = a, o = this.navCompanion.cellAlign, (i - n) * o + n));if (this.selectCell(l, !1, e), this.removeNavSelectedElements(), !(l >= this.cells.length)) {
        var c = this.cells.slice(s, a + 1);this.navSelectedElements = c.map(function (e) {
          return e.element;
        }), this.changeNavSelectedClass("add");
      }
    }
  }, n.changeNavSelectedClass = function (e) {
    this.navSelectedElements.forEach(function (t) {
      t.classList[e]("is-nav-selected");
    });
  }, n.activateAsNavFor = function () {
    this.navCompanionSelect(!0);
  }, n.removeNavSelectedElements = function () {
    this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements);
  }, n.onNavStaticClick = function (e, t, n, i) {
    "number" == typeof i && this.navCompanion.selectCell(i);
  }, n.deactivateAsNavFor = function () {
    this.removeNavSelectedElements();
  }, n.destroyAsNavFor = function () {
    this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion);
  }, e;
}), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (n) {
    return t(e, n);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter);
}("undefined" != typeof window ? window : this, function (e, t) {
  var n = e.jQuery,
      i = e.console;function o(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }var r = Array.prototype.slice;function s(e, t, a) {
    if (!(this instanceof s)) return new s(e, t, a);var l,
        c = e;("string" == typeof e && (c = document.querySelectorAll(e)), c) ? (this.elements = (l = c, Array.isArray(l) ? l : "object" == (typeof l === "undefined" ? "undefined" : _typeof(l)) && "number" == typeof l.length ? r.call(l) : [l]), this.options = o({}, this.options), "function" == typeof t ? a = t : o(this.options, t), a && this.on("always", a), this.getImages(), n && (this.jqDeferred = new n.Deferred()), setTimeout(this.check.bind(this))) : i.error("Bad element for imagesLoaded " + (c || e));
  }s.prototype = Object.create(t.prototype), s.prototype.options = {}, s.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this);
  }, s.prototype.addElementImages = function (e) {
    "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);var t = e.nodeType;if (t && a[t]) {
      for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
        var o = n[i];this.addImage(o);
      }if ("string" == typeof this.options.background) {
        var r = e.querySelectorAll(this.options.background);for (i = 0; i < r.length; i++) {
          var s = r[i];this.addElementBackgroundImages(s);
        }
      }
    }
  };var a = { 1: !0, 9: !0, 11: !0 };function l(e) {
    this.img = e;
  }function c(e, t) {
    this.url = e, this.element = t, this.img = new Image();
  }return s.prototype.addElementBackgroundImages = function (e) {
    var t = getComputedStyle(e);if (t) for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
      var o = i && i[2];o && this.addBackground(o, e), i = n.exec(t.backgroundImage);
    }
  }, s.prototype.addImage = function (e) {
    var t = new l(e);this.images.push(t);
  }, s.prototype.addBackground = function (e, t) {
    var n = new c(e, t);this.images.push(n);
  }, s.prototype.check = function () {
    var e = this;function t(t, n, i) {
      setTimeout(function () {
        e.progress(t, n, i);
      });
    }this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function (e) {
      e.once("progress", t), e.check();
    }) : this.complete();
  }, s.prototype.progress = function (e, t, n) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && i && i.log("progress: " + n, e, t);
  }, s.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var t = this.hasAnyBroken ? "reject" : "resolve";this.jqDeferred[t](this);
    }
  }, l.prototype = Object.create(t.prototype), l.prototype.check = function () {
    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src);
  }, l.prototype.getIsImageComplete = function () {
    return this.img.complete && this.img.naturalWidth;
  }, l.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.img, t]);
  }, l.prototype.handleEvent = function (e) {
    var t = "on" + e.type;this[t] && this[t](e);
  }, l.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents();
  }, l.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }, l.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, c.prototype = Object.create(l.prototype), c.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, c.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
  }, c.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emitEvent("progress", [this, this.element, t]);
  }, s.makeJQueryPlugin = function (t) {
    (t = t || e.jQuery) && ((n = t).fn.imagesLoaded = function (e, t) {
      return new s(this, e, t).jqDeferred.promise(n(this));
    });
  }, s.makeJQueryPlugin(), s;
}), function (e, t) {
  "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (n, i) {
    return t(e, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(e, require("flickity"), require("imagesloaded")) : e.Flickity = t(e, e.Flickity, e.imagesLoaded);
}(window, function (e, t, n) {
  "use strict";
  t.createMethods.push("_createImagesLoaded");var i = t.prototype;return i._createImagesLoaded = function () {
    this.on("activate", this.imagesLoaded);
  }, i.imagesLoaded = function () {
    if (this.options.imagesLoaded) {
      var e = this;n(this.slider).on("progress", function (t, n) {
        var i = e.getParentCell(n.img);e.cellSizeChange(i && i.element), e.options.freeScroll || e.positionSliderAtSelected();
      });
    }
  }, t;
}), function (e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = t() : e.Headroom = t();
}(this, function () {
  "use strict";
  var e = { bind: !!function () {}.bind, classList: "classList" in document.documentElement, rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) };function t(e) {
    this.callback = e, this.ticking = !1;
  }function n(e, t) {
    var i;t = function e(t) {
      if (arguments.length <= 0) throw new Error("Missing arguments in extend function");var n,
          i,
          o,
          r = t || {};for (i = 1; i < arguments.length; i++) {
        var s = arguments[i] || {};for (n in s) {
          "object" != _typeof(r[n]) || (o = r[n]) && "undefined" != typeof window && (o === window || o.nodeType) ? r[n] = r[n] || s[n] : r[n] = e(r[n], s[n]);
        }
      }return r;
    }(t, n.options), this.lastKnownScrollY = 0, this.elem = e, this.tolerance = (i = t.tolerance) === Object(i) ? i : { down: i, up: i }, this.classes = t.classes, this.offset = t.offset, this.scroller = t.scroller, this.initialised = !1, this.onPin = t.onPin, this.onUnpin = t.onUnpin, this.onTop = t.onTop, this.onNotTop = t.onNotTop, this.onBottom = t.onBottom, this.onNotBottom = t.onNotBottom;
  }return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, t.prototype = { constructor: t, update: function update() {
      this.callback && this.callback(), this.ticking = !1;
    }, requestTick: function requestTick() {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
    }, handleEvent: function handleEvent() {
      this.requestTick();
    } }, n.prototype = { constructor: n, init: function init() {
      if (n.cutsTheMustard) return this.debouncer = new t(this.update.bind(this)), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
    }, destroy: function destroy() {
      var e = this.classes;for (var t in this.initialised = !1, e) {
        e.hasOwnProperty(t) && this.elem.classList.remove(e[t]);
      }this.scroller.removeEventListener("scroll", this.debouncer, !1);
    }, attachEvent: function attachEvent() {
      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
    }, unpin: function unpin() {
      var e = this.elem.classList,
          t = this.classes;!e.contains(t.pinned) && e.contains(t.unpinned) || (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this));
    }, pin: function pin() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this));
    }, top: function top() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this));
    }, notTop: function notTop() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this));
    }, bottom: function bottom() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.bottom) || (e.add(t.bottom), e.remove(t.notBottom), this.onBottom && this.onBottom.call(this));
    }, notBottom: function notBottom() {
      var e = this.elem.classList,
          t = this.classes;e.contains(t.notBottom) || (e.add(t.notBottom), e.remove(t.bottom), this.onNotBottom && this.onNotBottom.call(this));
    }, getScrollY: function getScrollY() {
      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }, getViewportHeight: function getViewportHeight() {
      return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }, getElementPhysicalHeight: function getElementPhysicalHeight(e) {
      return Math.max(e.offsetHeight, e.clientHeight);
    }, getScrollerPhysicalHeight: function getScrollerPhysicalHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller);
    }, getDocumentHeight: function getDocumentHeight() {
      var e = document.body,
          t = document.documentElement;return Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, e.clientHeight, t.clientHeight);
    }, getElementHeight: function getElementHeight(e) {
      return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
    }, getScrollerHeight: function getScrollerHeight() {
      return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
    }, isOutOfBounds: function isOutOfBounds(e) {
      var t = e < 0,
          n = e + this.getScrollerPhysicalHeight() > this.getScrollerHeight();return t || n;
    }, toleranceExceeded: function toleranceExceeded(e, t) {
      return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t];
    }, shouldUnpin: function shouldUnpin(e, t) {
      var n = e > this.lastKnownScrollY,
          i = e >= this.offset;return n && i && t;
    }, shouldPin: function shouldPin(e, t) {
      var n = e < this.lastKnownScrollY,
          i = e <= this.offset;return n && t || i;
    }, update: function update() {
      var e = this.getScrollY(),
          t = e > this.lastKnownScrollY ? "down" : "up",
          n = this.toleranceExceeded(e, t);this.isOutOfBounds(e) || (e <= this.offset ? this.top() : this.notTop(), e + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(), this.shouldUnpin(e, n) ? this.unpin() : this.shouldPin(e, n) && this.pin(), this.lastKnownScrollY = e);
    } }, n.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: window, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom" } }, n.cutsTheMustard = void 0 !== e && e.rAF && e.bind && e.classList, n;
}), function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function (e) {
  "use strict";
  var t = e.scrollTo = function (t, n, i) {
    return e(window).scrollTo(t, n, i);
  };function n(t) {
    return !t.nodeName || -1 !== e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
  }function i(t) {
    return e.isFunction(t) || e.isPlainObject(t) ? t : { top: t, left: t };
  }return t.defaults = { axis: "xy", duration: 0, limit: !0 }, e.fn.scrollTo = function (o, r, s) {
    "object" == (typeof r === "undefined" ? "undefined" : _typeof(r)) && (s = r, r = 0), "function" == typeof s && (s = { onAfter: s }), "max" === o && (o = 9e9), s = e.extend({}, t.defaults, s), r = r || s.duration;var a = s.queue && s.axis.length > 1;return a && (r /= 2), s.offset = i(s.offset), s.over = i(s.over), this.each(function () {
      if (null !== o) {
        var l,
            c = n(this),
            u = c ? this.contentWindow || window : this,
            d = e(u),
            f = o,
            h = {};switch (typeof f === "undefined" ? "undefined" : _typeof(f)) {case "number":case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)) {
              f = i(f);break;
            }f = c ? e(f) : e(f, u);case "object":
            if (0 === f.length) return;(f.is || f.style) && (l = (f = e(f)).offset());}var p = e.isFunction(s.offset) && s.offset(u, f) || s.offset;e.each(s.axis.split(""), function (e, n) {
          var i = "x" === n ? "Left" : "Top",
              o = i.toLowerCase(),
              r = "scroll" + i,
              g = d[r](),
              v = t.max(u, n);if (l) h[r] = l[o] + (c ? 0 : g - d.offset()[o]), s.margin && (h[r] -= parseInt(f.css("margin" + i), 10) || 0, h[r] -= parseInt(f.css("border" + i + "Width"), 10) || 0), h[r] += p[o] || 0, s.over[o] && (h[r] += f["x" === n ? "width" : "height"]() * s.over[o]);else {
            var y = f[o];h[r] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * v : y;
          }s.limit && /^\d+$/.test(h[r]) && (h[r] = h[r] <= 0 ? 0 : Math.min(h[r], v)), !e && s.axis.length > 1 && (g === h[r] ? h = {} : a && (m(s.onAfterFirst), h = {}));
        }), m(s.onAfter);
      }function m(t) {
        var n = e.extend({}, s, { queue: !0, duration: r, complete: t && function () {
            t.call(u, f, s);
          } });d.animate(h, n);
      }
    });
  }, t.max = function (t, i) {
    var o = "x" === i ? "Width" : "Height",
        r = "scroll" + o;if (!n(t)) return t[r] - e(t)[o.toLowerCase()]();var s = "client" + o,
        a = t.ownerDocument || t.document,
        l = a.documentElement,
        c = a.body;return Math.max(l[r], c[r]) - Math.min(l[s], c[s]);
  }, e.Tween.propHooks.scrollLeft = e.Tween.propHooks.scrollTop = { get: function get(t) {
      return e(t.elem)[t.prop]();
    }, set: function set(t) {
      var n = this.get(t);if (t.options.interrupt && t._last && t._last !== n) return e(t.elem).stop();var i = Math.round(t.now);n !== i && (e(t.elem)[t.prop](i), t._last = this.get(t));
    } }, t;
}), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? e(require("jquery")) : e(window.jQuery || window.Zepto);
}(function (e) {
  var t,
      n,
      i,
      o,
      r,
      s,
      a = function a() {},
      l = !!window.jQuery,
      c = e(window),
      u = function u(e, n) {
    t.ev.on("mfp" + e + ".mfp", n);
  },
      d = function d(t, n, i, o) {
    var r = document.createElement("div");return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r;
  },
      f = function f(n, i) {
    t.ev.triggerHandler("mfp" + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
  },
      h = function h(n) {
    return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn;
  },
      p = function p() {
    e.magnificPopup.instance || ((t = new a()).init(), e.magnificPopup.instance = t);
  };a.prototype = { constructor: a, init: function init() {
      var n = navigator.appVersion;t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = function () {
        var e = document.createElement("p").style,
            t = ["ms", "O", "Moz", "Webkit"];if (void 0 !== e.transition) return !0;for (; t.length;) {
          if (t.pop() + "Transition" in e) return !0;
        }return !1;
      }(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document), t.popupsCache = {};
    }, open: function open(n) {
      var o;if (!1 === n.isObj) {
        t.items = n.items.toArray(), t.index = 0;var s,
            a = n.items;for (o = 0; o < a.length; o++) {
          if ((s = a[o]).parsed && (s = s.el[0]), s === n.el[0]) {
            t.index = o;break;
          }
        }
      } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;if (!t.isOpen) {
        t.types = [], r = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = d("bg").on("click.mfp", function () {
          t.close();
        }), t.wrap = d("wrap").attr("tabindex", -1).on("click.mfp", function (e) {
          t._checkIfClose(e.target) && t.close();
        }), t.container = d("container", t.wrap)), t.contentContainer = d("content"), t.st.preloader && (t.preloader = d("preloader", t.container, t.st.tLoading));var l = e.magnificPopup.modules;for (o = 0; o < l.length; o++) {
          var p = l[o];p = p.charAt(0).toUpperCase() + p.slice(1), t["init" + p].call(t);
        }f("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (u("MarkupParse", function (e, t, n, i) {
          n.close_replaceWith = h(i.type);
        }), r += " mfp-close-btn-in") : t.wrap.append(h())), t.st.alignTop && (r += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: c.scrollTop(), position: "absolute" }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({ height: i.height(), position: "absolute" }), t.st.enableEscapeKey && i.on("keyup.mfp", function (e) {
          27 === e.keyCode && t.close();
        }), c.on("resize.mfp", function () {
          t.updateSize();
        }), t.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && t.wrap.addClass(r);var m = t.wH = c.height(),
            g = {};if (t.fixedContentPos && t._hasScrollBar(m)) {
          var v = t._getScrollbarSize();v && (g.marginRight = v);
        }t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : g.overflow = "hidden");var y = t.st.mainClass;return t.isIE7 && (y += " mfp-ie7"), y && t._addClassToMFP(y), t.updateItemHTML(), f("BuildControls"), e("html").css(g), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
          t.content ? (t._addClassToMFP("mfp-ready"), t._setFocus()) : t.bgOverlay.addClass("mfp-ready"), i.on("focusin.mfp", t._onFocusIn);
        }, 16), t.isOpen = !0, t.updateSize(m), f("Open"), n;
      }t.updateItemHTML();
    }, close: function close() {
      t.isOpen && (f("BeforeClose"), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP("mfp-removing"), setTimeout(function () {
        t._close();
      }, t.st.removalDelay)) : t._close());
    }, _close: function _close() {
      f("Close");var n = "mfp-removing mfp-ready ";if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
        var o = { marginRight: "" };t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "", e("html").css(o);
      }i.off("keyup.mfp focusin.mfp"), t.ev.off(".mfp"), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, f("AfterClose");
    }, updateSize: function updateSize(e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
            i = window.innerHeight * n;t.wrap.css("height", i), t.wH = i;
      } else t.wH = e || c.height();t.fixedContentPos || t.wrap.css("height", t.wH), f("Resize");
    }, updateItemHTML: function updateItemHTML() {
      var n = t.items[t.index];t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));var i = n.type;if (f("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
        var r = !!t.st[i] && t.st[i].markup;f("FirstMarkupParse", r), t.currTemplate[i] = !r || e(r);
      }o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);t.appendContent(s, i), n.preloaded = !0, f("Change", n), o = n.type, t.container.prepend(t.contentContainer), f("AfterChange");
    }, appendContent: function appendContent(e, n) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(h()) : t.content = e : t.content = "", f("BeforeAppend"), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content);
    }, parseEl: function parseEl(n) {
      var i,
          o = t.items[n];if (o.tagName ? o = { el: e(o) } : (i = o.type, o = { data: o, src: o.src }), o.el) {
        for (var r = t.types, s = 0; s < r.length; s++) {
          if (o.el.hasClass("mfp-" + r[s])) {
            i = r[s];break;
          }
        }o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"));
      }return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, f("ElementParse", o), t.items[n];
    }, addGroup: function addGroup(e, n) {
      var i = function i(_i) {
        _i.mfpEl = this, t._openClick(_i, e, n);
      };n || (n = {});var o = "click.magnificPopup";n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)));
    }, _openClick: function _openClick(n, i, o) {
      if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
        var r = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;if (r) if (e.isFunction(r)) {
          if (!r.call(t)) return !0;
        } else if (c.width() < r) return !0;n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o);
      }
    }, updateStatus: function updateStatus(e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);var o = { status: e, text: i };f("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        }), t.container.addClass("mfp-s-" + e), n = e;
      }
    }, _checkIfClose: function _checkIfClose(n) {
      if (!e(n).hasClass("mfp-prevent-close")) {
        var i = t.st.closeOnContentClick,
            o = t.st.closeOnBgClick;if (i && o) return !0;if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (o && e.contains(document, n)) return !0;return !1;
      }
    }, _addClassToMFP: function _addClassToMFP(e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    }, _removeClassFromMFP: function _removeClassFromMFP(e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    }, _hasScrollBar: function _hasScrollBar(e) {
      return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || c.height());
    }, _setFocus: function _setFocus() {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    }, _onFocusIn: function _onFocusIn(n) {
      if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target)) return t._setFocus(), !1;
    }, _parseMarkup: function _parseMarkup(t, n, i) {
      var o;i.data && (n = e.extend(i.data, n)), f("MarkupParse", [t, n, i]), e.each(n, function (n, i) {
        if (void 0 === i || !1 === i) return !0;if ((o = n.split("_")).length > 1) {
          var r = t.find(".mfp-" + o[0]);if (r.length > 0) {
            var s = o[1];"replaceWith" === s ? r[0] !== i[0] && r.replaceWith(i) : "img" === s ? r.is("img") ? r.attr("src", i) : r.replaceWith(e("<img>").attr("src", i).attr("class", r.attr("class"))) : r.attr(o[1], i);
          }
        } else t.find(".mfp-" + n).html(i);
      });
    }, _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
      }return t.scrollbarSize;
    } }, e.magnificPopup = { instance: null, proto: a.prototype, modules: [], open: function open(t, n) {
      return p(), (t = t ? e.extend(!0, {}, t) : {}).isObj = !0, t.index = n || 0, this.instance.open(t);
    }, close: function close() {
      return e.magnificPopup.instance && e.magnificPopup.instance.close();
    }, registerModule: function registerModule(t, n) {
      n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, e.fn.magnificPopup = function (n) {
    p();var i = e(this);if ("string" == typeof n) {
      if ("open" === n) {
        var o,
            r = l ? i.data("magnificPopup") : i[0].magnificPopup,
            s = parseInt(arguments[1], 10) || 0;r.items ? o = r.items[s] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)), t._openClick({ mfpEl: o }, i, r);
      } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
    } else n = e.extend(!0, {}, n), l ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);return i;
  };var m,
      g,
      v,
      y = function y() {
    v && (g.after(v.addClass(m)).detach(), v = null);
  };e.magnificPopup.registerModule("inline", { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
        t.types.push("inline"), u("Close.inline", function () {
          y();
        });
      }, getInline: function getInline(n, i) {
        if (y(), n.src) {
          var o = t.st.inline,
              r = e(n.src);if (r.length) {
            var s = r[0].parentNode;s && s.tagName && (g || (m = o.hiddenClass, g = d(m), m = "mfp-" + m), v = r.after(g).detach().removeClass(m)), t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), r = e("<div>");return n.inlineElement = r, r;
        }return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      } } });var b,
      w = function w() {
    b && e(document.body).removeClass(b);
  },
      _ = function _() {
    w(), t.req && t.req.abort();
  };e.magnificPopup.registerModule("ajax", { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        t.types.push("ajax"), b = t.st.ajax.cursor, u("Close.ajax", _), u("BeforeChange.ajax", _);
      }, getAjax: function getAjax(n) {
        b && e(document.body).addClass(b), t.updateStatus("loading");var i = e.extend({ url: n.src, success: function success(i, o, r) {
            var s = { data: i, xhr: r };f("ParseAjax", s), t.appendContent(e(s.data), "ajax"), n.finished = !0, w(), t._setFocus(), setTimeout(function () {
              t.wrap.addClass("mfp-ready");
            }, 16), t.updateStatus("ready"), f("AjaxContentAdded");
          }, error: function error() {
            w(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
          } }, t.st.ajax.settings);return t.req = e.ajax(i), "";
      } } });var x;e.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
        var n = t.st.image,
            i = ".image";t.types.push("image"), u("Open" + i, function () {
          "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor);
        }), u("Close" + i, function () {
          n.cursor && e(document.body).removeClass(n.cursor), c.off("resize.mfp");
        }), u("Resize" + i, t.resizeImage), t.isLowIE && u("AfterChange", t.resizeImage);
      }, resizeImage: function resizeImage() {
        var e = t.currItem;if (e && e.img && t.st.image.verticalFit) {
          var n = 0;t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n);
        }
      }, _onImageHasSize: function _onImageHasSize(e) {
        e.img && (e.hasSize = !0, x && clearInterval(x), e.isCheckingImgSize = !1, f("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
      }, findImageSize: function findImageSize(e) {
        var n = 0,
            i = e.img[0],
            o = function o(r) {
          x && clearInterval(x), x = setInterval(function () {
            i.naturalWidth > 0 ? t._onImageHasSize(e) : (n > 200 && clearInterval(x), 3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500));
          }, r);
        };o(1);
      }, getImage: function getImage(n, i) {
        var o = 0,
            r = function r() {
          n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, f("ImageLoadComplete")) : ++o < 200 ? setTimeout(r, 100) : s());
        },
            s = function s() {
          n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0);
        },
            a = t.st.image,
            l = i.find(".mfp-img");if (l.length) {
          var c = document.createElement("img");c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = e(c).on("load.mfploader", r).on("error.mfploader", s), c.src = n.src, l.is("img") && (n.img = n.img.clone()), (c = n.img[0]).naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1);
        }return t._parseMarkup(i, { title: function (n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;var i = t.st.image.titleSrc;if (i) {
              if (e.isFunction(i)) return i.call(t, n);if (n.el) return n.el.attr(i) || "";
            }return "";
          }(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (x && clearInterval(x), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i);
      } } });var E;e.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(e) {
        return e.is("img") ? e : e.find("img");
      } }, proto: { initZoom: function initZoom() {
        var e,
            n = t.st.zoom,
            i = ".zoom";if (n.enabled && t.supportsTransition) {
          var o,
              r,
              s = n.duration,
              a = function a(e) {
            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                r = "transition";return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t;
          },
              l = function l() {
            t.content.css("visibility", "visible");
          };u("BuildControls" + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void l();(r = a(e)).css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
                r.css(t._getOffset(!0)), o = setTimeout(function () {
                  l(), setTimeout(function () {
                    r.remove(), e = r = null, f("ZoomAnimationEnded");
                  }, 16);
                }, s);
              }, 16);
            }
          }), u("BeforeClose" + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.st.removalDelay = s, !e) {
                if (!(e = t._getItemToZoom())) return;r = a(e);
              }r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
                r.css(t._getOffset());
              }, 16);
            }
          }), u("Close" + i, function () {
            t._allowZoom() && (l(), r && r.remove(), e = null);
          });
        }
      }, _allowZoom: function _allowZoom() {
        return "image" === t.currItem.type;
      }, _getItemToZoom: function _getItemToZoom() {
        return !!t.currItem.hasSize && t.currItem.img;
      }, _getOffset: function _getOffset(n) {
        var i,
            o = (i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
            r = parseInt(i.css("padding-top"), 10),
            s = parseInt(i.css("padding-bottom"), 10);o.top -= e(window).scrollTop() - r;var a = { width: i.width(), height: (l ? i.innerHeight() : i[0].offsetHeight) - s - r };return void 0 === E && (E = void 0 !== document.createElement("p").style.MozTransform), E ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a;
      } } });var C = function C(e) {
    if (t.currTemplate.iframe) {
      var n = t.currTemplate.iframe.find("iframe");n.length && (e || (n[0].src = "//about:blank"), t.isIE8 && n.css("display", e ? "block" : "none"));
    }
  };e.magnificPopup.registerModule("iframe", { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        t.types.push("iframe"), u("BeforeChange", function (e, t, n) {
          t !== n && ("iframe" === t ? C() : "iframe" === n && C(!0));
        }), u("Close.iframe", function () {
          C();
        });
      }, getIframe: function getIframe(n, i) {
        var o = n.src,
            r = t.st.iframe;e.each(r.patterns, function () {
          if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1;
        });var s = {};return r.srcAction && (s[r.srcAction] = o), t._parseMarkup(i, s, n), t.updateStatus("ready"), i;
      } } });var T = function T(e) {
    var n = t.items.length;return e > n - 1 ? e - n : e < 0 ? n + e : e;
  },
      S = function S(e, t, n) {
    return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
  };e.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
        var n = t.st.gallery,
            o = ".mfp-gallery";if (t.direction = !0, !n || !n.enabled) return !1;r += " mfp-gallery", u("Open" + o, function () {
          n.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function () {
            if (t.items.length > 1) return t.next(), !1;
          }), i.on("keydown" + o, function (e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
          });
        }), u("UpdateStatus" + o, function (e, n) {
          n.text && (n.text = S(n.text, t.currItem.index, t.items.length));
        }), u("MarkupParse" + o, function (e, i, o, r) {
          var s = t.items.length;o.counter = s > 1 ? S(n.tCounter, r.index, s) : "";
        }), u("BuildControls" + o, function () {
          if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
            var i = n.arrowMarkup,
                o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close"),
                r = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");o.click(function () {
              t.prev();
            }), r.click(function () {
              t.next();
            }), t.container.append(o.add(r));
          }
        }), u("Change" + o, function () {
          t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
            t.preloadNearbyImages(), t._preloadTimeout = null;
          }, 16);
        }), u("Close" + o, function () {
          i.off(o), t.wrap.off("click" + o), t.arrowRight = t.arrowLeft = null;
        });
      }, next: function next() {
        t.direction = !0, t.index = T(t.index + 1), t.updateItemHTML();
      }, prev: function prev() {
        t.direction = !1, t.index = T(t.index - 1), t.updateItemHTML();
      }, goTo: function goTo(e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML();
      }, preloadNearbyImages: function preloadNearbyImages() {
        var e,
            n = t.st.gallery.preload,
            i = Math.min(n[0], t.items.length),
            o = Math.min(n[1], t.items.length);for (e = 1; e <= (t.direction ? o : i); e++) {
          t._preloadItem(t.index + e);
        }for (e = 1; e <= (t.direction ? i : o); e++) {
          t._preloadItem(t.index - e);
        }
      }, _preloadItem: function _preloadItem(n) {
        if (n = T(n), !t.items[n].preloaded) {
          var i = t.items[n];i.parsed || (i = t.parseEl(n)), f("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
            i.hasSize = !0;
          }).on("error.mfploader", function () {
            i.hasSize = !0, i.loadError = !0, f("LazyLoadError", i);
          }).attr("src", i.src)), i.preloaded = !0;
        }
      } } });e.magnificPopup.registerModule("retina", { options: { replaceSrc: function replaceSrc(e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      }, ratio: 1 }, proto: { initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
              n = e.ratio;(n = isNaN(n) ? n() : n) > 1 && (u("ImageHasSize.retina", function (e, t) {
            t.img.css({ "max-width": t.img[0].naturalWidth / n, width: "100%" });
          }), u("ElementParse.retina", function (t, i) {
            i.src = e.replaceSrc(i, n);
          }));
        }
      } } }), p();
}), function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery);
}(function ($) {
  "use strict";
  var ArrayProto = Array.prototype,
      ObjProto = Object.prototype,
      push = ArrayProto.push,
      splice = ArrayProto.splice,
      hasOwnProperty = ObjProto.hasOwnProperty,
      namespace = "Scrollax",
      lownamespace = namespace.toLowerCase(),
      numberRegExp = /[-+]?\d+(\.\d+)?/g,
      transforms = ["translateX", "translateY", "rotate", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "scaleX", "scaleY"],
      $win = $(window),
      $doc = $(document.body),
      transform,
      gpuAcceleration,
      _position,
      bind,
      unbind,
      Scrollax = function Scrollax(e, t, n) {
    var i = this,
        o = e && $(e).eq(0) || $win,
        r = Scrollax.instances,
        s = null;if (e = o[0], $.each(r, function (t, n) {
      t && t.frame === e && (s = !0);
    }), e && !s) {
      var a,
          l,
          c,
          u,
          d,
          f,
          h,
          p,
          m,
          g,
          v,
          y,
          b,
          w,
          _,
          x,
          E,
          C,
          T,
          S,
          k,
          D,
          A = $.extend({}, Scrollax.defaults, t),
          N = [],
          I = null,
          L = A.parentSelector || "[data-" + lownamespace + "-parent]",
          P = A.elementsSelector || "[data-" + lownamespace + "]",
          j = {},
          O = [],
          q = isWindow(e);i.frame = e, i.options = A, i.parents = N, i.initialized = !1, i.reload = z;var M = function M(e, t) {
        var n = $(t),
            i = getInlineOptions($(t)),
            o = {};o.element = t, o.options = i, o.parallaxElements = [], n.find(P).each(function (e, t) {
          var n = getInlineOptions($(t));n.element = t, push.call(o.parallaxElements, n);
        }), push.call(N, o);
      };i.scroll = H, i.getIndex = function (e) {
        return void 0 !== e ? is_numeric(e) ? e >= 0 && e < N.length ? e : -1 : I.index(e) : -1;
      }, i.one = function (e, t) {
        return i.on(e, function n() {
          t.apply(i, arguments), i.off(e, n);
        }), i;
      }, i.on = function (e, t) {
        if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) for (var n in e) {
          hasOwnProperty.call(e, n) && i.on(n, e[n]);
        } else if ("function" == typeof t) for (var o = e.split(" "), r = 0, s = o.length; r < s; r++) {
          j[o[r]] = j[o[r]] || [], -1 === U(o[r], t) && push.call(j[o[r]], t);
        } else if ("array" == typeof t) for (var a = 0, l = t.length; a < l; a++) {
          i.on(e, t[a]);
        }return i;
      }, i.off = function (e, t) {
        if (t instanceof Array) for (var n = 0, o = t.length; n < o; n++) {
          i.off(e, t[n]);
        } else for (var r = e.split(" "), s = 0, a = r.length; s < a; s++) {
          if (j[r[s]] = j[r[s]] || [], void 0 === t) j[r[s]].length = 0;else {
            var l = U(r[s], t);-1 !== l && splice.call(j[r[s]], l, 1);
          }
        }return i;
      }, i.set = function (e, t) {
        return $.isPlainObject(e) ? $.extend(A, e) : hasOwnProperty.call(A, e) && (A[e] = t), z(), i;
      }, i.destroy = function () {
        return unbind(window, "resize", F), unbind(e, "scroll", H), $.each(r, function (t, n) {
          t && t.frame === e && splice.call(Scrollax.instances, n, 1);
        }), N.length = 0, i.initialized = !1, W("destroy"), i;
      }, i.init = function () {
        if (!i.initialized) return i.on(n), z(), bind(window, "resize", F), bind(e, "scroll", H), push.call(Scrollax.instances, i), i.initialized = !0, W("initialized"), i;
      };
    } else warn(s ? namespace + ": Scrollax has been initialized for this frame!" : namespace + ": Frame is not available!");function z() {
      return I = q ? $doc.find(L) : o.find(L), N.length = 0, p = !!A.horizontal, I.each(M), H(), A.performanceTrick && (u = q ? $doc : o), W("load"), i;
    }function F() {
      a && (a = clearTimeout(a)), a = setTimeout(function () {
        i.reload();
      });
    }function H() {
      var t = N.length;if (A.performanceTrick && u && (clearTimeout(d), f || (u.addClass("scrollax-performance"), f = !0), d = setTimeout(function () {
        u.removeClass("scrollax-performance"), f = !1;
      }, 100)), t) {
        h = getOffset(e);for (var n = 0; n < t; n++) {
          v = N[n], (g = _position(v.element, e))[p ? "right" : "bottom"] < 0 || g[p ? "left" : "top"] > h[p ? "width" : "height"] || (y = v.options, m = y.offset || A.offset || 0, w = g[p ? "right" : "bottom"], _ = g[p ? "width" : "height"], (b = (_ - w + m) / _) < 0 && (w = g[p ? "left" : "top"], _ = h[p ? "width" : "height"], b = (_ - w + m) / _ - 1), b > 1 || b < -1 || B(v, b));
        }W("scroll", h);
      }
    }function B(e, t) {
      var n = (x = e.parallaxElements).length;if (n) for (var i = 0; i < n; i++) {
        E = x[i], R(E.element, E, t);
      }
    }function R(e, t, n) {
      for (T in C = t.properties || (p ? { translateX: "100%" } : { translateY: "100%" }), k = "", C) {
        if ("number" == typeof (S = C[T])) S *= n;else if ("string" == typeof S) for (D = S.match(numberRegExp), S = S, l = 0, c = D.length; l < c; l++) {
          S = S.replace(D[l], parseFloat(D[l] * n));
        }-1 !== $.inArray(T, transforms) ? k += T + "(" + S + ")" : e.style[T] = "opacity" === T ? within(n < 0 ? 1 + S : 1 - S, 0, 1) : S;
      }k && (e.style[transform] = gpuAcceleration + k);
    }function W(e, t) {
      if (j[e]) {
        for (c = j[e].length, O.length = 0, l = 0; l < c; l++) {
          push.call(O, j[e][l]);
        }for (l = 0; l < c; l++) {
          O[l].call(i, e, t);
        }
      }
    }function U(e, t) {
      for (var n = 0, i = j[e].length; n < i; n++) {
        if (j[e][n] === t) return n;
      }return -1;
    }
  };function warn(e) {
    if (!console || !console.warn) throw namespace + ": " + e;console.warn(namespace + ": " + e);
  }function getOffset(e) {
    var t = !!("pageYOffset" in e);return { width: t ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : e.offsetWidth, height: t ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : e.offsetHeight, left: e[t ? "pageXOffset" : "scrollLeft"], top: e[t ? "pageYOffset" : "scrollTop"] };
  }function is_numeric(e) {
    return ("number" == typeof e || "string" == typeof e) && "" !== e && !isNaN(e);
  }function within(e, t, n) {
    return e < t ? t : e > n ? n : e;
  }function getInlineOptions($element) {
    var data = $element.data(lownamespace.toLowerCase());return data && eval("({" + data + "})") || {};
  }function isWindow(e) {
    var t, n;return !!(e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && "object" == _typeof(e.window) && e.window == e && e.setTimeout && e.alert && (t = e.document) && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (n = t.defaultView || t.parentWindow) && "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n == e);
  }Scrollax.instances = [], function () {
    var e, t, n, i, o, r, s, a;_position = function position(l, c) {
      return t = l.ownerDocument || l, n = t.documentElement, i = isWindow(c) ? c : t.defaultView || window, c = c && c !== t ? c : n, o = (i.pageYOffset || n.scrollTop) - n.clientTop, r = (i.pageXOffset || n.scrollLeft) - n.clientLeft, s = { top: 0, left: 0 }, l && l.getBoundingClientRect ? ((s = function (t, n) {
        for (e in n) {
          t[e] = n[e];
        }return t;
      }({}, l.getBoundingClientRect())).width = s.right - s.left, s.height = s.bottom - s.top, c === i ? s : (s.top += o, s.left += r, s.right += r, s.bottom += o, c === n ? s : (a = _position(c), s.left -= a.left, s.right -= a.left, s.top -= a.top, s.bottom -= a.top, s))) : null;
    };
  }(), function () {
    function e() {
      this.returnValue = !1;
    }function t() {
      this.cancelBubble = !0;
    }bind = window.addEventListener ? function (e, t, n, i) {
      return e.addEventListener(t, n, i || !1), n;
    } : function (n, i, o) {
      var r = i + o;return n[r] = n[r] || function () {
        var i = window.event;i.target = i.srcElement, i.preventDefault = e, i.stopPropagation = t, o.call(n, i);
      }, n.attachEvent("on" + i, n[r]), o;
    }, unbind = window.removeEventListener ? function (e, t, n, i) {
      return e.removeEventListener(t, n, i || !1), n;
    } : function (e, t, n) {
      var i = t + n;e.detachEvent("on" + t, e[i]);try {
        delete e[i];
      } catch (t) {
        e[i] = void 0;
      }return n;
    };
  }(), function () {
    var e = ["", "webkit", "moz", "ms", "o"],
        t = document.createElement("div");function n(n) {
      for (var i = 0, o = e.length; i < o; i++) {
        var r = e[i] ? e[i] + n.charAt(0).toUpperCase() + n.slice(1) : n;if (null != t.style[r]) return r;
      }
    }transform = n("transform"), gpuAcceleration = n("perspective") ? "translateZ(0) " : "";
  }(), Scrollax.defaults = { horizontal: !1, offset: 0, parentSelector: null, elementsSelector: null, performanceTrick: !1 }, window.Scrollax = Scrollax, $.fn.Scrollax = function (e, t) {
    var n, i;return $.isPlainObject(e) || ("string" != typeof e && !1 !== e || (n = !1 === e ? "destroy" : e, i = slice.call(arguments, 1)), e = {}), this.each(function (o, r) {
      var s = $.data(r, lownamespace);s || n ? s && n && s[n] && s[n].apply(s, i) : s = $.data(r, lownamespace, new Scrollax(r, e, t).init());
    });
  }, $.Scrollax = function (e, t) {
    $win.Scrollax(e, t);
  };var css = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };",
      head = document.head || document.getElementsByTagName("head")[0],
      style = document.createElement("style");return style.type = "text/css", style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)), head.appendChild(style), Scrollax;
}), function (e) {
  var t = -1,
      n = -1,
      i = function i(e) {
    return parseFloat(e) || 0;
  },
      o = function o(t) {
    var n = { byRow: !0, property: "height", target: null, remove: !1, mq: null };return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? e.extend(n, t) : ("boolean" == typeof t ? n.byRow = t : "remove" === t && (n.remove = !0), n);
  },
      r = e.fn.matchHeight = function (t) {
    var n = o(t);if (n.remove) {
      var i = this;return this.css(n.property, ""), e.each(r._groups, function (e, t) {
        t.elements = t.elements.not(i);
      }), this;
    }return this.length <= 1 && !n.target ? this : (r._groups.push({ elements: this, options: n }), n.mq && window.matchMedia("only all").matches && !window.matchMedia(n.mq).matches ? this : (r._apply(this, n), this));
  };r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._apply = function (t, n) {
    var s = o(n),
        a = e(t),
        l = [a],
        c = e(window).scrollTop(),
        u = e("html").outerHeight(!0),
        d = a.parents().filter(":hidden");return d.each(function () {
      var t = e(this);t.data("style-cache", t.attr("style"));
    }), d.css("display", "block"), s.byRow && !s.target && (a.each(function () {
      var t = e(this),
          n = "inline-block" === t.css("display") ? "inline-block" : "block";t.data("style-cache", t.attr("style")), t.css({ display: n, "padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px" });
    }), l = function (t) {
      var n = null,
          o = [];return e(t).each(function () {
        var t = e(this),
            r = t.offset().top - i(t.css("margin-top")),
            s = o.length > 0 ? o[o.length - 1] : null;null === s ? o.push(t) : Math.floor(Math.abs(n - r)) <= 1 ? o[o.length - 1] = s.add(t) : o.push(t), n = r;
      }), o;
    }(a), a.each(function () {
      var t = e(this);t.attr("style", t.data("style-cache") || "");
    })), e.each(l, function (t, n) {
      var o = e(n),
          r = 0;if (s.target) r = s.target.outerHeight(!1);else {
        if (s.byRow && o.length <= 1) return void o.css(s.property, "");o.each(function () {
          var t = e(this),
              n = { display: "inline-block" === t.css("display") ? "inline-block" : "block" };n[s.property] = "", t.css(n), t.outerHeight(!1) > r && (r = t.outerHeight(!1)), t.css("display", "");
        });
      }o.each(function () {
        var t = e(this),
            n = 0;s.target && t.is(s.target) || ("border-box" !== t.css("box-sizing") && (n += i(t.css("border-top-width")) + i(t.css("border-bottom-width")), n += i(t.css("padding-top")) + i(t.css("padding-bottom"))), t.css(s.property, r - n));
      });
    }), d.each(function () {
      var t = e(this);t.attr("style", t.data("style-cache") || null);
    }), r._maintainScroll && e(window).scrollTop(c / u * e("html").outerHeight(!0)), this;
  }, r._applyDataApi = function () {
    var t = {};e("[data-match-height], [data-mh]").each(function () {
      var n = e(this),
          i = n.attr("data-mh") || n.attr("data-match-height");t[i] = i in t ? t[i].add(n) : n;
    }), e.each(t, function () {
      this.matchHeight(!0);
    });
  };var s = function s(t) {
    r._beforeUpdate && r._beforeUpdate(t, r._groups), e.each(r._groups, function () {
      if (this.options.mq && window.matchMedia("only all").matches && !window.matchMedia(this.options.mq).matches) return this.elements.css(this.options.property, ""), !0;r._apply(this.elements, this.options);
    }), r._afterUpdate && r._afterUpdate(t, r._groups);
  };r._update = function (i, o) {
    if (o && "resize" === o.type) {
      var a = e(window).width();if (a === t) return;t = a;
    }i ? -1 === n && (n = setTimeout(function () {
      s(o), n = -1;
    }, r._throttle)) : s(o);
  }, e(r._applyDataApi), e(window).bind("load", function (e) {
    r._update(!1, e);
  }), e(window).bind("resize orientationchange", function (e) {
    r._update(!0, e);
  });
}(jQuery), launchGallery(), function () {
  var e,
      t = document.querySelector(".lv-page"),
      n = null;function i() {
    n.offset = 140, window.innerWidth >= 768 && (n.offset = 230), window.innerWidth >= 992 && (n.offset = 230);
  }window.addEventListener("load", function () {
    var _ref;

    if (!n) return n = new Headroom(t, (_ref = { offset: 0, tolerance: 0 }, _defineProperty(_ref, "tolerance", { up: 5, down: 0 }), _defineProperty(_ref, "classes", { initial: "headroom", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom" }), _defineProperty(_ref, "onPin", function onPin() {}), _defineProperty(_ref, "onUnpin", function onUnpin() {}), _defineProperty(_ref, "onTop", function onTop() {}), _defineProperty(_ref, "onNotTop", function onNotTop() {}), _defineProperty(_ref, "onBottom", function onBottom() {}), _defineProperty(_ref, "onNotBottom", function onNotBottom() {}), _ref)), i(), void n.init();
  }), window.addEventListener("resize", function () {
    clearTimeout(e), e = setTimeout(function () {
      n && i();
    }, 250);
  });
}(), function (e) {
  "use strict";
  var t = e("html"),
      n = (e(".lv-page"), e(".lv-off-canvas")),
      i = e(".dropdown", n),
      o = e("li:not(.has-dropdown) > a", i),
      r = e(".submenu-arrow");e("[data-menu-toggle]").on("click", function (e) {
    e.preventDefault(), t.toggleClass("has-open-menu");
  }), r.on("click", function (t) {
    t.preventDefault(), t.stopPropagation(), e(this).parent().next(".dropdown").addClass("is-open");
  }), o.click(function (n) {
    n.preventDefault();var i = e(this).attr("href");t.removeClass("has-open-menu").addClass("has-closed-menu"), setTimeout(function () {
      window.location = i;
    }.bind(i), 200);
  }), i.on("click", function (t) {
    e(this).removeClass("is-open"), t.stopPropagation();
  });
}(jQuery), function (e) {
  "use strict";
  var t = {},
      n = ["xs", "sm", "md", "lg", "xl", "xxl"];function i() {
    var n = e("body");1 != e(".lv-screen-data").length && n.append('<div class="lv-screen-data"></div>');var i,
        o,
        r = window.innerWidth,
        s = window.innerHeight,
        a = e(window).width(),
        l = e(window).height();r < t.sm && (i = "xs"), r >= t.sm && r < t.md && (i = "sm"), r >= t.md && r < t.lg && (i = "md"), r >= t.lg && r < t.xl && (i = "lg"), r >= t.xl && r < t.xxl && (i = "xl"), r >= t.xxl && (i = "xxl"), a < t.sm && (o = "xs"), a >= t.sm && a < t.md && (o = "sm"), a >= t.md && a < t.lg && (o = "md"), a >= t.lg && a < t.xl && (o = "lg"), a >= t.xl && a < t.xxl && (o = "xl"), a >= t.xxl && (o = "xxl"), e(".lv-screen-data").html(a + " x " + l + "<br><small>" + r + " x " + s + "</small><br>" + i + "  [" + o + "]").css({ position: "fixed", top: 0, padding: "5px 10px", background: "rgba(0,0,0,0.5)", "font-family": "Helvetica Neue", "font-size": "14px", color: "white", "z-index": 2147483646 }).click(function () {
      n.toggleClass("developer");
    });
  }!function () {
    for (var i, o = "", r = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("content").replace(/\\a/g, "").replace(/ /g, "").replace(/'/g, "").replace(/"/g, "").split("|"), s = 0; s < r.length; s++) {
      t[n[s]] = Number(r[s].replace("px", "")), o += "<tr><td>" + n[s] + "</td><td>" + r[s] + "</td></tr>";
    }i = '<table class="table breakpoints-table" style="width: 300px;">' + o + "</table>", e('[data-js="lv-responsive-table"]').append(i);
  }(), e("html[development]").length && (i(), e(window).resize(function () {
    i();
  }));
}(jQuery), function (e) {
  "use strict";
  e("[data-slider]").each(function () {
    var t = e(this),
        n = e("[data-flickity]", t),
        i = e(".slider-prev-btn", t),
        o = e(".slider-next-btn", t);n.children().length > 1 && (i.on("click", function () {
      n.flickity("previous").flickity("stopPlayer");
    }), o.on("click", function () {
      n.flickity("next").flickity("stopPlayer");
    }));
  });
}(jQuery), function () {
  "use strict";
  var e = document.querySelector("body > [data-global-search]"),
      t = e.querySelector("input"),
      n = document.querySelectorAll("[data-search-trigger]");function i() {
    e.classList.remove("active"), document.activeElement.blur();
  }window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), n.forEach(function (t) {
    t.addEventListener("click", function (t) {
      t.preventDefault(), e.classList.add("active"), e.querySelector("input").focus();
    });
  }), e.addEventListener("mousedown", i), t.addEventListener("mousedown", function (e) {
    e.stopPropagation();
  }), document.addEventListener("keyup", function (e) {
    27 === e.keyCode && i();
  });
}(), $(function () {
  $.Scrollax();
});var wow = new WOW({ boxClass: "wow", animateClass: "animated", offset: 0, mobile: !1, live: !0, callback: function callback(e) {}, scrollContainer: null, resetAnimation: !0 });wow.init();var headings = document.querySelectorAll(".display-1:not(.is-unique), h2.text-uppercase:not(.is-unique)");function boldSecondWord(e) {
  var t = e.textContent.trim().split(" "),
      n = t[0],
      i = t.slice(1).join(" ");e.innerHTML = n + ' <span class="font-weight-normal">' + i + "</span>";
}headings.forEach(function (e) {
  boldSecondWord(e);
}), $("[data-equal-height]").matchHeight({ byRow: !1, property: "height", target: null, remove: !1, mq: "(min-width: 768px)" }), $("[data-sitemap-trigger]").on("click", function (e) {
  $(".fa", $(this)).toggleClass("fa-angle-down"), $("[data-sitemap]").toggleClass("is-collapsed");
}), $('a[href*="#"]:not([href="#"], [data-toggle="tab"])').on("click", function () {
  var e = $(this).attr("href"),
      t = $(e),
      n = $(".global-header").height();if (t.length) return $.scrollTo(t.offset().top - n, 800), !1;
}), $("[data-back-top]").click(function () {
  $.scrollTo(0, 500);
});
