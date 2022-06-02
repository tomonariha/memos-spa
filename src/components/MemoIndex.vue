<template>
  <div id='index'>
    <ul 
      v-for='memo in memos'
      :key='memo.id'
    > 
      <li><a v-on:click='showMemo(memo)'>{{ memo.title }}</a></li>
    </ul>
    <button @click='addMemo()'>+</button>
  </div>
  <div id='edit'>
    <MemoEdit 
      v-show='isEmpty(memo)'
      :memo='memo'
      @edit='editMemo'
      @delete='deleteMemo'
    >
    </MemoEdit>
  </div>
</template>

<script>
import MemoEdit from './MemoEdit.vue'

export default {
  data () {
    return {
      memos: [],
      memo: {},
      id: 0,
      content: '',
      storageKey: 'memo-storage-key'
    }
  },
  created () {
    this.memos = this.fetch()
  },
  components: {
    MemoEdit
  },
  methods: {
    showMemo: function (memo) {
      this.memo = memo
    },
    addMemo: function () {
      this.memo = {
        id: this.id,
        title: '新しいメモ',
        content: 'メモの内容を入力してください'
      }
      this.id += 1
      this.memos.push(this.memo)
      this.save(this.memos)
    },
    editMemo: function (e) {
      this.memo.content = e
      if (this.memo.content.includes('\n')) {
        this.memo.title = this.memo.content.slice(0, this.memo.content.indexOf('\n'))
      } else {
        this.memo.title = this.memo.content
      }
      this.save(this.memos)
    },
    deleteMemo: function () {
      const index = this.memos.indexOf(this.memo)
      this.memos.splice(index, 1)
      this.save(this.memos)
      this.memo = {}
    },
    fetch: function() {
      const memos = JSON.parse(
        localStorage.getItem(this.storageKey) || '[]'
      )
      memos.forEach(function(memo, index) {
        memo.id = index
      })
      this.id = memos.length
      return memos
    },
    save: function(memos) {
      localStorage.setItem(this.storageKey, JSON.stringify(memos))
    },
    isEmpty: function(object){
      return Object.keys(object).length
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: underline;
  cursor: pointer;
}
#index {
  vertical-align: top;
  outline: 1px solid green;
  height: 350px;
  width: 30%;
  text-align: left;
  display: inline-block;
  overflow: hidden;
  overflow-y: scroll;
}
#edit {
  height: 350px;
  width: 70%;
  text-align: center;
  display: inline-block;
}
</style>
