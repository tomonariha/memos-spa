<template>
  <div id='app'>
    <h1>Memo</h1>
  </div>
  <div id='memos'>
    <memo-index></memo-index>
  </div>
</template>

<script>
import MemoIndex from './components/MemoIndex.vue'

export default {
  components: {
    MemoIndex
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
#memos {
  width: 400px;
  height: 350px;
  outline: 1px solid green;
}
</style>
