<template>
  <div id="memo-index">
    <ul v-for="memo in memos" v-bind:key="memo.id"> 
      <li><a v-on:click='this.memo = memo'>{{ memo.title }}</a></li>
    </ul>
    <button v-on:click="addMemo()">+</button>
  </div>
  <div id="edit">
    <edit-memo :memo="memo" v-on:edit="editMemos" v-on:delete="destroyMemo"></edit-memo>
  </div>
</template>

<script>
import editMemo from './editMemo.vue'
export default {
  data () {
    return {
      memos: [],
      memo: {},
      content: '',
      storageKey: 'memo-storage-key',
      id: 0
    }
  },
  created () {
    this.memos = this.fetch()
  },
  components: {
    editMemo
  },
  props: {
    
  },
  methods: {
    addMemo: function () {
      this.memo = {id: this.id,
        title: '新しいメモ',
        content: 'メモの内容を入力してください'
      }
      this.id += 1
      this.memos.push(this.memo)
      this.save(this.memos)
    },
    editMemos: function (e) {
      this.memo.content = e
      if (this.memo.content.includes('\n')) {
        this.memo.title = this.memo.content.slice(0, this.memo.content.indexOf('\n'))
      } else {
        this.memo.title = this.memo.content
      }
      this.save(this.memos)
    },
    destroyMemo: function () {
      const index = this.memos.indexOf(this.memo)
      this.memos.splice(index, 1)
      this.save(this.memos)
      this.memo = ''
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
    }
  },
  computed: {
   
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
#memo-index {
  vertical-align: top;
  outline: 1px solid red;
  height: auto;
  width: 30%;
  text-align: left;
  display: inline-block;
}
#edit {
  height: auto;
  width: 69%;
  outline: 1px solid blue;
  text-align: center;
  display: inline-block;
}
</style>
