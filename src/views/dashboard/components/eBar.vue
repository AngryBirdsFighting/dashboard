
<template>
    <div :ref="data.refName"  class="echars-line"></div>
</template>

<script>
import initEcharts  from '../../../utils/initEchart'
    export default {
        data() {
            return {
            };
        },
        props: ['data'],
        mounted () {
            this.drawEcharts()
        },
        methods: {
            drawEcharts() {
                initEcharts().then(echarts => {
                    let name = this.data.refName;
                    this.myChart = echarts.init(this.$refs[name]);
                    this.myChart.setOption({
                        tooltip: {
                            trigger: "axis",
                            axisPointer: {
                                type: "cross",
                                label: {
                                    backgroundColor: "#6a7985"
                                }
                            }
                        },
    
                        toolbox: {
                            x: "97%",
                            feature: { 
                                saveAsImage: {
                                    
                                } 
                            }
                        },
                        // legend: {
                        //     left: '10%',
                        //     data:['用气量', '平均温度']
                        // },
                        grid: {
                            left: "3%",
                            right: "4%",
                            bottom: 0,
                            containLabel: true
                        },
                        xAxis: [
                            {
                                axisPointer: {
                                    type: 'shadow'
                                },
                                type: "category",
                                 axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: '#fff',
                                        fontSize:34
                                    }
                                },
                                axisLine:{
                                    lineStyle:{
                                        color:"#235ead",
                                        width:5
                                    }
                                },
                                data: [1,2,3,4,6,7,8,9]
                            }
                        ],
                        yAxis: [
                           {
                               show:false,
                                type: 'value',
                                name: '温度',
                                min: 0,
                                max: 30,
                                interval: 5,
                                 axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: '#fff',
                                        fontSize:34
                                    }
                                },
                                // axisLabel: {
                                //     formatter: '{value} °C'
                                // }
                            }
                        ],
                        series: [{
                            name: '用气量',
                            data: [{
                                name:"23",
                                value:"100"
                            },
                            {
                                name:"23",
                                value:"100"
                            },{
                                name:"23",
                                value:"100"
                            },{
                                name:"23",
                                value:"100"
                            },{
                                name:"23",
                                value:"100"
                            },{
                                name:"23",
                                value:"100"
                            },{
                                name:"23",
                                value:"100"
                            },{
                                name:"23",
                                value:"100"
                            },{
                                name:"23",
                                value:"100"
                            }],
                            type: 'bar',
                             barWidth :40,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    color: '#000',
                                }
                            },
                            itemStyle: {
                                color:this.data.color
                            }
                        }],
                    })
                })
            },

            //清理画布
            clear() {
                this.myChart.clear()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .echars-line {
		width: 100%;
		height: 100%;
    }
</style>
