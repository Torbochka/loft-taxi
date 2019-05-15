(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    231: function(e, t, n) {
      e.exports = n(379);
    },
    236: function(e, t, n) {},
    379: function(e, t, n) {
      'use strict';
      n.r(t);
      var a,
        r = n(0),
        c = n.n(r),
        o = n(19),
        i = n.n(o),
        s = (n(236), n(14)),
        u = n(201),
        l = n(15),
        m = n.n(l),
        p = n(13),
        b = n(191),
        d = n(20),
        f = n(408),
        g = n(411),
        E = Object(g.a)('HANDLE_LOGIN_SUBMIT'),
        O = Object(g.a)('HANDLE_LOGIN_SUBMIT_SUCCESS'),
        j = Object(g.a)('HANDLE_UNAUTHORIZE'),
        h = Object(f.a)(
          ((a = {}),
          Object(d.a)(a, E, function() {
            return !1;
          }),
          Object(d.a)(a, O, function() {
            return !0;
          }),
          Object(d.a)(a, j, function() {
            return !1;
          }),
          a),
          !1
        ),
        x = function(e) {
          return e.loggedIn;
        },
        v = function(e, t) {
          return fetch(
            'https://loft-taxi-remix.glitch.me/auth?username='
              .concat(e, '&password=')
              .concat(t)
          ).then(function(e) {
            return e.json();
          });
        },
        w = n(110),
        y = function(e) {
          var t,
            n = window.localStorage.getItem('state');
          (t = null === n ? e : Object(w.a)({}, JSON.parse(n), e)),
            window.localStorage.setItem('state', JSON.stringify(t));
        },
        N = n(192),
        S = n(109),
        I = n(41),
        L = m.a.mark(U),
        _ = m.a.mark(D),
        k = m.a.mark(R),
        T = m.a.mark(B),
        A = m.a.mark(F),
        C = m.a.mark(H);
      function U() {
        return m.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(p.e)(E, D);
              case 2:
              case 'end':
                return e.stop();
            }
        }, L);
      }
      function D() {
        var e, t, n;
        return m.a.wrap(
          function(a) {
            for (;;)
              switch ((a.prev = a.next)) {
                case 0:
                  return (
                    (a.prev = 0),
                    (a.next = 3),
                    Object(p.d)(Object(N.a)('loginForm'))
                  );
                case 3:
                  return (
                    (e = a.sent),
                    (t = e.username),
                    (n = e.password),
                    (a.next = 8),
                    Object(p.a)(R, t, n)
                  );
                case 8:
                  a.next = 13;
                  break;
                case 10:
                  throw ((a.prev = 10),
                  (a.t0 = a.catch(0)),
                  new S.a(a.t0.message));
                case 13:
                case 'end':
                  return a.stop();
              }
          },
          _,
          null,
          [[0, 10]]
        );
      }
      function R(e, t) {
        var n;
        return m.a.wrap(function(a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                return (a.next = 2), Object(p.a)(v, e, t);
              case 2:
                if (!(n = a.sent).success) {
                  a.next = 12;
                  break;
                }
                return (a.next = 6), Object(p.c)(Object(I.a)('loginForm'));
              case 6:
                return (a.next = 8), Object(p.c)(O());
              case 8:
                return (a.next = 10), Object(p.a)(y, { loggedIn: !0 });
              case 10:
                a.next = 14;
                break;
              case 12:
                return (
                  (a.next = 14), Object(p.c)(Object(I.b)('loginForm', n.error))
                );
              case 14:
              case 'end':
                return a.stop();
            }
        }, k);
      }
      function B() {
        return m.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(p.e)(j, F);
              case 2:
              case 'end':
                return e.stop();
            }
        }, T);
      }
      function F() {
        return m.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(p.a)(y, { loggedIn: !1 });
              case 2:
              case 'end':
                return e.stop();
            }
        }, A);
      }
      function H() {
        return m.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(p.b)(U);
              case 2:
                return (e.next = 4), Object(p.b)(B);
              case 4:
              case 'end':
                return e.stop();
            }
        }, C);
      }
      var W = Object(g.a)('HANDLE_PROFILE_SUBMIT'),
        z = Object(f.a)(
          Object(d.a)({}, W, function(e, t) {
            return t.payload;
          }),
          null
        ),
        J = function(e) {
          return e.profile;
        },
        M = m.a.mark(V),
        q = m.a.mark(P),
        G = m.a.mark(X);
      function V() {
        return m.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(p.e)(W, P);
              case 2:
              case 'end':
                return e.stop();
            }
        }, M);
      }
      function P() {
        var e;
        return m.a.wrap(function(t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (t.next = 2), Object(p.d)(Object(N.a)('paymentForm'));
              case 2:
                return (
                  (e = t.sent), (t.next = 5), Object(p.a)(y, { profile: e })
                );
              case 5:
              case 'end':
                return t.stop();
            }
        }, q);
      }
      function X() {
        return m.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(p.b)(V);
              case 2:
              case 'end':
                return e.stop();
            }
        }, G);
      }
      var Q,
        $,
        Y = Object(g.a)('FETCH_ADDRESS_LIST_REQUEST'),
        Z = Object(g.a)('FETCH_ADDRESS_LIST_SUCCESS'),
        K = Object(g.a)('FETCH_ADDRESS_LIST_FAILURE'),
        ee = Object(g.a)('HANDLE_ROUTE_SUBMIT'),
        te = Object(g.a)('HANDLE_ROUTE_SUBMIT_SUCCESS'),
        ne = Object(g.a)('HANDLE_CLEAR_SUBMIT'),
        ae = Object(f.a)(
          ((Q = {}),
          Object(d.a)(Q, Y, function(e) {
            return e;
          }),
          Object(d.a)(Q, Z, function(e, t) {
            return t.payload;
          }),
          Object(d.a)(Q, K, function(e, t) {
            return t.payload;
          }),
          Q),
          []
        ),
        re = Object(f.a)(
          (($ = {}),
          Object(d.a)($, ee, function() {
            return [];
          }),
          Object(d.a)($, ne, function() {
            return [];
          }),
          Object(d.a)($, te, function(e, t) {
            return t.payload;
          }),
          $),
          []
        ),
        ce = ae,
        oe = function(e) {
          var t = e.addresses;
          return Array.isArray(t) && t.length > 0;
        },
        ie = function(e) {
          var t = e.route;
          return Array.isArray(t) && t.length > 0;
        },
        se = function() {
          return fetch('https://loft-taxi-remix.glitch.me/addressList')
            .then(function(e) {
              return e.json();
            })
            .catch(function(e) {
              return console.log(e);
            });
        },
        ue = function(e, t) {
          return fetch(
            'https://loft-taxi-remix.glitch.me/route?address1='
              .concat(e, '&address2=')
              .concat(t)
          )
            .then(function(e) {
              return e.json();
            })
            .catch(function(e) {
              return console.log(e);
            });
        },
        le = m.a.mark(fe),
        me = m.a.mark(ge),
        pe = m.a.mark(Ee),
        be = m.a.mark(Oe),
        de = m.a.mark(je);
      function fe() {
        return m.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(p.e)(Y, ge);
              case 2:
              case 'end':
                return e.stop();
            }
        }, le);
      }
      function ge() {
        var e, t;
        return m.a.wrap(
          function(n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (n.prev = 0), (n.next = 3), Object(p.d)(oe);
                case 3:
                  if (n.sent) {
                    n.next = 11;
                    break;
                  }
                  return (n.next = 7), Object(p.a)(se);
                case 7:
                  return (
                    (e = n.sent),
                    (t = e.addresses),
                    (n.next = 11),
                    Object(p.c)(Z(t))
                  );
                case 11:
                  n.next = 17;
                  break;
                case 13:
                  return (
                    (n.prev = 13),
                    (n.t0 = n.catch(0)),
                    (n.next = 17),
                    Object(p.c)(K({ error: n.t0 }))
                  );
                case 17:
                case 'end':
                  return n.stop();
              }
          },
          me,
          null,
          [[0, 13]]
        );
      }
      function Ee() {
        return m.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(p.e)(ee, Oe);
              case 2:
              case 'end':
                return e.stop();
            }
        }, pe);
      }
      function Oe() {
        var e, t, n, a;
        return m.a.wrap(
          function(r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (r.prev = 0),
                    (r.next = 3),
                    Object(p.d)(Object(N.a)('mapForm'))
                  );
                case 3:
                  return (
                    (e = r.sent),
                    (t = e.from),
                    (n = e.to),
                    (r.next = 8),
                    Object(p.a)(ue, t, n)
                  );
                case 8:
                  return (a = r.sent), (r.next = 11), Object(p.c)(te(a));
                case 11:
                  return (r.next = 13), Object(p.c)(Object(I.a)('mapForm'));
                case 13:
                  r.next = 20;
                  break;
                case 15:
                  return (
                    (r.prev = 15),
                    (r.t0 = r.catch(0)),
                    (r.next = 19),
                    Object(p.c)(Object(I.b)('mapForm', r.t0.message))
                  );
                case 19:
                  throw new S.a(r.t0.message);
                case 20:
                case 'end':
                  return r.stop();
              }
          },
          be,
          null,
          [[0, 15]]
        );
      }
      function je() {
        return m.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(p.b)(fe);
              case 2:
                return (e.next = 4), Object(p.b)(Ee);
              case 4:
              case 'end':
                return e.stop();
            }
        }, de);
      }
      var he = m.a.mark(ve),
        xe = Object(s.c)({
          loggedIn: h,
          profile: z,
          addresses: ce,
          route: re,
          form: b.a
        });
      function ve() {
        return m.a.wrap(function(e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(p.b)(H);
              case 2:
                return (e.next = 4), Object(p.b)(X);
              case 4:
                return (e.next = 6), Object(p.b)(je);
              case 6:
              case 'end':
                return e.stop();
            }
        }, he);
      }
      var we = function() {
          var e = Object(u.a)(),
            t = (function() {
              try {
                var e = window.localStorage.getItem('state');
                if (null === e) return;
                return JSON.parse(e);
              } catch (t) {
                return;
              }
            })(),
            n = Object(s.e)(
              xe,
              t,
              Object(s.d)(
                Object(s.a)(e),
                window.__REDUX_DEVTOOLS_EXTENSION__
                  ? window.__REDUX_DEVTOOLS_EXTENSION__()
                  : function(e) {
                      return e;
                    }
              )
            );
          return e.run(ve), n;
        },
        ye = n(39),
        Ne = n(34),
        Se = n(62),
        Ie = n(54),
        Le = n(11),
        _e = n(399),
        ke = n(400),
        Te = n(401),
        Ae = n(402),
        Ce = { handleUnAuthorize: j },
        Ue = Object(s.d)(
          Se.f,
          Object(Ie.a)(function(e) {
            return { isLoggedIn: x(e) };
          }, Ce),
          Object(Le.a)(function(e) {
            return {
              root: { position: 'relative', zIndex: 100 },
              grow: { flexGrow: 1 },
              button: { margin: e.spacing(1) }
            };
          })
        )(function(e) {
          var t = e.handleUnAuthorize,
            n = e.isLoggedIn,
            a = e.classes;
          return c.a.createElement(
            'div',
            { className: a.root },
            c.a.createElement(
              _e.a,
              { position: 'static', color: 'inherit' },
              c.a.createElement(
                ke.a,
                null,
                c.a.createElement(
                  Te.a,
                  { className: a.grow, variant: 'h6', color: 'inherit' },
                  'Loft Taxi'
                ),
                c.a.createElement(
                  Ae.a,
                  { component: Ne.b, to: '/map' },
                  '\u041a\u0430\u0440\u0442\u0430'
                ),
                c.a.createElement(
                  Ae.a,
                  { component: Ne.b, to: '/profile' },
                  '\u041f\u0440\u043e\u0444\u0438\u043b\u044c'
                ),
                n
                  ? c.a.createElement(
                      Ae.a,
                      {
                        onClick: function() {
                          t();
                        }
                      },
                      '\u0412\u044b\u0439\u0442\u0438'
                    )
                  : c.a.createElement(
                      Ae.a,
                      { component: Ne.b, to: '/login' },
                      '\u0412\u043e\u0439\u0442\u0438'
                    )
              )
            )
          );
        }),
        De = n(57),
        Re = n(189),
        Be = n(190),
        Fe = n(406),
        He = n(380),
        We = n(409),
        ze = function(e) {
          var t = e.input,
            n = e.label,
            a = e.meta,
            r = a.touched,
            o = a.error,
            i = (a.invalid, Object(De.a)(e, ['input', 'label', 'meta']));
          return c.a.createElement(
            We.a,
            Object.assign({ label: n, error: r && o, helperText: r && o }, t, i)
          );
        },
        Je = { handleLoginSubmit: E },
        Me = Object(s.d)(
          Se.f,
          Object(ye.b)(function(e) {
            return { isLoggedIn: x(e) };
          }, Je),
          Object(Be.a)({
            form: 'loginForm',
            validate: function(e) {
              var t = {};
              return (
                e.username ||
                  (t.username =
                    '\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d'),
                e.password ||
                  (t.password =
                    '\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c'),
                t
              );
            }
          }),
          Object(Le.a)(function(e) {
            return {
              paper: Object(d.a)(
                {
                  marginTop: e.spacing(3),
                  marginBottom: e.spacing(3),
                  padding: e.spacing(2)
                },
                e.breakpoints.up(600 + e.spacing(6)),
                {
                  marginTop: e.spacing(6),
                  marginBottom: e.spacing(6),
                  padding: e.spacing(3)
                }
              )
            };
          })
        )(function(e) {
          var t = e.handleSubmit,
            n = e.handleLoginSubmit,
            a = e.isLoggedIn,
            r = e.classes;
          return a
            ? c.a.createElement(Se.a, { to: '/map' })
            : c.a.createElement(
                Fe.a,
                {
                  container: !0,
                  className: r.root,
                  spacing: 0,
                  direction: 'column',
                  alignItems: 'center',
                  justify: 'center',
                  style: { minHeight: '100vh' }
                },
                c.a.createElement(
                  Fe.a,
                  { item: !0, xs: 3 },
                  c.a.createElement(
                    'form',
                    {
                      onSubmit: t(function() {
                        n();
                      })
                    },
                    c.a.createElement(
                      He.a,
                      { className: r.paper, elevation: 2 },
                      c.a.createElement(
                        Fe.a,
                        { container: !0, spacing: 3 },
                        c.a.createElement(
                          Fe.a,
                          { item: !0, xs: 12 },
                          c.a.createElement(
                            Te.a,
                            { component: 'h2', variant: 'h4', align: 'center' },
                            '\u0412\u043e\u0439\u0442\u0438'
                          )
                        ),
                        [
                          {
                            name: 'username',
                            label:
                              '\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f',
                            type: 'text'
                          },
                          {
                            name: 'password',
                            label: '\u041f\u0430\u0440\u043e\u043b\u044c',
                            type: 'password'
                          }
                        ].map(function(e) {
                          var t = e.name,
                            n = e.label,
                            a = e.type;
                          return c.a.createElement(
                            Fe.a,
                            { key: t, item: !0, xs: 12 },
                            c.a.createElement(Re.a, {
                              name: t,
                              label: n,
                              margin: 'none',
                              component: ze,
                              type: a,
                              fullWidth: !0,
                              required: !0
                            })
                          );
                        }),
                        c.a.createElement(
                          Fe.a,
                          { item: !0, xs: 12 },
                          c.a.createElement(
                            Ae.a,
                            {
                              variant: 'outlined',
                              color: 'primary',
                              className: r.button,
                              type: 'submit'
                            },
                            '\u0412\u043e\u0439\u0442\u0438'
                          )
                        )
                      )
                    )
                  )
                )
              );
        }),
        qe = n(197),
        Ge = n(152),
        Ve = n.n(Ge),
        Pe = (n(361), n(198)),
        Xe = n(90),
        Qe = n.n(Xe),
        $e = n(35),
        Ye = n.n($e),
        Ze = n(66),
        Ke = n.n(Ze),
        et = n(91),
        tt = n.n(et),
        nt = n(405),
        at = n(407),
        rt = n(410),
        ct = function(e) {
          var t = e.input,
            n = e.label,
            a = e.selectName,
            r = e.meta,
            o = r.touched,
            i = r.error,
            s = e.children,
            u = Object(De.a)(e, [
              'input',
              'label',
              'selectName',
              'meta',
              'children'
            ]);
          return c.a.createElement(
            nt.a,
            { error: o && i },
            c.a.createElement(rt.a, { htmlFor: a }, n),
            c.a.createElement(
              at.a,
              Object.assign({ native: !0 }, t, u, { inputProps: { name: a } }),
              s
            )
          );
        },
        ot = { fetchAddressListRequest: Y, handleRouteSubmit: ee },
        it = Object(s.d)(
          Se.f,
          Object(Ie.a)(function(e) {
            return { addresses: ((t = e), t.addresses), isAddresses: oe(e) };
            var t;
          }, ot),
          Object(Be.a)({ form: 'mapForm' }),
          Object(Le.a)(function(e) {
            return {
              paper: Object(d.a)(
                {
                  position: 'absolute',
                  top: 0,
                  left: 20,
                  maxWidth: '30%',
                  zIndex: 1,
                  marginTop: e.spacing(3),
                  marginBottom: e.spacing(3),
                  padding: e.spacing(2)
                },
                e.breakpoints.up(600 + e.spacing(6)),
                {
                  marginTop: e.spacing(6),
                  marginBottom: e.spacing(6),
                  padding: e.spacing(3)
                }
              ),
              container: { display: 'flex', flexWrap: 'wrap' },
              grow: { flexGrow: 1 },
              button: { margin: e.spacing(1) }
            };
          })
        )(function(e) {
          var t = e.fetchAddressListRequest,
            n = e.handleSubmit,
            a = e.handleRouteSubmit,
            o = e.isAddresses,
            i = e.addresses,
            s = e.classes,
            u = e.invalid,
            l = (e.submitting, e.pristine);
          Object(r.useEffect)(
            function() {
              t();
            },
            [t]
          );
          return c.a.createElement(
            Qe.a,
            { className: s.paper, elevation: 2 },
            c.a.createElement(
              'form',
              {
                onSubmit: n(function() {
                  a();
                })
              },
              c.a.createElement(
                Ye.a,
                {
                  container: !0,
                  className: s.root,
                  spacing: 4,
                  alignContent: 'stretch',
                  alignItems: 'stretch',
                  direction: 'row',
                  justify: 'flex-start',
                  component: 'div'
                },
                c.a.createElement(
                  Ye.a,
                  { item: !0, xs: 12 },
                  c.a.createElement(
                    Ke.a,
                    {
                      className: s.grow,
                      variant: 'h4',
                      component: 'h1',
                      align: 'left'
                    },
                    '\u0412\u044b\u0437\u043e\u0432 \u0442\u0430\u043a\u0441\u0438'
                  )
                ),
                c.a.createElement(
                  Ye.a,
                  { item: !0, xs: 12 },
                  [
                    {
                      label:
                        '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f',
                      name: 'from'
                    },
                    {
                      label:
                        '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u043f\u0440\u0438\u0431\u044b\u0442\u0438\u044f',
                      name: 'to'
                    }
                  ].map(function(e) {
                    var t = e.label,
                      n = e.name;
                    return c.a.createElement(
                      Re.a,
                      {
                        key: t,
                        label: t,
                        selectName: n,
                        name: n,
                        component: ct
                      },
                      c.a.createElement('option', { value: ' ' }),
                      o &&
                        i.map(function(e) {
                          return c.a.createElement(
                            'option',
                            { key: e, value: e },
                            e
                          );
                        })
                    );
                  })
                ),
                c.a.createElement(
                  Ye.a,
                  { item: !0, xs: 12 },
                  c.a.createElement(
                    tt.a,
                    {
                      disabled: u || l,
                      variant: 'outlined',
                      color: 'primary',
                      className: s.button,
                      type: 'submit'
                    },
                    '\u0412\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u0441\u0438'
                  )
                )
              )
            )
          );
        });
      function st() {
        var e = Object(qe.a)([
          '\n    position: relative;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: ',
          'px;\n  '
        ]);
        return (
          (st = function() {
            return e;
          }),
          e
        );
      }
      var ut = { handleClearSubmit: ne },
        lt = Object(s.d)(
          Se.f,
          Object(Ie.a)(function(e) {
            return {
              isLoggedIn: x(e),
              isRoute: ie(e),
              route: ((t = e), t.route)
            };
            var t;
          }, ut),
          Object(Le.a)(function(e) {
            return {
              paper: Object(d.a)(
                {
                  position: 'absolute',
                  top: 0,
                  left: 20,
                  maxWidth: '30%',
                  zIndex: 1,
                  marginTop: e.spacing(3),
                  marginBottom: e.spacing(3),
                  padding: e.spacing(2)
                },
                e.breakpoints.up(600 + e.spacing(6)),
                {
                  marginTop: e.spacing(6),
                  marginBottom: e.spacing(6),
                  padding: e.spacing(3)
                }
              ),
              container: { display: 'flex', flexWrap: 'wrap' },
              grow: { flexGrow: 1 },
              button: { margin: e.spacing(1) }
            };
          })
        )(function(e) {
          var t = e.isLoggedIn,
            n = e.isRoute,
            a = e.handleClearSubmit,
            o = e.route,
            i = e.classes,
            s = Object(r.useRef)(null),
            u = Object(r.useRef)(null),
            l = Pe.a.div(st(), window.innerHeight - 64);
          Object(r.useEffect)(function() {
            return (
              (Ve.a.accessToken =
                'pk.eyJ1IjoidG9ib2Noa2EiLCJhIjoiY2p2azJoNDQ4MGtxOTN5cW1yNmxmc3BleSJ9.mNLvfhUFoh2eIU7-e-C4cA'),
              (u.current = new Ve.a.Map({
                container: s.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [30.2656504, 59.8029126],
                zoom: 15
              })),
              function() {
                u.current.remove();
              }
            );
          }),
            Object(r.useEffect)(function() {
              u.current.on('style.load', function() {
                n &&
                  (function(e, t) {
                    e.flyTo({ center: t[0], zoom: 15 }),
                      e.addLayer({
                        id: 'route',
                        type: 'line',
                        source: {
                          type: 'geojson',
                          data: {
                            type: 'Feature',
                            properties: {},
                            geometry: { type: 'LineString', coordinates: t }
                          }
                        },
                        layout: { 'line-join': 'round', 'line-cap': 'round' },
                        paint: { 'line-color': '#c2423a', 'line-width': 8 }
                      });
                  })(u.current, o);
              });
            });
          return c.a.createElement(
            l,
            { ref: s },
            t
              ? n
                ? c.a.createElement(
                    Qe.a,
                    { className: i.paper },
                    c.a.createElement(
                      Ye.a,
                      { container: !0, spacing: 3 },
                      c.a.createElement(
                        Ye.a,
                        { item: !0, xs: 12 },
                        c.a.createElement(
                          Ke.a,
                          { component: 'h1', variant: 'h4', align: 'left' },
                          '\u0417\u0430\u043a\u0430\u0437 \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d'
                        )
                      ),
                      c.a.createElement(
                        Ye.a,
                        { item: !0, xs: 12 },
                        c.a.createElement(
                          Ke.a,
                          {
                            className: i.grow,
                            variant: 'body2',
                            gutterBottom: !0
                          },
                          '\u0412\u0430\u0448\u0435 \u0442\u0430\u043a\u0441\u0438 \u0443\u0436\u0435 \u0435\u0434\u0435\u0442 \u043a \u0432\u0430\u043c. \u041f\u0440\u0438\u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0447\u0435\u0440\u0435\u0437 10 \u043c\u0438\u043d\u0443\u0442.'
                        )
                      ),
                      c.a.createElement(
                        Ye.a,
                        { item: !0, xs: 12 },
                        c.a.createElement(
                          tt.a,
                          {
                            variant: 'outlined',
                            color: 'primary',
                            onClick: function() {
                              a();
                            }
                          },
                          '\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0437\u0430\u043a\u0430\u0437'
                        )
                      )
                    )
                  )
                : c.a.createElement(it, null)
              : c.a.createElement(
                  Qe.a,
                  { className: i.paper, elevation: 2 },
                  c.a.createElement(
                    Ye.a,
                    {
                      container: !0,
                      className: i.root,
                      spacing: 4,
                      alignContent: 'stretch',
                      alignItems: 'stretch',
                      direction: 'row',
                      justify: 'flex-start',
                      component: 'div'
                    },
                    c.a.createElement(
                      Ye.a,
                      { item: !0, xs: 12 },
                      c.a.createElement(
                        Ke.a,
                        {
                          className: i.grow,
                          variant: 'h4',
                          component: 'h1',
                          color: 'inherit'
                        },
                        '\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043b\u0430\u0442\u0435\u0436\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435'
                      )
                    ),
                    c.a.createElement(
                      Ye.a,
                      { item: !0, xs: 12 },
                      c.a.createElement(
                        Ke.a,
                        {
                          className: i.grow,
                          variant: 'body2',
                          gutterBottom: !0
                        },
                        '\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u043e\u0439 \u043a\u0430\u0440\u0442\u0435, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437.'
                      )
                    ),
                    c.a.createElement(
                      Ye.a,
                      { item: !0, xs: 12 },
                      c.a.createElement(
                        tt.a,
                        {
                          component: Ne.b,
                          variant: 'outlined',
                          color: 'primary',
                          className: i.button,
                          to: '/profile'
                        },
                        '\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u044c'
                      )
                    )
                  )
                )
          );
        }),
        mt = function(e) {
          return e
            ? e
                .replace(/\s/g, '')
                .match(/.{1,4}/g)
                .join(' ')
            : '';
        },
        pt = function(e) {
          var t = e.input,
            n = e.label,
            a = e.meta,
            r = a.touched,
            o = a.error,
            i = Object(De.a)(e, ['input', 'label', 'meta']);
          return c.a.createElement(
            We.a,
            Object.assign(
              { label: n, error: !(!r || !o), helperText: r && o },
              t,
              i
            )
          );
        },
        bt = { handleProfileSubmit: W },
        dt = Object(s.d)(
          Se.f,
          Object(ye.b)(function(e) {
            return { initialValues: J(e) };
          }, bt),
          Object(Be.a)({
            form: 'paymentForm',
            validate: function(e) {
              var t = Object(w.a)({}, e),
                n = t.cardNumber,
                a = t.cvv,
                r = {};
              return (
                ['cardName', 'cardNumber', 'expData', 'cvv'].forEach(function(
                  t
                ) {
                  e[t] ||
                    (r[t] =
                      '\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435');
                }),
                n &&
                  16 !== n.replace(/\s/g, '').length &&
                  (r.cardNumber =
                    '\u0412 \u043d\u043e\u043c\u0435\u0440\u0435 \u043a\u0430\u0440\u0442\u044b 16 \u0446\u0438\u0444\u0440'),
                n &&
                  !/^\d+$/.test(n.replace(/\s/g, '')) &&
                  (r.cardNumber =
                    '\u041c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b'),
                a &&
                  3 !== a.length &&
                  (r.cvv =
                    'CVV \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 3 \u0446\u0438\u0444\u0440'),
                a &&
                  !/^\d+$/.test(a) &&
                  (r.cvv =
                    '\u041c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b'),
                r
              );
            }
          }),
          Object(Le.a)(function(e) {
            return {
              button: { marginTop: e.spacing(3), marginLeft: e.spacing(1) }
            };
          })
        )(function(e) {
          var t = e.handleSubmit,
            n = e.handleProfileSubmit,
            a = e.submitSucceeded,
            r = e.classes;
          return a
            ? c.a.createElement(
                Fe.a,
                { container: !0, spacing: 2 },
                c.a.createElement(
                  Fe.a,
                  { item: !0, xs: 12 },
                  c.a.createElement(
                    Te.a,
                    { className: r.grow, variant: 'body2', gutterBottom: !0 },
                    '\u041f\u043b\u0430\u0442\u0451\u0436\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u044b. \u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0442\u0430\u043a\u0441\u0438.'
                  )
                ),
                c.a.createElement(
                  Fe.a,
                  { item: !0, xs: 12 },
                  c.a.createElement(
                    Ae.a,
                    {
                      variant: 'outlined',
                      color: 'primary',
                      component: Ne.b,
                      to: '/map'
                    },
                    '\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u043a\u0430\u0440\u0442\u0443'
                  )
                )
              )
            : c.a.createElement(
                'form',
                {
                  onSubmit: t(function(e) {
                    n(e);
                  })
                },
                c.a.createElement(
                  Te.a,
                  { className: r.grow, variant: 'h6' },
                  'C\u043f\u043e\u0441\u043e\u0431 \u043e\u043f\u043b\u0430\u0442\u044b'
                ),
                c.a.createElement(
                  Fe.a,
                  {
                    container: !0,
                    className: r.root,
                    spacing: 3,
                    alignContent: 'stretch',
                    alignItems: 'stretch',
                    component: 'div',
                    direction: 'row',
                    justify: 'flex-start'
                  },
                  c.a.createElement(
                    Fe.a,
                    { item: !0, xs: 12, md: 6 },
                    c.a.createElement(Re.a, {
                      name: 'cardName',
                      label:
                        '\u0418\u043c\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430',
                      component: pt,
                      fullWidth: !0,
                      required: !0
                    })
                  ),
                  c.a.createElement(
                    Fe.a,
                    { item: !0, xs: 12, md: 6 },
                    c.a.createElement(Re.a, {
                      name: 'cardNumber',
                      label:
                        '\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b',
                      component: pt,
                      normalize: mt,
                      fullWidth: !0,
                      required: !0
                    })
                  ),
                  c.a.createElement(
                    Fe.a,
                    { item: !0, xs: 12, md: 6 },
                    c.a.createElement(Re.a, {
                      name: 'expData',
                      label:
                        '\u0414\u0430\u0442\u0430 \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f',
                      type: 'date',
                      InputLabelProps: { shrink: !0 },
                      component: pt,
                      fullWidth: !0,
                      required: !0
                    })
                  ),
                  c.a.createElement(
                    Fe.a,
                    { item: !0, xs: 12, md: 6 },
                    c.a.createElement(Re.a, {
                      name: 'cvv',
                      label: 'CVV',
                      component: pt,
                      fullWidth: !0,
                      required: !0
                    })
                  ),
                  c.a.createElement(
                    Ae.a,
                    {
                      variant: 'contained',
                      color: 'primary',
                      type: 'submit',
                      className: r.button
                    },
                    '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c'
                  )
                )
              );
        }),
        ft = Object(Le.a)(function(e) {
          return {
            paper: Object(d.a)(
              {
                marginTop: e.spacing(3),
                marginBottom: e.spacing(3),
                padding: e.spacing(2)
              },
              e.breakpoints.up(600 + e.spacing(6)),
              {
                marginTop: e.spacing(6),
                marginBottom: e.spacing(6),
                padding: e.spacing(3)
              }
            ),
            container: { minHeight: '100vh' }
          };
        })(function(e) {
          var t = e.classes;
          return c.a.createElement(
            Fe.a,
            {
              container: !0,
              spacing: 0,
              direction: 'column',
              alignItems: 'center'
            },
            c.a.createElement(
              Fe.a,
              { item: !0, xs: 10 },
              c.a.createElement(
                He.a,
                { className: t.paper, elevation: 2 },
                c.a.createElement(
                  Te.a,
                  { variant: 'h4', component: 'h1', align: 'center' },
                  '\u041f\u0440\u043e\u0444\u0438\u043b\u044c'
                ),
                c.a.createElement(dt, null)
              )
            )
          );
        }),
        gt = Object(ye.b)(function(e) {
          return { isLoggedIn: x(e) };
        })(function(e) {
          var t = e.isLoggedIn,
            n = e.component,
            a = Object(De.a)(e, ['isLoggedIn', 'component']);
          return c.a.createElement(
            Se.b,
            Object.assign({}, a, {
              render: function(e) {
                return t
                  ? c.a.createElement(n, e)
                  : c.a.createElement(Se.a, { to: '/login' });
              }
            })
          );
        }),
        Et = function() {
          return c.a.createElement(
            Ne.a,
            null,
            c.a.createElement(Ue, null),
            c.a.createElement(
              Se.d,
              null,
              c.a.createElement(gt, { path: '/map', component: lt }),
              c.a.createElement(gt, { path: '/profile', component: ft }),
              c.a.createElement(Se.b, { path: '/login', component: Me }),
              c.a.createElement(Se.a, { to: '/map' })
            )
          );
        },
        Ot = we();
      i.a.render(
        c.a.createElement(ye.a, { store: Ot }, c.a.createElement(Et, null)),
        document.getElementById('root')
      );
    }
  },
  [[231, 1, 2]]
]);
//# sourceMappingURL=main.a6d5f272.chunk.js.map
