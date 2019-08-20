import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    todoList: [
      { id: 1, todoName: '吃饭', completed: true },
      { id: 2, todoName: '睡觉', completed: false },
      { id: 3, todoName: '打豆豆', completed: true }
    ]
  },
  mutations: {
    // 删除单个todo数据
    delTodo(state, payload) {
      state.todoList = state.todoList.filter(item => payload.id !== item.id)
    },
    // 添加todo数据
    addTodo(state, payload) {
      // 非空校验
      if (payload.trim() === '') {
        return false
      }
      // 自动生成id
      let id
      if (state.todoList.length === 0) {
        id = 1
      } else {
        id = state.todoList[state.todoList.length - 1].id + 1
      }
      state.todoList.push({ id, todoName: payload, completed: false })
    },
    // 编辑todo数据
    editTodo(state, payload) {
      state.todoList.filter(item => payload.id === item.id)[0].todoName =
        payload.todoName
    },
    // 修改完成未完成状态
    updateCompleted(state, payload) {
      state.todoList.filter(
        item => payload.id === item.id
      )[0].completed = !state.todoList.filter(item => payload.id === item.id)[0]
        .completed
    },
    // 删除已完成任务
    delTodos(state) {
      state.todoList = state.todoList.filter(item => !item.completed)
    }
  },
  getters: {
    // 计算未完成任务的总数
    unCompletedCount(state) {
      return state.todoList.filter(item => !item.completed).length
    },
    // 是否显示底部
    showFooter(state) {
      return state.todoList.length !== 0
    }
  }
})
