<template>
  <div>
    {{ count }}
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['count'])
  },
  mounted() {
    //   Action 通过 store.dispatch 方法触发：
    this.$store.dispatch('increment', 6)
    // this.increment(6)
  },
  methods: {
    ...mapActions(['increment']) // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

  }
}
</script>
