{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import routes from './routes'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
// Styles
import './assets/styles/styles.scss'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  router,
  ...App{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}).$mount('#app'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
