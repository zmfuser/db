<template>
  <div class="DataKanban">
    <div class="DataKanban_top">
      <i class="el-icon-bell"></i>
      <span>sdfsdf</span>
    </div>
    <div class="DataKanban_content">
      <div class="DataKanban_button">
        <el-button type="primary" class="data_button" round>导出数据</el-button>
      </div>
      <div class="all_table">
        <el-table :data="tableData" style="width: 100%">
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
      <div class="DataKanban_bottom">
        <div class="DataKanban_bottom_left">left</div>
        <div class="DataKanban_bottom_right">rigth</div>
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
    line-height: 35px;
    margin-bottom: 20px;
    .el-icon-bell {
      margin-left: 15px;
    }
    span {
      margin-left: 19px;
    }
  }
  .DataKanban_content {
    padding: 30px 30px 0 30px;
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
      margin-bottom: 30px;
    }
    .DataKanban_bottom{
      width: 100%;
      display: flex;
      .DataKanban_bottom_left{
        width: 35%;
        border: 1px solid rebeccapurple;
      }
      .DataKanban_bottom_right{
        width: 65%;
        border: 1px solid rebeccapurple;
      }
    }
  }
}
</style>