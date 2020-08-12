<template>
  <div class="newneeds">
    <!-- <div class="inquiry_content"></div> -->
    <div class="main">
      <div class="sub">找需求</div>
    
      <div class="form">    
        <h2 class="needtitle">海康威视2001SW0208</h2>     
          <!-- 询价信息 -->
          <div class="team">采购方信息</div>
          <div class="team-con static">
              <div class="d-flex  justify-content-between">
                  <div class="left p-2 classname">联系方式</div>
                  <div class="left p-2 ">
                      <p class="d-flex  justify-content-between" ><div class="shuxing">公司名称</div><div class="shuxingzhi">11111111</div></p>
                      <p class="d-flex  justify-content-between" ><div class="shuxing">联系电话</div><div class="shuxingzhi">11111111</div></p>
                      <p class="d-flex  justify-content-between" ><div class="shuxing">传真</div><div class="shuxingzhi">11111111</div></p>                  
                      </div>
                  <div class="left p-2 ">
                    <p  class="d-flex  justify-content-between"><div class="shuxing">联系人</div><div class="shuxingzhi">11111111</div></p>
                    <p  class="d-flex  justify-content-between"><div class="shuxing">固定电话</div><div class="shuxingzhi">11111111</div></p>
                    <p  class="d-flex  justify-content-between"><div class="shuxing">email</div><div class="shuxingzhi">11111111</div></p>
                   </div>                 
              </div>
          </div>
          <div class="team-con static">
              <div class="d-flex  justify-content-between">
                  <div class="left p-2 classname">商务条款</div>
                  <div class="left p-2 ">
                      <p class="d-flex  justify-content-between" ><div class="shuxing">交易方式</div><div class="shuxingzhi">11111111</div></p>
                      <p class="d-flex  justify-content-between" ><div class="shuxing">发票类型</div><div class="shuxingzhi">11111111</div></p>
                      <p class="d-flex  justify-content-between" ><div class="shuxing">运费承担</div><div class="shuxingzhi">11111111</div></p>                  
                      </div>
                  <div class="left p-2 ">
                    <p  class="d-flex  justify-content-between"><div class="shuxing">付款方式</div><div class="shuxingzhi">11111111</div></p>
                    <p  class="d-flex  justify-content-between"><div class="shuxing">收获地址</div><div class="shuxingzhi">11111111</div></p>
                    <!-- <p  class="d-flex  justify-content-between"><div class="shuxing">email</div><div class="shuxingzhi">11111111</div></p> -->
                   </div>                 
            </div>
          </div>
          <div class="team-con ">
              <div class="d-flex  justify-content-between">
                  <div class="left p-2 classname">采购需求</div>
                  <div class="left p-2 ">
                      <p class="d-flex  justify-content-between" ><div class="shuxing">分类</div><div class="shuxingzhi">11111111</div></p>
                      <p class="d-flex  justify-content-between" ><div class="shuxing">报价截止日期</div><div class="shuxingzhi">11111111</div></p>
                      <p class="d-flex  justify-content-between" ><div class="shuxing">订单紧急程度</div><div class="shuxingzhi">11111111</div></p>                  
                      <p class="d-flex  justify-content-between" ><div class="shuxing">是否DPA</div><div class="shuxingzhi">11111111</div></p>                  
                      <p class="d-flex  justify-content-between" ><div class="shuxing">生产单位</div><div class="shuxingzhi">11111111</div></p>                  
                      <p class="d-flex  justify-content-between" ><div class="shuxing">附件</div><div class="shuxingzhi">11111111</div></p>                  
                      <p class="d-flex  justify-content-between" ><div class="shuxing">需求说明</div><div class="shuxingzhi">11111111</div></p>                  
                      </div>
                  <div class="left p-2 ">
                
                    <p  class="d-flex  justify-content-between"><div class="shuxing">要求到货日期</div><div class="shuxingzhi">11111111</div></p>
                    <p  class="d-flex  justify-content-between"><div class="shuxing">是否复验筛选</div><div class="shuxingzhi">11111111</div></p>
                    <p  class="d-flex  justify-content-between"><div class="shuxing">是否下场验收</div><div class="shuxingzhi">11111111</div></p>
                   </div>                 
              </div>
          </div>
      <el-form ref="form" :model="form" label-width="200px">
          <div class="team">报价信息</div>

          <div class="team-con">
         

            <el-table :data="needtable" style="width: 100%"  >
            <el-table-column
              type="selection"
              width="40" align="center">
            </el-table-column>
            <el-table-column label="产品名称" width="180" align="center">
                <template slot-scope="scope">
                  <span tabletext>海康威视2001SW0208</span>  <el-tag effect="dark" type= "" size="small"> 已报 </el-tag>
                </template>
            </el-table-column>
            <el-table-column label="商品信息" width="260" align="center">
                <template slot-scope="scope">
                  <!-- <el-input v-model="scope.row.name"></el-input> -->
                   <p class="d-flex  justify-content-between" ><span class="tabletext">物资编码：</span><span class="tabletext">20-01-SW-02-08</span></p>
                   <p class="d-flex  justify-content-between" ><span class="tabletext">期望单价（元）：</span><span class="tabletext">11111111</span></p>
                   <p class="d-flex  justify-content-between" ><span class="tabletext">需求数量（批）：</span><span class="tabletext">11111111</span></p>
                   <p class="d-flex  justify-content-between" ><span class="tabletext">物资描述：</span><span class="tabletext">海康威视2001SW0208</span></p>
                </template>
            </el-table-column>

            <el-table-column label="报价信息" width="200" align="center">
                <template slot-scope="scope">
                  <!-- <el-input v-model="scope.row.count"></el-input> -->
                   <p class="d-flex  justify-content-between" ><span class="tabletext">单价含税（元）：</span><span class="tabletext">20-01-S</span></p>
                   <p class="d-flex  justify-content-between" ><span class="tabletext">数量（批）：</span><span class="tabletext">11111111</span></p>
                   <p class="d-flex  justify-content-between" ><span class="tabletext">税率(%)：</span><span class="tabletext">11111111</span></p>

                </template>
            </el-table-column>
            <el-table-column label="小计" width="160" align="center">
                <template slot-scope="scope">
                  <!-- <el-input v-model="scope.row.unit"></el-input> -->
                   <p class="d-flex  justify-content-between" ><span class="tabletext">含税小计：</span><span class="tabletext">11111111</span><span class="tabletext">元</span></p>
                </template>
            </el-table-column>
          
        
            <el-table-column label="操作" align="center"  >
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleDelete(scope.$index, scope.row)"
                  >报价</el-button>
                </template>
            </el-table-column>
          </el-table>
            <div class="sumarry">合计总价:<span class="sumarryspan">{{Summary}}</span>元</div>
            <!-- 表单 -->
            <el-form-item label=" 报价说明" prop="resource" label-width="150px">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="textarea">
              </el-input>
            </el-form-item>
            <el-form-item label="附件" prop="resource" label-width="150px">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleChange"
                :file-list="fileList"
              >
                <el-button size="small" type="primary">添加附件</el-button>
                <div slot="tip" class="el-upload__tip">(支持PDF、DOC、DOCX、PNG、JPG、XLS、XLSX格式，文件大小不能超过100M)</div>
              </el-upload>
            </el-form-item>
            <!-- <el-form-item label="上传图片" prop="resource" label-width="150px">
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
            </el-form-item> -->
            <!-- <el-form-item label="需求详情描述" prop="resource" label-width="150px">
              <vue-quill-editor></vue-quill-editor>
            </el-form-item> -->
            <el-form-item label="报价有效期" prop="name" label-width="150px">
             <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
             <el-form-item label="预计交货日期" prop="name" label-width="150px">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
             <el-form-item label="本单位报价单编号" prop="name" label-width="150px">
              <el-input
                type="text"
                placeholder="请输入内容"
                v-model="text"
                maxlength="20"
                show-word-limit
              ></el-input>
            </el-form-item>

          </div>


          <div class="team">联系方式</div>
          <div class="team-con">
            
              <el-form-item label="报价企业" prop="name" label-width="150px">
                <el-input
                  type="text"
                  placeholder="请输入内容"
                  v-model="text"
                  maxlength="20"
                  show-word-limit
                ></el-input>
              </el-form-item>
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
              <el-form-item label="固定电话" prop="name" label-width="150px">
                <el-input
                  type="text"
                  placeholder="请输入内容"
                  v-model="text"
                  maxlength="30"
                  show-word-limit
                ></el-input>
              </el-form-item>
              <el-form-item label="传真" prop="name" label-width="150px">
                <el-input
                  type="text"
                  placeholder="请输入内容"
                  v-model="text"
                  maxlength="50"
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
               <el-form-item label="联系地址" prop="name" label-width="150px">
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
 
              <div class="btn">
               <!-- <el-button type="primary" @click="onSubmit">预览</el-button> -->
               <el-button type="primary" @click="onSubmit">确认报价</el-button>
               <!-- <el-button type="success" @click="onSubmit">发布</el-button> -->
               <el-button type="info" @click="onSubmit">重置</el-button>
               <el-button type="info" @click="onSubmit">关闭</el-button>
              </div>
      
           
          </div>

       </el-form>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose">

      <el-form ref="dialogform" :model="dialogform" label-width="120px">
      <el-form-item label="单价（元）：">
         <el-input v-model="dialogform.name"></el-input>
     </el-form-item>
      <el-form-item label="">
    <el-checkbox-group v-model="dialogform.type">
      <el-checkbox label="单价含税" name="type"></el-checkbox>
      <el-checkbox label="折扣报价" name="type"></el-checkbox>
 
    </el-checkbox-group>
  </el-form-item>
      <el-form-item label="折扣率（%）：">
         <el-input v-model="dialogform.name"></el-input>
     </el-form-item>
  
   <el-form-item label="折扣单价（元）:">
         <el-input v-model="dialogform.name"></el-input>
     </el-form-item>
  
   <el-form-item label=" 报价数量（台）:">
         <el-input v-model="dialogform.name"></el-input>
     </el-form-item>
  
   <el-form-item label=" 税率（%）：">
         <el-input v-model="dialogform.name"></el-input>
     </el-form-item>
  
   
    <el-form-item label="报价备注：">
      <el-input type="textarea" v-model="dialogform.desc"></el-input>
    </el-form-item>
    <div class="total">小计：353.98元</div>
    <div class="total">含税小计：400.00元</div>
  
           <div class="btn"> 
             <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              <el-button @click="dialogVisible = false">取 消</el-button>    
           </div>
 
  </el-form>
     
    </el-dialog>
  </div>
</template>

<script>
import TextEdit from "../../components/tools/TextEdit";
import choosearea from "../../components/tools/choosearea";
export default {
  name: "QuotedPrice",
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
      dialogVisible:true,

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

      dialogform:{
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
      },


    
    

      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: "",
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
    onSubmit() {
        console.log('submit!');
    },
    handleClose(){
      this.dialogVisible=false
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
  margin: 20px auto;
}


.needtitle{
line-height: 60px;
}

.team {
  font-weight: bold;
  line-height: 60px;
  padding-left: 10px;
  border-bottom: 1px solid #eeeeee;
  width: 80%;
  margin: 20px auto;
}

.form {
  background-color: white;
  padding: 20px;
}

.team-con {
  width: 80%;
  margin:  auto;
  padding: 20px 0;
  // border-bottom: 1px solid #eeeeee;

}
.static{
  border-bottom: 1px solid #eeeeee;
}
.noborder{
     border-bottom:none
}

.left{
    width: 40%;
    
}
.left:nth-child(3n+1){
    width: 20%;
}
.sumarry {
  // color: orangered;
  font-size: 16px;
  // font-weight: bold;
  text-align: right;
  // padding-right: 150px;
  line-height: 40px;
}

.sumarryspan{
  color: red;
line-height: 100px;
}

 .btn{
width: 40%;
margin: auto;
}



.classname{
    color: #999;
    font-size: 16px;

}

.shuxing{
    color: #999;
    font-size: 12px;   
     margin-right: 10px;
    text-align: right;
    width: 30%;
    display: inline-block;
    line-height: 30px;
}

.shuxingzhi{
 font-size: 12px;   
  width: 60%;
   display: inline-block;
    line-height: 30px;
    text-align: left;
}

.tabletext{
    font-size: 12px;

}

.total{
  text-align: center;
  line-height: 30px;
}
</style>