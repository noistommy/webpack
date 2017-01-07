<template>
  <div>
    <h1>Counter</h1>
    <div class="counter-number">
      \{{counter}}
    </div>
    <button class="counter-button" v-on:click="incrementCounter">+</button>
    <button class="counter-button" v-on:click="decrementCounter">-</button>
  </div>
</template>

<script>
export default {
  name: 'counter-page',
  computed: {
    counter{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      return this.$store.getters.mainCounter{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  methods: {
    incrementCounter{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      this.$store.dispatch('incrementMain'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    decrementCounter{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      this.$store.dispatch('decrementMain'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="css" scoped>
.counter-number {
  font-size: 40px;
}
</style>
