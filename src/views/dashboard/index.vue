<template>
    <div class="dashboard">
        <div class="dashboard-header">
            <div class="header-left">
                <div class="select1">
                    医学考试
                </div>
                <div class="select2">
                    药学（中医药学）综合知识与技能
                </div>
            </div>
            <div class="header-middle"></div>
            <div class="header-right"></div>
        </div>
        <div class="dashboard-container">
            <div class="left-box hi">
                <div class="left-top">
                    <div class="left-top-header">
                        <div class="left-title title">考试基本信息</div>
                        <div class="person-num"></div>
                    </div>
                    <div class="left-top-content">
                        <ul>
                            <li class="li-bg">
                                <span class="content-time">20月29日</span>
                                <span>09:00-11:30</span>
                                <span>药学（中药学）专业知识（一）</span>
                            </li>
                            <li>
                                <span class="content-time hi">20月29日</span>
                                <span>09:00-11:30</span>
                                <span>药学（中药学）专业知识（一）</span>
                            </li>
                            <li class="li-bg">
                                <span class="content-time">20月29日</span>
                                <span>09:00-11:30</span>
                                <span>药学（中药学）专业知识（一）</span>
                            </li>
                            <li>
                                <span class="content-time hi">20月29日</span>
                                <span>09:00-11:30</span>
                                <span>药学（中药学）专业知识（一）</span>
                            </li>
                            <li class="li-bg">
                                <span class="content-time">20月29日</span>
                                <span>09:00-11:30</span>
                                <span>药学（中药学）专业知识（一）</span>
                            </li>
                            <li>
                                <span class="content-time hi">20月29日</span>
                                <span>09:00-11:30</span>
                                <span>药学（中药学）专业知识（一）</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="left-bottom">
                    <div class="left-title title">今日任务执行情况</div>
                    <div class="left-bottom-contet">
                        <div>
                            <div class="echarts-contet-title">按专业统计</div>
                            <e-circle :data="cirCle1Data"></e-circle>
                        </div>
                        <div>
                            <div class="echarts-contet-title">按性别统计</div>
                            <e-circle :data="cirCle2Data"></e-circle>
                        </div>
                        <div>
                            <div class="echarts-contet-title">按级别统计</div>
                            <e-circle :data="cirCle3Data"></e-circle>
                        </div>
                        <div>
                            <div class="echarts-contet-title">按学历统计</div>
                            <e-ring :data="cirCle4Data"></e-ring>
                        </div>
                        <div class="last-div">
                            <div class="echarts-contet-title">按考区统计</div>
                            <e-area :data="areaData"></e-area>
                        </div>
                    </div>
                </div>
            </div>
            <div class="middle-box hi">
                <div class="middle-schedule">
                    <div class="schedule-title">上报进度</div>
                    <div class="schedule-list">
                        <ul>
                            <li
                                v-for="(iten, index) in new Array(60)"
                                :key="index"
                                :class=" index < 20 ? 'check-color' : ''"
                            ></li>
                        </ul>
                    </div>
                    <div class="schedule-num">3/7</div>
                </div>
                <div class="middle-ring">
                    <div class="ring-one"></div>
                    <div
                        class="ring-two"
                        :style="'clip-path:polygon(0 '+ ring1Style.num1 + ', 100% '+ ring1Style.num2 + ', 100% 100%, 0 100%)'"
                    ></div>
                    <div class="ring-text">
                        <p>92%</p>
                    </div>
                     <p class="ring-title">总参考率</p>
                </div>
                <div class="middle-count">
                    <ul>
                        <li>
                            <p class="p1">13254</p>
                            <p class="p2">考区</p>
                        </li>
                        <li>
                            <p class="p1">13254</p>
                            <p class="p2">考区</p>
                        </li>
                        <li>
                            <p class="p1">13254</p>
                            <p class="p2">考区</p>
                        </li>
                        <li>
                            <p class="p1">13254</p>
                            <p class="p2">考区</p>
                        </li>
                        <li>
                            <p class="p1">13254</p>
                            <p class="p2">考区</p>
                        </li>
                    </ul>
                </div>
                <div class="middle-bar">
                    <div class="echarts-contet-title">按级别统计</div>
                    <div class="bar1">
                        <e-bar :data="bar1Data"></e-bar>
                    </div>
                </div>
                <e-map ></e-map>
                <div class="middle-dialog">
                  <div class="jiankong"></div>
                  <div class="quekao"></div>
                </div>
            </div>
            <div class="right-box hi">
                <div class="right-top">
                    <div class="right-top-header">
                        <div class="right-title title">郑州市考务情况</div>
                    </div>
                    <div class="right-top-content">
                        <div class="content1">
                            <div class="right-ring">
                                <div class="ring-one"></div>
                                <div
                                    class="ring-two"
                                    :style="'clip-path:polygon(0 '+ ring1Style.num1 + ', 100% '+ ring1Style.num2 + ', 100% 100%, 0 100%)'"
                                ></div>
                                <div class="ring-text">
                                    <p>92%</p>
                                    <p>总参考率</p>
                                </div>
                            </div>
                            <div class="right-data">
                                <div class="data-left">
                                    <span>4</span>
                                    <span>考点数</span>
                                    <span class="spacing-top">12580</span>
                                    <span>报考人数</span>
                                </div>
                                <div class="data-right">
                                    <span>4</span>
                                    <span>考场数</span>
                                    <span class="spacing-top">12580</span>
                                    <span>缺考人数</span>
                                </div>
                            </div>
                        </div>
                        <div class="content2">
                            <div class="echarts-contet-title right-content-title" style="width:500px;">各考点参考率统计</div>
                            <div class="bar2">
                                <e-bar :data="bar2Data"></e-bar>
                            </div>
                        </div>
                        <div class="content2" style="margin-top:100px;">
                            <div class="echarts-contet-title right-content-title" style="width:500px;">各考点参考率统计</div>
                            <div class="bar2">
                                <e-bar :data="bar3Data"></e-bar>
                            </div>
                        </div>
                        <div class="content3">
                            <div class="middle-schedule">
                                <div class="schedule-title">上报进度</div>
                                <div class="schedule-list">
                                    <ul>
                                        <li
                                            v-for="(iten, index) in new Array(60)"
                                            :key="index"
                                            :class=" index < 20 ? 'check-color' : ''"
                                        ></li>
                                    </ul>
                                </div>
                                <div class="schedule-num">3/7</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import eMap from "./components/eMap";
import eCircle from "./components/eCircle";
import eRing from "./components/eRing";
import eArea from "./components/eArea";
import eBar from "./components/eBar";
export default {
    name: "Dashboard",
    data() {
        return {
            cirCle1Data: {
                data: [
                    { value: 60, name: "非用户" },
                    { value: 50, name: "包干用户" },
                    { value: 50, name: "干用户" }
                ],
                refName: "cirCle1",
                isShowLabel: true,
                color: ["#4d6fff", "#ffb31a", "#00d2ff"]
            },
            cirCle2Data: {
                data: [{ value: 60, name: "男" }, { value: 50, name: "女" }],
                refName: "cirCle2",
                isShowLabel: false,
                color: ["#f4314e", "#00c5e5"]
            },
            cirCle3Data: {
                data: [
                    { value: 60, name: "非用户" },
                    { value: 50, name: "包干用户" },
                    { value: 50, name: "干用户" }
                ],
                refName: "cirCle1",
                isShowLabel: true,
                color: ["#4d6fff", "#ffb31a", "#00d2ff"]
            },
            cirCle4Data: {
                data: [
                    { value: 60, name: "非用户" },
                    { value: 50, name: "包干用户" },
                    { value: 50, name: "干用户" }
                ],
                refName: "cirCle1",
                isShowLabel: true,
                color: ["#4d6fff", "#ffb31a", "#00d2ff"]
            },
            areaData: {
                data: [
                    { value: 60, name: "非用户" },
                    { value: 50, name: "包干用户" },
                    { value: 50, name: "干用户" }
                ],
                refName: "area"
            },
            bar1Data: {
                data: [],
                refName: "bar1",
                color: "#4d8dff"
            },
            bar2Data: {
                data: [],
                refName: "bar2",
                color: "#4d8dff"
            },
            bar3Data: {
                data: [],
                refName: "bar3",
                color: "#4d8dff"
            },
            ring1Style: {
                num1: "80%",
                num2: "80%"
            }
        };
    },
    computed: {
        ...mapGetters(["name"])
    },
    components: {
        eMap,
        eCircle,
        eRing,
        eArea,
        eBar
    }
};
</script>

<style lang="scss" >
body {
    background-color: rgb(2, 14, 35);
    overflow: hidden;
}
.dashboard {
    background: url("../../assets/img/bg-01.png") no-repeat;
    width: 6144px;
    height: 3072px;
    transform: scale(0.301758) translate(82.8479px, 0px);
    transform-origin: left top;
    color: white;
    .title {
        font-size: 52px;
    }
    .check-color {
        background: #00ffff !important;
    }
    .left-title {
        width: 50%;
        height: 150px;
        padding-top: 20px;
        padding-left: 100px;
    }
    .echarts-contet-title {
        width: 349px;
        height: 75px;
        line-height: 75px;
        font-size: 48px;
        padding-left: 38px;
        background: url("../../assets/img/content-title-bg.png") no-repeat;
        background-size: 100%;
    }
    .right-content-title{
        background: url("../../assets/img/right-title.png") no-repeat;
    }
    .hi {
        visibility: hidden;
    }
    .li-bg {
        border: 1px solid #032f4d;
        background: #0b1e3e;
    }
    & > div {
        width: 100%;
        box-sizing: border-box;
    }
    .dashboard-header {
        height: 200px;
        display: flex;
        div{
            border: 1px solid red;
        }
        .header-left{
            height: 100%;
            width: 1700px;
            display: flex;
            font-size: 60px;
            justify-content: space-around;
            .select1{
                margin-top: 55px;
                width: 551px;
                height: 90px;
                line-height: 90px;
                background: url("../../assets/img/select1.png") no-repeat;
            }
            .select2{
                margin-top: 55px;
                width: 1000px;
                height: 90px;
                line-height: 90px;
                background: url("../../assets/img/select2.png") no-repeat;
            }
        }
    }
    .dashboard-container {
        height: 2832px;
        display: flex;
        margin-top: 40px;
    }
    .left-box {
        width: 1570px;
        height: 100%;
        .left-top {
            width: 100%;
            height: 1000px;
            .left-top-header {
                widows: 100%;
                display: flex;
                .person-num {
                    width: 50%;
                    height: 150px;
                }
            }
            .left-top-content {
                height: 850px;
                width: 100%;
                padding: 4% 10%;
                font-size: 48px;
                text-align: center;
                li {
                    display: flex;
                    height: 100px;
                    line-height: 100px;
                    justify-content: space-around;
                }
            }
        }
        .left-bottom {
            width: 100%;
            height: 1832px;
            .left-bottom-contet {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                padding-left: 70px;
                & > div {
                    // border: 1px solid #fff;
                    width: 50%;
                    height: 544px;
                    padding-left: 50px;
                }
                .last-div {
                    width: 100%;
                }
            }
        }
    }
    .middle-box {
        width: 2856px;
        height: 100%;
        position: relative;
        top:-200px;
        // border: 1px solid #fff;
        .middle-schedule {
            position: absolute;
            width: 1200px;
            height: 100px;
            top: 400px;
            left: 70px;
            display: flex;
            border: 2px solid #0b3459;
            background: #0c254b;
            .schedule-title {
                width: 200px;
                height: 100px;
                line-height: 100px;
                font-size: 42px;
                text-align: center;
            }
            .schedule-list {
                flex-grow: 1;
                ul {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    height: 100%;
                    li {
                        width: 5px;
                        height: 36px;
                        background: #183c6e;
                    }
                }
            }
            .schedule-num {
                width: 150px;
                font-size: 48px;
                height: 100px;
                line-height: 100px;
                text-align: center;
            }
        }
        .middle-ring {
            position: relative;
            width: 400px;
            height: 300px;
            left: 70px;
            top: 600px;
            background: url("../../assets/img/middle-ring.png") no-repeat;
            text-align: center;
            .ring-one {
                position: absolute;
                width: 210px;
                height: 210px;
                top: 40px;
                left: 95px;
                border-radius: 50%;
                border: 10px solid #193d70;
            }
            .ring-two {
                position: absolute;
                width: 210px;
                height: 210px;
                top: 40px;
                left: 95px;
                border-radius: 50%;
                border: 10px solid #00d2ff;
            }
            .ring-text {
                position: absolute;
                width: 200px;
                height: 120px;
                top: 120px;
                left: 114px;
                font-size: 46px;
            }
            .ring-title{
              position: absolute;
                width: 200px;
                height: 120px;
                top: 300px;
                left: 110px;
                font-size: 46px;
            }
        }
        .middle-count {
            position: absolute;
            width: 250px;
            height: 1540px;
            background: url("../../assets/img/middle-bg1.png") no-repeat;
            top: 600px;
            right: 30px;
            z-index: 1000;
            ul {
                height: 100%;
                width: 100%;
                margin-top: -54px;
                li {
                    width: 100%;
                    height: 120px;
                    margin-top: 194px;
                    p {
                        width: 100%;
                        color: #00ffff;
                        text-align: center;
                    }
                    .p1 {
                        font-size: 50px;
                    }
                    .p2 {
                        font-size: 40px;
                    }
                }
            }
        }
        .middle-bar {
            position: absolute;
            width: 1600px;
            height: 370px;
            bottom: -150px;
            background: rgba(4, 50, 111, 0.2);
            left: 70px;
            z-index: 1000;
            .bar1 {
                width: 100%;
                height: 295px;
            }
        }
        .middle-dialog{
          position: absolute;
          width: 690px;
          height: 1200px;
          top:1195px;
          left:2956px;
          z-index:100000;
          .jiankong{
             width: 100%;
            height: 478px;
            background: url("../../assets/img/jiankong.png") no-repeat;
          }
          .quekao{
            margin-top: 390px;
            width: 100%;
            height: 380px;
            background: url("../../assets/img/quekao.png") no-repeat;
          }
        }
    }
    .right-box {
        width: 1722px;
        height: 100%;
        // border: 1px solid #fff;
        .right-top {
            height: 80px;
            line-height: 80px;
            padding-left: 30px;
        }
        .right-top-content {
            .content1 {
                height: 700px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                .right-ring {
                    position: relative;
                    width: 710px;
                    height: 400px;
                    background: url("../../assets/img/right-ring.png") no-repeat;
                    text-align: center;
                    .ring-one {
                        position: absolute;
                        width: 320px;
                        height: 320px;
                        top: 40px;
                        left: 195px;
                        border-radius: 50%;
                        border: 10px solid #193d70;
                    }
                    .ring-two {
                        position: absolute;
                        width: 320px;
                        height: 320px;
                        top: 40px;
                        left: 195px;
                        border-radius: 50%;
                        border: 10px solid #00d2ff;
                    }
                    .ring-text {
                        position: absolute;
                        width: 200px;
                        height: 120px;
                        top: 120px;
                        left: 255px;
                        font-size: 46px;
                    }
                }
                .right-data {
                    width: 870px;
                    height: 400px;
                    background: url("../../assets/img/right-data.png") no-repeat;
                    display: flex;
                    div {
                        width: 50%;
                        font-size: 48px;
                        span {
                            display: block;
                            width: 100%;
                            height: 90px;
                            line-height: 90px;
                        }
                        .spacing-top {
                            margin-top: 40px;
                        }
                        span:nth-child(even) {
                            color: #c0dbff;
                        }
                        span:nth-child(odd) {
                            color: #00ffff;
                        }
                    }
                    .data-left {
                        padding-left: 50px;
                    }
                    .data-right {
                        text-align: right;
                        padding-right: 50px;
                    }
                }
            }
            .content2 {
                width: 100%;
                height: 780px;
                .bar2 {
                    width: 100%;
                    margin-top: 100px;
                    height: 600px;
                }
            }
            .content3 {
                margin-top: 120px;
                .middle-schedule {
                    width: 1500px;
                    height: 100px;
                    display: flex;
                    border: 2px solid #0b3459;
                    background: #0c254b;
                    .schedule-title {
                        width: 200px;
                        height: 100px;
                        line-height: 100px;
                        font-size: 42px;
                        text-align: center;
                    }
                    .schedule-list {
                        flex-grow: 1;
                        ul {
                            display: flex;
                            align-items: center;
                            justify-content: space-around;
                            height: 100%;
                            li {
                                width: 5px;
                                height: 36px;
                                background: #183c6e;
                            }
                        }
                    }
                    .schedule-num {
                        width: 150px;
                        font-size: 48px;
                        height: 100px;
                        line-height: 100px;
                        text-align: center;
                    }
                }
            }
        }
    }
}
//reset.css 你那里有就删了吧
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    font-weight: normal;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
ol,
ul,
li {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* custom */
a {
    color: #7e8c8d;
    text-decoration: none;
    -webkit-backface-visibility: hidden;
}
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}
::-webkit-scrollbar-track-piece {
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 6px;
}
::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background-color: rgba(125, 125, 125, 0.7);
    -webkit-border-radius: 6px;
}
::-webkit-scrollbar-thumb:horizontal {
    width: 5px;
    background-color: rgba(125, 125, 125, 0.7);
    -webkit-border-radius: 6px;
}
html,
body {
    width: 100%;
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", "微软雅黑",
        sans-serif;
}
body {
    line-height: 1;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
    overflow-y: scroll;
}

/*清除浮动*/
.clearfix:before,
.clearfix:after {
    content: " ";
    display: inline-block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix {
    *zoom: 1;
}

/*隐藏*/
.dn {
    display: none;
}
</style>
