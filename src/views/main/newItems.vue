<template>
  <div class="newItem">
    <div class="newItem_content">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="92px">
        <el-form-item label="标题" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="正文" prop="name">
          <el-input v-model="ruleForm.name" type="textarea" :rows="4"></el-input>
        </el-form-item>
        <el-row class="row_item">
          <el-col :span="12">
            <el-form-item label="执行部门" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="协办部门" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="抄送人" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="开始时候" prop="date2">
              <el-date-picker v-model="ruleForm.date2" type="date" placeholder="选择日期"></el-date-picker>
              <!-- <el-input v-model="ruleForm.name"></el-input> -->
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="执行负责人" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="审批人" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="抄送人" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="结束时间" prop="date1">
              <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期"></el-date-picker>
              <!-- <el-input v-model="ruleForm.name"></el-input> -->
            </el-form-item>
          </el-col>
        </el-row>
        <div class="report_number">
          <div class="text_button">
            <span class="text">汇报期数 &nbsp; &nbsp; &nbsp; 2</span>
            <el-button round type="primary" @click="addNper">添加</el-button>
          </div>

          <el-row>
            <el-col :span="12" v-for="(item, index) in ruleForm.qishu">
              <el-form-item
                style="text-align:left"
                :label="item.lable"
                :key="index"
                :prop="'qishu.' + index + '.date'"
                :rules="{
                  required: true, message: '期数不能为空', trigger: 'blur'
              }"
              >
                <el-date-picker v-model="item.date" type="date" placeholder="选择日期"></el-date-picker>
                <i class="el-icon-remove" v-if="index>0" @click="deleteNper(index)"></i>
              </el-form-item>
            </el-col>
           
          </el-row>
        </div>
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
import { toChinesNum } from "../../tools/tools.js";
export default {
  data() {
    return {
      value2: "",
      value1: "",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        qishu: [
          {
            date: "",
            lable: "一期"
          },
         
        ]
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 50, message: "长度在 3 到 5 个字符", trigger: "blur" }
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
        ]
      },
      fileList: []
    };
  },
  methods: {
    // 增加期数
    addNper(){
      this.ruleForm.qishu.push({
        date:"",
        lable:toChinesNum(this.ruleForm.qishu.length+1)+"期",

      })
    },
    // 删除期数
    deleteNper(index){
      this.ruleForm.qishu.splice(index,1)
      this.ruleForm.qishu.forEach(function(item,index){
        item.lable=toChinesNum(index+1)+"期"
      })
    },
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
    .row_item /deep/ .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 100%;
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