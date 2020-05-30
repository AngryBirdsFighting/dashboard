<template>
 
  <div class="dashboard-container">
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

<style lang="scss" >
body{
  background-color: rgb(2, 14, 35) ;
  overflow: hidden ;
}
.dashboard-container{
  background: url("../../assets/img/bg-01.png") no-repeat;
  width: 6144px;
  height: 3072px;
  transform: scale(0.301758) translate(82.8479px, 0px);
  transform-origin: left top;
}
</style>
