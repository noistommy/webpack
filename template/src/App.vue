<template>
  <div id="app">
    <ul class="navigation">
      <li><router-link v-bind:to="{ name: 'home-page' }">Home</router-link></li>
      <li><router-link v-bind:to="{ name: 'counter-page' }">Counter</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import store from 'src/vuex/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  store,
  name: 'app'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
.navigation {
  list-style-type: none;
  padding: 0;
}
.navigation li {
  display: inline-block;
  margin: 0 10px;
}
.navigation a {
  color: #42b983;
}
</style>
