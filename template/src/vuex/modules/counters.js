import * as types from '../mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const state = {
  main: 0{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const mutations = {
  [types.DECREMENT_MAIN_COUNTER]{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(state) {
    state.main--{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  [types.INCREMENT_MAIN_COUNTER]{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}(state) {
    state.main++{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  state,
  mutations{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
