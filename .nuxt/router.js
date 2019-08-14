import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _16dac628 = () => interopDefault(import('../pages/Auction/index.vue' /* webpackChunkName: "pages/Auction/index" */))
const _f7eb328e = () => interopDefault(import('../pages/Dashboard/index.vue' /* webpackChunkName: "pages/Dashboard/index" */))
const _12bab6c9 = () => interopDefault(import('../pages/Leagues/index.vue' /* webpackChunkName: "pages/Leagues/index" */))
const _5dcdba4e = () => interopDefault(import('../pages/Login/index.vue' /* webpackChunkName: "pages/Login/index" */))
const _1eb0beb4 = () => interopDefault(import('../pages/Register/index.vue' /* webpackChunkName: "pages/Register/index" */))
const _784ef50c = () => interopDefault(import('../pages/Leagues/New/index.vue' /* webpackChunkName: "pages/Leagues/New/index" */))
const _c0be35d8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/Auction",
      component: _16dac628,
      name: "Auction"
    }, {
      path: "/Dashboard",
      component: _f7eb328e,
      name: "Dashboard"
    }, {
      path: "/Leagues",
      component: _12bab6c9,
      name: "Leagues"
    }, {
      path: "/Login",
      component: _5dcdba4e,
      name: "Login"
    }, {
      path: "/Register",
      component: _1eb0beb4,
      name: "Register"
    }, {
      path: "/Leagues/New",
      component: _784ef50c,
      name: "Leagues-New"
    }, {
      path: "/",
      component: _c0be35d8,
      name: "index"
    }],

    fallback: false
  })
}
