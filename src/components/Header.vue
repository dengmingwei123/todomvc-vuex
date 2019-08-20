<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      v-model="todoName"
      @keyup.enter="addTodo"
    >
  </header>
</template>

<script>
export default {
  data() {
    return {
      todoName: ''
    }
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodo', this.todoName)
      this.todoName = ''
    }
  }
}
</script>

<style lang="">
</style>
