

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
       
        legend: {
            orient: 'vertical',
            right:100,
            bottom: 200,
            itemHeight:20,
            itemWidth:50,
            itemGap:40,
            textStyle:{
                color :'#fff',
                fontSize:34
            },
            formatter: function( name){
                return name + "15%"
            },
            data: ["离线",  "开机", "故障", "关机"]
        },
        color: ["#f4314e", "#00d2ff", "#4d6fff", "#ffa100"],
        series: [
          {
            type: "pie",
            center: ["30%", "40%"],
            radius: ["40%", "50%"],
            label: {
              normal: {
                formatter: "{b|{b}：}{c} \n{per|（{d}%）}  ",
                show: false,
                rich: {
                  a: {
                    color: "#999",
                    align: "center"
                  },
                  hr: {
                    borderColor: "#aaa",
                    width: "100%",
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 12,
                    lineHeight: 25
                  },
                  per: {
                    color: "#000",
                    // backgroundColor: "#334455",
                    padding: [0, 0],
                    borderRadius: 2
                  }
                }
              }
            },
            itemStyle: {
              normal: {
                labelLine: {
                  //指示线状态
                  show: false,
                  smooth: 0.1,
                  length: 10,
                  length2: 10
                }
              }
            },
            data: [
              { value: 335, name: "离线" },
              { value: 148, name: "故障" },
              { value: 400, name: "关机" },
              { value: 1000, name: "开机" }
            ]
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
  top: -30px;
}
</style>
