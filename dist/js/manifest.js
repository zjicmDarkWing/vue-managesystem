! function(e) {
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
  }
  var n = window.webpackJsonp;
  var url = 'http://opvyx1uc9.bkt.clouddn.com/practice/js/'
  window.webpackJsonp = function(t, a, c) {
    for (var u, i, f, s = 0, l = []; s < t.length; s++) i = t[s], o[i] && l.push(o[i][0]), o[i] = 0;
    for (u in a) Object.prototype.hasOwnProperty.call(a, u) && (e[u] = a[u]);
    for (n && n(t, a, c); l.length;) l.shift()();
    if (c)
      for (s = 0; s < c.length; s++) f = r(r.s = c[s]);
    return f
  };
  var t = {},
    o = {
      3: 0
    };
  r.e = function(e) {
    function n() {
      c.onerror = c.onload = null, clearTimeout(u);
      var r = o[e];
      0 !== r && (r && r[1](new Error("Loading chunk " + e + " failed.")), o[e] = void 0)
    }
    if (0 === o[e]) return Promise.resolve();
    if (o[e]) return o[e][2];
    var t = new Promise(function(r, n) {
      o[e] = [r, n]
    });
    o[e][2] = t;
    var a = document.getElementsByTagName("head")[0],
      c = document.createElement("script");
    c.type = "text/javascript", c.charset = "utf-8", c.async = !0, c.timeout = 12e4, r.nc && c.setAttribute("nonce", r.nc), c.src = r.p +
      url + ({
      0: "group-home",
      1: "group-teacher",
      2: "index"
    }[e] || e) + ".js?" + {
      0: "888266a8ebe841b6caf5",
      1: "5af8fabc636919f4a20e",
      2: "7fb216b6f2a39b400f71"
    }[e];
    var u = setTimeout(n, 12e4);
    return c.onerror = c.onload = n, a.appendChild(c), t
  }, r.m = e, r.c = t, r.i = function(e) {
    return e
  }, r.d = function(e, n, t) {
    r.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: t
    })
  }, r.n = function(e) {
    var n = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return r.d(n, "a", n), n
  }, r.o = function(e, r) {
    return Object.prototype.hasOwnProperty.call(e, r)
  }, r.p = "", r.oe = function(e) {
    throw console.error(e), e
  }
}([]);
