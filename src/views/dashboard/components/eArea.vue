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
          trigger: "axis"
        },
        grid: {
          left: 50,
          right: 60,
          top: 45
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            name: "",
            nameTextStyle:{
                color :'#fff',
                fontSize:34
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                     fontSize:34
                }
            },
            data: [
              "00:00", "01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00", "10:00"
            ]
          }
        ],
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1,[{
            offset: 0, color: '#c7e9f4' // 0% 处的颜色
            }, {
                offset: 1, color: '#077093' // 100% 处的颜色
            }]
        ), //背景渐变色    
        yAxis: [
          {
            name: "",
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                     fontSize:34
                }
            },
          }
        ],
        series: [
          {
            smooth: true,
            name: "用气量",
            type: "line",
            itemStyle: { 
                normal: {
                    areaStyle: { type: "default" } },
                    color:'#fff',
                    fontSize: 34,
                    fontWeight:'normal',
                },
            data: [
              2,10,21,8,36,14,19,25, 28,9,40
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
  height: 80%;
  margin: 0;
  padding: 0;
}
</style>
