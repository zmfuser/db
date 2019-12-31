<template>
  <div class="newItem">
    <div class="newItem_content">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="92px"
      >
        <el-form-item label="标题" >
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="正文" >
          <el-input v-model="ruleForm.name" type="textarea" :rows="4"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="执行部门" >
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="协办部门" >
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="审批人">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="开始时候" >
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="执行负责人" >
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="审批人" >
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="抄送人" >
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="结束时间" >
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="line"></div>
        <div class="report_number">
          <div class="text_button">
            <span class="text">汇报期数 &nbsp; &nbsp; &nbsp; 2</span>
            <!-- <el-button  round type="primary">添加</el-button> -->
          </div>

          <el-row>
            <el-col :span="12">
              <el-form-item label="一期">
                <el-date-picker
                  style="margin-left:-45px"
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="二期">
                <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
              </el-form-item>
            </el-col>
           
          </el-row>
        </div>
        <!-- nextnext -->
        <el-form-item label="附件" class="upload_file" >
            <div >
         
        </div>
        </el-form-item>
        

        <el-form-item class="submi_button">
          <el-button type="primary" @click="submitForm('ruleForm')" round>通过</el-button>
          <el-button class="un_through" @click="submitForm('ruleForm')" round>不通过</el-button>
       
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      ruleForm: {
        name: "企业增长总值",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      fileList: []
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>
<style lang="less" scoped>
.newItem {
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 30px;
  .newItem_content {
    width: 100%;
    .report_number {
      // border-top: 1px solid #cccccc;
      padding: 34px 20px 30px 0;
      // background-color: white;
      // border-radius: 10px;
      .text_button {
        display: flex;
        justify-content: space-between;
        margin-bottom: 29px;
      }
      .text {
          margin-left: -14px;
        font-family: MicrosoftYaHei-Bold;
        font-size: 24px;
      }
      .el-date-editor.el-input,
      .el-date-editor.el-input__inner {
        width: 385px;
      }
      .el-icon-remove {
        font-size: 26px;
        margin-top: 5px;
        color: #f99d5a;
        margin-left: 20px;
      }
    }
    .report_number /deep/ .el-input__inner{
      background-color: #f0f0f0
    }
    .upload_file{
        margin: 29px 10px 51px 0;
        text-align: left;
    }
    .submi_button{
        .el-button--primary{
            width: 150px;
            border: none;
            background-color: #f99d5a
        }
        .un_through{
          width: 150px;
          color: #f99d5a;
          border: 1px solid #f99d5a;
        }
    }
    // border:1px solid red;
  }
  .newItem_content /deep/ .el-input__inner {
    background-color: #f0f0f0;
    border: none;
  }
  .newItem_content /deep/ .el-textarea__inner {
    background-color: #f0f0f0;
    border: none;
  }
}
</style>