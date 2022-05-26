<template>
  <div id="app">
    <h1>Memo</h1>
  </div>
  <div id="index">
    <memoIndex></memoIndex>
  </div>
</template>

<script>
import memoIndex from './components/memoIndex.vue'

export default {
  data() {
   
  },
  components: {
    memoIndex
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
}
#index {
  width: 400px;
  height: auto;
  outline: 1px solid green;
}
</style>
