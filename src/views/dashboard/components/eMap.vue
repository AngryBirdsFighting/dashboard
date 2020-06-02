
 <template>
  <div class="echars-line" ref="cont_pro_map"></div>
</template>
 <script>
import initEcharts from "../../../utils/initEchart";
import areaData from "../../../utils/area";
export default {
  data() {
    return {
      myChart: null
    };
  },
  props: ["mapData"],
  mounted() {
    let vm = this;
    vm.drawEcharts();
  },
  methods: {
    drawEcharts() {
        let vm = this;
        initEcharts().then(echarts => {
            vm.myChart = echarts.init(vm.$refs["cont_pro_map"]);
            vm.myChart.showLoading();
            echarts.registerMap("guiyang", areaData);
            vm.myChart.hideLoading();
            const geoCoordMap = {
            "南阳市": [112.4011, 33.0359],
            "信阳市": [114.8291, 32.0197],
            "洛阳市": [112.0605, 34.3158],
            "周口市": [114.873, 33.6951],
            "驻马店市": [114.1589, 32.9041],
            "三门峡市": [110.8301, 34.3158],
            "商丘市": [115.741, 34.2828],
            "新乡市": [114.2029, 35.3595],
            "平顶山市": [112.9724, 33.739],
            "郑州市": [113.4668, 34.6234],
            "安阳市": [114.5325, 36.0022],
            "开封市": [114.5764, 34.6124],
            "焦作市": [112.8406, 35.1508],
            "许昌市": [113.6975, 34.0466],
            "漯河市": [113.8733, 33.6951],
            "鹤壁市": [114.3787, 35.744],
            "濮阳市": [115.1917, 35.799],
            };
            let data = [
                {name:'南阳市', value: 40000.34,text:'贷款笔数：54412<br/>贷款金额：468452.35万',selected:true},
                {name:'信阳市', value: 38000,text:'缴存人数：32412'},
                {name:'洛阳市', value: 18000,text:'缴存人数：22412'},
                {name:'驻马店市', value: 15092,text:'缴存人数：42412'},
                {name:'周口市', value: 28000,text:'缴存人数：52412'},
                {name:'三门峡市', value: 12000,text:'缴存人数：72412'},
                {name:'商丘市', value: 32000,text:'缴存人数：82412'},
                {name:'新乡市', value: 5100,text:'缴存人数：6412'},
                {name:'平顶山市', value: 2200,text:'缴存人数：3412'},
                {name:'郑州市', value: 15092,text:'缴存人数：42412'},
                {name:'安阳市', value: 28000,text:'缴存人数：52412'},
                {name:'开封市', value: 12000,text:'缴存人数：72412'},
                {name:'焦作市', value: 32000,text:'缴存人数：82412'},
                {name:'许昌市', value: 5100,text:'缴存人数：6412'},
                {name:'漯河市', value: 2200,text:'缴存人数：3412'},
                {name:'鹤壁市', value: 2200,text:'缴存人数：3412'},
                {name:'濮阳市', value: 4918,text:'缴存人数：66412'}
             ];
            let max = 480,
                min = 90,
                maxSize4Pin = 15,
                minSize4Pin = 3;
            let convertData = function(data) {
                let res = [];
                data.forEach(element => {
                    let geoCoord = geoCoordMap[element.name];
                    if (geoCoord) {
                    res.push({
                        name: element.name,
                        value: geoCoord.concat(element. value)
                    });
                    }
                });
                return res;
            };
            let option = {
                title: {
                    text: "",
                    subtext: "",
                    x: "center",
                    textStyle: {
                        color: "#000"
                    }
                },
                tooltip: {
                    show: false
                },
                legend: {
                    orient: "vertical",
                    y: "bottom",
                    x: "right",
                    data: ["credit_pm2.5"],
                    textStyle: {
                    color: "#fff"
                    }
                },
                geo: {
                    show: true,
                    map: "guiyang",
                    zoom: 1.2,
                    label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                    },
                    itemStyle: {
                    normal: {
                        //地图样式
                        areaColor: "#0d3162",
                        borderColor: "#097293",
                        borderWidth: 1
                    },
                    emphasis: {
                        //地图选中时样式
                        areaColor: "#03a6c8"
                    }
                    },
                    roam: false
                },
                series: [
                    {
                        type: "map",
                        map: "henan",
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
                                fontSize:50,
                                color: "#fff"
                            }
                            }
                        },
                        data: data
                    },
                    {
                        name: "点",
                        type: "scatter",
                        coordinateSystem: "geo",
                        symbol: "circle",
                        symbolSize: function(val) {
                            var a = (maxSize4Pin - minSize4Pin) / (max - min);
                            var b = minSize4Pin - a * min;
                            b = maxSize4Pin - a * max;
                            return a * val[2] + b;
                        },
                        label: {
                            normal: {
                            formatter: function(params) {
                                let str = params.name + "\n" + params.value[2];
                                return str;
                            },
                            show: true,
                            // 地图字体样式
                            textStyle: {
                                color: "#00c5e5", 
                                fontSize: 40,
                                padding: [120, 0, 0, 55]
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                            color: "none"
                            }
                        },
                        zlevel: 6,
                        data: convertData(data)
                    },
                    {
                    name: "Top 5",
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    data: convertData(data),
                    symbolSize: function(val) {
                        //蓝色点的大小
                        return 20;
                    },
                    hoverAnimation: false,
                    // 地图点样式
                    itemStyle: {
                        normal: {
                        color: "#00c5e5",
                        shadowBlur: 10,
                        shadowColor: "#00c5e5"
                        }
                    },
                    zlevel: 1
                    }
                ]
            };
            let a = vm.myChart.setOption(option);
            console.log(  echarts)
            // 点击事件
            vm.myChart.on('click', function (params) {
                console.log(params);
            });
            // 移入事件
            vm.myChart.on("mouseover", function (params){
                console.log(params)
                // params.color = "#FFF"
                if(params.data.value != undefined){
                    // vm.myChart.dispatchAction({
                    //     type: 'downplay'
                    // });
                }
            });
        });
    }
  }
};
</script>
 <style rel="stylesheet/scss" lang="scss" scoped>
.echars-line {
  width: 100%;
  height: 96%;
  margin: 0;
  padding: 0;
}
</style>

 
