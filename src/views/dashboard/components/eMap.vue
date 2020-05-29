<!--
 * @Author: qiaozp
 * @Date: 2019-05-16 11:33:20
 * @LastEditors: qiaozp
 * @LastEditTime: 2019-05-21 17:05:14
 * @Description: 贵阳市地图
 -->
 <template>
     <div ref="cont_pro_map" style="height:550px;"></div>
 </template>
 
 <script>
    import initEcharts  from '../../../utils/initEchart';
    import { getArea }  from '../../../api/dashboard';
    import areaData from '../../../utils/area'
    export default {
        data() {
            return {
                myChart: null,
                eWidth: '100px',
                eHeight: '100px',
            };
        },
        props: ['mapData'],
        mounted () {
            let vm = this
            vm.drawEcharts()
        },
        methods: {
            drawEcharts() {
                let vm = this
                initEcharts().then( echarts => {
                    vm.myChart = echarts.init(vm.$refs['cont_pro_map']);
                    vm.myChart.showLoading();
                        echarts.registerMap('guiyang', areaData);
                        vm.myChart.hideLoading();
                        const geoCoordMap = {
                            '南阳市': [106.714814,26.616329],
                            '南明区': [106.721713,26.557917],
                            '乌当区': [106.865442,26.754744],
                            '观山湖区': [106.554988,26.626664],
                            '白云区': [106.659047,26.724286]
                        }
                        // let data = vm.mapData
                        let data = [{
                            county:"云岩区",
                            homeCount:"12345"
                        },{
                            county:"南明区",
                            homeCount:"12345"
                        },{
                            county:"乌当区",
                            homeCount:"12345"
                        },{
                            county:"观山湖区",
                            homeCount:"12345"
                        },{
                            county:"白云区",
                            homeCount:"12345"
                        }]

                        let max = 480, min = 90, maxSize4Pin = 15, minSize4Pin = 3;
                        let convertData = function (data) {
                            let res = [];
                            data.forEach(element => {
                                let geoCoord = geoCoordMap[element.county];
                                if(geoCoord) {
                                    res.push({
                                        name: element.county,
                                        value: geoCoord.concat(element.homeCount)
                                    })
                                }
                            });
                            return res;
                        };
                        let option = {
                            title: {
                                text: '贵阳市设备及用户占比',
                                subtext: '',
                                x: 'center',
                                textStyle: {
                                    color: '#000'
                                }
                            },
                            tooltip: {
                                show: false,
                            },
                            legend: {
                                orient: 'vertical',
                                y: 'bottom',
                                x: 'right',
                                data: ['credit_pm2.5'],
                                textStyle: {
                                    color: '#fff'
                                }
                            },
                            geo: {
                                show: true,
                                map: 'guiyang',
                                zoom: 1.2,
                                label: {
                                    normal: {
                                        show: false
                                    },
                                    emphasis: {
                                        show: false,
                                    }
                                },
                                itemStyle: { 
                                    normal: {  //地图样式
                                        areaColor: '#fff',
                                        borderColor: '#f4b02d',
                                        borderWidth: 1
                                    },
                                    emphasis: { //地图选中时样式
                                        areaColor: '#f4b02d'
                                    },
                                },
                                roam: false,
                            },
                            series: [
                                {
                                    type: 'map',
                                    map: 'guiyang',
                                    geoIndex: 0,
                                    aspectScale: 0.85, //长宽比
                                    showLegendSymbol: false, // 存在legend时显示
                                    roam: false, //是否开启鼠标缩放和平移漫游
                                    zoom: 3,
                                    label: {
                                        normal: {
                                            show: false
                                        },
                                        emphasis: {
                                            show: false,
                                            textStyle: {
                                                color: '#fff'
                                            }
                                        }
                                    },
                                    itemStyle: { 
                                    normal: {  //地图样式
                                        areaColor: '#fff',
                                        borderColor: '#f4b02d',
                                        borderWidth: 1
                                    },
                                    emphasis: { //地图选中时样式
                                        areaColor: '#f4b02d'
                                    },
                                },
                                    data: data
                                }, {
                                    name: '点',
                                    type: 'scatter',
                                    coordinateSystem: 'geo',
                                    symbol: 'circle',
                                    symbolSize: function (val) {
                                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                                        var b = minSize4Pin - a*min;
                                        b = maxSize4Pin - a*max;
                                        return a*val[2]+b;
                                    },
                                    label: {
                                        normal: {
                                            formatter: function(params){ 
                                                let str = params.name + '\n' + params.value[2]
                                                return str
                                            },
                                            show: true,
                                            textStyle: {
                                                color: '#000',
                                                fontSize: 16,
                                                padding: [0,0,0,75] 
                                            },
                                            
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: 'none'
                                        }
                                    },
                                    zlevel: 6,
                                    data: convertData(data)
                                }, {
                                    name: 'Top 5',
                                    type: 'effectScatter',
                                    coordinateSystem: 'geo',
                                    data: convertData(data),
                                    symbolSize: function (val) { //蓝色点的大小
                                        return 5
                                    },
                                    hoverAnimation: false,
                                    itemStyle: {
                                        normal: {
                                            color: '#c4090c',
                                            shadowBlur: 10,
                                            shadowColor: '#c4090c'
                                        }
                                    },
                                    zlevel: 1
                                }
                            ]
                        }
                        vm.myChart.setOption(option)
                })
            }
        }
    }
 </script>
 
