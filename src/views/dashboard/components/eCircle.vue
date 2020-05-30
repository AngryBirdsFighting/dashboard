<!--
 * @Author: your name
 * @Date: 2020-05-30 11:44:02
 * @LastEditTime: 2020-05-30 15:06:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \dashboard\src\views\dashboard\components\eCircle.vue
--> 


<template>
    <div :ref="data.refName" class="echars-line"></div>
</template>

<script>
import initEcharts  from '../../../utils/initEchart'
export default {
  name: "scrollPane",
  data() {
    return {
      myChart: null
    };
  },
  props: ["data"],
  mounted() {
    initEcharts().then(echarts => {
      let name = this.data.refName;
      this.myChart = echarts.init(this.$refs[name]);
      this.myChart.setOption({
        title: {},
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
          show:false,
        },
        // legend: {
        //   bottom: 5,
        //   itemHeight: 6,
        //   itemWidth: 10,
        //   data: ["非包干用户", "包干用户"]
        // },
        // toolbox: {
        //   show: false,
        //   feature: {
        //     mark: { show: true },
        //     dataView: { show: true, readOnly: false },
        //     magicType: {
        //       show: true,
        //       type: ["pie", "funnel"]
        //     },
        //     restore: { show: true },
        //     saveAsImage: { show: true }
        //   }
        // },
        calculable: false,
        color: this.data.color,
        series: [
          {
            name: "",
            type: "pie",
            radius: '50%',
            center: ["40%", "40%"],
            label: {
                normal:{
                    show:true,
                    formatter:function(params){ //标签内容
                        return  params.name+'\n'+params.value
                    },
                    position:!this.data.isShowLabel ? "inner" : "outside", //标签的位置
                    color:'#fff',
                    fontSize: 34,
                    fontWeight:'normal',
                },
            },
            data:this.data.data
          }
        ]
      });
    });
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .echars-line {
    width: 100%;
    height: 100%;
  }
</style>
