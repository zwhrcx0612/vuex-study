<template>
  <div>
    {{ count }}
    <!-- {{ countAlias }}  -->
    <!-- {{ countPlusLocalState }} -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      localCount: 2
    }
  },
  // 1.
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   }
  // }
  // 2.
  //   computed: mapState({
  //     count: state => state.count,
  //     // 传字符串参数 'count' 等同于 `state => state.count`
  //     countAlias: 'count',
  //     // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //     countPlusLocalState(state) {
  //       return state.count + this.localCount
  //     }
  //   })
  // 3.
  //   computed: mapState([
  //   // 映射 this.count 为 store.state.count
  //     'count'
  //   ])
  // 4.
  computed: {
    ...mapState(['count'])
  }
}
</script>
