<template>
  <footer
    class="footer"
    v-if="showFooter"
  >
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ unCompletedCount }}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a
          :class="{selected:$route.path==='/main'}"
          href="#/"
        >All</a>
      </li>
      <li>
        <a
          :class="{selected:$route.path==='/active'}"
          href="#/active"
        >Active</a>
      </li>
      <li>
        <a
          :class="{selected:$route.path==='/completed'}"
          href="#/completed"
        >Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button
      class="clear-completed"
      @click="delTodos"
    >Clear completed</button>
  </footer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['unCompletedCount', 'showFooter'])
  },
  methods: mapMutations(['delTodos'])
}
</script>

<style lang="">
</style>
