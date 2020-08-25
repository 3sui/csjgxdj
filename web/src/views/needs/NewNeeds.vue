<template>
  <div class="newneeds">
    <div class="inquiry_content"></div>
    <div class="main">
      <div class="sub">发布需求</div>

      <div class="form">
        <el-form :model="ruleForm" ref="ruleForm">
          <!-- 询价信息 -->
          <div class="team">询价信息</div>
          <div class="team-con">
            <el-form-item label="选择分类" prop="name" label-width="150px">
              <el-cascader :options="classoptions" clearable></el-cascader>
            </el-form-item>
            <el-form-item label="询价主题" prop="name" label-width="150px">
              <el-input
                type="text"
                placeholder="请输入内容"
                v-model="text"
                maxlength="20"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item prop="dateend" label="询价截止日期" label-width="150px">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
            <el-form-item prop="dategive" label="要求交货日期" label-width="150px">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </div>

          <div class="team">询价对象信息</div>

          <div class="team-con">
            <el-row>
              <el-button type="primary" plain @click="addneedtable">添加询价对象</el-button>
              <el-button type="primary" plain>导入询价对象</el-button>
            </el-row>

            <el-table :data="needtable" empty-text="请添加" style="width: 100%">
              <el-table-column label="对象名称" width="180" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.name"></el-input>
                </template>
              </el-table-column>

              <el-table-column label="需求数量" width="100" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.count"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="计量单位" width="100" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.unit"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="要求备注" width="340" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.detail"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="期望单价" width="120" align="center">
                <template slot-scope="scope">
                  <el-input v-model="scope.row.price"></el-input>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="sumarry">期望总价: {{Summary}}元</div>
            <el-form-item label="是否显示期望报价" prop="resource" label-width="150px">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="否"></el-radio>
                <el-radio label="是"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="附件" prop="resource" label-width="150px">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">添加附件</el-button>
                <div slot="tip" class="el-upload__tip">(最多可添加1个附件，大小不超过100M,格式限Word、excel、PDF)</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="上传图片" prop="resource" label-width="150px">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">添加图片</el-button>
                <div
                  slot="tip"
                  class="el-upload__tip"
                >(最多可上传5张图片，建议400*400像素，大小不超过2M，格式限gif、jpeg、jpg、bmp、png)</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="需求详情描述" prop="resource" label-width="150px">
              <vue-quill-editor></vue-quill-editor>
            </el-form-item>
            <el-form-item label="需求关键字" prop="name" label-width="150px">
              <el-input
                type="text"
                placeholder="请输入内容"
                v-model="text"
                maxlength="20"
                show-word-limit
              ></el-input>
            </el-form-item>
          </div>
          <div class="team">商务条款</div>
          <div class="team-con">
            <el-form-item label="商务条款" prop="type" label-width="150px">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="货到付款" name="type"></el-checkbox>
                <el-checkbox label="预付款" name="type"></el-checkbox>
                <el-checkbox label="其他" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="付款方式" prop="resource" label-width="150px">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="支票"></el-radio>
                <el-radio label="汇票"></el-radio>
                <el-radio label="本票"></el-radio>
                <el-radio label="现金"></el-radio>
                <el-radio label="银行转账"></el-radio>
                <el-radio label="其他"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="发票类型" prop="resource" label-width="150px">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="增值税发票"></el-radio>
                <el-radio label="普通发票"></el-radio>
                <el-radio label="无需发票"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="承运方" prop="resource" label-width="150px">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="供应方"></el-radio>
                <el-radio label="采购方"></el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item label="收货地址" prop="resource" label-width="150px">
              <choosearea></choosearea>
            </el-form-item>
            <el-form-item label="详细地址" prop="name" label-width="150px">
              <el-input
                type="text"
                placeholder="请输入内容"
                v-model="text"
                maxlength="20"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item label="交付类型" prop="resource" label-width="150px">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="一次性交付"></el-radio>
                <el-radio label="分批交付"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="交付对象" prop="name" label-width="150px">
              <el-input
                type="text"
                placeholder="请输入内容"
                v-model="text"
                maxlength="30"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item label="交付要求说明" prop="name" label-width="150px">
              <el-input
                type="text"
                placeholder="请输入内容"
                v-model="text"
                maxlength="50"
                show-word-limit
              ></el-input>
            </el-form-item>
          </div>

          <div class="team">发布方式</div>
          <div class="team-con">
            <!-- </el-form-item> -->
            <el-form-item label="发布方式" prop="resource" label-width="150px">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="全网发布"></el-radio>
                <el-radio label="邀请供应商"></el-radio>
              </el-radio-group>
            </el-form-item>
          </div>

          <div class="team">联系方式</div>
          <div class="team-con">
            <el-form-item label="联系人" prop="name" label-width="150px">
              <el-input
                type="text"
                placeholder="请输入内容"
                v-model="text"
                maxlength="30"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item label="联系方式" prop="name" label-width="150px">
              <el-input
                type="text"
                placeholder="请输入内容"
                v-model="text"
                maxlength="30"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item label="email" prop="name" label-width="150px">
              <el-input
                type="text"
                placeholder="请输入内容"
                v-model="text"
                maxlength="30"
                show-word-limit
              ></el-input>
            </el-form-item>
          </div>
          <div class="team-con">
            <el-form-item>
              <div class="btn">
                <el-button type="primary" @click="onSubmit">预览</el-button>
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button type="success" @click="onSubmit">发布</el-button>
                <el-button type="info" @click="onSubmit">取消</el-button>
              </div>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import TextEdit from "../../components/tools/TextEdit";
import choosearea from "../../components/tools/choosearea";
export default {
  name: "NewNeeds",
  components: {
    "vue-quill-editor": TextEdit, //富文本编辑器
    choosearea: choosearea,
  },
  data() {
    return {
      classoptions: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
          ],
        },
        {
          value: "daohang",
          label: "导航",
          children: [
            {
              value: "cexiangdaohang",
              label: "侧向导航",
            },
            {
              value: "dingbudaohang",
              label: "顶部导航",
            },
          ],
        },
      ],

      needtable: [
        {
          name: "棉花",
          count: 10,
          unit: "吨",
          detail: "顺丰发货，10天内到货",
          price: "10000",
        },
        {
          name: "钢铁",
          count: 100,
          unit: "吨",
          detail: "10天内到货",
          price: "100000",
        },
      ],
      // Sumarry:this.getSummary,

      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: [],
    };
  },
  computed: {
    Summary: {
      get() {
        let sum = 0;
        this.needtable.forEach((element) => {
          sum += element.price * element.count;
        });
        return sum;
      },
    },
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
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

    handleDelete(index, row) {
      console.log(index, row);
    },
    addneedtable() {
      let item = {
        name: "",
        count: null,
        unit: "",
        detail: "",
        price: null,
      };
      this.needtable.push(item);
    },
  },
};
</script>


<style scoped lang="scss">
.inquiry_content {
  width: 100%;
  height: 200px;
  // width: 1200px;
  margin: 0 auto;
  background: url(http://cocenter.casicloud.com/pages/cloud1.0/image/inquiry_banner.jpg)
    no-repeat;
  padding-top: 160px;
  background-size: cover;
  margin-bottom: 20px;
}

.main {
  width: 1200px;
  margin: auto;
}

.main .sub {
  padding-left: 10px;
}
.sub {
  height: 60px;
  line-height: 60px;
  background-color: white;
  font-size: 20px;
  margin-bottom: 20px;
}

.team {
  font-weight: bold;
  line-height: 40px;
  padding-left: 10px;
}

.form {
  background-color: white;
}

.team-con {
  width: 80%;
  margin: auto;
  padding: 20px 0;
}

.sumarry {
  color: orangered;
  font-size: 16px;
  font-weight: bold;
  text-align: right;
  padding-right: 150px;
  line-height: 40px;
}

.team-con .btn {
  width: 40%;
  margin: auto;
}
</style>