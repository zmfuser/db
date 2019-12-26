<template>
  <div class="delaymatters">
    <div class="delaymatters_content">
      <div class="all_table">
        <div class="table_tatil">汇报事项</div>
        <div>
          <template>
            <el-table :data="tableData" stripe style="width: 100%">
              <el-table-column prop="date" label="督办事项" width="180" align="center"></el-table-column>
              <el-table-column prop="name" label="期数" width="180" align="center"></el-table-column>
              <el-table-column prop="address" label="项目执行人" align="center"></el-table-column>
              <el-table-column prop="address" label="汇报时间" align="center"></el-table-column>
              <el-table-column prop="address" label="操作" align="center">
                <template slot-scope="scope">
                  <el-button  class="cb_button" round  @click="updatTwodeparm(scope.row)">汇报</el-button>
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
    </div>
  </div>
</template>
 

<script>
export default {
  data() {
    return {
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
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    updatTwodeparm(){},
  }
};
</script>
<style lang="less" scoped>
.delaymatters {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 30px;
  .delaymatters_content {
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
      .page_number {
        margin-top: 15px;
        text-align: right;
      }
    }
    .cb_button{
        color: white;
        background-color: #b158f5;
    }
  }
}
</style>