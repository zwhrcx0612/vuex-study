<template>
  <div>
    <!-- {{ doneTodos }}
    {{ doneTodosCount }}
    {{ getTodoById }} -->
    {{ a }}
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
// import { mapGetters } from 'vuex'
export default {
// getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算
// Getter 也可以接受其他 getter 作为第二个参数：
  computed: {
    // 1
    // ...mapGetters(['doneTodos', 'doneTodosCount'])
    // 2
    // doneTodosCount() {
    //   return this.$store.getters.doneTodosCount
    // },
    // 3.
    // getTodoById() {
    //   return this.$store.getters.getTodoById(2)
    // }
    // 4.
    ...mapGetters({
      'a': 'doneTodos'
    })
  }
}
</script>
