<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
    >
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        :class="{completed:item.completed,editing:editId === item.id}"
        v-for="(item,index) in todoList"
        :key="item.id"
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked="item.completed"
            @input="updateCompleted({id:item.id})"
          >
          <label @dblclick="showEditBox(index,item.id,item.todoName)">{{ item.todoName }}</label>
          <button
            class="destroy"
            @click="delTodo({id:item.id})"
          ></button>
        </div>
        <input
          ref='editBox'
          class="edit"
          v-model="todoName"
          @keyup.enter='editTodo(item.id)'
        >
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      editId: -1,
      todoName: ''
    }
  },
  computed: mapState(['todoList']),
  methods: {
    ...mapMutations(['delTodo', 'updateCompleted']),
    showEditBox(index, id, todoName) {
      this.editId = id
      this.todoName = todoName
      setTimeout(() => {
        this.$refs.editBox[index].focus()
      }, 100)
    },
    editTodo(id) {
      this.$store.commit('editTodo', { todoName: this.todoName, id })
      this.editId = -1
    }
  }
}
</script>

<style lang="">
</style>
