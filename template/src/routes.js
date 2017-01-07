import HomePage from 'components/HomePage'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import CounterPage from 'components/CounterPage'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default [
  {
    path: '/',
    name: 'home-page',
    component: HomePage{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    path: '/counter',
    name: 'counter-page',
    component: CounterPage{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  {
    path: '*',
    redirect: '/'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
