<template>
  <div class="ReportingMattersDital">
    <div class="ReportingMattersDital_content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="92px">
        <el-form-item label="标题" class="tital_inpute">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="期数" class="tital_inpute">
          <el-input v-model="ruleForm.qishu"></el-input>
        </el-form-item>
        <el-form-item label="工作汇报" class="background">
          <el-input v-model="ruleForm.name" type="textarea" :rows="4"></el-input>
        </el-form-item>
        <el-form-item label="工作总结" class="background">
          <el-input v-model="ruleForm.name" type="textarea" :rows="4"></el-input>
        </el-form-item>
        <el-form-item label="参与人员">
          <div class="participants">
            <div>参与人员</div>
            <i class="el-icon-circle-plus-outline"></i>
          </div>
        </el-form-item>

        <div class="report_number"></div>
        <el-form-item label="附件" class="upload_file">
          <div>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
        </el-form-item>

        <el-form-item class="submi_button">
          <el-button type="primary" @click="submitForm('ruleForm')" round>提交</el-button>
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
        name: "标题",
        region: "",
        qishu: "有参数显示这一行反之隐藏",
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
.ReportingMattersDital {
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 30px;
  .ReportingMattersDital_content {
    .participants {
            padding-left: 35px;
      height: 43px;
      background-color: #ffffff;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .participants /deep/ .el-icon-circle-plus-outline:before {
      font-size: 30px;
      padding: 0 20px;
    }
    .tital_inpute /deep/ .el-input__inner {
      background-color: #f0f0f0;
      margin-left: 20px;
      border: none;
    }
    width: 100%;

    .background /deep/ .el-textarea__inner {
      border: none;
      background-color: #fffaf7;
    }
    .background /deep/ .el-textarea {
      padding: 20px;
      background-color: #ffffff;
      border-radius: 4px;
    }
    .upload_file {
      margin: 29px 10px 51px 0;
      text-align: left;
    }
    .submi_button {
      .el-button--primary {
        width: 150px;
        border: none;
        background-color: #f99d5a;
      }
    }
    // border:1px solid red;
  }
}
</style>