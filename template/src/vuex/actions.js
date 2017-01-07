import * as types from './mutation-types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const decrementMain = ({ commit }) => {
  commit(types.DECREMENT_MAIN_COUNTER){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const incrementMain = ({ commit }) => {
  commit(types.INCREMENT_MAIN_COUNTER){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
