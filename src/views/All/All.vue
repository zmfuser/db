<template>
  <div class="all">
    <div class="all_content">
      <div class="all_button">
        <div>
          <el-button type="danger" round>删除</el-button>
          <el-button type="primary" @click="setAdmin" round>设置管理员</el-button>
        </div>
      </div>
      <div class="all_table">
        <div class="table_tatil">全部</div>
        <div>
          <template>
            <el-table :data="tableData" stripe style="width: 100%" @row-click="toDital">
              <el-table-column type="selection" width="55" align="center"></el-table-column>
              <el-table-column prop="date" label="督办事项" width="180" align="center"></el-table-column>
              <el-table-column prop="name" label="项目执行人" width="180" align="center"></el-table-column>
              <el-table-column prop="address" label="开始时间" align="center"></el-table-column>
              <el-table-column prop="address" label="结束时间" align="center"></el-table-column>
              <el-table-column prop="address" label="操作" align="center">
                <template slot-scope="scope">
                  <el-button class="notThrough_button" round @click="updatTwodeparm(scope.row)">编辑</el-button>
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
      </div>
      <div class="dialog_sytle">
        <el-dialog title="新增" width="36%" :visible.sync="dialogTableVisibleAdd">
          <!-- <div style="margin: 15px 0;"></div> -->
          <div>
            <el-form ref="form" :model="sizeForm" label-width="68px">
              <el-form-item label="选择人员" class="selete_person">
                <el-input v-model="sizeForm.name" placeholder="请输入人名" style="background:#f2f2f2"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div class="all_person_item">
            <div class="pserson_item">
              <div class="pserson_item_name">张三</div>
              <div class="pserson_item_name_icon">
                <i class="el-icon-close"></i>
              </div>
            </div>
            <div class="pserson_item">
              <div class="pserson_item_name">张三</div>
              <div class="pserson_item_name_icon">
                <i class="el-icon-close"></i>
              </div>
            </div>
            <div class="pserson_item">
              <div class="pserson_item_name">张三</div>
              <div class="pserson_item_name_icon">
                <i class="el-icon-close"></i>
              </div>
            </div>
            <div class="pserson_item">
              <div class="pserson_item_name">张三</div>
              <div class="pserson_item_name_icon">
                <i class="el-icon-close"></i>
              </div>
            </div>
            <div class="pserson_item">
              <div class="pserson_item_name">张三</div>
              <div class="pserson_item_name_icon">
                <i class="el-icon-close"></i>
              </div>
            </div>
          </div>
          <div class="dialog_foot">
            <div></div>
            <div>
              <el-button class="dialog_foot_button" size="medium" round>返回上一级</el-button>
              <el-button class="dialog_foot_button" size="medium" round>完成</el-button>
            </div>
          </div>
        </el-dialog>
      </div>
      <div class="dialog_sytle">
        <el-dialog title="设置管理员" width="36%" :visible.sync="dialogTableVisible">
          <!-- <div style="margin: 15px 0;"></div> -->
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox
              class="checkbox_width"
              v-for="city in cities"
              :label="city"
              :key="city"
            >{{city}}</el-checkbox>
          </el-checkbox-group>
          <div class="dialog_foot">
            <div>
              <el-checkbox
                :indeterminate="isIndeterminate"
                v-model="checkAll"
                @change="handleCheckAllChange"
              >全选</el-checkbox>
            </div>

            <div>
              <el-button class="dialog_foot_button" size="medium" @click="addPerpson" round>新增</el-button>
              <el-button class="dialog_foot_button" size="medium" round>删除</el-button>
            </div>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
 

<script>
const cityOptions = [
  "a海北",
  "北京北",
  "广州北",
  "上海北",
  "北京",
  "广州",
  "深圳"
];
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogTableVisibleAdd: false,
      currentPage4: 4,
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
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      sizeForm: {}
    };
  },
  methods: {
    // 查看详情
    toDital(){
      this.$router.push("/PublicDetails")
    },
    //设置管理员
    setAdmin() {
      this.dialogTableVisible = true;
    },
    //新增
    addPerpson() {
      this.dialogTableVisibleAdd = true;
    },
    updatTwodeparm(val) {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>
<style lang="less" scoped>
.all {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 30px;
  .all_content {
    .all_button {
      display: flex;
      justify-content: space-between;
      margin-bottom: 26px;
      .back {
        color: white;
        background-color: #f0914d;
        // border: 1px solid #f99d5a;
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
        background-color: #f0934d;
        color: white;
        border: none;
      }

      .page_number {
        margin-top: 15px;
        text-align: right;
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
    .dialog_sytle /deep/ .el-dialog__title {
      font-size: 14px;
      color: #303133;
    }
   
    .dialog_sytle /deep/ .el-dialog__body {
      padding: 30px 20px 0 20px;
    }
    .dialog_sytle {
      .checkbox_width {
        text-align: left;
        margin-bottom: 36px;
        width: 17%;
      }
      .dialog_foot {
        padding: 21px 0 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #f2f2f2;
      }
      .dialog_foot_button {
        color: #f0934d;
        border: 1px solid #f0934d;
      }
      .selete_person /deep/ .el-input__inner {
        background-color: #f2f2f2;
      }
      .all_person_item {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          
        .pserson_item {
          box-sizing: border-box;
          width: 85px;
            height: 40px;
          border-radius: 10px;
          border: 1px solid #cccccc;
          display: flex;
            margin-bottom: 20px;
          text-align: center;
          align-items: center;
        //   margin-right: 26px;
          .pserson_item_name {
            width: 60%;
          }
          .pserson_item_name_icon {
            width: 40%;
          }
          span {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>