
// 在带命名空间的模块内访问全局内容（Global Assets）
// 如果你希望使用全局 state 和 getter，rootState 和 rootGetters 会作为第三和第四参数传入 getter，
// 也会通过 context 对象的属性传入 action。

// 若需要在全局命名空间内分发 action 或提交 mutation，将 { root: true } 作为第三参数传给 dispatch 或 commit 即可。
export default {
  namespaced: true,

  getters: {
    // 在这个模块的 getter 中，`getters` 被局部化了
    // 你可以使用 getter 的第四个参数来调用 `rootGetters`
    someGetter(state, getters, rootState, rootGetters) {
      getters.someOtherGetter // -> 'foo/someOtherGetter'
      rootGetters.someOtherGetter // -> 'someOtherGetter'
    },
    someOtherGetter: state => { }
  },

  actions: {
    // 在这个模块中， dispatch 和 commit 也被局部化了
    // 他们可以接受 `root` 属性以访问根 dispatch 或 commit
    someAction({ dispatch, commit, getters, rootGetters }) {
      getters.someGetter // -> 'foo/someGetter'
      rootGetters.someGetter // -> 'someGetter'

      dispatch('someOtherAction') // -> 'foo/someOtherAction'
      dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

      commit('someMutation') // -> 'foo/someMutation'
      commit('someMutation', null, { root: true }) // -> 'someMutation'
    },
    // 在带命名空间的模块注册全局 action
    // 若需要在带命名空间的模块注册全局 action，你可添加 root: true，并将这个 action 的定义放在函数 handler 中。例如：
    someAction: {
      root: true,
      handler(namespacedContext, payload) { } // -> 'someAction'
    },
    someOtherAction(ctx, payload) { }
  }

}
