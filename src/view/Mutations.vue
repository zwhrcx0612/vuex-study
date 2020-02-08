<template>
  <div>
    {{ count }}
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['count'])
  },
  mounted() {
    // this.$store.commit('increment')
    this.increment(5) // 这样的写法必须有...mapMutations(['increment'])
    // mutation 必须是同步函数
  },
  methods: {
    ...mapMutations(['increment']) // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    // ...mapMutations({
    //   add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    // })
  }
}
</script>
