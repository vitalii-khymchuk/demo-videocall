!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.DailyIframe = t())
    : (e.DailyIframe = t());
})(this, function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var i = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var i in e)
            n.d(
              r,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 59))
    );
  })([
    function (e, t) {
      function n(e, t, n, r, i, a, o) {
        try {
          var s = e[a](o),
            c = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      e.exports = function (e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (i, a) {
            var o = e.apply(t, r);
            function s(e) {
              n(o, i, a, s, c, 'next', e);
            }
            function c(e) {
              n(o, i, a, s, c, 'throw', e);
            }
            s(void 0);
          });
        };
      };
    },
    function (e, t) {
      function n(t) {
        return (
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? (e.exports = n =
                function (e) {
                  return typeof e;
                })
            : (e.exports = n =
                function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          n(t)
        );
      }
      e.exports = n;
    },
    function (e, t) {
      e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      };
    },
    function (e, t) {
      function n(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      e.exports = function (e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
      };
    },
    function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          n(t)
        );
      }
      e.exports = n;
    },
    function (e, t) {
      e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      };
    },
    function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    function (e, t) {
      var n = Array.isArray;
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(37),
        i = 'object' == typeof self && self && self.Object === Object && self,
        a = r || i || Function('return this')();
      e.exports = a;
    },
    function (e, t, n) {
      var r = n(24);
      e.exports = function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      };
    },
    function (e, t, n) {
      var r = n(1),
        i = n(6);
      e.exports = function (e, t) {
        return !t || ('object' !== r(t) && 'function' != typeof t) ? i(e) : t;
      };
    },
    function (e, t, n) {
      'use strict';
      var r,
        i = 'object' == typeof Reflect ? Reflect : null,
        a =
          i && 'function' == typeof i.apply
            ? i.apply
            : function (e, t, n) {
                return Function.prototype.apply.call(e, t, n);
              };
      r =
        i && 'function' == typeof i.ownKeys
          ? i.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var o =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function s() {
        s.init.call(this);
      }
      (e.exports = s),
        (s.EventEmitter = s),
        (s.prototype._events = void 0),
        (s.prototype._eventsCount = 0),
        (s.prototype._maxListeners = void 0);
      var c = 10;
      function u(e) {
        if ('function' != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function l(e) {
        return void 0 === e._maxListeners
          ? s.defaultMaxListeners
          : e._maxListeners;
      }
      function d(e, t, n, r) {
        var i, a, o, s;
        if (
          (u(n),
          void 0 === (a = e._events)
            ? ((a = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== a.newListener &&
                (e.emit('newListener', t, n.listener ? n.listener : n),
                (a = e._events)),
              (o = a[t])),
          void 0 === o)
        )
          (o = a[t] = n), ++e._eventsCount;
        else if (
          ('function' == typeof o
            ? (o = a[t] = r ? [n, o] : [o, n])
            : r
            ? o.unshift(n)
            : o.push(n),
          (i = l(e)) > 0 && o.length > i && !o.warned)
        ) {
          o.warned = !0;
          var c = new Error(
            'Possible EventEmitter memory leak detected. ' +
              o.length +
              ' ' +
              String(t) +
              ' listeners added. Use emitter.setMaxListeners() to increase limit'
          );
          (c.name = 'MaxListenersExceededWarning'),
            (c.emitter = e),
            (c.type = t),
            (c.count = o.length),
            (s = c),
            console && console.warn && console.warn(s);
        }
        return e;
      }
      function f() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function p(e, t, n) {
        var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
          i = f.bind(r);
        return (i.listener = n), (r.wrapFn = i), i;
      }
      function h(e, t, n) {
        var r = e._events;
        if (void 0 === r) return [];
        var i = r[t];
        return void 0 === i
          ? []
          : 'function' == typeof i
          ? n
            ? [i.listener || i]
            : [i]
          : n
          ? (function (e) {
              for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
              return t;
            })(i)
          : m(i, i.length);
      }
      function v(e) {
        var t = this._events;
        if (void 0 !== t) {
          var n = t[e];
          if ('function' == typeof n) return 1;
          if (void 0 !== n) return n.length;
        }
        return 0;
      }
      function m(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n;
      }
      Object.defineProperty(s, 'defaultMaxListeners', {
        enumerable: !0,
        get: function () {
          return c;
        },
        set: function (e) {
          if ('number' != typeof e || e < 0 || o(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          c = e;
        },
      }),
        (s.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (s.prototype.setMaxListeners = function (e) {
          if ('number' != typeof e || e < 0 || o(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                '.'
            );
          return (this._maxListeners = e), this;
        }),
        (s.prototype.getMaxListeners = function () {
          return l(this);
        }),
        (s.prototype.emit = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t.push(arguments[n]);
          var r = 'error' === e,
            i = this._events;
          if (void 0 !== i) r = r && void 0 === i.error;
          else if (!r) return !1;
          if (r) {
            var o;
            if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
            var s = new Error(
              'Unhandled error.' + (o ? ' (' + o.message + ')' : '')
            );
            throw ((s.context = o), s);
          }
          var c = i[e];
          if (void 0 === c) return !1;
          if ('function' == typeof c) a(c, this, t);
          else {
            var u = c.length,
              l = m(c, u);
            for (n = 0; n < u; ++n) a(l[n], this, t);
          }
          return !0;
        }),
        (s.prototype.addListener = function (e, t) {
          return d(this, e, t, !1);
        }),
        (s.prototype.on = s.prototype.addListener),
        (s.prototype.prependListener = function (e, t) {
          return d(this, e, t, !0);
        }),
        (s.prototype.once = function (e, t) {
          return u(t), this.on(e, p(this, e, t)), this;
        }),
        (s.prototype.prependOnceListener = function (e, t) {
          return u(t), this.prependListener(e, p(this, e, t)), this;
        }),
        (s.prototype.removeListener = function (e, t) {
          var n, r, i, a, o;
          if ((u(t), void 0 === (r = this._events))) return this;
          if (void 0 === (n = r[e])) return this;
          if (n === t || n.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete r[e],
                r.removeListener &&
                  this.emit('removeListener', e, n.listener || t));
          else if ('function' != typeof n) {
            for (i = -1, a = n.length - 1; a >= 0; a--)
              if (n[a] === t || n[a].listener === t) {
                (o = n[a].listener), (i = a);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? n.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(n, i),
              1 === n.length && (r[e] = n[0]),
              void 0 !== r.removeListener &&
                this.emit('removeListener', e, o || t);
          }
          return this;
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.removeAllListeners = function (e) {
          var t, n, r;
          if (void 0 === (n = this._events)) return this;
          if (void 0 === n.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== n[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete n[e]),
              this
            );
          if (0 === arguments.length) {
            var i,
              a = Object.keys(n);
            for (r = 0; r < a.length; ++r)
              'removeListener' !== (i = a[r]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners('removeListener'),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ('function' == typeof (t = n[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
          return this;
        }),
        (s.prototype.listeners = function (e) {
          return h(this, e, !0);
        }),
        (s.prototype.rawListeners = function (e) {
          return h(this, e, !1);
        }),
        (s.listenerCount = function (e, t) {
          return 'function' == typeof e.listenerCount
            ? e.listenerCount(t)
            : v.call(e, t);
        }),
        (s.prototype.listenerCount = v),
        (s.prototype.eventNames = function () {
          return this._eventsCount > 0 ? r(this._events) : [];
        });
    },
    function (e, t, n) {
      var r = n(98),
        i = n(101);
      e.exports = function (e, t) {
        var n = i(e, t);
        return r(n) ? n : void 0;
      };
    },
    function (e, t, n) {
      !(function (e) {
        'use strict';
        var t = 'function' == typeof Map,
          n = 'function' == typeof Set,
          r = 'function' == typeof WeakSet,
          i = Object.keys,
          a = function (e, t) {
            return e && 'object' == typeof e && t.add(e);
          },
          o = function (e, t, n, r) {
            for (var i, a = 0; a < e.length; a++)
              if (n((i = e[a])[0], t[0], r) && n(i[1], t[1], r)) return !0;
            return !1;
          },
          s = function (e, t, n, r) {
            for (var i = 0; i < e.length; i++) if (n(e[i], t, r)) return !0;
            return !1;
          },
          c = function (e, t) {
            return e === t || (e != e && t != t);
          },
          u = function (e) {
            return e.constructor === Object;
          },
          l = function (e) {
            return 'function' == typeof e.then;
          },
          d = function (e) {
            return !(!e.$$typeof || !e._store);
          },
          f = function (e) {
            return function (t) {
              var n = e || t;
              return function (e, t, i) {
                void 0 === i &&
                  (i = r
                    ? new WeakSet()
                    : Object.create({
                        _values: [],
                        add: function (e) {
                          this._values.push(e);
                        },
                        has: function (e) {
                          return !!~this._values.indexOf(e);
                        },
                      }));
                var o = i.has(e),
                  s = i.has(t);
                return o || s ? o && s : (a(e, i), a(t, i), n(e, t, i));
              };
            };
          },
          p = function (e) {
            var t = [];
            return (
              e.forEach(function (e, n) {
                return t.push([n, e]);
              }),
              t
            );
          },
          h = function (e) {
            var t = [];
            return (
              e.forEach(function (e) {
                return t.push(e);
              }),
              t
            );
          },
          v = function (e, t, n, r) {
            var a,
              o = i(e),
              u = i(t);
            if (o.length !== u.length) return !1;
            for (var l = 0; l < o.length; l++) {
              if (((a = o[l]), !s(u, a, c))) return !1;
              if (!(('_owner' === a && d(e) && d(t)) || n(e[a], t[a], r)))
                return !1;
            }
            return !0;
          },
          m = Array.isArray,
          g = function (e) {
            var r = 'function' == typeof e ? e(i) : i;
            function i(e, i, a) {
              if (c(e, i)) return !0;
              var d = typeof e;
              if (d !== typeof i || 'object' !== d || !e || !i) return !1;
              if (u(e) && u(i)) return v(e, i, r, a);
              var f = m(e),
                g = m(i);
              if (f || g)
                return (
                  f === g &&
                  (function (e, t, n, r) {
                    if (e.length !== t.length) return !1;
                    for (var i = 0; i < e.length; i++)
                      if (!n(e[i], t[i], r)) return !1;
                    return !0;
                  })(e, i, r, a)
                );
              var y = e instanceof Date,
                _ = i instanceof Date;
              if (y || _) return y === _ && c(e.getTime(), i.getTime());
              var b,
                w,
                k = e instanceof RegExp,
                M = i instanceof RegExp;
              if (k || M)
                return (
                  k === M &&
                  ((w = i),
                  (b = e).source === w.source &&
                    b.global === w.global &&
                    b.ignoreCase === w.ignoreCase &&
                    b.multiline === w.multiline &&
                    b.unicode === w.unicode &&
                    b.sticky === w.sticky &&
                    b.lastIndex === w.lastIndex)
                );
              if (l(e) || l(i)) return e === i;
              if (t) {
                var S = e instanceof Map,
                  T = i instanceof Map;
                if (S || T)
                  return (
                    S === T &&
                    (function (e, t, n, r) {
                      if (e.size !== t.size) return !1;
                      for (var i = p(e), a = p(t), s = 0; s < i.length; s++)
                        if (!o(a, i[s], n, r) || !o(i, a[s], n, r)) return !1;
                      return !0;
                    })(e, i, r, a)
                  );
              }
              if (n) {
                var E = e instanceof Set,
                  A = i instanceof Set;
                if (E || A)
                  return (
                    E === A &&
                    (function (e, t, n, r) {
                      if (e.size !== t.size) return !1;
                      for (var i = h(e), a = h(t), o = 0; o < i.length; o++)
                        if (!s(a, i[o], n, r) || !s(i, a[o], n, r)) return !1;
                      return !0;
                    })(e, i, r, a)
                  );
              }
              return v(e, i, r, a);
            }
            return i;
          },
          y = g(f()),
          _ = g(f(c)),
          b = g(),
          w = g(function () {
            return c;
          }),
          k = {
            circularDeep: y,
            circularShallow: _,
            createCustom: g,
            deep: b,
            sameValueZero: c,
            shallow: w,
          };
        (e.circularDeepEqual = y),
          (e.circularShallowEqual = _),
          (e.createCustomEqual = g),
          (e.deepEqual = b),
          (e.default = k),
          (e.sameValueZeroEqual = c),
          (e.shallowEqual = w),
          Object.defineProperty(e, '__esModule', { value: !0 });
      })(t);
    },
    function (e, t, n) {
      var r = n(16),
        i = n(76),
        a = n(77),
        o = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? '[object Undefined]'
            : '[object Null]'
          : o && o in Object(e)
          ? i(e)
          : a(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return null != e && 'object' == typeof e;
      };
    },
    function (e, t, n) {
      var r = n(8).Symbol;
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(88),
        i = n(89),
        a = n(90),
        o = n(91),
        s = n(92);
      function c(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = i),
        (c.prototype.get = a),
        (c.prototype.has = o),
        (c.prototype.set = s),
        (e.exports = c);
    },
    function (e, t, n) {
      var r = n(46);
      e.exports = function (e, t) {
        for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
        return -1;
      };
    },
    function (e, t, n) {
      var r = n(12)(Object, 'create');
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(110);
      e.exports = function (e, t) {
        var n = e.__data__;
        return r(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map;
      };
    },
    function (e, t, n) {
      var r = n(14),
        i = n(15);
      e.exports = function (e) {
        return 'symbol' == typeof e || (i(e) && '[object Symbol]' == r(e));
      };
    },
    function (e, t, n) {
      var r = n(21);
      e.exports = function (e) {
        if ('string' == typeof e || r(e)) return e;
        var t = e + '';
        return '0' == t && 1 / e == -1 / 0 ? '-0' : t;
      };
    },
    function (e, t, n) {
      var r = n(60),
        i = n(61),
        a = n(62),
        o = n(64);
      e.exports = function (e, t) {
        return r(e) || i(e, t) || a(e, t) || o();
      };
    },
    function (e, t) {
      function n(t, r) {
        return (
          (e.exports = n =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          n(t, r)
        );
      }
      e.exports = n;
    },
    function (e, t, n) {
      var r = n(73),
        i = n(81),
        a = n(27);
      e.exports = function (e) {
        return a(e) ? r(e) : i(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          'number' == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    function (e, t, n) {
      var r = n(43),
        i = n(26);
      e.exports = function (e) {
        return null != e && i(e.length) && !r(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ('object' == t || 'function' == t);
      };
    },
    function (e, t, n) {
      var r = n(12)(n(8), 'Map');
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(102),
        i = n(109),
        a = n(111),
        o = n(112),
        s = n(113);
      function c(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = i),
        (c.prototype.get = a),
        (c.prototype.has = o),
        (c.prototype.set = s),
        (e.exports = c);
    },
    function (e, t, n) {
      var r = n(7),
        i = n(21),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        o = /^\w*$/;
      e.exports = function (e, t) {
        if (r(e)) return !1;
        var n = typeof e;
        return (
          !(
            'number' != n &&
            'symbol' != n &&
            'boolean' != n &&
            null != e &&
            !i(e)
          ) ||
          o.test(e) ||
          !a.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    function (e, t, n) {
      var r = n(34),
        i = n(69),
        a = n(44),
        o = n(7);
      e.exports = function (e, t) {
        return (o(e) ? r : i)(e, a(t, 3));
      };
    },
    function (e, t, n) {
      var r = n(149),
        i = n(7);
      e.exports = function (e, t, n, a) {
        return null == e
          ? []
          : (i(t) || (t = null == t ? [] : [t]),
            i((n = a ? void 0 : n)) || (n = null == n ? [] : [n]),
            r(e, t, n));
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (
          var n = -1, r = null == e ? 0 : e.length, i = 0, a = [];
          ++n < r;

        ) {
          var o = e[n];
          t(o, n, e) && (a[i++] = o);
        }
        return a;
      };
    },
    function (e, t, n) {
      var r = n(70),
        i = n(85)(r);
      e.exports = i;
    },
    function (e, t, n) {
      var r = n(75),
        i = n(15),
        a = Object.prototype,
        o = a.hasOwnProperty,
        s = a.propertyIsEnumerable,
        c = r(
          (function () {
            return arguments;
          })()
        )
          ? r
          : function (e) {
              return i(e) && o.call(e, 'callee') && !s.call(e, 'callee');
            };
      e.exports = c;
    },
    function (e, t) {
      var n =
        'object' == typeof window &&
        window &&
        window.Object === Object &&
        window;
      e.exports = n;
    },
    function (e, t, n) {
      (function (e) {
        var r = n(8),
          i = n(78),
          a = t && !t.nodeType && t,
          o = a && 'object' == typeof e && e && !e.nodeType && e,
          s = o && o.exports === a ? r.Buffer : void 0,
          c = (s ? s.isBuffer : void 0) || i;
        e.exports = c;
      }.call(this, n(39)(e)));
    },
    function (e, t) {
      e.exports = function (e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function () {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get: function () {
                return e.l;
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get: function () {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function (e, t) {
      var n = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, t) {
        var r = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ('number' == r || ('symbol' != r && n.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
    },
    function (e, t, n) {
      var r = n(79),
        i = n(42),
        a = n(80),
        o = a && a.isTypedArray,
        s = o ? i(o) : r;
      e.exports = s;
    },
    function (e, t) {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    function (e, t, n) {
      var r = n(14),
        i = n(28);
      e.exports = function (e) {
        if (!i(e)) return !1;
        var t = r(e);
        return (
          '[object Function]' == t ||
          '[object GeneratorFunction]' == t ||
          '[object AsyncFunction]' == t ||
          '[object Proxy]' == t
        );
      };
    },
    function (e, t, n) {
      var r = n(86),
        i = n(136),
        a = n(55),
        o = n(7),
        s = n(146);
      e.exports = function (e) {
        return 'function' == typeof e
          ? e
          : null == e
          ? a
          : 'object' == typeof e
          ? o(e)
            ? i(e[0], e[1])
            : r(e)
          : s(e);
      };
    },
    function (e, t, n) {
      var r = n(17),
        i = n(93),
        a = n(94),
        o = n(95),
        s = n(96),
        c = n(97);
      function u(e) {
        var t = (this.__data__ = new r(e));
        this.size = t.size;
      }
      (u.prototype.clear = i),
        (u.prototype.delete = a),
        (u.prototype.get = o),
        (u.prototype.has = s),
        (u.prototype.set = c),
        (e.exports = u);
    },
    function (e, t) {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    function (e, t) {
      var n = Function.prototype.toString;
      e.exports = function (e) {
        if (null != e) {
          try {
            return n.call(e);
          } catch (e) {}
          try {
            return e + '';
          } catch (e) {}
        }
        return '';
      };
    },
    function (e, t, n) {
      var r = n(114),
        i = n(15);
      e.exports = function e(t, n, a, o, s) {
        return (
          t === n ||
          (null == t || null == n || (!i(t) && !i(n))
            ? t != t && n != n
            : r(t, n, a, o, e, s))
        );
      };
    },
    function (e, t, n) {
      var r = n(115),
        i = n(118),
        a = n(119);
      e.exports = function (e, t, n, o, s, c) {
        var u = 1 & n,
          l = e.length,
          d = t.length;
        if (l != d && !(u && d > l)) return !1;
        var f = c.get(e);
        if (f && c.get(t)) return f == t;
        var p = -1,
          h = !0,
          v = 2 & n ? new r() : void 0;
        for (c.set(e, t), c.set(t, e); ++p < l; ) {
          var m = e[p],
            g = t[p];
          if (o) var y = u ? o(g, m, p, t, e, c) : o(m, g, p, e, t, c);
          if (void 0 !== y) {
            if (y) continue;
            h = !1;
            break;
          }
          if (v) {
            if (
              !i(t, function (e, t) {
                if (!a(v, t) && (m === e || s(m, e, n, o, c))) return v.push(t);
              })
            ) {
              h = !1;
              break;
            }
          } else if (m !== g && !s(m, g, n, o, c)) {
            h = !1;
            break;
          }
        }
        return c.delete(e), c.delete(t), h;
      };
    },
    function (e, t, n) {
      var r = n(28);
      e.exports = function (e) {
        return e == e && !r(e);
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return function (n) {
          return null != n && n[e] === t && (void 0 !== t || e in Object(n));
        };
      };
    },
    function (e, t, n) {
      var r = n(53),
        i = n(22);
      e.exports = function (e, t) {
        for (var n = 0, a = (t = r(t, e)).length; null != e && n < a; )
          e = e[i(t[n++])];
        return n && n == a ? e : void 0;
      };
    },
    function (e, t, n) {
      var r = n(7),
        i = n(31),
        a = n(138),
        o = n(141);
      e.exports = function (e, t) {
        return r(e) ? e : i(e, t) ? [e] : a(o(e));
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r; )
          i[n] = t(e[n], n, e);
        return i;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return e;
      };
    },
    function (e, t, n) {
      var r = n(65);
      e.exports = function (e, t) {
        if (null == e) return {};
        var n,
          i,
          a = r(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (i = 0; i < o.length; i++)
            (n = o[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      };
    },
    function (e, t, n) {
      e.exports = (function (e) {
        var t = {};
        function n(r) {
          if (t[r]) return t[r].exports;
          var i = (t[r] = { i: r, l: !1, exports: {} });
          return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, r) {
            n.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: r });
          }),
          (n.r = function (e) {
            'undefined' != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
              Object.defineProperty(e, '__esModule', { value: !0 });
          }),
          (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (
              (n.r(r),
              Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
              2 & t && 'string' != typeof e)
            )
              for (var i in e)
                n.d(
                  r,
                  i,
                  function (t) {
                    return e[t];
                  }.bind(null, i)
                );
            return r;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, 'a', t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ''),
          n((n.s = 90))
        );
      })({
        17: function (e, t, n) {
          'use strict';
          (t.__esModule = !0), (t.default = void 0);
          var r = n(18),
            i = (function () {
              function e() {}
              return (
                (e.getFirstMatch = function (e, t) {
                  var n = t.match(e);
                  return (n && n.length > 0 && n[1]) || '';
                }),
                (e.getSecondMatch = function (e, t) {
                  var n = t.match(e);
                  return (n && n.length > 1 && n[2]) || '';
                }),
                (e.matchAndReturnConst = function (e, t, n) {
                  if (e.test(t)) return n;
                }),
                (e.getWindowsVersionName = function (e) {
                  switch (e) {
                    case 'NT':
                      return 'NT';
                    case 'XP':
                      return 'XP';
                    case 'NT 5.0':
                      return '2000';
                    case 'NT 5.1':
                      return 'XP';
                    case 'NT 5.2':
                      return '2003';
                    case 'NT 6.0':
                      return 'Vista';
                    case 'NT 6.1':
                      return '7';
                    case 'NT 6.2':
                      return '8';
                    case 'NT 6.3':
                      return '8.1';
                    case 'NT 10.0':
                      return '10';
                    default:
                      return;
                  }
                }),
                (e.getMacOSVersionName = function (e) {
                  var t = e
                    .split('.')
                    .splice(0, 2)
                    .map(function (e) {
                      return parseInt(e, 10) || 0;
                    });
                  if ((t.push(0), 10 === t[0]))
                    switch (t[1]) {
                      case 5:
                        return 'Leopard';
                      case 6:
                        return 'Snow Leopard';
                      case 7:
                        return 'Lion';
                      case 8:
                        return 'Mountain Lion';
                      case 9:
                        return 'Mavericks';
                      case 10:
                        return 'Yosemite';
                      case 11:
                        return 'El Capitan';
                      case 12:
                        return 'Sierra';
                      case 13:
                        return 'High Sierra';
                      case 14:
                        return 'Mojave';
                      case 15:
                        return 'Catalina';
                      default:
                        return;
                    }
                }),
                (e.getAndroidVersionName = function (e) {
                  var t = e
                    .split('.')
                    .splice(0, 2)
                    .map(function (e) {
                      return parseInt(e, 10) || 0;
                    });
                  if ((t.push(0), !(1 === t[0] && t[1] < 5)))
                    return 1 === t[0] && t[1] < 6
                      ? 'Cupcake'
                      : 1 === t[0] && t[1] >= 6
                      ? 'Donut'
                      : 2 === t[0] && t[1] < 2
                      ? 'Eclair'
                      : 2 === t[0] && 2 === t[1]
                      ? 'Froyo'
                      : 2 === t[0] && t[1] > 2
                      ? 'Gingerbread'
                      : 3 === t[0]
                      ? 'Honeycomb'
                      : 4 === t[0] && t[1] < 1
                      ? 'Ice Cream Sandwich'
                      : 4 === t[0] && t[1] < 4
                      ? 'Jelly Bean'
                      : 4 === t[0] && t[1] >= 4
                      ? 'KitKat'
                      : 5 === t[0]
                      ? 'Lollipop'
                      : 6 === t[0]
                      ? 'Marshmallow'
                      : 7 === t[0]
                      ? 'Nougat'
                      : 8 === t[0]
                      ? 'Oreo'
                      : 9 === t[0]
                      ? 'Pie'
                      : void 0;
                }),
                (e.getVersionPrecision = function (e) {
                  return e.split('.').length;
                }),
                (e.compareVersions = function (t, n, r) {
                  void 0 === r && (r = !1);
                  var i = e.getVersionPrecision(t),
                    a = e.getVersionPrecision(n),
                    o = Math.max(i, a),
                    s = 0,
                    c = e.map([t, n], function (t) {
                      var n = o - e.getVersionPrecision(t),
                        r = t + new Array(n + 1).join('.0');
                      return e
                        .map(r.split('.'), function (e) {
                          return new Array(20 - e.length).join('0') + e;
                        })
                        .reverse();
                    });
                  for (r && (s = o - Math.min(i, a)), o -= 1; o >= s; ) {
                    if (c[0][o] > c[1][o]) return 1;
                    if (c[0][o] === c[1][o]) {
                      if (o === s) return 0;
                      o -= 1;
                    } else if (c[0][o] < c[1][o]) return -1;
                  }
                }),
                (e.map = function (e, t) {
                  var n,
                    r = [];
                  if (Array.prototype.map)
                    return Array.prototype.map.call(e, t);
                  for (n = 0; n < e.length; n += 1) r.push(t(e[n]));
                  return r;
                }),
                (e.find = function (e, t) {
                  var n, r;
                  if (Array.prototype.find)
                    return Array.prototype.find.call(e, t);
                  for (n = 0, r = e.length; n < r; n += 1) {
                    var i = e[n];
                    if (t(i, n)) return i;
                  }
                }),
                (e.assign = function (e) {
                  for (
                    var t,
                      n,
                      r = e,
                      i = arguments.length,
                      a = new Array(i > 1 ? i - 1 : 0),
                      o = 1;
                    o < i;
                    o++
                  )
                    a[o - 1] = arguments[o];
                  if (Object.assign)
                    return Object.assign.apply(Object, [e].concat(a));
                  var s = function () {
                    var e = a[t];
                    'object' == typeof e &&
                      null !== e &&
                      Object.keys(e).forEach(function (t) {
                        r[t] = e[t];
                      });
                  };
                  for (t = 0, n = a.length; t < n; t += 1) s();
                  return e;
                }),
                (e.getBrowserAlias = function (e) {
                  return r.BROWSER_ALIASES_MAP[e];
                }),
                (e.getBrowserTypeByAlias = function (e) {
                  return r.BROWSER_MAP[e] || '';
                }),
                e
              );
            })();
          (t.default = i), (e.exports = t.default);
        },
        18: function (e, t, n) {
          'use strict';
          (t.__esModule = !0),
            (t.ENGINE_MAP =
              t.OS_MAP =
              t.PLATFORMS_MAP =
              t.BROWSER_MAP =
              t.BROWSER_ALIASES_MAP =
                void 0),
            (t.BROWSER_ALIASES_MAP = {
              'Amazon Silk': 'amazon_silk',
              'Android Browser': 'android',
              Bada: 'bada',
              BlackBerry: 'blackberry',
              Chrome: 'chrome',
              Chromium: 'chromium',
              Electron: 'electron',
              Epiphany: 'epiphany',
              Firefox: 'firefox',
              Focus: 'focus',
              Generic: 'generic',
              'Google Search': 'google_search',
              Googlebot: 'googlebot',
              'Internet Explorer': 'ie',
              'K-Meleon': 'k_meleon',
              Maxthon: 'maxthon',
              'Microsoft Edge': 'edge',
              'MZ Browser': 'mz',
              'NAVER Whale Browser': 'naver',
              Opera: 'opera',
              'Opera Coast': 'opera_coast',
              PhantomJS: 'phantomjs',
              Puffin: 'puffin',
              QupZilla: 'qupzilla',
              QQ: 'qq',
              QQLite: 'qqlite',
              Safari: 'safari',
              Sailfish: 'sailfish',
              'Samsung Internet for Android': 'samsung_internet',
              SeaMonkey: 'seamonkey',
              Sleipnir: 'sleipnir',
              Swing: 'swing',
              Tizen: 'tizen',
              'UC Browser': 'uc',
              Vivaldi: 'vivaldi',
              'WebOS Browser': 'webos',
              WeChat: 'wechat',
              'Yandex Browser': 'yandex',
              Roku: 'roku',
            }),
            (t.BROWSER_MAP = {
              amazon_silk: 'Amazon Silk',
              android: 'Android Browser',
              bada: 'Bada',
              blackberry: 'BlackBerry',
              chrome: 'Chrome',
              chromium: 'Chromium',
              electron: 'Electron',
              epiphany: 'Epiphany',
              firefox: 'Firefox',
              focus: 'Focus',
              generic: 'Generic',
              googlebot: 'Googlebot',
              google_search: 'Google Search',
              ie: 'Internet Explorer',
              k_meleon: 'K-Meleon',
              maxthon: 'Maxthon',
              edge: 'Microsoft Edge',
              mz: 'MZ Browser',
              naver: 'NAVER Whale Browser',
              opera: 'Opera',
              opera_coast: 'Opera Coast',
              phantomjs: 'PhantomJS',
              puffin: 'Puffin',
              qupzilla: 'QupZilla',
              qq: 'QQ Browser',
              qqlite: 'QQ Browser Lite',
              safari: 'Safari',
              sailfish: 'Sailfish',
              samsung_internet: 'Samsung Internet for Android',
              seamonkey: 'SeaMonkey',
              sleipnir: 'Sleipnir',
              swing: 'Swing',
              tizen: 'Tizen',
              uc: 'UC Browser',
              vivaldi: 'Vivaldi',
              webos: 'WebOS Browser',
              wechat: 'WeChat',
              yandex: 'Yandex Browser',
            }),
            (t.PLATFORMS_MAP = {
              tablet: 'tablet',
              mobile: 'mobile',
              desktop: 'desktop',
              tv: 'tv',
            }),
            (t.OS_MAP = {
              WindowsPhone: 'Windows Phone',
              Windows: 'Windows',
              MacOS: 'macOS',
              iOS: 'iOS',
              Android: 'Android',
              WebOS: 'WebOS',
              BlackBerry: 'BlackBerry',
              Bada: 'Bada',
              Tizen: 'Tizen',
              Linux: 'Linux',
              ChromeOS: 'Chrome OS',
              PlayStation4: 'PlayStation 4',
              Roku: 'Roku',
            }),
            (t.ENGINE_MAP = {
              EdgeHTML: 'EdgeHTML',
              Blink: 'Blink',
              Trident: 'Trident',
              Presto: 'Presto',
              Gecko: 'Gecko',
              WebKit: 'WebKit',
            });
        },
        90: function (e, t, n) {
          'use strict';
          (t.__esModule = !0), (t.default = void 0);
          var r,
            i = (r = n(91)) && r.__esModule ? r : { default: r },
            a = n(18);
          function o(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          var s = (function () {
            function e() {}
            var t, n;
            return (
              (e.getParser = function (e, t) {
                if ((void 0 === t && (t = !1), 'string' != typeof e))
                  throw new Error('UserAgent should be a string');
                return new i.default(e, t);
              }),
              (e.parse = function (e) {
                return new i.default(e).getResult();
              }),
              (t = e),
              (n = [
                {
                  key: 'BROWSER_MAP',
                  get: function () {
                    return a.BROWSER_MAP;
                  },
                },
                {
                  key: 'ENGINE_MAP',
                  get: function () {
                    return a.ENGINE_MAP;
                  },
                },
                {
                  key: 'OS_MAP',
                  get: function () {
                    return a.OS_MAP;
                  },
                },
                {
                  key: 'PLATFORMS_MAP',
                  get: function () {
                    return a.PLATFORMS_MAP;
                  },
                },
              ]) && o(t, n),
              e
            );
          })();
          (t.default = s), (e.exports = t.default);
        },
        91: function (e, t, n) {
          'use strict';
          (t.__esModule = !0), (t.default = void 0);
          var r = c(n(92)),
            i = c(n(93)),
            a = c(n(94)),
            o = c(n(95)),
            s = c(n(17));
          function c(e) {
            return e && e.__esModule ? e : { default: e };
          }
          var u = (function () {
            function e(e, t) {
              if ((void 0 === t && (t = !1), null == e || '' === e))
                throw new Error("UserAgent parameter can't be empty");
              (this._ua = e),
                (this.parsedResult = {}),
                !0 !== t && this.parse();
            }
            var t = e.prototype;
            return (
              (t.getUA = function () {
                return this._ua;
              }),
              (t.test = function (e) {
                return e.test(this._ua);
              }),
              (t.parseBrowser = function () {
                var e = this;
                this.parsedResult.browser = {};
                var t = s.default.find(r.default, function (t) {
                  if ('function' == typeof t.test) return t.test(e);
                  if (t.test instanceof Array)
                    return t.test.some(function (t) {
                      return e.test(t);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return (
                  t && (this.parsedResult.browser = t.describe(this.getUA())),
                  this.parsedResult.browser
                );
              }),
              (t.getBrowser = function () {
                return this.parsedResult.browser
                  ? this.parsedResult.browser
                  : this.parseBrowser();
              }),
              (t.getBrowserName = function (e) {
                return e
                  ? String(this.getBrowser().name).toLowerCase() || ''
                  : this.getBrowser().name || '';
              }),
              (t.getBrowserVersion = function () {
                return this.getBrowser().version;
              }),
              (t.getOS = function () {
                return this.parsedResult.os
                  ? this.parsedResult.os
                  : this.parseOS();
              }),
              (t.parseOS = function () {
                var e = this;
                this.parsedResult.os = {};
                var t = s.default.find(i.default, function (t) {
                  if ('function' == typeof t.test) return t.test(e);
                  if (t.test instanceof Array)
                    return t.test.some(function (t) {
                      return e.test(t);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return (
                  t && (this.parsedResult.os = t.describe(this.getUA())),
                  this.parsedResult.os
                );
              }),
              (t.getOSName = function (e) {
                var t = this.getOS().name;
                return e ? String(t).toLowerCase() || '' : t || '';
              }),
              (t.getOSVersion = function () {
                return this.getOS().version;
              }),
              (t.getPlatform = function () {
                return this.parsedResult.platform
                  ? this.parsedResult.platform
                  : this.parsePlatform();
              }),
              (t.getPlatformType = function (e) {
                void 0 === e && (e = !1);
                var t = this.getPlatform().type;
                return e ? String(t).toLowerCase() || '' : t || '';
              }),
              (t.parsePlatform = function () {
                var e = this;
                this.parsedResult.platform = {};
                var t = s.default.find(a.default, function (t) {
                  if ('function' == typeof t.test) return t.test(e);
                  if (t.test instanceof Array)
                    return t.test.some(function (t) {
                      return e.test(t);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return (
                  t && (this.parsedResult.platform = t.describe(this.getUA())),
                  this.parsedResult.platform
                );
              }),
              (t.getEngine = function () {
                return this.parsedResult.engine
                  ? this.parsedResult.engine
                  : this.parseEngine();
              }),
              (t.getEngineName = function (e) {
                return e
                  ? String(this.getEngine().name).toLowerCase() || ''
                  : this.getEngine().name || '';
              }),
              (t.parseEngine = function () {
                var e = this;
                this.parsedResult.engine = {};
                var t = s.default.find(o.default, function (t) {
                  if ('function' == typeof t.test) return t.test(e);
                  if (t.test instanceof Array)
                    return t.test.some(function (t) {
                      return e.test(t);
                    });
                  throw new Error("Browser's test function is not valid");
                });
                return (
                  t && (this.parsedResult.engine = t.describe(this.getUA())),
                  this.parsedResult.engine
                );
              }),
              (t.parse = function () {
                return (
                  this.parseBrowser(),
                  this.parseOS(),
                  this.parsePlatform(),
                  this.parseEngine(),
                  this
                );
              }),
              (t.getResult = function () {
                return s.default.assign({}, this.parsedResult);
              }),
              (t.satisfies = function (e) {
                var t = this,
                  n = {},
                  r = 0,
                  i = {},
                  a = 0;
                if (
                  (Object.keys(e).forEach(function (t) {
                    var o = e[t];
                    'string' == typeof o
                      ? ((i[t] = o), (a += 1))
                      : 'object' == typeof o && ((n[t] = o), (r += 1));
                  }),
                  r > 0)
                ) {
                  var o = Object.keys(n),
                    c = s.default.find(o, function (e) {
                      return t.isOS(e);
                    });
                  if (c) {
                    var u = this.satisfies(n[c]);
                    if (void 0 !== u) return u;
                  }
                  var l = s.default.find(o, function (e) {
                    return t.isPlatform(e);
                  });
                  if (l) {
                    var d = this.satisfies(n[l]);
                    if (void 0 !== d) return d;
                  }
                }
                if (a > 0) {
                  var f = Object.keys(i),
                    p = s.default.find(f, function (e) {
                      return t.isBrowser(e, !0);
                    });
                  if (void 0 !== p) return this.compareVersion(i[p]);
                }
              }),
              (t.isBrowser = function (e, t) {
                void 0 === t && (t = !1);
                var n = this.getBrowserName().toLowerCase(),
                  r = e.toLowerCase(),
                  i = s.default.getBrowserTypeByAlias(r);
                return t && i && (r = i.toLowerCase()), r === n;
              }),
              (t.compareVersion = function (e) {
                var t = [0],
                  n = e,
                  r = !1,
                  i = this.getBrowserVersion();
                if ('string' == typeof i)
                  return (
                    '>' === e[0] || '<' === e[0]
                      ? ((n = e.substr(1)),
                        '=' === e[1] ? ((r = !0), (n = e.substr(2))) : (t = []),
                        '>' === e[0] ? t.push(1) : t.push(-1))
                      : '=' === e[0]
                      ? (n = e.substr(1))
                      : '~' === e[0] && ((r = !0), (n = e.substr(1))),
                    t.indexOf(s.default.compareVersions(i, n, r)) > -1
                  );
              }),
              (t.isOS = function (e) {
                return this.getOSName(!0) === String(e).toLowerCase();
              }),
              (t.isPlatform = function (e) {
                return this.getPlatformType(!0) === String(e).toLowerCase();
              }),
              (t.isEngine = function (e) {
                return this.getEngineName(!0) === String(e).toLowerCase();
              }),
              (t.is = function (e) {
                return this.isBrowser(e) || this.isOS(e) || this.isPlatform(e);
              }),
              (t.some = function (e) {
                var t = this;
                return (
                  void 0 === e && (e = []),
                  e.some(function (e) {
                    return t.is(e);
                  })
                );
              }),
              e
            );
          })();
          (t.default = u), (e.exports = t.default);
        },
        92: function (e, t, n) {
          'use strict';
          (t.__esModule = !0), (t.default = void 0);
          var r,
            i = (r = n(17)) && r.__esModule ? r : { default: r },
            a = /version\/(\d+(\.?_?\d+)+)/i,
            o = [
              {
                test: [/googlebot/i],
                describe: function (e) {
                  var t = { name: 'Googlebot' },
                    n =
                      i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) ||
                      i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/opera/i],
                describe: function (e) {
                  var t = { name: 'Opera' },
                    n =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:opera)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/opr\/|opios/i],
                describe: function (e) {
                  var t = { name: 'Opera' },
                    n =
                      i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) ||
                      i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/SamsungBrowser/i],
                describe: function (e) {
                  var t = { name: 'Samsung Internet for Android' },
                    n =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/Whale/i],
                describe: function (e) {
                  var t = { name: 'NAVER Whale Browser' },
                    n =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:whale)[\s/](\d+(?:\.\d+)+)/i,
                        e
                      );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/MZBrowser/i],
                describe: function (e) {
                  var t = { name: 'MZ Browser' },
                    n =
                      i.default.getFirstMatch(
                        /(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/focus/i],
                describe: function (e) {
                  var t = { name: 'Focus' },
                    n =
                      i.default.getFirstMatch(
                        /(?:focus)[\s/](\d+(?:\.\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/swing/i],
                describe: function (e) {
                  var t = { name: 'Swing' },
                    n =
                      i.default.getFirstMatch(
                        /(?:swing)[\s/](\d+(?:\.\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/coast/i],
                describe: function (e) {
                  var t = { name: 'Opera Coast' },
                    n =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:coast)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/yabrowser/i],
                describe: function (e) {
                  var t = { name: 'Yandex Browser' },
                    n =
                      i.default.getFirstMatch(
                        /(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/ucbrowser/i],
                describe: function (e) {
                  var t = { name: 'UC Browser' },
                    n =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/Maxthon|mxios/i],
                describe: function (e) {
                  var t = { name: 'Maxthon' },
                    n =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/epiphany/i],
                describe: function (e) {
                  var t = { name: 'Epiphany' },
                    n =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/puffin/i],
                describe: function (e) {
                  var t = { name: 'Puffin' },
                    n =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/sleipnir/i],
                describe: function (e) {
                  var t = { name: 'Sleipnir' },
                    n =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/k-meleon/i],
                describe: function (e) {
                  var t = { name: 'K-Meleon' },
                    n =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/micromessenger/i],
                describe: function (e) {
                  var t = { name: 'WeChat' },
                    n =
                      i.default.getFirstMatch(
                        /(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/qqbrowser/i],
                describe: function (e) {
                  var t = {
                      name: /qqbrowserlite/i.test(e)
                        ? 'QQ Browser Lite'
                        : 'QQ Browser',
                    },
                    n =
                      i.default.getFirstMatch(
                        /(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/msie|trident/i],
                describe: function (e) {
                  var t = { name: 'Internet Explorer' },
                    n = i.default.getFirstMatch(
                      /(?:msie |rv:)(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/\sedg\//i],
                describe: function (e) {
                  var t = { name: 'Microsoft Edge' },
                    n = i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/edg([ea]|ios)/i],
                describe: function (e) {
                  var t = { name: 'Microsoft Edge' },
                    n = i.default.getSecondMatch(
                      /edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/vivaldi/i],
                describe: function (e) {
                  var t = { name: 'Vivaldi' },
                    n = i.default.getFirstMatch(
                      /vivaldi\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/seamonkey/i],
                describe: function (e) {
                  var t = { name: 'SeaMonkey' },
                    n = i.default.getFirstMatch(
                      /seamonkey\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/sailfish/i],
                describe: function (e) {
                  var t = { name: 'Sailfish' },
                    n = i.default.getFirstMatch(
                      /sailfish\s?browser\/(\d+(\.\d+)?)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/silk/i],
                describe: function (e) {
                  var t = { name: 'Amazon Silk' },
                    n = i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/phantom/i],
                describe: function (e) {
                  var t = { name: 'PhantomJS' },
                    n = i.default.getFirstMatch(
                      /phantomjs\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/slimerjs/i],
                describe: function (e) {
                  var t = { name: 'SlimerJS' },
                    n = i.default.getFirstMatch(
                      /slimerjs\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe: function (e) {
                  var t = { name: 'BlackBerry' },
                    n =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/(web|hpw)[o0]s/i],
                describe: function (e) {
                  var t = { name: 'WebOS Browser' },
                    n =
                      i.default.getFirstMatch(a, e) ||
                      i.default.getFirstMatch(
                        /w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,
                        e
                      );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/bada/i],
                describe: function (e) {
                  var t = { name: 'Bada' },
                    n = i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/tizen/i],
                describe: function (e) {
                  var t = { name: 'Tizen' },
                    n =
                      i.default.getFirstMatch(
                        /(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/qupzilla/i],
                describe: function (e) {
                  var t = { name: 'QupZilla' },
                    n =
                      i.default.getFirstMatch(
                        /(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/firefox|iceweasel|fxios/i],
                describe: function (e) {
                  var t = { name: 'Firefox' },
                    n = i.default.getFirstMatch(
                      /(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/electron/i],
                describe: function (e) {
                  var t = { name: 'Electron' },
                    n = i.default.getFirstMatch(
                      /(?:electron)\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/chromium/i],
                describe: function (e) {
                  var t = { name: 'Chromium' },
                    n =
                      i.default.getFirstMatch(
                        /(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,
                        e
                      ) || i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/chrome|crios|crmo/i],
                describe: function (e) {
                  var t = { name: 'Chrome' },
                    n = i.default.getFirstMatch(
                      /(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/GSA/i],
                describe: function (e) {
                  var t = { name: 'Google Search' },
                    n = i.default.getFirstMatch(
                      /(?:GSA)\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: function (e) {
                  var t = !e.test(/like android/i),
                    n = e.test(/android/i);
                  return t && n;
                },
                describe: function (e) {
                  var t = { name: 'Android Browser' },
                    n = i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/playstation 4/i],
                describe: function (e) {
                  var t = { name: 'PlayStation 4' },
                    n = i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/safari|applewebkit/i],
                describe: function (e) {
                  var t = { name: 'Safari' },
                    n = i.default.getFirstMatch(a, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/.*/i],
                describe: function (e) {
                  var t =
                    -1 !== e.search('\\(')
                      ? /^(.*)\/(.*)[ \t]\((.*)/
                      : /^(.*)\/(.*) /;
                  return {
                    name: i.default.getFirstMatch(t, e),
                    version: i.default.getSecondMatch(t, e),
                  };
                },
              },
            ];
          (t.default = o), (e.exports = t.default);
        },
        93: function (e, t, n) {
          'use strict';
          (t.__esModule = !0), (t.default = void 0);
          var r,
            i = (r = n(17)) && r.__esModule ? r : { default: r },
            a = n(18),
            o = [
              {
                test: [/Roku\/DVP/],
                describe: function (e) {
                  var t = i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                  return { name: a.OS_MAP.Roku, version: t };
                },
              },
              {
                test: [/windows phone/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                    /windows phone (?:os)?\s?(\d+(\.\d+)*)/i,
                    e
                  );
                  return { name: a.OS_MAP.WindowsPhone, version: t };
                },
              },
              {
                test: [/windows /i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                      /Windows ((NT|XP)( \d\d?.\d)?)/i,
                      e
                    ),
                    n = i.default.getWindowsVersionName(t);
                  return { name: a.OS_MAP.Windows, version: t, versionName: n };
                },
              },
              {
                test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
                describe: function (e) {
                  var t = i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                  return { name: a.OS_MAP.iOS, version: t };
                },
              },
              {
                test: [/macintosh/i],
                describe: function (e) {
                  var t = i.default
                      .getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e)
                      .replace(/[_\s]/g, '.'),
                    n = i.default.getMacOSVersionName(t),
                    r = { name: a.OS_MAP.MacOS, version: t };
                  return n && (r.versionName = n), r;
                },
              },
              {
                test: [/(ipod|iphone|ipad)/i],
                describe: function (e) {
                  var t = i.default
                    .getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e)
                    .replace(/[_\s]/g, '.');
                  return { name: a.OS_MAP.iOS, version: t };
                },
              },
              {
                test: function (e) {
                  var t = !e.test(/like android/i),
                    n = e.test(/android/i);
                  return t && n;
                },
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                      /android[\s/-](\d+(\.\d+)*)/i,
                      e
                    ),
                    n = i.default.getAndroidVersionName(t),
                    r = { name: a.OS_MAP.Android, version: t };
                  return n && (r.versionName = n), r;
                },
              },
              {
                test: [/(web|hpw)[o0]s/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                      /(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,
                      e
                    ),
                    n = { name: a.OS_MAP.WebOS };
                  return t && t.length && (n.version = t), n;
                },
              },
              {
                test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                describe: function (e) {
                  var t =
                    i.default.getFirstMatch(
                      /rim\stablet\sos\s(\d+(\.\d+)*)/i,
                      e
                    ) ||
                    i.default.getFirstMatch(
                      /blackberry\d+\/(\d+([_\s]\d+)*)/i,
                      e
                    ) ||
                    i.default.getFirstMatch(/\bbb(\d+)/i, e);
                  return { name: a.OS_MAP.BlackBerry, version: t };
                },
              },
              {
                test: [/bada/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                  return { name: a.OS_MAP.Bada, version: t };
                },
              },
              {
                test: [/tizen/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                    /tizen[/\s](\d+(\.\d+)*)/i,
                    e
                  );
                  return { name: a.OS_MAP.Tizen, version: t };
                },
              },
              {
                test: [/linux/i],
                describe: function () {
                  return { name: a.OS_MAP.Linux };
                },
              },
              {
                test: [/CrOS/],
                describe: function () {
                  return { name: a.OS_MAP.ChromeOS };
                },
              },
              {
                test: [/PlayStation 4/],
                describe: function (e) {
                  var t = i.default.getFirstMatch(
                    /PlayStation 4[/\s](\d+(\.\d+)*)/i,
                    e
                  );
                  return { name: a.OS_MAP.PlayStation4, version: t };
                },
              },
            ];
          (t.default = o), (e.exports = t.default);
        },
        94: function (e, t, n) {
          'use strict';
          (t.__esModule = !0), (t.default = void 0);
          var r,
            i = (r = n(17)) && r.__esModule ? r : { default: r },
            a = n(18),
            o = [
              {
                test: [/googlebot/i],
                describe: function () {
                  return { type: 'bot', vendor: 'Google' };
                },
              },
              {
                test: [/huawei/i],
                describe: function (e) {
                  var t = i.default.getFirstMatch(/(can-l01)/i, e) && 'Nova',
                    n = { type: a.PLATFORMS_MAP.mobile, vendor: 'Huawei' };
                  return t && (n.model = t), n;
                },
              },
              {
                test: [/nexus\s*(?:7|8|9|10).*/i],
                describe: function () {
                  return { type: a.PLATFORMS_MAP.tablet, vendor: 'Nexus' };
                },
              },
              {
                test: [/ipad/i],
                describe: function () {
                  return {
                    type: a.PLATFORMS_MAP.tablet,
                    vendor: 'Apple',
                    model: 'iPad',
                  };
                },
              },
              {
                test: [/Macintosh(.*?) FxiOS(.*?) Version\//],
                describe: function () {
                  return {
                    type: a.PLATFORMS_MAP.tablet,
                    vendor: 'Apple',
                    model: 'iPad',
                  };
                },
              },
              {
                test: [/kftt build/i],
                describe: function () {
                  return {
                    type: a.PLATFORMS_MAP.tablet,
                    vendor: 'Amazon',
                    model: 'Kindle Fire HD 7',
                  };
                },
              },
              {
                test: [/silk/i],
                describe: function () {
                  return { type: a.PLATFORMS_MAP.tablet, vendor: 'Amazon' };
                },
              },
              {
                test: [/tablet(?! pc)/i],
                describe: function () {
                  return { type: a.PLATFORMS_MAP.tablet };
                },
              },
              {
                test: function (e) {
                  var t = e.test(/ipod|iphone/i),
                    n = e.test(/like (ipod|iphone)/i);
                  return t && !n;
                },
                describe: function (e) {
                  var t = i.default.getFirstMatch(/(ipod|iphone)/i, e);
                  return {
                    type: a.PLATFORMS_MAP.mobile,
                    vendor: 'Apple',
                    model: t,
                  };
                },
              },
              {
                test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                describe: function () {
                  return { type: a.PLATFORMS_MAP.mobile, vendor: 'Nexus' };
                },
              },
              {
                test: [/[^-]mobi/i],
                describe: function () {
                  return { type: a.PLATFORMS_MAP.mobile };
                },
              },
              {
                test: function (e) {
                  return 'blackberry' === e.getBrowserName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.mobile, vendor: 'BlackBerry' };
                },
              },
              {
                test: function (e) {
                  return 'bada' === e.getBrowserName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.mobile };
                },
              },
              {
                test: function (e) {
                  return 'windows phone' === e.getBrowserName();
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.mobile, vendor: 'Microsoft' };
                },
              },
              {
                test: function (e) {
                  var t = Number(String(e.getOSVersion()).split('.')[0]);
                  return 'android' === e.getOSName(!0) && t >= 3;
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.tablet };
                },
              },
              {
                test: function (e) {
                  return 'android' === e.getOSName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.mobile };
                },
              },
              {
                test: function (e) {
                  return 'macos' === e.getOSName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.desktop, vendor: 'Apple' };
                },
              },
              {
                test: function (e) {
                  return 'windows' === e.getOSName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.desktop };
                },
              },
              {
                test: function (e) {
                  return 'linux' === e.getOSName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.desktop };
                },
              },
              {
                test: function (e) {
                  return 'playstation 4' === e.getOSName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.tv };
                },
              },
              {
                test: function (e) {
                  return 'roku' === e.getOSName(!0);
                },
                describe: function () {
                  return { type: a.PLATFORMS_MAP.tv };
                },
              },
            ];
          (t.default = o), (e.exports = t.default);
        },
        95: function (e, t, n) {
          'use strict';
          (t.__esModule = !0), (t.default = void 0);
          var r,
            i = (r = n(17)) && r.__esModule ? r : { default: r },
            a = n(18),
            o = [
              {
                test: function (e) {
                  return 'microsoft edge' === e.getBrowserName(!0);
                },
                describe: function (e) {
                  if (/\sedg\//i.test(e)) return { name: a.ENGINE_MAP.Blink };
                  var t = i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                  return { name: a.ENGINE_MAP.EdgeHTML, version: t };
                },
              },
              {
                test: [/trident/i],
                describe: function (e) {
                  var t = { name: a.ENGINE_MAP.Trident },
                    n = i.default.getFirstMatch(
                      /trident\/(\d+(\.?_?\d+)+)/i,
                      e
                    );
                  return n && (t.version = n), t;
                },
              },
              {
                test: function (e) {
                  return e.test(/presto/i);
                },
                describe: function (e) {
                  var t = { name: a.ENGINE_MAP.Presto },
                    n = i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: function (e) {
                  var t = e.test(/gecko/i),
                    n = e.test(/like gecko/i);
                  return t && !n;
                },
                describe: function (e) {
                  var t = { name: a.ENGINE_MAP.Gecko },
                    n = i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
              {
                test: [/(apple)?webkit\/537\.36/i],
                describe: function () {
                  return { name: a.ENGINE_MAP.Blink };
                },
              },
              {
                test: [/(apple)?webkit/i],
                describe: function (e) {
                  var t = { name: a.ENGINE_MAP.WebKit },
                    n = i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                  return n && (t.version = n), t;
                },
              },
            ];
          (t.default = o), (e.exports = t.default);
        },
      });
    },
    function (e, t, n) {
      var r = n(4),
        i = n(24),
        a = n(66),
        o = n(67);
      function s(t) {
        var n = 'function' == typeof Map ? new Map() : void 0;
        return (
          (e.exports = s =
            function (e) {
              if (null === e || !a(e)) return e;
              if ('function' != typeof e)
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              if (void 0 !== n) {
                if (n.has(e)) return n.get(e);
                n.set(e, t);
              }
              function t() {
                return o(e, arguments, r(this).constructor);
              }
              return (
                (t.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(t, e)
              );
            }),
          s(t)
        );
      }
      e.exports = s;
    },
    function (e, t, n) {
      var r = n(154);
      e.exports = r.default;
    },
    function (e, t) {
      e.exports = function (e) {
        if (Array.isArray(e)) return e;
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
          var n = [],
            r = !0,
            i = !1,
            a = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(r = (o = s.next()).done) &&
              (n.push(o.value), !t || n.length !== t);
              r = !0
            );
          } catch (e) {
            (i = !0), (a = e);
          } finally {
            try {
              r || null == s.return || s.return();
            } finally {
              if (i) throw a;
            }
          }
          return n;
        }
      };
    },
    function (e, t, n) {
      var r = n(63);
      e.exports = function (e, t) {
        if (e) {
          if ('string' == typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          );
        }
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      };
    },
    function (e, t) {
      e.exports = function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return -1 !== Function.toString.call(e).indexOf('[native code]');
      };
    },
    function (e, t, n) {
      var r = n(24),
        i = n(68);
      function a(t, n, o) {
        return (
          i()
            ? (e.exports = a = Reflect.construct)
            : (e.exports = a =
                function (e, t, n) {
                  var i = [null];
                  i.push.apply(i, t);
                  var a = new (Function.bind.apply(e, i))();
                  return n && r(a, n.prototype), a;
                }),
          a.apply(null, arguments)
        );
      }
      e.exports = a;
    },
    function (e, t) {
      e.exports = function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      };
    },
    function (e, t, n) {
      var r = n(35);
      e.exports = function (e, t) {
        var n = [];
        return (
          r(e, function (e, r, i) {
            t(e, r, i) && n.push(e);
          }),
          n
        );
      };
    },
    function (e, t, n) {
      var r = n(71),
        i = n(25);
      e.exports = function (e, t) {
        return e && r(e, t, i);
      };
    },
    function (e, t, n) {
      var r = n(72)();
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e) {
        return function (t, n, r) {
          for (var i = -1, a = Object(t), o = r(t), s = o.length; s--; ) {
            var c = o[e ? s : ++i];
            if (!1 === n(a[c], c, a)) break;
          }
          return t;
        };
      };
    },
    function (e, t, n) {
      var r = n(74),
        i = n(36),
        a = n(7),
        o = n(38),
        s = n(40),
        c = n(41),
        u = Object.prototype.hasOwnProperty;
      e.exports = function (e, t) {
        var n = a(e),
          l = !n && i(e),
          d = !n && !l && o(e),
          f = !n && !l && !d && c(e),
          p = n || l || d || f,
          h = p ? r(e.length, String) : [],
          v = h.length;
        for (var m in e)
          (!t && !u.call(e, m)) ||
            (p &&
              ('length' == m ||
                (d && ('offset' == m || 'parent' == m)) ||
                (f &&
                  ('buffer' == m || 'byteLength' == m || 'byteOffset' == m)) ||
                s(m, v))) ||
            h.push(m);
        return h;
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
        return r;
      };
    },
    function (e, t, n) {
      var r = n(14),
        i = n(15);
      e.exports = function (e) {
        return i(e) && '[object Arguments]' == r(e);
      };
    },
    function (e, t, n) {
      var r = n(16),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        s = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = a.call(e, s),
          n = e[s];
        try {
          e[s] = void 0;
          var r = !0;
        } catch (e) {}
        var i = o.call(e);
        return r && (t ? (e[s] = n) : delete e[s]), i;
      };
    },
    function (e, t) {
      var n = Object.prototype.toString;
      e.exports = function (e) {
        return n.call(e);
      };
    },
    function (e, t) {
      e.exports = function () {
        return !1;
      };
    },
    function (e, t, n) {
      var r = n(14),
        i = n(26),
        a = n(15),
        o = {};
      (o['[object Float32Array]'] =
        o['[object Float64Array]'] =
        o['[object Int8Array]'] =
        o['[object Int16Array]'] =
        o['[object Int32Array]'] =
        o['[object Uint8Array]'] =
        o['[object Uint8ClampedArray]'] =
        o['[object Uint16Array]'] =
        o['[object Uint32Array]'] =
          !0),
        (o['[object Arguments]'] =
          o['[object Array]'] =
          o['[object ArrayBuffer]'] =
          o['[object Boolean]'] =
          o['[object DataView]'] =
          o['[object Date]'] =
          o['[object Error]'] =
          o['[object Function]'] =
          o['[object Map]'] =
          o['[object Number]'] =
          o['[object Object]'] =
          o['[object RegExp]'] =
          o['[object Set]'] =
          o['[object String]'] =
          o['[object WeakMap]'] =
            !1),
        (e.exports = function (e) {
          return a(e) && i(e.length) && !!o[r(e)];
        });
    },
    function (e, t, n) {
      (function (e) {
        var r = n(37),
          i = t && !t.nodeType && t,
          a = i && 'object' == typeof e && e && !e.nodeType && e,
          o = a && a.exports === i && r.process,
          s = (function () {
            try {
              var e = a && a.require && a.require('util').types;
              return e || (o && o.binding && o.binding('util'));
            } catch (e) {}
          })();
        e.exports = s;
      }.call(this, n(39)(e)));
    },
    function (e, t, n) {
      var r = n(82),
        i = n(83),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!r(e)) return i(e);
        var t = [];
        for (var n in Object(e))
          a.call(e, n) && 'constructor' != n && t.push(n);
        return t;
      };
    },
    function (e, t) {
      var n = Object.prototype;
      e.exports = function (e) {
        var t = e && e.constructor;
        return e === (('function' == typeof t && t.prototype) || n);
      };
    },
    function (e, t, n) {
      var r = n(84)(Object.keys, Object);
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      };
    },
    function (e, t, n) {
      var r = n(27);
      e.exports = function (e, t) {
        return function (n, i) {
          if (null == n) return n;
          if (!r(n)) return e(n, i);
          for (
            var a = n.length, o = t ? a : -1, s = Object(n);
            (t ? o-- : ++o < a) && !1 !== i(s[o], o, s);

          );
          return n;
        };
      };
    },
    function (e, t, n) {
      var r = n(87),
        i = n(135),
        a = n(51);
      e.exports = function (e) {
        var t = i(e);
        return 1 == t.length && t[0][2]
          ? a(t[0][0], t[0][1])
          : function (n) {
              return n === e || r(n, e, t);
            };
      };
    },
    function (e, t, n) {
      var r = n(45),
        i = n(48);
      e.exports = function (e, t, n, a) {
        var o = n.length,
          s = o,
          c = !a;
        if (null == e) return !s;
        for (e = Object(e); o--; ) {
          var u = n[o];
          if (c && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
        }
        for (; ++o < s; ) {
          var l = (u = n[o])[0],
            d = e[l],
            f = u[1];
          if (c && u[2]) {
            if (void 0 === d && !(l in e)) return !1;
          } else {
            var p = new r();
            if (a) var h = a(d, f, l, e, t, p);
            if (!(void 0 === h ? i(f, d, 3, a, p) : h)) return !1;
          }
        }
        return !0;
      };
    },
    function (e, t) {
      e.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    function (e, t, n) {
      var r = n(18),
        i = Array.prototype.splice;
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, !0)
        );
      };
    },
    function (e, t, n) {
      var r = n(18);
      e.exports = function (e) {
        var t = this.__data__,
          n = r(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
    },
    function (e, t, n) {
      var r = n(18);
      e.exports = function (e) {
        return r(this.__data__, e) > -1;
      };
    },
    function (e, t, n) {
      var r = n(18);
      e.exports = function (e, t) {
        var n = this.__data__,
          i = r(n, e);
        return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
      };
    },
    function (e, t, n) {
      var r = n(17);
      e.exports = function () {
        (this.__data__ = new r()), (this.size = 0);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.get(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    function (e, t, n) {
      var r = n(17),
        i = n(29),
        a = n(30);
      e.exports = function (e, t) {
        var n = this.__data__;
        if (n instanceof r) {
          var o = n.__data__;
          if (!i || o.length < 199)
            return o.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new a(o);
        }
        return n.set(e, t), (this.size = n.size), this;
      };
    },
    function (e, t, n) {
      var r = n(43),
        i = n(99),
        a = n(28),
        o = n(47),
        s = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        u = Object.prototype,
        l = c.toString,
        d = u.hasOwnProperty,
        f = RegExp(
          '^' +
            l
              .call(d)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                '$1.*?'
              ) +
            '$'
        );
      e.exports = function (e) {
        return !(!a(e) || i(e)) && (r(e) ? f : s).test(o(e));
      };
    },
    function (e, t, n) {
      var r,
        i = n(100),
        a = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ''))
          ? 'Symbol(src)_1.' + r
          : '';
      e.exports = function (e) {
        return !!a && a in e;
      };
    },
    function (e, t, n) {
      var r = n(8)['__core-js_shared__'];
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    function (e, t, n) {
      var r = n(103),
        i = n(17),
        a = n(29);
      e.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new r(),
            map: new (a || i)(),
            string: new r(),
          });
      };
    },
    function (e, t, n) {
      var r = n(104),
        i = n(105),
        a = n(106),
        o = n(107),
        s = n(108);
      function c(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      (c.prototype.clear = r),
        (c.prototype.delete = i),
        (c.prototype.get = a),
        (c.prototype.has = o),
        (c.prototype.set = s),
        (e.exports = c);
    },
    function (e, t, n) {
      var r = n(19);
      e.exports = function () {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    function (e, t, n) {
      var r = n(19),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        if (r) {
          var n = t[e];
          return '__lodash_hash_undefined__' === n ? void 0 : n;
        }
        return i.call(t, e) ? t[e] : void 0;
      };
    },
    function (e, t, n) {
      var r = n(19),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : i.call(t, e);
      };
    },
    function (e, t, n) {
      var r = n(19);
      e.exports = function (e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = r && void 0 === t ? '__lodash_hash_undefined__' : t),
          this
        );
      };
    },
    function (e, t, n) {
      var r = n(20);
      e.exports = function (e) {
        var t = r(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = typeof e;
        return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t
          ? '__proto__' !== e
          : null === e;
      };
    },
    function (e, t, n) {
      var r = n(20);
      e.exports = function (e) {
        return r(this, e).get(e);
      };
    },
    function (e, t, n) {
      var r = n(20);
      e.exports = function (e) {
        return r(this, e).has(e);
      };
    },
    function (e, t, n) {
      var r = n(20);
      e.exports = function (e, t) {
        var n = r(this, e),
          i = n.size;
        return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
      };
    },
    function (e, t, n) {
      var r = n(45),
        i = n(49),
        a = n(120),
        o = n(124),
        s = n(130),
        c = n(7),
        u = n(38),
        l = n(41),
        d = '[object Object]',
        f = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, p, h, v) {
        var m = c(e),
          g = c(t),
          y = m ? '[object Array]' : s(e),
          _ = g ? '[object Array]' : s(t),
          b = (y = '[object Arguments]' == y ? d : y) == d,
          w = (_ = '[object Arguments]' == _ ? d : _) == d,
          k = y == _;
        if (k && u(e)) {
          if (!u(t)) return !1;
          (m = !0), (b = !1);
        }
        if (k && !b)
          return (
            v || (v = new r()),
            m || l(e) ? i(e, t, n, p, h, v) : a(e, t, y, n, p, h, v)
          );
        if (!(1 & n)) {
          var M = b && f.call(e, '__wrapped__'),
            S = w && f.call(t, '__wrapped__');
          if (M || S) {
            var T = M ? e.value() : e,
              E = S ? t.value() : t;
            return v || (v = new r()), h(T, E, n, p, v);
          }
        }
        return !!k && (v || (v = new r()), o(e, t, n, p, h, v));
      };
    },
    function (e, t, n) {
      var r = n(30),
        i = n(116),
        a = n(117);
      function o(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
      }
      (o.prototype.add = o.prototype.push = i),
        (o.prototype.has = a),
        (e.exports = o);
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.set(e, '__lodash_hash_undefined__'), this;
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0;
        return !1;
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return e.has(t);
      };
    },
    function (e, t, n) {
      var r = n(16),
        i = n(121),
        a = n(46),
        o = n(49),
        s = n(122),
        c = n(123),
        u = r ? r.prototype : void 0,
        l = u ? u.valueOf : void 0;
      e.exports = function (e, t, n, r, u, d, f) {
        switch (n) {
          case '[object DataView]':
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            (e = e.buffer), (t = t.buffer);
          case '[object ArrayBuffer]':
            return !(e.byteLength != t.byteLength || !d(new i(e), new i(t)));
          case '[object Boolean]':
          case '[object Date]':
          case '[object Number]':
            return a(+e, +t);
          case '[object Error]':
            return e.name == t.name && e.message == t.message;
          case '[object RegExp]':
          case '[object String]':
            return e == t + '';
          case '[object Map]':
            var p = s;
          case '[object Set]':
            var h = 1 & r;
            if ((p || (p = c), e.size != t.size && !h)) return !1;
            var v = f.get(e);
            if (v) return v == t;
            (r |= 2), f.set(e, t);
            var m = o(p(e), p(t), r, u, d, f);
            return f.delete(e), m;
          case '[object Symbol]':
            if (l) return l.call(e) == l.call(t);
        }
        return !1;
      };
    },
    function (e, t, n) {
      var r = n(8).Uint8Array;
      e.exports = r;
    },
    function (e, t) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      };
    },
    function (e, t) {
      e.exports = function (e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      };
    },
    function (e, t, n) {
      var r = n(125),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n, a, o, s) {
        var c = 1 & n,
          u = r(e),
          l = u.length;
        if (l != r(t).length && !c) return !1;
        for (var d = l; d--; ) {
          var f = u[d];
          if (!(c ? f in t : i.call(t, f))) return !1;
        }
        var p = s.get(e);
        if (p && s.get(t)) return p == t;
        var h = !0;
        s.set(e, t), s.set(t, e);
        for (var v = c; ++d < l; ) {
          var m = e[(f = u[d])],
            g = t[f];
          if (a) var y = c ? a(g, m, f, t, e, s) : a(m, g, f, e, t, s);
          if (!(void 0 === y ? m === g || o(m, g, n, a, s) : y)) {
            h = !1;
            break;
          }
          v || (v = 'constructor' == f);
        }
        if (h && !v) {
          var _ = e.constructor,
            b = t.constructor;
          _ != b &&
            'constructor' in e &&
            'constructor' in t &&
            !(
              'function' == typeof _ &&
              _ instanceof _ &&
              'function' == typeof b &&
              b instanceof b
            ) &&
            (h = !1);
        }
        return s.delete(e), s.delete(t), h;
      };
    },
    function (e, t, n) {
      var r = n(126),
        i = n(128),
        a = n(25);
      e.exports = function (e) {
        return r(e, a, i);
      };
    },
    function (e, t, n) {
      var r = n(127),
        i = n(7);
      e.exports = function (e, t, n) {
        var a = t(e);
        return i(e) ? a : r(a, n(e));
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
        return e;
      };
    },
    function (e, t, n) {
      var r = n(34),
        i = n(129),
        a = Object.prototype.propertyIsEnumerable,
        o = Object.getOwnPropertySymbols,
        s = o
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  r(o(e), function (t) {
                    return a.call(e, t);
                  }));
            }
          : i;
      e.exports = s;
    },
    function (e, t) {
      e.exports = function () {
        return [];
      };
    },
    function (e, t, n) {
      var r = n(131),
        i = n(29),
        a = n(132),
        o = n(133),
        s = n(134),
        c = n(14),
        u = n(47),
        l = u(r),
        d = u(i),
        f = u(a),
        p = u(o),
        h = u(s),
        v = c;
      ((r && '[object DataView]' != v(new r(new ArrayBuffer(1)))) ||
        (i && '[object Map]' != v(new i())) ||
        (a && '[object Promise]' != v(a.resolve())) ||
        (o && '[object Set]' != v(new o())) ||
        (s && '[object WeakMap]' != v(new s()))) &&
        (v = function (e) {
          var t = c(e),
            n = '[object Object]' == t ? e.constructor : void 0,
            r = n ? u(n) : '';
          if (r)
            switch (r) {
              case l:
                return '[object DataView]';
              case d:
                return '[object Map]';
              case f:
                return '[object Promise]';
              case p:
                return '[object Set]';
              case h:
                return '[object WeakMap]';
            }
          return t;
        }),
        (e.exports = v);
    },
    function (e, t, n) {
      var r = n(12)(n(8), 'DataView');
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(12)(n(8), 'Promise');
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(12)(n(8), 'Set');
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(12)(n(8), 'WeakMap');
      e.exports = r;
    },
    function (e, t, n) {
      var r = n(50),
        i = n(25);
      e.exports = function (e) {
        for (var t = i(e), n = t.length; n--; ) {
          var a = t[n],
            o = e[a];
          t[n] = [a, o, r(o)];
        }
        return t;
      };
    },
    function (e, t, n) {
      var r = n(48),
        i = n(137),
        a = n(143),
        o = n(31),
        s = n(50),
        c = n(51),
        u = n(22);
      e.exports = function (e, t) {
        return o(e) && s(t)
          ? c(u(e), t)
          : function (n) {
              var o = i(n, e);
              return void 0 === o && o === t ? a(n, e) : r(t, o, 3);
            };
      };
    },
    function (e, t, n) {
      var r = n(52);
      e.exports = function (e, t, n) {
        var i = null == e ? void 0 : r(e, t);
        return void 0 === i ? n : i;
      };
    },
    function (e, t, n) {
      var r = n(139),
        i =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        o = r(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(''),
            e.replace(i, function (e, n, r, i) {
              t.push(r ? i.replace(a, '$1') : n || e);
            }),
            t
          );
        });
      e.exports = o;
    },
    function (e, t, n) {
      var r = n(140);
      e.exports = function (e) {
        var t = r(e, function (e) {
            return 500 === n.size && n.clear(), e;
          }),
          n = t.cache;
        return t;
      };
    },
    function (e, t, n) {
      var r = n(30);
      function i(e, t) {
        if ('function' != typeof e || (null != t && 'function' != typeof t))
          throw new TypeError('Expected a function');
        var n = function () {
          var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            a = n.cache;
          if (a.has(i)) return a.get(i);
          var o = e.apply(this, r);
          return (n.cache = a.set(i, o) || a), o;
        };
        return (n.cache = new (i.Cache || r)()), n;
      }
      (i.Cache = r), (e.exports = i);
    },
    function (e, t, n) {
      var r = n(142);
      e.exports = function (e) {
        return null == e ? '' : r(e);
      };
    },
    function (e, t, n) {
      var r = n(16),
        i = n(54),
        a = n(7),
        o = n(21),
        s = r ? r.prototype : void 0,
        c = s ? s.toString : void 0;
      e.exports = function e(t) {
        if ('string' == typeof t) return t;
        if (a(t)) return i(t, e) + '';
        if (o(t)) return c ? c.call(t) : '';
        var n = t + '';
        return '0' == n && 1 / t == -1 / 0 ? '-0' : n;
      };
    },
    function (e, t, n) {
      var r = n(144),
        i = n(145);
      e.exports = function (e, t) {
        return null != e && i(e, t, r);
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        return null != e && t in Object(e);
      };
    },
    function (e, t, n) {
      var r = n(53),
        i = n(36),
        a = n(7),
        o = n(40),
        s = n(26),
        c = n(22);
      e.exports = function (e, t, n) {
        for (var u = -1, l = (t = r(t, e)).length, d = !1; ++u < l; ) {
          var f = c(t[u]);
          if (!(d = null != e && n(e, f))) break;
          e = e[f];
        }
        return d || ++u != l
          ? d
          : !!(l = null == e ? 0 : e.length) &&
              s(l) &&
              o(f, l) &&
              (a(e) || i(e));
      };
    },
    function (e, t, n) {
      var r = n(147),
        i = n(148),
        a = n(31),
        o = n(22);
      e.exports = function (e) {
        return a(e) ? r(o(e)) : i(e);
      };
    },
    function (e, t) {
      e.exports = function (e) {
        return function (t) {
          return null == t ? void 0 : t[e];
        };
      };
    },
    function (e, t, n) {
      var r = n(52);
      e.exports = function (e) {
        return function (t) {
          return r(t, e);
        };
      };
    },
    function (e, t, n) {
      var r = n(54),
        i = n(44),
        a = n(150),
        o = n(151),
        s = n(42),
        c = n(152),
        u = n(55);
      e.exports = function (e, t, n) {
        var l = -1;
        t = r(t.length ? t : [u], s(i));
        var d = a(e, function (e, n, i) {
          return {
            criteria: r(t, function (t) {
              return t(e);
            }),
            index: ++l,
            value: e,
          };
        });
        return o(d, function (e, t) {
          return c(e, t, n);
        });
      };
    },
    function (e, t, n) {
      var r = n(35),
        i = n(27);
      e.exports = function (e, t) {
        var n = -1,
          a = i(e) ? Array(e.length) : [];
        return (
          r(e, function (e, r, i) {
            a[++n] = t(e, r, i);
          }),
          a
        );
      };
    },
    function (e, t) {
      e.exports = function (e, t) {
        var n = e.length;
        for (e.sort(t); n--; ) e[n] = e[n].value;
        return e;
      };
    },
    function (e, t, n) {
      var r = n(153);
      e.exports = function (e, t, n) {
        for (
          var i = -1,
            a = e.criteria,
            o = t.criteria,
            s = a.length,
            c = n.length;
          ++i < s;

        ) {
          var u = r(a[i], o[i]);
          if (u) return i >= c ? u : u * ('desc' == n[i] ? -1 : 1);
        }
        return e.index - t.index;
      };
    },
    function (e, t, n) {
      var r = n(21);
      e.exports = function (e, t) {
        if (e !== t) {
          var n = void 0 !== e,
            i = null === e,
            a = e == e,
            o = r(e),
            s = void 0 !== t,
            c = null === t,
            u = t == t,
            l = r(t);
          if (
            (!c && !l && !o && e > t) ||
            (o && s && u && !c && !l) ||
            (i && s && u) ||
            (!n && u) ||
            !a
          )
            return 1;
          if (
            (!i && !o && !l && e < t) ||
            (l && n && a && !i && !o) ||
            (c && n && a) ||
            (!s && a) ||
            !u
          )
            return -1;
        }
        return 0;
      };
    },
    function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(23),
        i = n.n(r),
        a = n(56),
        o = n.n(a),
        s = n(0),
        c = n.n(s),
        u = n(2),
        l = n.n(u),
        d = n(6),
        f = n.n(d),
        p = n(3),
        h = n.n(p),
        v = n(9),
        m = n.n(v),
        g = n(10),
        y = n.n(g),
        _ = n(4),
        b = n.n(_),
        w = n(5),
        k = n.n(w),
        M = n(1),
        S = n.n(M),
        T = n(11),
        E = n.n(T),
        A = n(13),
        O = n(57),
        C = n.n(O),
        P = 'new',
        j = 'loading',
        L = 'joining-meeting',
        I = 'joined-meeting',
        x = 'left-meeting',
        D = 'error',
        N = {
          NONE: 'none',
          BGBLUR: 'background-blur',
          BGIMAGE: 'background-image',
        },
        R = { PLAY: 'play', PAUSE: 'pause' },
        F = 'playing',
        B = 'paused',
        V = ['jpg', 'png', 'jpeg'],
        U = 'add-endpoints',
        Y = 'remove-endpoints';
      function W() {
        return !q() &&
          'undefined' != typeof window &&
          window.navigator &&
          window.navigator.userAgent
          ? window.navigator.userAgent
          : '';
      }
      function q() {
        return (
          'undefined' != typeof navigator &&
          navigator.product &&
          'ReactNative' === navigator.product
        );
      }
      function G() {
        return (
          navigator &&
          navigator.mediaDevices &&
          navigator.mediaDevices.getUserMedia
        );
      }
      function J() {
        return (
          !!(
            navigator &&
            navigator.mediaDevices &&
            navigator.mediaDevices.getDisplayMedia
          ) &&
          (function (e, t) {
            if (!e || !t) return !0;
            switch (e) {
              case 'Chrome':
                return t.major >= 75;
              case 'Safari':
                return (
                  RTCRtpTransceiver.prototype.hasOwnProperty(
                    'currentDirection'
                  ) && !(13 === t.major && 0 === t.minor && 0 === t.point)
                );
              case 'Firefox':
                return t.major >= 67;
            }
            return !0;
          })(
            Z(),
            (function () {
              switch (Z()) {
                case 'Chrome':
                  return X();
                case 'Safari':
                  return te();
                case 'Firefox':
                  return ne();
                case 'Edge':
                  return (function () {
                    var e = 0,
                      t = 0;
                    if ('undefined' != typeof window) {
                      var n = W().match(/Edge\/(\d+).(\d+)/);
                      if (n)
                        try {
                          (e = parseInt(n[1])), (t = parseInt(n[2]));
                        } catch (e) {}
                    }
                    return { major: e, minor: t };
                  })();
              }
            })()
          )
        );
      }
      function z() {
        if (q()) return !1;
        if (!document) return !1;
        var e = document.createElement('iframe');
        return !!e.requestFullscreen || !!e.webkitRequestFullscreen;
      }
      var K = ['Chrome', 'Firefox'];
      function H() {
        return (
          !q() &&
          !(function () {
            var e = W();
            if (e.match(/Mobi/) || e.match(/Android/)) return !0;
            if (W().match(/DailyAnd\//)) return !0;
          })() &&
          K.includes(Z())
        );
      }
      function Q() {
        return !!q() || $();
      }
      function $() {
        return (
          G() &&
          !(function () {
            var e,
              t = Z();
            if (!W()) return !0;
            switch (t) {
              case 'Chrome':
                return (e = X()).major && e.major > 0 && e.major < 61;
              case 'Firefox':
                return (e = ne()).major < 78;
              case 'Safari':
                return (e = te()).major < 12;
              default:
                return !0;
            }
          })()
        );
      }
      function Z() {
        if ('undefined' != typeof window) {
          var e = W();
          return ee()
            ? 'Safari'
            : e.indexOf('Edge') > -1
            ? 'Edge'
            : e.match(/Chrome\//)
            ? 'Chrome'
            : e.indexOf('Safari') > -1
            ? 'Safari'
            : e.indexOf('Firefox') > -1
            ? 'Firefox'
            : e.indexOf('MSIE') > -1 || e.indexOf('.NET') > -1
            ? 'IE'
            : 'Unknown Browser';
        }
      }
      function X() {
        var e = 0,
          t = 0,
          n = 0,
          r = 0,
          i = !1;
        if ('undefined' != typeof window) {
          var a = W(),
            o = a.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
          if (o)
            try {
              (e = parseInt(o[1])),
                (t = parseInt(o[2])),
                (n = parseInt(o[3])),
                (r = parseInt(o[4])),
                (i = a.indexOf('OPR/') > -1);
            } catch (e) {}
        }
        return { major: e, minor: t, build: n, patch: r, opera: i };
      }
      function ee() {
        return !!W().match(/iPad|iPhone|iPod/i) && G();
      }
      function te() {
        var e = 0,
          t = 0,
          n = 0;
        if ('undefined' != typeof window) {
          var r = W().match(/Version\/(\d+).(\d+)(.(\d+))?/);
          if (r)
            try {
              (e = parseInt(r[1])), (t = parseInt(r[2])), (n = parseInt(r[4]));
            } catch (e) {}
          else ee() && ((e = 14), (t = 0), (n = 3));
        }
        return { major: e, minor: t, point: n };
      }
      function ne() {
        var e = 0,
          t = 0;
        if ('undefined' != typeof window) {
          var n = W().match(/Firefox\/(\d+).(\d+)/);
          if (n)
            try {
              (e = parseInt(n[1])), (t = parseInt(n[2]));
            } catch (e) {}
        }
        return { major: e, minor: t };
      }
      function re() {
        return Date.now() + Math.random().toString();
      }
      function ie() {
        throw new Error('Method must be implemented in subclass');
      }
      function ae(e) {
        if (
          window._dailyConfig &&
          window._dailyConfig.callObjectBundleUrlOverride
        )
          return window._dailyConfig.callObjectBundleUrlOverride;
        var t = e ? new URL(e).origin : null;
        function n(e) {
          return ''
            .concat(e, '/static/call-machine-object')
            .concat(Q() ? '' : '-nosfu', '-bundle.js');
        }
        function r() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.isStaging,
            r = void 0 !== t && t,
            i = 'https://c'.concat(r ? '.staging' : '', '.daily.co');
          return n(i);
        }
        return t
          ? t.match(/https:\/\/[^.]+\.daily\.co/)
            ? r()
            : t.match(/https:\/\/preview-[^.]+\.staging\.daily\.co/)
            ? n(t)
            : t.match(/https:\/\/[^.]+\.staging\.daily\.co/)
            ? r({ isStaging: !0 })
            : n(t)
          : r();
      }
      function oe(e) {
        try {
          new URL(e);
        } catch (e) {
          return !1;
        }
        return !0;
      }
      var se = (function () {
        function e() {
          l()(this, e);
        }
        return (
          h()(e, [
            {
              key: 'addListenerForMessagesFromCallMachine',
              value: function (e, t, n) {
                ie();
              },
            },
            {
              key: 'addListenerForMessagesFromDailyJs',
              value: function (e, t, n) {
                ie();
              },
            },
            {
              key: 'sendMessageToCallMachine',
              value: function (e, t, n, r) {
                ie();
              },
            },
            {
              key: 'sendMessageToDailyJs',
              value: function (e, t, n) {
                ie();
              },
            },
            {
              key: 'removeListener',
              value: function (e) {
                ie();
              },
            },
          ]),
          e
        );
      })();
      function ce(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ce(Object(n), !0).forEach(function (t) {
                k()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ce(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function le(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b()(e);
          if (t) {
            var i = b()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return y()(this, n);
        };
      }
      var de = (function (e) {
        m()(n, e);
        var t = le(n);
        function n() {
          var e;
          return (
            l()(this, n),
            ((e = t.call(this))._wrappedListeners = {}),
            (e._messageCallbacks = {}),
            e
          );
        }
        return (
          h()(n, [
            {
              key: 'addListenerForMessagesFromCallMachine',
              value: function (e, t, n) {
                var r = this,
                  i = function (i) {
                    if (
                      i.data &&
                      'iframe-call-message' === i.data.what &&
                      (!i.data.callFrameId || i.data.callFrameId === t) &&
                      (!i.data.from || 'module' !== i.data.from)
                    ) {
                      var a = ue({}, i.data);
                      if (
                        (delete a.from,
                        a.callbackStamp && r._messageCallbacks[a.callbackStamp])
                      ) {
                        var o = a.callbackStamp;
                        r._messageCallbacks[o].call(n, a),
                          delete r._messageCallbacks[o];
                      }
                      delete a.what, delete a.callbackStamp, e.call(n, a);
                    }
                  };
                (this._wrappedListeners[e] = i),
                  window.addEventListener('message', i);
              },
            },
            {
              key: 'addListenerForMessagesFromDailyJs',
              value: function (e, t, n) {
                var r = function (r) {
                  if (
                    !(
                      !r.data ||
                      'iframe-call-message' !== r.data.what ||
                      !r.data.action ||
                      (r.data.from && 'module' !== r.data.from) ||
                      (r.data.callFrameId && t && r.data.callFrameId !== t)
                    )
                  ) {
                    var i = r.data;
                    e.call(n, i);
                  }
                };
                (this._wrappedListeners[e] = r),
                  window.addEventListener('message', r);
              },
            },
            {
              key: 'sendMessageToCallMachine',
              value: function (e, t, n, r) {
                var i = ue({}, e);
                if (
                  ((i.what = 'iframe-call-message'),
                  (i.from = 'module'),
                  (i.callFrameId = r),
                  t)
                ) {
                  var a = re();
                  (this._messageCallbacks[a] = t), (i.callbackStamp = a);
                }
                (n ? n.contentWindow : window).postMessage(i, '*');
              },
            },
            {
              key: 'sendMessageToDailyJs',
              value: function (e, t, n) {
                (e.what = 'iframe-call-message'),
                  (e.callFrameId = n),
                  (e.from = 'embedded'),
                  (t ? window : window.parent).postMessage(e, '*');
              },
            },
            {
              key: 'removeListener',
              value: function (e) {
                var t = this._wrappedListeners[e];
                t &&
                  (window.removeEventListener('message', t),
                  delete this._wrappedListeners[e]);
              },
            },
            {
              key: 'forwardPackagedMessageToCallMachine',
              value: function (e, t, n) {
                var r = ue({}, e);
                (r.callFrameId = n),
                  (t ? t.contentWindow : window).postMessage(r, '*');
              },
            },
            {
              key: 'addListenerForPackagedMessagesFromCallMachine',
              value: function (e, t) {
                var n = function (n) {
                  if (
                    n.data &&
                    'iframe-call-message' === n.data.what &&
                    (!n.data.callFrameId || n.data.callFrameId === t) &&
                    (!n.data.from || 'module' !== n.data.from)
                  ) {
                    var r = n.data;
                    e(r);
                  }
                };
                return (
                  (this._wrappedListeners[e] = n),
                  window.addEventListener('message', n),
                  e
                );
              },
            },
            {
              key: 'removeListenerForPackagedMessagesFromCallMachine',
              value: function (e) {
                var t = this._wrappedListeners[e];
                t &&
                  (window.removeEventListener('message', t),
                  delete this._wrappedListeners[e]);
              },
            },
          ]),
          n
        );
      })(se);
      function fe(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b()(e);
          if (t) {
            var i = b()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return y()(this, n);
        };
      }
      var pe = (function (e) {
          m()(n, e);
          var t = fe(n);
          function n() {
            var e;
            return (
              l()(this, n),
              (e = t.call(this)),
              (window.callMachineToDailyJsEmitter =
                window.callMachineToDailyJsEmitter || new T.EventEmitter()),
              (window.dailyJsToCallMachineEmitter =
                window.dailyJsToCallMachineEmitter || new T.EventEmitter()),
              (e._wrappedListeners = {}),
              (e._messageCallbacks = {}),
              e
            );
          }
          return (
            h()(n, [
              {
                key: 'addListenerForMessagesFromCallMachine',
                value: function (e, t, n) {
                  this._addListener(
                    e,
                    window.callMachineToDailyJsEmitter,
                    n,
                    'received call machine message'
                  );
                },
              },
              {
                key: 'addListenerForMessagesFromDailyJs',
                value: function (e, t, n) {
                  this._addListener(
                    e,
                    window.dailyJsToCallMachineEmitter,
                    n,
                    'received daily-js message'
                  );
                },
              },
              {
                key: 'sendMessageToCallMachine',
                value: function (e, t) {
                  this._sendMessage(
                    e,
                    window.dailyJsToCallMachineEmitter,
                    'sending message to call machine',
                    t
                  );
                },
              },
              {
                key: 'sendMessageToDailyJs',
                value: function (e) {
                  this._sendMessage(
                    e,
                    window.callMachineToDailyJsEmitter,
                    'sending message to daily-js'
                  );
                },
              },
              {
                key: 'removeListener',
                value: function (e) {
                  var t = this._wrappedListeners[e];
                  t &&
                    (window.callMachineToDailyJsEmitter.removeListener(
                      'message',
                      t
                    ),
                    window.dailyJsToCallMachineEmitter.removeListener(
                      'message',
                      t
                    ),
                    delete this._wrappedListeners[e]);
                },
              },
              {
                key: '_addListener',
                value: function (e, t, n, r) {
                  var i = this,
                    a = function (t) {
                      if (
                        t.callbackStamp &&
                        i._messageCallbacks[t.callbackStamp]
                      ) {
                        var r = t.callbackStamp;
                        i._messageCallbacks[r].call(n, t),
                          delete i._messageCallbacks[r];
                      }
                      e.call(n, t);
                    };
                  (this._wrappedListeners[e] = a), t.addListener('message', a);
                },
              },
              {
                key: '_sendMessage',
                value: function (e, t, n, r) {
                  if (r) {
                    var i = re();
                    (this._messageCallbacks[i] = r), (e.callbackStamp = i);
                  }
                  t.emit('message', e);
                },
              },
            ]),
            n
          );
        })(se),
        he = n(58),
        ve = n.n(he);
      function me(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b()(e);
          if (t) {
            var i = b()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return y()(this, n);
        };
      }
      var ge = (function () {
          function e() {
            l()(this, e), (this._currentLoad = null);
          }
          return (
            h()(e, [
              {
                key: 'load',
                value: function (e, t, n, r, i) {
                  if (this.loaded)
                    return window._dailyCallObjectSetup(t), void r(!0);
                  !(function (e, t) {
                    window._dailyConfig || (window._dailyConfig = {}),
                      (window._dailyConfig.callFrameId = e),
                      (window._dailyConfig.avoidEval = t);
                  })(t, n),
                    this._currentLoad && this._currentLoad.cancel(),
                    (this._currentLoad = new ye(
                      e,
                      function () {
                        r(!1);
                      },
                      i
                    )),
                    this._currentLoad.start();
                },
              },
              {
                key: 'cancel',
                value: function () {
                  this._currentLoad && this._currentLoad.cancel();
                },
              },
              {
                key: 'loaded',
                get: function () {
                  return this._currentLoad && this._currentLoad.succeeded;
                },
              },
            ]),
            e
          );
        })(),
        ye = (function () {
          function e(t, n, r) {
            l()(this, e),
              (this._attemptsRemaining = 3),
              (this._currentAttempt = null),
              (this._meetingOrBaseUrl = t),
              (this._successCallback = n),
              (this._failureCallback = r);
          }
          return (
            h()(e, [
              {
                key: 'start',
                value: function () {
                  var e = this;
                  if (!this._currentAttempt) {
                    (this._currentAttempt = new be(
                      this._meetingOrBaseUrl,
                      this._successCallback,
                      function t(n) {
                        e._currentAttempt.cancelled ||
                          (e._attemptsRemaining--,
                          e._failureCallback(n, e._attemptsRemaining > 0),
                          e._attemptsRemaining <= 0 ||
                            setTimeout(function () {
                              e._currentAttempt.cancelled ||
                                ((e._currentAttempt = new be(
                                  e._meetingOrBaseUrl,
                                  e._successCallback,
                                  t
                                )),
                                e._currentAttempt.start());
                            }, 3e3));
                      }
                    )),
                      this._currentAttempt.start();
                  }
                },
              },
              {
                key: 'cancel',
                value: function () {
                  this._currentAttempt && this._currentAttempt.cancel();
                },
              },
              {
                key: 'cancelled',
                get: function () {
                  return this._currentAttempt && this._currentAttempt.cancelled;
                },
              },
              {
                key: 'succeeded',
                get: function () {
                  return this._currentAttempt && this._currentAttempt.succeeded;
                },
              },
            ]),
            e
          );
        })(),
        _e = (function (e) {
          m()(n, e);
          var t = me(n);
          function n() {
            return l()(this, n), t.apply(this, arguments);
          }
          return n;
        })(ve()(Error)),
        be = (function () {
          function e(t, n, r) {
            l()(this, e),
              (this._loadAttemptImpl =
                q() || !_dailyConfig.avoidEval
                  ? new we(t, n, r)
                  : new ke(t, n, r));
          }
          var t;
          return (
            h()(e, [
              {
                key: 'start',
                value:
                  ((t = c()(function* () {
                    return this._loadAttemptImpl.start();
                  })),
                  function () {
                    return t.apply(this, arguments);
                  }),
              },
              {
                key: 'cancel',
                value: function () {
                  this._loadAttemptImpl.cancel();
                },
              },
              {
                key: 'cancelled',
                get: function () {
                  return this._loadAttemptImpl.cancelled;
                },
              },
              {
                key: 'succeeded',
                get: function () {
                  return this._loadAttemptImpl.succeeded;
                },
              },
            ]),
            e
          );
        })(),
        we = (function () {
          function e(t, n, r) {
            l()(this, e),
              (this.cancelled = !1),
              (this.succeeded = !1),
              (this._networkTimedOut = !1),
              (this._networkTimeout = null),
              (this._iosCache =
                'undefined' != typeof iOSCallObjectBundleCache &&
                iOSCallObjectBundleCache),
              (this._refetchHeaders = null),
              (this._meetingOrBaseUrl = t),
              (this._successCallback = n),
              (this._failureCallback = r);
          }
          var t, n, r, i;
          return (
            h()(e, [
              {
                key: 'start',
                value:
                  ((i = c()(function* () {
                    var e;
                    try {
                      e = ae(this._meetingOrBaseUrl);
                    } catch (e) {
                      return void this._failureCallback(
                        'Failed to get call object bundle for URL '
                          .concat(this._meetingOrBaseUrl, ': ')
                          .concat(e)
                      );
                    }
                    !(yield this._tryLoadFromIOSCache(e)) &&
                      this._loadFromNetwork(e);
                  })),
                  function () {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: 'cancel',
                value: function () {
                  clearTimeout(this._networkTimeout), (this.cancelled = !0);
                },
              },
              {
                key: '_tryLoadFromIOSCache',
                value:
                  ((r = c()(function* (e) {
                    if (!this._iosCache) return !1;
                    try {
                      var t = yield this._iosCache.get(e);
                      return (
                        !!this.cancelled ||
                        (!!t &&
                          (t.code
                            ? (Function('"use strict";' + t.code)(),
                              (this.succeeded = !0),
                              this._successCallback(),
                              !0)
                            : ((this._refetchHeaders = t.refetchHeaders), !1)))
                      );
                    } catch (e) {
                      return !1;
                    }
                  })),
                  function (e) {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: '_loadFromNetwork',
                value:
                  ((n = c()(function* (e) {
                    var t = this;
                    this._networkTimeout = setTimeout(function () {
                      (t._networkTimedOut = !0),
                        t._failureCallback(
                          'Timed out (>'
                            .concat(
                              2e4,
                              ' ms) when loading call object bundle '
                            )
                            .concat(e)
                        );
                    }, 2e4);
                    try {
                      var n = this._refetchHeaders
                          ? { headers: this._refetchHeaders }
                          : {},
                        r = yield fetch(e, n);
                      if (
                        (clearTimeout(this._networkTimeout),
                        this.cancelled || this._networkTimedOut)
                      )
                        throw new _e();
                      var i = yield this._getBundleCodeFromResponse(e, r);
                      if (this.cancelled) throw new _e();
                      Function('"use strict";' + i)(),
                        this._iosCache && this._iosCache.set(e, i, r.headers),
                        (this.succeeded = !0),
                        this._successCallback();
                    } catch (t) {
                      if (
                        (clearTimeout(this._networkTimeout),
                        t instanceof _e ||
                          this.cancelled ||
                          this._networkTimedOut)
                      )
                        return;
                      this._failureCallback(
                        'Failed to load call object bundle '
                          .concat(e, ': ')
                          .concat(t)
                      );
                    }
                  })),
                  function (e) {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: '_getBundleCodeFromResponse',
                value:
                  ((t = c()(function* (e, t) {
                    if (t.ok) return yield t.text();
                    if (this._iosCache && 304 === t.status)
                      return (yield this._iosCache.renew(e, t.headers)).code;
                    throw new Error('Received '.concat(t.status, ' response'));
                  })),
                  function (e, n) {
                    return t.apply(this, arguments);
                  }),
              },
            ]),
            e
          );
        })(),
        ke = (function () {
          function e(t, n, r) {
            l()(this, e),
              (this.cancelled = !1),
              (this.succeeded = !1),
              (this._meetingOrBaseUrl = t),
              (this._successCallback = n),
              (this._failureCallback = r),
              (this._attemptId = re()),
              (this._networkTimeout = null),
              (this._scriptElement = null);
          }
          var t;
          return (
            h()(e, [
              {
                key: 'start',
                value:
                  ((t = c()(function* () {
                    var e;
                    window._dailyCallMachineLoadWaitlist ||
                      (window._dailyCallMachineLoadWaitlist = new Set());
                    try {
                      e = ae(this._meetingOrBaseUrl);
                    } catch (e) {
                      return void this._failureCallback(
                        'Failed to get call object bundle for URL '
                          .concat(this._meetingOrBaseUrl, ': ')
                          .concat(e)
                      );
                    }
                    'object' ===
                    ('undefined' == typeof document
                      ? 'undefined'
                      : S()(document))
                      ? this._startLoading(e)
                      : this._failureCallback(
                          'Call object bundle must be loaded in a DOM/web context'
                        );
                  })),
                  function () {
                    return t.apply(this, arguments);
                  }),
              },
              {
                key: 'cancel',
                value: function () {
                  this._stopLoading(), (this.cancelled = !0);
                },
              },
              {
                key: '_startLoading',
                value: function (e) {
                  var t = this;
                  this._signUpForCallMachineLoadWaitlist(),
                    (this._networkTimeout = setTimeout(function () {
                      t._stopLoading(),
                        t._failureCallback(
                          'Timed out (>'
                            .concat(
                              2e4,
                              ' ms) when loading call object bundle '
                            )
                            .concat(e)
                        );
                    }, 2e4));
                  var n = document.getElementsByTagName('head')[0],
                    r = document.createElement('script');
                  (this._scriptElement = r),
                    (r.onload = c()(function* () {
                      t._stopLoading(),
                        (t.succeeded = !0),
                        t._successCallback();
                    })),
                    (r.onerror = (function () {
                      var e = c()(function* (e) {
                        t._stopLoading(),
                          t._failureCallback(
                            'Failed to load call object bundle '.concat(
                              e.target.src
                            )
                          );
                      });
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()),
                    (r.src = e),
                    n.appendChild(r);
                },
              },
              {
                key: '_stopLoading',
                value: function () {
                  this._withdrawFromCallMachineLoadWaitlist(),
                    clearTimeout(this._networkTimeout),
                    this._scriptElement &&
                      ((this._scriptElement.onload = null),
                      (this._scriptElement.onerror = null));
                },
              },
              {
                key: '_signUpForCallMachineLoadWaitlist',
                value: function () {
                  window._dailyCallMachineLoadWaitlist.add(this._attemptId);
                },
              },
              {
                key: '_withdrawFromCallMachineLoadWaitlist',
                value: function () {
                  window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
                },
              },
            ]),
            e
          );
        })(),
        Me = n(32),
        Se = n.n(Me),
        Te = n(33),
        Ee = n.n(Te),
        Ae = function (e, t, n) {
          return !0 === Pe(e.local, t, n);
        },
        Oe = function (e, t, n) {
          return (
            e.local.streams &&
            e.local.streams[t] &&
            e.local.streams[t].stream &&
            e.local.streams[t].stream[
              'get'.concat('video' === n ? 'Video' : 'Audio', 'Tracks')
            ]()[0]
          );
        },
        Ce = function (e, t, n, r) {
          var i = je(e, t, n, r);
          return i && i.pendingTrack;
        },
        Pe = function (e, t, n) {
          if (!e) return !1;
          var r = function (e) {
              switch (e) {
                case 'avatar':
                  return !0;
                case 'staged':
                  return e;
                default:
                  return !!e;
              }
            },
            i = e.public.subscribedTracks;
          return i && i[t]
            ? -1 ===
                [
                  'cam-audio',
                  'cam-video',
                  'screen-video',
                  'screen-audio',
                  'rmpAudio',
                  'rmpVideo',
                ].indexOf(n) && i[t].custom
              ? [!0, 'staged'].includes(i[t].custom)
                ? r(i[t].custom)
                : r(i[t].custom[n])
              : r(i[t][n])
            : !i || r(i.ALL);
        },
        je = function (e, t, n, r) {
          var i = Ee()(
            Se()(e.streams, function (e) {
              return (
                e.participantId === t &&
                e.type === n &&
                e.pendingTrack &&
                e.pendingTrack.kind === r
              );
            }),
            'starttime',
            'desc'
          );
          return i && i[0];
        },
        Le = function (e, t) {
          var n = e.local.public.customTracks;
          if (n && n[t]) return n[t].track;
        },
        Ie = function (e, t, n, r) {
          var i = 'soup-' + n,
            a = Ee()(
              Se()(e.streams, function (e) {
                return (
                  e.participantId === t &&
                  e.streamId === i &&
                  e.pendingTrack &&
                  e.pendingTrack.kind === r
                );
              }),
              'starttime',
              'desc'
            );
          return a && a[0] && a[0].pendingTrack;
        };
      function xe(e) {
        for (
          var t = store.getState(), n = 0, r = ['cam', 'screen'];
          n < r.length;
          n++
        )
          for (var i = r[n], a = 0, o = ['video', 'audio']; a < o.length; a++) {
            var s = o[a],
              c =
                'cam' === i
                  ? s
                  : 'screen'.concat(s.charAt(0).toUpperCase() + s.slice(1)),
              u = e.tracks[c];
            if (u) {
              var l = e.local ? Oe(t, i, s) : Ce(t, e.session_id, i, s);
              'playable' === u.state && (u.track = l), (u.persistentTrack = l);
            }
          }
      }
      function De(e) {
        try {
          var t = store.getState();
          for (var n in e.tracks)
            if (!Ne(n)) {
              var r = e.tracks[n].kind;
              if (r) {
                var i = e.tracks[n];
                if (i) {
                  var a = e.local ? Le(t, n) : Ie(t, e.session_id, n, r);
                  'playable' === i.state && (e.tracks[n].track = a),
                    (i.persistentTrack = a);
                }
              } else console.error('unknown type for custom track');
            }
        } catch (e) {
          console.error(e);
        }
      }
      function Ne(e) {
        return ['video', 'audio', 'screenVideo', 'screenAudio'].includes(e);
      }
      function Re(e, t) {
        var n = store.getState();
        if (e.local) {
          if (e.audio)
            try {
              (e.audioTrack = n.local.streams.cam.stream.getAudioTracks()[0]),
                e.audioTrack || (e.audio = !1);
            } catch (e) {}
          if (e.video)
            try {
              (e.videoTrack = n.local.streams.cam.stream.getVideoTracks()[0]),
                e.videoTrack || (e.video = !1);
            } catch (e) {}
          if (e.screen)
            try {
              (e.screenVideoTrack =
                n.local.streams.screen.stream.getVideoTracks()[0]),
                (e.screenAudioTrack =
                  n.local.streams.screen.stream.getAudioTracks()[0]),
                e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1);
            } catch (e) {}
        } else {
          var r = !0;
          try {
            var i = n.participants[e.session_id];
            i &&
              i.public &&
              i.public.rtcType &&
              'peer-to-peer' === i.public.rtcType.impl &&
              i.private &&
              !['connected', 'completed'].includes(i.private.peeringState) &&
              (r = !1);
          } catch (e) {
            console.error(e);
          }
          if (!r)
            return (
              (e.audio = !1),
              (e.audioTrack = !1),
              (e.video = !1),
              (e.videoTrack = !1),
              (e.screen = !1),
              void (e.screenTrack = !1)
            );
          try {
            n.streams;
            if (e.audio && Ae(n, e.session_id, 'cam-audio')) {
              var a = Ce(n, e.session_id, 'cam', 'audio');
              a &&
                (t && t.audioTrack && t.audioTrack.id === a.id
                  ? (e.audioTrack = a)
                  : a.muted || (e.audioTrack = a)),
                e.audioTrack || (e.audio = !1);
            }
            if (e.video && Ae(n, e.session_id, 'cam-video')) {
              var o = Ce(n, e.session_id, 'cam', 'video');
              o &&
                (t && t.videoTrack && t.videoTrack.id === o.id
                  ? (e.videoTrack = o)
                  : o.muted || (e.videoTrack = o)),
                e.videoTrack || (e.video = !1);
            }
            if (e.screen && Ae(n, e.session_id, 'screen-audio')) {
              var s = Ce(n, e.session_id, 'screen', 'audio');
              s &&
                (t && t.screenAudioTrack && t.screenAudioTrack.id === s.id
                  ? (e.screenAudioTrack = s)
                  : s.muted || (e.screenAudioTrack = s));
            }
            if (e.screen && Ae(n, e.session_id, 'screen-video')) {
              var c = Ce(n, e.session_id, 'screen', 'video');
              c &&
                (t && t.screenVideoTrack && t.screenVideoTrack.id === c.id
                  ? (e.screenVideoTrack = c)
                  : c.muted || (e.screenVideoTrack = c));
            }
            e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1);
          } catch (e) {
            console.error('unexpected error matching up tracks', e);
          }
        }
      }
      function Fe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Be(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Fe(Object(n), !0).forEach(function (t) {
                k()(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Fe(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ve(e) {
        var t = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = b()(e);
          if (t) {
            var i = b()(this).constructor;
            n = Reflect.construct(r, arguments, i);
          } else n = r.apply(this, arguments);
          return y()(this, n);
        };
      }
      n.d(t, 'default', function () {
        return Qe;
      }),
        n.d(t, 'DAILY_STATE_NEW', function () {
          return P;
        }),
        n.d(t, 'DAILY_STATE_JOINING', function () {
          return L;
        }),
        n.d(t, 'DAILY_STATE_JOINED', function () {
          return I;
        }),
        n.d(t, 'DAILY_STATE_LEFT', function () {
          return x;
        }),
        n.d(t, 'DAILY_STATE_ERROR', function () {
          return D;
        }),
        n.d(t, 'DAILY_TRACK_STATE_BLOCKED', function () {
          return 'blocked';
        }),
        n.d(t, 'DAILY_TRACK_STATE_OFF', function () {
          return 'off';
        }),
        n.d(t, 'DAILY_TRACK_STATE_SENDABLE', function () {
          return 'sendable';
        }),
        n.d(t, 'DAILY_TRACK_STATE_LOADING', function () {
          return 'loading';
        }),
        n.d(t, 'DAILY_TRACK_STATE_INTERRUPTED', function () {
          return 'interrupted';
        }),
        n.d(t, 'DAILY_TRACK_STATE_PLAYABLE', function () {
          return 'playable';
        }),
        n.d(t, 'DAILY_ACCESS_UNKNOWN', function () {
          return 'unknown';
        }),
        n.d(t, 'DAILY_ACCESS_LEVEL_FULL', function () {
          return 'full';
        }),
        n.d(t, 'DAILY_ACCESS_LEVEL_LOBBY', function () {
          return 'lobby';
        }),
        n.d(t, 'DAILY_ACCESS_LEVEL_NONE', function () {
          return 'none';
        }),
        n.d(t, 'DAILY_RECEIVE_SETTINGS_BASE_KEY', function () {
          return 'base';
        }),
        n.d(t, 'DAILY_RECEIVE_SETTINGS_ALL_PARTICIPANTS_KEY', function () {
          return '*';
        }),
        n.d(t, 'DAILY_FATAL_ERROR_EJECTED', function () {
          return 'ejected';
        }),
        n.d(t, 'DAILY_FATAL_ERROR_NBF_ROOM', function () {
          return 'nbf-room';
        }),
        n.d(t, 'DAILY_FATAL_ERROR_NBF_TOKEN', function () {
          return 'nbf-token';
        }),
        n.d(t, 'DAILY_FATAL_ERROR_EXP_ROOM', function () {
          return 'exp-room';
        }),
        n.d(t, 'DAILY_FATAL_ERROR_EXP_TOKEN', function () {
          return 'exp-token';
        }),
        n.d(t, 'DAILY_CAMERA_ERROR_CAM_IN_USE', function () {
          return 'cam-in-use';
        }),
        n.d(t, 'DAILY_CAMERA_ERROR_MIC_IN_USE', function () {
          return 'mic-in-use';
        }),
        n.d(t, 'DAILY_CAMERA_ERROR_CAM_AND_MIC_IN_USE', function () {
          return 'cam-mic-in-use';
        }),
        n.d(t, 'DAILY_EVENT_IFRAME_READY_FOR_LAUNCH_CONFIG', function () {
          return 'iframe-ready-for-launch-config';
        }),
        n.d(t, 'DAILY_EVENT_IFRAME_LAUNCH_CONFIG', function () {
          return 'iframe-launch-config';
        }),
        n.d(t, 'DAILY_EVENT_THEME_UPDATED', function () {
          return 'theme-updated';
        }),
        n.d(t, 'DAILY_EVENT_LOADING', function () {
          return 'loading';
        }),
        n.d(t, 'DAILY_EVENT_LOADED', function () {
          return 'loaded';
        }),
        n.d(t, 'DAILY_EVENT_LOAD_ATTEMPT_FAILED', function () {
          return 'load-attempt-failed';
        }),
        n.d(t, 'DAILY_EVENT_STARTED_CAMERA', function () {
          return 'started-camera';
        }),
        n.d(t, 'DAILY_EVENT_CAMERA_ERROR', function () {
          return 'camera-error';
        }),
        n.d(t, 'DAILY_EVENT_JOINING_MEETING', function () {
          return 'joining-meeting';
        }),
        n.d(t, 'DAILY_EVENT_JOINED_MEETING', function () {
          return 'joined-meeting';
        }),
        n.d(t, 'DAILY_EVENT_LEFT_MEETING', function () {
          return 'left-meeting';
        }),
        n.d(t, 'DAILY_EVENT_PARTICIPANT_JOINED', function () {
          return 'participant-joined';
        }),
        n.d(t, 'DAILY_EVENT_PARTICIPANT_UPDATED', function () {
          return 'participant-updated';
        }),
        n.d(t, 'DAILY_EVENT_PARTICIPANT_LEFT', function () {
          return 'participant-left';
        }),
        n.d(t, 'DAILY_EVENT_PARTICIPANT_COUNTS_UPDATED', function () {
          return 'participant-counts-updated';
        }),
        n.d(t, 'DAILY_EVENT_TRACK_STARTED', function () {
          return 'track-started';
        }),
        n.d(t, 'DAILY_EVENT_TRACK_STOPPED', function () {
          return 'track-stopped';
        }),
        n.d(t, 'DAILY_EVENT_RECORDING_STARTED', function () {
          return 'recording-started';
        }),
        n.d(t, 'DAILY_EVENT_RECORDING_STOPPED', function () {
          return 'recording-stopped';
        }),
        n.d(t, 'DAILY_EVENT_RECORDING_STATS', function () {
          return 'recording-stats';
        }),
        n.d(t, 'DAILY_EVENT_RECORDING_ERROR', function () {
          return 'recording-error';
        }),
        n.d(t, 'DAILY_EVENT_RECORDING_UPLOAD_COMPLETED', function () {
          return 'recording-upload-completed';
        }),
        n.d(t, 'DAILY_EVENT_REMOTE_MEDIA_PLAYER_STARTED', function () {
          return 'remote-media-player-started';
        }),
        n.d(t, 'DAILY_EVENT_REMOTE_MEDIA_PLAYER_UPDATED', function () {
          return 'remote-media-player-updated';
        }),
        n.d(t, 'DAILY_EVENT_REMOTE_MEDIA_PLAYER_STOPPED', function () {
          return 'remote-media-player-stopped';
        }),
        n.d(t, 'DAILY_EVENT_TRANSCRIPTION_STARTED', function () {
          return 'transcription-started';
        }),
        n.d(t, 'DAILY_EVENT_TRANSCRIPTION_STOPPED', function () {
          return 'transcription-stopped';
        }),
        n.d(t, 'DAILY_EVENT_TRANSCRIPTION_ERROR', function () {
          return 'transcription-error';
        }),
        n.d(t, 'DAILY_EVENT_ERROR', function () {
          return 'error';
        }),
        n.d(t, 'DAILY_EVENT_APP_MSG', function () {
          return 'app-message';
        }),
        n.d(t, 'DAILY_EVENT_INPUT_EVENT', function () {
          return 'input-event';
        }),
        n.d(t, 'DAILY_EVENT_LOCAL_SCREEN_SHARE_STARTED', function () {
          return 'local-screen-share-started';
        }),
        n.d(t, 'DAILY_EVENT_LOCAL_SCREEN_SHARE_STOPPED', function () {
          return 'local-screen-share-stopped';
        }),
        n.d(t, 'DAILY_EVENT_NETWORK_QUALITY_CHANGE', function () {
          return 'network-quality-change';
        }),
        n.d(t, 'DAILY_EVENT_ACTIVE_SPEAKER_CHANGE', function () {
          return 'active-speaker-change';
        }),
        n.d(t, 'DAILY_EVENT_ACTIVE_SPEAKER_MODE_CHANGE', function () {
          return 'active-speaker-mode-change';
        }),
        n.d(t, 'DAILY_EVENT_FULLSCREEN', function () {
          return 'fullscreen';
        }),
        n.d(t, 'DAILY_EVENT_EXIT_FULLSCREEN', function () {
          return 'exited-fullscreen';
        }),
        n.d(t, 'DAILY_EVENT_NETWORK_CONNECTION', function () {
          return 'network-connection';
        }),
        n.d(t, 'DAILY_EVENT_RECORDING_DATA', function () {
          return 'recording-data';
        }),
        n.d(t, 'DAILY_EVENT_LIVE_STREAMING_STARTED', function () {
          return 'live-streaming-started';
        }),
        n.d(t, 'DAILY_EVENT_LIVE_STREAMING_STOPPED', function () {
          return 'live-streaming-stopped';
        }),
        n.d(t, 'DAILY_EVENT_LIVE_STREAMING_ERROR', function () {
          return 'live-streaming-error';
        }),
        n.d(t, 'DAILY_EVENT_LANG_UPDATED', function () {
          return 'lang-updated';
        }),
        n.d(t, 'DAILY_EVENT_ACCESS_STATE_UPDATED', function () {
          return 'access-state-updated';
        }),
        n.d(t, 'DAILY_EVENT_MEETING_SESSION_UPDATED', function () {
          return 'meeting-session-updated';
        }),
        n.d(t, 'DAILY_EVENT_WAITING_PARTICIPANT_ADDED', function () {
          return 'waiting-participant-added';
        }),
        n.d(t, 'DAILY_EVENT_WAITING_PARTICIPANT_REMOVED', function () {
          return 'waiting-participant-removed';
        }),
        n.d(t, 'DAILY_EVENT_WAITING_PARTICIPANT_UPDATED', function () {
          return 'waiting-participant-updated';
        }),
        n.d(t, 'DAILY_EVENT_RECEIVE_SETTINGS_UPDATED', function () {
          return 'receive-settings-updated';
        }),
        n.d(t, 'DAILY_EVENT_INPUT_SETTINGS_UPDATED', function () {
          return 'input-settings-updated';
        }),
        n.d(t, 'DAILY_EVENT_NONFATAL_ERROR', function () {
          return 'nonfatal-error';
        });
      var Ue = 'video',
        Ye = 'voice',
        We = { present: 0, hidden: 0 },
        qe = {
          maxBitrate: { min: 1e5, max: 25e5 },
          maxFramerate: { min: 1, max: 30 },
          scaleResolutionDownBy: { min: 1, max: 8 },
        },
        Ge = ['state', 'simulcastEncodings'],
        Je = {
          androidInCallNotification: {
            title: 'string',
            subtitle: 'string',
            iconName: 'string',
            disableForCustomOverride: 'boolean',
          },
          disableAutoDeviceManagement: { audio: 'boolean', video: 'boolean' },
        },
        ze = {
          id: {
            iconPath: 'string',
            iconPathDarkMode: 'string',
            label: 'string',
            tooltip: 'string',
          },
        },
        Ke = {
          customTrayButtons: {
            validate: it,
            help: 'customTrayButtons should be a dictionary of the type '.concat(
              JSON.stringify(ze)
            ),
          },
          url: {
            validate: function (e) {
              return 'string' == typeof e;
            },
            help: 'url should be a string',
          },
          baseUrl: {
            validate: function (e) {
              return 'string' == typeof e;
            },
            help: 'baseUrl should be a string',
          },
          token: {
            validate: function (e) {
              return 'string' == typeof e;
            },
            help: 'token should be a string',
            queryString: 't',
          },
          dailyConfig: {
            validate: function (e) {
              return (
                window._dailyConfig || (window._dailyConfig = {}),
                (window._dailyConfig.experimentalGetUserMediaConstraintsModify =
                  e.experimentalGetUserMediaConstraintsModify),
                (window._dailyConfig.userMediaVideoConstraints =
                  e.userMediaVideoConstraints),
                (window._dailyConfig.userMediaAudioConstraints =
                  e.userMediaAudioConstraints),
                (window._dailyConfig.callObjectBundleUrlOverride =
                  e.callObjectBundleUrlOverride),
                !0
              );
            },
          },
          reactNativeConfig: {
            validate: function (e) {
              return (function e(t, n) {
                if (void 0 === n) return !1;
                switch (S()(n)) {
                  case 'string':
                    return S()(t) === n;
                  case 'object':
                    if ('object' !== S()(t)) return !1;
                    for (var r in t) if (!e(t[r], n[r])) return !1;
                    return !0;
                  default:
                    return !1;
                }
              })(e, Je);
            },
            help: 'reactNativeConfig should look like '.concat(
              JSON.stringify(Je),
              ', all fields optional'
            ),
          },
          lang: {
            validate: function (e) {
              return [
                'de',
                'en-us',
                'en',
                'es',
                'fi',
                'fr',
                'it',
                'jp',
                'ka',
                'nl',
                'no',
                'pl',
                'pt',
                'ru',
                'sv',
                'tr',
                'user',
              ].includes(e);
            },
            help: 'language not supported. Options are: de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, ru, sv, tr, user',
          },
          userName: !0,
          activeSpeakerMode: !0,
          showLeaveButton: !0,
          showLocalVideo: !0,
          showParticipantsBar: !0,
          showFullscreenButton: !0,
          iframeStyle: !0,
          customLayout: !0,
          cssFile: !0,
          cssText: !0,
          bodyClass: !0,
          videoSource: {
            validate: function (e, t) {
              return (t._preloadCache.videoDeviceId = e), !0;
            },
          },
          audioSource: {
            validate: function (e, t) {
              return (t._preloadCache.audioDeviceId = e), !0;
            },
          },
          subscribeToTracksAutomatically: {
            validate: function (e, t) {
              return (t._preloadCache.subscribeToTracksAutomatically = e), !0;
            },
          },
          theme: {
            validate: function (e) {
              var t = [
                  'accent',
                  'accentText',
                  'background',
                  'backgroundAccent',
                  'baseText',
                  'border',
                  'mainAreaBg',
                  'mainAreaBgAccent',
                  'mainAreaText',
                  'supportiveText',
                ],
                n = function (e) {
                  for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                    var i = r[n];
                    if (!t.includes(i))
                      return (
                        console.error(
                          'unsupported color "'
                            .concat(i, '". Valid colors: ')
                            .concat(t.join(', '))
                        ),
                        !1
                      );
                    if (!e[i].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i))
                      return (
                        console.error(
                          ''
                            .concat(
                              i,
                              ' theme color should be provided in valid hex color format. Received: "'
                            )
                            .concat(e[i], '"')
                        ),
                        !1
                      );
                  }
                  return !0;
                };
              return 'object' === S()(e) &&
                (('light' in e && 'dark' in e) || 'colors' in e)
                ? 'light' in e && 'dark' in e
                  ? 'colors' in e.light
                    ? 'colors' in e.dark
                      ? n(e.light.colors) && n(e.dark.colors)
                      : (console.error(
                          'Dark theme is missing "colors" property.',
                          e
                        ),
                        !1)
                    : (console.error(
                        'Light theme is missing "colors" property.',
                        e
                      ),
                      !1)
                  : n(e.colors)
                : (console.error(
                    'Theme must contain either both "light" and "dark" properties, or "colors".',
                    e
                  ),
                  !1);
            },
            help: 'unsupported theme configuration. Check error logs for detailed info.',
          },
          layoutConfig: {
            validate: function (e) {
              if ('grid' in e) {
                var t = e.grid;
                if ('maxTilesPerPage' in t) {
                  if (!Number.isInteger(t.maxTilesPerPage))
                    return (
                      console.error(
                        'grid.maxTilesPerPage should be an integer. You passed '.concat(
                          t.maxTilesPerPage,
                          '.'
                        )
                      ),
                      !1
                    );
                  if (t.maxTilesPerPage > 49)
                    return (
                      console.error(
                        "grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."
                      ),
                      !1
                    );
                }
                if ('minTilesPerPage' in t) {
                  if (!Number.isInteger(t.minTilesPerPage))
                    return (
                      console.error(
                        'grid.minTilesPerPage should be an integer. You passed '.concat(
                          t.minTilesPerPage,
                          '.'
                        )
                      ),
                      !1
                    );
                  if (t.minTilesPerPage < 1)
                    return (
                      console.error(
                        "grid.minTilesPerPage can't be lower than 1."
                      ),
                      !1
                    );
                  if (
                    'maxTilesPerPage' in t &&
                    t.minTilesPerPage > t.maxTilesPerPage
                  )
                    return (
                      console.error(
                        "grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."
                      ),
                      !1
                    );
                }
              }
              return !0;
            },
            help: 'unsupported layoutConfig. Check error logs for detailed info.',
          },
          receiveSettings: {
            validate: function (e) {
              return et(e, { allowAllParticipantsKey: !1 });
            },
            help: rt({ allowAllParticipantsKey: !1 }),
          },
          inputSettings: {
            validate: function (e) {
              return tt(e);
            },
            help: nt(),
          },
          layout: {
            validate: function (e) {
              return 'custom-v1' === e || 'browser' === e || 'none' === e;
            },
            help: 'layout may only be set to "custom-v1"',
            queryString: 'layout',
          },
          emb: { queryString: 'emb' },
          embHref: { queryString: 'embHref' },
          dailyJsVersion: { queryString: 'dailyJsVersion' },
        },
        He = {
          styles: {
            validate: function (e) {
              for (var t in e) if ('cam' !== t && 'screen' !== t) return !1;
              if (e.cam)
                for (var t in e.cam)
                  if ('div' !== t && 'video' !== t) return !1;
              if (e.screen)
                for (var t in e.screen)
                  if ('div' !== t && 'video' !== t) return !1;
              return !0;
            },
            help: 'styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }',
          },
          setSubscribedTracks: {
            validate: function (e, t, n) {
              if (t._preloadCache.subscribeToTracksAutomatically) return !1;
              var r = [!0, !1, 'staged'];
              if (r.includes(e) || (!q() && 'avatar' === e)) return !0;
              var i = [
                'audio',
                'video',
                'screenAudio',
                'screenVideo',
                'rmpAudio',
                'rmpVideo',
              ];
              return (function e(t) {
                var n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
                for (var a in t)
                  if ('custom' === a) {
                    var o = r.includes(t[a]);
                    if (!o && !e(t[a], !0)) return !1;
                  } else {
                    var s = !n && !i.includes(a),
                      c = !r.includes(t[a]);
                    if (s || c) return !1;
                  }
                return !0;
              })(e);
            },
            help:
              'setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: ' +
              'true'.concat(
                q() ? '' : " | 'avatar'",
                " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }"
              ),
          },
          setAudio: !0,
          setVideo: !0,
          eject: !0,
        },
        Qe = (function (e) {
          m()(ne, e);
          var t,
            n,
            r,
            i,
            a,
            s,
            u,
            d,
            p,
            v,
            g,
            y,
            _,
            b,
            w,
            M,
            T,
            O,
            N,
            V,
            G,
            K,
            Z,
            X,
            ee,
            te = Ve(ne);
          function ne(e) {
            var t,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            if (
              (l()(this, ne),
              (t = te.call(this)),
              k()(f()(t), 'startListeningForDeviceChanges', function () {
                void 0 !== navigator.mediaDevices.ondevicechange || q()
                  ? navigator.mediaDevices.addEventListener(
                      'devicechange',
                      t.deviceChangeListener
                    )
                  : t.startPollingForDeviceChanges();
              }),
              k()(f()(t), 'stopListeningForDeviceChanges', function () {
                void 0 !== navigator.mediaDevices.ondevicechange || q()
                  ? navigator.mediaDevices.removeEventListener(
                      'devicechange',
                      t.deviceChangeListener
                    )
                  : t.stopPollingForDeviceChanges();
              }),
              k()(
                f()(t),
                'deviceChangeListener',
                c()(function* () {
                  var e = yield t.enumerateDevices();
                  t.handleDeviceChange(e.devices);
                })
              ),
              k()(f()(t), 'handleDeviceChange', function (e) {
                t.emit('available-devices-updated', {
                  action: 'available-devices-updated',
                  availableDevices: e,
                });
              }),
              k()(f()(t), 'startPollingForDeviceChanges', function () {
                t._deviceChangeInterval ||
                  (t._deviceChangeInterval = setInterval(
                    c()(function* () {
                      var e = yield t.enumerateDevices(),
                        n = JSON.stringify(e);
                      t._lastDevicesJSON &&
                        n !== t._lastDevicesJSON &&
                        t.handleDeviceChange(e.devices),
                        (t._lastDevicesJSON = n);
                    }),
                    3e3
                  ));
              }),
              k()(f()(t), 'stopPollingForDeviceChanges', function () {
                t._deviceChangeInterval &&
                  (clearInterval(t._deviceChangeInterval),
                  (t._deviceChangeInterval = null),
                  (t._lastDevicesJSON = null));
              }),
              k()(f()(t), 'handleNativeAppActiveStateChange', function (e) {
                t.disableReactNativeAutoDeviceManagement('video') ||
                  (e
                    ? t.camUnmutedBeforeLosingNativeActiveState &&
                      t.setLocalVideo(!0)
                    : ((t.camUnmutedBeforeLosingNativeActiveState =
                        t.localVideo()),
                      t.camUnmutedBeforeLosingNativeActiveState &&
                        t.setLocalVideo(!1)));
              }),
              k()(f()(t), 'handleNativeAudioFocusChange', function (e) {
                t.disableReactNativeAutoDeviceManagement('audio') ||
                  ((t._hasNativeAudioFocus = e),
                  t.toggleParticipantAudioBasedOnNativeAudioFocus(),
                  t._hasNativeAudioFocus
                    ? t.micUnmutedBeforeLosingNativeAudioFocus &&
                      t.setLocalAudio(!0)
                    : ((t.micUnmutedBeforeLosingNativeAudioFocus =
                        t.localAudio()),
                      t.setLocalAudio(!1)));
              }),
              (n.dailyJsVersion = ne.version()),
              (t._iframe = e),
              (t._callObjectMode = 'none' === n.layout && !t._iframe),
              (t._preloadCache = {
                subscribeToTracksAutomatically: !0,
                audioDeviceId: null,
                videoDeviceId: null,
                outputDeviceId: null,
              }),
              t._callObjectMode &&
                (window._dailyPreloadCache = t._preloadCache),
              void 0 !== n.showLocalVideo
                ? t._callObjectMode
                  ? console.error(
                      'showLocalVideo is not available in call object mode'
                    )
                  : (t._showLocalVideo = !!n.showLocalVideo)
                : (t._showLocalVideo = !0),
              void 0 !== n.showParticipantsBar
                ? t._callObjectMode
                  ? console.error(
                      'showParticipantsBar is not available in call object mode'
                    )
                  : (t._showParticipantsBar = !!n.showParticipantsBar)
                : (t._showParticipantsBar = !0),
              void 0 !== n.customTrayButtons
                ? t._callObjectMode
                  ? console.error(
                      'customTrayButtons is not available in call object mode'
                    )
                  : (t._customTrayButtons = n.customTrayButtons)
                : (t._customTrayButtons = {}),
              void 0 !== n.activeSpeakerMode
                ? t._callObjectMode
                  ? console.error(
                      'activeSpeakerMode is not available in call object mode'
                    )
                  : (t._activeSpeakerMode = !!n.activeSpeakerMode)
                : (t._activeSpeakerMode = !1),
              n.receiveSettings
                ? t._callObjectMode
                  ? (t._receiveSettings = n.receiveSettings)
                  : console.error(
                      'receiveSettings is only available in call object mode'
                    )
                : (t._receiveSettings = {}),
              (t._inputSettings = {}),
              n.inputSettings && (t._inputSettings = n.inputSettings),
              t.validateProperties(n),
              (t.properties = Be({}, n)),
              (t._callObjectLoader = t._callObjectMode ? new ge() : null),
              (t._meetingState = P),
              (t._isPreparingToJoin = !1),
              (t._accessState = { access: 'unknown' }),
              (t._nativeInCallAudioMode = Ue),
              (t._participants = {}),
              (t._participantCounts = We),
              (t._rmpPlayerState = {}),
              (t._waitingParticipants = {}),
              (t._inputEventsOn = {}),
              (t._network = { threshold: 'good', quality: 100 }),
              (t._activeSpeaker = {}),
              (t._callFrameId = re()),
              (t._messageChannel = q() ? new pe() : new de()),
              t._iframe &&
                (t._iframe.requestFullscreen
                  ? t._iframe.addEventListener(
                      'fullscreenchange',
                      function (e) {
                        document.fullscreenElement === t._iframe
                          ? (t.emit('fullscreen', { action: 'fullscreen' }),
                            t.sendMessageToCallMachine({
                              action: 'fullscreen',
                            }))
                          : (t.emit('exited-fullscreen', {
                              action: 'exited-fullscreen',
                            }),
                            t.sendMessageToCallMachine({
                              action: 'exited-fullscreen',
                            }));
                      }
                    )
                  : t._iframe.webkitRequestFullscreen &&
                    t._iframe.addEventListener(
                      'webkitfullscreenchange',
                      function (e) {
                        document.webkitFullscreenElement === t._iframe
                          ? (t.emit('fullscreen', { action: 'fullscreen' }),
                            t.sendMessageToCallMachine({
                              action: 'fullscreen',
                            }))
                          : (t.emit('exited-fullscreen', {
                              action: 'exited-fullscreen',
                            }),
                            t.sendMessageToCallMachine({
                              action: 'exited-fullscreen',
                            }));
                      }
                    )),
              q())
            ) {
              var r = t.nativeUtils();
              (r.addAudioFocusChangeListener &&
                r.removeAudioFocusChangeListener &&
                r.addAppActiveStateChangeListener &&
                r.removeAppActiveStateChangeListener) ||
                console.warn(
                  'expected (add|remove)(AudioFocus|AppActiveState)ChangeListener to be available in React Native'
                ),
                (t._hasNativeAudioFocus = !0),
                r.addAudioFocusChangeListener(t.handleNativeAudioFocusChange),
                r.addAppActiveStateChangeListener(
                  t.handleNativeAppActiveStateChange
                );
            }
            return (
              t._callObjectMode && t.startListeningForDeviceChanges(),
              t._messageChannel.addListenerForMessagesFromCallMachine(
                t.handleMessageFromCallMachine,
                t._callFrameId,
                f()(t)
              ),
              t
            );
          }
          return (
            h()(ne, null, [
              {
                key: 'supportedBrowser',
                value: function () {
                  if (q())
                    return {
                      supported: !0,
                      mobile: !0,
                      name: 'React Native',
                      version: null,
                      supportsScreenShare: !1,
                      supportsSfu: !0,
                      supportsVideoProcessing: !1,
                    };
                  var e = C.a.getParser(W());
                  return {
                    supported: !!$(),
                    mobile: 'mobile' === e.getPlatformType(),
                    name: e.getBrowserName(),
                    version: e.getBrowserVersion(),
                    supportsFullscreen: !!z(),
                    supportsScreenShare: !!J(),
                    supportsSfu: !!Q(),
                    supportsVideoProcessing: H(),
                  };
                },
              },
              {
                key: 'version',
                value: function () {
                  return '0.29.0';
                },
              },
              {
                key: 'createCallObject',
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return (e.layout = 'none'), new ne(null, e);
                },
              },
              {
                key: 'wrap',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if (
                    (Ze(), !e || !e.contentWindow || 'string' != typeof e.src)
                  )
                    throw new Error(
                      'DailyIframe::Wrap needs an iframe-like first argument'
                    );
                  return (
                    t.layout ||
                      (t.customLayout
                        ? (t.layout = 'custom-v1')
                        : (t.layout = 'browser')),
                    new ne(e, t)
                  );
                },
              },
              {
                key: 'createFrame',
                value: function (e, t) {
                  var n, r;
                  Ze(),
                    e && t
                      ? ((n = e), (r = t))
                      : e && e.append
                      ? ((n = e), (r = {}))
                      : ((n = document.body), (r = e || {}));
                  var i = r.iframeStyle;
                  i ||
                    (i =
                      n === document.body
                        ? {
                            position: 'fixed',
                            border: '1px solid black',
                            backgroundColor: 'white',
                            width: '375px',
                            height: '450px',
                            right: '1em',
                            bottom: '1em',
                          }
                        : { border: 0, width: '100%', height: '100%' });
                  var a = document.createElement('iframe');
                  window.navigator &&
                  window.navigator.userAgent.match(/Chrome\/61\./)
                    ? (a.allow = 'microphone, camera')
                    : (a.allow =
                        'microphone; camera; autoplay; display-capture'),
                    (a.style.visibility = 'hidden'),
                    n.appendChild(a),
                    (a.style.visibility = null),
                    Object.keys(i).forEach(function (e) {
                      return (a.style[e] = i[e]);
                    }),
                    r.layout ||
                      (r.customLayout
                        ? (r.layout = 'custom-v1')
                        : (r.layout = 'browser'));
                  try {
                    return new ne(a, r);
                  } catch (e) {
                    throw (n.removeChild(a), e);
                  }
                },
              },
              {
                key: 'createTransparentFrame',
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  Ze();
                  var t = document.createElement('iframe');
                  return (
                    (t.allow = 'microphone; camera; autoplay'),
                    (t.style.cssText =
                      '\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      border: 0;\n      pointer-events: none;\n    '),
                    document.body.appendChild(t),
                    e.layout || (e.layout = 'custom-v1'),
                    ne.wrap(t, e)
                  );
                },
              },
            ]),
            h()(ne, [
              {
                key: 'destroy',
                value:
                  ((ee = c()(function* () {
                    try {
                      [I, j].includes(this._meetingState) &&
                        (yield this.leave());
                    } catch (e) {}
                    var e = this._iframe;
                    if (e) {
                      var t = e.parentElement;
                      t && t.removeChild(e);
                    }
                    if (
                      (this._messageChannel.removeListener(
                        this.handleMessageFromCallMachine
                      ),
                      q())
                    ) {
                      var n = this.nativeUtils();
                      n.removeAudioFocusChangeListener(
                        this.handleNativeAudioFocusChange
                      ),
                        n.removeAppActiveStateChangeListener(
                          this.handleNativeAppActiveStateChange
                        );
                    }
                    this._callObjectMode &&
                      this.stopListeningForDeviceChanges(),
                      this.resetMeetingDependentVars();
                  })),
                  function () {
                    return ee.apply(this, arguments);
                  }),
              },
              {
                key: 'loadCss',
                value: function (e) {
                  var t = e.bodyClass,
                    n = e.cssFile,
                    r = e.cssText;
                  return (
                    Ze(),
                    this.sendMessageToCallMachine({
                      action: 'load-css',
                      cssFile: this.absoluteUrl(n),
                      bodyClass: t,
                      cssText: r,
                    }),
                    this
                  );
                },
              },
              {
                key: 'iframe',
                value: function () {
                  return Ze(), this._iframe;
                },
              },
              {
                key: 'meetingState',
                value: function () {
                  return this._meetingState;
                },
              },
              {
                key: 'accessState',
                value: function () {
                  if (!this._callObjectMode)
                    throw new Error(
                      'accessState() currently only supported in call object mode'
                    );
                  return this._accessState;
                },
              },
              {
                key: 'participants',
                value: function () {
                  return this._participants;
                },
              },
              {
                key: 'participantCounts',
                value: function () {
                  return this._participantCounts;
                },
              },
              {
                key: 'waitingParticipants',
                value: function () {
                  if (!this._callObjectMode)
                    throw new Error(
                      'waitingParticipants() currently only supported in call object mode'
                    );
                  return this._waitingParticipants;
                },
              },
              {
                key: 'validateParticipantProperties',
                value: function (e, t) {
                  for (var n in t) {
                    if (!He[n])
                      throw new Error(
                        'unrecognized updateParticipant property '.concat(n)
                      );
                    if (
                      He[n].validate &&
                      !He[n].validate(t[n], this, this._participants[e])
                    )
                      throw new Error(He[n].help);
                  }
                },
              },
              {
                key: 'updateParticipant',
                value: function (e, t) {
                  return (
                    this._participants.local &&
                      this._participants.local.session_id === e &&
                      (e = 'local'),
                    e &&
                      t &&
                      this._participants[e] &&
                      (this.validateParticipantProperties(e, t),
                      this.sendMessageToCallMachine({
                        action: 'update-participant',
                        id: e,
                        properties: t,
                      })),
                    this
                  );
                },
              },
              {
                key: 'updateParticipants',
                value: function (e) {
                  var t =
                    this._participants.local &&
                    this._participants.local.session_id;
                  for (var n in e)
                    n === t && (n = 'local'),
                      n && e[n] && (this._participants[n] || '*' === n)
                        ? this.validateParticipantProperties(n, e[n])
                        : (console.warn(
                            'unrecognized participant in updateParticipants: '.concat(
                              n
                            )
                          ),
                          delete e[n]);
                  return (
                    this.sendMessageToCallMachine({
                      action: 'update-participants',
                      participants: e,
                    }),
                    this
                  );
                },
              },
              {
                key: 'updateWaitingParticipant',
                value:
                  ((X = c()(function* () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : '',
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    if (!this._callObjectMode)
                      throw new Error(
                        'updateWaitingParticipant() currently only supported in call object mode'
                      );
                    if (this._meetingState !== I)
                      throw new Error(
                        'updateWaitingParticipant() only supported for joined meetings'
                      );
                    if ('string' != typeof t || 'object' !== S()(n))
                      throw new Error(
                        'updateWaitingParticipant() must take an id string and a updates object'
                      );
                    return new Promise(function (r, i) {
                      e.sendMessageToCallMachine(
                        {
                          action: 'daily-method-update-waiting-participant',
                          id: t,
                          updates: n,
                        },
                        function (e) {
                          e.error && i(e.error),
                            e.id ||
                              i(
                                new Error(
                                  'unknown error in updateWaitingParticipant()'
                                )
                              ),
                            r({ id: e.id });
                        }
                      );
                    });
                  })),
                  function () {
                    return X.apply(this, arguments);
                  }),
              },
              {
                key: 'updateWaitingParticipants',
                value:
                  ((Z = c()(function* () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                    if (!this._callObjectMode)
                      throw new Error(
                        'updateWaitingParticipants() currently only supported in call object mode'
                      );
                    if (this._meetingState !== I)
                      throw new Error(
                        'updateWaitingParticipants() only supported for joined meetings'
                      );
                    if ('object' !== S()(t))
                      throw new Error(
                        'updateWaitingParticipants() must take a mapping between ids and update objects'
                      );
                    return new Promise(function (n, r) {
                      e.sendMessageToCallMachine(
                        {
                          action: 'daily-method-update-waiting-participants',
                          updatesById: t,
                        },
                        function (e) {
                          e.error && r(e.error),
                            e.ids ||
                              r(
                                new Error(
                                  'unknown error in updateWaitingParticipants()'
                                )
                              ),
                            n({ ids: e.ids });
                        }
                      );
                    });
                  })),
                  function () {
                    return Z.apply(this, arguments);
                  }),
              },
              {
                key: 'requestAccess',
                value:
                  ((K = c()(function* () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      n = t.access,
                      r = void 0 === n ? { level: 'full' } : n,
                      i = t.name,
                      a = void 0 === i ? '' : i;
                    if (!this._callObjectMode)
                      throw new Error(
                        'requestAccess() currently only supported in call object mode'
                      );
                    if (this._meetingState !== I)
                      throw new Error(
                        'requestAccess() only supported for joined meetings'
                      );
                    return new Promise(function (t, n) {
                      e.sendMessageToCallMachine(
                        {
                          action: 'daily-method-request-access',
                          access: r,
                          name: a,
                        },
                        function (e) {
                          e.error && n(e.error),
                            e.access ||
                              n(new Error('unknown error in requestAccess()')),
                            t({ access: e.access, granted: e.granted });
                        }
                      );
                    });
                  })),
                  function () {
                    return K.apply(this, arguments);
                  }),
              },
              {
                key: 'localAudio',
                value: function () {
                  return this._participants.local
                    ? this._participants.local.audio
                    : null;
                },
              },
              {
                key: 'localVideo',
                value: function () {
                  return this._participants.local
                    ? this._participants.local.video
                    : null;
                },
              },
              {
                key: 'setLocalAudio',
                value: function (e) {
                  return (
                    this.sendMessageToCallMachine({
                      action: 'local-audio',
                      state: e,
                    }),
                    this
                  );
                },
              },
              {
                key: 'setLocalVideo',
                value: function (e) {
                  return (
                    this.sendMessageToCallMachine({
                      action: 'local-video',
                      state: e,
                    }),
                    this
                  );
                },
              },
              {
                key: 'getReceiveSettings',
                value:
                  ((G = c()(function* (e) {
                    var t = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      r = n.showInheritedValues,
                      i = void 0 !== r && r;
                    if (!this._callObjectMode)
                      throw new Error(
                        'getReceiveSettings() only supported in call object mode'
                      );
                    switch (S()(e)) {
                      case 'string':
                        return new Promise(function (n) {
                          t.sendMessageToCallMachine(
                            {
                              action: 'get-single-participant-receive-settings',
                              id: e,
                              showInheritedValues: i,
                            },
                            function (e) {
                              n(e.receiveSettings);
                            }
                          );
                        });
                      case 'undefined':
                        return this._receiveSettings;
                      default:
                        throw new Error(
                          'first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments'
                        );
                    }
                  })),
                  function (e) {
                    return G.apply(this, arguments);
                  }),
              },
              {
                key: 'updateReceiveSettings',
                value:
                  ((V = c()(function* (e) {
                    var t = this;
                    if (!this._callObjectMode)
                      throw new Error(
                        'updateReceiveSettings() only supported in call object mode'
                      );
                    if (!et(e, { allowAllParticipantsKey: !0 }))
                      throw new Error(rt({ allowAllParticipantsKey: !0 }));
                    if (this._meetingState !== I)
                      throw new Error(
                        'updateReceiveSettings() is only allowed when joined. To specify receive settings earlier, use the receiveSettings config property.'
                      );
                    return new Promise(function (n) {
                      t.sendMessageToCallMachine(
                        {
                          action: 'update-receive-settings',
                          receiveSettings: e,
                        },
                        function (e) {
                          n({ receiveSettings: e.receiveSettings });
                        }
                      );
                    });
                  })),
                  function (e) {
                    return V.apply(this, arguments);
                  }),
              },
              {
                key: 'getInputSettings',
                value: function () {
                  var e = this;
                  return new Promise(function (t) {
                    t(e._inputSettings);
                  });
                },
              },
              {
                key: 'updateInputSettings',
                value:
                  ((N = c()(function* (e) {
                    var t = this;
                    return new Promise(function (n, r) {
                      if (!tt(e)) return console.error(nt()), void r(nt());
                      t.sendMessageToCallMachine(
                        { action: 'update-input-settings', inputSettings: e },
                        function (e) {
                          e.error
                            ? r(e.error)
                            : n({ inputSettings: e.inputSettings });
                        }
                      );
                    });
                  })),
                  function (e) {
                    return N.apply(this, arguments);
                  }),
              },
              {
                key: 'setBandwidth',
                value: function (e) {
                  var t = e.kbs,
                    n = e.trackConstraints;
                  return (
                    Ze(),
                    this.sendMessageToCallMachine({
                      action: 'set-bandwidth',
                      kbs: t,
                      trackConstraints: n,
                    }),
                    this
                  );
                },
              },
              {
                key: 'getDailyLang',
                value: function () {
                  var e = this;
                  return (
                    Ze(),
                    new Promise(
                      (function () {
                        var t = c()(function* (t) {
                          e.sendMessageToCallMachine(
                            { action: 'get-daily-lang' },
                            function (e) {
                              delete e.action, delete e.callbackStamp, t(e);
                            }
                          );
                        });
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    )
                  );
                },
              },
              {
                key: 'setDailyLang',
                value: function (e) {
                  return (
                    Ze(),
                    this.sendMessageToCallMachine({
                      action: 'set-daily-lang',
                      lang: e,
                    }),
                    this
                  );
                },
              },
              {
                key: 'getMeetingSession',
                value:
                  ((O = c()(function* () {
                    var e = this;
                    if (this._meetingState !== I)
                      throw new Error(
                        'getMeetingSession() is only allowed when joined'
                      );
                    return new Promise(
                      (function () {
                        var t = c()(function* (t) {
                          e.sendMessageToCallMachine(
                            { action: 'get-meeting-session' },
                            function (e) {
                              delete e.action,
                                delete e.callbackStamp,
                                delete e.callFrameId,
                                t(e);
                            }
                          );
                        });
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    );
                  })),
                  function () {
                    return O.apply(this, arguments);
                  }),
              },
              {
                key: 'setUserName',
                value: function (e, t) {
                  var n = this;
                  return (
                    (this.properties.userName = e),
                    new Promise(
                      (function () {
                        var r = c()(function* (r) {
                          n.sendMessageToCallMachine(
                            {
                              action: 'set-user-name',
                              name: null != e ? e : '',
                              thisMeetingOnly:
                                q() || (!!t && !!t.thisMeetingOnly),
                            },
                            function (e) {
                              delete e.action, delete e.callbackStamp, r(e);
                            }
                          );
                        });
                        return function (e) {
                          return r.apply(this, arguments);
                        };
                      })()
                    )
                  );
                },
              },
              {
                key: 'startCamera',
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  if (!this._callObjectMode)
                    throw new Error(
                      'startCamera() currently only supported in call object mode'
                    );
                  if ([L, I].includes(this._meetingState))
                    throw new Error(
                      'startCamera() not supported after joining a meeting: did you mean to use setLocalAudio() and/or setLocalVideo() instead?'
                    );
                  return new Promise(
                    (function () {
                      var n = c()(function* (n, r) {
                        if (e.needsLoad())
                          try {
                            yield e.load(t);
                          } catch (e) {
                            r(e);
                          }
                        else e.validateProperties(t);
                        e.sendMessageToCallMachine(
                          {
                            action: 'start-camera',
                            properties: $e(e.properties),
                            preloadCache: $e(e._preloadCache),
                          },
                          function (e) {
                            delete e.action, delete e.callbackStamp, n(e);
                          }
                        );
                      });
                      return function (e, t) {
                        return n.apply(this, arguments);
                      };
                    })()
                  );
                },
              },
              {
                key: 'setCamera',
                value: function (e) {
                  var t = this;
                  if ((Xe(), this.needsLoad()))
                    throw new Error(
                      'Before you can invoke setCamera, first you need to invoke one of these methods: join, startCamera, or preAuth'
                    );
                  return new Promise(function (n, r) {
                    t.sendMessageToCallMachine(
                      { action: 'set-camera', cameraDeviceId: e },
                      function (e) {
                        n({ device: e.device });
                      }
                    );
                  });
                },
              },
              {
                key: 'setAudioDevice',
                value:
                  ((T = c()(function* (e) {
                    return (
                      Xe(),
                      this.nativeUtils().setAudioDevice(e),
                      { deviceId: yield this.nativeUtils().getAudioDevice() }
                    );
                  })),
                  function (e) {
                    return T.apply(this, arguments);
                  }),
              },
              {
                key: 'cycleCamera',
                value: function () {
                  var e = this;
                  return new Promise(function (t, n) {
                    e.sendMessageToCallMachine(
                      { action: 'cycle-camera' },
                      function (e) {
                        t({ device: e.device });
                      }
                    );
                  });
                },
              },
              {
                key: 'cycleMic',
                value: function () {
                  var e = this;
                  return (
                    Ze(),
                    new Promise(function (t, n) {
                      e.sendMessageToCallMachine(
                        { action: 'cycle-mic' },
                        function (e) {
                          t({ device: e.device });
                        }
                      );
                    })
                  );
                },
              },
              {
                key: 'getCameraFacingMode',
                value: function () {
                  var e = this;
                  return (
                    Xe(),
                    new Promise(function (t, n) {
                      e.sendMessageToCallMachine(
                        { action: 'get-camera-facing-mode' },
                        function (e) {
                          t(e.facingMode);
                        }
                      );
                    })
                  );
                },
              },
              {
                key: 'setInputDevices',
                value: function (e) {
                  var t = e.audioDeviceId,
                    n = e.videoDeviceId,
                    r = e.audioSource,
                    i = e.videoSource;
                  return (
                    console.warn(
                      'setInputDevices() is deprecated: instead use setInputDevicesAsync(), which returns a Promise'
                    ),
                    this.setInputDevicesAsync({
                      audioDeviceId: t,
                      videoDeviceId: n,
                      audioSource: r,
                      videoSource: i,
                    }),
                    this
                  );
                },
              },
              {
                key: 'setInputDevicesAsync',
                value:
                  ((M = c()(function* (e) {
                    var t = this,
                      n = e.audioDeviceId,
                      r = e.videoDeviceId,
                      i = e.audioSource,
                      a = e.videoSource;
                    return (
                      Ze(),
                      void 0 !== i && (n = i),
                      void 0 !== a && (r = a),
                      n && (this._preloadCache.audioDeviceId = n),
                      r && (this._preloadCache.videoDeviceId = r),
                      this._callObjectMode && this.needsLoad()
                        ? {
                            camera: {
                              deviceId: this._preloadCache.videoDeviceId,
                            },
                            mic: { deviceId: this._preloadCache.audioDeviceId },
                            speaker: {
                              deviceId: this._preloadCache.outputDeviceId,
                            },
                          }
                        : (n instanceof MediaStreamTrack &&
                            (n = 'daily-custom-track'),
                          r instanceof MediaStreamTrack &&
                            (r = 'daily-custom-track'),
                          new Promise(function (e) {
                            t.sendMessageToCallMachine(
                              {
                                action: 'set-input-devices',
                                audioDeviceId: n,
                                videoDeviceId: r,
                              },
                              function (n) {
                                delete n.action,
                                  delete n.callbackStamp,
                                  n.returnPreloadCache
                                    ? e({
                                        camera: {
                                          deviceId:
                                            t._preloadCache.videoDeviceId,
                                        },
                                        mic: {
                                          deviceId:
                                            t._preloadCache.audioDeviceId,
                                        },
                                        speaker: {
                                          deviceId:
                                            t._preloadCache.outputDeviceId,
                                        },
                                      })
                                    : e(n);
                              }
                            );
                          }))
                    );
                  })),
                  function (e) {
                    return M.apply(this, arguments);
                  }),
              },
              {
                key: 'setOutputDevice',
                value: function (e) {
                  var t = e.outputDeviceId;
                  return (
                    console.warn(
                      'setOutputDevice() is deprecated: instead use setOutputDeviceAsync(), which returns a Promise'
                    ),
                    this.setOutputDeviceAsync({ outputDeviceId: t }),
                    this
                  );
                },
              },
              {
                key: 'setOutputDeviceAsync',
                value:
                  ((w = c()(function* (e) {
                    var t = this,
                      n = e.outputDeviceId;
                    return (
                      Ze(),
                      n && (this._preloadCache.outputDeviceId = n),
                      this._callObjectMode && this.needsLoad()
                        ? {
                            camera: {
                              deviceId: this._preloadCache.videoDeviceId,
                            },
                            mic: { deviceId: this._preloadCache.audioDeviceId },
                            speaker: {
                              deviceId: this._preloadCache.outputDeviceId,
                            },
                          }
                        : new Promise(function (e) {
                            t.sendMessageToCallMachine(
                              {
                                action: 'set-output-device',
                                outputDeviceId: n,
                              },
                              function (n) {
                                delete n.action,
                                  delete n.callbackStamp,
                                  n.returnPreloadCache
                                    ? e({
                                        camera: {
                                          deviceId:
                                            t._preloadCache.videoDeviceId,
                                        },
                                        mic: {
                                          deviceId:
                                            t._preloadCache.audioDeviceId,
                                        },
                                        speaker: {
                                          deviceId:
                                            t._preloadCache.outputDeviceId,
                                        },
                                      })
                                    : e(n);
                              }
                            );
                          })
                    );
                  })),
                  function (e) {
                    return w.apply(this, arguments);
                  }),
              },
              {
                key: 'getInputDevices',
                value:
                  ((b = c()(function* () {
                    var e = this;
                    return this._callObjectMode && this.needsLoad()
                      ? {
                          camera: {
                            deviceId: this._preloadCache.videoDeviceId,
                          },
                          mic: { deviceId: this._preloadCache.audioDeviceId },
                          speaker: {
                            deviceId: this._preloadCache.outputDeviceId,
                          },
                        }
                      : new Promise(function (t, n) {
                          e.sendMessageToCallMachine(
                            { action: 'get-input-devices' },
                            function (n) {
                              delete n.action,
                                delete n.callbackStamp,
                                n.returnPreloadCache
                                  ? t({
                                      camera: {
                                        deviceId: e._preloadCache.videoDeviceId,
                                      },
                                      mic: {
                                        deviceId: e._preloadCache.audioDeviceId,
                                      },
                                      speaker: {
                                        deviceId:
                                          e._preloadCache.outputDeviceId,
                                      },
                                    })
                                  : t(n);
                            }
                          );
                        });
                  })),
                  function () {
                    return b.apply(this, arguments);
                  }),
              },
              {
                key: 'nativeInCallAudioMode',
                value: function () {
                  return Xe(), this._nativeInCallAudioMode;
                },
              },
              {
                key: 'setNativeInCallAudioMode',
                value: function (e) {
                  if ((Xe(), [Ue, Ye].includes(e))) {
                    if (e !== this._nativeInCallAudioMode)
                      return (
                        (this._nativeInCallAudioMode = e),
                        !this.disableReactNativeAutoDeviceManagement('audio') &&
                          this.isMeetingPendingOrOngoing(
                            this._meetingState,
                            this._isPreparingToJoin
                          ) &&
                          this.nativeUtils().setAudioMode(
                            this._nativeInCallAudioMode
                          ),
                        this
                      );
                  } else
                    console.error('invalid in-call audio mode specified: ', e);
                },
              },
              {
                key: 'preAuth',
                value:
                  ((_ = c()(function* () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {};
                    if (!this._callObjectMode)
                      throw new Error(
                        'preAuth() currently only supported in call object mode'
                      );
                    if ([L, I].includes(this._meetingState))
                      throw new Error(
                        'preAuth() not supported after joining a meeting'
                      );
                    if ((this.needsLoad() && (yield this.load(t)), !t.url))
                      throw new Error(
                        'preAuth() requires at least a url to be provided'
                      );
                    var n = ae(t.url),
                      r = ae(this.properties.url || this.properties.baseUrl);
                    if (n !== r)
                      throw new Error(
                        'url in preAuth() has a different bundle url than the one loaded ('
                          .concat(r, ' -> ')
                          .concat(n, ')')
                      );
                    return (
                      this.validateProperties(t),
                      (this.properties = Be(Be({}, this.properties), t)),
                      new Promise(function (t, n) {
                        e.sendMessageToCallMachine(
                          {
                            action: 'daily-method-preauth',
                            properties: $e(e.properties),
                          },
                          function (r) {
                            return r.error
                              ? n(r.error)
                              : r.access
                              ? ((e._didPreAuth = !0),
                                void t({ access: r.access }))
                              : n(new Error('unknown error in preAuth()'));
                          }
                        );
                      })
                    );
                  })),
                  function () {
                    return _.apply(this, arguments);
                  }),
              },
              {
                key: 'load',
                value:
                  ((y = c()(function* (e) {
                    var t = this;
                    if (this.needsLoad()) {
                      if (
                        (e &&
                          (this.validateProperties(e),
                          (this.properties = Be(Be({}, this.properties), e))),
                        !this._callObjectMode && !this.properties.url)
                      )
                        throw new Error(
                          "can't load iframe meeting because url property isn't set"
                        );
                      this.updateMeetingState(j);
                      try {
                        this.emit('loading', { action: 'loading' });
                      } catch (e) {
                        console.log("could not emit 'loading'", e);
                      }
                      return this._callObjectMode
                        ? new Promise(function (e, n) {
                            t._callObjectLoader.cancel(),
                              t._callObjectLoader.load(
                                t.properties.url || t.properties.baseUrl,
                                t._callFrameId,
                                t.properties.dailyConfig &&
                                  t.properties.dailyConfig.avoidEval,
                                function (n) {
                                  t.updateMeetingState('loaded'),
                                    n && t.emit('loaded', { action: 'loaded' }),
                                    e();
                                },
                                function (e, r) {
                                  t.emit('load-attempt-failed', {
                                    action: 'load-attempt-failed',
                                    errorMsg: e,
                                  }),
                                    r ||
                                      (t.updateMeetingState(D),
                                      t.resetMeetingDependentVars(),
                                      t.emit('error', {
                                        action: 'error',
                                        errorMsg: e,
                                      }),
                                      n(e));
                                }
                              );
                          })
                        : ((this._iframe.src = this.assembleMeetingUrl()),
                          new Promise(function (e, n) {
                            t._loadedCallback = function (r) {
                              if (t._meetingState !== D) {
                                for (var i in (t.updateMeetingState('loaded'),
                                (t.properties.cssFile ||
                                  t.properties.cssText) &&
                                  t.loadCss(t.properties),
                                t._inputEventsOn))
                                  t.sendMessageToCallMachine({
                                    action: 'register-input-handler',
                                    on: i,
                                  });
                                e();
                              } else n(r);
                            };
                          }));
                    }
                  })),
                  function (e) {
                    return y.apply(this, arguments);
                  }),
              },
              {
                key: 'join',
                value:
                  ((g = c()(function* () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      n = !1;
                    if (this.needsLoad()) {
                      this.updateIsPreparingToJoin(!0);
                      try {
                        yield this.load(t);
                      } catch (e) {
                        return (
                          this.updateIsPreparingToJoin(!1), Promise.reject(e)
                        );
                      }
                    } else {
                      if (
                        ((n = !(
                          !this.properties.cssFile && !this.properties.cssText
                        )),
                        this._didPreAuth)
                      ) {
                        if (t.url && t.url !== this.properties.url)
                          return (
                            console.error(
                              'url in join() is different than the one used in preAuth()'
                            ),
                            this.updateIsPreparingToJoin(!1),
                            Promise.reject()
                          );
                        if (t.token && t.token !== this.properties.token)
                          return (
                            console.error(
                              'token in join() is different than the one used in preAuth()'
                            ),
                            this.updateIsPreparingToJoin(!1),
                            Promise.reject()
                          );
                      }
                      if (t.url)
                        if (this._callObjectMode) {
                          var r = ae(t.url),
                            i = ae(
                              this.properties.url || this.properties.baseUrl
                            );
                          if (r !== i)
                            return (
                              console.error(
                                'url in join() has a different bundle url than the one loaded ('
                                  .concat(i, ' -> ')
                                  .concat(r, ')')
                              ),
                              this.updateIsPreparingToJoin(!1),
                              Promise.reject()
                            );
                          this.properties.url = t.url;
                        } else if (t.url && t.url !== this.properties.url)
                          return (
                            console.error(
                              'url in join() is different than the one used in load() ('
                                .concat(this.properties.url, ' -> ')
                                .concat(t.url, ')')
                            ),
                            this.updateIsPreparingToJoin(!1),
                            Promise.reject()
                          );
                      this.validateProperties(t),
                        (this.properties = Be(Be({}, this.properties), t));
                    }
                    if (
                      (void 0 !== t.showLocalVideo &&
                        (this._callObjectMode
                          ? console.error(
                              'showLocalVideo is not available in callObject mode'
                            )
                          : (this._showLocalVideo = !!t.showLocalVideo)),
                      void 0 !== t.showParticipantsBar &&
                        (this._callObjectMode
                          ? console.error(
                              'showParticipantsBar is not available in callObject mode'
                            )
                          : (this._showParticipantsBar =
                              !!t.showParticipantsBar)),
                      this._meetingState === I || this._meetingState === L)
                    )
                      return (
                        console.warn(
                          'already joined meeting, call leave() before joining again'
                        ),
                        void this.updateIsPreparingToJoin(!1)
                      );
                    this.updateMeetingState(L, !1);
                    try {
                      this.emit('joining-meeting', {
                        action: 'joining-meeting',
                      });
                    } catch (e) {
                      console.log("could not emit 'joining-meeting'", e);
                    }
                    return (
                      this.sendMessageToCallMachine({
                        action: 'join-meeting',
                        properties: $e(this.properties),
                        preloadCache: $e(this._preloadCache),
                      }),
                      new Promise(function (t, r) {
                        e._joinedCallback = function (i, a) {
                          if (e._meetingState !== D) {
                            if ((e.updateMeetingState(I), i))
                              for (var o in i)
                                e._callObjectMode &&
                                  (xe(i[o]),
                                  De(i[o]),
                                  Re(i[o], e._participants[o])),
                                  (e._participants[o] = Be({}, i[o])),
                                  e.toggleParticipantAudioBasedOnNativeAudioFocus();
                            n && e.loadCss(e.properties), t(i);
                          } else r(a);
                        };
                      })
                    );
                  })),
                  function () {
                    return g.apply(this, arguments);
                  }),
              },
              {
                key: 'leave',
                value:
                  ((v = c()(function* () {
                    var e = this;
                    return new Promise(function (t, n) {
                      if (e._callObjectLoader && !e._callObjectLoader.loaded) {
                        e._callObjectLoader.cancel(),
                          e.updateMeetingState(x),
                          e.resetMeetingDependentVars();
                        try {
                          e.emit(x, { action: x });
                        } catch (e) {
                          console.log("could not emit 'left-meeting'", e);
                        }
                        t();
                      } else
                        e._meetingState === x || e._meetingState === D
                          ? t()
                          : ((e._leftCallback = function () {
                              e._meetingState !== D && e.updateMeetingState(x),
                                e.resetMeetingDependentVars(),
                                t();
                            }),
                            e.sendMessageToCallMachine({
                              action: 'leave-meeting',
                            }));
                    });
                  })),
                  function () {
                    return v.apply(this, arguments);
                  }),
              },
              {
                key: 'startScreenShare',
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  Ze(),
                    e.mediaStream &&
                      ((this._preloadCache.screenMediaStream = e.mediaStream),
                      (e.mediaStream = 'daily-custom-track')),
                    this.sendMessageToCallMachine({
                      action: 'local-screen-start',
                      captureOptions: e,
                    });
                },
              },
              {
                key: 'stopScreenShare',
                value: function () {
                  Ze(),
                    this.sendMessageToCallMachine({
                      action: 'local-screen-stop',
                    });
                },
              },
              {
                key: 'startRecording',
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  this.sendMessageToCallMachine(
                    Be({ action: 'local-recording-start' }, e)
                  );
                },
              },
              {
                key: 'updateRecording',
                value: function (e) {
                  var t = e.layout,
                    n = void 0 === t ? { preset: 'default' } : t;
                  this.sendMessageToCallMachine({
                    action: 'daily-method-update-recording',
                    layout: n,
                  });
                },
              },
              {
                key: 'stopRecording',
                value: function () {
                  this.sendMessageToCallMachine({
                    action: 'local-recording-stop',
                  });
                },
              },
              {
                key: 'startLiveStreaming',
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  this.sendMessageToCallMachine(
                    Be({ action: 'daily-method-start-live-streaming' }, e)
                  );
                },
              },
              {
                key: 'updateLiveStreaming',
                value: function (e) {
                  var t = e.layout,
                    n = void 0 === t ? { preset: 'default' } : t;
                  this.sendMessageToCallMachine({
                    action: 'daily-method-update-live-streaming',
                    layout: n,
                  });
                },
              },
              {
                key: 'addLiveStreamingEndpoints',
                value: function (e) {
                  var t = e.endpoints;
                  this.sendMessageToCallMachine({
                    action: 'daily-method-update-live-streaming-endpoints',
                    endpointsOp: U,
                    endpoints: t,
                  });
                },
              },
              {
                key: 'removeLiveStreamingEndpoints',
                value: function (e) {
                  var t = e.endpoints;
                  this.sendMessageToCallMachine({
                    action: 'daily-method-update-live-streaming-endpoints',
                    endpointsOp: Y,
                    endpoints: t,
                  });
                },
              },
              {
                key: 'stopLiveStreaming',
                value: function () {
                  this.sendMessageToCallMachine({
                    action: 'daily-method-stop-live-streaming',
                  });
                },
              },
              {
                key: 'startRemoteMediaPlayer',
                value:
                  ((p = c()(function* (e) {
                    var t = this,
                      n = e.url,
                      r = e.settings,
                      i = void 0 === r ? { state: R.PLAY } : r;
                    try {
                      !(function (e) {
                        if ('string' != typeof e)
                          throw new Error(
                            'url parameter must be "string" type'
                          );
                      })(n),
                        at(i),
                        (function (e) {
                          for (var t in e)
                            if (!Ge.includes(t))
                              throw new Error(
                                'Invalid key '
                                  .concat(t, ', valid keys are: ')
                                  .concat(Ge)
                              );
                          if (e.simulcastEncodings) {
                            if (!(e.simulcastEncodings instanceof Array))
                              throw new Error(
                                'simulcastEncodings must be "Array"'
                              );
                            if (!ot(e.simulcastEncodings.length, 0, 3))
                              throw new Error(
                                '"simulcastEncodings" not in range. valid range 1 to 3 layers'
                              );
                            e.simulcastEncodings.every(function (e) {
                              for (var t in e) {
                                if (!qe.hasOwnProperty(t))
                                  throw new Error(
                                    'Invalid key '.concat(
                                      t,
                                      ', valid keys are:'
                                    ) + Object.keys(qe)
                                  );
                                if ('number' != typeof e[t])
                                  throw new Error(
                                    'simulcastEncodings[].'.concat(
                                      t,
                                      ' must be "number"'
                                    )
                                  );
                                var n = qe[t],
                                  r = n.min,
                                  i = n.max;
                                if (!ot(e[t], r, i))
                                  throw new Error(
                                    'simulcastEncodings[].'
                                      .concat(
                                        t,
                                        ' value not in range. valid range:        '
                                      )
                                      .concat(r, ' to ')
                                      .concat(i)
                                  );
                              }
                              if (!e.hasOwnProperty('maxBitrate'))
                                throw new Error(
                                  'simulcastEncodings[].maxBitrate is not specified'
                                );
                            });
                          }
                        })(i);
                    } catch (e) {
                      throw (
                        (console.error('invalid argument Error: '.concat(e)),
                        console.error(
                          'startRemoteMediaPlayer arguments must be of the form: \n  { url: "playback url", \n  settings?: \n  {state: "play"|"pause", simulcastEncodings?: [{}] } }'
                        ),
                        e)
                      );
                    }
                    return new Promise(
                      (function () {
                        var e = c()(function* (e, r) {
                          t.sendMessageToCallMachine(
                            {
                              action: 'daily-method-start-remote-media-player',
                              url: n,
                              settings: i,
                            },
                            function (t) {
                              t.error
                                ? r({ error: t.error, errorMsg: t.errorMsg })
                                : e({
                                    session_id: t.session_id,
                                    remoteMediaPlayerState: {
                                      state: t.state,
                                      settings: t.settings,
                                    },
                                  });
                            }
                          );
                        });
                        return function (t, n) {
                          return e.apply(this, arguments);
                        };
                      })()
                    );
                  })),
                  function (e) {
                    return p.apply(this, arguments);
                  }),
              },
              {
                key: 'stopRemoteMediaPlayer',
                value:
                  ((d = c()(function* (e) {
                    var t = this;
                    if ('string' != typeof e)
                      throw new Error(' remotePlayerID must be of type string');
                    return new Promise(
                      (function () {
                        var n = c()(function* (n, r) {
                          t.sendMessageToCallMachine(
                            {
                              action: 'daily-method-stop-remote-media-player',
                              session_id: e,
                            },
                            function (e) {
                              e.error
                                ? r({ error: e.error, errorMsg: e.errorMsg })
                                : n();
                            }
                          );
                        });
                        return function (e, t) {
                          return n.apply(this, arguments);
                        };
                      })()
                    );
                  })),
                  function (e) {
                    return d.apply(this, arguments);
                  }),
              },
              {
                key: 'updateRemoteMediaPlayer',
                value:
                  ((u = c()(function* (e) {
                    var t = this,
                      n = e.session_id,
                      r = e.settings;
                    try {
                      at(r);
                    } catch (e) {
                      throw (
                        (console.error('invalid argument Error: '.concat(e)),
                        console.error(
                          'updateRemoteMediaPlayer arguments must be of the form: \n  session_id: "participant session", \n  { settings?: {state: "play"|"pause"} }'
                        ),
                        e)
                      );
                    }
                    return new Promise(
                      (function () {
                        var e = c()(function* (e, i) {
                          t.sendMessageToCallMachine(
                            {
                              action: 'daily-method-update-remote-media-player',
                              session_id: n,
                              settings: r,
                            },
                            function (t) {
                              t.error
                                ? i({ error: t.error, errorMsg: t.errorMsg })
                                : e({
                                    session_id: t.session_id,
                                    remoteMediaPlayerState: {
                                      state: t.state,
                                      settings: t.settings,
                                    },
                                  });
                            }
                          );
                        });
                        return function (t, n) {
                          return e.apply(this, arguments);
                        };
                      })()
                    );
                  })),
                  function (e) {
                    return u.apply(this, arguments);
                  }),
              },
              {
                key: 'startTranscription',
                value: function (e) {
                  this.sendMessageToCallMachine(
                    Be({ action: 'daily-method-start-transcription' }, e)
                  );
                },
              },
              {
                key: 'stopTranscription',
                value: function () {
                  this.sendMessageToCallMachine({
                    action: 'daily-method-stop-transcription',
                  });
                },
              },
              {
                key: 'getNetworkStats',
                value: function () {
                  var e = this;
                  if (this._meetingState !== I) {
                    return { stats: { latest: {} } };
                  }
                  return new Promise(function (t, n) {
                    e.sendMessageToCallMachine(
                      { action: 'get-calc-stats' },
                      function (n) {
                        t(Be({ stats: n.stats }, e._network));
                      }
                    );
                  });
                },
              },
              {
                key: 'getActiveSpeaker',
                value: function () {
                  return Ze(), this._activeSpeaker;
                },
              },
              {
                key: 'setActiveSpeakerMode',
                value: function (e) {
                  return (
                    Ze(),
                    this.sendMessageToCallMachine({
                      action: 'set-active-speaker-mode',
                      enabled: e,
                    }),
                    this
                  );
                },
              },
              {
                key: 'activeSpeakerMode',
                value: function () {
                  return Ze(), this._activeSpeakerMode;
                },
              },
              {
                key: 'subscribeToTracksAutomatically',
                value: function () {
                  return this._preloadCache.subscribeToTracksAutomatically;
                },
              },
              {
                key: 'setSubscribeToTracksAutomatically',
                value: function (e) {
                  if (this._meetingState !== I)
                    throw new Error(
                      'setSubscribeToTracksAutomatically() is only allowed when joined'
                    );
                  return (
                    (this._preloadCache.subscribeToTracksAutomatically = e),
                    this.sendMessageToCallMachine({
                      action: 'daily-method-subscribe-to-tracks-automatically',
                      enabled: e,
                    }),
                    this
                  );
                },
              },
              {
                key: 'enumerateDevices',
                value:
                  ((s = c()(function* () {
                    var e = this;
                    return this._callObjectMode
                      ? {
                          devices:
                            (yield navigator.mediaDevices.enumerateDevices()).map(
                              function (e) {
                                return JSON.parse(JSON.stringify(e));
                              }
                            ),
                        }
                      : new Promise(function (t, n) {
                          e.sendMessageToCallMachine(
                            { action: 'enumerate-devices' },
                            function (e) {
                              t({ devices: e.devices });
                            }
                          );
                        });
                  })),
                  function () {
                    return s.apply(this, arguments);
                  }),
              },
              {
                key: 'sendAppMessage',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : '*';
                  if (JSON.stringify(e).length > 4096)
                    throw new Error('Message data too large. Max size is 4096');
                  return (
                    this.sendMessageToCallMachine({
                      action: 'app-msg',
                      data: e,
                      to: t,
                    }),
                    this
                  );
                },
              },
              {
                key: 'addFakeParticipant',
                value: function (e) {
                  return (
                    Ze(),
                    this.sendMessageToCallMachine(
                      Be({ action: 'add-fake-participant' }, e)
                    ),
                    this
                  );
                },
              },
              {
                key: 'setShowNamesMode',
                value: function (e) {
                  return (
                    Ze(),
                    e && 'always' !== e && 'never' !== e
                      ? (console.error(
                          'setShowNamesMode argument should be "always", "never", or false'
                        ),
                        this)
                      : (this.sendMessageToCallMachine({
                          action: 'set-show-names',
                          mode: e,
                        }),
                        this)
                  );
                },
              },
              {
                key: 'setShowLocalVideo',
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  return (
                    Ze(),
                    'boolean' != typeof e
                      ? (console.error(
                          'setShowLocalVideo only accepts a boolean value'
                        ),
                        this)
                      : this._callObjectMode
                      ? (console.error(
                          'setShowLocalVideo is not available in callObject mode'
                        ),
                        this)
                      : this._meetingState !== I
                      ? (console.error(
                          'the meeting must be joined before calling setShowLocalVideo'
                        ),
                        this)
                      : (this.sendMessageToCallMachine({
                          action: 'set-show-local-video',
                          show: e,
                        }),
                        (this._showLocalVideo = e),
                        this)
                  );
                },
              },
              {
                key: 'showLocalVideo',
                value: function () {
                  return (
                    Ze(),
                    this._callObjectMode
                      ? (console.error(
                          'showLocalVideo is not available in callObject mode'
                        ),
                        this)
                      : this._showLocalVideo
                  );
                },
              },
              {
                key: 'setShowParticipantsBar',
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  return (
                    Ze(),
                    'boolean' != typeof e
                      ? (console.error(
                          'setShowParticipantsBar only accepts a boolean value'
                        ),
                        this)
                      : this._callObjectMode
                      ? (console.error(
                          'setShowParticipantsBar is not available in callObject mode'
                        ),
                        this)
                      : this._meetingState !== I
                      ? (console.error(
                          'the meeting must be joined before calling setShowParticipantsBar'
                        ),
                        this)
                      : (this.sendMessageToCallMachine({
                          action: 'set-show-participants-bar',
                          show: e,
                        }),
                        (this._showParticipantsBar = e),
                        this)
                  );
                },
              },
              {
                key: 'showParticipantsBar',
                value: function () {
                  return (
                    Ze(),
                    this._callObjectMode
                      ? (console.error(
                          'showParticipantsBar is not available in callObject mode'
                        ),
                        this)
                      : this._showParticipantsBar
                  );
                },
              },
              {
                key: 'customTrayButtons',
                value: function () {
                  return (
                    Ze(),
                    this._callObjectMode
                      ? (console.error(
                          'customTrayButtons is not available in callObject mode'
                        ),
                        this)
                      : this._customTrayButtons
                  );
                },
              },
              {
                key: 'updateCustomTrayButtons',
                value: function (e) {
                  return (
                    Ze(),
                    this._callObjectMode
                      ? (console.error(
                          'updateCustomTrayButtons is not available in callObject mode'
                        ),
                        this)
                      : this._meetingState !== I
                      ? (console.error(
                          'the meeting must be joined before calling updateCustomTrayButtons'
                        ),
                        this)
                      : it(e)
                      ? (this.sendMessageToCallMachine({
                          action: 'update-custom-tray-buttons',
                          btns: e,
                        }),
                        (this._customTrayButtons = e),
                        this)
                      : (console.error(
                          'updateCustomTrayButtons only accepts a dictionary of the type '.concat(
                            JSON.stringify(ze)
                          )
                        ),
                        this)
                  );
                },
              },
              {
                key: 'theme',
                value: function () {
                  return this._callObjectMode
                    ? (console.error(
                        'theme is not available in callObject mode'
                      ),
                      this)
                    : this.properties.theme;
                },
              },
              {
                key: 'setTheme',
                value: function (e) {
                  var t = this;
                  return new Promise(function (n, r) {
                    if (t._callObjectMode)
                      r('setTheme is not available in callObject mode');
                    else
                      try {
                        t.validateProperties({ theme: e }),
                          (t.properties.theme = Be({}, e)),
                          t.sendMessageToCallMachine({
                            action: 'set-theme',
                            theme: t.properties.theme,
                          });
                        try {
                          t.emit('theme-updated', {
                            action: 'theme-updated',
                            theme: t.properties.theme,
                          });
                        } catch (e) {
                          console.log("could not emit 'theme-updated'", e);
                        }
                        n(t.properties.theme);
                      } catch (e) {
                        r(e);
                      }
                  });
                },
              },
              {
                key: 'detectAllFaces',
                value: function () {
                  var e = this;
                  return (
                    Ze(),
                    new Promise(function (t, n) {
                      e.sendMessageToCallMachine(
                        { action: 'detect-all-faces' },
                        function (e) {
                          delete e.action, delete e.callbackStamp, t(e);
                        }
                      );
                    })
                  );
                },
              },
              {
                key: 'requestFullscreen',
                value:
                  ((a = c()(function* () {
                    if (
                      (Ze(), this._iframe && !document.fullscreenElement && z())
                    )
                      try {
                        (yield this._iframe.requestFullscreen)
                          ? this._iframe.requestFullscreen()
                          : this._iframe.webkitRequestFullscreen();
                      } catch (e) {
                        console.log('could not make video call fullscreen', e);
                      }
                  })),
                  function () {
                    return a.apply(this, arguments);
                  }),
              },
              {
                key: 'exitFullscreen',
                value: function () {
                  Ze(),
                    document.fullscreenElement
                      ? document.exitFullscreen()
                      : document.webkitFullscreenElement &&
                        document.webkitExitFullscreen();
                },
              },
              {
                key: 'room',
                value:
                  ((i = c()(function* () {
                    var e = this,
                      t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      n = t.includeRoomConfigDefaults,
                      r = void 0 === n || n;
                    return 'unknown' === this._accessState.access ||
                      this.needsLoad()
                      ? this.properties.url
                        ? { roomUrlPendingJoin: this.properties.url }
                        : null
                      : new Promise(function (t, n) {
                          e.sendMessageToCallMachine(
                            {
                              action: 'lib-room-info',
                              includeRoomConfigDefaults: r,
                            },
                            function (e) {
                              delete e.action, delete e.callbackStamp, t(e);
                            }
                          );
                        });
                  })),
                  function () {
                    return i.apply(this, arguments);
                  }),
              },
              {
                key: 'geo',
                value:
                  ((r = c()(function* () {
                    return new Promise(
                      (function () {
                        var e = c()(function* (e, t) {
                          try {
                            var n = yield fetch(
                              'https://gs.daily.co/_ks_/x-swsl/:'
                            );
                            e({ current: (yield n.json()).geo });
                          } catch (t) {
                            console.error('geo lookup failed', t),
                              e({ current: '' });
                          }
                        });
                        return function (t, n) {
                          return e.apply(this, arguments);
                        };
                      })()
                    );
                  })),
                  function () {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: 'setNetworkTopology',
                value:
                  ((n = c()(function* (e) {
                    var t = this;
                    return (
                      Ze(),
                      new Promise(
                        (function () {
                          var n = c()(function* (n, r) {
                            t.sendMessageToCallMachine(
                              { action: 'set-network-topology', opts: e },
                              function (e) {
                                e.error
                                  ? r({ error: e.error })
                                  : n({ workerId: e.workerId });
                              }
                            );
                          });
                          return function (e, t) {
                            return n.apply(this, arguments);
                          };
                        })()
                      )
                    );
                  })),
                  function (e) {
                    return n.apply(this, arguments);
                  }),
              },
              {
                key: 'getNetworkTopology',
                value:
                  ((t = c()(function* () {
                    var e = this;
                    return new Promise(
                      (function () {
                        var t = c()(function* (t, n) {
                          e.sendMessageToCallMachine(
                            { action: 'get-network-topology' },
                            function (e) {
                              e.error
                                ? n({ error: e.error })
                                : t({ topology: e.topology });
                            }
                          );
                        });
                        return function (e, n) {
                          return t.apply(this, arguments);
                        };
                      })()
                    );
                  })),
                  function () {
                    return t.apply(this, arguments);
                  }),
              },
              {
                key: 'setPlayNewParticipantSound',
                value: function (e) {
                  if ((Ze(), 'number' != typeof e && !0 !== e && !1 !== e))
                    throw new Error(
                      'argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is '.concat(
                        e
                      )
                    );
                  this.sendMessageToCallMachine({
                    action: 'daily-method-set-play-ding',
                    arg: e,
                  });
                },
              },
              {
                key: 'on',
                value: function (e, t) {
                  return (
                    (this._inputEventsOn[e] = {}),
                    this.sendMessageToCallMachine({
                      action: 'register-input-handler',
                      on: e,
                    }),
                    E.a.prototype.on.call(this, e, t)
                  );
                },
              },
              {
                key: 'once',
                value: function (e, t) {
                  return (
                    (this._inputEventsOn[e] = {}),
                    this.sendMessageToCallMachine({
                      action: 'register-input-handler',
                      on: e,
                    }),
                    E.a.prototype.once.call(this, e, t)
                  );
                },
              },
              {
                key: 'off',
                value: function (e, t) {
                  return (
                    delete this._inputEventsOn[e],
                    this.sendMessageToCallMachine({
                      action: 'register-input-handler',
                      off: e,
                    }),
                    E.a.prototype.off.call(this, e, t)
                  );
                },
              },
              {
                key: 'validateProperties',
                value: function (e) {
                  for (var t in e) {
                    if (!Ke[t])
                      throw new Error("unrecognized property '".concat(t, "'"));
                    if (Ke[t].validate && !Ke[t].validate(e[t], this))
                      throw new Error(
                        "property '".concat(t, "': ").concat(Ke[t].help)
                      );
                  }
                },
              },
              {
                key: 'assembleMeetingUrl',
                value: function () {
                  var e = Be(
                      Be({}, this.properties),
                      {},
                      {
                        emb: this._callFrameId,
                        embHref: encodeURIComponent(window.location.href),
                      }
                    ),
                    t = e.url.match(/\?/) ? '&' : '?';
                  return (
                    e.url +
                    t +
                    Object.keys(Ke)
                      .filter(function (t) {
                        return Ke[t].queryString && void 0 !== e[t];
                      })
                      .map(function (t) {
                        return ''.concat(Ke[t].queryString, '=').concat(e[t]);
                      })
                      .join('&')
                  );
                },
              },
              {
                key: 'needsLoad',
                value: function () {
                  return [P, j, x, D].includes(this._meetingState);
                },
              },
              {
                key: 'sendMessageToCallMachine',
                value: function (e, t) {
                  this._messageChannel.sendMessageToCallMachine(
                    e,
                    t,
                    this._iframe,
                    this._callFrameId
                  );
                },
              },
              {
                key: 'forwardPackagedMessageToCallMachine',
                value: function (e) {
                  this._messageChannel.forwardPackagedMessageToCallMachine(
                    e,
                    this._iframe,
                    this._callFrameId
                  );
                },
              },
              {
                key: 'addListenerForPackagedMessagesFromCallMachine',
                value: function (e) {
                  return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(
                    e,
                    this._callFrameId
                  );
                },
              },
              {
                key: 'removeListenerForPackagedMessagesFromCallMachine',
                value: function (e) {
                  this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(
                    e
                  );
                },
              },
              {
                key: 'handleMessageFromCallMachine',
                value: function (e) {
                  switch (e.action) {
                    case 'iframe-ready-for-launch-config':
                      this.sendMessageToCallMachine(
                        Be({ action: 'iframe-launch-config' }, this.properties)
                      );
                      break;
                    case 'loaded':
                      this._loadedCallback &&
                        (this._loadedCallback(), (this._loadedCallback = null));
                      try {
                        this.emit(e.action, e);
                      } catch (t) {
                        console.log('could not emit', e, t);
                      }
                      break;
                    case 'joined-meeting':
                      this._joinedCallback &&
                        (this._joinedCallback(e.participants),
                        (this._joinedCallback = null));
                      try {
                        this.emit(e.action, e);
                      } catch (t) {
                        console.log('could not emit', e, t);
                      }
                      break;
                    case 'participant-joined':
                    case 'participant-updated':
                      if (this._meetingState === x) return;
                      if (e.participant && e.participant.session_id) {
                        var t = e.participant.local
                          ? 'local'
                          : e.participant.session_id;
                        this._callObjectMode &&
                          (xe(e.participant),
                          De(e.participant),
                          Re(e.participant, this._participants[t]));
                        try {
                          this.maybeEventTrackStopped(
                            this._participants[t],
                            e.participant,
                            'audioTrack'
                          ),
                            this.maybeEventTrackStopped(
                              this._participants[t],
                              e.participant,
                              'videoTrack'
                            ),
                            this.maybeEventTrackStopped(
                              this._participants[t],
                              e.participant,
                              'screenVideoTrack'
                            ),
                            this.maybeEventTrackStopped(
                              this._participants[t],
                              e.participant,
                              'screenAudioTrack'
                            ),
                            this.maybeEventTrackStarted(
                              this._participants[t],
                              e.participant,
                              'audioTrack'
                            ),
                            this.maybeEventTrackStarted(
                              this._participants[t],
                              e.participant,
                              'videoTrack'
                            ),
                            this.maybeEventTrackStarted(
                              this._participants[t],
                              e.participant,
                              'screenVideoTrack'
                            ),
                            this.maybeEventTrackStarted(
                              this._participants[t],
                              e.participant,
                              'screenAudioTrack'
                            ),
                            this.maybeEventTrackStoppedForCustomTracks(
                              this._participants[t],
                              e.participant
                            ),
                            this.maybeEventTrackStartedForCustomTracks(
                              this._participants[t],
                              e.participant
                            ),
                            this.maybeEventRecordingStopped(
                              this._participants[t],
                              e.participant
                            ),
                            this.maybeEventRecordingStarted(
                              this._participants[t],
                              e.participant
                            );
                        } catch (e) {
                          console.error('track events error', e);
                        }
                        if (
                          !this.compareEqualForParticipantUpdateEvent(
                            e.participant,
                            this._participants[t]
                          )
                        ) {
                          (this._participants[t] = Be({}, e.participant)),
                            this.toggleParticipantAudioBasedOnNativeAudioFocus();
                          try {
                            this.emit(e.action, e);
                          } catch (t) {
                            console.log('could not emit', e, t);
                          }
                        }
                      }
                      break;
                    case 'participant-left':
                      if (e.participant && e.participant.session_id) {
                        var n = this._participants[e.participant.session_id];
                        n &&
                          (this.maybeEventTrackStopped(n, null, 'audioTrack'),
                          this.maybeEventTrackStopped(n, null, 'videoTrack'),
                          this.maybeEventTrackStopped(
                            n,
                            null,
                            'screenVideoTrack'
                          ),
                          this.maybeEventTrackStopped(
                            n,
                            null,
                            'screenAudioTrack'
                          ),
                          this.maybeEventTrackStoppedForCustomTracks(n, null)),
                          delete this._participants[e.participant.session_id];
                        try {
                          this.emit(e.action, e);
                        } catch (t) {
                          console.log('could not emit', e, t);
                        }
                      }
                      break;
                    case 'participant-counts-updated':
                      if (
                        !Object(A.deepEqual)(
                          this._participantCounts,
                          e.participantCounts
                        )
                      ) {
                        this._participantCounts = e.participantCounts;
                        try {
                          this.emit(e.action, e);
                        } catch (t) {
                          console.log('could not emit', e, t);
                        }
                      }
                      break;
                    case 'access-state-updated':
                      var r = { access: e.access };
                      if (
                        (e.awaitingAccess &&
                          (r.awaitingAccess = e.awaitingAccess),
                        !Object(A.deepEqual)(this._accessState, r))
                      ) {
                        this._accessState = r;
                        try {
                          this.emit(e.action, e);
                        } catch (t) {
                          console.log('could not emit', e, t);
                        }
                      }
                      break;
                    case 'meeting-session-updated':
                      if (e.meetingSession)
                        try {
                          delete e.callFrameId, this.emit(e.action, e);
                        } catch (t) {
                          console.log('could not emit', e, t);
                        }
                      break;
                    case 'error':
                      this._iframe &&
                        !e.preserveIframe &&
                        (this._iframe.src = ''),
                        this.updateMeetingState(D),
                        this.resetMeetingDependentVars(),
                        this._loadedCallback &&
                          (this._loadedCallback(e.errorMsg),
                          (this._loadedCallback = null)),
                        this._joinedCallback &&
                          (this._joinedCallback(null, e.errorMsg),
                          (this._joinedCallback = null));
                      try {
                        e.preserveIframe;
                        var i = o()(e, ['preserveIframe']);
                        this.emit(e.action, i);
                      } catch (t) {
                        console.log('could not emit', e, t);
                      }
                      break;
                    case 'left-meeting':
                      this._leftCallback &&
                        (this._leftCallback(), (this._leftCallback = null));
                      try {
                        this.emit(e.action, e);
                      } catch (t) {
                        console.log('could not emit', e, t);
                      }
                      break;
                    case 'input-event':
                      var a = this._participants[e.session_id];
                      a ||
                        (a =
                          e.session_id === this._participants.local.session_id
                            ? this._participants.local
                            : {});
                      try {
                        this.emit(e.event.type, {
                          action: e.event.type,
                          event: e.event,
                          participant: Be({}, a),
                        });
                      } catch (t) {
                        console.log('could not emit', e, t);
                      }
                      break;
                    case 'network-quality-change':
                      var s = e.threshold,
                        c = e.quality;
                      if (
                        s !== this._network.threshold ||
                        c !== this._network.quality
                      ) {
                        (this._network.quality = c),
                          (this._network.threshold = s);
                        try {
                          this.emit(e.action, e);
                        } catch (t) {
                          console.log('could not emit', e, t);
                        }
                      }
                      break;
                    case 'active-speaker-change':
                      var u = e.activeSpeaker;
                      if (this._activeSpeaker.peerId !== u.peerId) {
                        this._activeSpeaker.peerId = u.peerId;
                        try {
                          this.emit(e.action, {
                            action: e.action,
                            activeSpeaker: this._activeSpeaker,
                          });
                        } catch (t) {
                          console.log('could not emit', e, t);
                        }
                      }
                      break;
                    case 'show-local-video-changed':
                      if (this._callObjectMode) return;
                      var l = e.show;
                      this._showLocalVideo = l;
                      try {
                        this.emit(e.action, { action: e.action, show: l });
                      } catch (t) {
                        console.log('could not emit', e, t);
                      }
                      break;
                    case 'active-speaker-mode-change':
                      var d = e.enabled;
                      if (this._activeSpeakerMode !== d) {
                        this._activeSpeakerMode = d;
                        try {
                          this.emit(e.action, {
                            action: e.action,
                            enabled: this._activeSpeakerMode,
                          });
                        } catch (t) {
                          console.log('could not emit', e, t);
                        }
                      }
                      break;
                    case 'waiting-participant-added':
                    case 'waiting-participant-updated':
                    case 'waiting-participant-removed':
                      this._waitingParticipants = e.allWaitingParticipants;
                      try {
                        this.emit(e.action, {
                          action: e.action,
                          participant: e.participant,
                        });
                      } catch (t) {
                        console.log('could not emit', e, t);
                      }
                      break;
                    case 'receive-settings-updated':
                      if (
                        !Object(A.deepEqual)(
                          this._receiveSettings,
                          e.receiveSettings
                        )
                      ) {
                        this._receiveSettings = e.receiveSettings;
                        try {
                          this.emit(e.action, {
                            action: e.action,
                            receiveSettings: e.receiveSettings,
                          });
                        } catch (t) {
                          console.log('could not emit', e, t);
                        }
                      }
                      break;
                    case 'input-settings-updated':
                      if (
                        !Object(A.deepEqual)(
                          this._inputSettings,
                          e.inputSettings
                        )
                      ) {
                        this._inputSettings = e.inputSettings;
                        try {
                          this.emit(e.action, {
                            action: e.action,
                            inputSettings: e.inputSettings,
                          });
                        } catch (t) {
                          console.log('could not emit', e, t);
                        }
                      }
                      break;
                    case 'remote-media-player-started':
                      var f = e.session_id;
                      (this._rmpPlayerState[f] = e.playerState),
                        this.emitDailyJSEvent(e);
                      break;
                    case 'remote-media-player-stopped':
                      delete this._rmpPlayerState[e.session_id],
                        this.emitDailyJSEvent(e);
                      break;
                    case 'remote-media-player-updated':
                      var p = e.session_id,
                        h = this._rmpPlayerState[p];
                      (h &&
                        this.compareEqualForRMPUpdateEvent(
                          h,
                          e.remoteMediaPlayerState
                        )) ||
                        ((this._rmpPlayerState[p] = e.remoteMediaPlayerState),
                        this.emitDailyJSEvent(e));
                      break;
                    case 'custom-button-click':
                      this.emitDailyJSEvent(e);
                      break;
                    case 'recording-started':
                    case 'recording-stopped':
                    case 'recording-stats':
                    case 'recording-error':
                    case 'recording-upload-completed':
                    case 'transcription-started':
                    case 'transcription-stopped':
                    case 'transcription-error':
                    case 'started-camera':
                    case 'camera-error':
                    case 'app-message':
                    case 'local-screen-share-started':
                    case 'local-screen-share-stopped':
                    case 'network-connection':
                    case 'recording-data':
                    case 'live-streaming-started':
                    case 'live-streaming-stopped':
                    case 'live-streaming-error':
                    case 'nonfatal-error':
                    case 'lang-updated':
                      try {
                        this.emit(e.action, e);
                      } catch (t) {
                        console.log('could not emit', e, t);
                      }
                      break;
                    case 'request-fullscreen':
                      this.requestFullscreen();
                      break;
                    case 'request-exit-fullscreen':
                      this.exitFullscreen();
                  }
                },
              },
              {
                key: 'maybeEventRecordingStopped',
                value: function (e, t) {
                  var n = 'record';
                  if (e && !t.local && !1 === t[n] && e[n] !== t[n])
                    try {
                      this.emit('recording-stopped', {
                        action: 'recording-stopped',
                      });
                    } catch (e) {
                      console.log('could not emit', e);
                    }
                },
              },
              {
                key: 'maybeEventRecordingStarted',
                value: function (e, t) {
                  var n = 'record';
                  if (e && !t.local && !0 === t[n] && e[n] !== t[n])
                    try {
                      this.emit('recording-started', {
                        action: 'recording-started',
                      });
                    } catch (e) {
                      console.log('could not emit', e);
                    }
                },
              },
              {
                key: 'maybeEventTrackStopped',
                value: function (e, t, n) {
                  if (
                    e &&
                    ((e[n] && 'ended' === e[n].readyState) ||
                      (e[n] && (!t || !t[n])) ||
                      (e[n] && e[n].id !== t[n].id))
                  )
                    try {
                      this.emit('track-stopped', {
                        action: 'track-stopped',
                        track: e[n],
                        participant: t,
                      });
                    } catch (e) {
                      console.log('could not emit', e);
                    }
                },
              },
              {
                key: 'maybeEventCustomTrackStopped',
                value: function (e, t, n, r) {
                  if (
                    e &&
                    (!r ||
                      !r.remoteMediaPlayerState ||
                      (r.remoteMediaPlayerState.state != F &&
                        r.remoteMediaPlayerState.state != B)) &&
                    ((e && 'ended' === e.readyState) ||
                      (e && !t) ||
                      (e && e.id !== t.id))
                  )
                    try {
                      this.emit('track-stopped', {
                        action: 'track-stopped',
                        track: e,
                        participant: n,
                      });
                    } catch (e) {
                      console.log(
                        'maybeEventCustomTrackStopped: could not emit',
                        e
                      );
                    }
                },
              },
              {
                key: 'maybeEventCustomTrackStarted',
                value: function (e, t, n) {
                  if (
                    (t && !e) ||
                    (t && 'ended' === e.readyState) ||
                    (t && t.id !== e.id)
                  )
                    try {
                      this.emit('track-started', {
                        action: 'track-started',
                        track: t,
                        participant: n,
                      });
                    } catch (e) {
                      console.log(
                        'maybeEventCustomTrackStarted: could not emit',
                        e
                      );
                    }
                },
              },
              {
                key: 'maybeEventTrackStarted',
                value: function (e, t, n) {
                  if (
                    (t[n] && (!e || !e[n])) ||
                    (t[n] && 'ended' === e[n].readyState) ||
                    (t[n] && t[n].id !== e[n].id)
                  )
                    try {
                      this.emit('track-started', {
                        action: 'track-started',
                        track: t[n],
                        participant: t,
                      });
                    } catch (e) {
                      console.log('could not emit', e);
                    }
                },
              },
              {
                key: 'maybeEventTrackStoppedForCustomTracks',
                value: function (e, t) {
                  if (e)
                    for (var n in e.tracks)
                      Ne(n) ||
                        this.maybeEventCustomTrackStopped(
                          e.tracks[n].track,
                          t && t.tracks[n] ? t.tracks[n].track : null,
                          e,
                          t
                        );
                },
              },
              {
                key: 'maybeEventTrackStartedForCustomTracks',
                value: function (e, t) {
                  if (t)
                    for (var n in t.tracks)
                      Ne(n) ||
                        this.maybeEventCustomTrackStarted(
                          e && e.tracks[n] ? e.tracks[n].track : null,
                          t.tracks[n].track,
                          t
                        );
                },
              },
              {
                key: 'compareEqualForRMPUpdateEvent',
                value: function (e, t) {
                  return e.state === t.state;
                },
              },
              {
                key: 'emitDailyJSEvent',
                value: function (e) {
                  try {
                    this.emit(e.action, e);
                  } catch (t) {
                    console.log('could not emit', e, t);
                  }
                },
              },
              {
                key: 'compareEqualForParticipantUpdateEvent',
                value: function (e, t) {
                  return (
                    !!Object(A.deepEqual)(e, t) &&
                    (!e.videoTrack ||
                      !t.videoTrack ||
                      (e.videoTrack.id === t.videoTrack.id &&
                        e.videoTrack.muted === t.videoTrack.muted &&
                        e.videoTrack.enabled === t.videoTrack.enabled)) &&
                    (!e.audioTrack ||
                      !t.audioTrack ||
                      (e.audioTrack.id === t.audioTrack.id &&
                        e.audioTrack.muted === t.audioTrack.muted &&
                        e.audioTrack.enabled === t.audioTrack.enabled))
                  );
                },
              },
              {
                key: 'nativeUtils',
                value: function () {
                  return q()
                    ? 'undefined' == typeof DailyNativeUtils
                      ? (console.warn(
                          'in React Native, DailyNativeUtils is expected to be available'
                        ),
                        null)
                      : DailyNativeUtils
                    : null;
                },
              },
              {
                key: 'updateIsPreparingToJoin',
                value: function (e) {
                  this.updateMeetingState(this._meetingState, e);
                },
              },
              {
                key: 'updateMeetingState',
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : this._isPreparingToJoin;
                  if (
                    e !== this._meetingState ||
                    t !== this._isPreparingToJoin
                  ) {
                    var n = this._meetingState,
                      r = this._isPreparingToJoin;
                    (this._meetingState = e), (this._isPreparingToJoin = t);
                    var i = this.isMeetingPendingOrOngoing(n, r),
                      a = this.isMeetingPendingOrOngoing(
                        this._meetingState,
                        this._isPreparingToJoin
                      );
                    i !== a &&
                      (this.updateKeepDeviceAwake(a),
                      this.updateDeviceAudioMode(a),
                      this.updateShowAndroidOngoingMeetingNotification(a),
                      this.updateNoOpRecordingEnsuringBackgroundContinuity(a));
                  }
                },
              },
              {
                key: 'resetMeetingDependentVars',
                value: function () {
                  (this._participants = {}),
                    (this._participantCounts = We),
                    (this._waitingParticipants = {}),
                    (this._activeSpeaker = {}),
                    (this._activeSpeakerMode = !1),
                    (this._didPreAuth = !1),
                    (this._accessState = { access: 'unknown' }),
                    (this._receiveSettings = {}),
                    (this._inputSettings = {}),
                    this._preloadCache;
                },
              },
              {
                key: 'updateKeepDeviceAwake',
                value: function (e) {
                  q() &&
                    this.nativeUtils().setKeepDeviceAwake(e, this._callFrameId);
                },
              },
              {
                key: 'updateDeviceAudioMode',
                value: function (e) {
                  if (
                    q() &&
                    !this.disableReactNativeAutoDeviceManagement('audio')
                  ) {
                    var t = e ? this._nativeInCallAudioMode : 'idle';
                    this.nativeUtils().setAudioMode(t);
                  }
                },
              },
              {
                key: 'updateShowAndroidOngoingMeetingNotification',
                value: function (e) {
                  if (
                    q() &&
                    this.nativeUtils().setShowOngoingMeetingNotification
                  ) {
                    var t, n, r, i;
                    if (
                      this.properties.reactNativeConfig &&
                      this.properties.reactNativeConfig
                        .androidInCallNotification
                    ) {
                      var a =
                        this.properties.reactNativeConfig
                          .androidInCallNotification;
                      (t = a.title),
                        (n = a.subtitle),
                        (r = a.iconName),
                        (i = a.disableForCustomOverride);
                    }
                    i && (e = !1),
                      this.nativeUtils().setShowOngoingMeetingNotification(
                        e,
                        t,
                        n,
                        r,
                        this._callFrameId
                      );
                  }
                },
              },
              {
                key: 'updateNoOpRecordingEnsuringBackgroundContinuity',
                value: function (e) {
                  q() &&
                    this.nativeUtils()
                      .enableNoOpRecordingEnsuringBackgroundContinuity &&
                    this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(
                      e
                    );
                },
              },
              {
                key: 'isMeetingPendingOrOngoing',
                value: function (e, t) {
                  return [L, I].includes(e) || t;
                },
              },
              {
                key: 'toggleParticipantAudioBasedOnNativeAudioFocus',
                value: function () {
                  if (q()) {
                    var e = store.getState();
                    for (var t in e.streams) {
                      var n = e.streams[t];
                      n &&
                        n.pendingTrack &&
                        'audio' === n.pendingTrack.kind &&
                        (n.pendingTrack.enabled = this._hasNativeAudioFocus);
                    }
                  }
                },
              },
              {
                key: 'disableReactNativeAutoDeviceManagement',
                value: function (e) {
                  return (
                    this.properties.reactNativeConfig &&
                    this.properties.reactNativeConfig
                      .disableAutoDeviceManagement &&
                    this.properties.reactNativeConfig
                      .disableAutoDeviceManagement[e]
                  );
                },
              },
              {
                key: 'absoluteUrl',
                value: function (e) {
                  if (void 0 !== e) {
                    var t = document.createElement('a');
                    return (t.href = e), t.href;
                  }
                },
              },
              {
                key: 'sayHello',
                value: function () {
                  var e = 'hello, world.';
                  return console.log(e), e;
                },
              },
            ]),
            ne
          );
        })(E.a);
      function $e(e) {
        var t = {};
        for (var n in e)
          e[n] instanceof MediaStreamTrack
            ? (t[n] = 'daily-custom-track')
            : 'dailyConfig' === n
            ? (e[n].modifyLocalSdpHook &&
                (window._dailyConfig &&
                  (window._dailyConfig.modifyLocalSdpHook =
                    e[n].modifyLocalSdpHook),
                delete e[n].modifyLocalSdpHook),
              e[n].modifyRemoteSdpHook &&
                (window._dailyConfig &&
                  (window._dailyConfig.modifyRemoteSdpHook =
                    e[n].modifyRemoteSdpHook),
                delete e[n].modifyRemoteSdpHook),
              (t[n] = e[n]))
            : (t[n] = e[n]);
        return t;
      }
      function Ze() {
        if (q())
          throw new Error(
            'This daily-js method is not currently supported in React Native'
          );
      }
      function Xe() {
        if (!q())
          throw new Error(
            'This daily-js method is only supported in React Native'
          );
      }
      function et(e, t) {
        for (
          var n = t.allowAllParticipantsKey,
            r = function (e) {
              var t = ['local'];
              return n || t.push('*'), e && !t.includes(e);
            },
            a = function (e) {
              return !!(
                void 0 === e.layer ||
                (Number.isInteger(e.layer) && e.layer >= 0) ||
                'inherit' === e.layer
              );
            },
            o = function (e) {
              return (
                !!e &&
                !(e.video && !a(e.video)) &&
                !(e.screenVideo && !a(e.screenVideo))
              );
            },
            s = 0,
            c = Object.entries(e);
          s < c.length;
          s++
        ) {
          var u = i()(c[s], 2),
            l = u[0],
            d = u[1];
          if (!r(l) || !o(d)) return !1;
        }
        return !0;
      }
      function tt(e) {
        return (
          'object' === S()(e) &&
          !(!e.video || 'object' !== S()(e.video)) &&
          !!(function (e) {
            var t = ['type', 'config', 'publish'];
            if (!e) return !1;
            if ('object' !== S()(e)) return !1;
            if (0 === Object.keys(e).length) return !1;
            if (
              e.type &&
              !(function (e) {
                if ('string' != typeof e) return !1;
                if (!Object.values(N).includes(e))
                  return (
                    console.error('inputSettings video processor type invalid'),
                    !1
                  );
                return !0;
              })(e.type)
            )
              return !1;
            if (void 0 !== e.publish && 'boolean' != typeof e.publish)
              return !1;
            'boolean' == typeof e.publish &&
              console.warn(
                'inputSettings.video.processor: publish key has been deprecated; it will be ignored'
              );
            if (e.config) {
              if ('object' !== S()(e.config)) return !1;
              if (
                !(function (e, t) {
                  var n = Object.keys(t);
                  if (0 === n.length) return !0;
                  var r =
                    'invalid object in inputSettings -> video -> processor -> config';
                  switch (e) {
                    case N.BGBLUR:
                      return n.length > 1 || 'strength' !== n[0]
                        ? (console.error(r), !1)
                        : !(
                            'number' != typeof t.strength ||
                            t.strength <= 0 ||
                            t.strength > 1 ||
                            isNaN(t.strength)
                          ) ||
                            (console.error(
                              ''
                                .concat(
                                  r,
                                  '; expected: {0 < strength <= 1}, got: '
                                )
                                .concat(t.strength)
                            ),
                            !1);
                    case N.BGIMAGE:
                      return !(
                        void 0 !== t.source &&
                        !(function (e) {
                          if ('default' === e.source)
                            return (e.type = 'default'), !0;
                          if (oe(e.source))
                            return (
                              (e.type = 'url'),
                              !!(function (e) {
                                var t = new URL(e),
                                  n = t.pathname;
                                if ('data:' === t.protocol)
                                  try {
                                    var r = n
                                      .substring(
                                        n.indexOf(':') + 1,
                                        n.indexOf(';')
                                      )
                                      .split('/')[1];
                                    return V.includes(r);
                                  } catch (e) {
                                    return (
                                      console.error(
                                        'failed to deduce blob content type',
                                        e
                                      ),
                                      !1
                                    );
                                  }
                                var i = n
                                  .split('.')
                                  .at(-1)
                                  .toLowerCase()
                                  .trim();
                                return V.includes(i);
                              })(e.source) ||
                                (console.error(
                                  'invalid image type; supported types: ['.concat(
                                    V.join(', '),
                                    ']'
                                  )
                                ),
                                !1)
                            );
                          return (
                            (t = e.source),
                            (n = Number(t)),
                            isNaN(n) || !Number.isInteger(n) || n <= 0 || n > 10
                              ? (console.error(
                                  'invalid image selection; must be an int, > 0, <= '.concat(
                                    10
                                  )
                                ),
                                !1)
                              : ((e.type = 'daily-preselect'), !0)
                          );
                          var t, n;
                        })(t)
                      );
                    default:
                      return !0;
                  }
                })(e.type, e.config)
              )
                return !1;
            }
            return (
              Object.keys(e)
                .filter(function (e) {
                  return !t.includes(e);
                })
                .forEach(function (t) {
                  console.warn(
                    'invalid key inputSettings -> video -> processor : '.concat(
                      t
                    )
                  ),
                    delete e[t];
                }),
              !0
            );
          })(e.video.processor)
        );
      }
      function nt() {
        var e = Object.values(N).join(' | ');
        return 'inputSettings must be of the form: { video: { processor: [ '.concat(
          e,
          ' ] }, config?: {} }'
        );
      }
      function rt(e) {
        var t = e.allowAllParticipantsKey;
        return (
          'receiveSettings must be of the form { [<remote participant id> | '
            .concat('base')
            .concat(t ? ' | "'.concat('*', '"') : '', ']: ') +
          '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}'
        );
      }
      function it(e) {
        if ((e && 'object' !== S()(e)) || Array.isArray(e))
          return (
            console.error(
              'customTrayButtons should be an Object of the type '.concat(
                JSON.stringify(ze),
                '.'
              )
            ),
            !1
          );
        if (e)
          for (var t = 0, n = Object.entries(e); t < n.length; t++)
            for (
              var r = i()(n[t], 1)[0], a = 0, o = Object.entries(e[r]);
              a < o.length;
              a++
            ) {
              var s = i()(o[a], 2),
                c = s[0],
                u = s[1];
              if ('iconPath' === c && !oe(u))
                return (
                  console.error(
                    'customTrayButton '.concat(c, ' should be a url.')
                  ),
                  !1
                );
              if ('iconPathDarkMode' === c && !oe(u))
                return (
                  console.error(
                    'customTrayButton '.concat(c, ' should be a url.')
                  ),
                  !1
                );
              var l = ze.id[c];
              if (!l)
                return (
                  console.error(
                    'customTrayButton does not support key '.concat(c)
                  ),
                  !1
                );
              if (S()(u) !== l)
                return (
                  console.error(
                    'customTrayButton '
                      .concat(c, ' should be a ')
                      .concat(l, '.')
                  ),
                  !1
                );
            }
        return !0;
      }
      function at(e) {
        if ('object' !== S()(e))
          throw new Error('RemoteMediaPlayerSettings: must be "object" type');
        if (!e.state || !Object.values(R).includes(e.state))
          throw new Error(
            'Invalid value for RemoteMediaPlayerSettings.state, valid values are: ' +
              JSON.stringify(R)
          );
      }
      function ot(e, t, n) {
        return !('number' != typeof e || e < t || e > n);
      }
    },
  ]);
});
