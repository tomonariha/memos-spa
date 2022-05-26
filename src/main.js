import { createApp } from 'vue'
import App from './App.vue'
var STORAGE_KEY = 'My-todo-app'
var memoStorage = {
  fetch: function() {
    var memos = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || '[]'
    )
    memos.forEach(function(memo, index) {
      memo.id = index
    })
    memoStorage.uid = memos.length
    return memos
  },
  save: function(memos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(memos))
  }
}

createApp(App).mount('#app')
