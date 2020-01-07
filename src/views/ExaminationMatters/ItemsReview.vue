<template>
  <div class="Items_review">
    <div class="Items_review_content">
      <div class="Items_review_button">
        <div>
          <el-button type="primary" round>未批阅</el-button>
          <el-button class="afterApproval" round>已批阅</el-button>
        </div>

        <el-button class="back" round>审批</el-button>
      </div>
      <div class="all_table">
        <div class="table_tatil">事项批阅</div>
        <div>
          <template>
            <el-table :data="tableData" stripe style="width: 100%" @row-click="toDital">
              <el-table-column type="selection" width="55" align="center"></el-table-column>
              <el-table-column prop="date" label="督办事项" width="180" align="center"></el-table-column>
              <el-table-column prop="name" label="期数" width="180" align="center"></el-table-column>
              <el-table-column prop="name" label="项目执行人" width="180" align="center"></el-table-column>
              <el-table-column prop="address" label="时间" align="center"></el-table-column>
              <el-table-column prop="address" label="操作" align="center">
                <template slot-scope="scope">
                  <el-button
                    class="notThrough_button"
                    round
                    @click.stop="updatTwodeparm(scope.row)"
                  >写评语</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
        <div class="page_number">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          ></el-pagination>
        </div>
        <div class="dialog_sytle">
          <el-dialog title="评价" width="36%" :visible.sync="dialogTableVisibleAdd">
            <el-form ref="form" :model="sizeForm" label-width="43px">
              <el-form-item label="标题" class="selete_person">
                <el-input v-model="sizeForm.name"></el-input>
              </el-form-item>
              <el-form-item label="评语">
                <el-input v-model="sizeForm.report" type="textarea" :rows="4"></el-input>
              </el-form-item>
              <div class="socre">
                <el-rate
                  v-model="sizeForm.value"
                  show-score
                  :allow-half="true"
                  text-color="#ff9900"
                  @change="changeNumber"
                  :score-template="tempVal"
                ></el-rate>
              </div>
            </el-form>
            <div class="foot_button">
              <el-button round>确定</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>
 

<script>
export default {
  data() {
    return {
      currentPage4: 4,
      dialogTableVisibleAdd: false,
      sizeForm: {
        name: "name",
        value: 3
      },
      tempVal: "3.0",
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
      ]
    };
  },
  methods: {
    // 数据加零
    changeNumber(score) {
      this.tempVal = score.toFixed(1);
    },
    // 查看详情
    toDital() {
      this.$router.push("/ItemReviewDatil");
    },
    updatTwodeparm(val) {
      this.dialogTableVisibleAdd = true;
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
.Items_review {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 30px;
  .Items_review_content {
    .Items_review_button {
      display: flex;
      justify-content: space-between;
      margin-bottom: 26px;
      .back {
        color: white;
        background-color: #f0914d;
        // border: 1px solid #f99d5a;
      }
      .afterApproval {
        color: #5aa9f9;
        border: 1px solid #5aa9f9;
      }
      .notThrough {
        color: #f0914d;
        border: 1px solid #f0914d;
      }
    }
    .all_table {
      padding: 35px 0 20px 46px;
      background-color: white;
      .table_tatil {
        // padding: 56px 0 0 46px;
        margin-bottom: 20px;
        text-align: left;
        font-family: MicrosoftYaHei;
        font-size: 26px;
      }
      .notThrough_button {
        background-color: #44bda5;
        color: white;
        border: none;
      }

      .page_number {
        margin-top: 15px;
        text-align: right;
      }
      .dialog_sytle {
        .socre /deep/ .el-rate {
          height: 50px;
          line-height: 50px;
        }
        .socre /deep/ .el-icon-star-on:before {
          font-size: 26px;
        }
        .socre /deep/ .el-icon-star-off:before {
          content: "\e797";
          font-size: 26px;
        }
        .socre /deep/ .el-rate__text {
          float: right;
          font-size: 26px;
        }
        .allEvaluation_scorllbar {
          padding: 0 20px;
        }
        .foot_button {
          // padding: 0 20px;

          text-align: right;
          .el-button {
            background-color: #f0914d;
            color: white;
            border: none;
            margin-top: 20px;
          }
        }
        .allEvaluation {
          display: flex;
          border-bottom: 1px solid #e0e0e0;
          margin-bottom: 25px;
          .allEvaluation_left {
            .picture {
              border-radius: 50%;
              background-color: #f0914d;
              text-align: center;
              line-height: 68px;
              width: 68px;
              height: 68px;
              margin-right: 21px;
            }
          }
          .allEvaluation_right {
            .name {
              font-size: 16px;
              margin-bottom: 13px;
            }
            .allEvaluation_right_score {
              position: relative;
              margin-bottom: 15px;
              span {
                color: #f0914d;
                position: absolute;
                top: -24px;
                right: 0;
                font-size: 14px;
              }
            }
            .ditail_text {
              font-family: MicrosoftYaHei;
              font-size: 12px;
              font-weight: normal;
              font-stretch: normal;
              line-height: 20px;
              letter-spacing: 0px;
              color: #333333;
              margin-bottom: 30px;
            }

            .allEvaluation_right_score /deep/ .el-rate {
              position: relative;
            }
            .allEvaluation_right_score /deep/ .el-rate__text {
              position: absolute;
              right: 22px;
              top: -30px;
              font-size: 26px;
            }
          }
        }
      }
      .dialog_sytle /deep/ .el-dialog__header {
        background-color: #f2f2f2;
        padding: 10px 20px;
        height: 46px;
      }
      .dialog_sytle /deep/ .el-icon-close:before {
        position: absolute;
        right: 0;
        top: -4px;
      }
      .dialog_sytle /deep/ .el-input__inner {
        border: none;
        padding: 0;
        font-weight: bold;
      }
      .dialog_sytle /deep/ .el-textarea__inner {
        background-color: #f2f2f2;
        border: none;
      }
    }
  }
}
</style>