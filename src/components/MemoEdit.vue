<template>
  <div class='memo'>
    <textarea v-model='editingMemo'></textarea>
    <button @click='editMemo'>編集</button>
    <button @click='deleteMemo'>削除</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editingMemo: ''
    }
  },
  watch: {
    memo: {
      immediate: true,
      handler(memo) {
        this.editingMemo = memo.content
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
