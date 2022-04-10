;(function () {
  'use strict'
  var e = {
      1018: function (e, t, n) {
        var r = n(9242),
          o = n(3396)
        const a = (0, o.Uk)('Home'),
          u = (0, o.Uk)(' | '),
          i = (0, o.Uk)('About')
        function s(e, t) {
          const n = (0, o.up)('router-link'),
            r = (0, o.up)('router-view')
          return (
            (0, o.wg)(),
            (0, o.iD)(
              o.HY,
              null,
              [
                (0, o._)('nav', null, [
                  (0, o.Wm)(
                    n,
                    { to: { name: 'EventList' } },
                    { default: (0, o.w5)(() => [a]), _: 1 }
                  ),
                  u,
                  (0, o.Wm)(
                    n,
                    { to: { name: 'About' } },
                    { default: (0, o.w5)(() => [i]), _: 1 }
                  ),
                ]),
                (0, o.Wm)(r),
              ],
              64
            )
          )
        }
        var c = n(89)
        const v = {},
          l = (0, c.Z)(v, [['render', s]])
        var d = l,
          p = n(678)
        const f = (e) => (
            (0, o.dD)('data-v-47404730'), (e = e()), (0, o.Cn)(), e
          ),
          h = f(() => (0, o._)('h1', null, 'Events For Good', -1)),
          w = { class: 'events' }
        function m(e, t, n, r, a, u) {
          const i = (0, o.up)('EventCard')
          return (
            (0, o.wg)(),
            (0, o.iD)(
              o.HY,
              null,
              [
                h,
                (0, o._)('div', w, [
                  ((0, o.wg)(!0),
                  (0, o.iD)(
                    o.HY,
                    null,
                    (0, o.Ko)(
                      a.events,
                      (e) => (
                        (0, o.wg)(),
                        (0, o.j4)(i, { key: e.id, event: e }, null, 8, [
                          'event',
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ],
              64
            )
          )
        }
        var g = n(7139)
        const _ = { class: 'event-card' }
        function b(e, t, n, r, a, u) {
          const i = (0, o.up)('router-link')
          return (
            (0, o.wg)(),
            (0, o.j4)(
              i,
              {
                class: 'event-link',
                to: { name: 'EventDetails', params: { id: n.event.id } },
              },
              {
                default: (0, o.w5)(() => [
                  (0, o._)('div', _, [
                    (0, o._)(
                      'span',
                      null,
                      '@ ' +
                        (0, g.zw)(n.event.time) +
                        ' on ' +
                        (0, g.zw)(n.event.date),
                      1
                    ),
                    (0, o._)('h4', null, (0, g.zw)(n.event.title), 1),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['to']
            )
          )
        }
        var y = {
          name: 'EventCard',
          props: { event: { type: Object, required: !0 } },
        }
        const k = (0, c.Z)(y, [
          ['render', b],
          ['__scopeId', 'data-v-64da40ea'],
        ])
        var E = k,
          O = n(6265),
          j = n.n(O)
        const C = j().create({
          baseURL:
            'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
          withCredentials: !1,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        var z = {
            getEvents() {
              return C.get('/events')
            },
            getEvent(e) {
              return C.get('/events/' + e)
            },
          },
          D = {
            name: 'EventList',
            components: { EventCard: E },
            data() {
              return { events: null }
            },
            created() {
              z.getEvents()
                .then((e) => {
                  this.events = e.data
                })
                .catch((e) => {
                  console.log(e)
                })
            },
          }
        const A = (0, c.Z)(D, [
          ['render', m],
          ['__scopeId', 'data-v-47404730'],
        ])
        var Z = A
        const x = { key: 0 }
        function H(e, t, n, r, a, u) {
          return a.event
            ? ((0, o.wg)(),
              (0, o.iD)('div', x, [
                (0, o._)('h1', null, (0, g.zw)(a.event.title), 1),
                (0, o._)(
                  'p',
                  null,
                  (0, g.zw)(a.event.time) +
                    ' on ' +
                    (0, g.zw)(a.event.date) +
                    ' @ ' +
                    (0, g.zw)(a.event.location),
                  1
                ),
                (0, o._)('p', null, (0, g.zw)(a.event.description), 1),
              ]))
            : (0, o.kq)('', !0)
        }
        var L = {
          props: ['id'],
          data() {
            return { event: null }
          },
          created() {
            z.getEvent(this.id)
              .then((e) => {
                this.event = e.data
              })
              .catch((e) => {
                console.log(e)
              })
          },
        }
        const P = (0, c.Z)(L, [['render', H]])
        var T = P
        const U = { class: 'about' },
          W = (0, o._)(
            'h1',
            null,
            'A site for events to better the world.',
            -1
          ),
          Y = [W]
        function q(e, t) {
          return (0, o.wg)(), (0, o.iD)('div', U, Y)
        }
        const F = {},
          I = (0, c.Z)(F, [['render', q]])
        var M = I
        const R = [
            { path: '/', name: 'EventList', component: Z },
            { path: '/about', name: 'About', component: M },
            {
              path: '/events/:id',
              name: 'EventDetails',
              props: !0,
              component: T,
            },
          ],
          G = (0, p.p7)({ history: (0, p.PO)('/'), routes: R })
        var K = G,
          V = n(65),
          B = (0, V.MT)({
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {},
          })
        ;(0, r.ri)(d).use(B).use(K).mount('#app')
      },
    },
    t = {}
  function n(r) {
    var o = t[r]
    if (void 0 !== o) return o.exports
    var a = (t[r] = { exports: {} })
    return e[r](a, a.exports, n), a.exports
  }
  ;(n.m = e),
    (function () {
      var e = []
      n.O = function (t, r, o, a) {
        if (!r) {
          var u = 1 / 0
          for (v = 0; v < e.length; v++) {
            ;(r = e[v][0]), (o = e[v][1]), (a = e[v][2])
            for (var i = !0, s = 0; s < r.length; s++)
              (!1 & a || u >= a) &&
              Object.keys(n.O).every(function (e) {
                return n.O[e](r[s])
              })
                ? r.splice(s--, 1)
                : ((i = !1), a < u && (u = a))
            if (i) {
              e.splice(v--, 1)
              var c = o()
              void 0 !== c && (t = c)
            }
          }
          return t
        }
        a = a || 0
        for (var v = e.length; v > 0 && e[v - 1][2] > a; v--) e[v] = e[v - 1]
        e[v] = [r, o, a]
      }
    })(),
    (function () {
      n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e['default']
              }
            : function () {
                return e
              }
        return n.d(t, { a: t }), t
      }
    })(),
    (function () {
      n.d = function (e, t) {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
      }
    })(),
    (function () {
      n.g = (function () {
        if ('object' === typeof globalThis) return globalThis
        try {
          return this || new Function('return this')()
        } catch (e) {
          if ('object' === typeof window) return window
        }
      })()
    })(),
    (function () {
      n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }
    })(),
    (function () {
      var e = { 143: 0 }
      n.O.j = function (t) {
        return 0 === e[t]
      }
      var t = function (t, r) {
          var o,
            a,
            u = r[0],
            i = r[1],
            s = r[2],
            c = 0
          if (
            u.some(function (t) {
              return 0 !== e[t]
            })
          ) {
            for (o in i) n.o(i, o) && (n.m[o] = i[o])
            if (s) var v = s(n)
          }
          for (t && t(r); c < u.length; c++)
            (a = u[c]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0)
          return n.O(v)
        },
        r = (self['webpackChunkreal_world_vue'] =
          self['webpackChunkreal_world_vue'] || [])
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
    })()
  var r = n.O(void 0, [998], function () {
    return n(1018)
  })
  r = n.O(r)
})()
//# sourceMappingURL=app.304c7bb6.js.map
