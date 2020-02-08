import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './module/moduleA'
import moduleB from './module/moduleB'
import account from './module/account'
import myPlugin from './plugins/myplugin'
Vue.use(Vuex)

export default new Vuex.Store({
  // 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到
  // 不要在发布环境下启用严格模式！严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
  strict: process.env.NODE_ENV !== 'production',
  plugins: [myPlugin],
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }

    ]
  },
  getters: {
    // getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    // Getter 也可以接受其他 getter 作为第二个参数：
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    // 你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    // 接受 state 作为第一个参数
    // 可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）
    // increment 是type 后面的方法是handler
    increment(state, n) {
      state.count += n
    }
    // 1.最好提前在你的 store 中初始化好所有所需属性。
    // 2.当需要在对象上添加新属性时，你应该
    // 使用 Vue.set(obj, 'newProp', 123), 或者
    // 以新对象替换老对象。例如，利用对象展开运算符我们可以这样写：
    // state.obj = { ...state.obj, newProp: 123 }
  },
  actions: {
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
    // 因此你可以调用 context.commit 提交一个 mutation，
    // 或者通过 context.state 和 context.getters 来获取 state 和 getters。
    // 当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了。
    // increment(context, n) {
    //   context.commit('increment', n)
    // },
    // 实践中，我们会经常用到 ES2015 的 参数解构 来简化代码（特别是我们需要调用 commit 很多次的时候）
    increment({ commit }, n) {
      commit('increment', n)
    }
    // 如何才能组合多个 action，以处理更加复杂的异步流程
    // 假设 getData() 和 getOtherData() 返回的是 Promise
    // 此处getData和getOtherData均未实现
    // async actionA({ commit }) {
    //   commit('gotData', await getData())
    // },
    // async actionB({ commit, dispatch }) {
    //   await dispatch('actionA') // 等待 actionA 完成
    //   commit('gotOtherData', await getOtherData())
    // }
  },
  modules: {
    moduleA: moduleA,
    moduleB: moduleB,
    account: account
  }
})
