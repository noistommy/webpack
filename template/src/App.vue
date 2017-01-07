<template>
  <div id="app">
    <ul>
      <li><router-link v-bind:to="{ name: 'home-page' }">Home</router-link></li>
      <li><router-link v-bind:to="{ name: 'counter-page' }">Counter</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import store from 'src/vuex/store'

export default {
  store,
  name: 'app'
}
</script>

<style>
</style>
