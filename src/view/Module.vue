<template>
  <div>
    <!--  moduleA 的状态 -->
    {{ a }}
    <!-- moduleB 的状态 -->
    <!-- {{ b }} -->
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('moduleA')
export default {
  computed: {
    // ...mapState({
    //   a: state => state.moduleA.a,
    //   b: state => state.moduleB.b
    // })
    // 上面可以简写为
    // ...mapState('moduleA', {
    //   a: state => state.a
    // }),
    // ...mapState('moduleB', {
    //   b: state => state.b
    // })
    // 也可以通过使用 createNamespacedHelpers 创建基于某个命名空间辅助函数。
    // 它返回一个对象，对象里有新的绑定在给定命名空间值上的组件绑定辅助函数
    ...mapState({
      a: state => state.a
    })
  },
  mounted() {
    this.$store.dispatch('moduleA/incrementIfOddOnRootSum') // 加上namespaced之后，需要加a/；去掉的话，咋不需要加
    this.$store.getters['account/isAdmin'] // d还是account 取决于store/index.js中的modules命名，而不是文件名
  },
  methods: {

  }
}
</script>
