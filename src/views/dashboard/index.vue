<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <e-map></e-map>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import eMap from './components/eMap'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  components: {
    eMap,
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
