export default {
  namespaced: true,
  // 启用了命名空间的 getter 和 action 会收到局部化的 getter，dispatch 和 commit。
  // 模块内容（module assets）
  state: { }, // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
  getters: {
    isAdmin(state, getters) {
      console.log('local getters:', getters['a/doubleCount']) // 若namespaced:true，得到的只是这个文件中的所有的getters，否则，得到的是整个store的getters
      // isAdmin: (...)
      // profile: (...)
      // posts/popular: (...)
      // 下面是namespaced:false的情况
      // doneTodos: (...)
      // doneTodosCount: (...)
      // getTodoById: (...)
      // a/doubleCount: (...)
      // a/sumWithRootCount: (...)
      // isAdmin: (...)
      // profile: (...)
      // posts/popular: (...)
    } // -> getters['account/isAdmin']

  },
  actions: {
    login() { } // -> dispatch('account/login')
  },
  mutations: {
    login() { } // -> commit('account/login')
  },

  // 嵌套模块
  modules: {
    // 继承父模块的命名空间
    myPage: {
      state: { },
      getters: {
        profile() { } // -> getters['account/profile']
      }
    },

    // 进一步嵌套命名空间
    posts: {
      namespaced: true,

      state: { },
      getters: {
        popular() { } // -> getters['account/posts/popular']
      }
    }
  }

}
