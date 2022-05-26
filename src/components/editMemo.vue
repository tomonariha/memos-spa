<template>
  <div class="memo">
    <textarea v-model="editingMemo"></textarea>
    <button v-on:click="editMemo">編集</button>
    <button v-on:click="deleteMemo">削除</button>
  </div>
</template>

<script>
export default {
  name: 'editMemo',
  data () {
    return {
      editingMemo: ''
    }
  },
  watch: {
    memo: {
      immediate: true,
      handler() {
        this.editingMemo = this.memo.content
      }
    }
  },
  props: {
    memo: {
      type: Object
    }
  },
  methods: {
    editMemo: function() {
      if ((this.editingMemo === '')||(this.editingMemo === null)){
        return
      }
      this.$emit('edit', this.editingMemo)
    },
    deleteMemo: function() {
      this.$emit('delete')
    }
  }
}
</script>

<style scoped>
textarea {
  margin: 20px;
  width: 200px;
  height: 250px;
}
</style>
