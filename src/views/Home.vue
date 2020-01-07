<template>
  <div class="home">
    <div class="all_content">
      <div class="top">
        <div class="top_item">
          <!-- <img src="../assets/width.png" alt=""> -->
          <span class="text">审批</span>
          <span class="number">36</span>
        </div>
        <div class="top_item">
          <span class="text">汇报</span>
          <span class="number">36</span>
        </div>
        <div class="top_item">
          <span class="text">评价</span>
          <span class="number">36</span>
        </div>
        <div class="top_item">
          <span class="text">全部</span>
          <span class="number">36</span>
        </div>
      </div>
      <div class="center">
        <div class="center_item">
          <div class="duban_item">
            <img src="../assets/home_icon_du.png" alt />
            <span class="item-dital">督办事项</span>
          </div>
          <div>企业增长值</div>
          <div>出席省委全面深化改革第九次大会</div>
          <div>党委省政府出席并筹备省委全面深化改革第九...</div>
          <div>全面深化改革大会</div>
        </div>
        <div class="center_item_button">
          <div class="line_height yanqi_item">
            <img src="../assets/home_icon_yan.png" alt />
            <span class="item-dital">延期事项</span>
          </div>
          <div class="center_item_button_dispaly">
            <div class="with_button_item">出席省委全面深化改革第九次大会</div>
            <span class="button_ture">
              <el-button type="warning" round size="medium">催办</el-button>
            </span>
          </div>
          <div class="center_item_button_dispaly">
            <div class="with_button_item">出席省委全面深化改革第九次大会</div>
            <span class="button_ture">
              <el-button type="warning" round size="medium">催办</el-button>
            </span>
          </div>
          <div class="center_item_button_dispaly">
            <div class="with_button_item">出席省委全面深化改革第九次大会</div>
            <span class="button_ture">
              <el-button type="warning" round size="medium">催办</el-button>
            </span>
          </div>
          <div class="center_item_button_dispaly">
            <div class="with_button_item">出席省委全面深化改革第九次大会</div>
            <span class="button_ture">
              <el-button type="warning" round size="medium" v-if="false">催办</el-button>
              <el-button type="warning" class="has_cuiBan" round  v-else="true">已催办</el-button>
            </span>
          </div>
        </div>

        <div class="center_item_button">
          <div class="line_height huibao_item">
            <img src="../assets/home_icon_hui.png" alt />
            <span class="item-dital">汇报事项</span>
          </div>
          <div class="center_item_button_dispaly">
            <div class="with_button_item">出席省委全面深化改革第九次大会</div>
            <span class="button_ture">
              <el-button type="warning" round size="medium">催办</el-button>
            </span>
          </div>
          <div class="center_item_button_dispaly">
            <div class="with_button_item">出席省委全面深化改革第九次大会</div>
            <span class="button_ture">
              <el-button type="warning" round size="medium">催办</el-button>
            </span>
          </div>
          <div class="center_item_button_dispaly">
            <div class="with_button_item">出席省委全面深化改革第九次大会</div>
            <span class="button_ture">
              <el-button type="warning" round size="medium">催办</el-button>
            </span>
          </div>
          <div class="center_item_button_dispaly">
            <div class="with_button_item">出席省委全面深化改革第九次大会</div>
            <span class="button_ture">
              <el-button type="warning" round size="medium">催办</el-button>
            </span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom_left" id="leftTable"></div>
        <div class="bottom_right" id="rightTable"></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "home",
  components: {},
  mounted() {
    this.drawTableleftTable();
    this.drawTablerightTable();
  },
  methods: {
    // 图表
    drawTableleftTable() {
      var myChart = this.$echarts.init(document.getElementById("leftTable"));

      // 指定图表的配置项和数据
      var option = {
        title: {
          subtext: "{a|}{b|     执行部门督办工作数}",
          // text: "执行部门督办工作数",
          subtextStyle: {
            rich: {
              a: {
                color: "gray",
                fontSize: 18,
                backgroundColor: {
                  image: require("../assets/home_icon_zhixin.png")
                },
                height:"34",
              },
              b: {
                  
                  fontFamily: "MicrosoftYaHei",
                  fontSize: "16",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  letterSpacing: "0",
                  color: "#84c23a"
                }
            }
          },
        
          padding: [
            31, // 上
            10, // 右
            5, // 下
            31 // 左
          ],
          textStyle: {
            fontFamily: "MicrosoftYaHei",
            fontSize: "16",
            fontWeight: "bold",
            fontStretch: "normal",
            letterSpacing: "0",
            color: "#84c23a"
          }
        },
        grid: {
          top: "102", //距上边距

          left: "48", //距离左边距

          right: "31", //距离右边距

          bottom: "31" //距离下边距
        },
        tooltip: {},
        // legend: {
        //   data: ["销量"]
        // },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#dbeccc" },
                  { offset: 1, color: "#a5ec62" }
                ])
              }
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    // 图表
    drawTablerightTable() {
      var myChart = this.$echarts.init(document.getElementById("rightTable"));

      // 指定图表的配置项和数据
      var option = {
        title: {
           subtext: "{a|}{b|     协办部门督办工作数}",
          // text: "协办部门督办工作数",
           subtextStyle: {
            rich: {
              a: {
                color: "gray",
                fontSize: 18,
                backgroundColor: {
                  image: require("../assets/home_icon_xieban.png")
                },
                height:"34",
              },
              b: {
                  
                  fontFamily: "MicrosoftYaHei",
                  fontSize: "16",
                  fontWeight: "bold",
                  fontStretch: "normal",
                  letterSpacing: "0",
                  color: "#edbb47"
                }
            }
          },
          padding: [
            31, // 上
            10, // 右
            5, // 下
            31 // 左
          ],
          textStyle: {
            fontFamily: "MicrosoftYaHei",
            fontSize: "16",
            fontWeight: "bold",
            fontStretch: "normal",
            letterSpacing: "0",
            color: "#edbb47"
          }
        },
        grid: {
          top: "102", //距上边距

          left: "48", //距离左边距

          right: "31", //距离右边距

          bottom: "31" //距离下边距
        },
        tooltip: {},
        // legend: {
        //   data: ["销量"]
        // },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#f5ecd2" },
                  { offset: 1, color: "#ebcf62" }
                ])
              }
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 40px 30px;
  .all_content {
    width: 100%;
    height: 100%;
    .top {
      display: flex;
      justify-content: space-between;
      .top_item {
        display: flex;
        justify-content: space-between;
        line-height: 90px;
        text-align: center;
        width: 240px;
        height: 90px;
        background-color: white;
        border-radius: 10px;

        .text {
          width: 50%;
          height: 25px;
          font-family: MicrosoftYaHei;
          font-size: 18px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 86px;
          letter-spacing: 0px;
          color: #333333;
        }
        .number {
          width: 50%;
          height: 29px;
          font-family: MicrosoftYaHei-Bold;
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          line-height: 86px;
          letter-spacing: 0px;
          color: #333333;
        }
      }
    }
    .center {
      margin: 40px 0 29px 0;
      display: flex;
      justify-content: space-between;
      width: 100%;

      .center_item {
        padding: 0 23px 24px 33px;
        text-align: left;
        // border:1px solid red;
        width: 29%;
        height: 320px;
        background-color: white;
        line-height: 68px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        // justify-content: space-evenly;
        .duban_item {
          display: flex;
          align-items: center;
          img {
            margin-right: 30px;
            width: 28px;
            height: 34px;
          }
          span {
            color: #489cf0;
          }
        }
        div {
          //  display: flex;

          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .center_item_button {
        .yanqi_item {
          display: flex;
          align-items: center;
          img {
            margin-right: 30px;
            width: 34px;
            height: 34px;
          }
          span {
            color: #f0644d;
          }
        }
        .huibao_item {
          display: flex;
          align-items: center;
          img {
            margin-right: 30px;
            width: 34px;
            height: 34px;
          }
          span {
            color: #f0914d;
          }
        }
        .line_height {
          line-height: 68px;
        }

        padding: 0 30px 0 35px;
        text-align: left;
        // border:1px solid red;
        width: 29%;
        height: 320px;
        background-color: white;
        border-radius: 10px;
        .with_button_item {
          width: 66%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .center_item_button_dispaly {
          line-height: 60px;
          display: flex;
          justify-content: space-between;
          .button_ture {
            margin-left: 7%;
            .has_cuiBan{
              border:1px solid #999999;
              background-color: white;
              color: #999;
              width: 70px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .button_ture /deep/ .el-button--medium.is-round{
            background-color: white;
            color: #f0644d;
            border: 1px solid #f0644d
          }
        }
      }
    }
    .bottom {
      display: flex;
      // justify-content: space-between;
      width: 100%;
      .bottom_left {
        background-color: white;
        height: 481px;
        width: calc(~"(50% - 15px)");
      }
      .bottom_right {
        margin-left: 30px;
        background-color: white;
        width: calc(~"(50% - 15px)");
      }
    }
  }
}
</style>