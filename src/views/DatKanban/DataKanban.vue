<template>
  <div class="DataKanban">
    <div class="DataKanban_top">
      <img src="../../assets/shu_icon_lb.png" alt />
      <span>协办综合秘书科“重大项目督办任务”已经延期1天，请相关领导及时跟进</span>
    </div>
    <div class="DataKanban_content">
      <div class="DataKanban_button">
        <el-button type="primary" class="data_button" round @click="downloadExcel">导出数据</el-button>
      </div>
      <div class="all_table">
        <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="date" label="部门" align="center"></el-table-column>
          <el-table-column label="完成" align="center">
            <el-table-column prop="name" label="提前完成" align="center"></el-table-column>
            <el-table-column prop="name" label="按时完成" align="center"></el-table-column>
            <el-table-column prop="name" label="延期完成" align="center"></el-table-column>
            <el-table-column prop="name" label="合计" align="center"></el-table-column>
          </el-table-column>
          <el-table-column label="进行中" align="center">
            <el-table-column prop="name" label="正常" align="center"></el-table-column>
            <el-table-column prop="name" label="延期" align="center"></el-table-column>
            <el-table-column prop="name" label="合计" align="center"></el-table-column>
          </el-table-column>
          <el-table-column prop="date" label="中止" align="center"></el-table-column>
          <el-table-column prop="date" label="合计" align="center"></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="DataKanban_bottom">
      <div class="DataKanban_bottom_left">
        <div class="DataKanban_bottom_left_top_top">
          <el-scrollbar style="height:100%">
            <div class="top_top_scollbar">
              <div class="bottom_tital">督办部门参与人数</div>

              <div class="bottom_left_item">
                <span>综合秘书科</span>
                <span>23</span>
              </div>
              <div class="bottom_left_item">
                <span>综合秘书科</span>
                <span>23</span>
              </div>
              <div class="bottom_left_item">
                <span>综合秘书科</span>
                <span>23</span>
              </div>
              <div class="bottom_left_item">
                <span>信息科</span>
                <span>23</span>
              </div>
              <div class="bottom_left_item">
                <span>后勤保障科</span>
                <span>23</span>
              </div>
              <div class="bottom_left_item">
                <span>市政府应急管理办公室</span>
                <span>23</span>
              </div>
              <div class="bottom_left_item_last">
                <span>督查办</span>
                <span>23</span>
              </div>
            </div>
          </el-scrollbar>
        </div>
        <div class="DataKanban_bottom_left_top score_height">
          <el-scrollbar style="height:100%">
            <div class="position_absolute">
              <div class="bottom_left_item">
                <span class="score">事项评分</span>
                <span>年度重点科室督办事项</span>
              </div>
              <div class="bottom_left_item">
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                  class
                ></el-rate>
              </div>
              <div class="bottom_left_item_one">
                <div class="bottom_left_item_one_icon">
                  <div class="left_item_one_pucture"></div>
                  <div class="left_item_one_name">静静</div>
                </div>
                <div>上海大众点评网于2003年4月成立于上海。大众点评是中国领先的本地生活信息及交易平台，也是全球最早建立的独立第三方消费点评网站。</div>
              </div>
              <div class="bottom_left_item_one">
                <div class="bottom_left_item_one_icon">
                  <div class="left_item_one_pucture"></div>
                  <div class="left_item_one_name">静静</div>
                </div>
                <div>上海大众点评网于2003年4月成立于上海。大众点评是中国领先的本地生活信息及交易平台，也是全球最早建立的独立第三方消费点评网站。</div>
              </div>
              <div class="bottom_left_item_one">
                <div class="bottom_left_item_one_icon">
                  <div class="left_item_one_pucture"></div>
                  <div class="left_item_one_name">静静</div>
                </div>
                <div>上海大众点评网于2003年4月成立于上海。大众点评是中国领先的本地生活信息及交易平台，也是全球最早建立的独立第三方消费点评网站。</div>
              </div>
            </div>
          </el-scrollbar>
        </div>
        <div></div>
      </div>
      <div class="DataKanban_bottom_right">
        <div class="DataKanban_bottom_right_content">
          <div class="bottom_Table" id="Table"></div>
        </div>
      </div>
    </div>
  </div>
</template>
 

<script>
export default {
  data() {
    return {
      value: 2,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      multipleSelection:[],
      excelData:[],
    };
  },
  created() {},
  mounted() {
    this.drawTable("Table");
  },
  methods: {
    // 图表
    drawTable(value) {
      var myChart = this.$echarts.init(document.getElementById(value));

      // 指定图表的配置项和数据
      var option = {
        color: ["#faea5a", "#faaa5a", "#8adb4f", "#f95af3", "#f05656"],
        title: {
          text: "部门项目数量"
        },
        grid: {
          top: "62", //距上边距

          left: "31", //距离左边距

          right: "31", //距离右边距

          bottom: "31" //距离下边距
        },
        tooltip: {},
        legend: {
          data: ["提前完成", "按时完成", "延期完成", "正常", "延期"]
        },
        xAxis: {
          data: [
            "综合秘书科",
            "综合秘书科",
            "综合秘书科",
            "综合秘书科",
            "综合秘书科"
          ]
        },
        yAxis: {},
        series: [
          {
            name: "提前完成",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          },
          {
            name: "按时完成",
            type: "bar",
            data: [6, 26, 34, 15, 16, 22]
          },
          {
            name: "延期完成",
            type: "bar",
            data: [6, 26, 34, 15, 16, 22]
          },
          {
            name: "正常",
            type: "bar",
            data: [6, 26, 34, 15, 16, 22]
          },
          {
            name: "延期",
            type: "bar",
            data: [6, 26, 34, 15, 16, 22]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    // 选择数据
    handleSelectionChange(val) {
      // 操作多选
      this.multipleSelection = val; // 多选的行会存入multipleSelection数组中
    },
    // 列表下载
    downloadExcel() {
      this.$confirm("确定下载列表文件?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.excelData = this.multipleSelection; // multipleSelection是一个数组，存储表格中选择的行的数据。
          this.export2Excel();
        })
        .catch(() => {});
    },

    // 数据写入excel
    export2Excel() {
      var that = this;
      require.ensure([], () => {
        const { export_json_to_excel } = require("@/excel/export2Excel"); // 这里必须使用绝对路径
        const tHeader = ["部门", "提前完成", "按时完成","延期完成"]; // 导出的表头名信息
        const filterVal = ["name", "date", "表头字段名3"]; // 导出的表头字段名，需要导出表格字段名
        const list = that.excelData;
        const data = that.formatJson(filterVal, list);

        export_json_to_excel(tHeader, data, "各部门数据"); // 导出的表格名称，根据需要自己命名
      });
    },
    // 格式转换
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="less" scoped>
.DataKanban {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 20px;
  .DataKanban_top {
    background-color: white;
    height: 35px;
    border-radius: 25px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    img {
      width: 24px;
      height: 20px;
      margin-left: 32px;
    }

    span {
      margin-left: 19px;
      height: 23px;
    }
  }
  .DataKanban_content {
    padding: 30px;
    background-color: white;
    .DataKanban_button {
      display: flex;
      justify-content: space-between;
      margin-bottom: 26px;
      .data_button {
        background-color: #f99d5a;
        border: none;
      }
      .back {
        color: #f99d5a;
        border: 1px solid #f99d5a;
      }
    }
    .all_table {
      background-color: white;
      // margin-bottom: 30px;
    }
  }
  .DataKanban_bottom {
    width: 100%;
    display: flex;
    .DataKanban_bottom_left {
      width: 30%;
      margin-right: 20px;
      .DataKanban_bottom_left_top_top {
        border-radius: 10px;
        height: 359px;
        background-color: white;
        margin: 20px 20px 17px 0;
        padding: 30px 0;
        width: 100%;
        .top_top_scollbar {
          padding: 0 30px;
        }
        .bottom_tital {
          font-family: MicrosoftYaHei-Bold;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 40px;
        }
        .bottom_left_item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
      }
      .DataKanban_bottom_left_top {
        border-radius: 10px;
        background-color: white;
        margin: 20px 20px 17px 0;
        padding: 30px 0;
        width: 100%;
        .position_absolute {
          padding: 0 30px;
        }
        .bottom_tital {
          font-family: MicrosoftYaHei-Bold;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 40px;
        }
        .bottom_left_item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        .bottom_left_item /deep/ .el-rate {
          position: relative;
          margin-top: 20px;
        }
        .bottom_left_item /deep/ .el-rate__text {
          position: absolute;
          left: 0;
          top: -27px;
          font-weight: bold;
          font-size: 32px;
        }
        .bottom_left_item_last {
          display: flex;
          justify-content: space-between;
        }
        .score {
          font-family: MicrosoftYaHei-Bold;
          font-size: 18px;
          font-weight: bold;
          // margin-bottom: 40px;
        }
        .bottom_left_item_one {
          width: 100%;
          margin-bottom: 63px;
          .bottom_left_item_one_icon {
            display: flex;
            align-items: center;
            margin-bottom: 25px;
            .left_item_one_pucture {
              width: 54px;
              height: 54px;
              background-color: #ffd9d9;
              border-radius: 50%;
            }
            .left_item_one_name {
              margin-left: 22px;
            }
          }
        }
      }
      .score_height {
        height: 569px;

        // overflow-y: auto;
      }

      // border: 1px solid rebeccapurple;
    }
    .DataKanban_bottom_right {
      width: 70%;
      padding: 20px 20px 20px 0;
      .DataKanban_bottom_right_content {
        border-radius: 10px;
        background-color: white;
        padding: 30px;
        .bottom_Table {
          width: 100%;
          height: 888px;
        }
      }
    }
  }
}
</style>