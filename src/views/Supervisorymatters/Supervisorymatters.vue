<template>
  <div class="supervisorymatters">
    <div class="supervisorymatters_content">
      <div class="supervisorymatters_button">
        <el-button type="primary" round>导出报表</el-button>
        <el-button class="back" round>返回</el-button>
      </div>
      <div class="all_table">
        <div class="table_tatil">督办事项</div>
        <div>
          <template>
            <el-table :data="tableData" stripe style="width: 100%" @row-click="toSupervisoryView">
              <el-table-column type="selection" width="55" align="center"></el-table-column>
              <el-table-column prop="date" label="督办事项" width="180" align="center"></el-table-column>
              <el-table-column prop="name" label="执行人" width="180" align="center"></el-table-column>
              <el-table-column prop="address" label="开始时间" align="center"></el-table-column>
              <el-table-column prop="address" label="结算日期" align="center"></el-table-column>
              <el-table-column prop="address" label="状态" align="center"></el-table-column>
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
      currentPage4:5,
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
    // 查看详情
    toSupervisoryView(){
      this.$router.push("/SupervisoryView")
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
.supervisorymatters {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 30px;
  .supervisorymatters_content {
    .supervisorymatters_button {
      display: flex;
      justify-content: space-between;
      margin-bottom: 26px;
      .back {
        color: #f99d5a;
        border: 1px solid #f99d5a;
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
      .page_number{
        margin-top:15px; 
        text-align: right;
      }
    }
  }
}
</style>