<template>
  <div class="newItem">
    <div class="newItem_content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="92px">
        <el-form-item label="标题">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="工作汇报">
          <el-input v-model="ruleForm.report" type="textarea" :rows="4"></el-input>
        </el-form-item>
        <el-form-item label="工作总结">
          <el-input v-model="ruleForm.name" type="textarea" :rows="4"></el-input>
        </el-form-item>
        <el-form-item label="参与人员" class="participants">
          <div>王富贵、张三</div>
        </el-form-item>

        <el-form-item label="附件" class="upload_file">
          <div class="base_file">
              <div class="base_file_item"><span>今日工作计划产出物.word</span> <i class="el-icon-close"></i> </div>
              <div class="base_file_item"><span>今日工作计划产出物.word</span> <i class="el-icon-close"></i> </div>
          </div>
         
        </el-form-item>

        <el-form-item class="submi_button">
          <el-button type="primary" @click="submitForm('ruleForm')" round>写评语</el-button>
          <el-button class="close_button" @click="submitForm('ruleForm')" round>关闭</el-button>
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
        report: "是综合性'设计师社区'，2006年8月创立于北京。站酷网聚集了中国部分设计师、艺术院校师生、潮流艺术家等年轻创意设计人群。现有注册设计师/艺术家200万，日上传原创作品6000余张，3年累计上传原创作品超过350万张。'站酷网'一直致力于促进设计师之间的交流与互励，并致力于将创意作品进行更广泛的传播与推介，提高中国原创设计的影响力。同时，站酷网还为设计师与企业搭建互相促进的桥梁，帮助优秀企业与优秀设计人才更好对接。让更多的创意成为社会进步的动力，是站酷网的奋斗理念。",
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
    
    .participants {
      text-align: left;
      div{
      padding-left:15px; 

      }
    }
    .report_number {
      padding: 34px 20px 30px 0;
      background-color: white;
      border-radius: 10px;
      .text_button {
        display: flex;
        justify-content: space-between;
        margin-bottom: 29px;
      }
      .text {
        margin-left: 29px;
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
    .report_number /deep/ .el-input__inner {
      background-color: #f0f0f0;
    }
    .upload_file {
       

        .base_file{
            width: 100%;
            display: flex;
            justify-content: flex-start;
            margin-right: 30px;
            padding: 0 15px;
            height: 40px;
            text-align: center;
                height: 134px;
           
            .base_file_item{
                display: flex;
                align-items: center;
                height: 20px;
                background-color: #ffffff;
                margin-right: 30px;
                padding:30px;
              border-radius: 5px;
              span{
                  margin-right: 23px;
              }
            }
        }
    //   margin: 29px 10px 51px 0;
      text-align: left;
    }
    .submi_button {
      .el-button--primary {
        width: 150px;
        border: none;
        background-color: #f99d5a;
      }
      .close_button{
          width: 150px;
          color: #f99d5a;
            border: 1px solid #f99d5a;
      }
    }
    // border:1px solid red;
  }
  .newItem_content /deep/ .el-input__inner{
        background-color: #f5f5f300;
        border: none;
    }
  .newItem_content /deep/ .el-textarea__inner{
        background-color: #f5f5f300;
        border: none;
    }
}
</style>