<template>
  <div class="examination_atters">
    <div class="examination_atters_content">
      <div class="examination_atters_button">
          <div>
              <el-button type="primary" round>未审批</el-button>
              <el-button class="afterApproval" round>已审批</el-button>
              <el-button class="notThrough" round>不通过</el-button>
              <el-button class="notThrough" round>通过</el-button>
          </div>

        <el-button class="back" round @click="examinate">批阅</el-button>
      </div>
      <div class="all_table">
        <div class="table_tatil">事项审批</div>
        <div>
          <template>
            <el-table :data="tableData" stripe style="width: 100%"  @row-click="toDital">
              <el-table-column type="selection" width="55" align="center"></el-table-column>
              <el-table-column prop="date" label="督办事项" width="180" align="center"></el-table-column>
              <el-table-column prop="name" label="项目执行人" width="180" align="center"></el-table-column>
              <el-table-column prop="address" label="时间" align="center"></el-table-column>
              <el-table-column prop="address" label="结算日期" align="center"></el-table-column>
              <el-table-column prop="address" label="操作" align="center">
                <template slot-scope="scope">
                  <el-button  class="notThrough_button" round  @click="updatTwodeparm(scope.row)">不通过</el-button>
                  <el-button  class="through_button" round  @click="updatTwodeparm(scope.row)">通过</el-button>
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
      ]
    };
  },
  methods: {
    // 查看详情
    toDital(){
      // this.$router.push("/PublicDetails")
      this.$router.push({
        name:"PublicDetails",
        query:{
          note:"详情页面没有期数"
        }
      })
    },
    examinate(){
      this.$router.push("/ItemsReview")
    },
    updatTwodeparm(val) {
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
.examination_atters {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 30px;
  .examination_atters_content {
    .examination_atters_button {
      display: flex;
      justify-content: space-between;
      margin-bottom: 26px;
      .back {
          color: white;
        background-color: #44bda5;
        // border: 1px solid #f99d5a;
      }
      .afterApproval{
          color: #5aa9f9;
        border: 1px solid #5aa9f9;
          
      }
      .notThrough{
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
      .notThrough_button{
            background-color: #f0914d;
            color: white;
            border: none;
        }
      .through_button{
            color: #f0914d;
            border: 1px solid #f0914d
        }
      .page_number{
        margin-top:15px; 
        text-align: right;
      }
    }
  }
}
</style>