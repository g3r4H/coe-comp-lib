import { html as N, LitElement as _e } from "lit";
import { styleMap as lt } from "lit/directives/style-map.js";
import { property as He, customElement as Ne, state as st } from "lit/decorators.js";
const se = ({ primary: e, backgroundColor: t, size: r, label: o, onClick: n }) => {
  const a = e ? "storybook-button--primary" : "storybook-button--secondary";
  return N`
    <button
      type="button"
      class=${["storybook-button", `storybook-button--${r || "medium"}`, a].join(" ")}
      style=${lt({ backgroundColor: t })}
      @click=${n}
    >
      ${o}
    </button>
  `;
};
function Ce(e) {
  return [
    ...e.v,
    (e.i ? "!" : "") + e.n
  ].join(":");
}
function ct(e, t = ",") {
  return e.map(Ce).join(t);
}
let Ge = typeof CSS < "u" && CSS.escape || // Simplified: escaping only special characters
// Needed for NodeJS and Edge <79 (https://caniuse.com/mdn-api_css_escape)
((e) => e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function re(e) {
  for (var t = 9, r = e.length; r--; ) t = Math.imul(t ^ e.charCodeAt(r), 1597334677);
  return "#" + ((t ^ t >>> 9) >>> 0).toString(36);
}
function $e(e, t = "@media ") {
  return t + w(e).map((r) => (typeof r == "string" && (r = {
    min: r
  }), r.raw || Object.keys(r).map((o) => `(${o}-width:${r[o]})`).join(" and "))).join(",");
}
function w(e = []) {
  return Array.isArray(e) ? e : e == null ? [] : [
    e
  ];
}
function Ee(e) {
  return e;
}
function ze() {
}
let S = {
  /**
  * 1. `default` (public)
  */
  d: (
    /* efaults */
    0
  ),
  /* Shifts.layer */
  /**
  * 2. `base` (public) — for things like reset rules or default styles applied to plain HTML elements.
  */
  b: (
    /* ase */
    134217728
  ),
  /* Shifts.layer */
  /**
  * 3. `components` (public, used by `style()`) — is for class-based styles that you want to be able to override with utilities.
  */
  c: (
    /* omponents */
    268435456
  ),
  /* Shifts.layer */
  // reserved for style():
  // - props: 0b011
  // - when: 0b100
  /**
  * 6. `aliases` (public, used by `apply()`) — `~(...)`
  */
  a: (
    /* liases */
    671088640
  ),
  /* Shifts.layer */
  /**
  * 6. `utilities` (public) — for small, single-purpose classes
  */
  u: (
    /* tilities */
    805306368
  ),
  /* Shifts.layer */
  /**
  * 7. `overrides` (public, used by `css()`)
  */
  o: (
    /* verrides */
    939524096
  )
};
function qe(e) {
  var t;
  return ((t = e.match(/[-=:;]/g)) == null ? void 0 : t.length) || 0;
}
function he(e) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | /* Shifts.responsive */
  Math.min(qe(e), 15) << 18;
}
let dt = [
  /* fi */
  "rst-c",
  /* hild: 0 */
  /* la */
  "st-ch",
  /* ild: 1 */
  // even and odd use: nth-child
  /* nt */
  "h-chi",
  /* ld: 2 */
  /* an */
  "y-lin",
  /* k: 3 */
  /* li */
  "nk",
  /* : 4 */
  /* vi */
  "sited",
  /* : 5 */
  /* ch */
  "ecked",
  /* : 6 */
  /* em */
  "pty",
  /* : 7 */
  /* re */
  "ad-on",
  /* ly: 8 */
  /* fo */
  "cus-w",
  /* ithin : 9 */
  /* ho */
  "ver",
  /* : 10 */
  /* fo */
  "cus",
  /* : 11 */
  /* fo */
  "cus-v",
  /* isible : 12 */
  /* ac */
  "tive",
  /* : 13 */
  /* di */
  "sable",
  /* d : 14 */
  /* op */
  "tiona",
  /* l: 15 */
  /* re */
  "quire"
];
function Ae({ n: e, i: t, v: r = [] }, o, n, a) {
  e && (e = Ce({
    n: e,
    i: t,
    v: r
  })), a = [
    ...w(a)
  ];
  for (let s of r) {
    let i = o.theme("screens", s);
    for (let f of w(i && $e(i) || o.v(s))) {
      var l;
      a.push(f), n |= i ? 67108864 | /* Shifts.screens */
      he(f) : s == "dark" ? 1073741824 : (
        /* Shifts.darkMode */
        f[0] == "@" ? he(f) : (l = f, // use first found pseudo-class
        1 << ~(/:([a-z-]+)/.test(l) && ~dt.indexOf(RegExp.$1.slice(2, 7)) || -18))
      );
    }
  }
  return {
    n: e,
    p: n,
    r: a,
    i: t
  };
}
let Ye = /* @__PURE__ */ new Map();
function be(e) {
  if (e.d) {
    let t = [], r = ce(
      // merge all conditions into a selector string
      e.r.reduce((o, n) => n[0] == "@" ? (t.push(n), o) : (
        // Go over the selector and replace the matching multiple selectors if any
        n ? ce(o, (a) => ce(
          n,
          // If the current condition has a nested selector replace it
          (l) => {
            let s = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(l);
            if (s) {
              let i = a.indexOf(s[1]);
              return ~i ? (
                // [':merge(.group):hover .rule', ':merge(.group):focus &'] -> ':merge(.group):focus:hover .rule'
                // ':merge(.group)' + ':focus' + ':hover .rule'
                a.slice(0, i) + s[0] + a.slice(i + s[1].length)
              ) : (
                // [':merge(.peer):focus~&', ':merge(.group):hover &'] -> ':merge(.peer):focus~:merge(.group):hover &'
                de(a, l)
              );
            }
            return de(l, a);
          }
        )) : o
      ), "&"),
      // replace '&' with rule name or an empty string
      (o) => de(o, e.n ? "." + Ge(e.n) : "")
    );
    return r && t.push(r.replace(/:merge\((.+?)\)/g, "$1")), t.reduceRight((o, n) => n + "{" + o + "}", e.d);
  }
}
function ce(e, t) {
  return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, o, n) => t(o) + n);
}
function de(e, t) {
  return e.replace(/&/g, t);
}
let je = new Intl.Collator("en", {
  numeric: !0
});
function Je(e, t) {
  for (var r = 0, o = e.length; r < o; ) {
    let n = o + r >> 1;
    0 >= Xe(e[n], t) ? r = n + 1 : o = n;
  }
  return o;
}
function Xe(e, t) {
  let r = e.p & S.o;
  return r == (t.p & S.o) && (r == S.b || r == S.o) ? 0 : e.p - t.p || e.o - t.o || je.compare(De(e.n), De(t.n)) || je.compare(We(e.n), We(t.n));
}
function De(e) {
  return (e || "").split(/:/).pop().split("/").pop() || "\0";
}
function We(e) {
  return (e || "").replace(/\W/g, (t) => String.fromCharCode(127 + t.charCodeAt(0))) + "\0";
}
function fe(e, t) {
  return Math.round(parseInt(e, 16) * t);
}
function U(e, t = {}) {
  if (typeof e == "function") return e(t);
  let { opacityValue: r = "1", opacityVariable: o } = t, n = o ? `var(${o})` : r;
  if (e.includes("<alpha-value>")) return e.replace("<alpha-value>", n);
  if (e[0] == "#" && (e.length == 4 || e.length == 7)) {
    let a = (e.length - 1) / 3, l = [
      17,
      1,
      0.062272
    ][a - 1];
    return `rgba(${[
      fe(e.substr(1, a), l),
      fe(e.substr(1 + a, a), l),
      fe(e.substr(1 + 2 * a, a), l),
      n
    ]})`;
  }
  return n == "1" ? e : n == "0" ? "#0000" : (
    // convert rgb and hsl to alpha variant
    e.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n})`)
  );
}
function Ze(e, t, r, o, n = []) {
  return function a(l, { n: s, p: i, r: f = [], i: p }, u) {
    let g = [], y = "", x = 0, v = 0;
    for (let h in l || {}) {
      var z, P;
      let k = l[h];
      if (h[0] == "@") {
        if (!k) continue;
        if (h[1] == "a") {
          g.push(...Fe(s, i, ne("" + k), u, i, f, p, !0));
          continue;
        }
        if (h[1] == "l") {
          for (let R of w(k)) g.push(...a(R, {
            n: s,
            p: (z = S[h[7]], // Set layer (first reset, than set)
            i & ~S.o | z),
            r: h[7] == "d" ? [] : f,
            i: p
          }, u));
          continue;
        }
        if (h[1] == "i") {
          g.push(...w(k).map((R) => ({
            // before all layers
            p: -1,
            o: 0,
            r: [],
            d: h + " " + R
          })));
          continue;
        }
        if (h[1] == "k") {
          g.push({
            p: S.d,
            o: 0,
            r: [
              h
            ],
            d: a(k, {
              p: S.d
            }, u).map(be).join("")
          });
          continue;
        }
        if (h[1] == "f") {
          g.push(...w(k).map((R) => ({
            p: S.d,
            o: 0,
            r: [
              h
            ],
            d: a(R, {
              p: S.d
            }, u).map(be).join("")
          })));
          continue;
        }
      }
      if (typeof k != "object" || Array.isArray(k))
        h == "label" && k ? s = k + re(JSON.stringify([
          i,
          p,
          l
        ])) : (k || k === 0) && (h = h.replace(/[A-Z]/g, (R) => "-" + R.toLowerCase()), v += 1, x = Math.max(x, (P = h)[0] == "-" ? 0 : qe(P) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(P) ? +!!RegExp.$1 || /* +1 */
        -!!RegExp.$2 : (
          /* -1 */
          0
        )) + 1), y += (y ? ";" : "") + w(k).map((R) => u.s(
          h,
          // support theme(...) function in values
          // calc(100vh - theme('spacing.12'))
          Re("" + R, u.theme) + (p ? " !important" : "")
        )).join(";"));
      else if (h[0] == "@" || h.includes("&")) {
        let R = i;
        h[0] == "@" && (h = h.replace(/\bscreen\(([^)]+)\)/g, (ae, G) => {
          let V = u.theme("screens", G);
          return V ? (R |= 67108864, /* Shifts.screens */
          $e(V, "")) : ae;
        }), R |= he(h)), g.push(...a(k, {
          n: s,
          p: R,
          r: [
            ...f,
            h
          ],
          i: p
        }, u));
      } else
        g.push(...a(k, {
          p: i,
          r: [
            ...f,
            h
          ]
        }, u));
    }
    return (
      // PERF: prevent unshift using `rules = [{}]` above and then `rules[0] = {...}`
      g.unshift({
        n: s,
        p: i,
        o: (
          // number of declarations (descending)
          Math.max(0, 15 - v) + // greatest precedence of properties
          // if there is no property precedence this is most likely a custom property only declaration
          // these have the highest precedence
          1.5 * Math.min(x || 15, 15)
        ),
        r: f,
        // stringified declarations
        d: y
      }), g.sort(Xe)
    );
  }(e, Ae(t, r, o, n), r);
}
function Re(e, t) {
  return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, o, n, a, l = "") => {
    let s = t(n, l);
    return typeof s == "function" && /color|fill|stroke/i.test(n) ? U(s) : "" + w(s).filter((i) => Object(i) !== i);
  });
}
function Qe(e, t) {
  let r, o = [];
  for (let n of e)
    n.d && n.n ? (r == null ? void 0 : r.p) == n.p && "" + r.r == "" + n.r ? (r.c = [
      r.c,
      n.c
    ].filter(Boolean).join(" "), r.d = r.d + ";" + n.d) : o.push(r = {
      ...n,
      n: n.n && t
    }) : o.push({
      ...n,
      n: n.n && t
    });
  return o;
}
function oe(e, t, r = S.u, o, n) {
  let a = [];
  for (let l of e) for (let s of function(i, f, p, u, g) {
    i = {
      ...i,
      i: i.i || g
    };
    let y = function(x, v) {
      let z = Ye.get(x.n);
      return z ? z(x, v) : v.r(x.n, x.v[0] == "dark");
    }(i, f);
    return y ? (
      // a list of class names
      typeof y == "string" ? ({ r: u, p } = Ae(i, f, p, u), Qe(oe(ne(y), f, p, u, i.i), i.n)) : Array.isArray(y) ? y.map((x) => {
        var v, z;
        return {
          o: 0,
          ...x,
          r: [
            ...w(u),
            ...w(x.r)
          ],
          p: (v = p, z = x.p ?? p, v & ~S.o | z)
        };
      }) : Ze(y, i, f, p, u)
    ) : (
      // propagate className as is
      [
        {
          c: Ce(i),
          p: 0,
          o: 0,
          r: []
        }
      ]
    );
  }(l, t, r, o, n)) a.splice(Je(a, s), 0, s);
  return a;
}
function Fe(e, t, r, o, n, a, l, s) {
  return Qe((s ? r.flatMap((i) => oe([
    i
  ], o, n, a, l)) : oe(r, o, n, a, l)).map((i) => (
    // do not move defaults
    // move only rules with a name unless they are in the base layer
    i.p & S.o && (i.n || t == S.b) ? {
      ...i,
      p: i.p & ~S.o | t,
      o: 0
    } : i
  )), e);
}
function ft(e, t, r, o) {
  var n;
  return n = (a, l) => {
    let { n: s, p: i, r: f, i: p } = Ae(a, l, t);
    return r && Fe(s, t, r, l, i, f, p, o);
  }, Ye.set(e, n), e;
}
function pe(e, t, r) {
  if (e[e.length - 1] != "(") {
    let o = [], n = !1, a = !1, l = "";
    for (let s of e) if (!(s == "(" || /[~@]$/.test(s))) {
      if (s[0] == "!" && (s = s.slice(1), n = !n), s.endsWith(":")) {
        o[s == "dark:" ? "unshift" : "push"](s.slice(0, -1));
        continue;
      }
      s[0] == "-" && (s = s.slice(1), a = !a), s.endsWith("-") && (s = s.slice(0, -1)), s && s != "&" && (l += (l && "-") + s);
    }
    l && (a && (l = "-" + l), t[0].push({
      n: l,
      v: o.filter(pt),
      i: n
    }));
  }
}
function pt(e, t, r) {
  return r.indexOf(e) == t;
}
let Ve = /* @__PURE__ */ new Map();
function ne(e) {
  let t = Ve.get(e);
  if (!t) {
    let r = [], o = [
      []
    ], n = 0, a = 0, l = null, s = 0, i = (f, p = 0) => {
      n != s && (r.push(e.slice(n, s + p)), f && pe(r, o)), n = s + 1;
    };
    for (; s < e.length; s++) {
      let f = e[s];
      if (a) e[s - 1] != "\\" && (a += +(f == "[") || -(f == "]"));
      else if (f == "[")
        a += 1;
      else if (l)
        e[s - 1] != "\\" && l.test(e.slice(s)) && (l = null, n = s + RegExp.lastMatch.length);
      else if (f == "/" && e[s - 1] != "\\" && (e[s + 1] == "*" || e[s + 1] == "/"))
        l = e[s + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (f == "(")
        i(), r.push(f);
      else if (f == ":") e[s + 1] != ":" && i(!1, 1);
      else if (/[\s,)]/.test(f)) {
        i(!0);
        let p = r.lastIndexOf("(");
        if (f == ")") {
          let u = r[p - 1];
          if (/[~@]$/.test(u)) {
            let g = o.shift();
            r.length = p, pe([
              ...r,
              "#"
            ], o);
            let { v: y } = o[0].pop();
            for (let x of g)
              x.v.splice(+(x.v[0] == "dark") - +(y[0] == "dark"), y.length);
            pe([
              ...r,
              ft(
                // named nested
                u.length > 1 ? u.slice(0, -1) + re(JSON.stringify([
                  u,
                  g
                ])) : u + "(" + ct(g) + ")",
                S.a,
                g,
                /@$/.test(u)
              )
            ], o);
          }
          p = r.lastIndexOf("(", p - 1);
        }
        r.length = p + 1;
      } else /[~@]/.test(f) && e[s + 1] == "(" && // start nested block
      // ~(...) or button~(...)
      // @(...) or button@(...)
      o.unshift([]);
    }
    i(!0), Ve.set(e, t = o[0]);
  }
  return t;
}
function c(e, t, r) {
  return [
    e,
    we(t, r)
  ];
}
function we(e, t) {
  return typeof e == "function" ? e : typeof e == "string" && /^[\w-]+$/.test(e) ? (
    // a CSS property alias
    (r, o) => ({
      [e]: t ? t(r, o) : ye(r, 1)
    })
  ) : (r) => (
    // CSSObject, shortcut or apply
    e || {
      [r[1]]: ye(r, 2)
    }
  );
}
function ye(e, t, r = e.slice(t).find(Boolean) || e.$$ || e.input) {
  return e.input[0] == "-" ? `calc(${r} * -1)` : r;
}
function d(e, t, r, o) {
  return [
    e,
    ut(t, r, o)
  ];
}
function ut(e, t, r) {
  let o = typeof t == "string" ? (n, a) => ({
    [t]: r ? r(n, a) : n._
  }) : t || (({ 1: n, _: a }, l, s) => ({
    [n || s]: a
  }));
  return (n, a) => {
    let l = Ke(e || n[1]), s = a.theme(l, n.$$) ?? I(n.$$, l, a);
    if (s != null) return n._ = ye(n, 0, s), o(n, a, l);
  };
}
function C(e, t = {}, r) {
  return [
    e,
    gt(t, r)
  ];
}
function gt(e = {}, t) {
  return (r, o) => {
    let { section: n = Ke(r[0]).replace("-", "") + "Color" } = e, [a, l] = mt(r.$$);
    if (!a) return;
    let s = o.theme(n, a) || I(a, n, o);
    if (!s || typeof s == "object") return;
    let {
      // text- -> --tw-text-opacity
      // ring-offset(?:-|$) -> --tw-ring-offset-opacity
      // TODO move this default into preset-tailwind?
      opacityVariable: i = `--tw-${r[0].replace(/-$/, "")}-opacity`,
      opacitySection: f = n.replace("Color", "Opacity"),
      property: p = n,
      selector: u
    } = e, g = o.theme(f, l || "DEFAULT") || l && I(l, f, o), y = t || (({ _: v }) => {
      let z = te(p, v);
      return u ? {
        [u]: z
      } : z;
    });
    r._ = {
      value: U(s, {
        opacityVariable: i || void 0,
        opacityValue: g || void 0
      }),
      color: (v) => U(s, v),
      opacityVariable: i || void 0,
      opacityValue: g || void 0
    };
    let x = y(r, o);
    if (!r.dark) {
      let v = o.d(n, a, s);
      v && v !== s && (r._ = {
        value: U(v, {
          opacityVariable: i || void 0,
          opacityValue: g || "1"
        }),
        color: (z) => U(v, z),
        opacityVariable: i || void 0,
        opacityValue: g || void 0
      }, x = {
        "&": x,
        [o.v("dark")]: y(r, o)
      });
    }
    return x;
  };
}
function mt(e) {
  return (e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/) || []).slice(1);
}
function te(e, t) {
  let r = {};
  return typeof t == "string" ? r[e] = t : (t.opacityVariable && t.value.includes(t.opacityVariable) && (r[t.opacityVariable] = t.opacityValue || "1"), r[e] = t.value), r;
}
function I(e, t, r) {
  if (e[0] == "[" && e.slice(-1) == "]") {
    if (e = K(Re(e.slice(1, -1), r.theme)), !t) return e;
    if (
      // Respect type hints from the user on ambiguous arbitrary values - https://tailwindcss.com/docs/adding-custom-styles#resolving-ambiguities
      !// If this is a color section and the value is a hex color, color function or color name
      (/color|fill|stroke/i.test(t) && !(/^color:/.test(e) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e)) || // url(, [a-z]-gradient(, image(, cross-fade(, image-set(
      /image/i.test(t) && !(/^image:/.test(e) || /^[a-z-]+\(/.test(e)) || // font-*
      // - fontWeight (type: ['lookup', 'number', 'any'])
      // - fontFamily (type: ['lookup', 'generic-name', 'family-name'])
      /weight/i.test(t) && !(/^(number|any):/.test(e) || /^\d+$/.test(e)) || // bg-*
      // - backgroundPosition (type: ['lookup', ['position', { preferOnConflict: true }]])
      // - backgroundSize (type: ['lookup', 'length', 'percentage', 'size'])
      /position/i.test(t) && /^(length|size):/.test(e))
    )
      return e.replace(/^[a-z-]+:/, "");
  }
}
function Ke(e) {
  return e.replace(/-./g, (t) => t[1].toUpperCase());
}
function K(e) {
  return (
    // Keep raw strings if it starts with `url(`
    e.includes("url(") ? e.replace(/(.*?)(url\(.*?\))(.*?)/g, (t, r = "", o, n = "") => K(r) + o + K(n)) : e.replace(/(^|[^\\])_+/g, (t, r) => r + " ".repeat(t.length - r.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t) => t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "))
  );
}
function et({ presets: e = [], ...t }) {
  let r = {
    darkMode: void 0,
    darkColor: void 0,
    preflight: t.preflight !== !1 && [],
    theme: {},
    variants: w(t.variants),
    rules: w(t.rules),
    ignorelist: w(t.ignorelist),
    hash: void 0,
    stringify: (o, n) => o + ":" + n,
    finalize: []
  };
  for (let o of w([
    ...e,
    {
      darkMode: t.darkMode,
      darkColor: t.darkColor,
      preflight: t.preflight !== !1 && w(t.preflight),
      theme: t.theme,
      hash: t.hash,
      stringify: t.stringify,
      finalize: t.finalize
    }
  ])) {
    let { preflight: n, darkMode: a = r.darkMode, darkColor: l = r.darkColor, theme: s, variants: i, rules: f, ignorelist: p, hash: u = r.hash, stringify: g = r.stringify, finalize: y } = typeof o == "function" ? o(r) : o;
    r = {
      // values defined by user or previous presets take precedence
      preflight: r.preflight !== !1 && n !== !1 && [
        ...r.preflight,
        ...w(n)
      ],
      darkMode: a,
      darkColor: l,
      theme: {
        ...r.theme,
        ...s,
        extend: {
          ...r.theme.extend,
          ...s == null ? void 0 : s.extend
        }
      },
      variants: [
        ...r.variants,
        ...w(i)
      ],
      rules: [
        ...r.rules,
        ...w(f)
      ],
      ignorelist: [
        ...r.ignorelist,
        ...w(p)
      ],
      hash: u,
      stringify: g,
      finalize: [
        ...r.finalize,
        ...w(y)
      ]
    };
  }
  return r;
}
function Me(e, t, r, o, n, a) {
  for (let l of t) {
    let s = r.get(l);
    s || r.set(l, s = o(l));
    let i = s(e, n, a);
    if (i) return i;
  }
}
function ht(e) {
  var t;
  return xe(e[0], typeof (t = e[1]) == "function" ? t : () => t);
}
function bt(e) {
  var t, r;
  return Array.isArray(e) ? xe(e[0], we(e[1], e[2])) : xe(e, we(t, r));
}
function xe(e, t) {
  return tt(e, (r, o, n, a) => {
    let l = o.exec(r);
    if (l) return (
      // MATCH.$_ = value
      l.$$ = r.slice(l[0].length), l.dark = a, t(l, n)
    );
  });
}
function tt(e, t) {
  let r = w(e).map(wt);
  return (o, n, a) => {
    for (let l of r) {
      let s = t(o, l, n, a);
      if (s) return s;
    }
  };
}
function wt(e) {
  return typeof e == "string" ? RegExp("^" + e + (e.includes("$") || e.slice(-1) == "-" ? "" : "$")) : e;
}
function yt(e, t) {
  let r = et(e), o = function({ theme: i, darkMode: f, darkColor: p = ze, variants: u, rules: g, hash: y, stringify: x, ignorelist: v, finalize: z }) {
    let P = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), ae = tt(v, (b, A) => A.test(b));
    u.push([
      "dark",
      Array.isArray(f) || f == "class" ? `${w(f)[1] || ".dark"} &` : typeof f == "string" && f != "media" ? f : (
        // a custom selector
        "@media (prefers-color-scheme:dark)"
      )
    ]);
    let G = typeof y == "function" ? (b) => y(b, re) : y ? re : Ee;
    G !== Ee && z.push((b) => {
      var A;
      return {
        ...b,
        n: b.n && G(b.n),
        d: (A = b.d) == null ? void 0 : A.replace(/--(tw(?:-[\w-]+)?)\b/g, (j, le) => "--" + G(le).replace("#", ""))
      };
    });
    let V = {
      theme: function({ extend: b = {}, ...A }) {
        let j = {}, le = {
          get colors() {
            return Y("colors");
          },
          theme: Y,
          // Stub implementation as negated values are automatically infered and do _not_ need to be in the theme
          negative() {
            return {};
          },
          breakpoints($) {
            let F = {};
            for (let T in $) typeof $[T] == "string" && (F["screen-" + T] = $[T]);
            return F;
          }
        };
        return Y;
        function Y($, F, T, J) {
          if ($) {
            if ({ 1: $, 2: J } = // eslint-disable-next-line no-sparse-arrays
            /^(\S+?)(?:\s*\/\s*([^/]+))?$/.exec($) || [
              ,
              $
            ], /[.[]/.test($)) {
              let D = [];
              $.replace(/\[([^\]]+)\]|([^.[]+)/g, (_, Z, at = Z) => D.push(at)), $ = D.shift(), T = F, F = D.join("-");
            }
            let M = j[$] || // two-step deref to allow extend section to reference base section
            Object.assign(Object.assign(
              // Make sure to not get into recursive calls
              j[$] = {},
              Oe(A, $)
            ), Oe(b, $));
            if (F == null) return M;
            F || (F = "DEFAULT");
            let B = M[F] ?? F.split("-").reduce((D, _) => D == null ? void 0 : D[_], M) ?? T;
            return J ? U(B, {
              opacityValue: Re(J, Y)
            }) : B;
          }
          let X = {};
          for (let M of [
            ...Object.keys(A),
            ...Object.keys(b)
          ]) X[M] = Y(M);
          return X;
        }
        function Oe($, F) {
          let T = $[F];
          return typeof T == "function" && (T = T(le)), T && /color|fill|stroke/i.test(F) ? function J(X, M = []) {
            let B = {};
            for (let D in X) {
              let _ = X[D], Z = [
                ...M,
                D
              ];
              B[Z.join("-")] = _, D == "DEFAULT" && (Z = M, B[M.join("-")] = _), typeof _ == "object" && Object.assign(B, J(_, Z));
            }
            return B;
          }(T) : T;
        }
      }(i),
      e: Ge,
      h: G,
      s(b, A) {
        return x(b, A, V);
      },
      d(b, A, j) {
        return p(b, A, V, j);
      },
      v(b) {
        return P.has(b) || P.set(b, Me(b, u, h, ht, V) || "&:" + b), P.get(b);
      },
      r(b, A) {
        let j = JSON.stringify([
          b,
          A
        ]);
        return k.has(j) || k.set(j, !ae(b, V) && Me(b, g, R, bt, V, A)), k.get(j);
      },
      f(b) {
        return z.reduce((A, j) => j(A, V), b);
      }
    };
    return V;
  }(r), n = /* @__PURE__ */ new Map(), a = [], l = /* @__PURE__ */ new Set();
  t.resume((i) => n.set(i, i), (i, f) => {
    t.insert(i, a.length, f), a.push(f), l.add(i);
  });
  function s(i) {
    let f = o.f(i), p = be(f);
    if (p && !l.has(p)) {
      l.add(p);
      let u = Je(a, i);
      t.insert(p, u, i), a.splice(u, 0, i);
    }
    return f.n;
  }
  return Object.defineProperties(function(f) {
    if (!n.size) for (let u of w(r.preflight))
      typeof u == "function" && (u = u(o)), u && (typeof u == "string" ? Fe("", S.b, ne(u), o, S.b, [], !1, !0) : Ze(u, {}, o, S.b)).forEach(s);
    f = "" + f;
    let p = n.get(f);
    if (!p) {
      let u = /* @__PURE__ */ new Set();
      for (let g of oe(ne(f), o)) u.add(g.c).add(s(g));
      p = [
        ...u
      ].filter(Boolean).join(" "), n.set(f, p).set(p, p);
    }
    return p;
  }, Object.getOwnPropertyDescriptors({
    get target() {
      return t.target;
    },
    theme: o.theme,
    config: r,
    snapshot() {
      let i = t.snapshot(), f = new Set(l), p = new Map(n), u = [
        ...a
      ];
      return () => {
        i(), l = f, n = p, a = u;
      };
    },
    clear() {
      t.clear(), l = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), a = [];
    },
    destroy() {
      this.clear(), t.destroy();
    }
  }));
}
function xt(e, t) {
  return e != t && "" + e.split(" ").sort() != "" + t.split(" ").sort();
}
function vt(e) {
  let t = new MutationObserver(r);
  return {
    observe(n) {
      t.observe(n, {
        attributeFilter: [
          "class"
        ],
        subtree: !0,
        childList: !0
      }), o(n), r([
        {
          target: n,
          type: ""
        }
      ]);
    },
    disconnect() {
      t.disconnect();
    }
  };
  function r(n) {
    for (let { type: a, target: l } of n) if (a[0] == "a")
      o(l);
    else
      for (let s of l.querySelectorAll("[class]")) o(s);
    t.takeRecords();
  }
  function o(n) {
    var s;
    let a, l = (s = n.getAttribute) == null ? void 0 : s.call(n, "class");
    l && xt(l, a = e(l)) && // Not using `target.className = ...` as that is read-only for SVGElements
    n.setAttribute("class", a);
  }
}
function kt(e) {
  let t = document.querySelector(e || 'style[data-twind=""]');
  return (!t || t.tagName != "STYLE") && (t = document.createElement("style"), document.head.prepend(t)), t.dataset.twind = "claimed", t;
}
function ue(e) {
  let t = e != null && e.cssRules ? e : (e && typeof e != "string" ? e : kt(e)).sheet;
  return {
    target: t,
    snapshot() {
      let r = Array.from(t.cssRules, (o) => o.cssText);
      return () => {
        this.clear(), r.forEach(this.insert);
      };
    },
    clear() {
      for (let r = t.cssRules.length; r--; ) t.deleteRule(r);
    },
    destroy() {
      var r;
      (r = t.ownerNode) == null || r.remove();
    },
    insert(r, o) {
      try {
        t.insertRule(r, o);
      } catch {
        t.insertRule(":root{}", o);
      }
    },
    resume: ze
  };
}
function rt(e, t = !0) {
  let r = function() {
    if (St) try {
      let i = ue(new CSSStyleSheet());
      return i.connect = (f) => {
        let p = ge(f);
        p.adoptedStyleSheets = [
          ...p.adoptedStyleSheets,
          i.target
        ];
      }, i.disconnect = ze, i;
    } catch {
    }
    let a = document.createElement("style");
    a.media = "not all", document.head.prepend(a);
    let l = [
      ue(a)
    ], s = /* @__PURE__ */ new WeakMap();
    return {
      get target() {
        return l[0].target;
      },
      snapshot() {
        let i = l.map((f) => f.snapshot());
        return () => i.forEach((f) => f());
      },
      clear() {
        l.forEach((i) => i.clear());
      },
      destroy() {
        l.forEach((i) => i.destroy());
      },
      insert(i, f, p) {
        l[0].insert(i, f, p);
        let u = this.target.cssRules[f];
        l.forEach((g, y) => y && g.target.insertRule(u.cssText, f));
      },
      resume(i, f) {
        return l[0].resume(i, f);
      },
      connect(i) {
        let f = document.createElement("style");
        ge(i).appendChild(f);
        let p = ue(f), { cssRules: u } = this.target;
        for (let g = 0; g < u.length; g++) p.target.insertRule(u[g].cssText, g);
        l.push(p), s.set(i, p);
      },
      disconnect(i) {
        let f = l.indexOf(s.get(i));
        f >= 0 && l.splice(f, 1);
      }
    };
  }(), o = yt({
    ...e,
    // in production use short hashed class names
    hash: e.hash ?? t
  }, r), n = vt(o);
  return function(l) {
    return class extends l {
      connectedCallback() {
        var i;
        (i = super.connectedCallback) == null || i.call(this), r.connect(this), n.observe(ge(this));
      }
      disconnectedCallback() {
        var i;
        r.disconnect(this), (i = super.disconnectedCallback) == null || i.call(this);
      }
      constructor(...i) {
        super(...i), this.tw = o;
      }
    };
  };
}
let St = typeof ShadowRoot < "u" && (typeof ShadyCSS > "u" || ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
function ge(e) {
  return e.shadowRoot || e.attachShadow({
    mode: "open"
  });
}
var Ct = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
function $t(e) {
  return Ct.get(e);
}
function zt(e) {
  var t = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(e);
  return t ? t[1] ? 1 : t[2] ? 2 : t[3] ? 3 : 5 : 0;
}
function At(e, t) {
  var r = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(e);
  return r ? r[1] ? /^sti/i.test(t) ? 1 : 0 : r[2] ? /^pat/i.test(t) ? 1 : 0 : r[3] ? /^image-/i.test(t) ? 1 : 0 : r[4] ? t[3] === "-" ? 2 : 0 : /^(?:inline-)?grid$/i.test(t) ? 4 : 0 : 0;
}
let Rt = [
  [
    "-webkit-",
    1
  ],
  // 0b001
  [
    "-moz-",
    2
  ],
  // 0b010
  [
    "-ms-",
    4
  ]
];
function Ft() {
  return ({ stringify: e }) => ({
    stringify(t, r, o) {
      let n = "", a = $t(t);
      a && (n += e(a, r, o) + ";");
      let l = zt(t), s = At(t, r);
      for (let i of Rt)
        l & i[1] && (n += e(i[0] + t, r, o) + ";"), s & i[1] && (n += e(t, i[0] + r, o) + ";");
      return n + e(t, r, o);
    }
  });
}
let ve = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px"
  },
  columns: {
    auto: "auto",
    // Handled by plugin,
    // 1: '1',
    // 2: '2',
    // 3: '3',
    // 4: '4',
    // 5: '5',
    // 6: '6',
    // 7: '7',
    // 8: '8',
    // 9: '9',
    // 10: '10',
    // 11: '11',
    // 12: '12',
    "3xs": "16rem",
    "2xs": "18rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem"
  },
  spacing: {
    px: "1px",
    0: "0px",
    .../* @__PURE__ */ O(4, "rem", 4, 0.5, 0.5),
    // 0.5: '0.125rem',
    // 1: '0.25rem',
    // 1.5: '0.375rem',
    // 2: '0.5rem',
    // 2.5: '0.625rem',
    // 3: '0.75rem',
    // 3.5: '0.875rem',
    // 4: '1rem',
    .../* @__PURE__ */ O(12, "rem", 4, 5),
    // 5: '1.25rem',
    // 6: '1.5rem',
    // 7: '1.75rem',
    // 8: '2rem',
    // 9: '2.25rem',
    // 10: '2.5rem',
    // 11: '2.75rem',
    // 12: '3rem',
    14: "3.5rem",
    .../* @__PURE__ */ O(64, "rem", 4, 16, 4),
    // 16: '4rem',
    // 20: '5rem',
    // 24: '6rem',
    // 28: '7rem',
    // 32: '8rem',
    // 36: '9rem',
    // 40: '10rem',
    // 44: '11rem',
    // 48: '12rem',
    // 52: '13rem',
    // 56: '14rem',
    // 60: '15rem',
    // 64: '16rem',
    72: "18rem",
    80: "20rem",
    96: "24rem"
  },
  durations: {
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1e3: "1000ms"
  },
  animation: {
    none: "none",
    spin: "spin 1s linear infinite",
    ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite",
    pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
    bounce: "bounce 1s infinite"
  },
  aspectRatio: {
    auto: "auto",
    square: "1/1",
    video: "16/9"
  },
  backdropBlur: /* @__PURE__ */ m("blur"),
  backdropBrightness: /* @__PURE__ */ m("brightness"),
  backdropContrast: /* @__PURE__ */ m("contrast"),
  backdropGrayscale: /* @__PURE__ */ m("grayscale"),
  backdropHueRotate: /* @__PURE__ */ m("hueRotate"),
  backdropInvert: /* @__PURE__ */ m("invert"),
  backdropOpacity: /* @__PURE__ */ m("opacity"),
  backdropSaturate: /* @__PURE__ */ m("saturate"),
  backdropSepia: /* @__PURE__ */ m("sepia"),
  backgroundColor: /* @__PURE__ */ m("colors"),
  backgroundImage: {
    none: "none"
  },
  // These are built-in
  // 'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
  // 'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
  // 'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
  // 'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
  // 'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
  // 'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
  // 'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
  // 'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))',
  backgroundOpacity: /* @__PURE__ */ m("opacity"),
  // backgroundPosition: {
  //   // The following are already handled by the plugin:
  //   // center, right, left, bottom, top
  //   // 'bottom-10px-right-20px' -> bottom 10px right 20px
  // },
  backgroundSize: {
    auto: "auto",
    cover: "cover",
    contain: "contain"
  },
  blur: {
    none: "none",
    0: "0",
    sm: "4px",
    DEFAULT: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px"
  },
  brightness: {
    .../* @__PURE__ */ O(200, "", 100, 0, 50),
    // 0: '0',
    // 50: '.5',
    // 150: '1.5',
    // 200: '2',
    .../* @__PURE__ */ O(110, "", 100, 90, 5),
    // 90: '.9',
    // 95: '.95',
    // 100: '1',
    // 105: '1.05',
    // 110: '1.1',
    75: "0.75",
    125: "1.25"
  },
  borderColor: ({ theme: e }) => ({
    DEFAULT: e("colors.gray.200", "currentColor"),
    ...e("colors")
  }),
  borderOpacity: /* @__PURE__ */ m("opacity"),
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    "1/2": "50%",
    full: "9999px"
  },
  borderSpacing: /* @__PURE__ */ m("spacing"),
  borderWidth: {
    DEFAULT: "1px",
    .../* @__PURE__ */ E(8, "px")
  },
  // 0: '0px',
  // 2: '2px',
  // 4: '4px',
  // 8: '8px',
  boxShadow: {
    sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
    DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
    md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
    lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
    xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
    "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
    inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)",
    none: "0 0 #0000"
  },
  boxShadowColor: m("colors"),
  // container: {},
  // cursor: {
  //   // Default values are handled by plugin
  // },
  caretColor: /* @__PURE__ */ m("colors"),
  accentColor: ({ theme: e }) => ({
    auto: "auto",
    ...e("colors")
  }),
  contrast: {
    .../* @__PURE__ */ O(200, "", 100, 0, 50),
    // 0: '0',
    // 50: '.5',
    // 150: '1.5',
    // 200: '2',
    75: "0.75",
    125: "1.25"
  },
  content: {
    none: "none"
  },
  divideColor: /* @__PURE__ */ m("borderColor"),
  divideOpacity: /* @__PURE__ */ m("borderOpacity"),
  divideWidth: /* @__PURE__ */ m("borderWidth"),
  dropShadow: {
    sm: "0 1px 1px rgba(0,0,0,0.05)",
    DEFAULT: [
      "0 1px 2px rgba(0,0,0,0.1)",
      "0 1px 1px rgba(0,0,0,0.06)"
    ],
    md: [
      "0 4px 3px rgba(0,0,0,0.07)",
      "0 2px 2px rgba(0,0,0,0.06)"
    ],
    lg: [
      "0 10px 8px rgba(0,0,0,0.04)",
      "0 4px 3px rgba(0,0,0,0.1)"
    ],
    xl: [
      "0 20px 13px rgba(0,0,0,0.03)",
      "0 8px 5px rgba(0,0,0,0.08)"
    ],
    "2xl": "0 25px 25px rgba(0,0,0,0.15)",
    none: "0 0 #0000"
  },
  fill: ({ theme: e }) => ({
    ...e("colors"),
    none: "none"
  }),
  grayscale: {
    DEFAULT: "100%",
    0: "0"
  },
  hueRotate: {
    0: "0deg",
    15: "15deg",
    30: "30deg",
    60: "60deg",
    90: "90deg",
    180: "180deg"
  },
  invert: {
    DEFAULT: "100%",
    0: "0"
  },
  flex: {
    1: "1 1 0%",
    auto: "1 1 auto",
    initial: "0 1 auto",
    none: "none"
  },
  flexBasis: ({ theme: e }) => ({
    ...e("spacing"),
    ...Q(2, 6),
    // '1/2': '50%',
    // '1/3': '33.333333%',
    // '2/3': '66.666667%',
    // '1/4': '25%',
    // '2/4': '50%',
    // '3/4': '75%',
    // '1/5': '20%',
    // '2/5': '40%',
    // '3/5': '60%',
    // '4/5': '80%',
    // '1/6': '16.666667%',
    // '2/6': '33.333333%',
    // '3/6': '50%',
    // '4/6': '66.666667%',
    // '5/6': '83.333333%',
    ...Q(12, 12),
    // '1/12': '8.333333%',
    // '2/12': '16.666667%',
    // '3/12': '25%',
    // '4/12': '33.333333%',
    // '5/12': '41.666667%',
    // '6/12': '50%',
    // '7/12': '58.333333%',
    // '8/12': '66.666667%',
    // '9/12': '75%',
    // '10/12': '83.333333%',
    // '11/12': '91.666667%',
    auto: "auto",
    full: "100%"
  }),
  flexGrow: {
    DEFAULT: 1,
    0: 0
  },
  flexShrink: {
    DEFAULT: 1,
    0: 0
  },
  fontFamily: {
    sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
    serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
    mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
  },
  fontSize: {
    xs: [
      "0.75rem",
      "1rem"
    ],
    sm: [
      "0.875rem",
      "1.25rem"
    ],
    base: [
      "1rem",
      "1.5rem"
    ],
    lg: [
      "1.125rem",
      "1.75rem"
    ],
    xl: [
      "1.25rem",
      "1.75rem"
    ],
    "2xl": [
      "1.5rem",
      "2rem"
    ],
    "3xl": [
      "1.875rem",
      "2.25rem"
    ],
    "4xl": [
      "2.25rem",
      "2.5rem"
    ],
    "5xl": [
      "3rem",
      "1"
    ],
    "6xl": [
      "3.75rem",
      "1"
    ],
    "7xl": [
      "4.5rem",
      "1"
    ],
    "8xl": [
      "6rem",
      "1"
    ],
    "9xl": [
      "8rem",
      "1"
    ]
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },
  gap: /* @__PURE__ */ m("spacing"),
  gradientColorStops: /* @__PURE__ */ m("colors"),
  gridAutoColumns: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0,1fr)"
  },
  gridAutoRows: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0,1fr)"
  },
  gridColumn: {
    // span-X is handled by the plugin: span-1 -> span 1 / span 1
    auto: "auto",
    "span-full": "1 / -1"
  },
  // gridColumnEnd: {
  //   // Defaults handled by plugin
  // },
  // gridColumnStart: {
  //   // Defaults handled by plugin
  // },
  gridRow: {
    // span-X is handled by the plugin: span-1 -> span 1 / span 1
    auto: "auto",
    "span-full": "1 / -1"
  },
  // gridRowStart: {
  //   // Defaults handled by plugin
  // },
  // gridRowEnd: {
  //   // Defaults handled by plugin
  // },
  gridTemplateColumns: {
    // numbers are handled by the plugin: 1 -> repeat(1, minmax(0, 1fr))
    none: "none"
  },
  gridTemplateRows: {
    // numbers are handled by the plugin: 1 -> repeat(1, minmax(0, 1fr))
    none: "none"
  },
  height: ({ theme: e }) => ({
    ...e("spacing"),
    ...Q(2, 6),
    // '1/2': '50%',
    // '1/3': '33.333333%',
    // '2/3': '66.666667%',
    // '1/4': '25%',
    // '2/4': '50%',
    // '3/4': '75%',
    // '1/5': '20%',
    // '2/5': '40%',
    // '3/5': '60%',
    // '4/5': '80%',
    // '1/6': '16.666667%',
    // '2/6': '33.333333%',
    // '3/6': '50%',
    // '4/6': '66.666667%',
    // '5/6': '83.333333%',
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    auto: "auto",
    full: "100%",
    screen: "100vh"
  }),
  inset: ({ theme: e }) => ({
    ...e("spacing"),
    ...Q(2, 4),
    // '1/2': '50%',
    // '1/3': '33.333333%',
    // '2/3': '66.666667%',
    // '1/4': '25%',
    // '2/4': '50%',
    // '3/4': '75%',
    auto: "auto",
    full: "100%"
  }),
  keyframes: {
    spin: {
      from: {
        transform: "rotate(0deg)"
      },
      to: {
        transform: "rotate(360deg)"
      }
    },
    ping: {
      "0%": {
        transform: "scale(1)",
        opacity: "1"
      },
      "75%,100%": {
        transform: "scale(2)",
        opacity: "0"
      }
    },
    pulse: {
      "0%,100%": {
        opacity: "1"
      },
      "50%": {
        opacity: ".5"
      }
    },
    bounce: {
      "0%, 100%": {
        transform: "translateY(-25%)",
        animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
      },
      "50%": {
        transform: "none",
        animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
      }
    }
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeight: {
    .../* @__PURE__ */ O(10, "rem", 4, 3),
    // 3: '.75rem',
    // 4: '1rem',
    // 5: '1.25rem',
    // 6: '1.5rem',
    // 7: '1.75rem',
    // 8: '2rem',
    // 9: '2.25rem',
    // 10: '2.5rem',
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2"
  },
  // listStyleType: {
  //   // Defaults handled by plugin
  // },
  margin: ({ theme: e }) => ({
    auto: "auto",
    ...e("spacing")
  }),
  maxHeight: ({ theme: e }) => ({
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    screen: "100vh",
    ...e("spacing")
  }),
  maxWidth: ({ theme: e, breakpoints: t }) => ({
    ...t(e("screens")),
    none: "none",
    0: "0rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    prose: "65ch"
  }),
  minHeight: {
    0: "0px",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    screen: "100vh"
  },
  minWidth: {
    0: "0px",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content"
  },
  // objectPosition: {
  //   // The plugins joins all arguments by default
  // },
  opacity: {
    .../* @__PURE__ */ O(100, "", 100, 0, 10),
    // 0: '0',
    // 10: '0.1',
    // 20: '0.2',
    // 30: '0.3',
    // 40: '0.4',
    // 60: '0.6',
    // 70: '0.7',
    // 80: '0.8',
    // 90: '0.9',
    // 100: '1',
    5: "0.05",
    25: "0.25",
    75: "0.75",
    95: "0.95"
  },
  order: {
    // Handled by plugin
    // 1: '1',
    // 2: '2',
    // 3: '3',
    // 4: '4',
    // 5: '5',
    // 6: '6',
    // 7: '7',
    // 8: '8',
    // 9: '9',
    // 10: '10',
    // 11: '11',
    // 12: '12',
    first: "-9999",
    last: "9999",
    none: "0"
  },
  padding: /* @__PURE__ */ m("spacing"),
  placeholderColor: /* @__PURE__ */ m("colors"),
  placeholderOpacity: /* @__PURE__ */ m("opacity"),
  outlineColor: /* @__PURE__ */ m("colors"),
  outlineOffset: /* @__PURE__ */ E(8, "px"),
  // 0: '0px',
  // 1: '1px',
  // 2: '2px',
  // 4: '4px',
  // 8: '8px',,
  outlineWidth: /* @__PURE__ */ E(8, "px"),
  // 0: '0px',
  // 1: '1px',
  // 2: '2px',
  // 4: '4px',
  // 8: '8px',,
  ringColor: ({ theme: e }) => ({
    ...e("colors"),
    DEFAULT: "#3b82f6"
  }),
  ringOffsetColor: /* @__PURE__ */ m("colors"),
  ringOffsetWidth: /* @__PURE__ */ E(8, "px"),
  // 0: '0px',
  // 1: '1px',
  // 2: '2px',
  // 4: '4px',
  // 8: '8px',,
  ringOpacity: ({ theme: e }) => ({
    ...e("opacity"),
    DEFAULT: "0.5"
  }),
  ringWidth: {
    DEFAULT: "3px",
    .../* @__PURE__ */ E(8, "px")
  },
  // 0: '0px',
  // 1: '1px',
  // 2: '2px',
  // 4: '4px',
  // 8: '8px',
  rotate: {
    .../* @__PURE__ */ E(2, "deg"),
    // 0: '0deg',
    // 1: '1deg',
    // 2: '2deg',
    .../* @__PURE__ */ E(12, "deg", 3),
    // 3: '3deg',
    // 6: '6deg',
    // 12: '12deg',
    .../* @__PURE__ */ E(180, "deg", 45)
  },
  // 45: '45deg',
  // 90: '90deg',
  // 180: '180deg',
  saturate: /* @__PURE__ */ O(200, "", 100, 0, 50),
  // 0: '0',
  // 50: '.5',
  // 100: '1',
  // 150: '1.5',
  // 200: '2',
  scale: {
    .../* @__PURE__ */ O(150, "", 100, 0, 50),
    // 0: '0',
    // 50: '.5',
    // 150: '1.5',
    .../* @__PURE__ */ O(110, "", 100, 90, 5),
    // 90: '.9',
    // 95: '.95',
    // 100: '1',
    // 105: '1.05',
    // 110: '1.1',
    75: "0.75",
    125: "1.25"
  },
  scrollMargin: /* @__PURE__ */ m("spacing"),
  scrollPadding: /* @__PURE__ */ m("spacing"),
  sepia: {
    0: "0",
    DEFAULT: "100%"
  },
  skew: {
    .../* @__PURE__ */ E(2, "deg"),
    // 0: '0deg',
    // 1: '1deg',
    // 2: '2deg',
    .../* @__PURE__ */ E(12, "deg", 3)
  },
  // 3: '3deg',
  // 6: '6deg',
  // 12: '12deg',
  space: /* @__PURE__ */ m("spacing"),
  stroke: ({ theme: e }) => ({
    ...e("colors"),
    none: "none"
  }),
  strokeWidth: /* @__PURE__ */ O(2),
  // 0: '0',
  // 1: '1',
  // 2: '2',,
  textColor: /* @__PURE__ */ m("colors"),
  textDecorationColor: /* @__PURE__ */ m("colors"),
  textDecorationThickness: {
    "from-font": "from-font",
    auto: "auto",
    .../* @__PURE__ */ E(8, "px")
  },
  // 0: '0px',
  // 1: '1px',
  // 2: '2px',
  // 4: '4px',
  // 8: '8px',
  textUnderlineOffset: {
    auto: "auto",
    .../* @__PURE__ */ E(8, "px")
  },
  // 0: '0px',
  // 1: '1px',
  // 2: '2px',
  // 4: '4px',
  // 8: '8px',
  textIndent: /* @__PURE__ */ m("spacing"),
  textOpacity: /* @__PURE__ */ m("opacity"),
  // transformOrigin: {
  //   // The following are already handled by the plugin:
  //   // center, right, left, bottom, top
  //   // 'bottom-10px-right-20px' -> bottom 10px right 20px
  // },
  transitionDuration: ({ theme: e }) => ({
    ...e("durations"),
    DEFAULT: "150ms"
  }),
  transitionDelay: /* @__PURE__ */ m("durations"),
  transitionProperty: {
    none: "none",
    all: "all",
    DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
    colors: "color,background-color,border-color,text-decoration-color,fill,stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform"
  },
  transitionTimingFunction: {
    DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
    linear: "linear",
    in: "cubic-bezier(0.4,0,1,1)",
    out: "cubic-bezier(0,0,0.2,1)",
    "in-out": "cubic-bezier(0.4,0,0.2,1)"
  },
  translate: ({ theme: e }) => ({
    ...e("spacing"),
    ...Q(2, 4),
    // '1/2': '50%',
    // '1/3': '33.333333%',
    // '2/3': '66.666667%',
    // '1/4': '25%',
    // '2/4': '50%',
    // '3/4': '75%',
    full: "100%"
  }),
  width: ({ theme: e }) => ({
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    screen: "100vw",
    ...e("flexBasis")
  }),
  willChange: {
    scroll: "scroll-position"
  },
  // other options handled by rules
  // auto: 'auto',
  // contents: 'contents',
  // transform: 'transform',
  zIndex: {
    .../* @__PURE__ */ O(50, "", 1, 0, 10),
    // 0: '0',
    // 10: '10',
    // 20: '20',
    // 30: '30',
    // 40: '40',
    // 50: '50',
    auto: "auto"
  }
};
function Q(e, t) {
  let r = {};
  do
    for (var o = 1; o < e; o++) r[`${o}/${e}`] = Number((o / e * 100).toFixed(6)) + "%";
  while (++e <= t);
  return r;
}
function E(e, t, r = 0) {
  let o = {};
  for (; r <= e; r = 2 * r || 1) o[r] = r + t;
  return o;
}
function O(e, t = "", r = 1, o = 0, n = 1, a = {}) {
  for (; o <= e; o += n) a[o] = o / r + t;
  return a;
}
function m(e) {
  return ({ theme: t }) => t(e);
}
let Tt = {
  /*
  1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
  2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
  */
  "*,::before,::after": {
    boxSizing: "border-box",
    /* 1 */
    borderWidth: "0",
    /* 2 */
    borderStyle: "solid",
    /* 2 */
    borderColor: "theme(borderColor.DEFAULT, currentColor)"
  },
  /* 2 */
  "::before,::after": {
    "--tw-content": "''"
  },
  /*
  1. Use a consistent sensible line-height in all browsers.
  2. Prevent adjustments of font size after orientation changes in iOS.
  3. Use a more readable tab size.
  4. Use the user's configured `sans` font-family by default.
  5. Use the user's configured `sans` font-feature-settings by default.
  */
  html: {
    lineHeight: 1.5,
    /* 1 */
    WebkitTextSizeAdjust: "100%",
    /* 2 */
    MozTabSize: "4",
    /* 3 */
    tabSize: 4,
    /* 3 */
    fontFamily: `theme(fontFamily.sans, ${ve.fontFamily.sans})`,
    /* 4 */
    fontFeatureSettings: "theme(fontFamily.sans[1].fontFeatureSettings, normal)"
  },
  /* 5 */
  /*
  1. Remove the margin in all browsers.
  2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.
  */
  body: {
    margin: "0",
    /* 1 */
    lineHeight: "inherit"
  },
  /* 2 */
  /*
  1. Add the correct height in Firefox.
  2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  3. Ensure horizontal rules are visible by default.
  */
  hr: {
    height: "0",
    /* 1 */
    color: "inherit",
    /* 2 */
    borderTopWidth: "1px"
  },
  /* 3 */
  /*
  Add the correct text decoration in Chrome, Edge, and Safari.
  */
  "abbr:where([title])": {
    textDecoration: "underline dotted"
  },
  /*
  Remove the default font size and weight for headings.
  */
  "h1,h2,h3,h4,h5,h6": {
    fontSize: "inherit",
    fontWeight: "inherit"
  },
  /*
  Reset links to optimize for opt-in styling instead of opt-out.
  */
  a: {
    color: "inherit",
    textDecoration: "inherit"
  },
  /*
  Add the correct font weight in Edge and Safari.
  */
  "b,strong": {
    fontWeight: "bolder"
  },
  /*
  1. Use the user's configured `mono` font family by default.
  2. Use the user's configured `mono` font-feature-settings by default.
  3. Correct the odd `em` font sizing in all browsers.
  */
  "code,kbd,samp,pre": {
    fontFamily: `theme(fontFamily.mono, ${ve.fontFamily.mono})`,
    fontFeatureSettings: "theme(fontFamily.mono[1].fontFeatureSettings, normal)",
    fontSize: "1em"
  },
  /*
  Add the correct font size in all browsers.
  */
  small: {
    fontSize: "80%"
  },
  /*
  Prevent `sub` and `sup` elements from affecting the line height in all browsers.
  */
  "sub,sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline"
  },
  sub: {
    bottom: "-0.25em"
  },
  sup: {
    top: "-0.5em"
  },
  /*
  1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  3. Remove gaps between table borders by default.
  */
  table: {
    textIndent: "0",
    /* 1 */
    borderColor: "inherit",
    /* 2 */
    borderCollapse: "collapse"
  },
  /* 3 */
  /*
  1. Change the font styles in all browsers.
  2. Remove the margin in Firefox and Safari.
  3. Remove default padding in all browsers.
  */
  "button,input,optgroup,select,textarea": {
    fontFamily: "inherit",
    /* 1 */
    fontSize: "100%",
    /* 1 */
    lineHeight: "inherit",
    /* 1 */
    color: "inherit",
    /* 1 */
    margin: "0",
    /* 2 */
    padding: "0"
  },
  /* 3 */
  /*
  Remove the inheritance of text transform in Edge and Firefox.
  */
  "button,select": {
    textTransform: "none"
  },
  /*
  1. Correct the inability to style clickable types in iOS and Safari.
  2. Remove default button styles.
  */
  "button,[type='button'],[type='reset'],[type='submit']": {
    WebkitAppearance: "button",
    /* 1 */
    backgroundColor: "transparent",
    /* 2 */
    backgroundImage: "none"
  },
  /* 4 */
  /*
  Use the modern Firefox focus style for all focusable elements.
  */
  ":-moz-focusring": {
    outline: "auto"
  },
  /*
  Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
  */
  ":-moz-ui-invalid": {
    boxShadow: "none"
  },
  /*
  Add the correct vertical alignment in Chrome and Firefox.
  */
  progress: {
    verticalAlign: "baseline"
  },
  /*
  Correct the cursor style of increment and decrement buttons in Safari.
  */
  "::-webkit-inner-spin-button,::-webkit-outer-spin-button": {
    height: "auto"
  },
  /*
  1. Correct the odd appearance in Chrome and Safari.
  2. Correct the outline style in Safari.
  */
  "[type='search']": {
    WebkitAppearance: "textfield",
    /* 1 */
    outlineOffset: "-2px"
  },
  /* 2 */
  /*
  Remove the inner padding in Chrome and Safari on macOS.
  */
  "::-webkit-search-decoration": {
    WebkitAppearance: "none"
  },
  /*
  1. Correct the inability to style clickable types in iOS and Safari.
  2. Change font properties to `inherit` in Safari.
  */
  "::-webkit-file-upload-button": {
    WebkitAppearance: "button",
    /* 1 */
    font: "inherit"
  },
  /* 2 */
  /*
  Add the correct display in Chrome and Safari.
  */
  summary: {
    display: "list-item"
  },
  /*
  Removes the default spacing and border for appropriate elements.
  */
  "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": {
    margin: "0"
  },
  fieldset: {
    margin: "0",
    padding: "0"
  },
  legend: {
    padding: "0"
  },
  "ol,ul,menu": {
    listStyle: "none",
    margin: "0",
    padding: "0"
  },
  /*
  Prevent resizing textareas horizontally by default.
  */
  textarea: {
    resize: "vertical"
  },
  /*
  1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
  2. Set the default placeholder color to the user's configured gray 400 color.
  */
  "input::placeholder,textarea::placeholder": {
    opacity: 1,
    /* 1 */
    color: "theme(colors.gray.400, #9ca3af)"
  },
  /* 2 */
  /*
  Set the default cursor for buttons.
  */
  'button,[role="button"]': {
    cursor: "pointer"
  },
  /*
  Make sure disabled buttons don't get the pointer cursor.
  */
  ":disabled": {
    cursor: "default"
  },
  /*
  1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
  2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
    This can trigger a poorly considered lint error in some tools but is included by design.
  */
  "img,svg,video,canvas,audio,iframe,embed,object": {
    display: "block",
    /* 1 */
    verticalAlign: "middle"
  },
  /* 2 */
  /*
  Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
  */
  "img,video": {
    maxWidth: "100%",
    height: "auto"
  },
  /* Make elements with the HTML hidden attribute stay hidden by default */
  "[hidden]": {
    display: "none"
  }
}, Ot = [
  /* arbitrary properties: [paint-order:markers] */
  c("\\[([-\\w]+):(.+)]", ({ 1: e, 2: t }, r) => ({
    "@layer overrides": {
      "&": {
        [e]: I(`[${t}]`, "", r)
      }
    }
  })),
  /* Styling based on parent and peer state */
  c("(group|peer)([~/][^-[]+)?", ({ input: e }, { h: t }) => [
    {
      c: t(e)
    }
  ]),
  /* LAYOUT */
  d("aspect-", "aspectRatio"),
  c("container", (e, { theme: t }) => {
    let { screens: r = t("screens"), center: o, padding: n } = t("container"), a = {
      width: "100%",
      marginRight: o && "auto",
      marginLeft: o && "auto",
      ...l("xs")
    };
    for (let s in r) {
      let i = r[s];
      typeof i == "string" && (a[$e(i)] = {
        "&": {
          maxWidth: i,
          ...l(s)
        }
      });
    }
    return a;
    function l(s) {
      let i = n && (typeof n == "string" ? n : n[s] || n.DEFAULT);
      if (i) return {
        paddingRight: i,
        paddingLeft: i
      };
    }
  }),
  // Content
  d("content-", "content", ({ _: e }) => ({
    "--tw-content": e,
    content: "var(--tw-content)"
  })),
  // Box Decoration Break
  c("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"),
  // Box Sizing
  c("box-(border|content)", "boxSizing", ({ 1: e }) => e + "-box"),
  // Display
  c("hidden", {
    display: "none"
  }),
  // Table Layout
  c("table-(auto|fixed)", "tableLayout"),
  c([
    "(block|flex|table|grid|inline|contents|flow-root|list-item)",
    "(inline-(block|flex|table|grid))",
    "(table-(caption|cell|column|row|(column|row|footer|header)-group))"
  ], "display"),
  // Floats
  "(float)-(left|right|none)",
  // Clear
  "(clear)-(left|right|none|both)",
  // Overflow
  "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)",
  // Isolation
  "(isolation)-(auto)",
  // Isolation
  c("isolate", "isolation"),
  // Object Fit
  c("object-(contain|cover|fill|none|scale-down)", "objectFit"),
  // Object Position
  d("object-", "objectPosition"),
  c("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", ee),
  // Overscroll Behavior
  c("overscroll(-[xy])?-(auto|contain|none)", ({ 1: e = "", 2: t }) => ({
    ["overscroll-behavior" + e]: t
  })),
  // Position
  c("(static|fixed|absolute|relative|sticky)", "position"),
  // Top / Right / Bottom / Left
  d("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: e, _: t }) => ({
    top: e != "-x" && t,
    right: e != "-y" && t,
    bottom: e != "-x" && t,
    left: e != "-y" && t
  })),
  d("-?(top|bottom|left|right)(?:$|-)", "inset"),
  // Visibility
  c("(visible|collapse)", "visibility"),
  c("invisible", {
    visibility: "hidden"
  }),
  // Z-Index
  d("-?z-", "zIndex"),
  /* FLEXBOX */
  // Flex Direction
  c("flex-((row|col)(-reverse)?)", "flexDirection", Le),
  c("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"),
  d("(flex-(?:grow|shrink))(?:$|-)"),
  /*, 'flex-grow' | flex-shrink */
  d("(flex)-"),
  /*, 'flex' */
  d("grow(?:$|-)", "flexGrow"),
  d("shrink(?:$|-)", "flexShrink"),
  d("basis-", "flexBasis"),
  d("-?(order)-"),
  /*, 'order' */
  "-?(order)-(\\d+)",
  /* GRID */
  // Grid Template Columns
  d("grid-cols-", "gridTemplateColumns"),
  c("grid-cols-(\\d+)", "gridTemplateColumns", Be),
  // Grid Column Start / End
  d("col-", "gridColumn"),
  c("col-(span)-(\\d+)", "gridColumn", Pe),
  d("col-start-", "gridColumnStart"),
  c("col-start-(auto|\\d+)", "gridColumnStart"),
  d("col-end-", "gridColumnEnd"),
  c("col-end-(auto|\\d+)", "gridColumnEnd"),
  // Grid Template Rows
  d("grid-rows-", "gridTemplateRows"),
  c("grid-rows-(\\d+)", "gridTemplateRows", Be),
  // Grid Row Start / End
  d("row-", "gridRow"),
  c("row-(span)-(\\d+)", "gridRow", Pe),
  d("row-start-", "gridRowStart"),
  c("row-start-(auto|\\d+)", "gridRowStart"),
  d("row-end-", "gridRowEnd"),
  c("row-end-(auto|\\d+)", "gridRowEnd"),
  // Grid Auto Flow
  c("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (e) => ee(Le(e))),
  c("grid-flow-(dense)", "gridAutoFlow"),
  // Grid Auto Columns
  d("auto-cols-", "gridAutoColumns"),
  // Grid Auto Rows
  d("auto-rows-", "gridAutoRows"),
  // Gap
  d("gap-x(?:$|-)", "gap", "columnGap"),
  d("gap-y(?:$|-)", "gap", "rowGap"),
  d("gap(?:$|-)", "gap"),
  /* BOX ALIGNMENT */
  // Justify Items
  // Justify Self
  "(justify-(?:items|self))-",
  // Justify Content
  c("justify-", "justifyContent", Ue),
  // Align Content
  // Align Items
  // Align Self
  c("(content|items|self)-", (e) => ({
    ["align-" + e[1]]: Ue(e)
  })),
  // Place Content
  // Place Items
  // Place Self
  c("(place-(content|items|self))-", ({ 1: e, $$: t }) => ({
    [e]: ("wun".includes(t[3]) ? "space-" : "") + t
  })),
  /* SPACING */
  // Padding
  d("p([xytrbl])?(?:$|-)", "padding", q("padding")),
  // Margin
  d("-?m([xytrbl])?(?:$|-)", "margin", q("margin")),
  // Space Between
  d("-?space-(x|y)(?:$|-)", "space", ({ 1: e, _: t }) => ({
    "&>:not([hidden])~:not([hidden])": {
      [`--tw-space-${e}-reverse`]: "0",
      ["margin-" + {
        y: "top",
        x: "left"
      }[e]]: `calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,
      ["margin-" + {
        y: "bottom",
        x: "right"
      }[e]]: `calc(${t} * var(--tw-space-${e}-reverse))`
    }
  })),
  c("space-(x|y)-reverse", ({ 1: e }) => ({
    "&>:not([hidden])~:not([hidden])": {
      [`--tw-space-${e}-reverse`]: "1"
    }
  })),
  /* SIZING */
  // Width
  d("w-", "width"),
  // Min-Width
  d("min-w-", "minWidth"),
  // Max-Width
  d("max-w-", "maxWidth"),
  // Height
  d("h-", "height"),
  // Min-Height
  d("min-h-", "minHeight"),
  // Max-Height
  d("max-h-", "maxHeight"),
  /* TYPOGRAPHY */
  // Font Weight
  d("font-", "fontWeight"),
  // Font Family
  d("font-", "fontFamily", ({ _: e }) => typeof (e = w(e))[1] == "string" ? {
    fontFamily: W(e)
  } : {
    fontFamily: W(e[0]),
    ...e[1]
  }),
  // Font Smoothing
  c("antialiased", {
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale"
  }),
  c("subpixel-antialiased", {
    WebkitFontSmoothing: "auto",
    MozOsxFontSmoothing: "auto"
  }),
  // Font Style
  c("italic", "fontStyle"),
  c("not-italic", {
    fontStyle: "normal"
  }),
  // Font Variant Numeric
  c("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: e, 2: t = "", 3: r }) => (
    // normal-nums
    t == "normal" ? {
      fontVariantNumeric: "normal"
    } : {
      ["--tw-" + (r ? (
        // diagonal-fractions, stacked-fractions
        "numeric-fraction"
      ) : "pt".includes(t[0]) ? (
        // proportional-nums, tabular-nums
        "numeric-spacing"
      ) : t ? (
        // lining-nums, oldstyle-nums
        "numeric-figure"
      ) : (
        // ordinal, slashed-zero
        e
      ))]: e,
      fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)",
      ...L({
        "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)"
      })
    }
  )),
  // Letter Spacing
  d("tracking-", "letterSpacing"),
  // Line Height
  d("leading-", "lineHeight"),
  // List Style Position
  c("list-(inside|outside)", "listStylePosition"),
  // List Style Type
  d("list-", "listStyleType"),
  c("list-", "listStyleType"),
  // Placeholder Opacity
  d("placeholder-opacity-", "placeholderOpacity", ({ _: e }) => ({
    "&::placeholder": {
      "--tw-placeholder-opacity": e
    }
  })),
  // Placeholder Color
  C("placeholder-", {
    property: "color",
    selector: "&::placeholder"
  }),
  // Text Alignment
  c("text-(left|center|right|justify|start|end)", "textAlign"),
  c("text-(ellipsis|clip)", "textOverflow"),
  // Text Opacity
  d("text-opacity-", "textOpacity", "--tw-text-opacity"),
  // Text Color
  C("text-", {
    property: "color"
  }),
  // Font Size
  d("text-", "fontSize", ({ _: e }) => typeof e == "string" ? {
    fontSize: e
  } : {
    fontSize: e[0],
    ...typeof e[1] == "string" ? {
      lineHeight: e[1]
    } : e[1]
  }),
  // Text Indent
  d("indent-", "textIndent"),
  // Text Decoration
  c("(overline|underline|line-through)", "textDecorationLine"),
  c("no-underline", {
    textDecorationLine: "none"
  }),
  // Text Underline offset
  d("underline-offset-", "textUnderlineOffset"),
  // Text Decoration Color
  C("decoration-", {
    section: "textDecorationColor",
    opacityVariable: !1,
    opacitySection: "opacity"
  }),
  // Text Decoration Thickness
  d("decoration-", "textDecorationThickness"),
  // Text Decoration Style
  c("decoration-", "textDecorationStyle"),
  // Text Transform
  c("(uppercase|lowercase|capitalize)", "textTransform"),
  c("normal-case", {
    textTransform: "none"
  }),
  // Text Overflow
  c("truncate", {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }),
  // Vertical Alignment
  c("align-", "verticalAlign"),
  // Whitespace
  c("whitespace-", "whiteSpace"),
  // Word Break
  c("break-normal", {
    wordBreak: "normal",
    overflowWrap: "normal"
  }),
  c("break-words", {
    overflowWrap: "break-word"
  }),
  c("break-all", {
    wordBreak: "break-all"
  }),
  c("break-keep", {
    wordBreak: "keep-all"
  }),
  // Caret Color
  C("caret-", {
    // section: 'caretColor',
    opacityVariable: !1,
    opacitySection: "opacity"
  }),
  // Accent Color
  C("accent-", {
    // section: 'accentColor',
    opacityVariable: !1,
    opacitySection: "opacity"
  }),
  // Gradient Color Stops
  c("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: e }) => `linear-gradient(to ${H(e, " ")},var(--tw-gradient-stops))`),
  C("from-", {
    section: "gradientColorStops",
    opacityVariable: !1,
    opacitySection: "opacity"
  }, ({ _: e }) => ({
    "--tw-gradient-from": e.value,
    "--tw-gradient-to": e.color({
      opacityValue: "0"
    }),
    "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)"
  })),
  C("via-", {
    section: "gradientColorStops",
    opacityVariable: !1,
    opacitySection: "opacity"
  }, ({ _: e }) => ({
    "--tw-gradient-to": e.color({
      opacityValue: "0"
    }),
    "--tw-gradient-stops": `var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`
  })),
  C("to-", {
    section: "gradientColorStops",
    property: "--tw-gradient-to",
    opacityVariable: !1,
    opacitySection: "opacity"
  }),
  /* BACKGROUNDS */
  // Background Attachment
  c("bg-(fixed|local|scroll)", "backgroundAttachment"),
  // Background Origin
  c("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: e }) => e + "-box"),
  // Background Repeat
  c([
    "bg-(no-repeat|repeat(-[xy])?)",
    "bg-repeat-(round|space)"
  ], "backgroundRepeat"),
  // Background Blend Mode
  c("bg-blend-", "backgroundBlendMode"),
  // Background Clip
  c("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: e }) => e + (e == "text" ? "" : "-box")),
  // Background Opacity
  d("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"),
  // Background Color
  // bg-${backgroundColor}/${backgroundOpacity}
  C("bg-", {
    section: "backgroundColor"
  }),
  // Background Image
  // supported arbitrary types are: length, color, angle, list
  d("bg-", "backgroundImage"),
  // Background Position
  d("bg-", "backgroundPosition"),
  c("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", ee),
  // Background Size
  d("bg-", "backgroundSize"),
  /* BORDERS */
  // Border Radius
  d("rounded(?:$|-)", "borderRadius"),
  d("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: e, _: t }) => {
    let r = {
      t: [
        "tl",
        "tr"
      ],
      r: [
        "tr",
        "br"
      ],
      b: [
        "bl",
        "br"
      ],
      l: [
        "bl",
        "tl"
      ]
    }[e] || [
      e,
      e
    ];
    return {
      [`border-${H(r[0])}-radius`]: t,
      [`border-${H(r[1])}-radius`]: t
    };
  }),
  // Border Collapse
  c("border-(collapse|separate)", "borderCollapse"),
  // Border Opacity
  d("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"),
  // Border Style
  c("border-(solid|dashed|dotted|double|none)", "borderStyle"),
  // Border Spacing
  d("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: e, _: t }) => ({
    ...L({
      "--tw-border-spacing-x": "0",
      "--tw-border-spacing-y": "0"
    }),
    ["--tw-border-spacing" + (e || "-x")]: t,
    ["--tw-border-spacing" + (e || "-y")]: t,
    "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)"
  })),
  // Border Color
  C("border-([xytrbl])-", {
    section: "borderColor"
  }, q("border", "Color")),
  C("border-"),
  // Border Width
  d("border-([xytrbl])(?:$|-)", "borderWidth", q("border", "Width")),
  d("border(?:$|-)", "borderWidth"),
  // Divide Opacity
  d("divide-opacity(?:$|-)", "divideOpacity", ({ _: e }) => ({
    "&>:not([hidden])~:not([hidden])": {
      "--tw-divide-opacity": e
    }
  })),
  // Divide Style
  c("divide-(solid|dashed|dotted|double|none)", ({ 1: e }) => ({
    "&>:not([hidden])~:not([hidden])": {
      borderStyle: e
    }
  })),
  // Divide Width
  c("divide-([xy]-reverse)", ({ 1: e }) => ({
    "&>:not([hidden])~:not([hidden])": {
      ["--tw-divide-" + e]: "1"
    }
  })),
  d("divide-([xy])(?:$|-)", "divideWidth", ({ 1: e, _: t }) => {
    let r = {
      x: "lr",
      y: "tb"
    }[e];
    return {
      "&>:not([hidden])~:not([hidden])": {
        [`--tw-divide-${e}-reverse`]: "0",
        [`border-${H(r[0])}Width`]: `calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,
        [`border-${H(r[1])}Width`]: `calc(${t} * var(--tw-divide-${e}-reverse))`
      }
    };
  }),
  // Divide Color
  C("divide-", {
    // section: $0.replace('-', 'Color') -> 'divideColor'
    property: "borderColor",
    // opacityVariable: '--tw-border-opacity',
    // opacitySection: section.replace('Color', 'Opacity') -> 'divideOpacity'
    selector: "&>:not([hidden])~:not([hidden])"
  }),
  // Ring Offset Opacity
  d("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"),
  // Ring Offset Color
  C("ring-offset-", {
    // section: 'ringOffsetColor',
    property: "--tw-ring-offset-color",
    opacityVariable: !1
  }),
  // opacitySection: section.replace('Color', 'Opacity') -> 'ringOffsetOpacity'
  // Ring Offset Width
  d("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"),
  // Ring Inset
  c("ring-inset", {
    "--tw-ring-inset": "inset"
  }),
  // Ring Color
  C("ring-", {
    // section: 'ringColor',
    property: "--tw-ring-color"
  }),
  // opacityVariable: '--tw-ring-opacity',
  // opacitySection: section.replace('Color', 'Opacity') -> 'ringOpacity'
  // Ring Width
  d("ring(?:$|-)", "ringWidth", ({ _: e }, { theme: t }) => ({
    ...L({
      "--tw-ring-offset-shadow": "0 0 #0000",
      "--tw-ring-shadow": "0 0 #0000",
      "--tw-shadow": "0 0 #0000",
      "--tw-shadow-colored": "0 0 #0000",
      // Within own declaration to have the defaults above to be merged with defaults from shadow
      "&": {
        "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
        "--tw-ring-offset-width": t("ringOffsetWidth", "", "0px"),
        "--tw-ring-offset-color": U(t("ringOffsetColor", "", "#fff")),
        "--tw-ring-color": U(t("ringColor", "", "#93c5fd"), {
          opacityVariable: "--tw-ring-opacity"
        }),
        "--tw-ring-opacity": t("ringOpacity", "", "0.5")
      }
    }),
    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
    boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"
  })),
  /* EFFECTS */
  // Box Shadow Color
  C("shadow-", {
    section: "boxShadowColor",
    opacityVariable: !1,
    opacitySection: "opacity"
  }, ({ _: e }) => ({
    "--tw-shadow-color": e.value,
    "--tw-shadow": "var(--tw-shadow-colored)"
  })),
  // Box Shadow
  d("shadow(?:$|-)", "boxShadow", ({ _: e }) => ({
    ...L({
      "--tw-ring-offset-shadow": "0 0 #0000",
      "--tw-ring-shadow": "0 0 #0000",
      "--tw-shadow": "0 0 #0000",
      "--tw-shadow-colored": "0 0 #0000"
    }),
    "--tw-shadow": W(e),
    // replace all colors with reference to --tw-shadow-colored
    // this matches colors after non-comma char (keyword, offset) before comma or the end
    "--tw-shadow-colored": W(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"),
    boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)"
  })),
  // Opacity
  d("(opacity)-"),
  /*, 'opacity' */
  // Mix Blend Mode
  c("mix-blend-", "mixBlendMode"),
  /* FILTERS */
  ...Ie(),
  ...Ie("backdrop-"),
  /* TRANSITIONS AND ANIMATION */
  // Transition Property
  d("transition(?:$|-)", "transitionProperty", (e, { theme: t }) => ({
    transitionProperty: W(e),
    transitionTimingFunction: e._ == "none" ? void 0 : W(t("transitionTimingFunction", "")),
    transitionDuration: e._ == "none" ? void 0 : W(t("transitionDuration", ""))
  })),
  // Transition Duration
  d("duration(?:$|-)", "transitionDuration", "transitionDuration", W),
  // Transition Timing Function
  d("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", W),
  // Transition Delay
  d("delay(?:$|-)", "transitionDelay", "transitionDelay", W),
  d("animate(?:$|-)", "animation", (e, { theme: t, h: r, e: o }) => {
    let n = W(e), a = n.split(" "), l = t("keyframes", a[0]);
    return l ? {
      ["@keyframes " + (a[0] = o(r(a[0])))]: l,
      animation: a.join(" ")
    } : {
      animation: n
    };
  }),
  /* TRANSFORMS */
  // Transform
  "(transform)-(none)",
  c("transform", ke),
  c("transform-(cpu|gpu)", ({ 1: e }) => ({
    "--tw-transform": ot(e == "gpu")
  })),
  // Scale
  d("scale(-[xy])?-", "scale", ({ 1: e, _: t }) => ({
    ["--tw-scale" + (e || "-x")]: t,
    ["--tw-scale" + (e || "-y")]: t,
    ...ke()
  })),
  // Rotate
  d("-?(rotate)-", "rotate", me),
  // Translate
  d("-?(translate-[xy])-", "translate", me),
  // Skew
  d("-?(skew-[xy])-", "skew", me),
  // Transform Origin
  c("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", ee),
  /* INTERACTIVITY */
  // Appearance
  "(appearance)-",
  // Columns
  d("(columns)-"),
  /*, 'columns' */
  "(columns)-(\\d+)",
  // Break Before, After and Inside
  "(break-(?:before|after|inside))-",
  // Cursor
  d("(cursor)-"),
  /*, 'cursor' */
  "(cursor)-",
  // Scroll Snap Type
  c("snap-(none)", "scroll-snap-type"),
  c("snap-(x|y|both)", ({ 1: e }) => ({
    ...L({
      "--tw-scroll-snap-strictness": "proximity"
    }),
    "scroll-snap-type": e + " var(--tw-scroll-snap-strictness)"
  })),
  c("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"),
  // Scroll Snap Align
  c("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"),
  // Scroll Snap Stop
  c("snap-(normal|always)", "scroll-snap-stop"),
  c("scroll-(auto|smooth)", "scroll-behavior"),
  // Scroll Margin
  // Padding
  d("scroll-p([xytrbl])?(?:$|-)", "padding", q("scroll-padding")),
  // Margin
  d("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", q("scroll-margin")),
  // Touch Action
  c("touch-(auto|none|manipulation)", "touch-action"),
  c("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: e, 2: t, 3: r }) => ({
    ...L({
      "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)",
      "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)",
      "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)",
      "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"
    }),
    // x, left, right -> pan-x
    // y, up, down -> pan-y
    // -> pinch-zoom
    [`--tw-${t ? "pan-x" : r ? "pan-y" : e}`]: e,
    "touch-action": "var(--tw-touch-action)"
  })),
  // Outline Style
  c("outline-none", {
    outline: "2px solid transparent",
    "outline-offset": "2px"
  }),
  c("outline", {
    outlineStyle: "solid"
  }),
  c("outline-(dashed|dotted|double)", "outlineStyle"),
  // Outline Offset
  d("-?(outline-offset)-"),
  /*, 'outlineOffset'*/
  // Outline Color
  C("outline-", {
    opacityVariable: !1,
    opacitySection: "opacity"
  }),
  // Outline Width
  d("outline-", "outlineWidth"),
  // Pointer Events
  "(pointer-events)-",
  // Will Change
  d("(will-change)-"),
  /*, 'willChange' */
  "(will-change)-",
  // Resize
  [
    "resize(?:-(none|x|y))?",
    "resize",
    ({ 1: e }) => ({
      x: "horizontal",
      y: "vertical"
    })[e] || e || "both"
  ],
  // User Select
  c("select-(none|text|all|auto)", "userSelect"),
  /* SVG */
  // Fill, Stroke
  C("fill-", {
    section: "fill",
    opacityVariable: !1,
    opacitySection: "opacity"
  }),
  C("stroke-", {
    section: "stroke",
    opacityVariable: !1,
    opacitySection: "opacity"
  }),
  // Stroke Width
  d("stroke-", "strokeWidth"),
  /* ACCESSIBILITY */
  // Screen Readers
  c("sr-only", {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    clip: "rect(0,0,0,0)",
    borderWidth: "0"
  }),
  c("not-sr-only", {
    position: "static",
    width: "auto",
    height: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    whiteSpace: "normal",
    clip: "auto"
  })
];
function ee(e) {
  return (typeof e == "string" ? e : e[1]).replace(/-/g, " ").trim();
}
function Le(e) {
  return (typeof e == "string" ? e : e[1]).replace("col", "column");
}
function H(e, t = "-") {
  let r = [];
  for (let o of e) r.push({
    t: "top",
    r: "right",
    b: "bottom",
    l: "left"
  }[o]);
  return r.join(t);
}
function W(e) {
  return e && "" + (e._ || e);
}
function Ue({ $$: e }) {
  return ({
    // /* aut*/ o: '',
    /* sta*/
    r: (
      /*t*/
      "flex-"
    ),
    /* end*/
    "": "flex-",
    // /* cen*/ t /*er*/: '',
    /* bet*/
    w: (
      /*een*/
      "space-"
    ),
    /* aro*/
    u: (
      /*nd*/
      "space-"
    ),
    /* eve*/
    n: (
      /*ly*/
      "space-"
    )
  }[e[3] || ""] || "") + e;
}
function q(e, t = "") {
  return ({ 1: r, _: o }) => {
    let n = {
      x: "lr",
      y: "tb"
    }[r] || r + r;
    return n ? {
      ...te(e + "-" + H(n[0]) + t, o),
      ...te(e + "-" + H(n[1]) + t, o)
    } : te(e + t, o);
  };
}
function Ie(e = "") {
  let t = [
    "blur",
    "brightness",
    "contrast",
    "grayscale",
    "hue-rotate",
    "invert",
    e && "opacity",
    "saturate",
    "sepia",
    !e && "drop-shadow"
  ].filter(Boolean), r = {};
  for (let o of t) r[`--tw-${e}${o}`] = "var(--tw-empty,/*!*/ /*!*/)";
  return r = {
    // move defaults
    ...L(r),
    // add default filter which allows standalone usage
    [`${e}filter`]: t.map((o) => `var(--tw-${e}${o})`).join(" ")
  }, [
    `(${e}filter)-(none)`,
    c(`${e}filter`, r),
    ...t.map((o) => d(
      // hue-rotate can be negated
      `${o[0] == "h" ? "-?" : ""}(${e}${o})(?:$|-)`,
      o,
      ({ 1: n, _: a }) => ({
        [`--tw-${n}`]: w(a).map((l) => `${o}(${l})`).join(" "),
        ...r
      })
    ))
  ];
}
function me({ 1: e, _: t }) {
  return {
    ["--tw-" + e]: t,
    ...ke()
  };
}
function ke() {
  return {
    ...L({
      "--tw-translate-x": "0",
      "--tw-translate-y": "0",
      "--tw-rotate": "0",
      "--tw-skew-x": "0",
      "--tw-skew-y": "0",
      "--tw-scale-x": "1",
      "--tw-scale-y": "1",
      "--tw-transform": ot()
    }),
    transform: "var(--tw-transform)"
  };
}
function ot(e) {
  return [
    e ? (
      // -gpu
      "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)"
    ) : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))",
    "rotate(var(--tw-rotate))",
    "skewX(var(--tw-skew-x))",
    "skewY(var(--tw-skew-y))",
    "scaleX(var(--tw-scale-x))",
    "scaleY(var(--tw-scale-y))"
  ].join(" ");
}
function Pe({ 1: e, 2: t }) {
  return `${e} ${t} / ${e} ${t}`;
}
function Be({ 1: e }) {
  return `repeat(${e},minmax(0,1fr))`;
}
function L(e) {
  return {
    "@layer defaults": {
      "*,::before,::after": e,
      "::backdrop": e
    }
  };
}
let Et = [
  [
    "sticky",
    "@supports ((position: -webkit-sticky) or (position:sticky))"
  ],
  [
    "motion-reduce",
    "@media (prefers-reduced-motion:reduce)"
  ],
  [
    "motion-safe",
    "@media (prefers-reduced-motion:no-preference)"
  ],
  [
    "print",
    "@media print"
  ],
  [
    "(portrait|landscape)",
    ({ 1: e }) => `@media (orientation:${e})`
  ],
  [
    "contrast-(more|less)",
    ({ 1: e }) => `@media (prefers-contrast:${e})`
  ],
  [
    "(first-(letter|line)|placeholder|backdrop|before|after)",
    ({ 1: e }) => `&::${e}`
  ],
  [
    "(marker|selection)",
    ({ 1: e }) => `& *::${e},&::${e}`
  ],
  [
    "file",
    "&::file-selector-button"
  ],
  [
    "(first|last|only)",
    ({ 1: e }) => `&:${e}-child`
  ],
  [
    "even",
    "&:nth-child(2n)"
  ],
  [
    "odd",
    "&:nth-child(odd)"
  ],
  [
    "open",
    "&[open]"
  ],
  // All other pseudo classes are already supported by twind
  [
    "(aria|data)-",
    ({
      1: e,
      /* aria or data */
      $$: t
    }, r) => t && `&[${e}-${// aria-asc or data-checked -> from theme
    r.theme(e, t) || // aria-[...] or data-[...]
    I(t, "", r) || // default handling
    `${t}="true"`}]`
  ],
  /* Styling based on parent and peer state */
  // Groups classes like: group-focus and group-hover
  // these need to add a marker selector with the pseudo class
  // => '.group:focus .group-focus:selector'
  [
    "((group|peer)(~[^-[]+)?)(-\\[(.+)]|[-[].+?)(\\/.+)?",
    ({ 2: e, 3: t = "", 4: r, 5: o = "", 6: n = t }, { e: a, h: l, v: s }) => {
      let i = K(o) || (r[0] == "[" ? r : s(r.slice(1)));
      return `${(i.includes("&") ? i : "&" + i).replace(/&/g, `:merge(.${a(l(e + n))})`)}${e[0] == "p" ? "~" : " "}&`;
    }
  ],
  // direction variants
  [
    "(ltr|rtl)",
    ({ 1: e }) => `[dir="${e}"] &`
  ],
  [
    "supports-",
    ({ $$: e }, t) => {
      if (e && (e = t.theme("supports", e) || I(e, "", t)), e) return e.includes(":") || (e += ":var(--tw)"), /^\w*\s*\(/.test(e) || (e = `(${e})`), // Chrome has a bug where `(condtion1)or(condition2)` is not valid
      // But `(condition1) or (condition2)` is supported.
      `@supports ${e.replace(/\b(and|or|not)\b/g, " $1 ").trim()}`;
    }
  ],
  [
    "max-",
    ({ $$: e }, t) => {
      if (e && (e = t.theme("screens", e) || I(e, "", t)), typeof e == "string") return `@media not all and (min-width:${e})`;
    }
  ],
  [
    "min-",
    ({ $$: e }, t) => (e && (e = I(e, "", t)), e && `@media (min-width:${e})`)
  ],
  // Arbitrary variants
  [
    /^\[(.+)]$/,
    ({ 1: e }) => /[&@]/.test(e) && K(e).replace(/[}]+$/, "").split("{")
  ]
];
function jt({ colors: e, disablePreflight: t } = {}) {
  return {
    // allow other preflight to run
    preflight: t ? void 0 : Tt,
    theme: {
      ...ve,
      colors: {
        inherit: "inherit",
        current: "currentColor",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        ...e
      }
    },
    variants: Et,
    rules: Ot,
    finalize(r) {
      return (
        // automatically add `content: ''` to before and after so you don’t have to specify it unless you want a different value
        // ignore global, preflight, and auto added rules
        r.n && // only if there are declarations
        r.d && // and it has a ::before or ::after selector
        r.r.some((o) => /^&::(before|after)$/.test(o)) && // there is no content property yet
        !/(^|;)content:/.test(r.d) ? {
          ...r,
          d: "content:var(--tw-content);" + r.d
        } : r
      );
    }
  };
}
let Dt = {
  50: "#f8fafc",
  100: "#f1f5f9",
  200: "#e2e8f0",
  300: "#cbd5e1",
  400: "#94a3b8",
  500: "#64748b",
  600: "#475569",
  700: "#334155",
  800: "#1e293b",
  900: "#0f172a"
}, Wt = {
  50: "#f9fafb",
  100: "#f3f4f6",
  200: "#e5e7eb",
  300: "#d1d5db",
  400: "#9ca3af",
  500: "#6b7280",
  600: "#4b5563",
  700: "#374151",
  800: "#1f2937",
  900: "#111827"
}, Vt = {
  50: "#fafafa",
  100: "#f4f4f5",
  200: "#e4e4e7",
  300: "#d4d4d8",
  400: "#a1a1aa",
  500: "#71717a",
  600: "#52525b",
  700: "#3f3f46",
  800: "#27272a",
  900: "#18181b"
}, Mt = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#e5e5e5",
  300: "#d4d4d4",
  400: "#a3a3a3",
  500: "#737373",
  600: "#525252",
  700: "#404040",
  800: "#262626",
  900: "#171717"
}, Lt = {
  50: "#fafaf9",
  100: "#f5f5f4",
  200: "#e7e5e4",
  300: "#d6d3d1",
  400: "#a8a29e",
  500: "#78716c",
  600: "#57534e",
  700: "#44403c",
  800: "#292524",
  900: "#1c1917"
}, Ut = {
  50: "#fef2f2",
  100: "#fee2e2",
  200: "#fecaca",
  300: "#fca5a5",
  400: "#f87171",
  500: "#ef4444",
  600: "#dc2626",
  700: "#b91c1c",
  800: "#991b1b",
  900: "#7f1d1d"
}, It = {
  50: "#fff7ed",
  100: "#ffedd5",
  200: "#fed7aa",
  300: "#fdba74",
  400: "#fb923c",
  500: "#f97316",
  600: "#ea580c",
  700: "#c2410c",
  800: "#9a3412",
  900: "#7c2d12"
}, Pt = {
  50: "#fffbeb",
  100: "#fef3c7",
  200: "#fde68a",
  300: "#fcd34d",
  400: "#fbbf24",
  500: "#f59e0b",
  600: "#d97706",
  700: "#b45309",
  800: "#92400e",
  900: "#78350f"
}, Bt = {
  50: "#fefce8",
  100: "#fef9c3",
  200: "#fef08a",
  300: "#fde047",
  400: "#facc15",
  500: "#eab308",
  600: "#ca8a04",
  700: "#a16207",
  800: "#854d0e",
  900: "#713f12"
}, _t = {
  50: "#f7fee7",
  100: "#ecfccb",
  200: "#d9f99d",
  300: "#bef264",
  400: "#a3e635",
  500: "#84cc16",
  600: "#65a30d",
  700: "#4d7c0f",
  800: "#3f6212",
  900: "#365314"
}, Ht = {
  50: "#f0fdf4",
  100: "#dcfce7",
  200: "#bbf7d0",
  300: "#86efac",
  400: "#4ade80",
  500: "#22c55e",
  600: "#16a34a",
  700: "#15803d",
  800: "#166534",
  900: "#14532d"
}, Nt = {
  50: "#ecfdf5",
  100: "#d1fae5",
  200: "#a7f3d0",
  300: "#6ee7b7",
  400: "#34d399",
  500: "#10b981",
  600: "#059669",
  700: "#047857",
  800: "#065f46",
  900: "#064e3b"
}, Gt = {
  50: "#f0fdfa",
  100: "#ccfbf1",
  200: "#99f6e4",
  300: "#5eead4",
  400: "#2dd4bf",
  500: "#14b8a6",
  600: "#0d9488",
  700: "#0f766e",
  800: "#115e59",
  900: "#134e4a"
}, qt = {
  50: "#ecfeff",
  100: "#cffafe",
  200: "#a5f3fc",
  300: "#67e8f9",
  400: "#22d3ee",
  500: "#06b6d4",
  600: "#0891b2",
  700: "#0e7490",
  800: "#155e75",
  900: "#164e63"
}, Yt = {
  50: "#f0f9ff",
  100: "#e0f2fe",
  200: "#bae6fd",
  300: "#7dd3fc",
  400: "#38bdf8",
  500: "#0ea5e9",
  600: "#0284c7",
  700: "#0369a1",
  800: "#075985",
  900: "#0c4a6e"
}, Jt = {
  50: "#eff6ff",
  100: "#dbeafe",
  200: "#bfdbfe",
  300: "#93c5fd",
  400: "#60a5fa",
  500: "#3b82f6",
  600: "#2563eb",
  700: "#1d4ed8",
  800: "#1e40af",
  900: "#1e3a8a"
}, Xt = {
  50: "#eef2ff",
  100: "#e0e7ff",
  200: "#c7d2fe",
  300: "#a5b4fc",
  400: "#818cf8",
  500: "#6366f1",
  600: "#4f46e5",
  700: "#4338ca",
  800: "#3730a3",
  900: "#312e81"
}, Zt = {
  50: "#f5f3ff",
  100: "#ede9fe",
  200: "#ddd6fe",
  300: "#c4b5fd",
  400: "#a78bfa",
  500: "#8b5cf6",
  600: "#7c3aed",
  700: "#6d28d9",
  800: "#5b21b6",
  900: "#4c1d95"
}, Qt = {
  50: "#faf5ff",
  100: "#f3e8ff",
  200: "#e9d5ff",
  300: "#d8b4fe",
  400: "#c084fc",
  500: "#a855f7",
  600: "#9333ea",
  700: "#7e22ce",
  800: "#6b21a8",
  900: "#581c87"
}, Kt = {
  50: "#fdf4ff",
  100: "#fae8ff",
  200: "#f5d0fe",
  300: "#f0abfc",
  400: "#e879f9",
  500: "#d946ef",
  600: "#c026d3",
  700: "#a21caf",
  800: "#86198f",
  900: "#701a75"
}, er = {
  50: "#fdf2f8",
  100: "#fce7f3",
  200: "#fbcfe8",
  300: "#f9a8d4",
  400: "#f472b6",
  500: "#ec4899",
  600: "#db2777",
  700: "#be185d",
  800: "#9d174d",
  900: "#831843"
}, tr = {
  50: "#fff1f2",
  100: "#ffe4e6",
  200: "#fecdd3",
  300: "#fda4af",
  400: "#fb7185",
  500: "#f43f5e",
  600: "#e11d48",
  700: "#be123c",
  800: "#9f1239",
  900: "#881337"
}, rr = {
  __proto__: null,
  slate: Dt,
  gray: Wt,
  zinc: Vt,
  neutral: Mt,
  stone: Lt,
  red: Ut,
  orange: It,
  amber: Pt,
  yellow: Bt,
  lime: _t,
  green: Ht,
  emerald: Nt,
  teal: Gt,
  cyan: qt,
  sky: Yt,
  blue: Jt,
  indigo: Xt,
  violet: Zt,
  purple: Qt,
  fuchsia: Kt,
  pink: er,
  rose: tr
};
function or({ disablePreflight: e } = {}) {
  return jt({
    colors: rr,
    disablePreflight: e
  });
}
const nt = et({
  presets: [Ft(), or()]
  /* config */
});
var nr = Object.defineProperty, ir = Object.getOwnPropertyDescriptor, Te = (e, t, r, o) => {
  for (var n = o > 1 ? void 0 : o ? ir(t, r) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (n = (o ? l(t, r, n) : l(n)) || n);
  return o && n && nr(t, r, n), n;
};
let ie = class extends _e {
  constructor() {
    super(...arguments), this.name = "", this.counter = 0;
  }
  render() {
    return N`
      <div class="container border-1 border-gray-400 p-2">
        <div class="uppercase">${this.name}</div>
        <div class="">${this.counter}</div>
      </div>
    `;
  }
};
Te([
  He({ type: String })
], ie.prototype, "name", 2);
Te([
  He({ type: Number })
], ie.prototype, "counter", 2);
ie = Te([
  Ne("coe-card"),
  rt(nt)
], ie);
const ar = ({ user: e, onLogin: t, onLogout: r, onCreateAccount: o }) => N`
  <header>
    <div class="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        ${e ? se({ size: "small", onClick: r, label: "Log out" }) : N`${se({
  size: "small",
  onClick: t,
  label: "Log in"
})}
            ${se({
  primary: !0,
  size: "small",
  onClick: o,
  label: "Sign up"
})}`}
      </div>
    </div>
  </header>
`, ur = ({ user: e, onLogin: t, onLogout: r, onCreateAccount: o }) => N`
  <article>
    ${ar({
  user: e,
  onLogin: t,
  onLogout: r,
  onCreateAccount: o
})}

    <section class="storybook-page">
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a
        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
          <strong>component-driven</strong> </a
        >process starting with atomic components and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page states without
        needing to navigate to them in your app. Here are some handy patterns for managing page data
        in Storybook:
      </p>
      <ul>
        <li>
          Use a higher-level connected component. Storybook helps you compose such data from the
          "args" of child component stories
        </li>
        <li>
          Assemble data in the page component from your services. You can mock these services out
          using Storybook.
        </li>
      </ul>
      <p>
        Get a guided tutorial on component-driven development at
        <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
          Storybook tutorials
        </a>
        . Read more in the
        <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer"> docs </a>
        .
      </p>
      <div class="tip-wrapper">
        <span class="tip">Tip</span> Adjust the width of the canvas with the
        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
              id="a"
              fill="#999"
            />
          </g>
        </svg>
        Viewports addon in the toolbar
      </div>
    </section>
  </article>
`;
var lr = Object.defineProperty, sr = Object.getOwnPropertyDescriptor, it = (e, t, r, o) => {
  for (var n = o > 1 ? void 0 : o ? sr(t, r) : t, a = e.length - 1, l; a >= 0; a--)
    (l = e[a]) && (n = (o ? l(t, r, n) : l(n)) || n);
  return o && n && lr(t, r, n), n;
};
let Se = class extends _e {
  constructor() {
    super(...arguments), this.items = ["Item 1", "Item 2", "Item 3"];
  }
  render() {
    return console.log(this.items), N`
      <div class="border border-gray-400 p-2">
        <div class="text-center pb-2 uppercase">Side Menu</div>
        <ul>
          ${this.items.map(
      (e) => N`<li class="cursor-pointer hover:bg-gray-200">${e}</li>`
    )}
        </ul>
      </div>
    `;
  }
};
it([
  st()
], Se.prototype, "items", 2);
Se = it([
  Ne("coe-sidemenu"),
  rt(nt)
], Se);
export {
  se as Button,
  ie as Card,
  ar as Header,
  ur as Page,
  Se as Sidemenu
};
