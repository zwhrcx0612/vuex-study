import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false
// 在 store 创建之后，你可以使用 store.registerModule 方法注册模块：
// 注册模块 `myModule`
store.registerModule('myModule', {
  // ...
})
// 注册嵌套模块 `nested/myModule`
// store.registerModule(['nested', 'myModule'], {
//   // ...
// })
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
