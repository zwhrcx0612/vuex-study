export default {
  // 默认情况下，模块内部的 action、mutation 和 getter 是注册在全局命名空间的
//   这样使得多个模块能够对同一 mutation 或 action 作出响应。
// 添加 namespaced: true 的方式使其成为带命名空间的模块。
// 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
  namespaced: true,
  state: {
    a: 1,
    z: 2,
    count: 3
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    sumWithRootCount(state, getters, rootState) {
      return state.count + rootState.count
    }
  },
  //   对于模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。
  mutations: {
    increment(state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },
  //   同样，对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：
  actions: {
    incrementIfOddOnRootSum({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        console.log('rootState:', rootState)// 得到的是全部模块的state
        // count: NaN
        // todos: Array(2)
        // a: Object
        // b: Object
        commit('increment')
      }
    }
  }
}
